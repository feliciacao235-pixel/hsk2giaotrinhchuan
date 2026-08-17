(function () {
  const lesson = {
    id: "lesson12",
    order: 12,
    type: "lesson",
    status: "ready",
    title: "你穿得太少了",
    viTitle: "Bạn mặc ít quá",
    scope: "Bài 12",
    sourceRange: "HSK2.md: sách giáo trình Bài 12; chưa thấy phần sách bài tập Bài 12 trong file nguồn hiện tại",
    vocabulary: [
      { hanzi: "得", pinyin: "de", pos: "Trợ từ", meaning: "Trợ từ dùng trước bổ ngữ trạng thái", example: "他说得很好。", examplePinyin: "Tā shuō de hěn hǎo.", exampleVi: "Anh ấy nói rất tốt.", source: "book", exampleSource: "book" },
      { hanzi: "妻子", pinyin: "qīzi", pos: "Danh từ", meaning: "Vợ", example: "我妻子比我做得好。", examplePinyin: "Wǒ qīzi bǐ wǒ zuò de hǎo.", exampleVi: "Vợ tôi làm tốt hơn tôi.", source: "book", exampleSource: "book" },
      { hanzi: "雪", pinyin: "xuě", pos: "Danh từ", meaning: "Tuyết", example: "外面下雪了。", examplePinyin: "Wàimian xià xuě le.", exampleVi: "Bên ngoài tuyết rơi rồi.", source: "book", exampleSource: "ai" },
      { hanzi: "零", pinyin: "líng", pos: "Số từ", meaning: "Số không", example: "今天零度。", examplePinyin: "Jīntiān líng dù.", exampleVi: "Hôm nay 0 độ.", source: "book", exampleSource: "ai" },
      { hanzi: "度", pinyin: "dù", pos: "Lượng từ", meaning: "Độ", example: "昨天二十五度。", examplePinyin: "Zuótiān èrshíwǔ dù.", exampleVi: "Hôm qua 25 độ.", source: "book", exampleSource: "ai" },
      { hanzi: "穿", pinyin: "chuān", pos: "Động từ", meaning: "Mặc", example: "你穿得太少了。", examplePinyin: "Nǐ chuān de tài shǎo le.", exampleVi: "Bạn mặc ít quá.", source: "book", exampleSource: "book" },
      { hanzi: "进", pinyin: "jìn", pos: "Động từ", meaning: "Vào", example: "请进。", examplePinyin: "Qǐng jìn.", exampleVi: "Mời vào.", source: "book", exampleSource: "ai" },
      { hanzi: "弟弟", pinyin: "dìdi", pos: "Danh từ", meaning: "Em trai", example: "我弟弟跑得很快。", examplePinyin: "Wǒ dìdi pǎo de hěn kuài.", exampleVi: "Em trai tôi chạy rất nhanh.", source: "book", exampleSource: "ai" },
      { hanzi: "近", pinyin: "jìn", pos: "Tính từ", meaning: "Gần", example: "我家离学校很近。", examplePinyin: "Wǒ jiā lí xuéxiào hěn jìn.", exampleVi: "Nhà tôi cách trường rất gần.", source: "book", exampleSource: "ai" }
    ],
    grammar: [
      { id: "g1", title: "Bổ ngữ trạng thái 得", structure: "Động từ + 得 + tính từ/cụm miêu tả", explanation: "Dùng để nói hành động được thực hiện như thế nào.", examples: [
        { zh: "他说得很好。", pinyin: "Tā shuō de hěn hǎo.", vi: "Anh ấy nói rất tốt." },
        { zh: "我起得很早。", pinyin: "Wǒ qǐ de hěn zǎo.", vi: "Tôi dậy rất sớm." },
        { zh: "他说得不好。", pinyin: "Tā shuō de bù hǎo.", vi: "Anh ấy nói không tốt." }
      ], source: "book" },
      { id: "g2", title: "So sánh với bổ ngữ trạng thái", structure: "A + 比 + B + V + 得 + tính từ", explanation: "Dùng 比 kết hợp 得 để so sánh mức độ làm một việc.", examples: [
        { zh: "他比我学得好。", pinyin: "Tā bǐ wǒ xué de hǎo.", vi: "Anh ấy học tốt hơn tôi." },
        { zh: "姐姐比我跑得快。", pinyin: "Jiějie bǐ wǒ pǎo de kuài.", vi: "Chị chạy nhanh hơn tôi." },
        { zh: "我妻子比我做得好。", pinyin: "Wǒ qīzi bǐ wǒ zuò de hǎo.", vi: "Vợ tôi làm tốt hơn tôi." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "你（ ）得太少了。", answer: "穿", hint: "mặc", source: "book" },
        { prompt: "今天（ ）度。", answer: "零", hint: "số không", source: "ai" },
        { prompt: "我弟弟跑（ ）很快。", answer: "得", hint: "trợ từ bổ ngữ trạng thái", source: "ai" },
        { prompt: "我家离学校很（ ）。", answer: "近", hint: "gần", source: "ai" }
      ],
      listeningChoice: [
        { script: "穿", prompt: "Nghe và chọn từ đúng", answer: "穿", options: ["穿", "进", "近", "雪"], source: "ai" },
        { script: "妻子", prompt: "Nghe và chọn từ đúng", answer: "妻子", options: ["妻子", "弟弟", "孩子", "哥哥"], source: "ai" },
        { script: "零度", prompt: "Nghe và chọn từ đúng", answer: "零度", options: ["零度", "雪", "近", "得"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu dùng 得 đúng.", options: ["他说得很好。", "他说很好得。", "他得说很好。"], answer: "他说得很好。", explain: "得 đứng sau động từ 说.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "我起（ ）很早。", answer: "得", explain: "V + 得 + miêu tả trạng thái.", source: "book", grammarId: "g1" },
      { type: "choice", prompt: "Chọn câu so sánh đúng.", options: ["他比我学得好。", "他学比我得好。", "他比我得学好。"], answer: "他比我学得好。", explain: "A 比 B V 得 Adj.", source: "book", grammarId: "g2" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["姐姐", "比", "我", "跑得", "快"], answer: "姐姐比我跑得快", explain: "So sánh mức độ chạy: 跑得快.", source: "book", grammarId: "g2" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Mặc” là từ nào?", options: ["穿", "进", "近", "雪"], answer: "穿", source: "book" },
      { type: "fill", prompt: "他说（ ）很好。", answer: "得", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["你", "穿得", "太少", "了"], answer: "你穿得太少了", source: "book" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Em trai tôi chạy rất nhanh.", answer: "我弟弟跑得很快。", source: "ai" }
    ],
    workbook: [
      { id: "ai-fill-1-5", title: "Bài tập tự chấm bổ sung - Điền từ", source: "ai", type: "fillChoice", choices: [
        { key: "A", text: "得" }, { key: "B", text: "穿" }, { key: "C", text: "近" }, { key: "D", text: "雪" }, { key: "E", text: "弟弟" }, { key: "F", text: "妻子" }
      ], questions: [
        { id: "1", prompt: "他说（ ）很好。", answer: "A" },
        { id: "2", prompt: "你（ ）得太少了。", answer: "B" },
        { id: "3", prompt: "我家离公司很（ ）。", answer: "C" },
        { id: "4", prompt: "外面下（ ）了。", answer: "D" },
        { id: "5", prompt: "我（ ）比我做得好。", answer: "F" }
      ] },
      { id: "ai-judge-6-10", title: "Bài tập tự chấm bổ sung - Đúng/Sai", source: "ai", type: "trueFalse", questions: [
        { id: "6", original: "姐姐比我跑得快。", prompt: "姐姐跑得比我快。", answer: "√" },
        { id: "7", original: "今天零度，外面下雪了。", prompt: "今天很热。", answer: "x" },
        { id: "8", original: "他说得不好。", prompt: "他说得很好。", answer: "x" },
        { id: "9", original: "我家离学校很近。", prompt: "我家离学校不远。", answer: "√" },
        { id: "10", original: "请进。", prompt: "说话的人让别人进去。", answer: "√" }
      ] },
      { id: "ai-mix-11-15", title: "Bài tập tự chấm bổ sung - Tổng hợp", source: "ai", type: "matchChoice", choices: [
        { key: "A", text: "他说得很好。" }, { key: "B", text: "我弟弟跑得很快。" }, { key: "C", text: "你穿得太少了。" }, { key: "D", text: "我家离学校很近。" }, { key: "E", text: "今天零度。" }
      ], questions: [
        { id: "11", prompt: "Hôm nay 0 độ.", answer: "E" },
        { id: "12", prompt: "Bạn mặc ít quá.", answer: "C" },
        { id: "13", prompt: "Anh ấy nói rất tốt.", answer: "A" },
        { id: "14", prompt: "Em trai tôi chạy rất nhanh.", answer: "B" },
        { id: "15", prompt: "Nhà tôi rất gần trường.", answer: "D" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập Bài 12", source: "book", note: "Trong HSK2.md hiện tại chưa có phần sách bài tập Bài 12 đầy đủ, nên không tạo đáp án sách hoặc bài nghe sách tự chấm.", lines: ["Chỉ dữ liệu giáo trình Bài 12 được dùng làm nội dung sách.", "Các bài tự chấm trong mục này đều gắn nhãn AI bổ sung."] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "Chọn câu đúng.", options: ["我起得很早。", "我得起很早。", "我起很早得。"], answer: "我起得很早。", explain: "得 đứng sau động từ.", source: "ai" },
      { type: "fill", prompt: "我弟弟跑（ ）很快。", answer: "得", explain: "跑得很快 = chạy rất nhanh.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Chị chạy nhanh hơn tôi.", answer: "姐姐比我跑得快。", explain: "A 比 B 跑得快.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "你穿得太少了，外面下雪了。", prompt: "外面怎么样？", options: ["下雪了", "很热", "晴天"], answer: "下雪了", explain: "Script nói 下雪了。" },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "他说得很好。", prompt: "他说得不好。", options: ["√", "x"], answer: "x", explain: "Script nói 很好." },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "我弟弟跑得很快。", prompt: "我弟弟跑（ ）很快。", answer: "得", explain: "Từ nghe được là 得." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：你家离学校远吗？\n男：不远，很近。", prompt: "男的家离学校怎么样？", options: ["很近", "很远", "零度"], answer: "很近", explain: "Script nói 很近。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
