const appState = {
  lessonId: "lesson01",
  tab: "vocab",
  vocabMode: "flashcard",
  currentQuiz: null,
  answers: {},
  studentName: "",
  lastResult: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const lesson = () => HSK2_DATA.lessons.find((item) => item.id === appState.lessonId);

function badge(source) {
  if (source === "book") return '<span class="source-badge book">Từ sách</span>';
  if (source === "ai") return '<span class="source-badge ai">AI bổ sung</span>';
  if (source === "inferred") return '<span class="source-badge inferred">Đáp án suy luận</span>';
  return '<span class="source-badge">Dữ liệu</span>';
}

function normalize(value) {
  return String(value || "")
    .trim()
    .replace(/[。？！!?.,，\s]/g, "")
    .toLowerCase();
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showToast("Trình duyệt này chưa hỗ trợ đọc tiếng Trung.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3200);
}

function renderNav() {
  const nav = $("#lessonNav");
  nav.innerHTML = HSK2_DATA.lessons.map((item) => `
    <button class="lesson-btn ${item.id === appState.lessonId ? "active" : ""} ${item.status === "locked" ? "locked" : ""}" data-lesson="${item.id}" type="button">
      ${item.type === "review" ? item.title : `Bài ${item.order}`}
      <small>${item.title}${item.viTitle ? ` · ${item.viTitle}` : ""}</small>
    </button>
  `).join("");

  nav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      appState.lessonId = button.dataset.lesson;
      appState.tab = "vocab";
      appState.answers = {};
      $(".sidebar").classList.remove("open");
      render();
    });
  });
}

function renderHeader() {
  const item = lesson();
  $("#crumb").textContent = item.type === "review" ? item.title : `Bài ${item.order}`;
  $("#lessonTitle").textContent = item.title;
  $("#lockedNotice").classList.toggle("hidden", item.status !== "locked");
  $("#shufflePracticeBtn").disabled = item.status !== "ready";
}

function renderHero() {
  const item = lesson();
  const ready = item.status === "ready";
  $("#lessonHero").innerHTML = `
    <div class="hero-card">
      ${ready ? badge("book") : '<span class="source-badge">Khung dùng chung</span>'}
      <h2>${item.viTitle || "Đang chuẩn bị dữ liệu"}</h2>
      <p>${ready ? `${item.scope} có đủ bốn mục: Từ mới, Ngữ pháp, Luyện tập và Bài tập. Các phần bổ sung được gắn nhãn riêng để giáo viên dễ duyệt.` : "Mục này đã có chỗ trong hệ thống, nhưng chưa nạp dữ liệu chi tiết."}</p>
    </div>
    <div class="hero-meta">
      <div class="meta-box"><strong>${ready ? item.vocabulary.length : 0}</strong><span>từ mới</span></div>
      <div class="meta-box"><strong>${ready ? item.grammar.length : 0}</strong><span>điểm ngữ pháp</span></div>
      <div class="meta-box"><strong>${ready ? countHomework(item) : 0}</strong><span>câu/bài chấm điểm</span></div>
    </div>
  `;
}

function countHomework(item) {
  return [
    ...(item.workbook || []).flatMap((section) => section.questions || []),
    ...(item.supplementalHomework || []),
    ...(item.listeningHomework || [])
  ].length;
}

function renderTabs() {
  $$(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === appState.tab);
    tab.onclick = () => {
      appState.tab = tab.dataset.tab;
      appState.currentQuiz = null;
      renderContent();
    };
  });
}

function renderContent() {
  const item = lesson();
  if (item.status !== "ready") {
    $("#tabContent").innerHTML = `
      <section class="panel">
        <h2>${item.title}</h2>
        <p>Bài này sẽ được nạp dữ liệu sau khi template được duyệt. Giao diện, cách chấm điểm và cấu trúc dữ liệu đã dùng chung.</p>
      </section>
    `;
    return;
  }
  if (appState.tab === "vocab") renderVocab(item);
  if (appState.tab === "grammar") renderGrammar(item);
  if (appState.tab === "practice") renderPractice(item);
  if (appState.tab === "homework") renderHomework(item);
}

function renderVocab(item) {
  $("#tabContent").innerHTML = `
    <section class="panel">
      <div class="exercise-head">
        <div>
          <h2>Từ mới</h2>
          <p>${badge("book")} Từ vựng lấy từ ${item.scope} trong HSK2.md.</p>
        </div>
      </div>
      <div class="mode-bar">
        ${[
          ["flashcard", "Flashcard"],
          ["hanzi-meaning", "Hán tự → nghĩa"],
          ["meaning-hanzi", "Nghĩa → Hán tự"],
          ["hanzi-pinyin", "Hán tự → pinyin"],
          ["matching", "Ghép cặp"],
          ["fill", "Điền từ"],
          ["listen", "Nghe → chọn từ"]
        ].map(([id, label]) => `<button class="mode-btn ${appState.vocabMode === id ? "active" : ""}" data-mode="${id}" type="button">${label}</button>`).join("")}
      </div>
      <div id="vocabGame"></div>
    </section>
    <section class="grid three">
      ${item.vocabulary.map((word) => `
        <article class="vocab-card">
          ${badge(word.source)}
          <div class="hanzi">${word.hanzi}</div>
          <div class="pinyin">${word.pinyin} · ${word.pos}</div>
          <div class="meaning">${word.meaning}</div>
          <div class="example">
            ${word.exampleSource ? badge(word.exampleSource) : ""}
            ${word.example}<br>${word.examplePinyin}<br>${word.exampleVi}
          </div>
          <button class="ghost-btn speak-btn" data-say="${word.hanzi}" type="button">Nghe</button>
        </article>
      `).join("")}
    </section>
  `;
  $$(".mode-btn").forEach((button) => button.onclick = () => {
    appState.vocabMode = button.dataset.mode;
    renderVocab(item);
  });
  $$(".speak-btn").forEach((button) => button.onclick = () => speak(button.dataset.say));
  renderVocabGame(item);
}

function renderVocabGame(item) {
  const host = $("#vocabGame");
  const words = item.vocabulary.filter((word) => word.includeInGames !== false);
  if (!words.length) {
    host.innerHTML = `
      <div class="quiz-box">
        <p>Chưa có dữ liệu luyện từ cho bài này.</p>
      </div>
    `;
    return;
  }
  const word = words[Math.floor(Math.random() * words.length)];
  if (appState.vocabMode === "flashcard") {
    host.innerHTML = `
      <div class="flashcard" id="flashcard">
        <div>
          <div class="hanzi">${word.hanzi}</div>
          <div class="pinyin hidden">${word.pinyin}</div>
          <div class="meaning hidden">${word.meaning}</div>
          <p class="example hidden">${word.example}<br>${word.exampleVi}</p>
          <div class="actions"><button class="primary-btn" type="button">Lật thẻ</button><button class="ghost-btn" type="button" data-next>Thẻ khác</button></div>
        </div>
      </div>
    `;
    $("#flashcard .primary-btn").onclick = () => $$("#flashcard .hidden").forEach((el) => el.classList.remove("hidden"));
    $("#flashcard [data-next]").onclick = () => renderVocabGame(item);
    return;
  }
  if (appState.vocabMode === "matching") {
    const left = shuffle(words.slice(0, 6));
    const right = shuffle(left.map((w) => ({ key: w.hanzi, text: w.meaning })));
    host.innerHTML = `
      <div class="match-grid">
        <div class="match-col">${left.map((w) => `<button class="match-item" data-side="left" data-key="${w.hanzi}" type="button">${w.hanzi}<br><small>${w.pinyin}</small></button>`).join("")}</div>
        <div class="match-col">${right.map((w) => `<button class="match-item" data-side="right" data-key="${w.key}" type="button">${w.text}</button>`).join("")}</div>
      </div>
    `;
    bindMatching(host);
    return;
  }
  if (appState.vocabMode === "fill") {
    const pool = item.vocabGames?.fillSentences || [];
    if (!pool.length) {
      host.innerHTML = '<div class="quiz-box"><p>Chưa có câu điền từ cho bài này.</p></div>';
      return;
    }
    const q = pool[Math.floor(Math.random() * pool.length)];
    host.innerHTML = fillExerciseHtml(q, "vocab-fill", true);
    bindSingleCheck(q, "vocab-fill");
    return;
  }
  if (appState.vocabMode === "listen") {
    const pool = item.vocabGames?.listeningChoice || [];
    if (!pool.length) {
      host.innerHTML = '<div class="quiz-box"><p>Chưa có câu nghe chọn từ cho bài này.</p></div>';
      return;
    }
    const q = pool[Math.floor(Math.random() * pool.length)];
    host.innerHTML = choiceExerciseHtml(q, "vocab-listen", true, `<button class="secondary-btn" data-speak-script type="button">Nghe</button>`);
    host.querySelector("[data-speak-script]").onclick = () => speak(q.script);
    bindChoice(q, "vocab-listen");
    return;
  }
  const map = {
    "hanzi-meaning": { prompt: word.hanzi, answer: word.meaning, options: shuffle([word.meaning, ...shuffle(words.filter((w) => w.hanzi !== word.hanzi)).slice(0, 3).map((w) => w.meaning)]) },
    "meaning-hanzi": { prompt: word.meaning, answer: word.hanzi, options: shuffle([word.hanzi, ...shuffle(words.filter((w) => w.hanzi !== word.hanzi)).slice(0, 3).map((w) => w.hanzi)]) },
    "hanzi-pinyin": { prompt: word.hanzi, answer: word.pinyin, options: shuffle([word.pinyin, ...shuffle(words.filter((w) => w.hanzi !== word.hanzi)).slice(0, 3).map((w) => w.pinyin)]) }
  };
  const q = map[appState.vocabMode];
  host.innerHTML = choiceExerciseHtml(q, "vocab-choice", false);
  bindChoice(q, "vocab-choice");
}

function bindMatching(host) {
  let selected = null;
  host.querySelectorAll(".match-item").forEach((button) => {
    button.onclick = () => {
      if (button.classList.contains("done")) return;
      if (!selected) {
        selected = button;
        button.classList.add("selected");
        return;
      }
      if (selected.dataset.side !== button.dataset.side && selected.dataset.key === button.dataset.key) {
        selected.classList.add("done");
        button.classList.add("done");
      }
      selected.classList.remove("selected");
      selected = null;
    };
  });
}

function choiceExerciseHtml(q, id, showSource, extra = "") {
  return `
    <div class="quiz-box" id="${id}">
      <div class="exercise-head">
        <div>${showSource ? badge(q.source) : ""}<div class="prompt">${q.prompt}</div></div>
        ${extra}
      </div>
      <div class="options">
        ${q.options.map((option) => `<button class="option-btn" data-value="${option}" type="button">${option}</button>`).join("")}
      </div>
      <div class="answer-row"></div>
    </div>
  `;
}

function fillExerciseHtml(q, id, showSource) {
  return `
    <div class="quiz-box" id="${id}">
      ${showSource ? badge(q.source) : ""}
      <div class="prompt">${q.prompt}</div>
      ${q.hint ? `<p>Gợi ý: ${q.hint}</p>` : ""}
      <input class="fill-input" data-fill-input placeholder="Nhập đáp án" />
      <div class="actions"><button class="primary-btn" data-check-fill type="button">Kiểm tra</button></div>
      <div class="answer-row"></div>
    </div>
  `;
}

function bindChoice(q, id) {
  const box = $(`#${id}`);
  box.querySelectorAll(".option-btn").forEach((button) => {
    button.onclick = () => {
      const ok = button.dataset.value === q.answer;
      button.classList.add(ok ? "correct" : "wrong");
      box.querySelectorAll(".option-btn").forEach((b) => {
        b.disabled = true;
        if (b.dataset.value === q.answer) b.classList.add("correct");
      });
      box.querySelector(".answer-row").textContent = ok
        ? `Đúng rồi.${q.explain ? ` ${q.explain}` : ""}`
        : `Sai. Đáp án đúng: ${q.answer}${q.explain ? ` · ${q.explain}` : ""}`;
    };
  });
}

function bindSingleCheck(q, id) {
  const box = $(`#${id}`);
  box.querySelector("[data-check-fill]").onclick = () => {
    const input = box.querySelector("[data-fill-input]");
    const ok = normalize(input.value) === normalize(q.answer);
    box.querySelector(".answer-row").textContent = ok
      ? `Đúng rồi.${q.explain ? ` ${q.explain}` : ""}`
      : `Sai. Đáp án đúng: ${q.answer}${q.explain ? ` · ${q.explain}` : ""}`;
  };
}

function renderGrammar(item) {
  $("#tabContent").innerHTML = `
    <section class="panel">
      <h2>Ngữ pháp</h2>
      ${item.grammar.map((g) => `
        <article class="grammar-item">
          ${badge(g.source)}
          <h3>${g.title}</h3>
          <p class="structure">${g.structure}</p>
          <p>${g.explanation}</p>
          ${g.examples.map((ex) => `<p class="example">${ex.zh}<br>${ex.pinyin}<br>${ex.vi}</p>`).join("")}
          <div class="exercise">
            <p class="exercise-title">Luyện ngay</p>
            ${item.grammarPractice.filter((q) => q.grammarId === g.id).map((q, idx) => renderQuestion(q, `gp-${g.id}-${idx}`)).join("")}
          </div>
        </article>
      `).join("")}
    </section>
  `;
  bindQuestionChecks(item.grammar.flatMap((g) => item.grammarPractice
    .filter((q) => q.grammarId === g.id)
    .map((q, idx) => [q, `gp-${g.id}-${idx}`])));
}

function renderPractice(item) {
  $("#tabContent").innerHTML = `
    <section class="panel">
      <div class="exercise-head">
        <div>
          <h2>Luyện tập nhanh</h2>
          <p>Các câu luyện kết hợp từ vựng và ngữ pháp ${item.scope}. Có thể random để luyện lại.</p>
        </div>
        <button class="primary-btn" id="randomPractice" type="button">Random câu hỏi</button>
      </div>
      <div id="practiceHost"></div>
    </section>
  `;
  $("#randomPractice").onclick = () => renderRandomPractice(item);
  renderRandomPractice(item);
}

function renderRandomPractice(item) {
  const q = shuffle(item.shortPractice)[0];
  $("#practiceHost").innerHTML = renderQuestion(q, "short-practice");
  bindQuestionChecks([[q, "short-practice"]]);
}

function renderQuestion(q, id) {
  const source = q.source ? badge(q.source) : "";
  if (q.type === "choice" || q.type === "trueFalse") return choiceExerciseHtml(q, id, true);
  if (q.type === "fill" || q.type === "translate" || q.type === "fix") return fillExerciseHtml(q, id, true);
  if (q.type === "order") {
    const options = shuffle(q.pieces);
    return choiceExerciseHtml({ ...q, options, answer: q.answer }, id, true);
  }
  return `<div class="quiz-box" id="${id}">${source}<div class="prompt">${q.prompt}</div></div>`;
}

function bindQuestionChecks(pairs) {
  pairs.forEach(([q, id]) => {
    if (q.type === "choice" || q.type === "trueFalse") bindChoice(q, id);
    if (q.type === "fill" || q.type === "translate" || q.type === "fix") bindSingleCheck(q, id);
    if (q.type === "order") {
      const box = $(`#${id}`);
      const chosen = [];
      box.querySelectorAll(".option-btn").forEach((button) => {
        button.onclick = () => {
          chosen.push(button.dataset.value);
          button.disabled = true;
          box.querySelector(".answer-row").textContent = `Đang chọn: ${chosen.join("")}`;
          if (chosen.length === q.pieces.length) {
            const ok = normalize(chosen.join("")) === normalize(q.answer);
            box.querySelector(".answer-row").textContent = ok
              ? `Đúng rồi.${q.explain ? ` ${q.explain}` : ""}`
              : `Sai. Đáp án đúng: ${q.answer}${q.explain ? ` · ${q.explain}` : ""}`;
          }
        };
      });
    }
  });
}

function renderHomework(item) {
  appState.answers = appState.answers || {};
  $("#tabContent").innerHTML = `
    <section class="panel">
      <h2>Nộp bài</h2>
      <div class="submission">
        <label>Họ tên học viên
          <input id="studentName" class="fill-input" value="${appState.studentName}" placeholder="Nhập họ tên trước khi làm bài" />
        </label>
      </div>
    </section>
    <section class="panel">
      <h2>${item.type === "review" ? "Bài kiểm tra cuối" : "Bài tập sách"}</h2>
      ${(item.workbookReference || []).map(renderWorkbookReference).join("")}
      ${(item.workbook || []).map(renderWorkbookSection).join("")}
    </section>
    <section class="panel">
      <h2>Bài tập tổng hợp bổ sung</h2>
      ${(item.supplementalHomework || []).map((q, idx) => renderHomeworkQuestion(q, `sup-${idx}`)).join("")}
    </section>
    <section class="panel">
      <h2>Bài nghe bổ sung</h2>
      <p>${badge("ai")} Script được lưu và hiển thị để giáo viên kiểm tra.</p>
      ${(item.listeningHomework || []).map((q, idx) => renderListeningQuestion(q, `listen-${idx}`)).join("")}
    </section>
    <section class="panel">
      <div class="actions">
        <button class="primary-btn" id="submitHomework" type="button">Nộp bài</button>
        <button class="ghost-btn" id="clearHomework" type="button">Làm lại</button>
      </div>
      <div id="resultHost"></div>
    </section>
  `;
  $("#studentName").oninput = (e) => appState.studentName = e.target.value;
  bindHomeworkInputs(item);
  $("#submitHomework").onclick = () => submitHomework(item);
  $("#clearHomework").onclick = () => {
    appState.answers = {};
    appState.lastResult = null;
    renderHomework(item);
  };
}

function renderWorkbookReference(section) {
  return `
    <div class="exercise">
      <div class="exercise-head">
        <div>
          <p class="exercise-title">${section.title}</p>
          ${badge(section.source)}
          <p>${section.note}</p>
        </div>
      </div>
      <div class="script-box">${section.lines.join("\n")}</div>
    </div>
  `;
}

function renderWorkbookSection(section) {
  return `
    <div class="exercise">
      <div class="exercise-head">
        <div>
          <p class="exercise-title">${section.title}</p>
          ${badge(section.source)}
          ${section.answerNote ? `<p>${section.answerNote}</p>` : ""}
        </div>
      </div>
      ${section.choices ? `<div class="script-box">${section.choices.map((c) => `${c.key}. ${c.text}${c.vi ? ` (${c.vi})` : ""}`).join("\n")}</div>` : ""}
      ${section.questions.map((q) => renderHomeworkQuestion({ ...q, type: section.type, source: section.source, choices: section.choices }, `${section.id}-${q.id}`)).join("")}
    </div>
  `;
}

function renderHomeworkQuestion(q, id) {
  const saved = appState.answers[id] || "";
  const stem = q.original ? `<p><strong>Câu gốc:</strong> ${q.original}</p>` : "";
  if (q.type === "fill" || q.type === "fillChoice" || q.type === "order" || q.type === "translate" || q.type === "fix") {
    return `
      <div class="quiz-box" data-homework="${id}" data-answer="${q.answer}" data-explain="${q.explain || ""}" data-vocab-tags="${(q.vocabTags || []).join("|")}" data-grammar-tags="${(q.grammarTags || []).join("|")}">
        ${badge(q.source)}
        ${stem}
        <div class="prompt">${q.id ? `${q.id}. ` : ""}${q.prompt}</div>
        ${q.vi ? `<p>${q.vi}</p>` : ""}
        ${q.pieces ? `<div class="script-box">${q.pieces.join(" / ")}</div>` : ""}
        <input class="fill-input" value="${saved}" data-answer-input placeholder="${q.type === "fillChoice" ? "Nhập A/B/C..." : "Nhập đáp án"}" />
      </div>
    `;
  }
  const options = q.options || (q.type === "trueFalse" ? ["√", "x"] : (q.choices || []).map((c) => c.key));
  return `
    <div class="quiz-box" data-homework="${id}" data-answer="${q.answer}" data-explain="${q.explain || ""}" data-vocab-tags="${(q.vocabTags || []).join("|")}" data-grammar-tags="${(q.grammarTags || []).join("|")}">
      ${badge(q.source)}
      ${stem}
      <div class="prompt">${q.id ? `${q.id}. ` : ""}${q.prompt}</div>
      <div class="options">
        ${options.map((option) => `
          <label class="option-btn">
            <input type="radio" name="${id}" value="${option}" ${saved === option ? "checked" : ""} />
            ${option}
          </label>
        `).join("")}
      </div>
    </div>
  `;
}

function renderListeningQuestion(q, id) {
  return `
    <div class="exercise">
      <div class="exercise-head">
        <div><p class="exercise-title">${q.title}</p>${badge(q.source)}</div>
        <button class="secondary-btn" data-listen="${q.id}" type="button">Nghe</button>
      </div>
      <div class="script-box">${q.script}</div>
      ${renderHomeworkQuestion(q, id)}
    </div>
  `;
}

function bindHomeworkInputs(item) {
  $$("[data-answer-input]").forEach((input) => {
    const box = input.closest("[data-homework]");
    input.oninput = () => appState.answers[box.dataset.homework] = input.value;
  });
  $$("input[type='radio']").forEach((input) => {
    input.onchange = () => appState.answers[input.name] = input.value;
  });
  $$("[data-listen]").forEach((button) => {
    const q = (item.listeningHomework || []).find((entry) => entry.id === button.dataset.listen);
    button.onclick = () => speak(q.script);
  });
}

async function submitHomework(item) {
  appState.studentName = $("#studentName").value.trim();
  if (!appState.studentName) {
    showToast("Vui lòng nhập họ tên trước khi nộp bài.");
    $("#studentName").focus();
    return;
  }
  const boxes = $$("[data-homework]");
  let correct = 0;
  const details = boxes.map((box) => {
    const id = box.dataset.homework;
    const prompt = box.querySelector(".prompt")?.textContent?.trim() || id;
    const input = box.querySelector("[data-answer-input]");
    const selected = box.querySelector("input[type='radio']:checked");
    const given = input ? input.value : selected?.value || "";
    const answer = box.dataset.answer;
    const ok = normalize(given) === normalize(answer);
    if (ok) correct += 1;
    box.classList.toggle("result-box", true);
    box.classList.toggle("bad", !ok);
    const old = box.querySelector(".answer-row");
    if (old) old.remove();
    box.insertAdjacentHTML("beforeend", `<div class="answer-row">${ok ? "Đúng" : `Sai. Đáp án: ${answer}${box.dataset.explain ? ` · ${box.dataset.explain}` : ""}`}</div>`);
    return {
      id,
      prompt,
      given,
      answer,
      correct: ok,
      explain: box.dataset.explain || "",
      vocabTags: (box.dataset.vocabTags || "").split("|").filter(Boolean),
      grammarTags: (box.dataset.grammarTags || "").split("|").filter(Boolean)
    };
  });
  const total = boxes.length;
  const score = total > 0 ? Math.round((correct / total) * 100) : 0;
  const wrong = details.filter((entry) => !entry.correct);
  const wrongHtml = wrong.length
    ? `<ol>${wrong.map((entry) => `<li><strong>${entry.prompt}</strong><br>Đã trả lời: ${entry.given || "(trống)"}<br>Đáp án đúng: ${entry.answer}${entry.explain ? `<br>${entry.explain}` : ""}</li>`).join("")}</ol>`
    : "<p>Không có câu sai.</p>";
  const reviewVocab = [...new Set(wrong.flatMap((entry) => entry.vocabTags))];
  const reviewGrammar = [...new Set(wrong.flatMap((entry) => entry.grammarTags))];
  const result = { studentName: appState.studentName, lesson: item.scope, title: item.title, correct, wrong: total - correct, total, score, percent: score, details, reviewVocab, reviewGrammar, submittedAt: new Date().toISOString() };
  appState.lastResult = result;
  $("#resultHost").innerHTML = `
    <div class="result-box">
      <h3>Kết quả</h3>
      <p><strong>Họ tên:</strong> ${appState.studentName}</p>
      <p><strong>Bài học:</strong> ${item.scope} - ${item.title}</p>
      <p><strong>Số câu đúng:</strong> ${correct}/${total}</p>
      <p><strong>Số câu sai:</strong> ${total - correct}</p>
      <p><strong>Điểm:</strong> ${score}/100 · <strong>Tỷ lệ:</strong> ${score}%</p>
      <h3>Câu sai và đáp án đúng</h3>
      ${wrongHtml}
      ${reviewVocab.length ? `<h3>Từ vựng cần ôn</h3><p>${reviewVocab.join(", ")}</p>` : ""}
      ${reviewGrammar.length ? `<h3>Ngữ pháp cần ôn</h3><p>${reviewGrammar.join(", ")}</p>` : ""}
      <p id="telegramStatus">Đang gửi kết quả cho giáo viên...</p>
    </div>
  `;
  try {
    const response = await fetch("/.netlify/functions/sendTelegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result)
    });
    const telegramResult = await response.json().catch(() => ({ ok: response.ok, configured: true }));
    $("#telegramStatus").textContent = telegramResult.ok
      ? "Đã gửi kết quả qua Telegram."
      : "Telegram chưa được cấu hình hoặc chưa gửi được. Kết quả vẫn hiển thị trên màn hình.";
  } catch {
    $("#telegramStatus").textContent = "Chưa gửi được Telegram khi chạy bản xem thử cục bộ. Khi publish Netlify và đặt biến môi trường, chức năng này sẽ hoạt động.";
  }
}

function render() {
  renderNav();
  renderHeader();
  renderHero();
  renderTabs();
  renderContent();
}

document.addEventListener("DOMContentLoaded", () => {
  $("#menuBtn").onclick = () => $(".sidebar").classList.toggle("open");
  $("#shufflePracticeBtn").onclick = () => {
    appState.tab = "practice";
    renderTabs();
    renderPractice(lesson());
  };
  render();
});
