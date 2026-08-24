/**
 * Generic review engine for HSK2 review blocks.
 * Aggregates vocabulary and grammar directly from lesson data at runtime.
 */

const REVIEW_CONFIGS = {
  1: { id: 1, title: "Ôn tập 1", lessons: [1, 2, 3, 4, 5], scope: "Bài 1–5" },
  2: { id: 2, title: "Ôn tập 2", lessons: [6, 7, 8, 9, 10], scope: "Bài 6–10" },
  3: { id: 3, title: "Ôn tập 3", lessons: [11, 12, 13, 14, 15], scope: "Bài 11–15" }
};

const REVIEW_TABS = [
  { id: "overview", label: "Tổng quan" },
  { id: "vocab", label: "Từ mới" },
  { id: "grammar", label: "Ngữ pháp" },
  { id: "test", label: "Kiểm tra" },
  { id: "result", label: "Kết quả" }
];

let reviewState = {
  config: null,
  lessons: [],
  vocab: [],
  grammar: [],
  filter: "all",
  fcIndex: 0,
  flipped: false,
  testQuestions: [],
  currentResult: null,
  retryWrongOnly: false,
  testMode: "quick",
  isSubmitting: false
};

document.addEventListener("DOMContentLoaded", initReviewPage);

async function initReviewPage() {
  const reviewId = parseInt(new URLSearchParams(window.location.search).get("id") || "1", 10);
  const config = REVIEW_CONFIGS[reviewId] || REVIEW_CONFIGS[1];
  reviewState.config = config;

  document.getElementById("review-title").textContent = config.title;
  document.getElementById("review-scope").textContent = config.scope;

  try {
    reviewState.lessons = await Promise.all(config.lessons.map(loadReviewLessonData));
    reviewState.vocab = collectReviewVocabulary(reviewState.lessons);
    reviewState.grammar = collectReviewGrammar(reviewState.lessons);
    reviewState.currentResult = window.Storage ? window.Storage.getReviewResult(config.id) : null;
    renderReviewTabs("overview");
    renderAllReviewSections();
    activateReviewTab("overview");
  } catch (err) {
    console.error("Không thể tải dữ liệu ôn tập:", err);
    document.querySelector(".review-content").innerHTML = `
      <div class="card text-center p-30">
        <h2>Không thể tải ${config.title}</h2>
        <p>Vui lòng kiểm tra dữ liệu bài học trong nhóm ${config.scope}.</p>
        <a class="btn btn-primary" href="index.html">Về trang chủ</a>
      </div>
    `;
  }
}

function loadReviewLessonData(lessonId) {
  const key = `lesson${String(lessonId).padStart(2, "0")}Data`;
  if (window[key]) return Promise.resolve(window[key]);

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `data/lesson${String(lessonId).padStart(2, "0")}.js`;
    script.onload = () => (window[key] ? resolve(window[key]) : reject(new Error(`Bài ${lessonId} thiếu dữ liệu.`)));
    script.onerror = () => reject(new Error(`Không tìm thấy Bài ${lessonId}.`));
    document.body.appendChild(script);
  });
}

function collectReviewVocabulary(lessons) {
  return lessons.flatMap((lesson) =>
    (lesson.vocabulary || [])
      .filter((word) => word && word.includeInGames !== false && word.hanzi && word.meaning)
      .map((word) => ({
        ...word,
        lessonId: lesson.lessonInfo.id,
        lessonTitle: lesson.lessonInfo.titleZH,
        reviewWordId: `${lesson.lessonInfo.id}_${word.id}`
      }))
  );
}

function collectReviewGrammar(lessons) {
  return lessons.flatMap((lesson) =>
    (lesson.grammar || []).map((item, index) => ({
      ...item,
      id: item.id || `g${index + 1}`,
      lessonId: lesson.lessonInfo.id,
      lessonTitle: lesson.lessonInfo.titleZH,
      reviewGrammarId: `${lesson.lessonInfo.id}_${item.id || `g${index + 1}`}`
    }))
  );
}

function renderReviewTabs(activeId) {
  const tabs = document.getElementById("review-tabs");
  tabs.innerHTML = `
    <div class="lesson-path-grid review-path-grid">
      ${REVIEW_TABS.map(
        (tab, index) => `
          <button class="lesson-path-step ${tab.id === activeId ? "active" : ""}" type="button" data-review-tab="${tab.id}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${tab.label}</strong>
            <em>${tab.id === activeId ? "●" : "○"}</em>
          </button>
        `
      ).join("")}
    </div>
  `;
  tabs.querySelectorAll("[data-review-tab]").forEach((button) => {
    button.addEventListener("click", () => activateReviewTab(button.dataset.reviewTab));
  });
}

function activateReviewTab(tabId) {
  REVIEW_TABS.forEach((tab) => {
    document.getElementById(`review-${tab.id}`)?.classList.toggle("active", tab.id === tabId);
  });
  renderReviewTabs(tabId);
  if (tabId === "vocab") renderVocabSection();
  if (tabId === "grammar") renderGrammarSection();
  if (tabId === "test") renderTestSection();
  if (tabId === "result") renderResultSection();
}

function renderAllReviewSections() {
  renderOverviewSection();
  renderVocabSection();
  renderGrammarSection();
  renderTestSection();
  renderResultSection();
  updateReviewTopProgress();
}

function getReviewStats() {
  const remembered = reviewState.vocab.filter((word) => window.Storage?.getFlashcardStatus(word.lessonId, word.id) === "remembered").length;
  const forgot = reviewState.vocab.filter((word) => window.Storage?.getFlashcardStatus(word.lessonId, word.id) === "forgot").length;
  const last = reviewState.currentResult;
  return {
    vocabTotal: reviewState.vocab.length,
    grammarTotal: reviewState.grammar.length,
    remembered,
    forgot,
    vocabPct: last?.vocabPercentage ?? (reviewState.vocab.length ? Math.round((remembered / reviewState.vocab.length) * 100) : 0),
    grammarPct: last?.grammarPercentage ?? 0,
    totalPct: last?.percentage ?? 0
  };
}

function updateReviewTopProgress() {
  const stats = getReviewStats();
  const bar = document.getElementById("review-top-progress-bar");
  const text = document.getElementById("review-top-progress-text");
  if (bar) bar.style.width = `${stats.totalPct}%`;
  if (text) text.textContent = `Tổng: ${stats.totalPct}%`;
}

function renderOverviewSection() {
  const stats = getReviewStats();
  const section = document.getElementById("review-overview");
  section.innerHTML = `
    <div class="card review-overview-card">
      <div class="section-title-row">
        <h2>${reviewState.config.title}</h2>
        <span class="badge badge-secondary">${reviewState.config.scope}</span>
      </div>
      <div class="review-score-grid">
        <div><span>Từ mới</span><strong>${stats.vocabPct}%</strong><small>${stats.vocabTotal} từ</small></div>
        <div><span>Ngữ pháp</span><strong>${stats.grammarPct}%</strong><small>${stats.grammarTotal} điểm</small></div>
        <div><span>Tổng</span><strong>${stats.totalPct}%</strong><small>${reviewState.currentResult ? "Đã kiểm tra" : "Chưa kiểm tra"}</small></div>
      </div>
      <div class="review-action-row">
        <button class="btn btn-primary" type="button" data-go-review="vocab">Ôn từ mới</button>
        <button class="btn btn-secondary" type="button" data-start-test="quick">Kiểm tra nhanh 20 câu</button>
        <button class="btn" type="button" data-start-test="full">Kiểm tra tổng hợp</button>
      </div>
    </div>

    <div class="card">
      <h3>Ôn từ chưa nhớ</h3>
      <p>Bạn còn <strong>${stats.forgot}</strong> từ cần ôn trong ${reviewState.config.scope}.</p>
      <button class="btn btn-secondary" type="button" data-forgot-review ${stats.forgot ? "" : "disabled"}>Bắt đầu ôn ${stats.forgot} từ</button>
    </div>
  `;

  section.querySelector("[data-go-review]")?.addEventListener("click", () => activateReviewTab("vocab"));
  section.querySelector("[data-forgot-review]")?.addEventListener("click", () => {
    reviewState.filter = "forgot";
    reviewState.fcIndex = 0;
    activateReviewTab("vocab");
  });
  section.querySelectorAll("[data-start-test]").forEach((button) => {
    button.addEventListener("click", () => startReviewTest(button.dataset.startTest));
  });
}

function getFilteredVocab() {
  if (reviewState.filter === "forgot") {
    return reviewState.vocab.filter((word) => window.Storage?.getFlashcardStatus(word.lessonId, word.id) === "forgot");
  }
  if (reviewState.filter.startsWith("lesson-")) {
    const lessonId = parseInt(reviewState.filter.replace("lesson-", ""), 10);
    return reviewState.vocab.filter((word) => word.lessonId === lessonId);
  }
  return reviewState.vocab;
}

function renderVocabSection() {
  const section = document.getElementById("review-vocab");
  const words = getFilteredVocab();
  const word = words[reviewState.fcIndex % Math.max(words.length, 1)];

  section.innerHTML = `
    <div class="card">
      <div class="section-title-row">
        <h2>Flashcard tổng hợp</h2>
        <span class="badge badge-secondary">${words.length} từ</span>
      </div>
      <div class="fc-filter-tabs review-filter-tabs">
        ${["all", ...reviewState.config.lessons.map((id) => `lesson-${id}`), "forgot"].map((filter) => {
          const label = filter === "all" ? "Tất cả" : filter === "forgot" ? "Cần ôn" : `Bài ${filter.replace("lesson-", "")}`;
          return `<button class="btn btn-sm fc-tab ${reviewState.filter === filter ? "active" : ""}" type="button" data-vocab-filter="${filter}">${label}</button>`;
        }).join("")}
      </div>
      <div class="flashcard-section review-flashcard-section">
        <div class="flashcard-container">
          <div class="flashcard ${reviewState.flipped ? "flipped" : ""}">
            <div class="flashcard-front">
              <span class="fc-side-label">Mặt trước · Bài ${word?.lessonId || ""}</span>
              <span class="fc-hanzi">${word?.hanzi || "Không có từ cần ôn"}</span>
              <span class="fc-pinyin">${word?.pinyin || ""}</span>
              <span class="fc-hint-tap"><small>Nhấn để lật nghĩa</small></span>
            </div>
            <div class="flashcard-back">
              <span class="fc-side-label">Mặt sau · Bài ${word?.lessonId || ""}</span>
              <span class="fc-hanzi">${word?.hanzi || ""}</span>
              <span class="fc-pinyin">${word?.pinyin || ""}</span>
              <span class="fc-meaning">${word?.meaning || "Không có từ cần ôn"}</span>
              ${word?.exampleZH ? `<div class="fc-example-item"><div class="ex-zh">${word.exampleZH}</div><div class="ex-py">${word.examplePinyin || ""}</div><div class="ex-vi">${word.exampleVI || ""}</div></div>` : ""}
            </div>
          </div>
        </div>
        <div class="fc-controls">
          <button class="btn" type="button" data-fc-prev>⬅ Trước</button>
          <button class="btn btn-secondary" type="button" data-fc-flip>Lật thẻ</button>
          <button class="btn" type="button" data-fc-next>Tiếp ➡</button>
        </div>
        <div class="fc-status-controls">
          <button class="btn btn-danger" type="button" data-fc-forgot ${word ? "" : "disabled"}>Chưa nhớ</button>
          <button class="btn btn-success" type="button" data-fc-remembered ${word ? "" : "disabled"}>Đã nhớ</button>
        </div>
        <div class="fc-progress">${words.length ? `${(reviewState.fcIndex % words.length) + 1} / ${words.length}` : "0 / 0"}</div>
      </div>
    </div>

    <div class="card">
      <h3>Test từ vựng</h3>
      <p>Trộn Hán tự → nghĩa, nghĩa → Hán tự, Hán tự → pinyin và điền từ bằng ví dụ có sẵn.</p>
      <button class="btn btn-primary" type="button" data-start-test="vocab">Làm test từ vựng</button>
    </div>
  `;

  section.querySelectorAll("[data-vocab-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      reviewState.filter = button.dataset.vocabFilter;
      reviewState.fcIndex = 0;
      reviewState.flipped = false;
      renderVocabSection();
    });
  });
  section.querySelector(".flashcard")?.addEventListener("click", () => {
    reviewState.flipped = !reviewState.flipped;
    renderVocabSection();
  });
  section.querySelector("[data-fc-flip]")?.addEventListener("click", (event) => {
    event.stopPropagation();
    reviewState.flipped = !reviewState.flipped;
    renderVocabSection();
  });
  section.querySelector("[data-fc-prev]")?.addEventListener("click", () => {
    if (!words.length) return;
    reviewState.fcIndex = (reviewState.fcIndex - 1 + words.length) % words.length;
    reviewState.flipped = false;
    renderVocabSection();
  });
  section.querySelector("[data-fc-next]")?.addEventListener("click", () => {
    if (!words.length) return;
    reviewState.fcIndex = (reviewState.fcIndex + 1) % words.length;
    reviewState.flipped = false;
    renderVocabSection();
  });
  section.querySelector("[data-fc-forgot]")?.addEventListener("click", () => markReviewWord(word, "forgot"));
  section.querySelector("[data-fc-remembered]")?.addEventListener("click", () => markReviewWord(word, "remembered"));
  section.querySelector("[data-start-test]")?.addEventListener("click", () => startReviewTest("vocab"));
}

function markReviewWord(word, status) {
  if (!word || !window.Storage) return;
  window.Storage.setFlashcardStatus(word.lessonId, word.id, status);
  const words = getFilteredVocab();
  reviewState.fcIndex = words.length ? (reviewState.fcIndex + 1) % words.length : 0;
  reviewState.flipped = false;
  renderAllReviewSections();
  activateReviewTab("vocab");
}

function renderGrammarSection() {
  const section = document.getElementById("review-grammar");
  const grouped = groupByLesson(reviewState.grammar);
  section.innerHTML = `
    <div class="card">
      <div class="section-title-row">
        <h2>Ngữ pháp ${reviewState.config.scope}</h2>
        <button class="btn btn-primary" type="button" data-start-test="grammar">Làm test ngữ pháp</button>
      </div>
      <div class="review-grammar-list">
        ${Object.entries(grouped).map(([lessonId, items]) => `
          <section class="review-grammar-group">
            <h3>Bài ${lessonId}</h3>
            ${items.map((item) => `
              <article class="grammar-item card">
                <span class="grammar-badge">✓ ${item.name || item.title || "Điểm ngữ pháp"}</span>
                <h4>${item.formula || item.structure || ""}</h4>
                <p>${item.explanation || ""}</p>
                <ul class="grammar-examples">
                  ${(item.examples || []).slice(0, 3).map((ex) => `<li class="grammar-example-item"><strong>${ex.zh || ""}</strong><br><span>${ex.pinyin || ""}</span><br><em>${ex.vi || ""}</em></li>`).join("")}
                </ul>
              </article>
            `).join("")}
          </section>
        `).join("")}
      </div>
    </div>
  `;
  section.querySelector("[data-start-test]")?.addEventListener("click", () => startReviewTest("grammar"));
}

function groupByLesson(items) {
  return items.reduce((acc, item) => {
    acc[item.lessonId] = acc[item.lessonId] || [];
    acc[item.lessonId].push(item);
    return acc;
  }, {});
}

function startReviewTest(mode) {
  reviewState.retryWrongOnly = false;
  reviewState.testMode = mode;
  reviewState.testQuestions = buildReviewQuestions(mode);
  renderTestSection();
  activateReviewTab("test");
}

function startWrongReview() {
  const wrongIds = window.Storage?.getReviewWrongItems(reviewState.config.id).map((item) => item.id) || [];
  reviewState.retryWrongOnly = true;
  reviewState.testMode = "retry";
  reviewState.testQuestions = buildReviewQuestions("full").filter((q) => wrongIds.includes(q.id));
  renderTestSection();
  activateReviewTab("test");
}

function buildReviewQuestions(mode) {
  const vocabQuestions = buildVocabQuestions(mode === "full" ? 20 : 10);
  const grammarQuestions = buildGrammarQuestions(mode === "full" ? 15 : 10);
  if (mode === "vocab") return shuffle(vocabQuestions).slice(0, 20);
  if (mode === "grammar") return shuffle(grammarQuestions).slice(0, 15);
  if (mode === "quick") return shuffle([...vocabQuestions.slice(0, 10), ...grammarQuestions.slice(0, 10)]);
  return shuffle([...vocabQuestions, ...grammarQuestions]);
}

function buildVocabQuestions(limit) {
  const pool = reviewState.vocab;
  const questions = [];
  pool.forEach((word) => {
    questions.push(makeChoiceQuestion({
      id: `v-meaning-${word.reviewWordId}`,
      skill: "vocab",
      lessonId: word.lessonId,
      prompt: word.hanzi,
      subPrompt: "Chọn nghĩa đúng",
      answer: word.meaning,
      options: buildDistractors(word.meaning, pool.map((item) => item.meaning)),
      reviewLabel: word.hanzi
    }));
    questions.push(makeChoiceQuestion({
      id: `v-hanzi-${word.reviewWordId}`,
      skill: "vocab",
      lessonId: word.lessonId,
      prompt: word.meaning,
      subPrompt: "Chọn chữ Hán đúng",
      answer: word.hanzi,
      options: buildDistractors(word.hanzi, pool.map((item) => item.hanzi)),
      reviewLabel: word.hanzi
    }));
    if (word.pinyin) {
      questions.push(makeChoiceQuestion({
        id: `v-pinyin-${word.reviewWordId}`,
        skill: "vocab",
        lessonId: word.lessonId,
        prompt: word.hanzi,
        subPrompt: "Chọn pinyin đúng",
        answer: word.pinyin,
        options: buildDistractors(word.pinyin, pool.map((item) => item.pinyin).filter(Boolean)),
        reviewLabel: word.hanzi
      }));
    }
    if (word.exampleZH && word.exampleZH.includes(word.hanzi)) {
      questions.push(makeChoiceQuestion({
        id: `v-fill-${word.reviewWordId}`,
        skill: "vocab",
        lessonId: word.lessonId,
        prompt: word.exampleZH.replace(word.hanzi, "_____"),
        subPrompt: "Điền từ còn thiếu",
        answer: word.hanzi,
        options: buildDistractors(word.hanzi, pool.map((item) => item.hanzi)),
        reviewLabel: word.hanzi
      }));
    }
  });
  return shuffle(questions).slice(0, Math.min(limit, questions.length));
}

function buildGrammarQuestions(limit) {
  const questions = [];
  const names = reviewState.grammar.map((item) => item.name || item.title || item.formula).filter(Boolean);
  reviewState.grammar.forEach((item) => {
    if (item.quickQuiz?.question && item.quickQuiz?.answer) {
      const options = item.quickQuiz.options?.length
        ? item.quickQuiz.options
        : buildDistractors(item.quickQuiz.answer, reviewState.grammar.map((g) => g.quickQuiz?.answer).filter(Boolean));
      questions.push(makeChoiceQuestion({
        id: `g-quiz-${item.reviewGrammarId}`,
        skill: "grammar",
        lessonId: item.lessonId,
        prompt: item.quickQuiz.question,
        subPrompt: "Chọn đáp án đúng",
        answer: item.quickQuiz.answer,
        options,
        reviewLabel: item.name || item.title || item.formula
      }));
    }
    if ((item.examples || []).length && (item.name || item.title)) {
      const ex = item.examples[0];
      questions.push(makeChoiceQuestion({
        id: `g-structure-${item.reviewGrammarId}`,
        skill: "grammar",
        lessonId: item.lessonId,
        prompt: ex.zh,
        subPrompt: "Câu này dùng cấu trúc nào?",
        answer: item.name || item.title,
        options: buildDistractors(item.name || item.title, names),
        reviewLabel: item.name || item.title
      }));
    }
  });
  return shuffle(questions).slice(0, Math.min(limit, questions.length));
}

function makeChoiceQuestion(question) {
  return { type: "choice", ...question, options: shuffle(dedupeOptions(question.options, question.answer)).slice(0, 4) };
}

function buildDistractors(answer, candidates) {
  return dedupeOptions([answer, ...shuffle(candidates.filter((item) => item && item !== answer))], answer).slice(0, 4);
}

function dedupeOptions(options, answer) {
  const seen = new Set();
  return [answer, ...options].filter((item) => {
    const key = String(item || "").trim();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderTestSection() {
  const section = document.getElementById("review-test");
  if (!reviewState.testQuestions.length) {
    section.innerHTML = `
      <div class="card">
        <h2>Kiểm tra ôn tập</h2>
        <p>Chọn một chế độ kiểm tra để bắt đầu. Câu hỏi được trộn từ ${reviewState.config.scope}.</p>
        <div class="review-action-row">
          <button class="btn btn-primary" type="button" data-start-test="quick">Kiểm tra nhanh 20 câu</button>
          <button class="btn" type="button" data-start-test="full">Kiểm tra tổng hợp</button>
        </div>
      </div>
    `;
    section.querySelectorAll("[data-start-test]").forEach((button) => button.addEventListener("click", () => startReviewTest(button.dataset.startTest)));
    return;
  }

  section.innerHTML = `
    <form id="review-test-form" class="card">
      <div class="section-title-row">
        <h2>${reviewState.retryWrongOnly ? "Ôn lại câu sai" : "Bài kiểm tra ôn tập"}</h2>
        <span class="badge badge-secondary">${reviewState.testQuestions.length} câu</span>
      </div>
      <div class="review-question-list">
        ${reviewState.testQuestions.map((q, index) => `
          <div class="question-item review-question-item" data-id="${q.id}">
            <div class="q-header">
              <strong>Câu ${index + 1}:</strong>
              <span class="badge badge-secondary">${q.skill === "vocab" ? "Từ vựng" : "Ngữ pháp"} · Bài ${q.lessonId}</span>
            </div>
            <p class="review-question-prompt ${hasCjk(q.prompt) ? "hanzi-prompt" : "vi-prompt"}">${q.prompt}</p>
            <p class="text-muted"><small>${q.subPrompt}</small></p>
            <div class="options-radio-group review-options">
              ${q.options.map((opt) => `
                <label class="radio-option">
                  <input type="radio" name="q_${q.id}" value="${escapeAttr(opt)}">
                  <span>${opt}</span>
                </label>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
      <button class="btn btn-primary btn-large btn-submit-master" type="submit">Nộp bài ôn tập</button>
    </form>
  `;

  section.querySelectorAll("input[type=radio]").forEach((radio) => {
    radio.addEventListener("change", () => {
      const group = radio.closest(".options-radio-group");
      group?.querySelectorAll(".radio-option").forEach((label) => label.classList.remove("selected"));
      radio.closest(".radio-option")?.classList.add("selected");
    });
  });
  section.querySelector("#review-test-form").addEventListener("submit", (event) => {
    event.preventDefault();
    submitReviewTest();
  });
}

function escapeAttr(value) {
  return String(value).replace(/"/g, "&quot;");
}

function hasCjk(value) {
  return /[\u3400-\u9fff]/.test(String(value || ""));
}

async function submitReviewTest() {
  if (reviewState.isSubmitting) return;
  const studentName = ensureReviewStudentName();
  if (!studentName) return;
  reviewState.isSubmitting = true;
  const submitBtn = document.querySelector("#review-test-form button[type=submit]");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.dataset.originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Đang lưu kết quả...";
  }

  const details = reviewState.testQuestions.map((q) => {
    const checked = document.querySelector(`input[name="q_${CSS.escape(q.id)}"]:checked`);
    const given = checked ? checked.value : "";
    const correct = given === q.answer;
    return { ...q, given, correct };
  });
  const correct = details.filter((item) => item.correct).length;
  const total = details.length || 1;
  const vocabItems = details.filter((item) => item.skill === "vocab");
  const grammarItems = details.filter((item) => item.skill === "grammar");
  const lessonBreakdown = buildLessonBreakdown(details);
  const weakLesson = [...lessonBreakdown].sort((a, b) => a.percentage - b.percentage)[0];
  const wrongItems = details.filter((item) => !item.correct).map((item) => ({
    id: item.id,
    skill: item.skill,
    lessonId: item.lessonId,
    label: item.reviewLabel,
    answer: item.answer,
    given: item.given
  }));
  const result = {
    reviewId: reviewState.config.id,
    type: reviewState.retryWrongOnly ? "review_retry" : "review",
    testMode: reviewState.testMode,
    title: `${reviewState.config.title} – ${reviewState.config.scope}`,
    studentName,
    score: correct,
    correct,
    total,
    percentage: Math.round((correct / total) * 100),
    vocabScore: vocabItems.filter((item) => item.correct).length,
    vocabTotal: vocabItems.length,
    vocabPercentage: percentage(vocabItems),
    grammarScore: grammarItems.filter((item) => item.correct).length,
    grammarTotal: grammarItems.length,
    grammarPercentage: percentage(grammarItems),
    lessonBreakdown,
    weakLessonId: weakLesson?.lessonId || null,
    wrongItems,
    submittedAt: new Date().toISOString(),
    submissionId: `review-${reviewState.config.id}-${Date.now()}`,
    attemptNumber: getReviewAttemptNumber(reviewState.config.id)
  };

  reviewState.currentResult = result;
  if (window.Storage) window.Storage.saveReviewResult(reviewState.config.id, result);

  let telegramResult = null;
  if (window.TelegramService && !reviewState.retryWrongOnly) {
    telegramResult = await window.TelegramService.sendResult(buildReviewTelegramPayload(result));
  }
  result.telegramStatus = telegramResult?.success ? "sent" : telegramResult?.localOnly ? "local" : "failed";
  result.telegramMessage = telegramResult?.message || "";
  if (window.Storage) window.Storage.saveReviewResult(reviewState.config.id, result);

  renderAllReviewSections();
  activateReviewTab("result");
  reviewState.isSubmitting = false;
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = submitBtn.dataset.originalText || "Nộp bài ôn tập";
  }
}

function ensureReviewStudentName() {
  const saved = window.Storage?.getStudentName()?.trim() || "";
  if (saved) return saved;
  const name = prompt("Vui lòng nhập họ và tên trước khi nộp bài ôn tập:");
  const cleanName = (name || "").trim();
  if (!cleanName) {
    alert("Không thể gửi kết quả khi chưa có họ tên học viên.");
    return "";
  }
  window.Storage?.setStudentName(cleanName);
  return cleanName;
}

function getReviewAttemptNumber(reviewId) {
  const previous = window.Storage?.getReviewResult(reviewId);
  return previous?.attemptNumber ? previous.attemptNumber + 1 : 1;
}

function buildReviewTelegramPayload(result) {
  const wrongVocab = result.wrongItems.filter((item) => item.skill === "vocab").map((item) => item.label).slice(0, 20);
  const wrongGrammar = result.wrongItems.filter((item) => item.skill === "grammar").map((item) => item.label).slice(0, 20);
  return {
    type: "review",
    reviewId: result.reviewId,
    reviewTitle: result.title,
    studentName: result.studentName,
    score: result.correct,
    total: result.total,
    percent: result.percentage,
    percentage: result.percentage,
    correctCount: result.correct,
    wrongCount: result.total - result.correct,
    vocabPercentage: result.vocabPercentage,
    grammarPercentage: result.grammarPercentage,
    weakLesson: result.weakLessonId ? `Bài ${result.weakLessonId}` : "",
    wrongVocabulary: wrongVocab,
    wrongGrammar,
    wrongQuestions: result.wrongItems.map((item) => item.id),
    attemptNumber: result.attemptNumber,
    submittedAt: result.submittedAt,
    submissionId: result.submissionId
  };
}

function percentage(items) {
  return items.length ? Math.round((items.filter((item) => item.correct).length / items.length) * 100) : 0;
}

function buildLessonBreakdown(details) {
  return reviewState.config.lessons.map((lessonId) => {
    const items = details.filter((item) => item.lessonId === lessonId);
    return {
      lessonId,
      correct: items.filter((item) => item.correct).length,
      total: items.length,
      percentage: items.length ? Math.round((items.filter((item) => item.correct).length / items.length) * 100) : 0
    };
  });
}

function renderResultSection() {
  const section = document.getElementById("review-result");
  const result = reviewState.currentResult;
  if (!result) {
    section.innerHTML = `
      <div class="card">
        <h2>Chưa có kết quả ôn tập</h2>
        <p>Làm Quick Test hoặc Kiểm tra tổng hợp để xem phân tích điểm yếu.</p>
        <button class="btn btn-primary" type="button" data-start-test="quick">Kiểm tra nhanh 20 câu</button>
      </div>
    `;
    section.querySelector("[data-start-test]")?.addEventListener("click", () => startReviewTest("quick"));
    return;
  }

  const wrongVocab = result.wrongItems.filter((item) => item.skill === "vocab");
  const wrongGrammar = result.wrongItems.filter((item) => item.skill === "grammar");
  section.innerHTML = `
    <div class="card result-card-banner">
      <h2>${result.percentage}%</h2>
      <p>${result.title}</p>
      <div class="review-score-grid">
        <div><span>Từ vựng</span><strong>${result.vocabScore}/${result.vocabTotal}</strong><small>${result.vocabPercentage}%</small></div>
        <div><span>Ngữ pháp</span><strong>${result.grammarScore}/${result.grammarTotal}</strong><small>${result.grammarPercentage}%</small></div>
        <div><span>Tổng</span><strong>${result.correct}/${result.total}</strong><small>${result.percentage}%</small></div>
      </div>
      <div class="mt-10">
        ${formatReviewTelegramStatus(result)}
      </div>
    </div>

    <div class="card">
      <h3>Breakdown theo bài</h3>
      <div class="review-lesson-breakdown">
        ${result.lessonBreakdown.map((row) => `
          <div class="${row.percentage < 60 ? "weak" : ""}">
            <strong>Bài ${row.lessonId}</strong>
            <span>${row.total ? `${row.correct}/${row.total}` : "–"}</span>
            <em>${row.total ? `${row.percentage}%` : "Chưa có câu"}</em>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="card">
      <h3>Bạn nên ôn lại</h3>
      <div class="review-needed-grid">
        <div>
          <h4>Từ vựng</h4>
          ${wrongVocab.length ? `<ul>${wrongVocab.map((item) => `<li>${item.label}</li>`).join("")}</ul>` : "<p>Không có từ vựng sai.</p>"}
        </div>
        <div>
          <h4>Ngữ pháp</h4>
          ${wrongGrammar.length ? `<ul>${wrongGrammar.map((item) => `<li>${item.label}</li>`).join("")}</ul>` : "<p>Không có ngữ pháp sai.</p>"}
        </div>
      </div>
      <div class="review-action-row">
        <button class="btn btn-secondary" type="button" data-review-wrong ${result.wrongItems.length ? "" : "disabled"}>Ôn lại câu sai</button>
        <button class="btn btn-primary" type="button" data-start-test="quick">Làm lại Quick Test</button>
      </div>
    </div>
  `;

  section.querySelector("[data-review-wrong]")?.addEventListener("click", startWrongReview);
  section.querySelector("[data-start-test]")?.addEventListener("click", () => startReviewTest("quick"));
}

function formatReviewTelegramStatus(result) {
  if (result.type === "review_retry") {
    return `<span class="badge badge-secondary">ℹ️ Kết quả ôn câu sai đã lưu trên máy.</span>`;
  }
  if (result.telegramStatus === "sent") {
    return `<span class="badge badge-success">✅ Đã gửi kết quả về Telegram cho giáo viên</span>`;
  }
  if (result.telegramStatus === "local") {
    return `<span class="badge badge-secondary">ℹ️ Kết quả đã lưu. Telegram chỉ gửi khi chạy trên Netlify.</span>`;
  }
  if (result.telegramStatus === "failed") {
    return `<span class="badge badge-secondary">ℹ️ Không gửi được Telegram, nhưng kết quả đã lưu.</span>`;
  }
  return `<span class="badge badge-secondary">ℹ️ Kết quả đã lưu.</span>`;
}

window.REVIEW_CONFIGS = REVIEW_CONFIGS;
