/**
 * Exercises & Exam Module for HSK2 Web App
 * - Unified Section Audio Player (no 1-audio-per-question clutter)
 * - Secure evaluation: NO correct answers leaked in DOM attributes
 * - Image Reference Grid for Listening & Reading
 * - Autosave drafts & seamless resume
 * - Wrong question retry mode (Ôn lại câu sai)
 * - Safe Netlify Telegram dispatch
 */

let currentLessonId = 1;
let currentLessonData = null;
let currentLessonInfo = null;
let activeQuestionMap = new Map(); // qKey -> question object
let isRetryMode = false;
let isSubmittingExam = false;

window.initExercises = function(data, lessonId, lessonInfo = null) {
  currentLessonData = data;
  currentLessonId = lessonId;
  currentLessonInfo = lessonInfo;

  // Build internal question lookup map (for secure grading without exposing answers in HTML)
  buildQuestionMap(data);

  // Restore student name
  const savedName = window.Storage ? window.Storage.getStudentName() : "";
  const nameInput = document.getElementById("student-name");
  if (nameInput && savedName) {
    nameInput.value = savedName;
  }

  // Check if previous exam result exists
  const existingResult = window.Storage ? window.Storage.getExamResult(lessonId) : null;
  if (existingResult) {
    displayResultView(existingResult);
  } else {
    setupExamStartView();
  }
};

function buildQuestionMap(data) {
  activeQuestionMap.clear();

  if (data.listeningPart1 && canRenderListeningPart1(data.listeningPart1)) {
    data.listeningPart1.questions.forEach((q) => {
      if (!canRenderSourceImageQuestion(q)) return;
      activeQuestionMap.set(`L1_${q.id}`, {
        ...q,
        section: "Phần nghe 1 (Đúng/Sai theo hình)",
        label: `Câu ${q.id}`,
        correctAnswer: q.answer ? "true" : "false"
      });
    });
  }

  if (data.listeningPart2) {
    data.listeningPart2.forEach((q) => {
      activeQuestionMap.set(`L2_${q.id}`, {
        ...q,
        section: "Phần nghe 2 (Chọn hình A-F)",
        label: `Câu ${q.id}`,
        correctAnswer: q.answer
      });
    });
  }

  if (data.listeningPart3) {
    data.listeningPart3.forEach((q) => {
      activeQuestionMap.set(`L3_${q.id}`, {
        ...q,
        section: "Phần nghe 3 (Trắc nghiệm A-B-C)",
        label: `Câu ${q.id}`,
        correctAnswer: q.answer
      });
    });
  }

  if (data.readingPart1) {
    data.readingPart1.forEach((q) => {
      activeQuestionMap.set(`R1_${q.id}`, {
        ...q,
        section: "Phần đọc 1 (Chọn hình A-F)",
        label: `Câu ${q.id}: ${q.text}`,
        correctAnswer: q.answer
      });
    });
  }

  if (data.readingPart2 && data.readingPart2.questions) {
    data.readingPart2.questions.forEach((q) => {
      activeQuestionMap.set(`R2_${q.id}`, {
        ...q,
        section: "Phần đọc 2 (Điền từ)",
        label: `Câu ${q.id}: ${q.text}`,
        correctAnswer: q.answer
      });
    });
  }

  if (data.readingPart3) {
    data.readingPart3.forEach((q) => {
      activeQuestionMap.set(`R3_${q.id}`, {
        ...q,
        section: "Phần đọc 3 (Đúng/Sai)",
        label: `Câu ${q.id}: ${q.text} (Phán đoán: ${q.statement})`,
        correctAnswer: q.answer ? "true" : "false"
      });
    });
  }

  if (data.readingPart4 && data.readingPart4.questions) {
    data.readingPart4.questions.forEach((q) => {
      activeQuestionMap.set(`R4_${q.id}`, {
        ...q,
        section: "Phần đọc 4 (Ghép câu đối thoại)",
        label: `Câu ${q.id}: ${q.text}`,
        correctAnswer: q.answer
      });
    });
  }
}

function isDevWorkbookMode() {
  const params = new URLSearchParams(window.location.search);
  return params.get("dev") === "1" || ["localhost", "127.0.0.1"].includes(window.location.hostname);
}

function canRenderSourceImageQuestion(question) {
  return Boolean(question.image) || (question.imageStatus === "NEEDS_SOURCE_IMAGE" && isDevWorkbookMode());
}

function canRenderListeningPart1(part1Data) {
  return Boolean(part1Data?.questions?.some(canRenderSourceImageQuestion));
}

function getImageSetImages(imageSet) {
  const rawImages = Array.isArray(imageSet) ? imageSet : imageSet?.images;
  return (rawImages || []).map((img) => ({
    id: img.id || img.key,
    src: img.src || img.image || null
  }));
}

function renderImageChoiceReference(title, images, groupId) {
  const safeImages = images.length
    ? images
    : ["A", "B", "C", "D", "E", "F"].map((id) => ({ id, src: null }));

  return `
    <div class="image-ref-box image-choice-box mb-15" data-image-choice-group="${groupId}">
      <div class="image-choice-head">
        <strong>${title}</strong>
        <span class="image-choice-status">Chọn một câu bên dưới</span>
      </div>
      <div class="image-ref-grid image-choice-grid">
        ${safeImages
          .map(
            (img) => `
          <button class="image-ref-card image-choice-card" type="button" data-image-id="${img.id}">
            <span class="ref-key">${img.id}</span>
            ${
              img.src
                ? `<img src="${img.src}" alt="Hình ${img.id}" loading="lazy">`
                : `<span class="image-choice-placeholder">Hình ${img.id}</span>`
            }
          </button>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderImageChoiceOptions(qKey, savedVal) {
  return `
    <div class="options-radio-group image-choice-options">
      ${["A", "B", "C", "D", "E", "F"]
        .map(
          (opt) => `
        <label class="radio-option ${savedVal === opt ? "selected" : ""}">
          <input type="radio" name="q_${qKey}" value="${opt}" ${savedVal === opt ? "checked" : ""}>
          <span>${opt}</span>
        </label>
      `
        )
        .join("")}
    </div>
  `;
}

function initImageChoiceInteractions(form) {
  const boxes = form.querySelectorAll(".image-choice-box");
  boxes.forEach((box) => {
    const section = box.closest(".exam-section");
    const questions = Array.from(section?.querySelectorAll(".image-choice-question") || []);
    const status = box.querySelector(".image-choice-status");
    let activeQuestion = questions.find((q) => !q.querySelector("input:checked")) || questions[0] || null;
    let lastSelected = "";
    let lastSelectedLabel = "";

    const updateCards = () => {
      const qLabel = activeQuestion?.querySelector(".q-header strong")?.textContent?.trim() || "";
      const checked = activeQuestion?.querySelector("input:checked")?.value || "";
      if (status) {
        status.textContent = activeQuestion
          ? checked
            ? `${qLabel} → ${checked}`
            : `${qLabel} đang chọn${lastSelectedLabel ? ` · vừa chọn ${lastSelectedLabel}` : ""}`
          : "Chọn một câu bên dưới";
      }
      box.querySelectorAll(".image-choice-card").forEach((card) => {
        const isCurrentChoice = Boolean(checked) && card.dataset.imageId === checked;
        const isLastChoice = !checked && Boolean(lastSelected) && card.dataset.imageId === lastSelected;
        card.classList.toggle("selected", isCurrentChoice || isLastChoice);
      });
      questions.forEach((question) => {
        question.classList.toggle("active-choice-question", question === activeQuestion);
      });
    };

    const setActiveQuestion = (question) => {
      activeQuestion = question;
      updateCards();
    };

    questions.forEach((question) => {
      question.addEventListener("click", () => setActiveQuestion(question));
      question.querySelectorAll("input[type=radio]").forEach((radio) => {
        radio.addEventListener("change", () => setActiveQuestion(question));
      });
    });

    box.querySelectorAll(".image-choice-card").forEach((card) => {
      card.addEventListener("click", () => {
        if (!activeQuestion) return;
        const radio = activeQuestion.querySelector(`input[value="${card.dataset.imageId}"]`);
        if (!radio) return;
        radio.checked = true;
        radio.dispatchEvent(new Event("change", { bubbles: true }));
        const chosenQuestionLabel = activeQuestion.querySelector(".q-header strong")?.textContent?.trim() || "";
        lastSelected = card.dataset.imageId;
        lastSelectedLabel = `${chosenQuestionLabel} → ${card.dataset.imageId}`;
        const currentIndex = questions.indexOf(activeQuestion);
        const nextQuestion =
          questions.slice(currentIndex + 1).find((q) => !q.querySelector("input:checked")) ||
          questions.find((q) => !q.querySelector("input:checked")) ||
          activeQuestion;
        activeQuestion = nextQuestion;
        updateCards();
      });
    });

    updateCards();
  });
}

function setupExamStartView() {
  const userInfoForm = document.getElementById("user-info-form");
  const examArea = document.getElementById("exam-area");
  const examResult = document.getElementById("exam-result");
  const btnStart = document.getElementById("btn-start-exam");

  if (userInfoForm) userInfoForm.style.display = "block";
  if (examArea) examArea.style.display = "none";
  if (examResult) examResult.style.display = "none";
  renderWorkbookCheckpoints();

  btnStart?.addEventListener("click", () => {
    const name = document.getElementById("student-name").value.trim();
    if (!name) {
      alert("Vui lòng nhập họ và tên trước khi bắt đầu làm bài!");
      return;
    }
    if (window.Storage) window.Storage.setStudentName(name);

    userInfoForm.style.display = "none";
    examArea.style.display = "block";
    isRetryMode = false;
    renderExam(currentLessonData);
  });
}

function renderWorkbookCheckpoints() {
  const form = document.getElementById("user-info-form");
  if (!form) return;

  let box = document.getElementById("workbook-checkpoints");
  if (!box) {
    box = document.createElement("div");
    box.id = "workbook-checkpoints";
    box.className = "workbook-checkpoints";
    form.querySelector(".exam-start-banner")?.insertAdjacentElement("afterend", box);
  }

  const drafts = window.Storage ? window.Storage.getDraftAnswers(currentLessonId) : {};
  const answeredCount = Object.values(drafts || {}).filter((value) => value !== "" && value !== null && value !== undefined).length;
  const totalCount = activeQuestionMap.size;
  const groups = [
    { icon: "🎧", label: "Nghe 1", range: "1-5", prefix: "L1_" },
    { icon: "🎧", label: "Nghe 2", range: "6-10", prefix: "L2_" },
    { icon: "🎧", label: "Nghe 3", range: "11-15", prefix: "L3_" },
    { icon: "📖", label: "Đọc 1", range: "16-20", prefix: "R1_" },
    { icon: "📖", label: "Đọc 2", range: "21-25", prefix: "R2_" },
    { icon: "📖", label: "Đọc 3", range: "26-30", prefix: "R3_" },
    { icon: "📖", label: "Đọc 4", range: "31-35", prefix: "R4_" }
  ].map((group) => ({
    ...group,
    count: [...activeQuestionMap.keys()].filter((id) => id.startsWith(group.prefix)).length
  }));

  box.innerHTML = `
    <div class="workbook-overview-head">
      <span class="eyebrow-zh">练习册</span>
      <h3>Bài tập Bài ${currentLessonId}</h3>
      <p>${answeredCount} / ${totalCount} câu đã chọn</p>
      <div class="progress-bar-container"><div class="progress-bar" style="width:${totalCount ? Math.round((answeredCount / totalCount) * 100) : 0}%;"></div></div>
    </div>
    <div class="checkpoint-grid">
      ${groups
        .filter((group) => group.count > 0)
        .map(
          (group, index) => `
          <div class="checkpoint-item">
            <span>${index + 1}</span>
            <strong>${group.icon} ${group.label}</strong>
            <small>Câu ${group.range}</small>
          </div>`
        )
        .join("")}
    </div>
  `;
}

function renderExam(data, filterQuestionIds = null) {
  const form = document.getElementById("exam-form");
  if (!form) return;

  const drafts = window.Storage ? window.Storage.getDraftAnswers(currentLessonId) : {};

  // 1. Render Master Listening Section with 1 Dedicated Audio Player
  const audioFile = data.audioFile || "audio/lesson01/01-1.mp3";
  renderWorkbookAudioPlayer(audioFile, filterQuestionIds);
  renderListeningPart1(data.listeningPart1, filterQuestionIds, drafts);
  renderUnifiedAudioPlayer(data.listeningPart2, data.listeningPart3, filterQuestionIds, drafts);

  // 2. Reading Part 1 (Questions 16 - 20)
  renderReadingPart1(data.readingPart1, data.imageSets?.readingPart1 || data.imageReference, filterQuestionIds, drafts);

  // 3. Reading Part 2 (Questions 21 - 25: Điền từ)
  renderReadingPart2(data.readingPart2, filterQuestionIds, drafts);

  // 4. Reading Part 3 (Questions 26 - 30: Đúng / Sai)
  renderReadingPart3(data.readingPart3, filterQuestionIds, drafts);

  // 5. Reading Part 4 (Questions 31 - 35: Ghép câu đối thoại)
  renderReadingPart4(data.readingPart4, filterQuestionIds, drafts);

  // Attach draft auto-save
  form.querySelectorAll("input[type=radio]").forEach((radio) => {
    radio.addEventListener("change", () => {
      const parentLabel = radio.closest(".radio-option");
      const group = radio.closest(".options-radio-group");
      if (group) group.querySelectorAll(".radio-option").forEach((l) => l.classList.remove("selected"));
      if (parentLabel) parentLabel.classList.add("selected");

      const qItem = radio.closest(".question-item");
      if (qItem && window.Storage) {
        window.Storage.saveDraftAnswer(currentLessonId, qItem.dataset.id, radio.value);
        renderWorkbookCheckpoints();
      }
    });
  });
  initImageChoiceInteractions(form);
  initDialogueMatchingInteractions(form);

  // Submit button
  form.onsubmit = (e) => {
    e.preventDefault();
    evaluateAndSubmitExam();
  };
}

// -------------------------------------------------------------
// Unified Audio Player & Listening Questions
// -------------------------------------------------------------
function renderWorkbookAudioPlayer(audioSrc, filterIds) {
  const part1Container = document.getElementById("listening-part1");
  if (!part1Container) return;

  let audioSection = document.getElementById("workbook-audio-section");
  if (!audioSection) {
    audioSection = document.createElement("div");
    audioSection.id = "workbook-audio-section";
    audioSection.className = "exam-section card";
    part1Container.insertAdjacentElement("beforebegin", audioSection);
  }

  const hasListeningQuestions = [...activeQuestionMap.keys()].some((id) => {
    const isListening = id.startsWith("L1_") || id.startsWith("L2_") || id.startsWith("L3_");
    return isListening && (!filterIds || filterIds.includes(id));
  });

  if (!audioSrc || !hasListeningQuestions) {
    audioSection.style.display = "none";
    audioSection.innerHTML = "";
    return;
  }

  audioSection.style.display = "block";
  audioSection.innerHTML = `
    <div class="section-badge">Audio</div>
    <h4>Nghe audio cho Phần 1, Phần 2 và Phần 3</h4>
    <div class="master-audio-player" data-audio-src="${audioSrc}">
      <div class="audio-main-header">
        <span class="audio-main-icon">🎧</span>
        <div class="audio-main-info">
          <strong>Audio sách bài tập HSK 2 - Bài ${currentLessonId}</strong>
          <small class="text-muted">Một file audio dùng cho toàn bộ phần nghe, từ Câu 1 đến Câu 15.</small>
        </div>
      </div>

      <audio id="hsk2-main-audio" preload="metadata" src="${audioSrc}"></audio>

      <div class="audio-controls-custom">
        <button type="button" id="btn-audio-rewind" class="btn btn-sm" title="Tua lại 5 giây">⏪ -5s</button>
        <button type="button" id="btn-audio-toggle" class="btn btn-primary btn-sm btn-play-main">▶ Phát Audio</button>
        <button type="button" id="btn-audio-forward" class="btn btn-sm" title="Tua tới 5 giây">+5s ⏩</button>
        <span id="audio-time-display" class="audio-time-text">00:00 / 00:00</span>

        <select id="audio-speed-select" class="speed-select" title="Tốc độ phát">
          <option value="0.8">0.8x</option>
          <option value="1.0" selected>1.0x</option>
          <option value="1.2">1.2x</option>
        </select>
      </div>

      <div class="audio-scrub-wrap">
        <input type="range" id="audio-scrubber" min="0" max="100" value="0" step="0.1">
      </div>
      <div id="audio-load-status" class="audio-load-status text-muted">Đang kiểm tra audio...</div>
    </div>
  `;

  initAudioPlayerEvents();
}

function renderListeningPart1(part1Data, filterIds, drafts) {
  const container = document.getElementById("listening-part1");
  if (!container) return;
  const list = container.querySelector(".question-list");

  const baseQuestions = part1Data?.questions || [];
  const filtered = filterIds
    ? baseQuestions.filter((q) => filterIds.includes(`L1_${q.id}`))
    : baseQuestions;
  const renderable = filtered.filter(canRenderSourceImageQuestion);

  if (!canRenderListeningPart1(part1Data) || renderable.length === 0) {
    container.style.display = "none";
    if (list) list.innerHTML = "";
    return;
  }

  container.style.display = "block";
  list.innerHTML = `
    ${
      part1Data.sourceStatus === "NEEDS_SOURCE_IMAGE"
        ? `<div class="dev-source-warning">Chưa có hình ảnh gốc. Phần này chỉ hiển thị trong môi trường dev để kiểm tra template.</div>`
        : ""
    }
    <div class="listening-image-grid">
      ${renderable
        .map((q) => {
          const qKey = `L1_${q.id}`;
          const savedVal = drafts[qKey] !== undefined ? drafts[qKey] : "";
          const imageHtml = q.image
            ? `<img src="${q.image}" alt="Hình câu ${q.id}" loading="lazy">`
            : `<div class="missing-source-image"><strong>NEEDS_SOURCE_IMAGE</strong><span>Chưa có hình ảnh gốc cho câu ${q.id}</span></div>`;
          return `
            <div class="question-item listening-image-question" data-id="${qKey}">
              <div class="q-header">
                <strong>Câu ${q.id}</strong>
                <span class="text-muted"><small>Nghe và phán đoán câu có khớp với hình không</small></span>
              </div>
              <div class="source-image-frame">${imageHtml}</div>
              <div class="options-radio-group">
                <label class="radio-option tf-opt ${savedVal === "true" ? "selected" : ""}">
                  <input type="radio" name="q_${qKey}" value="true" ${savedVal === "true" ? "checked" : ""}>
                  <span>Đúng (√)</span>
                </label>
                <label class="radio-option tf-opt ${savedVal === "false" ? "selected" : ""}">
                  <input type="radio" name="q_${qKey}" value="false" ${savedVal === "false" ? "checked" : ""}>
                  <span>Sai (x)</span>
                </label>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderUnifiedAudioPlayer(p2Questions, p3Questions, filterIds, drafts) {
  const lp2Container = document.getElementById("listening-part2");
  const lp3Container = document.getElementById("listening-part3");

  const filteredP2 = filterIds
    ? (p2Questions || []).filter((q) => filterIds.includes(`L2_${q.id}`))
    : (p2Questions || []);
  const filteredP3 = filterIds
    ? (p3Questions || []).filter((q) => filterIds.includes(`L3_${q.id}`))
    : (p3Questions || []);

  if (filteredP2.length === 0 && filteredP3.length === 0) {
    lp2Container.style.display = "none";
    lp3Container.style.display = "none";
    lp2Container.querySelector(".question-list").innerHTML = "";
    lp3Container.querySelector(".question-list").innerHTML = "";
    return;
  }

  // Listening Part 2
  if (filteredP2.length === 0) {
    lp2Container.style.display = "none";
    lp2Container.querySelector(".question-list").innerHTML = "";
  } else {
    lp2Container.style.display = "block";
    const lp2List = lp2Container.querySelector(".question-list");
    const listeningImages = getImageSetImages(currentLessonData.imageSets?.listeningPart2 || currentLessonData.imageReference);
    lp2List.innerHTML = `
      ${renderImageChoiceReference("Bảng hình ảnh A - F", listeningImages, "listening-part2")}
    `;

    // Append Question items
    filteredP2.forEach((q) => {
      const qKey = `L2_${q.id}`;
      const savedVal = drafts[qKey] || "";
      lp2List.innerHTML += `
        <div class="question-item image-choice-question" data-id="${qKey}">
          <div class="q-header">
            <strong>Câu ${q.id}</strong>
            <span class="text-muted"><small>Nghe đối thoại và chọn hình A - F tương ứng</small></span>
          </div>
          ${renderImageChoiceOptions(qKey, savedVal)}
        </div>
      `;
    });

  }

  // Listening Part 3
  if (filteredP3.length === 0) {
    lp3Container.style.display = "none";
    lp3Container.querySelector(".question-list").innerHTML = "";
  } else {
    lp3Container.style.display = "block";
    const lp3List = lp3Container.querySelector(".question-list");
    lp3List.innerHTML = "";
    filteredP3.forEach((q) => {
      const qKey = `L3_${q.id}`;
      const savedVal = drafts[qKey] || "";
      lp3List.innerHTML += `
        <div class="question-item" data-id="${qKey}">
          <div class="q-header">
            <strong>${q.question}</strong>
          </div>
          <div class="options-radio-group vertical">
            ${q.options
              .map((opt) => {
                const optKey = opt.trim().charAt(0);
                return `
                <label class="radio-option vertical ${savedVal === optKey ? "selected" : ""}">
                  <input type="radio" name="q_${qKey}" value="${optKey}" ${savedVal === optKey ? "checked" : ""}>
                  <span>${opt}</span>
                </label>
              `;
              })
              .join("")}
          </div>
        </div>
      `;
    });
  }
}

function initAudioPlayerEvents() {
  const audio = document.getElementById("hsk2-main-audio");
  const btnToggle = document.getElementById("btn-audio-toggle");
  const btnRewind = document.getElementById("btn-audio-rewind");
  const btnForward = document.getElementById("btn-audio-forward");
  const timeDisplay = document.getElementById("audio-time-display");
  const scrubber = document.getElementById("audio-scrubber");
  const speedSelect = document.getElementById("audio-speed-select");
  const loadStatus = document.getElementById("audio-load-status");

  if (!audio || !btnToggle) return;

  const formatTime = (secs) => {
    if (!Number.isFinite(secs)) return "--:--";
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(secs % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  btnToggle.addEventListener("click", () => {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          btnToggle.innerHTML = "⏸ Tạm dừng";
          btnToggle.classList.add("btn-danger");
        })
        .catch(() => {
          btnToggle.innerHTML = "⚠️ Không phát được";
          if (loadStatus) loadStatus.textContent = "Trình duyệt chưa phát được audio. Hãy bấm lại sau khi file tải xong.";
          setTimeout(() => (btnToggle.innerHTML = "▶ Phát Audio"), 2000);
        });
    } else {
      audio.pause();
      btnToggle.innerHTML = "▶ Phát Audio";
      btnToggle.classList.remove("btn-danger");
    }
  });

  btnRewind?.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 5);
  });

  btnForward?.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
  });

  speedSelect?.addEventListener("change", () => {
    audio.playbackRate = parseFloat(speedSelect.value);
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      scrubber.value = (audio.currentTime / audio.duration) * 100;
      timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    if (loadStatus) loadStatus.textContent = `Audio đã sẵn sàng: ${formatTime(audio.duration)}.`;
    if (timeDisplay) timeDisplay.textContent = `00:00 / ${formatTime(audio.duration)}`;
  });

  audio.addEventListener("error", () => {
    if (loadStatus) loadStatus.textContent = "Không tải được audio. Vui lòng kiểm tra kết nối hoặc đường dẫn file.";
    btnToggle.innerHTML = "⚠️ Không có audio";
  });

  audio.addEventListener("ended", () => {
    btnToggle.innerHTML = "▶ Phát Audio";
    btnToggle.classList.remove("btn-danger");
  });

  scrubber?.addEventListener("input", () => {
    if (audio.duration) {
      audio.currentTime = (scrubber.value / 100) * audio.duration;
    }
  });
}

// -------------------------------------------------------------
// Reading Sections
// -------------------------------------------------------------
function renderReadingPart1(questions, imageRef, filterIds, drafts) {
  const container = document.getElementById("reading-part1");
  const list = container.querySelector(".question-list");
  const filtered = filterIds
    ? questions.filter((q) => filterIds.includes(`R1_${q.id}`))
    : questions;

  if (filtered.length === 0) {
    container.style.display = "none";
    list.innerHTML = "";
    return;
  }
  container.style.display = "block";
  const readingImages = getImageSetImages(imageRef);
  list.innerHTML = renderImageChoiceReference("Bảng hình ảnh A - F", readingImages, "reading-part1");

  filtered.forEach((q) => {
    const qKey = `R1_${q.id}`;
    const savedVal = drafts[qKey] || "";
    list.innerHTML += `
      <div class="question-item image-choice-question" data-id="${qKey}">
        <div class="q-header">
          <strong>Câu ${q.id}:</strong> <span class="hanzi-highlight">${q.text}</span>
        </div>
        ${renderImageChoiceOptions(qKey, savedVal)}
      </div>
    `;
  });
}

function renderReadingPart2(part2Data, filterIds, drafts) {
  const container = document.getElementById("reading-part2");
  const optionsBox = document.getElementById("reading-p2-options");
  const list = container.querySelector(".question-list");

  const filtered = filterIds
    ? part2Data.questions.filter((q) => filterIds.includes(`R2_${q.id}`))
    : part2Data.questions;

  if (filtered.length === 0) {
    container.style.display = "none";
    optionsBox.innerHTML = "";
    list.innerHTML = "";
    return;
  }
  container.style.display = "block";

  optionsBox.innerHTML = part2Data.options
    .map((opt) => `<div class="opt-pill"><strong>${opt.key}</strong> ${opt.word}</div>`)
    .join("");

  list.innerHTML = "";
  filtered.forEach((q) => {
    const qKey = `R2_${q.id}`;
    const savedVal = drafts[qKey] || "";
    list.innerHTML += `
      <div class="question-item" data-id="${qKey}">
        <div class="q-header">
          <strong>Câu ${q.id}:</strong> <span class="hanzi-highlight">${q.text}</span>
        </div>
        <div class="options-radio-group">
          ${part2Data.options
            .map(
              (opt) => `
            <label class="radio-option ${savedVal === opt.key ? "selected" : ""}">
              <input type="radio" name="q_${qKey}" value="${opt.key}" ${savedVal === opt.key ? "checked" : ""}>
              <span>${opt.key}</span>
            </label>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  });
}

function renderReadingPart3(questions, filterIds, drafts) {
  const container = document.getElementById("reading-part3");
  const list = container.querySelector(".question-list");
  const filtered = filterIds
    ? questions.filter((q) => filterIds.includes(`R3_${q.id}`))
    : questions;

  if (filtered.length === 0) {
    container.style.display = "none";
    list.innerHTML = "";
    return;
  }
  container.style.display = "block";
  list.innerHTML = "";

  filtered.forEach((q) => {
    const qKey = `R3_${q.id}`;
    const savedVal = drafts[qKey] !== undefined ? drafts[qKey] : "";
    list.innerHTML += `
      <div class="question-item" data-id="${qKey}">
        <div class="tf-context">
          <p class="tf-text"><strong>Câu ${q.id}:</strong> <span class="hanzi-highlight">${q.text}</span></p>
          <p class="tf-statement">👉 Phán đoán: <em>${q.statement}</em></p>
        </div>
        <div class="options-radio-group">
          <label class="radio-option tf-opt ${savedVal === "true" ? "selected" : ""}">
            <input type="radio" name="q_${qKey}" value="true" ${savedVal === "true" ? "checked" : ""}>
            <span>Đúng (√)</span>
          </label>
          <label class="radio-option tf-opt ${savedVal === "false" ? "selected" : ""}">
            <input type="radio" name="q_${qKey}" value="false" ${savedVal === "false" ? "checked" : ""}>
            <span>Sai (x)</span>
          </label>
        </div>
      </div>
    `;
  });
}

function renderReadingPart4(part4Data, filterIds, drafts) {
  const container = document.getElementById("reading-part4");
  const optionsBox = document.getElementById("reading-p4-options");
  const list = container.querySelector(".question-list");

  const filtered = filterIds
    ? part4Data.questions.filter((q) => filterIds.includes(`R4_${q.id}`))
    : part4Data.questions;

  if (filtered.length === 0) {
    container.style.display = "none";
    optionsBox.innerHTML = "";
    list.innerHTML = "";
    return;
  }
  container.style.display = "block";

  if (part4Data.type === "dialogue-matching") {
    optionsBox.innerHTML = "";
    list.innerHTML = `
      <div class="dialogue-match-board" data-dialogue-match-board>
        <div class="dialogue-match-column dialogue-question-column">
          <div class="dialogue-column-title">Câu cần ghép</div>
          ${filtered
            .map((q, index) => {
              const qKey = `R4_${q.id}`;
              const savedVal = drafts[qKey] || "";
              const picked = part4Data.options.find((opt) => opt.key === savedVal);
              return `
                <div class="question-item dialogue-question-card ${index === 0 ? "active" : ""} ${savedVal ? "answered" : ""}" data-id="${qKey}" data-dialogue-question>
                  <div class="dialogue-question-number">Câu ${q.id}</div>
                  <div class="dialogue-question-text hanzi-highlight">${q.text}</div>
                  <div class="dialogue-picked-answer" data-picked-label>${picked ? `Đã chọn ${picked.key}` : "Chạm để chọn"}</div>
                  <div class="dialogue-hidden-options">
                    ${part4Data.options
                      .map(
                        (opt) => `
                          <label class="radio-option ${savedVal === opt.key ? "selected" : ""}">
                            <input type="radio" name="q_${qKey}" value="${opt.key}" ${savedVal === opt.key ? "checked" : ""}>
                            <span>${opt.key}</span>
                          </label>
                        `
                      )
                      .join("")}
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
        <div class="dialogue-match-column dialogue-answer-column">
          <div class="dialogue-column-title">Lựa chọn A-F</div>
          ${part4Data.options
            .map(
              (opt) => `
                <button type="button" class="dialogue-answer-card" data-dialogue-answer="${opt.key}">
                  <strong>${opt.key}.</strong>
                  <span>${opt.text}</span>
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    `;
    return;
  }

  optionsBox.innerHTML = part4Data.options
    .map((opt) => `<div class="dialogue-opt-item"><strong>${opt.key}.</strong> ${opt.text}</div>`)
    .join("");

  list.innerHTML = "";
  filtered.forEach((q) => {
    const qKey = `R4_${q.id}`;
    const savedVal = drafts[qKey] || "";
    list.innerHTML += `
      <div class="question-item" data-id="${qKey}">
        <div class="q-header">
          <strong>Câu ${q.id}:</strong> <span class="hanzi-highlight">${q.text}</span>
        </div>
        <div class="options-radio-group">
          ${part4Data.options
            .map(
              (opt) => `
            <label class="radio-option ${savedVal === opt.key ? "selected" : ""}">
              <input type="radio" name="q_${qKey}" value="${opt.key}" ${savedVal === opt.key ? "checked" : ""}>
              <span>${opt.key}</span>
            </label>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  });
}

function initDialogueMatchingInteractions(form) {
  form.querySelectorAll("[data-dialogue-match-board]").forEach((board) => {
    const questions = Array.from(board.querySelectorAll("[data-dialogue-question]"));
    const answers = Array.from(board.querySelectorAll("[data-dialogue-answer]"));
    let activeQuestion = questions.find((q) => !q.querySelector("input[type=radio]:checked")) || questions[0] || null;

    const updateQuestionState = (questionEl) => {
      const checked = questionEl.querySelector("input[type=radio]:checked");
      const label = questionEl.querySelector("[data-picked-label]");
      questionEl.classList.toggle("answered", Boolean(checked));
      if (label) label.textContent = checked ? `Đã chọn ${checked.value}` : "Chạm để chọn";
    };

    const updateAnswerStates = () => {
      const activeValue = activeQuestion?.querySelector("input[type=radio]:checked")?.value || "";
      answers.forEach((answer) => answer.classList.toggle("selected", answer.dataset.dialogueAnswer === activeValue));
    };

    const setActive = (questionEl) => {
      if (!questionEl) return;
      activeQuestion = questionEl;
      questions.forEach((q) => q.classList.toggle("active", q === activeQuestion));
      updateAnswerStates();
    };

    questions.forEach((question) => {
      updateQuestionState(question);
      question.addEventListener("click", () => setActive(question));
    });

    answers.forEach((answer) => {
      answer.addEventListener("click", () => {
        if (!activeQuestion) return;
        const value = answer.dataset.dialogueAnswer;
        const radio = activeQuestion.querySelector(`input[value="${value}"]`);
        if (!radio) return;
        radio.checked = true;
        radio.dispatchEvent(new Event("change", { bubbles: true }));
        updateQuestionState(activeQuestion);
        const next = questions.find((q) => !q.querySelector("input[type=radio]:checked"));
        setActive(next || activeQuestion);
      });
    });

    setActive(activeQuestion);
  });
}

// -------------------------------------------------------------
// Evaluation, Scoring, Storage & Telegram
// -------------------------------------------------------------
async function evaluateAndSubmitExam() {
  if (isSubmittingExam) return;
  isSubmittingExam = true;
  const form = document.getElementById("exam-form");
  const submitBtn = document.getElementById("btn-submit-exam");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.dataset.originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Đang lưu kết quả...";
  }
  const questionsInView = form.querySelectorAll(".question-item");

  let newlyCorrect = 0;
  const currentExamResult = (window.Storage && window.Storage.getExamResult(currentLessonId)) || {
    studentName: (window.Storage ? window.Storage.getStudentName() : "") || "Học viên",
    lesson: `Bài ${currentLessonId}`,
    title: currentLessonInfo ? currentLessonInfo.titleZH : "",
    score: 0,
    percentage: 0,
    correct: 0,
    total: activeQuestionMap.size,
    wrong: activeQuestionMap.size,
    details: []
  };

  const detailMap = new Map();
  (currentExamResult.details || []).forEach((d) => detailMap.set(d.id, d));

  questionsInView.forEach((qEl) => {
    const qKey = qEl.dataset.id;
    const qData = activeQuestionMap.get(qKey);
    if (!qData) return;

    const checked = form.querySelector(`input[name="q_${qKey}"]:checked`);
    const userAns = checked ? checked.value.toString().trim() : null;
    const expectedAns = qData.correctAnswer.toString().trim();
    const isCorrect = userAns === expectedAns;

    if (isCorrect) newlyCorrect++;

    detailMap.set(qKey, {
      id: qKey,
      section: qData.section,
      text: qData.label || qKey,
      given: userAns,
      answer: expectedAns,
      correct: isCorrect,
      explanation: qData.explanation || qData.vi || qData.transcript || ""
    });
  });

  // Calculate master score across all questions in the lesson
  const allDetails = Array.from(detailMap.values());
  const masterTotal = activeQuestionMap.size;
  const masterCorrect = allDetails.filter((d) => d.correct).length;
  const masterPercentage = Math.round((masterCorrect / masterTotal) * 100);

  const now = new Date();
  const submittedAt = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")} - ${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1).toString().padStart(2, "0")}/${now.getFullYear()}`;

  const updatedResult = {
    studentName: (window.Storage ? window.Storage.getStudentName() : "") || "Học viên",
    type: isRetryMode ? "workbook_retry" : "workbook",
    lessonId: currentLessonId,
    lesson: `Bài ${currentLessonId}`,
    title: currentLessonInfo ? currentLessonInfo.titleZH : "",
    score: masterPercentage,
    percentage: masterPercentage,
    correct: masterCorrect,
    total: masterTotal,
    wrong: masterTotal - masterCorrect,
    details: allDetails,
    submittedAt,
    submissionId: `workbook-${currentLessonId}-${Date.now()}`,
    attemptNumber: getWorkbookAttemptNumber(currentLessonId)
  };

  // Persist result and reset drafts
  if (window.Storage) {
    window.Storage.saveExamResult(currentLessonId, updatedResult);
    window.Storage.clearDraftAnswers(currentLessonId);
  }

  // Display Result UI
  displayResultView(updatedResult);

  // Send only official workbook submissions to Telegram, after local save succeeds.
  const tgNoticeEl = document.getElementById("telegram-status-notice");
  if (tgNoticeEl) {
    tgNoticeEl.innerHTML = isRetryMode
      ? `<span class="badge badge-secondary">ℹ️ Kết quả ôn câu sai đã lưu trên máy.</span>`
      : `<span class="spinner-inline"></span> Đang gửi kết quả đến Telegram giáo viên...`;
  }

  if (window.TelegramService && !isRetryMode) {
    const tgResult = await window.TelegramService.sendResult(buildWorkbookTelegramPayload(updatedResult));
    if (tgNoticeEl) {
      if (tgResult.success) {
        tgNoticeEl.innerHTML = `<span class="badge badge-success">✅ Đã gửi kết quả về Telegram cho giáo viên</span>`;
      } else {
        tgNoticeEl.innerHTML = `<span class="badge badge-secondary">ℹ️ ${tgResult.message || "Đã lưu kết quả bài làm vào hệ thống"}</span>`;
      }
    }
  }
  isSubmittingExam = false;
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = submitBtn.dataset.originalText || "📤 NỘP BÀI TẬP VÀ CHẤM ĐIỂM";
  }
}

function getWorkbookAttemptNumber(lessonId) {
  const previous = window.Storage?.getExamResult(lessonId);
  return previous?.attemptNumber ? previous.attemptNumber + 1 : 1;
}

function buildWorkbookTelegramPayload(result) {
  const wrongDetails = (result.details || []).filter((item) => !item.correct);
  return {
    type: "workbook",
    studentName: result.studentName,
    lessonId: result.lessonId,
    lessonTitle: result.title,
    lessonLabel: result.lesson,
    score: result.correct,
    total: result.total,
    percent: result.percentage,
    percentage: result.percentage,
    correctCount: result.correct,
    wrongCount: result.wrong,
    wrongQuestions: wrongDetails.map((item) => item.id.replace(/^[A-Z]+\d?_/, "")),
    wrongVocabulary: [],
    wrongGrammar: [],
    wrongDetails: wrongDetails.map((item) => ({
      id: item.id,
      section: item.section,
      text: item.text,
      given: item.given,
      answer: item.answer
    })),
    attemptNumber: result.attemptNumber || 1,
    submittedAt: result.submittedAt,
    submissionId: result.submissionId
  };
}

function displayResultView(result) {
  const userInfoForm = document.getElementById("user-info-form");
  const examArea = document.getElementById("exam-area");
  const examResult = document.getElementById("exam-result");

  if (userInfoForm) userInfoForm.style.display = "none";
  if (examArea) examArea.style.display = "none";
  if (examResult) examResult.style.display = "block";

  const wrongList = (result.details || []).filter((item) => !item.correct);

  let gradeBadge = "🏆 Xuất sắc";
  let badgeClass = "badge-success";
  if (result.percentage < 60) {
    gradeBadge = "⚠️ Cần ôn tập thêm";
    badgeClass = "badge-danger";
  } else if (result.percentage < 80) {
    gradeBadge = "👍 Đạt yêu cầu";
    badgeClass = "badge-primary";
  }

  document.getElementById("score-display").innerHTML = `
    <div class="result-card-banner">
      <div class="result-achievement-copy">
        <span class="eyebrow-zh">完成了！</span>
        <h2>Hoàn thành Bài ${currentLessonId}</h2>
        <p>${result.percentage >= 80 ? "Rất tốt! Bạn đã nắm khá chắc bài này." : "Bạn đã hoàn thành bài. Mình cùng ôn lại những câu chưa chắc nhé."}</p>
      </div>
      <div class="result-header">
        <span class="badge ${badgeClass}">${gradeBadge}</span>
        <span class="result-timestamp">📅 ${result.submittedAt || ""}</span>
      </div>
      <div class="result-main-score">
        <div class="score-number">${result.correct} <small>/ ${result.total}</small></div>
        <div class="score-percentage">${result.percentage}%</div>
      </div>
      <div class="result-meta-row">
        <span>👤 Học viên: <strong>${result.studentName}</strong></span>
        <span>❌ Số câu chưa đúng: <strong>${result.wrong}</strong></span>
      </div>
      <div id="telegram-status-notice" class="mt-10"></div>
    </div>

    <div class="result-actions-bar">
      ${
        wrongList.length > 0
          ? `<button class="btn btn-danger" id="btn-retry-wrong">🔄 Ôn lại ${wrongList.length} câu sai</button>`
          : ""
      }
      <button class="btn btn-primary" id="btn-retake-all">📝 Làm lại toàn bộ bài</button>
    </div>
  `;

  // Wrong Answers Detailed Review List
  const wrongContainer = document.getElementById("wrong-answers");
  if (wrongList.length > 0) {
    wrongContainer.innerHTML = `
      <div class="wrong-questions-box card">
        <h4>📋 Danh sách các câu cần ôn lại (${wrongList.length} câu):</h4>
        <div class="wrong-items-list">
          ${wrongList
            .map(
              (item, i) => `
            <div class="wrong-detail-item">
              <div class="w-q-section"><small class="badge badge-secondary">${item.section || ""}</small></div>
              <div class="w-q-title"><strong>Câu ${i + 1}:</strong> ${item.text}</div>
              <div class="w-q-answers">
                <span class="user-choice">Bạn chọn: <strong>${formatAnswerText(item.given)}</strong> ❌</span>
                <span class="correct-choice">Đáp án đúng: <strong>${formatAnswerText(item.answer)}</strong> ✅</span>
              </div>
              ${item.explanation ? `<div class="w-q-exp"><small>💡 Giải thích / Lời dịch: ${item.explanation}</small></div>` : ""}
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  } else {
    wrongContainer.innerHTML = `
      <div class="alert alert-success text-center p-20">
        🎉 <strong>Tuyệt vời!</strong> Bạn đã làm đúng 100% tất cả các câu trong bài tập này!
      </div>
    `;
  }

  // Attach button events
  document.getElementById("btn-retry-wrong")?.addEventListener("click", () => {
    isRetryMode = true;
    const wrongIds = wrongList.map((w) => w.id);
    examResult.style.display = "none";
    examArea.style.display = "block";
    renderExam(currentLessonData, wrongIds);
    document.getElementById("btn-submit-exam").innerHTML = "📤 NỘP BÀI ÔN TẬP CÂU SAI";
    examArea.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("btn-retake-all")?.addEventListener("click", () => {
    if (confirm("Bạn có chắc muốn làm lại toàn bộ bài tập từ đầu?")) {
      if (window.Storage) window.Storage.clearExamResult(currentLessonId);
      examResult.style.display = "none";
      examArea.style.display = "block";
      isRetryMode = false;
      renderExam(currentLessonData);
      document.getElementById("btn-submit-exam").innerHTML = "📤 NỘP BÀI TẬP VÀ CHẤM ĐIỂM";
      examArea.scrollIntoView({ behavior: "smooth" });
    }
  });

  examResult.scrollIntoView({ behavior: "smooth" });
}

function formatAnswerText(val) {
  if (val === null || val === undefined || val === "") return "(Chưa chọn)";
  if (val === "true") return "Đúng (√)";
  if (val === "false") return "Sai (x)";
  return val;
}
