(function () {
  const lesson = {
    id: "lesson14",
    order: 14,
    type: "lesson",
    status: "ready",
    title: "你看过那个电影吗？",
    viTitle: "Bạn đã từng xem bộ phim đó chưa?",
    scope: "Bài 14",
    sourceRange: "HSK2.md: sách giáo trình Bài 14; chưa thấy phần sách bài tập Bài 14 trong file nguồn hiện tại",
    vocabulary: [
      { hanzi: "意思", pinyin: "yìsi", pos: "Danh từ", meaning: "Ý nghĩa", example: "这个字是什么意思？", examplePinyin: "Zhège zì shì shénme yìsi?", exampleVi: "Chữ này có nghĩa là gì?", source: "book", exampleSource: "ai" },
      { hanzi: "但是", pinyin: "dànshì", pos: "Liên từ", meaning: "Nhưng", example: "虽然汉字很难，但是我很喜欢写汉字。", examplePinyin: "Suīrán Hànzì hěn nán, dànshì wǒ hěn xǐhuan xiě Hànzì.", exampleVi: "Tuy chữ Hán khó, nhưng tôi rất thích viết chữ Hán.", source: "book", exampleSource: "book" },
      { hanzi: "虽然", pinyin: "suīrán", pos: "Liên từ", meaning: "Tuy, mặc dù", example: "虽然外面很冷，但是房间里很热。", examplePinyin: "Suīrán wàimian hěn lěng, dànshì fángjiān li hěn rè.", exampleVi: "Tuy bên ngoài lạnh, nhưng trong phòng rất nóng.", source: "book", exampleSource: "book" },
      { hanzi: "次", pinyin: "cì", pos: "Lượng từ", meaning: "Lần", example: "我看过这个电影两次。", examplePinyin: "Wǒ kàn guo zhège diànyǐng liǎng cì.", exampleVi: "Tôi từng xem bộ phim này hai lần.", source: "book", exampleSource: "ai" },
      { hanzi: "玩儿", pinyin: "wánr", pos: "Động từ", meaning: "Chơi", example: "周末我们一起去玩儿吧。", examplePinyin: "Zhōumò wǒmen yìqǐ qù wánr ba.", exampleVi: "Cuối tuần chúng ta cùng đi chơi nhé.", source: "book", exampleSource: "ai" },
      { hanzi: "晴", pinyin: "qíng", pos: "Tính từ", meaning: "Nắng, trời quang", example: "虽然是晴天，但是很冷。", examplePinyin: "Suīrán shì qíngtiān, dànshì hěn lěng.", exampleVi: "Tuy là ngày nắng, nhưng rất lạnh.", source: "book", exampleSource: "book" },
      { hanzi: "百", pinyin: "bǎi", pos: "Số từ", meaning: "Trăm", example: "这件衣服一百块。", examplePinyin: "Zhè jiàn yīfu yì bǎi kuài.", exampleVi: "Cái áo này một trăm tệ.", source: "book", exampleSource: "ai" }
    ],
    grammar: [
      { id: "g1", title: "Trợ từ kinh nghiệm 过", structure: "Động từ + 过 + tân ngữ", explanation: "Dùng để nói đã từng có kinh nghiệm làm việc gì.", examples: [
        { zh: "他们来过我家。", pinyin: "Tāmen lái guo wǒ jiā.", vi: "Họ từng đến nhà tôi." },
        { zh: "我看过那个电影。", pinyin: "Wǒ kàn guo nà ge diànyǐng.", vi: "Tôi từng xem bộ phim đó." },
        { zh: "我没看过那个电影。", pinyin: "Wǒ méi kàn guo nà ge diànyǐng.", vi: "Tôi chưa từng xem bộ phim đó." }
      ], source: "book" },
      { id: "g2", title: "虽然……但是……", structure: "虽然 + mệnh đề 1，但是 + mệnh đề 2", explanation: "Nói hai ý tương phản: tuy/mặc dù... nhưng...", examples: [
        { zh: "虽然外面很冷，但是房间里很热。", pinyin: "Suīrán wàimian hěn lěng, dànshì fángjiān li hěn rè.", vi: "Tuy bên ngoài lạnh, nhưng trong phòng rất nóng." },
        { zh: "虽然汉字很难，但是我很喜欢写汉字。", pinyin: "Suīrán Hànzì hěn nán, dànshì wǒ hěn xǐhuan xiě Hànzì.", vi: "Tuy chữ Hán khó, nhưng tôi rất thích viết chữ Hán." },
        { zh: "虽然是晴天，但是很冷。", pinyin: "Suīrán shì qíngtiān, dànshì hěn lěng.", vi: "Tuy là ngày nắng, nhưng rất lạnh." }
      ], source: "book" },
      { id: "g3", title: "Lượng từ 次", structure: "Động từ (+ 过) + số + 次 + tân ngữ", explanation: "Dùng 次 để nói số lần làm việc gì.", examples: [
        { zh: "我们去过三次北京。", pinyin: "Wǒmen qù guo sān cì Běijīng.", vi: "Chúng tôi từng đi Bắc Kinh ba lần." },
        { zh: "我上星期去过一次医院。", pinyin: "Wǒ shàng xīngqī qù guo yí cì yīyuàn.", vi: "Tuần trước tôi từng đi bệnh viện một lần." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "这个字是什么（ ）？", answer: "意思", hint: "ý nghĩa", source: "ai" },
        { prompt: "（ ）是晴天，但是很冷。", answer: "虽然", hint: "tuy", source: "book" },
        { prompt: "我看过这个电影两（ ）。", answer: "次", hint: "lần", source: "ai" },
        { prompt: "这件衣服一（ ）块。", answer: "百", hint: "trăm", source: "ai" }
      ],
      listeningChoice: [
        { script: "意思", prompt: "Nghe và chọn từ đúng", answer: "意思", options: ["意思", "虽然", "但是", "次"], source: "ai" },
        { script: "晴天", prompt: "Nghe và chọn từ đúng", answer: "晴天", options: ["晴天", "玩儿", "百", "电影"], source: "ai" },
        { script: "但是", prompt: "Nghe và chọn từ đúng", answer: "但是", options: ["但是", "虽然", "过", "意思"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu hỏi kinh nghiệm đúng.", options: ["你看过那个电影吗？", "你看那个电影过吗？", "你过看那个电影吗？"], answer: "你看过那个电影吗？", explain: "过 đứng sau động từ 看.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "我没看（ ）那个电影。", answer: "过", explain: "没 + V + 过: chưa từng.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "（ ）外面很冷，但是房间里很热。", answer: "虽然", explain: "虽然 mở đầu vế nhượng bộ.", source: "book", grammarId: "g2" },
      { type: "choice", prompt: "Chọn câu đúng.", options: ["虽然汉字很难，但是我很喜欢。", "虽然汉字很难，我但是很喜欢。", "汉字虽然但是很难。"], answer: "虽然汉字很难，但是我很喜欢。", explain: "但是 đứng đầu vế thứ hai.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "我去过三（ ）北京。", answer: "次", explain: "次 chỉ số lần.", source: "book", grammarId: "g3" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["我", "看过", "这个电影", "两次"], answer: "我看过这个电影两次", explain: "两次 đặt sau tân ngữ trong mẫu này.", source: "ai", grammarId: "g3" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Tuy... nhưng...” là cấu trúc nào?", options: ["虽然……但是……", "因为……所以……", "从……到……"], answer: "虽然……但是……", source: "book" },
      { type: "fill", prompt: "你看（ ）那个电影吗？", answer: "过", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["虽然", "是晴天", "但是", "很冷"], answer: "虽然是晴天但是很冷", source: "book" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Tôi từng đến Bắc Kinh ba lần.", answer: "我去过三次北京。", source: "book" }
    ],
    workbook: [
      { id: "ai-fill-1-5", title: "Bài tập tự chấm bổ sung - Điền từ", source: "ai", type: "fillChoice", choices: [
        { key: "A", text: "意思" }, { key: "B", text: "虽然" }, { key: "C", text: "但是" }, { key: "D", text: "次" }, { key: "E", text: "晴" }, { key: "F", text: "百" }
      ], questions: [
        { id: "1", prompt: "这个字是什么（ ）？", answer: "A" },
        { id: "2", prompt: "（ ）外面很冷，但是房间里很热。", answer: "B" },
        { id: "3", prompt: "虽然是晴天，（ ）很冷。", answer: "C" },
        { id: "4", prompt: "我去过两（ ）北京。", answer: "D" },
        { id: "5", prompt: "这本书一（ ）块。", answer: "F" }
      ] },
      { id: "ai-judge-6-10", title: "Bài tập tự chấm bổ sung - Đúng/Sai", source: "ai", type: "trueFalse", questions: [
        { id: "6", original: "我没看过那个电影。", prompt: "我以前看过那个电影。", answer: "x" },
        { id: "7", original: "虽然汉字很难，但是我很喜欢写汉字。", prompt: "他说他不喜欢写汉字。", answer: "x" },
        { id: "8", original: "我们去过三次北京。", prompt: "他们有去北京的经验。", answer: "√" },
        { id: "9", original: "虽然是晴天，但是很冷。", prompt: "今天不冷。", answer: "x" },
        { id: "10", original: "这个字是什么意思？", prompt: "说话的人在问字的意思。", answer: "√" }
      ] },
      { id: "ai-mix-11-15", title: "Bài tập tự chấm bổ sung - Tổng hợp", source: "ai", type: "matchChoice", choices: [
        { key: "A", text: "你看过那个电影吗？" }, { key: "B", text: "虽然外面很冷，但是房间里很热。" }, { key: "C", text: "我去过三次北京。" }, { key: "D", text: "这个字是什么意思？" }, { key: "E", text: "周末我们一起去玩儿吧。" }
      ], questions: [
        { id: "11", prompt: "Bạn từng xem bộ phim đó chưa?", answer: "A" },
        { id: "12", prompt: "Tuy ngoài trời lạnh nhưng trong phòng nóng.", answer: "B" },
        { id: "13", prompt: "Tôi từng đi Bắc Kinh ba lần.", answer: "C" },
        { id: "14", prompt: "Chữ này nghĩa là gì?", answer: "D" },
        { id: "15", prompt: "Cuối tuần chúng ta cùng đi chơi nhé.", answer: "E" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập Bài 14", source: "book", note: "Trong HSK2.md hiện tại chưa có phần sách bài tập Bài 14 đầy đủ, nên không tạo đáp án sách hoặc bài nghe sách tự chấm.", lines: ["Từ mới “但是” trong nguồn có dấu ngoặc kép; dữ liệu hiển thị dùng dạng chữ chuẩn 但是.", "Nguồn có mẩu bất thường “表达/但是” và một số dòng dịch ví dụ bị lẫn nội dung; các mẩu này không dùng để tạo bài AI."] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "Chọn câu đúng.", options: ["我看过这个电影。", "我看这个电影过。", "我过看这个电影。"], answer: "我看过这个电影。", explain: "过 đứng sau động từ 看.", source: "ai" },
      { type: "fill", prompt: "虽然是晴天，（ ）很冷。", answer: "但是", explain: "但是 nối vế tương phản.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Tôi chưa từng xem bộ phim đó.", answer: "我没看过那个电影。", explain: "没 + V + 过.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "我看过那个电影两次。", prompt: "他看过几次那个电影？", options: ["两次", "一次", "三次"], answer: "两次", explain: "Script nói 两次." },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "虽然外面很冷，但是房间里很热。", prompt: "房间里很冷。", options: ["√", "x"], answer: "x", explain: "Script nói phòng rất nóng." },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "这个字是什么意思？", prompt: "这个字是什么（ ）？", answer: "意思", explain: "Từ nghe được là 意思." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：你去过北京吗？\n男：去过三次。", prompt: "男的去过北京几次？", options: ["三次", "没去过", "一次"], answer: "三次", explain: "Script nói 去过三次。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
