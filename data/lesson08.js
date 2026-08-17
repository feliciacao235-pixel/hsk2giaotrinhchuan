(function () {
  const lesson = {
    id: "lesson08",
    order: 8,
    type: "lesson",
    status: "ready",
    title: "让我想想再告诉你",
    viTitle: "Để mình suy nghĩ rồi sẽ nói cho bạn biết",
    scope: "Bài 8",
    sourceRange: "HSK2.md: sách giáo trình Bài 8 và sách bài tập Bài 8",
    vocabulary: [
      { hanzi: "再", pinyin: "zài", pos: "Phó từ", meaning: "Lại, lần nữa, hãy, rồi sẽ...", example: "明天再给他打电话吧。", examplePinyin: "Míngtiān zài gěi tā dǎ diànhuà ba.", exampleVi: "Ngày mai hãy gọi lại cho cậu ấy nhé.", source: "book" },
      { hanzi: "让", pinyin: "ràng", pos: "Động từ", meaning: "Để, bảo, cho phép", example: "王老师让我给张朋打个电话。", examplePinyin: "Wáng lǎoshī ràng wǒ gěi Zhāng Péng dǎ ge diànhuà.", exampleVi: "Thầy Vương bảo tôi gọi điện cho Trương Bằng.", source: "book" },
      { hanzi: "告诉", pinyin: "gàosù", pos: "Động từ", meaning: "Nói, bảo, nói cho biết", example: "让我想想再告诉你。", examplePinyin: "Ràng wǒ xiǎngxiang zài gàosu nǐ.", exampleVi: "Để tôi suy nghĩ rồi sẽ nói cho bạn biết.", source: "book" },
      { hanzi: "等", pinyin: "děng", pos: "Động từ", meaning: "Đợi, chờ", example: "他让你等一会儿。", examplePinyin: "Tā ràng nǐ děng yíhuìr.", exampleVi: "Thầy ấy bảo bạn đợi một lát.", source: "book" },
      { hanzi: "找", pinyin: "zhǎo", pos: "Động từ", meaning: "Tìm, tìm kiếm", example: "下个星期再找时间。", examplePinyin: "Xià ge xīngqī zài zhǎo shíjiān.", exampleVi: "Tuần sau lại tìm thời gian.", source: "book" },
      { hanzi: "事情", pinyin: "shìqing", pos: "Danh từ", meaning: "Sự việc, việc", example: "你找服务员有什么事情？", examplePinyin: "Nǐ zhǎo fúwùyuán yǒu shénme shìqing?", exampleVi: "Bạn tìm nhân viên phục vụ có việc gì?", source: "book" },
      { hanzi: "服务员", pinyin: "fúwùyuán", pos: "Danh từ", meaning: "Nhân viên phục vụ, bồi bàn", example: "请问，你找服务员有什么事情？", examplePinyin: "Qǐngwèn, nǐ zhǎo fúwùyuán yǒu shénme shìqing?", exampleVi: "Xin hỏi, bạn tìm nhân viên phục vụ có việc gì?", source: "book" },
      { hanzi: "白", pinyin: "bái", pos: "Tính từ", meaning: "Trắng, có màu trắng", example: "这件白的有点儿长。", examplePinyin: "Zhè jiàn bái de yǒudiǎnr cháng.", exampleVi: "Chiếc màu trắng này hơi dài.", source: "book" },
      { hanzi: "黑", pinyin: "hēi", pos: "Tính từ", meaning: "Đen, có màu đen", example: "那件黑的有点儿贵。", examplePinyin: "Nà jiàn hēi de yǒudiǎnr guì.", exampleVi: "Chiếc màu đen kia hơi đắt.", source: "book" },
      { hanzi: "贵", pinyin: "guì", pos: "Tính từ", meaning: "Đắt, mắc", example: "这个商店的东西有点儿贵。", examplePinyin: "Zhège shāngdiàn de dōngxi yǒudiǎnr guì.", exampleVi: "Đồ ở cửa hàng này hơi đắt.", source: "book" }
    ],
    grammar: [
      { id: "g1", title: "Câu hỏi ……, 好吗？", structure: "Mệnh đề đề xuất + ，好吗？", explanation: "Đặt cuối câu để đưa ra đề xuất và hỏi ý kiến người nghe.", examples: [
        { zh: "我们一起去吃饭，好吗？", pinyin: "Wǒmen yìqǐ qù chīfàn, hǎo ma?", vi: "Chúng ta cùng đi ăn cơm nhé, được không?" },
        { zh: "你明天下午给我打电话，好吗？", pinyin: "Nǐ míngtiān xiàwǔ gěi wǒ dǎ diànhuà, hǎo ma?", vi: "Chiều mai bạn gọi điện cho tôi nhé, được không?" },
        { zh: "我们下午去看电影，好吗？", pinyin: "Wǒmen xiàwǔ qù kàn diànyǐng, hǎo ma?", vi: "Chiều nay chúng ta đi xem phim nhé, được không?" }
      ], source: "book" },
      { id: "g2", title: "Phó từ 再", structure: "再 + động từ", explanation: "Biểu thị hành động sẽ lặp lại hoặc xảy ra sau một điều kiện/tình huống khác.", examples: [
        { zh: "你再看看这本书吧。", pinyin: "Nǐ zài kànkan zhè běn shū ba.", vi: "Bạn hãy đọc lại quyển sách này đi." },
        { zh: "你明天再给我打电话吧。", pinyin: "Nǐ míngtiān zài gěi wǒ dǎ diànhuà ba.", vi: "Ngày mai bạn hãy gọi lại cho tôi nhé." },
        { zh: "让我想想再告诉你。", pinyin: "Ràng wǒ xiǎngxiang zài gàosu nǐ.", vi: "Để tôi suy nghĩ đã rồi sẽ nói cho bạn biết." }
      ], source: "book" },
      { id: "g3", title: "Câu kiêm ngữ", structure: "Chủ ngữ + 请/让/叫 + tân ngữ/chủ ngữ + động từ 2", explanation: "Tân ngữ của động từ thứ nhất đồng thời là chủ ngữ thực hiện hành động thứ hai.", examples: [
        { zh: "我请你吃饭。", pinyin: "Wǒ qǐng nǐ chīfàn.", vi: "Tôi mời bạn ăn cơm." },
        { zh: "你让我再想想。", pinyin: "Nǐ ràng wǒ zài xiǎngxiang.", vi: "Bạn để tôi suy nghĩ thêm đã." },
        { zh: "我叫人去看看。", pinyin: "Wǒ jiào rén qù kànkan.", vi: "Tôi bảo người đi xem thử." }
      ], source: "book" },
      { id: "g4", title: "Lặp lại động từ", structure: "A → AA / A一A; AB → ABAB", explanation: "Diễn tả hành động ngắn, nhẹ, thử làm hoặc làm một chút.", examples: [
        { zh: "说说 / 说一说", pinyin: "shuōshuo / shuō yi shuō", vi: "Nói một chút." },
        { zh: "看看 / 看一看", pinyin: "kànkan / kàn yi kàn", vi: "Xem thử." },
        { zh: "准备准备", pinyin: "zhǔnbèi zhǔnbèi", vi: "Chuẩn bị một chút." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "让我想想再（ ）你。", answer: "告诉", hint: "nói cho biết", source: "book" },
        { prompt: "他让你（ ）一会儿。", answer: "等", hint: "đợi", source: "book" },
        { prompt: "下个星期再（ ）时间。", answer: "找", hint: "tìm", source: "book" },
        { prompt: "这件（ ）的有点儿长。", answer: "白", hint: "trắng", source: "book" }
      ],
      listeningChoice: [
        { script: "告诉", prompt: "Nghe và chọn từ đúng", answer: "告诉", options: ["告诉", "事情", "服务员", "找"], source: "ai" },
        { script: "让", prompt: "Nghe và chọn từ đúng", answer: "让", options: ["让", "再", "等", "贵"], source: "ai" },
        { script: "黑", prompt: "Nghe và chọn từ đúng", answer: "黑", options: ["黑", "白", "贵", "再"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu đề nghị đúng.", options: ["晚上去看电影，好吗？", "好吗晚上去看电影？", "晚上好吗去看电影？"], answer: "晚上去看电影，好吗？", explain: "好吗 đặt cuối mệnh đề đề xuất.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "我们一起去吃饭，（ ）？", answer: "好吗", explain: "Dùng 好吗 để hỏi ý kiến.", source: "book", grammarId: "g1" },
      { type: "choice", prompt: "Chọn câu dùng 再 đúng.", options: ["你明天再给我打电话吧。", "你再明天给我打电话吧。", "你给我再明天打电话吧。"], answer: "你明天再给我打电话吧。", explain: "再 đứng trước động từ 给/打电话.", source: "book", grammarId: "g2" },
      { type: "order", prompt: "Sắp xếp thành câu đúng.", pieces: ["让", "我", "想想", "再", "告诉", "你"], answer: "让我想想再告诉你", explain: "再 đặt trước 告诉 để nói làm sau.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "王老师（ ）我给张朋打个电话。", answer: "让", explain: "让 + người + làm việc gì.", source: "book", grammarId: "g3" },
      { type: "choice", prompt: "Chọn câu kiêm ngữ đúng.", options: ["我请你吃饭。", "我请吃饭你。", "我你请吃饭。"], answer: "我请你吃饭。", explain: "你 vừa là tân ngữ của 请 vừa thực hiện 吃饭.", source: "book", grammarId: "g3" },
      { type: "fill", prompt: "你再（ ）这本书吧。", answer: "看看", explain: "看 lặp lại thành 看看 để nói xem thử/xem một chút.", source: "book", grammarId: "g4" },
      { type: "choice", prompt: "Chọn dạng lặp đúng của 准备.", options: ["准备准备", "准准备备", "准备一准备备"], answer: "准备准备", explain: "Động từ song âm tiết AB lặp thành ABAB.", source: "book", grammarId: "g4" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Nhân viên phục vụ” là từ nào?", options: ["服务员", "事情", "告诉", "找"], answer: "服务员", source: "book" },
      { type: "fill", prompt: "王老师（ ）我告诉你。", answer: "让", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["让我", "想想", "再", "告诉", "你"], answer: "让我想想再告诉你", source: "book" },
      { type: "choice", prompt: "Chọn nghĩa đúng của 贵.", options: ["Đắt", "Trắng", "Đen", "Đợi"], answer: "Đắt", source: "book" }
    ],
    workbook: [
      { id: "wb-read-21-25", title: "Sách bài tập - Đọc Phần 2, Câu 21-25", source: "book", type: "fillChoice", choices: [
        { key: "A", text: "等" }, { key: "B", text: "让" }, { key: "C", text: "再" }, { key: "D", text: "事情" }, { key: "E", text: "贵" }, { key: "F", text: "找" }
      ], questions: [
        { id: "21", prompt: "我这个星期太忙了，下个星期再（ ）时间一起去看电影吧。", answer: "F" },
        { id: "22", prompt: "张老师在上课呢，他让你（ ）一会儿。", answer: "A" },
        { id: "23", prompt: "王老师（ ）我告诉你，明天 he 有事，不能来上课了。", answer: "B", explain: "Nguồn có chữ “he”; giữ nguyên câu nguồn." },
        { id: "24", prompt: "大卫今天不在家，你明天（ ）给他打电话吧。", answer: "C" },
        { id: "25", prompt: "请问，你找服务员有什么（ ）？", answer: "D" }
      ] },
      { id: "wb-judge-26-30", title: "Sách bài tập - Đọc Phần 3, Câu 26-30", source: "book", type: "trueFalse", questions: [
        { id: "26", original: "王老师让我给大卫打个电话。", prompt: "王老师给大卫打电话。", answer: "x", explain: "Sai, thầy Vương bảo tôi gọi." },
        { id: "27", original: "今天下午我没时间，明天再去看电影吧。", prompt: "今天不能去看电影。", answer: "√", explain: "Đúng." },
        { id: "28", original: "这件白的有点儿长，那件黑的有点儿贵。", prompt: "两件衣服，我都不喜欢。", answer: "x", explain: "Sai, câu gốc chỉ mô tả áo trắng hơi dài, áo đen hơi đắt." },
        { id: "29", original: "今天天气不太好，等天气好的时候再给你买自行车吧。", prompt: "外面正在下雨。", answer: "x", explain: "Sai, thời tiết không tốt không chắc là đang mưa." },
        { id: "30", original: "你看，这是我们家的猫，眼睛漂亮吧？是我姐姐送给我的。", prompt: "猫不是我家 de。", answer: "x", explain: "Sai, nguồn nói 这是我们家的猫; câu nguồn có chữ “de”." }
      ] },
      { id: "wb-match-31-35", title: "Sách bài tập - Đọc Phần 4, Câu 31-35", source: "book", type: "matchChoice", choices: [
        { key: "A", text: "这件白的有点儿长，这件黑的我也不太喜欢，我再看看吧。" }, { key: "B", text: "服务员，我想 要点儿 热水。" }, { key: "C", text: "明天要考试，考试后再去看吧。" }, { key: "D", text: "让我 想想 再 告诉你。" }, { key: "E", text: "他在哪儿呢？你看见 he/tā 了吗？（例）" }, { key: "F", text: "听说他生病了，我想去医院看看他。" }
      ], questions: [
        { id: "31", prompt: "你想看什么电影？", answer: "D" },
        { id: "32", prompt: "你找大卫有什么事情吗？", answer: "F" },
        { id: "33", prompt: "这些都是今天新来的衣服。", answer: "A" },
        { id: "34", prompt: "好的，请问您住哪个房间？", answer: "B" },
        { id: "35", prompt: "晚上去看电影，好吗？", answer: "C" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập - Nghe Phần 1, Câu 1-5", source: "book", note: "HSK2.md chỉ có mô tả hình, không có script/audio/đáp án gốc nên chưa tự chấm.", lines: ["Hình 1: Áo thun trắng và đen.", "Hình 2: Tủ quần áo.", "Hình 3: Cánh cổng sắt.", "Hình 4: Người nói thầm.", "Hình 5: Nữ nhân viên công sở."] },
      { title: "Sách bài tập - Nghe Phần 2, Câu 6-10", source: "book", note: "Thiếu script/audio/đáp án gốc.", lines: ["Hình A: Người đàn ông nghe điện thoại.", "Hình B: Tay nắm cửa có chìa khóa.", "Hình C: Sách “CHANGES AHEAD!”.", "Hình D: Nam thanh niên đá bóng (ví dụ).", "Hình E: Hai cô gái trò chuyện.", "Hình F: Người đàn ông lau mũi."] },
      { title: "Sách bài tập - Nghe Phần 3, Câu 11-15", source: "book", note: "Có lựa chọn nhưng thiếu script/audio/đáp án gốc.", lines: ["11. A 手机 | B 手表 | C 自行车", "12. A 想唱歌 | B 想看电影 | C 想看电视", "13. A 踢足球 | B 跑步 | C 打篮球", "14. A 老师 | B 医生 | C 服务员", "15. A 都不好 | B 黑的 | C 白的"] },
      { title: "Sách bài tập - Đọc Phần 1, Câu 16-20", source: "book", note: "Phần này phụ thuộc hình ảnh, project chưa có bộ hình gốc nên để tham khảo.", lines: ["16. 我今天很忙，没时间看电影。", "17. 外面天气很好，我们一起去运动运动吧。", "18. 王老师让我给张朋打个电话。", "19. 妈妈生病了，我们去医院看看她吧。", "20. 小王告诉我，这个商店的东西有点儿贵。"] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "晚上去看电影，好吗？", options: ["好。", "不远。", "一米七。"], answer: "好。", explain: "好吗 dùng để hỏi ý kiến về đề xuất.", source: "ai" },
      { type: "fill", prompt: "让我想想（ ）告诉你。", answer: "再", explain: "再 + động từ nói hành động làm sau.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Thầy Vương bảo tôi gọi điện cho Trương Bằng.", answer: "王老师让我给张朋打个电话。", explain: "让 + 我 + 给张朋打电话.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "女：你想看什么电影？\n男：让我想想再告诉你。", prompt: "男的什么时候告诉女的？", options: ["想想以后", "现在", "昨天"], answer: "想想以后", explain: "Script nói 想想再告诉你。" },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "王老师让我给张朋打个电话。", prompt: "王老师自己给张朋打电话。", options: ["√", "x"], answer: "x", explain: "Script nói 让我打电话." },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "张老师让你等一会儿。", prompt: "张老师让你（ ）一会儿。", answer: "等", explain: "Từ cần điền là 等." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：这件白的怎么样？\n男：这件白的有点儿长。", prompt: "白的怎么样？", options: ["有点儿长", "有点儿贵", "很好吃"], answer: "有点儿长", explain: "Script nói 白的有点儿长。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
