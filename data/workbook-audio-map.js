(function () {
  const DATA = window.HSK2_DATA || {};
  const lessons = DATA.lessons || [];

  const listeningAnswers = {
    lesson01: ["√", "x", "√", "x", "√", "B", "F", "C", "A", "E", "C", "B", "B", "C", "A"],
    lesson02: ["√", "x", "√", "√", "√", "F", "E", "C", "A", "B", "B", "C", "A", "A", "B"],
    lesson03: ["√", "√", "√", "x", "√", "F", "A", "E", "B", "C", "A", "B", "C", "A", "B"],
    lesson04: ["√", "x", "√", "x", "√", "C", "F", "E", "A", "B", "A", "B", "C", "B", "A"],
    lesson05: ["√", "√", "x", "x", "√", "B", "A", "C", "F", "E", "B", "A", "B", "C", "C"],
    lesson06: ["√", "x", "√", "x", "√", "F", "A", "E", "B", "C", "C", "C", "A", "A", "B"],
    lesson07: ["x", "x", "√", "x", "√", "C", "A", "E", "B", "F", "C", "B", "A", "C", "A"],
    lesson08: ["√", "√", "√", "√", "x", "A", "E", "F", "B", "C", "A", "B", "C", "C", "A"],
    lesson09: ["√", "x", "√", "√", "x", "B", "C", "A", "E", "F", "B", "C", "A", "A", "C"],
    lesson10: ["√", "√", "x", "x", "√", "E", "C", "A", "B", "F", "C", "C", "A", "B", "C"],
    lesson11: ["x", "√", "√", "x", "√", "C", "A", "F", "B", "E", "C", "B", "A", "B", "C"],
    lesson12: ["x", "x", "√", "√", "x", "F", "B", "A", "E", "C", "C", "A", "B", "A", "C"],
    lesson13: ["√", "x", "x", "√", "√", "F", "E", "A", "B", "C", "C", "B", "B", "C", "C"],
    lesson14: ["x", "√", "x", "√", "√", "E", "F", "A", "B", "C", "B", "C", "A", "C", "B"],
    lesson15: ["x", "√", "x", "x", "√", "C", "A", "E", "F", "B", "B", "C", "B", "A", "C"]
  };

  const optionSets = {
    trueFalse: ["√", "x"],
    picture: ["A", "B", "C", "D", "E", "F"],
    multipleChoice: ["A", "B", "C"]
  };

  function lessonNumber(id) {
    return id.replace("lesson", "");
  }

  function audioPath(id, track) {
    return `audio/workbook/lesson-${lessonNumber(id)}-workbook-audio-${track}.mp3`;
  }

  function questionMeta(number) {
    if (number <= 5) {
      return {
        part: "Phần 1",
        prompt: `Nghe câu ${number} và chọn đúng/sai.`,
        options: optionSets.trueFalse
      };
    }
    if (number <= 10) {
      return {
        part: "Phần 2",
        prompt: `Nghe hội thoại ${number} và chọn hình A-F tương ứng.`,
        options: optionSets.picture
      };
    }
    return {
      part: "Phần 3",
      prompt: `Nghe hội thoại ${number} và chọn đáp án đúng.`,
      options: optionSets.multipleChoice
    };
  }

  function buildQuestions(answers) {
    return answers.map((answer, index) => {
      const number = index + 1;
      const meta = questionMeta(number);
      return {
        id: String(number),
        number,
        part: meta.part,
        prompt: meta.prompt,
        options: meta.options,
        answer,
        source: "book",
        explain: "Đáp án chuẩn theo PDF đáp án sách bài tập.",
        vocabTags: [],
        grammarTags: []
      };
    });
  }

  function removeOutdatedListeningReferences(lesson) {
    lesson.workbookReference = (lesson.workbookReference || []).filter((section) => {
      const text = `${section.title || ""} ${section.note || ""}`.toLowerCase();
      return !text.includes("nghe") && !text.includes("audio");
    });
  }

  Object.entries(listeningAnswers).forEach(([lessonId, answers]) => {
    const lesson = lessons.find((entry) => entry.id === lessonId);
    if (!lesson) return;

    lesson.workbook = lesson.workbook || [];
    lesson.workbook = lesson.workbook.filter((section) => section.id !== "book-listening-01-15");
    lesson.workbook.unshift({
      id: "book-listening-01-15",
      title: "Sách bài tập - Nghe Phần 1-3, Câu 1-15",
      source: "book",
      type: "choice",
      audioSrc: audioPath(lessonId, 1),
      audioRole: "workbook-listening",
      answerSource: "HSK2 Đáp án sách bài tập.pdf",
      note: "Dùng một audio cho toàn bộ câu 1-15. Đáp án chỉ hiện sau khi nộp bài.",
      questions: buildQuestions(answers)
    });

    removeOutdatedListeningReferences(lesson);
    lesson.workbookReference = lesson.workbookReference || [];
    lesson.workbookReference.push({
      title: "Sách bài tập - Audio ngữ âm",
      source: "book",
      audioSrc: audioPath(lessonId, 2),
      note: "Track này thuộc phần ngữ âm/phonetics, lưu để giáo viên tham khảo; chưa đưa vào tự chấm vì không phải phần nghe câu 1-15."
    });
  });

  window.HSK2_WORKBOOK_AUDIO_MAP = listeningAnswers;
})();
