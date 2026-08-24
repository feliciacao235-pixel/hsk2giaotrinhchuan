/**
 * Data Schema for HSK2 Standard Course - Lesson 02
 * Source: HSK2.md, existing migrated notes, workbook audio and official answer key.
 */

const lesson02Data = {
  lessonInfo: {
    id: 2,
    titleZH: "我每天六点起床",
    titleVI: "Hàng ngày tôi thức dậy lúc 6 giờ",
    audioMain: "audio/workbook/lesson-02-workbook-audio-1.mp3",
    audioPronunciation: "audio/workbook/lesson-02-workbook-audio-2.mp3"
  },

  vocabulary: [
    { id: 1, hanzi: "生病", pinyin: "shēngbìng", wordType: "Động từ", meaning: "Bị bệnh, bị ốm", exampleZH: "我的小猫生病了。", examplePinyin: "Wǒ de xiǎomāo shēngbìng le.", exampleVI: "Con mèo của tôi bị ốm rồi." },
    { id: 2, hanzi: "每", pinyin: "měi", wordType: "Đại từ", meaning: "Mỗi", exampleZH: "我每天六点起床。", examplePinyin: "Wǒ měi tiān liù diǎn qǐchuáng.", exampleVI: "Hàng ngày tôi thức dậy lúc 6 giờ." },
    { id: 3, hanzi: "早上", pinyin: "zǎoshang", wordType: "Danh từ", meaning: "Buổi sáng", exampleZH: "妈妈每天早上七点前起床。", examplePinyin: "Māma měi tiān zǎoshang qī diǎn qián qǐchuáng.", exampleVI: "Mẹ mỗi sáng thức dậy trước bảy giờ." },
    { id: 4, hanzi: "跑步", pinyin: "pǎobù", wordType: "Động từ", meaning: "Chạy bộ", exampleZH: "我每天下午和同学一起去跑步。", examplePinyin: "Wǒ měi tiān xiàwǔ hé tóngxué yìqǐ qù pǎobù.", exampleVI: "Mỗi buổi chiều tôi cùng bạn học đi chạy bộ." },
    { id: 5, hanzi: "起床", pinyin: "qǐchuáng", wordType: "Động từ", meaning: "Thức dậy", exampleZH: "我每天六点起床。", examplePinyin: "Wǒ měi tiān liù diǎn qǐchuáng.", exampleVI: "Hàng ngày tôi thức dậy lúc 6 giờ." },
    { id: 6, hanzi: "药", pinyin: "yào", wordType: "Danh từ", meaning: "Thuốc", exampleZH: "这是一个星期的药，每天早上吃。", examplePinyin: "Zhè shì yí ge xīngqī de yào, měi tiān zǎoshang chī.", exampleVI: "Đây là thuốc của một tuần, mỗi sáng đều uống." },
    { id: 7, hanzi: "身体", pinyin: "shēntǐ", wordType: "Danh từ", meaning: "Sức khỏe, cơ thể", exampleZH: "我的身体好多了。", examplePinyin: "Wǒ de shēntǐ hǎo duō le.", exampleVI: "Sức khỏe của tôi đỡ nhiều rồi." },
    { id: 8, hanzi: "出院", pinyin: "chūyuàn", wordType: "Động từ", meaning: "Xuất viện", exampleZH: "明天能出院。", examplePinyin: "Míngtiān néng chūyuàn.", exampleVI: "Ngày mai có thể xuất viện." },
    { id: 9, hanzi: "出", pinyin: "chū", wordType: "Động từ", meaning: "Ra, đi ra", exampleZH: "下午四点出去买东西了。", examplePinyin: "Xiàwǔ sì diǎn chūqù mǎi dōngxi le.", exampleVI: "Bốn giờ chiều ra ngoài mua đồ rồi." },
    { id: 10, hanzi: "高", pinyin: "gāo", wordType: "Tính từ", meaning: "Cao", exampleZH: "他多高？", examplePinyin: "Tā duō gāo?", exampleVI: "Anh ấy cao bao nhiêu?" },
    { id: 11, hanzi: "米", pinyin: "mǐ", wordType: "Lượng từ", meaning: "Mét", exampleZH: "他儿子一米七。", examplePinyin: "Tā érzi yì mǐ qī.", exampleVI: "Con trai ông ấy cao một mét bảy." },
    { id: 12, hanzi: "知道", pinyin: "zhīdào", wordType: "Động từ", meaning: "Biết", exampleZH: "我也不知道北京的天气。", examplePinyin: "Wǒ yě bù zhīdào Běijīng de tiānqì.", exampleVI: "Tôi cũng không biết thời tiết Bắc Kinh thế nào." },
    { id: 13, hanzi: "休息", pinyin: "xiūxi", wordType: "Động từ", meaning: "Nghỉ ngơi", exampleZH: "星期六也不休息。", examplePinyin: "Xīngqīliù yě bù xiūxi.", exampleVI: "Thứ bảy cũng không nghỉ ngơi." },
    { id: 14, hanzi: "忙", pinyin: "máng", wordType: "Tính từ", meaning: "Bận", exampleZH: "爸爸每天工作很忙。", examplePinyin: "Bàba měi tiān gōngzuò hěn máng.", exampleVI: "Bố mỗi ngày công việc rất bận." },
    { id: 15, hanzi: "时间", pinyin: "shíjiān", wordType: "Danh từ", meaning: "Thời gian", exampleZH: "我没时间去看电影。", examplePinyin: "Wǒ méi shíjiān qù kàn diànyǐng.", exampleVI: "Tôi không có thời gian đi xem phim." }
  ],

  grammar: [
    {
      id: 1,
      name: "Câu hỏi \"是不是\"",
      formula: "Chủ ngữ + 是不是 + vị ngữ? / 是不是 + mệnh đề? / Mệnh đề, 是不是?",
      explanation: "Dùng để xác nhận lại điều người nói đang phỏng đoán là đúng hay không.",
      negativeForm: null,
      examples: [
        { zh: "你很少生病，是不是喜欢运动？", pinyin: "Nǐ hěn shǎo shēngbìng, shì bu shì xǐhuan yùndòng?", vi: "Bạn ít khi bị bệnh, có phải là thích thể thao không?" },
        { zh: "是不是明天爸爸休息？", pinyin: "Shì bu shì míngtiān bàba xiūxi?", vi: "Có phải ngày mai bố được nghỉ không?" },
        { zh: "我们星期一去北京，是不是？", pinyin: "Wǒmen xīngqīyī qù Běijīng, shì bu shì?", vi: "Chúng ta thứ Hai đi Bắc Kinh, có phải không?" }
      ],
      quickQuiz: {
        question: "Chọn câu dùng \"是不是\" đúng.",
        options: ["A. 你是不是喜欢运动？", "B. 你喜欢是不是运动？", "C. 是不是你吗喜欢运动？", "D. 你运动是不是喜欢？"],
        answer: "A",
        explanation: "\"是不是\" có thể đứng trước vị ngữ để xác nhận lại thông tin."
      }
    },
    {
      id: 2,
      name: "Đại từ \"每\"",
      formula: "每 + lượng từ / danh từ thời gian + 都 + hành động hoặc tính chất",
      explanation: "Dùng để nói mỗi/từng cá thể trong một nhóm. Trong câu thường có \"都\" để nhấn mạnh tính toàn bộ.",
      negativeForm: null,
      examples: [
        { zh: "山姆每年都去中国旅游。", pinyin: "Shānmǔ měi nián dōu qù Zhōngguó lǚyóu.", vi: "Sam năm nào cũng đi Trung Quốc du lịch." },
        { zh: "你每个星期六都工作吗？", pinyin: "Nǐ měi ge xīngqīliù dōu gōngzuò ma?", vi: "Thứ bảy tuần nào bạn cũng làm việc à?" },
        { zh: "我每天六点起床。", pinyin: "Wǒ měi tiān liù diǎn qǐchuáng.", vi: "Hàng ngày tôi thức dậy lúc 6 giờ." }
      ],
      quickQuiz: {
        question: "Điền từ thích hợp: 我（ ）天六点起床。",
        options: ["A. 每", "B. 最", "C. 也", "D. 几"],
        answer: "A",
        explanation: "\"每天\" nghĩa là mỗi ngày/hàng ngày."
      }
    },
    {
      id: 3,
      name: "Câu hỏi \"多 + tính từ\"",
      formula: "Chủ ngữ + 多 + tính từ?",
      explanation: "Dùng \"多\" trước tính từ như 大, 高 để hỏi mức độ; câu trả lời thường là con số cụ thể.",
      negativeForm: null,
      examples: [
        { zh: "你多大？", pinyin: "Nǐ duō dà?", vi: "Bạn bao nhiêu tuổi?" },
        { zh: "王医生的儿子多高？", pinyin: "Wáng yīshēng de érzi duō gāo?", vi: "Con trai bác sĩ Vương cao bao nhiêu?" },
        { zh: "他多高？一米八几。", pinyin: "Tā duō gāo? Yì mǐ bā jǐ.", vi: "Anh ấy cao bao nhiêu? Hơn một mét tám." }
      ],
      quickQuiz: {
        question: "Chọn câu hỏi đúng để hỏi chiều cao.",
        options: ["A. 他多高？", "B. 他多少高？", "C. 他高多？", "D. 他几高？"],
        answer: "A",
        explanation: "Khi hỏi chiều cao, dùng \"多\" đứng trước tính từ \"高\"."
      }
    }
  ],

  vocabularyGames: {
    quizQuestions: [
      { id: "g1", type: "hanzi-to-meaning", prompt: "生病", options: ["Bị bệnh", "Nghỉ ngơi", "Thức dậy", "Chạy bộ"], answer: "Bị bệnh", pinyin: "shēngbìng" },
      { id: "g2", type: "hanzi-to-meaning", prompt: "起床", options: ["Thức dậy", "Xuất viện", "Biết", "Bận"], answer: "Thức dậy", pinyin: "qǐchuáng" },
      { id: "g3", type: "meaning-to-hanzi", prompt: "Buổi sáng", options: ["早上", "时间", "身体", "药"], answer: "早上", pinyin: "zǎoshang" },
      { id: "g4", type: "meaning-to-hanzi", prompt: "Chạy bộ", options: ["跑步", "踢足球", "休息", "出院"], answer: "跑步", pinyin: "pǎobù" },
      { id: "g5", type: "hanzi-to-pinyin", prompt: "身体", options: ["shēntǐ", "shíjiān", "shēngbìng", "zhīdào"], answer: "shēntǐ", meaning: "Sức khỏe, cơ thể" },
      { id: "g6", type: "hanzi-to-pinyin", prompt: "知道", options: ["zhīdào", "chūyuàn", "qǐchuáng", "xiūxi"], answer: "zhīdào", meaning: "Biết" },
      { id: "g7", type: "fill-blank", prompt: "我每天六点（ ）。", options: ["起床", "生病", "知道", "高"], answer: "起床", translation: "Hàng ngày tôi thức dậy lúc 6 giờ." },
      { id: "g8", type: "fill-blank", prompt: "我每天下午和同学一起去（ ）。", options: ["跑步", "药", "出院", "时间"], answer: "跑步", translation: "Mỗi buổi chiều tôi cùng bạn học đi chạy bộ." },
      { id: "g9", type: "fill-blank", prompt: "对不起，我很（ ），没时间去看电影。", options: ["忙", "高", "早上", "身体"], answer: "忙", translation: "Xin lỗi, tôi rất bận, không có thời gian đi xem phim." },
      { id: "g10", type: "sentence-scramble", prompt: "Sắp xếp từ thành câu hoàn chỉnh:", words: ["我", "每天", "六点", "起床"], answer: "我每天六点起床", translation: "Hàng ngày tôi thức dậy lúc 6 giờ." },
      { id: "g11", type: "sentence-scramble", prompt: "Sắp xếp từ thành câu hoàn chỉnh:", words: ["他", "多", "高"], answer: "他多高", translation: "Anh ấy cao bao nhiêu?" },
      { id: "g12", type: "sentence-scramble", prompt: "Sắp xếp từ thành câu hoàn chỉnh:", words: ["爸爸", "每天", "工作", "很忙"], answer: "爸爸每天工作很忙", translation: "Bố mỗi ngày công việc rất bận." }
    ],
    matchingPairs: [
      { id: "m1", zh: "生病", pinyin: "shēngbìng", vi: "Bị bệnh" },
      { id: "m2", zh: "起床", pinyin: "qǐchuáng", vi: "Thức dậy" },
      { id: "m3", zh: "跑步", pinyin: "pǎobù", vi: "Chạy bộ" },
      { id: "m4", zh: "身体", pinyin: "shēntǐ", vi: "Sức khỏe, cơ thể" },
      { id: "m5", zh: "知道", pinyin: "zhīdào", vi: "Biết" },
      { id: "m6", zh: "休息", pinyin: "xiūxi", vi: "Nghỉ ngơi" }
    ]
  },

  workbookExercises: {
    audioFile: "audio/workbook/lesson-02-workbook-audio-1.mp3",

    listeningPart1: {
      type: "listening-true-false-image",
      sourceStatus: "official-workbook",
      sourceNote: "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 17.",
      questions: [
        { id: 1, image: "images/workbook/lesson02/listening-part1/q01.png", imageSource: "official-workbook", answer: true },
        { id: 2, image: "images/workbook/lesson02/listening-part1/q02.png", imageSource: "official-workbook", answer: false },
        { id: 3, image: "images/workbook/lesson02/listening-part1/q03.png", imageSource: "official-workbook", answer: true },
        { id: 4, image: "images/workbook/lesson02/listening-part1/q04.png", imageSource: "official-workbook", answer: true },
        { id: 5, image: "images/workbook/lesson02/listening-part1/q05.png", imageSource: "official-workbook", answer: true }
      ]
    },

    imageReference: [
      { key: "A", desc: "Bé gái đang đo chiều cao cạnh thước đo trên tường" },
      { key: "B", desc: "Bác sĩ đang đưa thuốc và dặn dò bệnh nhân" },
      { key: "C", desc: "Cô gái đang đứng tìm và đọc sách trong thư viện" },
      { key: "D", desc: "Một người đang đá bóng (hình ví dụ trong sách)" },
      { key: "E", desc: "Cô gái đeo túi xách chuẩn bị đi ra ngoài" },
      { key: "F", desc: "Ông cụ đang đi bộ tập thể dục ngoài trời" }
    ],

    imageSets: {
      listeningPart2: {
        sourceStatus: "official-workbook",
        sourceNote: "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 18.",
        images: [
          { id: "A", src: "images/workbook/lesson02/listening-part2/a.png", imageSource: "official-workbook" },
          { id: "B", src: "images/workbook/lesson02/listening-part2/b.png", imageSource: "official-workbook" },
          { id: "C", src: "images/workbook/lesson02/listening-part2/c.png", imageSource: "official-workbook" },
          { id: "D", src: "images/workbook/lesson02/listening-part2/d.png", imageSource: "official-workbook" },
          { id: "E", src: "images/workbook/lesson02/listening-part2/e.png", imageSource: "official-workbook" },
          { id: "F", src: "images/workbook/lesson02/listening-part2/f.png", imageSource: "official-workbook" }
        ]
      },
      readingPart1: {
        sourceStatus: "official-workbook",
        sourceNote: "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 20.",
        images: [
          { id: "A", src: "images/workbook/lesson02/reading-part1/a.png", imageSource: "official-workbook" },
          { id: "B", src: "images/workbook/lesson02/reading-part1/b.png", imageSource: "official-workbook" },
          { id: "C", src: "images/workbook/lesson02/reading-part1/c.png", imageSource: "official-workbook" },
          { id: "D", src: "images/workbook/lesson02/reading-part1/d.png", imageSource: "official-workbook" },
          { id: "E", src: "images/workbook/lesson02/reading-part1/e.png", imageSource: "official-workbook" },
          { id: "F", src: "images/workbook/lesson02/reading-part1/f.png", imageSource: "official-workbook" }
        ]
      }
    },

    listeningPart2: [
      { id: 6, question: "Câu 6", answer: "F" },
      { id: 7, question: "Câu 7", answer: "E" },
      { id: 8, question: "Câu 8", answer: "C" },
      { id: 9, question: "Câu 9", answer: "A" },
      { id: 10, question: "Câu 10", answer: "B" }
    ],

    listeningPart3: [
      { id: 11, question: "Câu 11: 明天能不能出院？", options: ["A. 能", "B. 不能", "C. 不知道"], answer: "B" },
      { id: 12, question: "Câu 12: 男的每天几点起床？", options: ["A. 六点多", "B. 七点多", "C. 十点多"], answer: "C" },
      { id: 13, question: "Câu 13: 男的累不累？", options: ["A. 不累", "B. 很累", "C. 累"], answer: "A" },
      { id: 14, question: "Câu 14: 女的的弟弟在做什么？", options: ["A. 工作了", "B. 在学习", "C. 在找工作"], answer: "A" },
      { id: 15, question: "Câu 15: 男的怎么了？", options: ["A. 去医院了", "B. 病了", "C. 身体好多了"], answer: "B" }
    ],

    readingPart1: [
      { id: 16, text: "麦克先生最不喜欢住院。", vi: "Ông Mike không thích nằm viện nhất.", options: ["A", "B", "C", "D", "E", "F"], answer: "F" },
      { id: 17, text: "爸爸每天工作很忙，星期六也不休息。", vi: "Bố mỗi ngày làm việc rất bận, thứ bảy cũng không nghỉ.", options: ["A", "B", "C", "D", "E", "F"], answer: "C" },
      { id: 18, text: "我每天下午和同学一起去跑步。", vi: "Mỗi buổi chiều tôi cùng bạn học đi chạy bộ.", options: ["A", "B", "C", "D", "E", "F"], answer: "B" },
      { id: 19, text: "这是一个星期的药，每天早上吃。", vi: "Đây là thuốc của một tuần, mỗi sáng đều uống.", options: ["A", "B", "C", "D", "E", "F"], answer: "E" },
      { id: 20, text: "妈妈每天早上七点前起床。", vi: "Mẹ mỗi sáng thức dậy trước bảy giờ.", options: ["A", "B", "C", "D", "E", "F"], answer: "A" }
    ],

    readingPart2: {
      options: [
        { key: "A", word: "出去" },
        { key: "B", word: "每" },
        { key: "C", word: "忙" },
        { key: "D", word: "知道" },
        { key: "E", word: "贵" },
        { key: "F", word: "生病" }
      ],
      questions: [
        { id: 21, text: "我们（ ）个星期六都工作。", vi: "Chúng tôi ___ thứ bảy đều làm việc.", answer: "B" },
        { id: 22, text: "对不起，我很（ ），没时间去看电影。", vi: "Xin lỗi, tôi rất ___, không có thời gian đi xem phim.", answer: "C" },
        { id: 23, text: "他不在家，下午四点（ ）买东西了。", vi: "Anh ấy không ở nhà, bốn giờ chiều ___ mua đồ rồi.", answer: "A" },
        { id: 24, text: "我的小猫不想吃东西，我觉得它（ ）了。", vi: "Con mèo của tôi không muốn ăn gì, tôi nghĩ nó ___ rồi.", answer: "F" },
        { id: 25, text: "我也不（ ）北京的天气，你问问小李，他是北京人。", vi: "Tôi cũng không ___ thời tiết Bắc Kinh thế nào.", answer: "D" }
      ]
    },

    readingPart3: [
      { id: 26, text: "医生说我要住两天院，明天能出院。", statement: "我今天不能出院。", vi: "Bác sĩ nói tôi phải nằm viện hai ngày, ngày mai có thể xuất viện.", answer: true, explanation: "Đúng, vì ngày mai mới được xuất viện." },
      { id: 27, text: "我的小猫生病了，你知道去哪个医院好吗？", statement: "我的小猫现在好多了。", vi: "Con mèo của tôi bị ốm rồi, bạn biết nên đến bệnh viện nào không?", answer: false, explanation: "Sai, vì con mèo hiện tại đang bị ốm." },
      { id: 28, text: "你星期天也去学校吗？太忙了！", statement: "他星期天不休息。", vi: "Chủ nhật bạn cũng đến trường à? Bận quá!", answer: true, explanation: "Đúng, chủ nhật cũng đến trường nghĩa là không nghỉ." },
      { id: 29, text: "这个药每天中午吃，晚饭后不要吃。", statement: "每天晚饭后吃药。", vi: "Thuốc này uống vào buổi trưa mỗi ngày, sau bữa tối thì không uống.", answer: false, explanation: "Sai, thuốc uống buổi trưa, không uống sau bữa tối." },
      { id: 30, text: "我儿子不太高，他今年十四岁，一米五几。", statement: "他儿子今年十多岁。", vi: "Con trai tôi không cao lắm, năm nay 14 tuổi, cao hơn 1m50.", answer: true, explanation: "Đúng, 14 tuổi là mười mấy tuổi." }
    ],

    readingPart4: {
      options: [
        { key: "A", text: "他儿子今年八岁了。" },
        { key: "B", text: "星期六也不休息，你工作累不累？" },
        { key: "C", text: "我不喜欢早上运动，我喜欢下午和朋友一起踢足球。" },
        { key: "D", text: "医生说他不能出院。" },
        { key: "F", text: "你每天什么时候睡觉？" }
      ],
      questions: [
        { id: 31, text: "什么？已经三天了，为什么？", answer: "D" },
        { id: 32, text: "我也不喜欢，我早上没时间。", answer: "C" },
        { id: 33, text: "是啊，已经一米四了。", answer: "A" },
        { id: 34, text: "没关系，星期天我有不少时间休息。", answer: "B" },
        { id: 35, text: "九点多吧，很早。我早上起床也很早。", answer: "F" }
      ]
    }
  }
};

if (typeof window !== "undefined") {
  window.lesson02Data = lesson02Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = lesson02Data;
}
