/**
 * Vocabulary & Flashcard Module for HSK2 Web App
 */

let currentVocabList = [];
let activeLessonId = 1;
let currentFcIndex = 0;
let currentFcFilter = "all"; // 'all', 'forgot', 'remembered'
let filteredFcList = [];

window.initVocabulary = function(vocabData, lessonId) {
  currentVocabList = vocabData;
  activeLessonId = lessonId;
  currentFcIndex = 0;
  currentFcFilter = "all";

  renderVocabTable(vocabData);
  initFlashcardControls();
  refreshFlashcardFilter();
};

function renderVocabTable(vocabData) {
  const tbody = document.querySelector("#vocab-table tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  vocabData.forEach((word) => {
    const status = window.Storage ? window.Storage.getFlashcardStatus(activeLessonId, word.id) : null;
    const statusBadge =
      status === "remembered"
        ? `<span class="badge badge-success">Đã nhớ</span>`
        : status === "forgot"
        ? `<span class="badge badge-danger">Cần ôn</span>`
        : `<span class="badge badge-secondary">Chưa học</span>`;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <span class="hanzi-text">${word.hanzi}</span>
        <button class="btn-speak" title="Nghe phát âm" data-text="${word.hanzi}">🔊</button>
      </td>
      <td><span class="pinyin-text">${word.pinyin}</span></td>
      <td><span class="tag-wordtype">${word.wordType}</span></td>
      <td>
        <strong>${word.meaning}</strong>
        ${word.exampleZH ? `<div class="vocab-example"><small>Ví dụ: ${word.exampleZH} (${word.exampleVI})</small></div>` : ""}
      </td>
      <td class="text-center">${statusBadge}</td>
    `;
    tbody.appendChild(tr);
  });

  // Attach speech synthesis
  tbody.querySelectorAll(".btn-speak").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      speakChinese(btn.dataset.text);
    });
  });
}

function initFlashcardControls() {
  const fcEl = document.querySelector(".flashcard");
  const btnPrev = document.getElementById("btn-fc-prev");
  const btnNext = document.getElementById("btn-fc-next");
  const btnFlip = document.getElementById("btn-fc-flip");
  const btnForgot = document.getElementById("btn-fc-forgot");
  const btnRemembered = document.getElementById("btn-fc-remembered");

  if (!fcEl) return;

  // Flip action
  const toggleFlip = () => fcEl.classList.toggle("flipped");
  btnFlip?.addEventListener("click", toggleFlip);
  fcEl.addEventListener("click", toggleFlip);

  // Next / Prev
  btnPrev?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentFcIndex > 0) {
      currentFcIndex--;
      updateFlashcardUI();
    }
  });

  btnNext?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentFcIndex < filteredFcList.length - 1) {
      currentFcIndex++;
      updateFlashcardUI();
    }
  });

  // Remember / Forgot buttons
  btnForgot?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (filteredFcList.length === 0) return;
    const word = filteredFcList[currentFcIndex];
    if (window.Storage) {
      window.Storage.setFlashcardStatus(activeLessonId, word.id, "forgot");
    }
    renderVocabTable(currentVocabList);
    advanceFlashcard();
    showFlashFeedback("review", word);
  });

  btnRemembered?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (filteredFcList.length === 0) return;
    const word = filteredFcList[currentFcIndex];
    if (window.Storage) {
      window.Storage.setFlashcardStatus(activeLessonId, word.id, "remembered");
    }
    renderVocabTable(currentVocabList);
    advanceFlashcard();
    showFlashFeedback("remembered", word);
  });

  // Pronunciation on flashcard
  const fcFront = document.querySelector(".flashcard-front");
  if (fcFront && !fcFront.querySelector(".btn-fc-audio")) {
    const audioBtn = document.createElement("button");
    audioBtn.className = "btn-fc-audio";
    audioBtn.innerHTML = "🔊";
    audioBtn.title = "Phát âm";
    audioBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (filteredFcList.length > 0) {
        speakChinese(filteredFcList[currentFcIndex].hanzi);
      }
    });
    fcFront.appendChild(audioBtn);
  }
}

function advanceFlashcard() {
  if (currentFcIndex < filteredFcList.length - 1) {
    currentFcIndex++;
    updateFlashcardUI();
  } else {
    // Reached end of deck
    updateFlashcardUI();
  }
}

function refreshFlashcardFilter(filter = "all") {
  currentFcFilter = filter;
  if (filter === "forgot") {
    filteredFcList = currentVocabList.filter(
      (w) => window.Storage && window.Storage.getFlashcardStatus(activeLessonId, w.id) === "forgot"
    );
  } else if (filter === "remembered") {
    filteredFcList = currentVocabList.filter(
      (w) => window.Storage && window.Storage.getFlashcardStatus(activeLessonId, w.id) === "remembered"
    );
  } else {
    filteredFcList = [...currentVocabList];
  }

  currentFcIndex = 0;
  updateFlashcardUI();
}

function updateFlashcardUI() {
  const fcEl = document.querySelector(".flashcard");
  if (!fcEl) return;

  fcEl.classList.remove("flipped");

  const stats = window.Storage
    ? window.Storage.getFlashcardStats(activeLessonId, currentVocabList.length)
    : { remembered: 0, forgot: 0, total: currentVocabList.length };

  const statsEl = document.getElementById("fc-stats-bar");
  if (statsEl) {
    statsEl.innerHTML = `
      <span class="stat-item stat-rem">✅ Đã nhớ: ${stats.remembered}</span>
      <span class="stat-item stat-forgot">❌ Cần ôn: ${stats.forgot}</span>
      <span class="stat-item stat-total">📚 Tổng: ${stats.total}</span>
    `;
  }

  updateFlashcardCompletion(stats);

  const allTab = document.querySelector(".fc-tab[onclick*=\"'all'\"]");
  if (allTab) allTab.textContent = `Tất cả (${currentVocabList.length})`;

  if (filteredFcList.length === 0) {
    document.getElementById("fc-hanzi").textContent = "🎉";
    document.getElementById("fc-pinyin").textContent = "";
    document.getElementById("fc-meaning").textContent = "Không có thẻ từ nào trong mục này!";
    const exBox = document.getElementById("fc-examples");
    if (exBox) exBox.innerHTML = "";
    document.getElementById("fc-progress").textContent = "0 / 0";
    return;
  }

  const word = filteredFcList[currentFcIndex];

  setTimeout(() => {
    document.getElementById("fc-hanzi").textContent = word.hanzi;
    document.getElementById("fc-front-pinyin").textContent = word.pinyin;
    document.getElementById("fc-back-hanzi").textContent = word.hanzi;
    document.getElementById("fc-pinyin").textContent = word.pinyin;
    document.getElementById("fc-meaning").textContent = `${word.meaning} (${word.wordType})`;

    const exBox = document.getElementById("fc-examples");
    if (exBox) {
      if (word.exampleZH) {
        exBox.innerHTML = `
          <div class="fc-example-item">
            <div class="ex-zh">${word.exampleZH}</div>
            <div class="ex-py"><small>${word.examplePinyin || ""}</small></div>
            <div class="ex-vi">${word.exampleVI || ""}</div>
          </div>
        `;
      } else {
        exBox.innerHTML = "";
      }
    }

    const remaining = Math.max(0, filteredFcList.length - currentFcIndex - 1);
    document.getElementById("fc-progress").innerHTML = `
      <span>Từ mới</span>
      <strong>${currentFcIndex + 1} / ${filteredFcList.length}</strong>
      <small>${remaining > 0 ? `Còn ${remaining} từ` : "Bạn đang ở thẻ cuối"}</small>
    `;
  }, 120);
}

function updateFlashcardCompletion(stats) {
  const completion = document.getElementById("fc-completion");
  if (!completion) return;

  const reviewed = stats.remembered + stats.forgot;
  if (!stats.total || reviewed < stats.total) {
    completion.hidden = true;
    completion.innerHTML = "";
    return;
  }

  completion.hidden = false;
  completion.innerHTML = `
    <div class="completion-mark">✓</div>
    <div>
      <span class="eyebrow-zh">完成了！</span>
      <h3>Hoàn thành từ mới</h3>
      <p>Bạn đã xem hết ${stats.total} từ.</p>
      <p><strong>${stats.remembered}</strong> từ đã nhớ · <strong>${stats.forgot}</strong> từ cần ôn</p>
      <div class="completion-actions">
        ${stats.forgot > 0 ? `<button class="btn btn-secondary" id="btn-review-forgot" type="button">Ôn ${stats.forgot} từ</button>` : ""}
        <button class="btn btn-primary" id="btn-go-grammar" type="button">Học ngữ pháp →</button>
      </div>
    </div>
  `;

  document.getElementById("btn-review-forgot")?.addEventListener("click", () => refreshFlashcardFilter("forgot"));
  document.getElementById("btn-go-grammar")?.addEventListener("click", () => {
    if (window.activateLessonTab && activeLessonId) {
      window.activateLessonTab(activeLessonId, "grammar");
    }
    document.querySelector("#grammar")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function showFlashFeedback(type, word) {
  const completion = document.getElementById("fc-completion");
  if (!completion) return;
  completion.hidden = false;
  completion.classList.add("micro-feedback");
  completion.innerHTML =
    type === "remembered"
      ? `<div class="completion-mark">✓</div><div><strong>很好！</strong><p>Bạn nhớ từ <b>${word.hanzi}</b> rồi.</p></div>`
      : `<div class="completion-mark soft">↻</div><div><strong>Để ôn lại nhé</strong><p><b>${word.hanzi}</b> · ${word.pinyin} = ${word.meaning}</p></div>`;
  window.setTimeout(() => {
    completion.classList.remove("micro-feedback");
    updateFlashcardCompletion(
      window.Storage ? window.Storage.getFlashcardStats(activeLessonId, currentVocabList.length) : { remembered: 0, forgot: 0, total: currentVocabList.length }
    );
  }, 650);
}

function speakChinese(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}
