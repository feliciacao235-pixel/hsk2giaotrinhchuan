(function () {
  const lesson = {
    id: "lesson13",
    order: 13,
    type: "lesson",
    status: "ready",
    title: "门开着呢",
    viTitle: "Cửa đang mở kìa",
    scope: "Bài 13",
    sourceRange: "HSK2.md: sách giáo trình Bài 13; chưa thấy phần sách bài tập Bài 13 trong file nguồn hiện tại",
    vocabulary: [
      { hanzi: "着", pinyin: "zhe", pos: "Trợ từ", meaning: "Đang, biểu thị trạng thái tiếp diễn", example: "门开着。", examplePinyin: "Mén kāi zhe.", exampleVi: "Cửa đang mở.", source: "book", exampleSource: "book" },
      { hanzi: "手", pinyin: "shǒu", pos: "Danh từ", meaning: "Tay", example: "他手里拿着铅笔。", examplePinyin: "Tā shǒu lǐ ná zhe qiānbǐ.", exampleVi: "Trong tay anh ấy đang cầm bút chì.", source: "book", exampleSource: "ai" },
      { hanzi: "拿", pinyin: "ná", pos: "Động từ", meaning: "Cầm, lấy", example: "她拿着铅笔。", examplePinyin: "Tā ná zhe qiānbǐ.", exampleVi: "Cô ấy đang cầm bút chì.", source: "book", exampleSource: "book" },
      { hanzi: "铅笔", pinyin: "qiānbǐ", pos: "Danh từ", meaning: "Bút chì", example: "她拿着铅笔。", examplePinyin: "Tā ná zhe qiānbǐ.", exampleVi: "Cô ấy đang cầm bút chì.", source: "book", exampleSource: "book" },
      { hanzi: "班", pinyin: "bān", pos: "Danh từ", meaning: "Lớp", example: "我们班有二十个学生。", examplePinyin: "Wǒmen bān yǒu èrshí ge xuésheng.", exampleVi: "Lớp chúng tôi có 20 học sinh.", source: "book", exampleSource: "ai" },
      { hanzi: "长", pinyin: "zhǎng", pos: "Động từ", meaning: "Lớn lên, mọc", example: "孩子长得很快。", examplePinyin: "Háizi zhǎng de hěn kuài.", exampleVi: "Trẻ con lớn rất nhanh.", source: "book", exampleSource: "ai" },
      { hanzi: "笑", pinyin: "xiào", pos: "Động từ", meaning: "Cười", example: "她笑着说话。", examplePinyin: "Tā xiào zhe shuōhuà.", exampleVi: "Cô ấy cười nói chuyện.", source: "book", exampleSource: "ai" },
      { hanzi: "宾馆", pinyin: "bīnguǎn", pos: "Danh từ", meaning: "Khách sạn", example: "宾馆在前面的路口。", examplePinyin: "Bīnguǎn zài qiánmiàn de lùkǒu.", exampleVi: "Khách sạn ở giao lộ phía trước.", source: "book", exampleSource: "ai" },
      { hanzi: "一直", pinyin: "yīzhí", pos: "Phó từ", meaning: "Luôn luôn, thẳng một mạch", example: "从这儿一直往前走。", examplePinyin: "Cóng zhèr yìzhí wǎng qián zǒu.", exampleVi: "Từ đây cứ đi thẳng về phía trước.", source: "book", exampleSource: "book" },
      { hanzi: "往", pinyin: "wǎng", pos: "Giới từ", meaning: "Về phía, hướng về", example: "往左走是医院，往右走是银行。", examplePinyin: "Wǎng zuǒ zǒu shì yīyuàn, wǎng yòu zǒu shì yínháng.", exampleVi: "Đi sang trái là bệnh viện, đi sang phải là ngân hàng.", source: "book", exampleSource: "book" },
      { hanzi: "路口", pinyin: "lùkǒu", pos: "Danh từ", meaning: "Ngã tư, giao lộ", example: "到了前面的路口再往右走。", examplePinyin: "Dào le qiánmiàn de lùkǒu zài wǎng yòu zǒu.", exampleVi: "Đến giao lộ phía trước rồi rẽ phải.", source: "book", exampleSource: "book" },
      { hanzi: "杨笑笑", pinyin: "Yáng Xiàoxiào", pos: "Tên riêng", meaning: "Dương Tiếu Tiếu", example: "她叫杨笑笑。", examplePinyin: "Tā jiào Yáng Xiàoxiào.", exampleVi: "Cô ấy tên là Dương Tiếu Tiếu.", source: "book", exampleSource: "ai", includeInGames: false }
    ],
    grammar: [
      { id: "g1", title: "Trợ từ 着", structure: "Động từ + 着", explanation: "Biểu thị trạng thái đang duy trì sau hành động.", examples: [
        { zh: "门开着。", pinyin: "Mén kāi zhe.", vi: "Cửa đang mở." },
        { zh: "他们穿着红色的衣服。", pinyin: "Tāmen chuān zhe hóngsè de yīfu.", vi: "Họ đang mặc quần áo màu đỏ." },
        { zh: "她拿着铅笔。", pinyin: "Tā ná zhe qiānbǐ.", vi: "Cô ấy đang cầm bút chì." }
      ], source: "book" },
      { id: "g2", title: "不是……吗？", structure: "不是 + câu/ý đã biết + 吗？", explanation: "Dùng để nhắc lại, hỏi vặn nhẹ hoặc thể hiện điều người nói nghĩ là đúng.", examples: [
        { zh: "不是说今天有雨吗？怎么没下？", pinyin: "Bú shì shuō jīntiān yǒu yǔ ma? Zěnme méi xià?", vi: "Không phải nói hôm nay có mưa à? Sao không mưa?" },
        { zh: "你不是北京人吗？怎么不会说北京话？", pinyin: "Nǐ bú shì Běijīng rén ma? Zěnme bú huì shuō Běijīng huà?", vi: "Bạn không phải người Bắc Kinh à? Sao không biết nói tiếng Bắc Kinh?" }
      ], source: "book" },
      { id: "g3", title: "Giới từ 往", structure: "往 + hướng/nơi chốn + động từ", explanation: "Chỉ hướng di chuyển hoặc hướng của hành động.", examples: [
        { zh: "从这儿往前走，就是我们学校。", pinyin: "Cóng zhèr wǎng qián zǒu, jiù shì wǒmen xuéxiào.", vi: "Từ đây đi về phía trước là trường chúng tôi." },
        { zh: "往左走是医院，往右走是银行。", pinyin: "Wǎng zuǒ zǒu shì yīyuàn, wǎng yòu zǒu shì yínháng.", vi: "Đi sang trái là bệnh viện, đi sang phải là ngân hàng." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "门开（ ）呢。", answer: "着", hint: "trạng thái tiếp diễn", source: "book" },
        { prompt: "她拿着（ ）。", answer: "铅笔", hint: "bút chì", source: "book" },
        { prompt: "从这儿一直（ ）前走。", answer: "往", hint: "về phía", source: "book" },
        { prompt: "到了前面的（ ）再往右走。", answer: "路口", hint: "giao lộ", source: "book" }
      ],
      listeningChoice: [
        { script: "铅笔", prompt: "Nghe và chọn từ đúng", answer: "铅笔", options: ["铅笔", "宾馆", "路口", "手"], source: "ai" },
        { script: "往前走", prompt: "Nghe và chọn từ đúng", answer: "往前走", options: ["往前走", "拿着", "开着", "笑着"], source: "ai" },
        { script: "宾馆", prompt: "Nghe và chọn từ đúng", answer: "宾馆", options: ["宾馆", "班", "路口", "一直"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "fill", prompt: "门开（ ）。", answer: "着", explain: "开着 nói trạng thái cửa đang mở.", source: "book", grammarId: "g1" },
      { type: "choice", prompt: "Chọn câu đúng.", options: ["她拿着铅笔。", "她拿铅笔着。", "她着拿铅笔。"], answer: "她拿着铅笔。", explain: "着 đứng sau động từ 拿.", source: "book", grammarId: "g1" },
      { type: "choice", prompt: "Chọn câu nhắc lại bằng 不是...吗 đúng.", options: ["你不是北京人吗？", "你不是吗北京人？", "不是你吗北京人？"], answer: "你不是北京人吗？", explain: "不是 đặt trước nội dung nhắc lại.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "（ ）说今天有雨吗？", answer: "不是", explain: "不是...吗 dùng để nhắc lại thông tin đã nghe.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "从这儿一直（ ）前走。", answer: "往", explain: "往前走 = đi về phía trước.", source: "book", grammarId: "g3" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["往", "右", "走", "是", "银行"], answer: "往右走是银行", explain: "往 + hướng + 走.", source: "book", grammarId: "g3" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Khách sạn” là từ nào?", options: ["宾馆", "路口", "班", "手"], answer: "宾馆", source: "book" },
      { type: "fill", prompt: "她拿（ ）铅笔。", answer: "着", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["从这儿", "一直", "往前", "走"], answer: "从这儿一直往前走", source: "book" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Cửa đang mở.", answer: "门开着。", source: "book" }
    ],
    workbook: [
      { id: "ai-fill-1-5", title: "Bài tập tự chấm bổ sung - Điền từ", source: "ai", type: "fillChoice", choices: [
        { key: "A", text: "着" }, { key: "B", text: "拿" }, { key: "C", text: "铅笔" }, { key: "D", text: "往" }, { key: "E", text: "路口" }, { key: "F", text: "宾馆" }
      ], questions: [
        { id: "1", prompt: "门开（ ）呢。", answer: "A" },
        { id: "2", prompt: "她（ ）着铅笔。", answer: "B" },
        { id: "3", prompt: "从这儿一直（ ）前走。", answer: "D" },
        { id: "4", prompt: "到了前面的（ ）再往右走。", answer: "E" },
        { id: "5", prompt: "这个（ ）不太远。", answer: "F" }
      ] },
      { id: "ai-judge-6-10", title: "Bài tập tự chấm bổ sung - Đúng/Sai", source: "ai", type: "trueFalse", questions: [
        { id: "6", original: "门开着。", prompt: "门没有关。", answer: "√" },
        { id: "7", original: "她拿着铅笔。", prompt: "她手里有铅笔。", answer: "√" },
        { id: "8", original: "往左走是医院。", prompt: "医院在右边。", answer: "x" },
        { id: "9", original: "不是说今天有雨吗？怎么没下？", prompt: "今天一定下雨了。", answer: "x" },
        { id: "10", original: "从这儿一直往前走，就是我们学校。", prompt: "学校在前面。", answer: "√" }
      ] },
      { id: "ai-mix-11-15", title: "Bài tập tự chấm bổ sung - Tổng hợp", source: "ai", type: "matchChoice", choices: [
        { key: "A", text: "门开着。" }, { key: "B", text: "她拿着铅笔。" }, { key: "C", text: "从这儿一直往前走。" }, { key: "D", text: "往右走是银行。" }, { key: "E", text: "你不是北京人吗？" }
      ], questions: [
        { id: "11", prompt: "Cửa đang mở.", answer: "A" },
        { id: "12", prompt: "Cô ấy đang cầm bút chì.", answer: "B" },
        { id: "13", prompt: "Từ đây cứ đi thẳng.", answer: "C" },
        { id: "14", prompt: "Đi sang phải là ngân hàng.", answer: "D" },
        { id: "15", prompt: "Bạn không phải người Bắc Kinh à?", answer: "E" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập Bài 13", source: "book", note: "Trong HSK2.md hiện tại chưa có phần sách bài tập Bài 13 đầy đủ, nên không tạo đáp án sách hoặc bài nghe sách tự chấm.", lines: ["Chỉ dữ liệu giáo trình Bài 13 được dùng làm nội dung sách.", "Các bài tự chấm trong mục này đều gắn nhãn AI bổ sung."] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "Chọn câu đúng.", options: ["门开着。", "门着开。", "着门开。"], answer: "门开着。", explain: "着 đứng sau động từ.", source: "ai" },
      { type: "fill", prompt: "一直（ ）前走。", answer: "往", explain: "往前走 = đi về phía trước.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Cô ấy đang cầm bút chì.", answer: "她拿着铅笔。", explain: "拿着 nói trạng thái đang cầm.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "门开着呢。", prompt: "门怎么样？", options: ["开着", "关着", "很远"], answer: "开着", explain: "Script nói 开着." },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "她拿着铅笔。", prompt: "她没有铅笔。", options: ["√", "x"], answer: "x", explain: "Script nói đang cầm bút chì." },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "从这儿一直往前走。", prompt: "从这儿一直（ ）前走。", answer: "往", explain: "Từ nghe được là 往." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：请问，宾馆怎么走？\n男：一直往前走，到了路口再往右走。", prompt: "到了路口要怎么走？", options: ["往右走", "往左走", "回家"], answer: "往右走", explain: "Script nói 到了路口再往右走。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
