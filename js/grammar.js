/**
 * Grammar Module for HSK2 Web App
 */

window.initGrammar = function(grammarData) {
  const container = document.getElementById("grammar-list");
  if (!container) return;

  container.innerHTML = "";

  grammarData.forEach((point, index) => {
    const item = document.createElement("div");
    item.className = "grammar-item card";

    let examplesHtml = point.examples
      .map(
        (ex) => `
        <li class="grammar-example-item">
          <div class="ex-zh">${ex.zh}</div>
          ${ex.pinyin ? `<div class="ex-py"><small>${ex.pinyin}</small></div>` : ""}
          <div class="ex-vi">${ex.vi}</div>
        </li>`
      )
      .join("");

    let quickQuizHtml = "";
    if (point.quickQuiz) {
      const q = point.quickQuiz;
      quickQuizHtml = `
        <div class="grammar-quick-quiz">
          <div class="quiz-title">📝 Bài luyện nhanh:</div>
          <p class="quiz-q">${q.question}</p>
          <div class="quiz-opts">
            ${q.options
              .map(
                (opt) =>
                  `<button class="btn btn-sm btn-g-opt" data-gindex="${index}" data-opt="${opt[0]}">${opt}</button>`
              )
              .join(" ")}
          </div>
          <div class="quiz-feedback" id="g-feedback-${index}" style="display:none;"></div>
        </div>
      `;
    }

    item.innerHTML = `
      <div class="grammar-header">
        <span class="grammar-badge">Điểm ${index + 1}</span>
        <h3 class="grammar-name">${point.name}</h3>
      </div>
      
      <div class="grammar-formula-box">
        <strong>📌 Công thức:</strong>
        <div class="grammar-formula">${point.formula}</div>
      </div>

      <div class="grammar-explanation">
        <strong>💡 Giải thích:</strong>
        <p>${point.explanation.replace(/\n/g, "<br>")}</p>
      </div>

      ${
        point.negativeForm
          ? `<div class="grammar-negative-box">
              <strong>⚠️ Dạng phủ định / Lưu ý:</strong>
              <p>${point.negativeForm}</p>
             </div>`
          : ""
      }

      <div class="grammar-examples-section">
        <strong>📖 Ví dụ thực tế:</strong>
        <ul class="grammar-examples">${examplesHtml}</ul>
      </div>

      ${quickQuizHtml}
    `;

    container.appendChild(item);
  });

  // Attach quick quiz handlers
  container.querySelectorAll(".btn-g-opt").forEach((btn) => {
    btn.addEventListener("click", () => {
      const gIndex = parseInt(btn.dataset.gindex, 10);
      const selectedOpt = btn.dataset.opt;
      const point = grammarData[gIndex];
      const q = point.quickQuiz;
      const feedbackEl = document.getElementById(`g-feedback-${gIndex}`);

      const optBtns = btn.parentElement.querySelectorAll(".btn-g-opt");
      optBtns.forEach((b) => (b.disabled = true));

      feedbackEl.style.display = "block";
      if (selectedOpt === q.answer) {
        btn.classList.add("btn-success");
        feedbackEl.innerHTML = `<div class="alert alert-success mt-10">✅ <strong>Chính xác!</strong> ${q.explanation}</div>`;
      } else {
        btn.classList.add("btn-danger");
        optBtns.forEach((b) => {
          if (b.dataset.opt === q.answer) b.classList.add("btn-success");
        });
        feedbackEl.innerHTML = `<div class="alert alert-danger mt-10">❌ <strong>Chưa đúng!</strong> Đáp án đúng là <strong>${q.answer}</strong>. ${q.explanation}</div>`;
      }
    });
  });
};
