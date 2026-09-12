/**
 * Main Application Orchestrator for HSK2 Web App
 */

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".lesson-container")) {
    initLessonPage();
  } else if (document.querySelector(".home-container") || document.querySelector(".lesson-grid")) {
    initHomePage();
  }
});

const LESSON_STEPS = [
  { id: "vocab", index: "01", label: "Từ mới", summary: "Học từ vựng, nghe phát âm và ôn bằng flashcard." },
  { id: "grammar", index: "02", label: "Ngữ pháp", summary: "Nắm cấu trúc chính và ví dụ ứng dụng trong bài." },
  { id: "practice", index: "03", label: "Luyện tập", summary: "Chơi các bài luyện ngắn để nhớ từ và phản xạ nhanh hơn." },
  { id: "exercises", index: "04", label: "Bài tập", summary: "Làm bài tổng hợp để kiểm tra mức độ hiểu bài." }
];

function initHomePage() {
  renderLessonGrid();
}

async function initLessonPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const lessonId = parseInt(urlParams.get("id") || "1", 10);
  const lessonMeta = getLessonMeta(lessonId);
  ensureLessonStickyShell();
  initCompactLessonHeader();

  if (!lessonMeta || lessonMeta.status !== "ready") {
    showLessonUnavailable(lessonId, lessonMeta);
    return;
  }

  try {
    const lessonData = await loadLessonData(lessonId);
    loadLesson(lessonData);
  } catch (err) {
    console.error("Không thể tải dữ liệu bài học:", err);
    document.querySelector(".lesson-container").innerHTML = `
      <div class="card text-center p-30">
        <h2>Không thể tải Bài ${lessonId}</h2>
        <p>Dữ liệu bài học chưa đúng schema UI mới hoặc file chưa sẵn sàng.</p>
        <a href="index.html" class="btn btn-primary mt-15">Về trang chủ</a>
      </div>
    `;
    return;
  }

  activateLessonTab(lessonId, "vocab");
}

function getLessonManifest() {
  return window.HSK2_LESSON_MANIFEST || [];
}

function getLessonMeta(lessonId) {
  return getLessonManifest().find((lesson) => lesson.id === lessonId);
}

function renderLessonGrid() {
  const grid = document.getElementById("lesson-grid");
  if (!grid) return;

  renderHomeDashboard();

  const readyLessons = getLessonManifest().filter((lesson) => lesson.status === "ready");
  const nextRecommended = getLessonManifest().find(
    (lesson) => lesson.status === "ready" && window.Storage && window.Storage.getLessonProgress(lesson.id, lesson.vocabCount || 13) < 100
  );
  const allLessons = getLessonManifest();
  const overall = allLessons.length
    ? Math.round(allLessons.reduce((sum, lesson) => {
        const pct = lesson.status === "ready" && window.Storage ? window.Storage.getLessonProgress(lesson.id, lesson.vocabCount || 13) : 0;
        return sum + pct;
      }, 0) / allLessons.length)
    : 0;
  const overallBar = document.getElementById("overall-progress-bar");
  const overallText = document.getElementById("overall-progress-text");
  if (overallBar) overallBar.style.width = `${overall}%`;
  if (overallText) overallText.textContent = `${overall}%`;

  grid.innerHTML = getLessonManifest()
    .map((lesson) => {
      const isReady = lesson.status === "ready";
      const pct = isReady && window.Storage ? window.Storage.getLessonProgress(lesson.id, lesson.vocabCount || 13) : 0;
      const isComplete = pct >= 100;
      const isCurrent = isReady && !isComplete && lesson.id === nextRecommended?.id;
      const statusText = !isReady ? "Chưa mở" : isComplete ? "✓ Hoàn thành" : isCurrent ? "● Đang học" : "○ Chưa học";
      const inner = `
        <div class="lesson-card-header">
          <span class="lesson-num-tag">${String(lesson.id).padStart(2, "0")}</span>
          <span class="${isReady ? "lesson-status-badge" : "badge badge-secondary"}">${statusText}</span>
        </div>
        <div class="lesson-title-zh">${lesson.titleZH}</div>
        <div class="lesson-scope">Bài ${lesson.id}</div>
        <div class="lesson-title-vi">${lesson.titleVI}</div>
        <div class="lesson-feature-row">Từ vựng <span>•</span> Ngữ pháp <span>•</span> Bài tập</div>
        <div class="lesson-card-footer">
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${pct}%;"></div>
          </div>
          <div class="progress-footer">
            <div class="progress-text">${isReady ? `${pct}% hoàn thành` : lesson.note}</div>
            ${isReady ? `<span class="lesson-cta">Tiếp tục học →</span>` : ""}
          </div>
        </div>
      `;

      const lessonCard = isReady
        ? `<a href="lesson.html?id=${lesson.id}" class="lesson-card active-card ${isCurrent ? "current-lesson-card" : ""} ${isComplete ? "completed-lesson-card" : ""}">${inner}</a>`
        : `<div class="lesson-card disabled">${inner}</div>`;

      const reviewMap = { 5: 1, 10: 2, 15: 3 };
      const reviewId = reviewMap[lesson.id];
      return reviewId ? `${lessonCard}${renderReviewCard(reviewId)}` : lessonCard;
    })
    .join("");
}

function getReviewMeta(reviewId) {
  const ranges = {
    1: { label: "Ôn tập 1", lessons: [1, 2, 3, 4, 5], scope: "Bài 1–5" },
    2: { label: "Ôn tập 2", lessons: [6, 7, 8, 9, 10], scope: "Bài 6–10" },
    3: { label: "Ôn tập 3", lessons: [11, 12, 13, 14, 15], scope: "Bài 11–15" }
  };
  return ranges[reviewId];
}

function renderReviewCard(reviewId) {
  const meta = getReviewMeta(reviewId);
  const result = window.Storage ? window.Storage.getReviewResult(reviewId) : null;
  const vocabPct = result?.vocabPercentage ?? null;
  const grammarPct = result?.grammarPercentage ?? null;
  const totalPct = result?.percentage ?? null;
  const status = result ? "✓ Đã kiểm tra" : "Chưa kiểm tra";

  return `
    <a href="review.html?id=${reviewId}" class="lesson-card review-card active-card">
      <div class="lesson-card-header">
        <span class="lesson-num-tag">★</span>
        <span class="lesson-status-badge">${status}</span>
      </div>
      <div class="lesson-title-zh">${meta.label}</div>
      <div class="lesson-scope">${meta.scope}</div>
      <div class="lesson-title-vi">Tổng ôn từ mới và ngữ pháp</div>
      <div class="review-progress-lines">
        <span>Từ vựng <strong>${vocabPct === null ? "–" : `${vocabPct}%`}</strong></span>
        <span>Ngữ pháp <strong>${grammarPct === null ? "–" : `${grammarPct}%`}</strong></span>
      </div>
      <div class="lesson-card-footer">
        <div class="progress-bar-container">
          <div class="progress-bar" style="width:${totalPct || 0}%;"></div>
        </div>
        <div class="progress-footer">
          <div class="progress-text">${totalPct === null ? "Bắt đầu ôn tập" : `${totalPct}% tổng`}</div>
          <span class="lesson-cta">Vào ôn tập →</span>
        </div>
      </div>
    </a>
  `;
}

function renderHomeDashboard() {
  const main = document.querySelector(".home-container main");
  if (!main) return;

  const manifest = getLessonManifest();
  const readyLessons = manifest.filter((lesson) => lesson.status === "ready");
  const lessonStats = manifest.map((lesson) => {
    const pct = lesson.status === "ready" && window.Storage ? window.Storage.getLessonProgress(lesson.id, lesson.vocabCount || 13) : 0;
    return { ...lesson, pct };
  });
  const completedCount = lessonStats.filter((lesson) => lesson.pct >= 100).length;
  const nextLesson =
    lessonStats.find((lesson) => lesson.status === "ready" && lesson.pct < 100) ||
    lessonStats.find((lesson) => lesson.status === "ready") ||
    lessonStats[0];
  const overall = manifest.length
    ? Math.round(
        manifest.reduce((sum, lesson) => {
          const pct = lesson.status === "ready" && window.Storage ? window.Storage.getLessonProgress(lesson.id, lesson.vocabCount || 13) : 0;
          return sum + pct;
        }, 0) / manifest.length
      )
    : 0;

  const rememberedWords = readyLessons.reduce((sum, lesson) => {
    if (!window.Storage) return sum;
    return sum + window.Storage.getFlashcardStats(lesson.id, lesson.vocabCount || 0).remembered;
  }, 0);

  const examResults = readyLessons
    .map((lesson) => (window.Storage ? window.Storage.getExamResult(lesson.id) : null))
    .filter(Boolean);
  const avgAccuracy = examResults.length
    ? Math.round(examResults.reduce((sum, result) => sum + (result.percentage || 0), 0) / examResults.length)
    : null;

  let dashboard = document.getElementById("learning-dashboard");
  if (!dashboard) {
    dashboard = document.createElement("section");
    dashboard.id = "learning-dashboard";
    dashboard.className = "learning-dashboard";
    main.prepend(dashboard);
  }

  dashboard.innerHTML = `
    <div class="learn-hero-card">
      <div>
        <p class="eyebrow-zh">你好 👋</p>
        <h2>Hôm nay mình học tiếp nhé!</h2>
        <p class="text-muted">HSK 2 · Bạn đã hoàn thành <strong>${completedCount} / ${manifest.length}</strong> bài</p>
      </div>
      <div class="learn-hero-progress">
        <span>Tiến độ HSK 2</span>
        <strong>${overall}%</strong>
        <div class="progress-bar-container"><div class="progress-bar" style="width:${overall}%;"></div></div>
      </div>
    </div>

    ${
      nextLesson
        ? `<a class="continue-card" href="lesson.html?id=${nextLesson.id}">
            <span class="continue-label">TIẾP TỤC HỌC</span>
            <strong>Bài ${nextLesson.id}</strong>
            <span class="continue-zh">${nextLesson.titleZH}</span>
            <span class="continue-vi">${nextLesson.titleVI}</span>
            <span>Bạn đang học: <b>${nextLesson.pct}%</b></span>
            <span class="continue-action">HỌC TIẾP →</span>
          </a>`
        : ""
    }

    <div class="student-progress-strip">
      <div><span>📚</span><strong>${rememberedWords}</strong><small>từ đã nhớ</small></div>
      <div><span>✓</span><strong>${completedCount}</strong><small>bài hoàn thành</small></div>
      ${avgAccuracy !== null ? `<div><span>🎯</span><strong>${avgAccuracy}%</strong><small>độ chính xác</small></div>` : ""}
    </div>
  `;

  const stageHeader = document.querySelector(".course-stage-header h2");
  if (stageHeader) stageHeader.textContent = "Hành trình HSK 2";
}

function loadLessonData(lessonId) {
  const lessonKey = `lesson${String(lessonId).padStart(2, "0")}Data`;
  if (window[lessonKey]) return Promise.resolve(window[lessonKey]);

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `data/lesson${String(lessonId).padStart(2, "0")}.js`;
    script.onload = () => {
      const lessonData = window[lessonKey];
      if (lessonData && isNewLessonSchema(lessonData)) resolve(lessonData);
      else reject(new Error(`Bài ${lessonId} chưa dùng schema UI mới.`));
    };
    script.onerror = () => reject(new Error(`Không tìm thấy file dữ liệu Bài ${lessonId}.`));
    document.body.appendChild(script);
  });
}

function isNewLessonSchema(data) {
  return Boolean(
    data &&
      data.lessonInfo &&
      Array.isArray(data.vocabulary) &&
      Array.isArray(data.grammar) &&
      data.vocabularyGames &&
      data.workbookExercises
  );
}

function buildPracticeGamesForLesson(data) {
  const games = data.vocabularyGames || {};
  const quizQuestions = Array.isArray(games.quizQuestions) ? [...games.quizQuestions] : [];
  const matchingPairs = Array.isArray(games.matchingPairs) ? games.matchingPairs : [];
  const vocabulary = Array.isArray(data.vocabulary) ? data.vocabulary : [];
  const existingTypes = new Set(quizQuestions.map((q) => q.type));

  if (!existingTypes.has("fill-blank")) {
    quizQuestions.push(...generateFillBlankPractice(vocabulary, quizQuestions.length));
  }

  if (!existingTypes.has("sentence-scramble")) {
    quizQuestions.push(...generateSentenceScramblePractice(vocabulary, quizQuestions.length));
  }

  return {
    ...games,
    quizQuestions,
    matchingPairs
  };
}

function generateFillBlankPractice(vocabulary, startIndex = 0) {
  const usableWords = vocabulary.filter((word) => word.hanzi && word.exampleZH && word.exampleZH.includes(word.hanzi));

  return usableWords.slice(0, 3).map((word, index) => ({
    id: `auto-fill-${startIndex + index + 1}`,
    type: "fill-blank",
    prompt: word.exampleZH.replace(word.hanzi, "（ ）"),
    options: buildPracticeOptions(word.hanzi, vocabulary, index),
    answer: word.hanzi,
    translation: word.exampleVI || word.meaning || "",
    sourceStatus: "AI_SUPPLEMENT_FROM_VERIFIED_VOCAB"
  }));
}

function generateSentenceScramblePractice(vocabulary, startIndex = 0) {
  const knownWords = buildKnownChineseWordList(vocabulary);
  const usableWords = vocabulary.filter((word) => cleanChineseSentence(word.exampleZH).length >= 4);

  return usableWords.slice(0, 3).map((word, index) => {
    const answer = cleanChineseSentence(word.exampleZH);
    return {
      id: `auto-scramble-${startIndex + index + 1}`,
      type: "sentence-scramble",
      prompt: "Sắp xếp từ thành câu hoàn chỉnh:",
      words: segmentChineseSentence(answer, knownWords),
      answer,
      translation: word.exampleVI || "",
      sourceStatus: "AI_SUPPLEMENT_FROM_VERIFIED_VOCAB"
    };
  });
}

function buildPracticeOptions(answer, vocabulary, seed = 0) {
  const pool = vocabulary.map((word) => word.hanzi).filter((hanzi) => hanzi && hanzi !== answer);
  const options = [answer];
  let cursor = seed;

  while (options.length < 4 && pool.length) {
    const candidate = pool[cursor % pool.length];
    if (!options.includes(candidate)) options.push(candidate);
    cursor++;
  }

  return rotateArray(options, seed + 1);
}

function rotateArray(items, offset) {
  if (!items.length) return items;
  const safeOffset = offset % items.length;
  return [...items.slice(safeOffset), ...items.slice(0, safeOffset)];
}

function cleanChineseSentence(sentence = "") {
  return sentence.replace(/[。！？?，,、；;：:\s]/g, "");
}

function buildKnownChineseWordList(vocabulary) {
  const commonWords = [
    "因为", "所以", "虽然", "但是", "快要", "就要", "不要", "没有", "正在", "可能",
    "右边", "前边", "去年", "新年", "火车站", "男孩子", "女孩子", "服务员", "公共汽车",
    "那个", "这个", "一个", "两个", "三个", "三岁", "六岁", "朋友们", "同学们",
    "弟弟", "妹妹", "哥哥", "姐姐", "大家", "我们", "他们", "你们", "我", "你", "他", "她",
    "写字", "说话", "唱歌", "跳舞", "上班", "穿", "拿", "笑", "找", "等", "告诉",
    "喜欢", "觉得", "知道", "认识", "希望", "欢迎", "帮助", "洗", "玩儿",
    "比", "大", "小", "高", "近", "远", "慢", "快", "贵", "便宜", "会", "是", "在", "有",
    "去", "来", "买", "吃", "看", "听", "说", "做", "的人", "的", "了", "吗", "呢",
    "不", "没", "很", "太", "更", "都", "要", "着", "过", "得", "往", "从", "到", "离", "对", "让", "再", "别"
  ];
  const lessonWords = vocabulary.map((word) => word.hanzi).filter(Boolean);
  return [...new Set([...lessonWords, ...commonWords])].sort((a, b) => b.length - a.length);
}

function segmentChineseSentence(sentence, knownWords) {
  const result = [];
  let rest = sentence;

  while (rest.length) {
    const match = knownWords.find((word) => rest.startsWith(word));
    if (match) {
      result.push(match);
      rest = rest.slice(match.length);
    } else {
      result.push(rest[0]);
      rest = rest.slice(1);
    }
  }

  return result.length > 1 ? result : sentence.split("");
}

function showLessonUnavailable(lessonId, lessonMeta) {
  document.querySelector(".lesson-container").innerHTML = `
    <div class="card text-center p-30">
      <h2>Bài ${lessonId} chưa sẵn sàng trên giao diện mới</h2>
      <p>${lessonMeta?.note || "Bài này chưa được migrate sang schema UI mới."}</p>
      <a href="index.html" class="btn btn-primary mt-15">Về trang chủ</a>
    </div>
  `;
}

function loadLesson(data) {
  const titleZH = document.getElementById("lesson-title-zh");
  const titleVI = document.getElementById("lesson-title-vi");
  const examTitle = document.getElementById("exam-lesson-title");
  const compactTitle = document.getElementById("lesson-compact-title");
  if (titleZH) titleZH.textContent = `第${data.lessonInfo.id}课 ${data.lessonInfo.titleZH}`;
  if (titleVI) titleVI.textContent = `Bài ${data.lessonInfo.id}: ${data.lessonInfo.titleVI}`;
  if (examTitle) examTitle.textContent = `📝 Sách bài tập HSK2 - Bài ${data.lessonInfo.id}`;
  if (compactTitle) compactTitle.textContent = `Bài ${data.lessonInfo.id}`;
  renderLessonLearningPath(data.lessonInfo.id, "vocab", data.lessonInfo);

  // 1. Vocabulary & Flashcards
  if (window.initVocabulary && data.vocabulary) {
    window.initVocabulary(data.vocabulary, data.lessonInfo.id);
  }

  // 2. Grammar
  if (window.initGrammar && data.grammar) {
    window.initGrammar(data.grammar);
  }

  // 3. Practice Games
  if (window.initPracticeGames && data.vocabularyGames) {
    window.initPracticeGames(buildPracticeGamesForLesson(data), data.lessonInfo.id);
  }

  // 4. Exercises & Workbook
  if (window.initExercises && data.workbookExercises) {
    window.initExercises(data.workbookExercises, data.lessonInfo.id, data.lessonInfo);
  }

  updateLessonProgressBar(data.lessonInfo.id, data.vocabulary?.length || 0);
}

function ensureLessonStickyShell() {
  const header = document.querySelector(".lesson-header");
  if (!header || header.closest(".lesson-sticky-shell")) return;

  const shell = document.createElement("div");
  shell.className = "lesson-sticky-shell";
  header.parentNode.insertBefore(shell, header);
  shell.appendChild(header);

  const nav = header.querySelector(".nav-bar-top");
  const back = nav?.querySelector(".btn-back");
  if (nav && back && !document.getElementById("lesson-compact-title")) {
    const compactTitle = document.createElement("span");
    compactTitle.id = "lesson-compact-title";
    compactTitle.className = "lesson-compact-title";
    compactTitle.textContent = "Bài học";
    back.insertAdjacentElement("afterend", compactTitle);
  }
}

function initCompactLessonHeader() {
  let compact = false;
  const update = () => {
    if (!compact && window.scrollY > 120) compact = true;
    if (compact && window.scrollY < 36) compact = false;
    document.body.classList.toggle("lesson-header-compact", compact);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function activateLessonTab(lessonId, tabId) {
  const targetStep = LESSON_STEPS.find((step) => step.id === tabId) || LESSON_STEPS[0];
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabPanes.forEach((pane) => {
    pane.classList.toggle("active", pane.id === targetStep.id);
  });

  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === targetStep.id);
  });

  if (window.Storage) {
    window.Storage.markTabVisited(lessonId, targetStep.id);
    updateLessonProgressBar(lessonId);
  }

  renderLessonLearningPath(lessonId, targetStep.id);
  renderLessonSectionSummary(lessonId, targetStep.id);
}

function renderLessonLearningPath(lessonId, activeTab = "vocab", lessonInfo = null) {
  const banner = document.querySelector(".lesson-title-banner");
  if (!banner) return;

  let path = document.getElementById("lesson-learning-path");
  if (!path) {
    path = document.createElement("div");
    path.id = "lesson-learning-path";
    path.className = "lesson-learning-path";
    banner.insertAdjacentElement("afterend", path);
  }

  const visited = window.Storage ? window.Storage.getVisitedTabs(lessonId) : [];
  const examDone = window.Storage ? Boolean(window.Storage.getExamResult(lessonId)) : false;
  const titleZH = lessonInfo?.titleZH || getLessonMeta(lessonId)?.titleZH || "";

  path.innerHTML = `
    <div>
      <span class="eyebrow-zh">继续学习</span>
      <h2>Bài ${lessonId}${titleZH ? ` · ${titleZH}` : ""}</h2>
      <p>Hôm nay bạn sẽ học theo 4 bước nhỏ.</p>
    </div>
    <div class="lesson-path-grid">
      ${LESSON_STEPS
        .map((step) => {
          const done = step.id === "exercises" ? examDone : visited.includes(step.id) && step.id !== activeTab;
          const active = step.id === activeTab;
          const marker = done ? "✓" : active ? "●" : "○";
          return `<button class="lesson-path-step ${done ? "done" : ""} ${active ? "active" : ""}" data-path-tab="${step.id}" type="button">
            <span>${step.index}</span>
            <strong>${step.label}</strong>
            <em>${marker}</em>
          </button>`;
        })
        .join("")}
    </div>
  `;

  path.querySelectorAll("[data-path-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activateLessonTab(lessonId, button.dataset.pathTab);
    });
  });
}

function renderLessonSectionSummary(lessonId, activeTab = "vocab") {
  const tabContent = document.querySelector(".tab-content");
  if (!tabContent) return;

  let summary = document.getElementById("lesson-section-summary");
  if (!summary) {
    summary = document.createElement("section");
    summary.id = "lesson-section-summary";
    summary.className = "lesson-section-summary";
    tabContent.insertAdjacentElement("beforebegin", summary);
  }

  const activeStep = LESSON_STEPS.find((step) => step.id === activeTab) || LESSON_STEPS[0];
  const lessonMeta = getLessonMeta(lessonId);
  const pct = window.Storage ? window.Storage.getLessonProgress(lessonId, lessonMeta?.vocabCount || 13) : 0;

  summary.innerHTML = `
    <div>
      <span class="eyebrow-zh">Đang học</span>
      <h2>${activeStep.label}</h2>
      <p>${activeStep.summary}</p>
    </div>
    <div class="lesson-section-progress" aria-label="Tiến độ bài học">
      <div class="lesson-section-progress-label">
        <span>Tiến độ bài học</span>
        <strong>${pct}%</strong>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${pct}%;"></div>
      </div>
    </div>
  `;
}

function updateLessonProgressBar(lessonId, totalVocab = null) {
  if (!window.Storage) return;
  const lessonMeta = getLessonMeta(lessonId);
  const pct = window.Storage.getLessonProgress(lessonId, totalVocab || lessonMeta?.vocabCount || 13);
  const bar = document.getElementById("lesson-top-progress-bar");
  const text = document.getElementById("lesson-top-progress-text");
  if (bar) bar.style.width = `${pct}%`;
  if (text) text.innerHTML = `<span class="progress-text-label">Tiến độ: </span>${pct}%`;
}

window.activateLessonTab = activateLessonTab;
