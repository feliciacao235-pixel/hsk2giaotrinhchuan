/**
 * Vocabulary & Grammar Practice Games Module
 * Provides multiple game modes:
 * - Mode 1: 4-Option Multiple Choice (Hán tự -> Nghĩa, Nghĩa -> Hán tự, Hán tự -> Pinyin)
 * - Mode 2: Matching 2 Columns (Ghép cặp Hán tự ↔ Nghĩa)
 * - Mode 3: Fill in the Blank (Điền từ vào câu / Đục lỗ)
 * - Mode 4: Sentence Scramble (Sắp xếp từ thành câu)
 * - Mode 5: Quick Challenge (Thử thách tổng hợp)
 */

window.initPracticeGames = function(gameData, lessonId) {
  const container = document.getElementById("practice-container");
  if (!container) return;

  renderGameSelector(gameData, lessonId);
};

function renderGameSelector(gameData, lessonId) {
  const container = document.getElementById("practice-container");
  const quizCount = (gameData.quizQuestions || []).filter(
    (q) => q.type === "hanzi-to-meaning" || q.type === "meaning-to-hanzi" || q.type === "hanzi-to-pinyin"
  ).length;
  const matchingCount = (gameData.matchingPairs || []).length;
  const fillCount = (gameData.quizQuestions || []).filter((q) => q.type === "fill-blank").length;
  const scrambleCount = (gameData.quizQuestions || []).filter((q) => q.type === "sentence-scramble").length;
  const totalChallenge = (gameData.quizQuestions || []).length;

  container.innerHTML = `
    <div class="practice-intro card">
      <span class="eyebrow-zh">练习一下</span>
      <h3>Luyện tập</h3>
      <p>Bạn muốn luyện gì trước? Chọn một hoạt động ngắn để củng cố Bài ${lessonId}.</p>

      <button class="quick-challenge-card" data-mode="all" type="button">
        <span>⚡</span>
        <strong>Thử thách Bài ${lessonId}</strong>
        <small>Từ vựng + ngữ pháp · ${totalChallenge} câu</small>
        <em>BẮT ĐẦU →</em>
      </button>
      
      <div class="game-mode-grid">
        <button class="game-card-btn" data-mode="quiz">
          <span class="game-icon">🎯</span>
          <span class="game-title">Nhớ từ</span>
          <span class="game-desc">${quizCount} câu · Hán tự ↔ Nghĩa ↔ Pinyin</span>
        </button>

        <button class="game-card-btn" data-mode="matching">
          <span class="game-icon">🔗</span>
          <span class="game-title">Ghép từ</span>
          <span class="game-desc">${matchingCount} cặp · Hán tự | Nghĩa tiếng Việt</span>
        </button>

        <button class="game-card-btn" data-mode="fill">
          <span class="game-icon">✏️</span>
          <span class="game-title">Điền từ vào câu</span>
          <span class="game-desc">${fillCount} câu · Chọn từ đúng vào chỗ trống</span>
        </button>

        <button class="game-card-btn" data-mode="scramble">
          <span class="game-icon">🧩</span>
          <span class="game-title">Sắp xếp câu</span>
          <span class="game-desc">${scrambleCount} câu · Luyện trật tự câu</span>
        </button>
      </div>
    </div>

    <div id="active-game-area" style="display:none;"></div>
  `;

  const buttons = container.querySelectorAll("[data-mode]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      startGame(mode, gameData, lessonId);
    });
  });
}

function startGame(mode, gameData, lessonId) {
  const intro = document.querySelector(".practice-intro");
  const gameArea = document.getElementById("active-game-area");
  if (intro) intro.style.display = "none";
  if (gameArea) {
    gameArea.style.display = "block";
    gameArea.innerHTML = "";
  }

  if (mode === "matching") {
    startMatchingGame(gameData.matchingPairs, gameData, lessonId);
  } else {
    startQuizMode(mode, gameData, lessonId);
  }
}

// -------------------------------------------------------------
// MODE: MATCHING 2 COLUMNS (GHÉP CẶP)
// -------------------------------------------------------------
function startMatchingGame(pairs, gameData, lessonId) {
  const gameArea = document.getElementById("active-game-area");
  const shuffledZH = [...pairs].sort(() => Math.random() - 0.5);
  const shuffledVI = [...pairs].sort(() => Math.random() - 0.5);

  let selectedLeft = null; // { id, el }
  let selectedRight = null; // { id, el }
  let matchedCount = 0;
  const total = pairs.length;

  gameArea.innerHTML = `
    <div class="card game-wrapper">
      <div class="game-header-bar">
        <button class="btn btn-sm btn-back-game">⬅ Chọn dạng khác</button>
        <h4>🔗 Ghép Hán tự ↔ Nghĩa tiếng Việt</h4>
        <span class="game-score-badge" id="match-counter">0 / ${total} cặp</span>
      </div>
      <p class="game-instruction">Nhấn chọn một ô bên trái, sau đó chọn ô tương ứng bên phải để ghép đôi.</p>

      <div class="matching-columns">
        <div class="matching-col" id="col-left">
          ${shuffledZH
            .map(
              (p) =>
                `<button class="match-item match-zh" data-id="${p.id}"><span class="match-hanzi">${p.zh}</span> <small class="match-pinyin">${p.pinyin}</small></button>`
            )
            .join("")}
        </div>
        <div class="matching-col" id="col-right">
          ${shuffledVI
            .map(
              (p) =>
                `<button class="match-item match-vi" data-id="${p.id}">${p.vi}</button>`
            )
            .join("")}
        </div>
      </div>

      <div id="matching-feedback" class="game-feedback"></div>
    </div>
  `;

  gameArea.querySelector(".btn-back-game").addEventListener("click", () => {
    renderGameSelector(gameData, lessonId);
  });

  const leftItems = gameArea.querySelectorAll(".match-zh");
  const rightItems = gameArea.querySelectorAll(".match-vi");

  leftItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("matched")) return;
      leftItems.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedLeft = { id: btn.dataset.id, el: btn };
      checkMatch();
    });
  });

  rightItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("matched")) return;
      rightItems.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedRight = { id: btn.dataset.id, el: btn };
      checkMatch();
    });
  });

  function checkMatch() {
    if (!selectedLeft || !selectedRight) return;

    if (selectedLeft.id === selectedRight.id) {
      // MATCH!
      selectedLeft.el.classList.remove("selected");
      selectedRight.el.classList.remove("selected");
      selectedLeft.el.classList.add("matched");
      selectedRight.el.classList.add("matched");
      matchedCount++;

      document.getElementById("match-counter").textContent = `${matchedCount} / ${total} cặp`;
      selectedLeft = null;
      selectedRight = null;

      if (matchedCount === total) {
        document.getElementById("matching-feedback").innerHTML = `
          <div class="alert alert-success completion-lite">
            <strong>完成了！Hoàn thành ghép từ</strong>
            <p>Bạn đã ghép đúng toàn bộ ${total} cặp từ vựng.</p>
            <button class="btn btn-primary btn-sm mt-10" id="btn-replay-match">Chơi lại</button>
          </div>
        `;
        document.getElementById("btn-replay-match")?.addEventListener("click", () => {
          startMatchingGame(pairs, gameData, lessonId);
        });
      }
    } else {
      // WRONG MATCH
      const lEl = selectedLeft.el;
      const rEl = selectedRight.el;
      lEl.classList.add("shake-error");
      rEl.classList.add("shake-error");
      document.getElementById("matching-feedback").innerHTML = `
        <div class="alert alert-danger micro-feedback">
          <strong>Chưa đúng</strong>
          <p>Thử nhìn lại Hán tự và nghĩa rồi ghép lại nhé.</p>
        </div>
      `;

      setTimeout(() => {
        lEl.classList.remove("shake-error", "selected");
        rEl.classList.remove("shake-error", "selected");
        document.getElementById("matching-feedback").innerHTML = "";
      }, 500);

      selectedLeft = null;
      selectedRight = null;
    }
  }
}

// -------------------------------------------------------------
// QUIZ & SENTENCE SCRAMBLE MODES
// -------------------------------------------------------------
function startQuizMode(mode, gameData, lessonId) {
  let questions = [];
  const allQuestions = gameData.quizQuestions || [];

  if (mode === "quiz") {
    questions = allQuestions.filter(
      (q) => q.type === "hanzi-to-meaning" || q.type === "meaning-to-hanzi" || q.type === "hanzi-to-pinyin"
    );
  } else if (mode === "fill") {
    questions = allQuestions.filter((q) => q.type === "fill-blank");
  } else if (mode === "scramble") {
    questions = allQuestions.filter((q) => q.type === "sentence-scramble");
  } else {
    // mode === "all"
    questions = [...allQuestions];
  }

  // Shuffle questions
  questions = questions.sort(() => Math.random() - 0.5);

  let currentIndex = 0;
  let correctCount = 0;
  const totalQuestions = questions.length;
  const gameArea = document.getElementById("active-game-area");

  function renderCurrentQuestion() {
    if (currentIndex >= totalQuestions) {
      renderGameResult();
      return;
    }

    const q = questions[currentIndex];
    const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

    gameArea.innerHTML = `
      <div class="card game-wrapper">
        <div class="game-header-bar">
          <button class="btn btn-sm btn-back-game">⬅ Thoát</button>
          <span>Câu ${currentIndex + 1} / ${totalQuestions}</span>
          <span class="game-score-badge">Đúng: ${correctCount}</span>
        </div>

        <div class="progress-bar-container mt-10 mb-15">
          <div class="progress-bar" style="width: ${progressPercent}%;"></div>
        </div>

        <div id="question-card-body"></div>
      </div>
    `;

    gameArea.querySelector(".btn-back-game").addEventListener("click", () => {
      renderGameSelector(gameData, lessonId);
    });

    const cardBody = document.getElementById("question-card-body");

    if (q.type === "sentence-scramble") {
      renderScrambleQuestion(q, cardBody);
    } else {
      renderMultipleChoiceQuestion(q, cardBody);
    }
  }

  function renderMultipleChoiceQuestion(q, cardBody) {
    let typeLabel = "Trắc nghiệm";
    if (q.type === "hanzi-to-meaning") typeLabel = "Chọn nghĩa tiếng Việt phù hợp:";
    if (q.type === "meaning-to-hanzi") typeLabel = "Chọn chữ Hán tương ứng:";
    if (q.type === "hanzi-to-pinyin") typeLabel = "Chọn phiên âm Pinyin đúng:";
    if (q.type === "fill-blank") typeLabel = "Điền từ thích hợp vào chỗ trống:";

    cardBody.innerHTML = `
      <div class="quiz-question-box">
        <span class="quiz-type-tag">${typeLabel}</span>
        <div class="quiz-prompt-text">${q.prompt}</div>
        ${q.pinyin ? `<div class="quiz-pinyin-hint">(${q.pinyin})</div>` : ""}
        ${q.translation ? `<div class="quiz-trans-hint">${q.translation}</div>` : ""}
      </div>

      <div class="quiz-options-grid">
        ${q.options
          .map(
            (opt, idx) => `
          <button class="btn-quiz-opt" data-opt="${opt}">
            <span class="opt-key">${["A", "B", "C", "D"][idx] || idx + 1}</span>
            <span class="opt-text">${opt}</span>
          </button>
        `
          )
          .join("")}
      </div>

      <div id="quiz-feedback-box" class="mt-15" style="display:none;"></div>
    `;

    const optButtons = cardBody.querySelectorAll(".btn-quiz-opt");
    let answered = false;

    optButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;

        const selectedOpt = btn.dataset.opt;
        const isCorrect = selectedOpt === q.answer;
        const feedbackBox = document.getElementById("quiz-feedback-box");
        feedbackBox.style.display = "block";

        if (isCorrect) {
          correctCount++;
          btn.classList.add("opt-correct");
          feedbackBox.innerHTML = `
            <div class="alert alert-success micro-feedback">
              ✅ <strong>很好！Chính xác!</strong>
              <p>${q.prompt} = ${q.answer}</p>
              <button class="btn btn-primary btn-sm btn-next-q">Tiếp tục ➡</button>
            </div>
          `;
        } else {
          btn.classList.add("opt-wrong");
          optButtons.forEach((b) => {
            if (b.dataset.opt === q.answer) b.classList.add("opt-correct");
          });
          feedbackBox.innerHTML = `
            <div class="alert alert-danger micro-feedback">
              <strong>Chưa đúng</strong>
              <p>Đáp án đúng là: <strong>${q.answer}</strong></p>
              <p>Thử nhớ lại cách dùng từ/cấu trúc này nhé.</p>
              <button class="btn btn-primary btn-sm btn-next-q">Tiếp tục ➡</button>
            </div>
          `;
        }

        feedbackBox.querySelector(".btn-next-q").addEventListener("click", () => {
          currentIndex++;
          renderCurrentQuestion();
        });
      });
    });
  }

  function renderScrambleQuestion(q, cardBody) {
    const shuffledWords = [...q.words].sort(() => Math.random() - 0.5);
    let selectedWords = [];

    cardBody.innerHTML = `
      <div class="quiz-question-box">
        <span class="quiz-type-tag">Sắp xếp từ thành câu hoàn chỉnh</span>
        <div class="quiz-trans-hint">${q.translation}</div>
      </div>

      <div class="scramble-dropzone" id="scramble-dropzone">
        <span class="dropzone-placeholder">Bấm vào các từ bên dưới theo thứ tự đúng...</span>
      </div>

      <div class="scramble-word-bank" id="scramble-bank">
        ${shuffledWords
          .map(
            (w, i) =>
              `<button class="word-tile" data-index="${i}" data-word="${w}">${w}</button>`
          )
          .join("")}
      </div>

      <div class="scramble-controls mt-15">
        <button class="btn btn-sm" id="btn-reset-scramble">Làm lại câu này</button>
        <button class="btn btn-primary btn-sm" id="btn-check-scramble" disabled>Kiểm tra</button>
      </div>

      <div id="scramble-feedback" class="mt-15" style="display:none;"></div>
    `;

    const dropzone = document.getElementById("scramble-dropzone");
    const bank = document.getElementById("scramble-bank");
    const btnCheck = document.getElementById("btn-check-scramble");
    const btnReset = document.getElementById("btn-reset-scramble");

    function updateDropzoneUI() {
      if (selectedWords.length === 0) {
        dropzone.innerHTML = `<span class="dropzone-placeholder">Bấm vào các từ bên dưới theo thứ tự đúng...</span>`;
        btnCheck.disabled = true;
      } else {
        dropzone.innerHTML = selectedWords
          .map(
            (item, idx) =>
              `<span class="placed-tile" data-idx="${idx}">${item.word}</span>`
          )
          .join(" ");

        btnCheck.disabled = selectedWords.length !== q.words.length;

        // Click placed tile to remove it
        dropzone.querySelectorAll(".placed-tile").forEach((tile) => {
          tile.addEventListener("click", () => {
            const idx = parseInt(tile.dataset.idx, 10);
            const removed = selectedWords.splice(idx, 1)[0];
            const originalTile = bank.querySelector(`.word-tile[data-index="${removed.index}"]`);
            if (originalTile) originalTile.classList.remove("used");
            updateDropzoneUI();
          });
        });
      }
    }

    bank.querySelectorAll(".word-tile").forEach((tile) => {
      tile.addEventListener("click", () => {
        if (tile.classList.contains("used")) return;
        tile.classList.add("used");
        selectedWords.push({
          word: tile.dataset.word,
          index: tile.dataset.index
        });
        updateDropzoneUI();
      });
    });

    btnReset.addEventListener("click", () => {
      selectedWords = [];
      bank.querySelectorAll(".word-tile").forEach((t) => t.classList.remove("used"));
      updateDropzoneUI();
      document.getElementById("scramble-feedback").style.display = "none";
    });

    btnCheck.addEventListener("click", () => {
      const userSentence = selectedWords.map((s) => s.word).join("");
      const isCorrect = userSentence === q.answer.replace(/\s+/g, "");
      const feedback = document.getElementById("scramble-feedback");
      feedback.style.display = "block";
      btnCheck.disabled = true;

      if (isCorrect) {
        correctCount++;
        feedback.innerHTML = `
          <div class="alert alert-success">
            ✅ <strong>很好！Tuyệt vời!</strong> Câu đúng: <strong>${q.answer}</strong>
            <br><button class="btn btn-primary btn-sm mt-10 btn-next-q">Tiếp tục ➡</button>
          </div>
        `;
      } else {
        feedback.innerHTML = `
          <div class="alert alert-danger">
            <strong>Chưa chính xác.</strong> Câu đúng là: <strong>${q.answer}</strong>
            <p>Thử đọc lại câu theo thứ tự chủ ngữ - thời gian - hành động nhé.</p>
            <br><button class="btn btn-primary btn-sm mt-10 btn-next-q">Tiếp tục ➡</button>
          </div>
        `;
      }

      feedback.querySelector(".btn-next-q").addEventListener("click", () => {
        currentIndex++;
        renderCurrentQuestion();
      });
    });
  }

  function renderGameResult() {
    const scorePct = Math.round((correctCount / totalQuestions) * 100);
    let title = "Hoàn thành bài luyện tập!";
    let emoji = "🎉";
    if (scorePct >= 80) {
      title = "Xuất sắc! Bạn đã làm rất tốt!";
      emoji = "🏆";
    } else if (scorePct < 50) {
      title = "Cần ôn tập thêm!";
      emoji = "💪";
    }

    gameArea.innerHTML = `
      <div class="card text-center p-30">
        <div style="font-size: 3em;">${emoji}</div>
        <h2>${title}</h2>
        <div class="score-box my-15">
          <span>${correctCount} / ${totalQuestions}</span> (${scorePct}%)
        </div>
        <p>Tiếp tục duy trì phong độ và làm bài tập chính thức nhé!</p>
        
        <div class="mt-20 flex-center-gap">
          <button class="btn btn-primary" id="btn-replay-game">Luyện tập lại</button>
          <button class="btn" id="btn-return-menu">Trở về menu game</button>
        </div>
      </div>
    `;

    gameArea.querySelector("#btn-replay-game").addEventListener("click", () => {
      startQuizMode(mode, gameData, lessonId);
    });
    gameArea.querySelector("#btn-return-menu").addEventListener("click", () => {
      renderGameSelector(gameData, lessonId);
    });
  }

  renderCurrentQuestion();
}
