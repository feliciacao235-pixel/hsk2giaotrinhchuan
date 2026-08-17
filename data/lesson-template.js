/*
  Copy this file to data/lesson05.js, data/lesson06.js, ...
  Then:
  1. Replace every LESSON_XX / lessonXX / Bai XX placeholder.
  2. Fill content from HSK2.md.
  3. Keep source: "book" only for exact book/source content.
  4. Use source: "ai" only for supplemental practice/listening created by AI.
  5. Put book exercises that lack script/audio/images/original answers in workbookReference, not workbook.
  6. Add the new script tag in index.html after the previous lesson file.
*/
(function () {
  const lesson = {
    id: "lessonXX",
    order: 0,
    type: "lesson",
    status: "ready",
    title: "TITLE_FROM_HSK2_MD",
    viTitle: "VIETNAMESE_TITLE_FROM_HSK2_MD",
    scope: "Bài XX",
    sourceRange: "HSK2.md: sách giáo trình Bài XX và sách bài tập Bài XX",

    vocabulary: [
      {
        hanzi: "词",
        pinyin: "pinyin",
        pos: "Từ loại",
        meaning: "Nghĩa tiếng Việt",
        example: "例句。",
        examplePinyin: "Pinyin of example.",
        exampleVi: "Dịch nghĩa.",
        source: "book",
        exampleSource: "book",
        includeInGames: true
      }
    ],

    grammar: [
      {
        id: "g1",
        title: "Tên điểm ngữ pháp",
        structure: "Công thức",
        explanation: "Giải thích ngắn bằng tiếng Việt.",
        examples: [
          { zh: "例句。", pinyin: "Pinyin.", vi: "Dịch nghĩa." }
        ],
        source: "book"
      }
    ],

    vocabGames: {
      fillSentences: [
        { prompt: "Câu có（ ）.", answer: "词", hint: "gợi ý", source: "book" }
      ],
      listeningChoice: [
        { script: "词", prompt: "Nghe và chọn từ đúng", answer: "词", options: ["词", "选项二", "选项三", "选项四"], source: "ai" }
      ]
    },

    grammarPractice: [
      { type: "choice", prompt: "Câu hỏi", options: ["A", "B", "C"], answer: "A", explain: "Giải thích ngắn.", source: "ai", grammarId: "g1" },
      { type: "fill", prompt: "Câu（ ）.", answer: "đáp án", explain: "Giải thích ngắn.", source: "book", grammarId: "g1" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["我", "学习", "汉语"], answer: "我学习汉语", explain: "Giải thích ngắn.", source: "ai", grammarId: "g1" },
      { type: "fix", prompt: "Sửa câu sai: ...", answer: "Câu đúng", explain: "Giải thích ngắn.", source: "ai", grammarId: "g1" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: ...", answer: "答案。", explain: "Giải thích ngắn.", source: "ai", grammarId: "g1" }
    ],

    shortPractice: [
      { type: "choice", prompt: "Câu hỏi", options: ["A", "B", "C"], answer: "A", source: "ai" },
      { type: "fill", prompt: "Câu（ ）.", answer: "đáp án", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["我", "学习", "汉语"], answer: "我学习汉语", source: "ai" }
    ],

    workbook: [
      {
        id: "wb-read-21-25",
        title: "Sách bài tập - Đọc Phần 2, Câu 21-25",
        source: "book",
        type: "fillChoice",
        answerNote: "Chỉ điền nếu HSK2.md có đủ đáp án gốc hoặc giáo viên đã duyệt đáp án.",
        choices: [
          { key: "A", text: "选项一", vi: "nghĩa" },
          { key: "B", text: "选项二", vi: "nghĩa" }
        ],
        questions: [
          { id: "21", prompt: "Câu（ ）.", vi: "Dịch nghĩa nếu có.", answer: "A", explain: "Giải thích nếu cần." }
        ]
      },
      {
        id: "wb-judge-26-30",
        title: "Sách bài tập - Đọc Phần 3, Câu 26-30",
        source: "book",
        type: "trueFalse",
        questions: [
          { id: "26", original: "Câu gốc.", prompt: "Câu phán đoán.", answer: "√", explain: "Giải thích ngắn." }
        ]
      },
      {
        id: "wb-match-31-35",
        title: "Sách bài tập - Đọc Phần 4, Câu 31-35",
        source: "book",
        type: "matchChoice",
        choices: [
          { key: "A", text: "Câu lựa chọn A." },
          { key: "B", text: "Câu lựa chọn B." }
        ],
        questions: [
          { id: "31", prompt: "Câu cần ghép.", answer: "A", explain: "Giải thích nếu cần." }
        ]
      }
    ],

    workbookReference: [
      {
        title: "Sách bài tập - Phần thiếu dữ liệu gốc",
        source: "book",
        note: "Dùng cho phần thiếu script/audio/hình ảnh/đáp án gốc nên chưa tự chấm.",
        lines: [
          "Ghi lại nguyên văn hoặc mô tả từ HSK2.md."
        ]
      }
    ],

    supplementalHomework: [
      { type: "choice", prompt: "Câu hỏi bổ sung", options: ["A", "B", "C"], answer: "A", explain: "Giải thích ngắn.", source: "ai" },
      { type: "fill", prompt: "Câu（ ）.", answer: "đáp án", explain: "Giải thích ngắn.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: ...", answer: "答案。", explain: "Giải thích ngắn.", source: "ai" }
    ],

    listeningHomework: [
      {
        id: "listen-ai-1",
        title: "Nghe chọn đáp án",
        source: "ai",
        script: "Script tiếng Trung bám sát từ vựng/ngữ pháp đã học.",
        prompt: "Câu hỏi",
        options: ["A", "B", "C"],
        answer: "A",
        explain: "Giải thích ngắn."
      },
      {
        id: "listen-ai-2",
        title: "Nghe đúng/sai",
        source: "ai",
        script: "Script tiếng Trung bám sát bài.",
        prompt: "Câu phán đoán.",
        options: ["√", "x"],
        answer: "√",
        explain: "Giải thích ngắn."
      },
      {
        id: "listen-ai-3",
        title: "Nghe điền từ",
        source: "ai",
        script: "Script tiếng Trung bám sát bài.",
        prompt: "Câu（ ）.",
        answer: "đáp án",
        explain: "Giải thích ngắn."
      },
      {
        id: "listen-ai-4",
        title: "Nghe hội thoại và trả lời",
        source: "ai",
        script: "A：...\nB：...",
        prompt: "Câu hỏi",
        options: ["A", "B", "C"],
        answer: "A",
        explain: "Giải thích ngắn."
      }
    ]
  };

  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
