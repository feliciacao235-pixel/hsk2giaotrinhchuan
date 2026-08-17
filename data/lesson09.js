(function () {
  const lesson = {
    id: "lesson09",
    order: 9,
    type: "lesson",
    status: "ready",
    title: "题太多，我没做完",
    viTitle: "Câu hỏi quá nhiều nên mình không làm hết",
    scope: "Bài 9",
    sourceRange: "HSK2.md: sách giáo trình Bài 9 và sách bài tập Bài 9",
    vocabulary: [
      { hanzi: "错", pinyin: "cuò", pos: "Tính từ", meaning: "Sai, nhầm", example: "这个题我做错了。", examplePinyin: "Zhège tí wǒ zuò cuò le.", exampleVi: "Câu này tôi làm sai rồi.", source: "book", exampleSource: "ai" },
      { hanzi: "从", pinyin: "cóng", pos: "Giới từ", meaning: "Từ", example: "从下个星期一开始上班。", examplePinyin: "Cóng xià ge xīngqī yī kāishǐ shàngbān.", exampleVi: "Từ thứ Hai tuần sau bắt đầu đi làm.", source: "book", exampleSource: "book" },
      { hanzi: "跳舞", pinyin: "tiàowǔ", pos: "Động từ", meaning: "Múa, khiêu vũ", example: "这是我第一次跳舞。", examplePinyin: "Zhè shì wǒ dì yī cì tiàowǔ.", exampleVi: "Đây là lần đầu tiên tôi khiêu vũ.", source: "book", exampleSource: "book" },
      { hanzi: "第一", pinyin: "dì-yī", pos: "Số từ", meaning: "Thứ nhất, đầu tiên", example: "这是我的第一个工作。", examplePinyin: "Zhè shì wǒ de dì yī ge gōngzuò.", exampleVi: "Đây là công việc đầu tiên của tôi.", source: "book", exampleSource: "book" },
      { hanzi: "希望", pinyin: "xīwàng", pos: "Động từ/Danh từ", meaning: "Mong, hy vọng", example: "我希望能找到一个好的工作。", examplePinyin: "Wǒ xīwàng néng zhǎodào yí ge hǎo de gōngzuò.", exampleVi: "Tôi hy vọng có thể tìm được một công việc tốt.", source: "book", exampleSource: "book" },
      { hanzi: "问题", pinyin: "wèntí", pos: "Danh từ", meaning: "Vấn đề, câu hỏi", example: "你有什么问题都可以问老师。", examplePinyin: "Nǐ yǒu shénme wèntí dōu kěyǐ wèn lǎoshī.", exampleVi: "Bạn có vấn đề gì đều có thể hỏi thầy cô.", source: "book", exampleSource: "book" },
      { hanzi: "欢迎", pinyin: "huānyíng", pos: "Động từ", meaning: "Hoan nghênh, chào mừng", example: "欢迎你来我家。", examplePinyin: "Huānyíng nǐ lái wǒ jiā.", exampleVi: "Hoan nghênh bạn đến nhà tôi.", source: "book", exampleSource: "ai" },
      { hanzi: "上班", pinyin: "shàngbān", pos: "Động từ", meaning: "Đi làm", example: "我每天走路去上班。", examplePinyin: "Wǒ měitiān zǒulù qù shàngbān.", exampleVi: "Mỗi ngày tôi đi bộ đi làm.", source: "book", exampleSource: "book" },
      { hanzi: "懂", pinyin: "dǒng", pos: "Động từ", meaning: "Hiểu, biết", example: "今天的课你都听懂了吗？", examplePinyin: "Jīntiān de kè nǐ dōu tīng dǒng le ma?", exampleVi: "Bài hôm nay bạn đều nghe hiểu chưa?", source: "book", exampleSource: "book" },
      { hanzi: "完", pinyin: "wán", pos: "Động từ/Bổ ngữ", meaning: "Xong, hết, hoàn thành", example: "我没做完考试题。", examplePinyin: "Wǒ méi zuò wán kǎoshì tí.", exampleVi: "Tôi chưa làm xong đề thi.", source: "book", exampleSource: "book" },
      { hanzi: "题", pinyin: "tí", pos: "Danh từ", meaning: "Đề bài, câu hỏi", example: "昨天的考试题很多。", examplePinyin: "Zuótiān de kǎoshì tí hěn duō.", exampleVi: "Đề thi hôm qua có rất nhiều câu.", source: "book", exampleSource: "book" }
    ],
    grammar: [
      { id: "g1", title: "Bổ ngữ kết quả", structure: "Động từ + bổ ngữ kết quả (+ 了)", explanation: "Đứng sau động từ để nói kết quả của hành động đã đạt được hay chưa.", examples: [
        { zh: "我听懂今天的汉语课了。", pinyin: "Wǒ tīng dǒng jīntiān de Hànyǔ kè le.", vi: "Tôi đã nghe hiểu bài tiếng Trung hôm nay." },
        { zh: "我没做完考试题。", pinyin: "Wǒ méi zuò wán kǎoshì tí.", vi: "Tôi chưa làm xong đề thi." },
        { zh: "大卫找到工作了。", pinyin: "Dàwèi zhǎodào gōngzuò le.", vi: "David đã tìm được việc rồi." }
      ], source: "book" },
      { id: "g2", title: "Giới từ 从", structure: "从 + điểm bắt đầu (+ 到 + điểm kết thúc)", explanation: "Dùng để nói điểm xuất phát về thời gian, địa điểm hoặc phạm vi.", examples: [
        { zh: "从北京到上海要坐几个小时的飞机？", pinyin: "Cóng Běijīng dào Shànghǎi yào zuò jǐ ge xiǎoshí de fēijī?", vi: "Từ Bắc Kinh đến Thượng Hải phải ngồi máy bay mấy tiếng?" },
        { zh: "从下个星期一开始上班。", pinyin: "Cóng xià ge xīngqī yī kāishǐ shàngbān.", vi: "Từ thứ Hai tuần sau bắt đầu đi làm." }
      ], source: "book" },
      { id: "g3", title: "Thứ tự 第一", structure: "第 + số + lượng từ + danh từ", explanation: "Dùng để nói thứ tự: thứ nhất, thứ hai, lần đầu...", examples: [
        { zh: "这是我的第一个工作。", pinyin: "Zhè shì wǒ de dì yī ge gōngzuò.", vi: "Đây là công việc đầu tiên của tôi." },
        { zh: "这是我第一次跳舞。", pinyin: "Zhè shì wǒ dì yī cì tiàowǔ.", vi: "Đây là lần đầu tiên tôi khiêu vũ." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "今天的课你都听（ ）了吗？", answer: "懂", hint: "hiểu", source: "book" },
        { prompt: "我每天走路去（ ）。", answer: "上班", hint: "đi làm", source: "book" },
        { prompt: "我（ ）能找到一个好的工作。", answer: "希望", hint: "hy vọng", source: "book" },
        { prompt: "昨天的考试（ ）很多。", answer: "题", hint: "câu hỏi/đề", source: "book" }
      ],
      listeningChoice: [
        { script: "问题", prompt: "Nghe và chọn từ đúng", answer: "问题", options: ["问题", "题", "欢迎", "第一"], source: "ai" },
        { script: "上班", prompt: "Nghe và chọn từ đúng", answer: "上班", options: ["上班", "跳舞", "从", "完"], source: "ai" },
        { script: "希望", prompt: "Nghe và chọn từ đúng", answer: "希望", options: ["希望", "欢迎", "懂", "错"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu dùng bổ ngữ kết quả đúng.", options: ["我听懂今天的课了。", "我懂听今天的课了。", "我听今天的课懂了。"], answer: "我听懂今天的课了。", explain: "懂 đứng ngay sau động từ 听 để nói kết quả nghe hiểu.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "我没做（ ）考试题。", answer: "完", explain: "没 + động từ + 完, không dùng 了 trong câu phủ định.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "我每天（ ）八点到十二点都在公司工作。", answer: "从", explain: "从 đánh dấu điểm bắt đầu về thời gian.", source: "book", grammarId: "g2" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["从", "下个星期一", "开始", "上班"], answer: "从下个星期一开始上班", explain: "从 đặt trước mốc thời gian bắt đầu.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "这是我的（ ）一个工作。", answer: "第", explain: "第 + số để nói thứ tự.", source: "book", grammarId: "g3" },
      { type: "choice", prompt: "Chọn câu nghĩa “lần đầu khiêu vũ”.", options: ["第一次跳舞", "一个跳舞", "第一跳舞"], answer: "第一次跳舞", explain: "次 là lượng từ chỉ lần.", source: "book", grammarId: "g3" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Nghe hiểu” nên nói thế nào?", options: ["听懂", "听完", "听错"], answer: "听懂", source: "ai" },
      { type: "fill", prompt: "题太多，我没做（ ）。", answer: "完", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["我", "希望", "找到", "工作"], answer: "我希望找到工作", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Tôi đi làm từ tám giờ.", answer: "我从八点上班。", source: "ai" }
    ],
    workbook: [
      { id: "wb-read-21-25", title: "Sách bài tập - Đọc Phần 2, Câu 21-25", source: "book", type: "fillChoice", choices: [
        { key: "A", text: "上班" }, { key: "B", text: "从" }, { key: "C", text: "希望" }, { key: "D", text: "问题" }, { key: "E", text: "贵" }, { key: "F", text: "懂" }
      ], questions: [
        { id: "21", prompt: "我每天（ ）八点到十二点都在公司工作。", answer: "B" },
        { id: "22", prompt: "我家离公司不太远，所以每天走路去（ ）。", answer: "A" },
        { id: "23", prompt: "今天的课你都听（ ）了吗？", answer: "F" },
        { id: "24", prompt: "你有什么（ ）都可以问老师。", answer: "D" },
        { id: "25", prompt: "我（ ）能找到一个好的工作。", answer: "C" }
      ] },
      { id: "wb-judge-26-30", title: "Sách bài tập - Đọc Phần 3, Câu 26-30", source: "book", type: "trueFalse", questions: [
        { id: "26", original: "我女儿已经六岁了，我希望她能跟我学唱歌。", prompt: "她女儿唱歌非常好。", answer: "x", explain: "Câu gốc chỉ nói hy vọng con gái học hát." },
        { id: "27", original: "这是 his 的第一个工作，从下个星期开始上班，希望他能喜欢这个工作。", prompt: "他还没有上班呢。", answer: "√", explain: "Nguồn có lẫn chữ “his”; giữ nguyên câu nguồn." },
        { id: "28", original: "昨天的考试不太难，题很多，我有两个题没有做完。", prompt: "这次考试题很多，很难。", answer: "x", explain: "Câu gốc nói không quá khó." },
        { id: "29", original: "今天是9月20号，还有三天就是爸爸的生日了。我想送他一个新手机。", prompt: "9月23号是我的生日。", answer: "x", explain: "Ngày 23 là sinh nhật bố." },
        { id: "30", original: "我的一个朋友正在找房子，希望离公司近一些，这样他每天七点起床就可以了。", prompt: "他的朋友现在每天七点起床。", answer: "x", explain: "Câu gốc nói nếu gần công ty thì có thể dậy lúc bảy giờ." }
      ] },
      { id: "wb-match-31-35", title: "Sách bài tập - Đọc Phần 4, Câu 31-35", source: "book", type: "matchChoice", choices: [
        { key: "A", text: "就在前面，你还没看见吗？" }, { key: "B", text: "非常好，我想明年再来一次。" }, { key: "C", text: "还可以，都做完了。" }, { key: "D", text: "这些衣服你一个人能洗完吗？" }, { key: "E", text: "他在哪儿呢？你看见 he/tā/它 了吗？（例）" }, { key: "F", text: "等等我，我也想去。" }
      ], questions: [
        { id: "31", prompt: "昨天的考试怎么样？题都做完了吗？", answer: "C" },
        { id: "32", prompt: "没关系，今天洗一些，明天再洗一些。", answer: "D" },
        { id: "33", prompt: "你看见我哥哥了吗？", answer: "A" },
        { id: "34", prompt: "羊肉吃完了，我再去商店买一些吧。", answer: "F" },
        { id: "35", prompt: "第一次来北京吧？北京漂亮吗？", answer: "B" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập - Nghe Phần 1-3", source: "book", note: "HSK2.md có mô tả hình/lựa chọn nhưng thiếu script audio và đáp án gốc nên chưa tự chấm.", lines: ["Phần nghe Bài 9 giữ làm tham khảo, không tạo đáp án giả.", "Phần chọn hình phụ thuộc hình gốc nên chưa đưa vào bài tự chấm."] },
      { title: "Dữ liệu nguồn bất thường", source: "book", note: "Giữ nguyên khi trích sách, không dùng để tạo câu AI.", lines: ["Câu 27 có lẫn chữ “his”.", "Lựa chọn ví dụ phần ghép có lẫn he/tā/它."] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "Chọn câu đúng.", options: ["我没做完题。", "我没做题完了。", "我完没做题。"], answer: "我没做完题。", explain: "完 là bổ ngữ kết quả sau 做.", source: "ai" },
      { type: "fill", prompt: "我（ ）下个星期一开始上班。", answer: "从", explain: "从 + mốc bắt đầu.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Đây là công việc đầu tiên của tôi.", answer: "这是我的第一个工作。", explain: "第一个工作 = công việc thứ nhất/đầu tiên.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "题太多，我没做完。", prompt: "为什么没做完？", options: ["题太多", "题太少", "不想上班"], answer: "题太多", explain: "Script nói 题太多。" },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "我从下个星期一开始上班。", prompt: "他现在已经上班了。", options: ["√", "x"], answer: "x", explain: "Từ thứ Hai tuần sau mới bắt đầu." },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "今天的课你都听懂了吗？", prompt: "今天的课你都听（ ）了吗？", answer: "懂", explain: "Từ nghe được là 懂." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：这是你第一个工作吗？\n男：对，我希望我能喜欢这个工作。", prompt: "男的希望什么？", options: ["喜欢这个工作", "去跳舞", "买手机"], answer: "喜欢这个工作", explain: "Script nói 希望喜欢这个工作。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
