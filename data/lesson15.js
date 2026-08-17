(function () {
  const lesson = {
    id: "lesson15",
    order: 15,
    type: "lesson",
    status: "ready",
    title: "新年就要到了",
    viTitle: "Năm mới sắp đến rồi",
    scope: "Bài 15",
    sourceRange: "HSK2.md: sách giáo trình Bài 15; chưa thấy phần sách bài tập Bài 15 trong file nguồn hiện tại",
    vocabulary: [
      { hanzi: "日", pinyin: "rì", pos: "Danh từ", meaning: "Ngày", example: "今天是十二月二十日。", examplePinyin: "Jīntiān shì shí'èr yuè èrshí rì.", exampleVi: "Hôm nay là ngày 20 tháng 12.", source: "book", exampleSource: "ai" },
      { hanzi: "新年", pinyin: "xīnnián", pos: "Danh từ", meaning: "Năm mới", example: "新年快要到了。", examplePinyin: "Xīnnián kuài yào dào le.", exampleVi: "Năm mới sắp đến rồi.", source: "book", exampleSource: "book" },
      { hanzi: "票", pinyin: "piào", pos: "Danh từ", meaning: "Vé", example: "我想买火车票。", examplePinyin: "Wǒ xiǎng mǎi huǒchē piào.", exampleVi: "Tôi muốn mua vé tàu.", source: "book", exampleSource: "ai" },
      { hanzi: "火车站", pinyin: "huǒchēzhàn", pos: "Danh từ", meaning: "Ga tàu hỏa", example: "火车站离这儿很远。", examplePinyin: "Huǒchēzhàn lí zhèr hěn yuǎn.", exampleVi: "Ga tàu cách đây rất xa.", source: "book", exampleSource: "ai" },
      { hanzi: "大家", pinyin: "dàjiā", pos: "Đại từ", meaning: "Mọi người", example: "大家新年好！", examplePinyin: "Dàjiā xīnnián hǎo!", exampleVi: "Chúc mọi người năm mới vui vẻ!", source: "book", exampleSource: "ai" },
      { hanzi: "更", pinyin: "gèng", pos: "Phó từ", meaning: "Càng, hơn nữa", example: "明天天气更冷。", examplePinyin: "Míngtiān tiānqì gèng lěng.", exampleVi: "Ngày mai thời tiết càng lạnh hơn.", source: "book", exampleSource: "ai" },
      { hanzi: "妹妹", pinyin: "mèimei", pos: "Danh từ", meaning: "Em gái", example: "我妹妹明天就要走了。", examplePinyin: "Wǒ mèimei míngtiān jiù yào zǒu le.", exampleVi: "Em gái tôi ngày mai sắp đi rồi.", source: "book", exampleSource: "ai" },
      { hanzi: "阴", pinyin: "yīn", pos: "Tính từ", meaning: "Âm u, nhiều mây", example: "今天是阴天。", examplePinyin: "Jīntiān shì yīntiān.", exampleVi: "Hôm nay là ngày nhiều mây.", source: "book", exampleSource: "ai" }
    ],
    grammar: [
      { id: "g1", title: "要……了 / 快要……了 / 就要……了", structure: "要/快要/快/就要 + động từ/tính từ + 了", explanation: "Diễn tả một việc sắp xảy ra trong tương lai gần.", examples: [
        { zh: "要下雨了。", pinyin: "Yào xiàyǔ le.", vi: "Sắp mưa rồi." },
        { zh: "新的一年快要到了。", pinyin: "Xīn de yì nián kuài yào dào le.", vi: "Một năm mới sắp đến rồi." },
        { zh: "下个月我们就要回国了。", pinyin: "Xià ge yuè wǒmen jiù yào huí guó le.", vi: "Tháng sau chúng tôi sắp về nước rồi." }
      ], source: "book" },
      { id: "g2", title: "都……了", structure: "都 + số/thời gian/tình huống + 了", explanation: "Nhấn mạnh đã đến mức nào đó, thường kèm ý nhắc nhở hoặc than phiền nhẹ.", examples: [
        { zh: "都8点了，快点儿起床吧。", pinyin: "Dōu bā diǎn le, kuài diǎnr qǐchuáng ba.", vi: "Đã 8 giờ rồi, dậy nhanh lên." },
        { zh: "你都十岁了，可以自己洗衣服了。", pinyin: "Nǐ dōu shí suì le, kěyǐ zìjǐ xǐ yīfu le.", vi: "Con đã 10 tuổi rồi, có thể tự giặt quần áo rồi." },
        { zh: "都等她半个小时了。", pinyin: "Dōu děng tā bàn ge xiǎoshí le.", vi: "Đã đợi cô ấy nửa tiếng rồi." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "新年快要（ ）了。", answer: "到", hint: "đến", source: "book" },
        { prompt: "我想买火车（ ）。", answer: "票", hint: "vé", source: "ai" },
        { prompt: "火车站离这儿很（ ）。", answer: "远", hint: "xa", source: "ai" },
        { prompt: "今天是（ ）天。", answer: "阴", hint: "nhiều mây", source: "ai" }
      ],
      listeningChoice: [
        { script: "新年", prompt: "Nghe và chọn từ đúng", answer: "新年", options: ["新年", "火车站", "妹妹", "大家"], source: "ai" },
        { script: "火车站", prompt: "Nghe và chọn từ đúng", answer: "火车站", options: ["火车站", "票", "日", "阴"], source: "ai" },
        { script: "妹妹", prompt: "Nghe và chọn từ đúng", answer: "妹妹", options: ["妹妹", "大家", "更", "新年"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu nói “sắp mưa rồi”.", options: ["要下雨了。", "下雨要了。", "要了下雨。"], answer: "要下雨了。", explain: "要 + động từ + 了.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "新的一年快（ ）到了。", answer: "要", explain: "快要...了 nói sắp xảy ra.", source: "book", grammarId: "g1" },
      { type: "choice", prompt: "Chọn câu đúng.", options: ["都8点了，快点儿起床吧。", "8点都快点儿了起床吧。", "都了8点快起床。"], answer: "都8点了，快点儿起床吧。", explain: "都 + thời gian + 了 để nhấn mạnh đã đến giờ.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "（ ）等她半个小时了。", answer: "都", explain: "都...了 nhấn mạnh đã đợi lâu.", source: "book", grammarId: "g2" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Ga tàu hỏa” là từ nào?", options: ["火车站", "票", "新年", "日"], answer: "火车站", source: "book" },
      { type: "fill", prompt: "新年就要（ ）了。", answer: "到", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["都", "8点", "了", "快点儿", "起床", "吧"], answer: "都8点了快点儿起床吧", source: "book" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Em gái tôi ngày mai sắp đi rồi.", answer: "我妹妹明天就要走了。", source: "ai" }
    ],
    workbook: [
      { id: "ai-fill-1-5", title: "Bài tập tự chấm bổ sung - Điền từ", source: "ai", type: "fillChoice", choices: [
        { key: "A", text: "新年" }, { key: "B", text: "票" }, { key: "C", text: "火车站" }, { key: "D", text: "大家" }, { key: "E", text: "更" }, { key: "F", text: "阴" }
      ], questions: [
        { id: "1", prompt: "（ ）快要到了。", answer: "A" },
        { id: "2", prompt: "我想买一张（ ）。", answer: "B" },
        { id: "3", prompt: "（ ）离这儿很远。", answer: "C" },
        { id: "4", prompt: "（ ）新年好！", answer: "D" },
        { id: "5", prompt: "明天天气（ ）冷。", answer: "E" }
      ] },
      { id: "ai-judge-6-10", title: "Bài tập tự chấm bổ sung - Đúng/Sai", source: "ai", type: "trueFalse", questions: [
        { id: "6", original: "新年快要到了。", prompt: "新年还很远。", answer: "x" },
        { id: "7", original: "都8点了，快点儿起床吧。", prompt: "说话的人让别人快起床。", answer: "√" },
        { id: "8", original: "我妹妹明天就要走了。", prompt: "妹妹今天已经走了。", answer: "x" },
        { id: "9", original: "今天是阴天。", prompt: "今天不是晴天。", answer: "√" },
        { id: "10", original: "下个月我们就要回国了。", prompt: "他们这个月回国。", answer: "x" }
      ] },
      { id: "ai-mix-11-15", title: "Bài tập tự chấm bổ sung - Tổng hợp", source: "ai", type: "matchChoice", choices: [
        { key: "A", text: "新年快要到了。" }, { key: "B", text: "我想买火车票。" }, { key: "C", text: "火车站离这儿很远。" }, { key: "D", text: "都8点了，快点儿起床吧。" }, { key: "E", text: "今天是阴天。" }
      ], questions: [
        { id: "11", prompt: "Năm mới sắp đến rồi.", answer: "A" },
        { id: "12", prompt: "Tôi muốn mua vé tàu.", answer: "B" },
        { id: "13", prompt: "Ga tàu cách đây rất xa.", answer: "C" },
        { id: "14", prompt: "Đã 8 giờ rồi, dậy nhanh lên.", answer: "D" },
        { id: "15", prompt: "Hôm nay là ngày nhiều mây.", answer: "E" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập Bài 15", source: "book", note: "Trong HSK2.md hiện tại chưa có phần sách bài tập Bài 15 đầy đủ, nên không tạo đáp án sách hoặc bài nghe sách tự chấm.", lines: ["Nguồn có ví dụ bất thường “火车快要来换/了”; không dùng mẩu này để tạo bài AI.", "Các bài tự chấm trong mục này đều gắn nhãn AI bổ sung."] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "Chọn câu đúng.", options: ["新年就要到了。", "新年到了就要。", "就新年要到了。"], answer: "新年就要到了。", explain: "就要...了 nói sắp xảy ra.", source: "ai" },
      { type: "fill", prompt: "都八点（ ），快点儿起床吧。", answer: "了", explain: "都...了 nhấn mạnh đã đến mức/thời điểm.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Năm mới sắp đến rồi.", answer: "新年快要到了。", explain: "快要...了 = sắp.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "新年快要到了，大家都很高兴。", prompt: "什么快要到了？", options: ["新年", "生日", "考试"], answer: "新年", explain: "Script nói 新年快要到了." },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "都8点了，快点儿起床吧。", prompt: "现在已经8点了。", options: ["√", "x"], answer: "√", explain: "Script nói 都8点了." },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "我想买一张火车票。", prompt: "我想买一张火车（ ）。", answer: "票", explain: "Từ nghe được là 票." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：火车站离这儿远吗？\n男：很远，我们坐出租车去吧。", prompt: "他们怎么去火车站？", options: ["坐出租车", "走路", "骑自行车"], answer: "坐出租车", explain: "Script nói 坐出租车去。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
