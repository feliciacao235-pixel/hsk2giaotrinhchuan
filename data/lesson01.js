/**
 * Data Schema for HSK2 Standard Course - Lesson 01
 * Source: Giáo trình Chuẩn HSK 2 & Sách Bài Tập HSK 2 (Official Answer Key Verified)
 */

const lesson01Data = {
  lessonInfo: {
    id: 1,
    titleZH: "九月去北京旅游最好",
    titleVI: "Nên đi Bắc Kinh để du lịch thì tốt nhất là đi vào tháng chín",
    audioMain: "audio/lesson01/01-1.mp3",
    audioPronunciation: "audio/lesson01/01-2.mp3"
  },

  // 1. TỪ MỚI (生词)
  vocabulary: [
    { id: 1, hanzi: "旅游", pinyin: "lǚyóu", wordType: "Động từ", meaning: "Du lịch", exampleZH: "九月去北京旅游最好。", examplePinyin: "Jiǔ yuè qù Běijīng lǚyóu zuì hǎo.", exampleVI: "Tháng chín đi Bắc Kinh du lịch là tốt nhất." },
    { id: 2, hanzi: "觉得", pinyin: "juéde", wordType: "Động từ", meaning: "Cho rằng, nghĩ rằng, thấy", exampleZH: "我觉得听和说还可以。", examplePinyin: "Wǒ juéde tīng hé shuō hái kěyǐ.", exampleVI: "Tôi thấy nghe và nói thì tạm được." },
    { id: 3, hanzi: "最", pinyin: "zuì", wordType: "Phó từ", meaning: "Nhất", exampleZH: "大卫的汉语最好。", examplePinyin: "Dàwèi de Hànyǔ zuì hǎo.", exampleVI: "Tiếng Trung của David tốt nhất." },
    { id: 4, hanzi: "为什么", pinyin: "wèi shénme", wordType: "Phó từ / Đại từ", meaning: "Tại sao", exampleZH: "你为什么不开车去学校？", examplePinyin: "Nǐ wèi shénme bù kāichē qù xuéxiào?", exampleVI: "Tại sao bạn không lái xe đến trường?" },
    { id: 5, hanzi: "也", pinyin: "yě", wordType: "Phó từ", meaning: "Cũng", exampleZH: "大卫的小猫也两岁多了。", examplePinyin: "Dàwèi de xiǎomāo yě liǎng suì duō le.", exampleVI: "Con mèo của David cũng hơn hai tuổi rồi." },
    { id: 6, hanzi: "运动", pinyin: "yùndòng", wordType: "Danh từ / Động từ", meaning: "Thể thao, vận động", exampleZH: "你很少生病，是不是喜欢运动？", examplePinyin: "Nǐ hěn shǎo shēngbìng, shì bu shì xǐhuan yùndòng?", exampleVI: "Bạn ít khi bị bệnh, có phải là thích thể thao không?" },
    { id: 7, hanzi: "踢足球", pinyin: "tī zúqiú", wordType: "Cụm động từ", meaning: "Đá bóng", exampleZH: "星期六我们一起去踢足球吧。", examplePinyin: "Xīngqīliù wǒmen yīqǐ qù tī zúqiú ba.", exampleVI: "Thứ bảy chúng mình cùng đi đá bóng nhé." },
    { id: 8, hanzi: "一起", pinyin: "yīqǐ", wordType: "Phó từ", meaning: "Cùng nhau, cùng", exampleZH: "我们一起做中国菜吧。", examplePinyin: "Wǒmen yīqǐ zuò Zhōngguó cài ba.", exampleVI: "Chúng mình cùng làm món ăn Trung Quốc nhé." },
    { id: 9, hanzi: "要", pinyin: "yào", wordType: "Trợ động từ", meaning: "Muốn, cần", exampleZH: "我要买几个新椅子。", examplePinyin: "Wǒ yào mǎi jǐ ge xīn yǐzi.", exampleVI: "Tôi muốn mua vài chiếc ghế mới." },
    { id: 10, hanzi: "新", pinyin: "xīn", wordType: "Tính từ", meaning: "Mới", exampleZH: "桌子上有一本新书。", examplePinyin: "Zhuōzi shang yǒu yì běn xīn shū.", exampleVI: "Trên bàn có một quyển sách mới." },
    { id: 11, hanzi: "它", pinyin: "tā", wordType: "Đại từ", meaning: "Nó (chỉ đồ vật, con vật)", exampleZH: "它的眼睛最漂亮。", examplePinyin: "Tā de yǎnjing zuì piàoliang.", exampleVI: "Mắt của nó đẹp nhất." },
    { id: 12, hanzi: "眼睛", pinyin: "yǎnjing", wordType: "Danh từ", meaning: "Mắt", exampleZH: "小猫的眼睛很大。", examplePinyin: "Xiǎomāo de yǎnjing hěn dà.", exampleVI: "Mắt mèo con rất to." },
    { id: 13, hanzi: "花花", pinyin: "Huāhua", wordType: "Danh từ riêng", meaning: "Hoa Hoa (tên riêng một chú mèo)", exampleZH: "花花是我的小猫。", examplePinyin: "Huāhua shì wǒ de xiǎomāo.", exampleVI: "Hoa Hoa là con mèo của tôi." }
  ],

  // 2. NGỮ PHÁP (语法)
  grammar: [
    {
      id: 1,
      name: "Trợ động từ \"要\" (yào)",
      formula: "Chủ ngữ + 要 + Động từ (+ Tân ngữ)",
      explanation: "Được đặt trước động từ để biểu thị ý muốn, dự định hoặc nhu cầu cần thực hiện một hành động nào đó.",
      negativeForm: "Ở dạng phủ định, người ta thường dùng \"不想\" (không muốn) hoặc \"不愿意\" (không bằng lòng) chứ không dùng \"不要\" (vì 不要 mang nghĩa khuyên ngăn, cấm đoán: 'đừng...').",
      examples: [
        { zh: "王方要学习英语。", pinyin: "Wáng Fāng yào xuéxí Yīngyǔ.", vi: "Vương Phương muốn học tiếng Anh." },
        { zh: "我要吃米饭。", pinyin: "Wǒ yào chī mǐfàn.", vi: "Tôi muốn ăn cơm." },
        { zh: "我们要不要买几个新的椅子？", pinyin: "Wǒmen yào bu yào mǎi jǐ ge xīn de yǐzi?", vi: "Chúng ta có muốn mua vài chiếc ghế mới không?" },
        { zh: "小王要去，我不想去。", pinyin: "Xiǎo Wáng yào qù, wǒ bù xiǎng qù.", vi: "Tiểu Vương muốn đi, còn tôi không muốn đi." }
      ],
      quickQuiz: {
        question: "Chọn câu phủ định đúng của: \"我要去买桌子。\"",
        options: [
          "A. 我不要去买桌子。",
          "B. 我不想去买桌子。",
          "C. 我没要去买桌子。",
          "D. 我不是去买桌子。"
        ],
        answer: "B",
        explanation: "Phủ định của trợ động từ '要' (muốn, dự định) là '不想' hoặc '不愿意'."
      }
    },
    {
      id: 2,
      name: "Phó từ chỉ mức độ \"最\" (zuì)",
      formula: "最 + Tính từ / Động từ tâm lý (喜欢, 爱...)",
      explanation: "Biểu thị vị trí thứ nhất trong các sự vật cùng loại hoặc về một khía cạnh nào đó (nghĩa là 'nhất').",
      negativeForm: null,
      examples: [
        { zh: "大卫的汉语最好。", pinyin: "Dàwèi de Hànyǔ zuì hǎo.", vi: "Tiếng Trung của David tốt nhất." },
        { zh: "我最喜欢吃米饭。", pinyin: "Wǒ zuì xǐhuan chī mǐfàn.", vi: "Tôi thích ăn cơm nhất." },
        { zh: "它的眼睛最漂亮。", pinyin: "Tā de yǎnjing zuì piàoliang.", vi: "Mắt của nó đẹp nhất." }
      ],
      quickQuiz: {
        question: "Điền từ thích hợp vào chỗ trống: \"一月的北京天气（ ）冷。\"",
        options: [
          "A. 也",
          "B. 最",
          "C. 几",
          "D. 要"
        ],
        answer: "B",
        explanation: "Dùng phó từ mức độ '最' đứng trước tính từ '冷' để biểu thị lạnh nhất."
      }
    },
    {
      id: 3,
      name: "Cách diễn tả số ước lượng bằng \"几\" (jǐ) và \"多\" (duō)",
      formula: "几 + Lượng từ + Danh từ (số < 10) | Số lẻ (<10) + Lượng từ + 多 + Danh từ | Số tròn chục + 多 + Lượng từ + Danh từ",
      explanation: "1. '几' (vài, mấy): biểu thị số lượng không xác định nhưng nhỏ hơn 10 (bắt buộc kèm lượng từ). Đứng sau '十' chỉ 11–19 (十几个人); đứng trước '十' chỉ 20–99 (几十个人).\n2. '多' (hơn, nhiều): biểu thị số dư. Khi số từ < 10, '多' đứng SAU lượng từ (三个多星期, 五年多). Khi số từ là số tròn chục (10, 20...), '多' đứng TRƯỚC lượng từ (十多个人, 二十多块钱).",
      negativeForm: null,
      examples: [
        { zh: "几个人 / 几本书 / 几个新的椅子", pinyin: "jǐ ge rén / jǐ běn shū / jǐ ge xīn de yǐzi", vi: "vài người / vài quyển sách / vài chiếc ghế mới" },
        { zh: "三个多星期 / 五年多 / 六个多月", pinyin: "sān ge duō xīngqī / wǔ nián duō / liù ge duō yuè", vi: "hơn 3 tuần / hơn 5 năm / hơn 6 tháng (số < 10)" },
        { zh: "十多个月 / 二十多块钱 / 八十多个人", pinyin: "shí duō ge yuè / èrshí duō kuài qián / bāshí duō ge rén", vi: "hơn 10 tháng / hơn 20 tệ / hơn 80 người (số tròn chục)" }
      ],
      quickQuiz: {
        question: "Cách diễn đạt nào sau đây là ĐÚNG cho 'Hơn ba tuần'?",
        options: [
          "A. 三多星期",
          "B. 三多个人",
          "C. 三个多星期",
          "D. 三多个星期"
        ],
        answer: "C",
        explanation: "Khi số từ nhỏ hơn 10 (3 < 10), '多' đứng SAU lượng từ: Số từ (3) + Lượng từ (个) + 多 + Danh từ (星期)."
      }
    }
  ],

  // 3. GAME TỪ VỰNG & LUYỆN TẬP
  vocabularyGames: {
    quizQuestions: [
      { id: "g1", type: "hanzi-to-meaning", prompt: "旅游", options: ["Du lịch", "Thể thao", "Đá bóng", "Mới"], answer: "Du lịch", pinyin: "lǚyóu" },
      { id: "g2", type: "hanzi-to-meaning", prompt: "觉得", options: ["Biết", "Cho rằng, thấy", "Nói", "Học"], answer: "Cho rằng, thấy", pinyin: "juéde" },
      { id: "g3", type: "meaning-to-hanzi", prompt: "Tại sao", options: ["为什么", "什么", "怎么", "哪里"], answer: "为什么", pinyin: "wèi shénme" },
      { id: "g4", type: "meaning-to-hanzi", prompt: "Đá bóng", options: ["运动", "踢足球", "跑步", "旅游"], answer: "踢足球", pinyin: "tī zúqiú" },
      { id: "g5", type: "hanzi-to-pinyin", prompt: "眼睛", options: ["yǎnjing", "yàojing", "yīnsheng", "yīqǐ"], answer: "yǎnjing", meaning: "Mắt" },
      { id: "g6", type: "hanzi-to-pinyin", prompt: "一起", options: ["yīqǐ", "yīxià", "yǐjīng", "yīnwèi"], answer: "yīqǐ", meaning: "Cùng nhau" },
      { id: "g7", type: "fill-blank", prompt: "九月去北京（ ）最好。", options: ["运动", "旅游", "眼睛", "新"], answer: "旅游", translation: "Tháng chín đi Bắc Kinh du lịch là tốt nhất." },
      { id: "g8", type: "fill-blank", prompt: "星期六我们（ ）去踢足球吧。", options: ["一起", "觉得", "它", "也"], answer: "一起", translation: "Thứ bảy chúng mình cùng nhau đi đá bóng nhé." },
      { id: "g9", type: "fill-blank", prompt: "大卫的小猫两岁多了，我的小猫（ ）两岁多了。", options: ["最", "也", "要", "为什么"], answer: "也", translation: "Mèo của David hơn 2 tuổi rồi, mèo của tôi cũng hơn 2 tuổi rồi." },
      { id: "g10", type: "sentence-scramble", prompt: "Sắp xếp từ thành câu hoàn chỉnh:", words: ["北京", "九月", "去", "最好", "旅游"], answer: "九月去北京旅游最好", translation: "Tháng chín đi Bắc Kinh du lịch là tốt nhất." },
      { id: "g11", type: "sentence-scramble", prompt: "Sắp xếp từ thành câu hoàn chỉnh:", words: ["想", "不", "我", "买", "桌子"], answer: "我不想买桌子", translation: "Tôi không muốn mua bàn." },
      { id: "g12", type: "sentence-scramble", prompt: "Sắp xếp từ thành câu hoàn chỉnh:", words: ["最", "的", "眼睛", "它", "漂亮"], answer: "它的眼睛最漂亮", translation: "Mắt của nó đẹp nhất." }
    ],
    matchingPairs: [
      { id: "m1", zh: "旅游", pinyin: "lǚyóu", vi: "Du lịch" },
      { id: "m2", zh: "觉得", pinyin: "juéde", vi: "Cho rằng, thấy" },
      { id: "m3", zh: "踢足球", pinyin: "tī zúqiú", vi: "Đá bóng" },
      { id: "m4", zh: "眼睛", pinyin: "yǎnjing", vi: "Mắt" },
      { id: "m5", zh: "一起", pinyin: "yīqǐ", vi: "Cùng nhau" },
      { id: "m6", zh: "为什么", pinyin: "wèi shénme", vi: "Tại sao" }
    ]
  },

  // 4. BÀI TẬP SÁCH BÀI TẬP (Official HSK2 Workbook)
  workbookExercises: {
    audioFile: "audio/lesson01/01-1.mp3",

    listeningPart1: {
      type: "listening-true-false-image",
      sourceStatus: "official-workbook",
      sourceNote: "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 7.",
      questions: [
        { id: 1, image: "images/workbook/lesson01/listening-part1/q01.png", imageSource: "official-workbook", answer: true },
        { id: 2, image: "images/workbook/lesson01/listening-part1/q02.png", imageSource: "official-workbook", answer: false },
        { id: 3, image: "images/workbook/lesson01/listening-part1/q03.png", imageSource: "official-workbook", answer: true },
        { id: 4, image: "images/workbook/lesson01/listening-part1/q04.png", imageSource: "official-workbook", answer: false },
        { id: 5, image: "images/workbook/lesson01/listening-part1/q05.png", imageSource: "official-workbook", answer: true }
      ]
    },

    // Bảng hình ảnh cho Phần Nghe 2 & Phần Đọc 1
    imageReference: [
      { key: "A", desc: "🐱 Con mèo đang nằm ngủ (小猫在睡觉)" },
      { key: "B", desc: "☕ Tách trà nóng / Cốc nước (喝茶 / 水)" },
      { key: "C", desc: "👨‍⚕️ Bác sĩ / Đang làm việc (工作 / 医生)" },
      { key: "D", desc: "⚽ Chơi đá bóng (踢足球)" },
      { key: "E", desc: "🗺️ Chỉ quả địa cầu / Du lịch (去北京旅游)" },
      { key: "F", desc: "🏃 Chạy bộ tập thể dục (跑步 / 运动)" }
    ],

    imageSets: {
      listeningPart2: {
        sourceStatus: "official-workbook",
        sourceNote: "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 8.",
        images: [
          { id: "A", src: "images/workbook/lesson01/listening-part2/a.png", imageSource: "official-workbook" },
          { id: "B", src: "images/workbook/lesson01/listening-part2/b.png", imageSource: "official-workbook" },
          { id: "C", src: "images/workbook/lesson01/listening-part2/c.png", imageSource: "official-workbook" },
          { id: "D", src: "images/workbook/lesson01/listening-part2/d.png", imageSource: "official-workbook" },
          { id: "E", src: "images/workbook/lesson01/listening-part2/e.png", imageSource: "official-workbook" },
          { id: "F", src: "images/workbook/lesson01/listening-part2/f.png", imageSource: "official-workbook" }
        ]
      },
      readingPart1: {
        sourceStatus: "official-workbook",
        sourceNote: "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 10.",
        images: [
          { id: "A", src: "images/workbook/lesson01/reading-part1/a.png", imageSource: "official-workbook" },
          { id: "B", src: "images/workbook/lesson01/reading-part1/b.png", imageSource: "official-workbook" },
          { id: "C", src: "images/workbook/lesson01/reading-part1/c.png", imageSource: "official-workbook" },
          { id: "D", src: "images/workbook/lesson01/reading-part1/d.png", imageSource: "official-workbook" },
          { id: "E", src: "images/workbook/lesson01/reading-part1/e.png", imageSource: "official-workbook" },
          { id: "F", src: "images/workbook/lesson01/reading-part1/f.png", imageSource: "official-workbook" }
        ]
      }
    },

    // Phần Nghe 2 (Câu 6 - 10): Nghe chọn hình A - F
    listeningPart2: [
      { id: 6, question: "Câu 6", answer: "B", transcript: "男：你想喝点儿什么？ 女：我想喝茶。" },
      { id: 7, question: "Câu 7", answer: "F", transcript: "男：我们下午一起去运动吧。 女：好啊，我最喜欢跑步了。" },
      { id: 8, question: "Câu 8", answer: "C", transcript: "女：你几点能回来？ 男：七点多，不会太晚。" },
      { id: 9, question: "Câu 9", answer: "A", transcript: "女：你的猫多大了？ 男：一岁多。" },
      { id: 10, question: "Câu 10", answer: "E", transcript: "女：什么时候去北京旅游最好？ 男：九月和十月北京天气最好，你九月去吧。" }
    ],

    // Phần Nghe 3 (Câu 11 - 15): Nghe chọn đáp án A, B, C
    listeningPart3: [
      { id: 11, question: "Câu 11: 几月去北京旅游最好？", options: ["A. 八月", "B. 几个月", "C. 九月"], answer: "C", transcript: "女：你觉得什么时候去北京旅游最好？ 男：我觉得九月去最好。 问：几月去北京旅游最好？" },
      { id: 12, question: "Câu 12: 男的为什么不喜欢上海？", options: ["A. 太远了", "B. 太冷了", "C. 太热了"], answer: "B", transcript: "女：你喜欢上海吗？ 男：上海冬天太冷了，我不喜欢。 问：男的为什么不喜欢上海？" },
      { id: 13, question: "Câu 13: 男的要买什么？", options: ["A. 桌子", "B. 椅子", "C. 杯子"], answer: "B", transcript: "女：我要去商店，你去吗？ 男：我也去，我要买几个新椅子。 问：男的要买什么？" },
      { id: 14, question: "Câu 14: 王医生的女儿今年多大了？", options: ["A. 不到十岁", "B. 四十岁", "C. 十多岁"], answer: "C", transcript: "女：王医生的女儿今年多大了？ 男：十四岁了。 问：王医生的女儿今年多大了？" },
      { id: 15, question: "Câu 15: 女的觉得什么很漂亮？", options: ["A. 杯子", "B. 北京", "C. 茶杯"], answer: "A", transcript: "女：我觉得这个杯子很漂亮。 男：你也很喜欢？这是我在北京买的。 问：女的觉得什么很漂亮？" }
    ],

    // Phần Đọc 1 (Câu 16 - 20): Đọc câu và chọn hình A - F
    readingPart1: [
      { id: 16, text: "一月的北京天气最冷。", vi: "Thời tiết Bắc Kinh vào tháng 1 là lạnh nhất.", options: ["A", "B", "C", "D", "E", "F"], answer: "E" },
      { id: 17, text: "爸爸现在不能回来，他在工作呢。", vi: "Bố bây giờ chưa thể về, bố đang làm việc.", options: ["A", "B", "C", "D", "E", "F"], answer: "A" },
      { id: 18, text: "星期六我们一起去踢足球吧。", vi: "Thứ bảy chúng mình cùng đi đá bóng nhé.", options: ["A", "B", "C", "D", "E", "F"], answer: "C" },
      { id: 19, text: "你的小猫最漂亮。", vi: "Con mèo của bạn là đẹp nhất.", options: ["A", "B", "C", "D", "E", "F"], answer: "F" },
      { id: 20, text: "我最喜欢旅游。", vi: "Tôi thích đi du lịch nhất.", options: ["A", "B", "C", "D", "E", "F"], answer: "B" }
    ],

    // Phần Đọc 2 (Câu 21 - 25): Điền từ vào chỗ trống
    readingPart2: {
      options: [
        { key: "A", word: "为什么" },
        { key: "B", word: "要" },
        { key: "C", word: "最" },
        { key: "D", word: "觉得" },
        { key: "E", word: "贵" },
        { key: "F", word: "也" }
      ],
      questions: [
        { id: 21, text: "王方（ ）买一个新杯子。", vi: "Vương Phương ___ mua một cái cốc mới.", answer: "B" },
        { id: 22, text: "昨天你（ ）没来我家吃饭？", vi: "Hôm qua sao bạn ___ không đến nhà tôi ăn cơm?", answer: "A" },
        { id: 23, text: "我（ ）这个衣服太大了，你看看那个吧。", vi: "Tôi ___ bộ quần áo này rộng quá, bạn xem bộ kia đi.", answer: "D" },
        { id: 24, text: "我的小猫两岁多了，大卫的小猫（ ）两岁多了。", vi: "Con mèo của tôi hơn hai tuổi rồi, con mèo của David ___ hơn hai tuổi.", answer: "F" },
        { id: 25, text: "王老师（ ）喜欢吃苹果。", vi: "Thầy Vương ___ thích ăn táo.", answer: "C" }
      ]
    },

    // Phần Đọc 3 (Câu 26 - 30): Phán đoán Đúng / Sai
    readingPart3: [
      { id: 26, text: "她喜欢在家看电影，也喜欢睡觉，不喜欢出去。", statement: "她最喜欢运动。", vi: "Cô ấy thích xem phim và ngủ ở nhà, không thích ra ngoài.", answer: false, explanation: "Cô ấy chỉ thích ở nhà xem phim và ngủ, không thích vận động ra ngoài." },
      { id: 27, text: "王小姐的小猫在我家，我的小猫在我妈妈家。", statement: "我有一只小猫。", vi: "Mèo của cô Vương ở nhà tôi, mèo của tôi ở nhà mẹ.", answer: true, explanation: "Người nói có một con mèo (hiện đang ở nhà mẹ)." },
      { id: 28, text: "我不想买桌子，我要买几个新椅子。", statement: "我要去商店买桌子。", vi: "Tôi không muốn mua bàn, tôi muốn mua vài cái ghế mới.", answer: false, explanation: "Người nói muốn mua ghế mới, không muốn mua bàn." },
      { id: 29, text: "听说你在学做中国菜呢，我们一起做吧。", statement: "他们要一起做中国菜。", vi: "Nghe nói bạn đang học làm món Trung, chúng ta cùng làm nhé.", answer: true, explanation: "Khớp với lời đề nghị 'Chúng ta cùng làm nhé'." },
      { id: 30, text: "八月北京很热，九月天气好，你来吧。", statement: "八月去北京旅游最好。", vi: "Tháng 8 Bắc Kinh rất nóng, tháng 9 thời tiết đẹp, bạn đến nhé.", answer: false, explanation: "Tháng 9 thời tiết mới đẹp nhất, tháng 8 rất nóng." }
    ],

    // Phần Đọc 4 (Câu 31 - 35): Ghép câu đối thoại
    readingPart4: {
      options: [
        { key: "A", text: "桌子上有一本新书。那是你的书吗？" },
        { key: "B", text: "王老师什么时候能到？" },
        { key: "C", text: "他们都去踢足球了，你去不去？" },
        { key: "D", text: "这个小猫很漂亮。它多大了？" },
        { key: "E", text: "他在哪儿呢？你看见他了吗？" },
        { key: "F", text: "你为什么不开车去学校？" }
      ],
      questions: [
        { id: 31, text: "不是我的，我没买书。", vi: "Không phải của tôi, tôi không mua sách.", answer: "A" },
        { id: 32, text: "三岁多。", vi: "Hơn ba tuổi.", answer: "D" },
        { id: 33, text: "他已经走了，十分钟后能到。", vi: "Thầy ấy đã đi rồi, 10 phút nữa sẽ đến.", answer: "B" },
        { id: 34, text: "我没时间，明天吧。", vi: "Tôi không có thời gian, để mai nhé.", answer: "C" },
        { id: 35, text: "我不想开，我觉得坐出租车很好。", vi: "Tôi không muốn lái, tôi thấy đi taxi rất tốt.", answer: "F" }
      ]
    }
  }
};

if (typeof window !== "undefined") {
  window.lesson01Data = lesson01Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = lesson01Data;
}
