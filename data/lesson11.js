(function () {
  const lesson = {
    id: "lesson11",
    order: 11,
    type: "lesson",
    status: "ready",
    title: "他比我大三岁",
    viTitle: "Anh ấy hơn tôi ba tuổi",
    scope: "Bài 11",
    sourceRange: "HSK2.md: sách giáo trình Bài 11 và sách bài tập Bài 11",
    vocabulary: [
      { hanzi: "唱歌", pinyin: "chànggē", pos: "Động từ", meaning: "Hát", example: "我喜欢和朋友们一起去唱歌。", examplePinyin: "Wǒ xǐhuan hé péngyoumen yìqǐ qù chànggē.", exampleVi: "Tôi thích đi hát cùng bạn bè.", source: "book", exampleSource: "book" },
      { hanzi: "男", pinyin: "nán", pos: "Tính từ/Danh từ", meaning: "Nam", example: "那个男孩子是我弟弟。", examplePinyin: "Nà ge nán háizi shì wǒ dìdi.", exampleVi: "Cậu bé kia là em trai tôi.", source: "book", exampleSource: "ai" },
      { hanzi: "女", pinyin: "nǚ", pos: "Tính từ/Danh từ", meaning: "Nữ", example: "那个女孩子会唱歌。", examplePinyin: "Nà ge nǚ háizi huì chànggē.", exampleVi: "Cô bé kia biết hát.", source: "book", exampleSource: "ai" },
      { hanzi: "孩子", pinyin: "háizi", pos: "Danh từ", meaning: "Trẻ em, con cái", example: "我女儿已经六岁了。", examplePinyin: "Wǒ nǚ'ér yǐjīng liù suì le.", exampleVi: "Con gái tôi đã sáu tuổi rồi.", source: "book", exampleSource: "book" },
      { hanzi: "右边", pinyin: "yòubian", pos: "Danh từ", meaning: "Bên phải", example: "右边写字的那个人是我哥哥。", examplePinyin: "Yòubian xiězì de nà ge rén shì wǒ gēge.", exampleVi: "Người đang viết chữ bên phải là anh trai tôi.", source: "book", exampleSource: "book" },
      { hanzi: "比", pinyin: "bǐ", pos: "Giới từ", meaning: "Hơn, so với", example: "哥哥比姐姐高。", examplePinyin: "Gēge bǐ jiějie gāo.", exampleVi: "Anh trai cao hơn chị gái.", source: "book", exampleSource: "book" },
      { hanzi: "便宜", pinyin: "piányi", pos: "Tính từ", meaning: "Rẻ", example: "苹果比西瓜便宜。", examplePinyin: "Píngguǒ bǐ xīguā piányi.", exampleVi: "Táo rẻ hơn dưa hấu.", source: "book", exampleSource: "book" },
      { hanzi: "说话", pinyin: "shuōhuà", pos: "Động từ", meaning: "Nói chuyện", example: "你认识前边说话的那两个人吗？", examplePinyin: "Nǐ rènshi qiánbian shuōhuà de nà liǎng ge rén ma?", exampleVi: "Bạn có quen hai người đang nói chuyện phía trước không?", source: "book", exampleSource: "book" },
      { hanzi: "可能", pinyin: "kěnéng", pos: "Phó từ", meaning: "Có thể, có lẽ", example: "天气不太好，我觉得可能要下雨了。", examplePinyin: "Tiānqì bú tài hǎo, wǒ juéde kěnéng yào xiàyǔ le.", exampleVi: "Thời tiết không tốt lắm, tôi thấy có lẽ sắp mưa.", source: "book", exampleSource: "book" },
      { hanzi: "去年", pinyin: "qùnián", pos: "Danh từ", meaning: "Năm ngoái", example: "我去年去过北京。", examplePinyin: "Wǒ qùnián qù guo Běijīng.", exampleVi: "Năm ngoái tôi từng đi Bắc Kinh.", source: "book", exampleSource: "ai" },
      { hanzi: "姓", pinyin: "xìng", pos: "Động từ/Danh từ", meaning: "Mang họ, họ", example: "你姓什么？", examplePinyin: "Nǐ xìng shénme?", exampleVi: "Bạn họ gì?", source: "book", exampleSource: "ai" }
    ],
    grammar: [
      { id: "g1", title: "Động từ/cụm động từ làm định ngữ", structure: "Động từ/cụm động từ + 的 + danh từ", explanation: "Cụm trước 的 bổ nghĩa cho danh từ phía sau.", examples: [
        { zh: "新买的自行车。", pinyin: "Xīn mǎi de zìxíngchē.", vi: "Chiếc xe đạp mới mua." },
        { zh: "和你一起唱歌的人。", pinyin: "Hé nǐ yìqǐ chànggē de rén.", vi: "Người hát cùng bạn." },
        { zh: "我妈妈做的饭。", pinyin: "Wǒ māma zuò de fàn.", vi: "Cơm mẹ tôi nấu." }
      ], source: "book" },
      { id: "g2", title: "Câu so sánh 比", structure: "A + 比 + B + tính từ / A + 没有 + B + tính từ", explanation: "Dùng 比 để nói A hơn B; dùng 没有 để nói A không bằng B.", examples: [
        { zh: "哥哥比姐姐高。", pinyin: "Gēge bǐ jiějie gāo.", vi: "Anh trai cao hơn chị gái." },
        { zh: "今天比昨天热得多。", pinyin: "Jīntiān bǐ zuótiān rè de duō.", vi: "Hôm nay nóng hơn hôm qua nhiều." },
        { zh: "她比我们老师小两岁。", pinyin: "Tā bǐ wǒmen lǎoshī xiǎo liǎng suì.", vi: "Cô ấy nhỏ hơn thầy/cô chúng tôi hai tuổi." }
      ], source: "book" },
      { id: "g3", title: "可能", structure: "Chủ ngữ + 可能 + động từ / 可能 + chủ ngữ + động từ", explanation: "Diễn tả khả năng hoặc phỏng đoán: có thể, có lẽ.", examples: [
        { zh: "他可能早就知道这件事情了。", pinyin: "Tā kěnéng zǎo jiù zhīdào zhè jiàn shìqing le.", vi: "Có thể anh ấy đã biết việc này từ lâu rồi." },
        { zh: "可能我明天不来上课了。", pinyin: "Kěnéng wǒ míngtiān bù lái shàngkè le.", vi: "Có lẽ ngày mai tôi không đến lớp." },
        { zh: "你可能不认识她。", pinyin: "Nǐ kěnéng bú rènshi tā.", vi: "Có thể bạn không quen cô ấy." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "每个周末，我都喜欢和朋友们一起去（ ）。", answer: "唱歌", hint: "hát", source: "book" },
        { prompt: "苹果比西瓜（ ）。", answer: "便宜", hint: "rẻ", source: "book" },
        { prompt: "天气不太好，可能要（ ）了。", answer: "下雨", hint: "mưa", source: "ai" },
        { prompt: "你认识前边（ ）的那两个人吗？", answer: "说话", hint: "nói chuyện", source: "book" }
      ],
      listeningChoice: [
        { script: "便宜", prompt: "Nghe và chọn từ đúng", answer: "便宜", options: ["便宜", "比", "右边", "可能"], source: "ai" },
        { script: "唱歌", prompt: "Nghe và chọn từ đúng", answer: "唱歌", options: ["唱歌", "说话", "孩子", "去年"], source: "ai" },
        { script: "可能", prompt: "Nghe và chọn từ đúng", answer: "可能", options: ["可能", "姓", "女", "男"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn cụm định ngữ đúng.", options: ["说话的人", "人说话的", "的说话人"], answer: "说话的人", explain: "Cụm động từ đứng trước 的 để bổ nghĩa cho 人.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "右边写字（ ）那个人是我哥哥。", answer: "的", explain: "写字的那个人 = người đang viết chữ.", source: "book", grammarId: "g1" },
      { type: "choice", prompt: "Chọn câu so sánh đúng.", options: ["哥哥比姐姐高。", "哥哥高比姐姐。", "比哥哥姐姐高。"], answer: "哥哥比姐姐高。", explain: "A 比 B + tính từ.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "今天（ ）昨天热一点儿。", answer: "比", explain: "比 dùng để so sánh hơn.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "天气不太好，我觉得（ ）要下雨了。", answer: "可能", explain: "可能 diễn tả phỏng đoán.", source: "book", grammarId: "g3" },
      { type: "choice", prompt: "Chọn câu dùng 可能 đúng.", options: ["他可能去旅游了。", "他去可能旅游了。", "可能了他去旅游。"], answer: "他可能去旅游了。", explain: "可能 thường đứng trước động từ/cụm động từ.", source: "book", grammarId: "g3" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Rẻ” là từ nào?", options: ["便宜", "贵", "可能", "右边"], answer: "便宜", source: "book" },
      { type: "fill", prompt: "我哥哥（ ）我大三岁。", answer: "比", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["苹果", "比", "西瓜", "便宜"], answer: "苹果比西瓜便宜", source: "book" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Người đang nói chuyện là anh trai tôi.", answer: "说话的人是我哥哥。", source: "ai" }
    ],
    workbook: [
      { id: "wb-read-21-25", title: "Sách bài tập - Đọc Phần 2, Câu 21-25", source: "book", type: "fillChoice", choices: [
        { key: "A", text: "唱歌" }, { key: "B", text: "便宜" }, { key: "C", text: "说话" }, { key: "D", text: "可能" }, { key: "E", text: "贵" }, { key: "F", text: "比" }
      ], questions: [
        { id: "21", prompt: "昨天25度，今天（ ）昨天热一点儿。", answer: "F" },
        { id: "22", prompt: "每个周末，我都喜欢和朋友们一起去（ ）。", answer: "A" },
        { id: "23", prompt: "你认识前边（ ）的那两个人吗？", answer: "C" },
        { id: "24", prompt: "天气不太好，我觉得（ ）要下雨了。", answer: "D" },
        { id: "25", prompt: "苹果比西瓜（ ），我想多买点儿苹果。", answer: "B" }
      ] },
      { id: "wb-judge-26-30", title: "Sách bài tập - Đọc Phần 3, Câu 26-30", source: "book", type: "trueFalse", questions: [
        { id: "26", original: "左边看报纸的这个人是我姐姐，右边写字的那个人是我哥哥。", prompt: "他们家可能有三个孩子。", answer: "√" },
        { id: "27", original: "女儿让我告诉你，她今天晚上和朋友们一起去唱歌，不回来吃晚饭了。", prompt: "女儿今天在家吃晚饭。", answer: "x" },
        { id: "28", original: "这是儿子送给我的手表，因为明天是我的生日。", prompt: "she/Tā sòng gěi érzi yí kuài shǒubiǎo.", answer: "x", explain: "Nguồn có lẫn she/Tā; giữ nguyên câu nguồn." },
        { id: "29", original: "你问的这个问题很好，我要想一想，明天再告诉你，可以吗？", prompt: "他现在没有回答这个问题。", answer: "√" },
        { id: "30", original: "哥哥的汉语比我好，姐姐的汉语也比我好。", prompt: "我的汉语没有哥哥和姐姐那么好。", answer: "√" }
      ] },
      { id: "wb-match-31-35", title: "Sách bài tập - Đọc Phần 4, Câu 31-35", source: "book", type: "matchChoice", choices: [
        { key: "A", text: "这两天怎么没看见王老师？" }, { key: "B", text: "我哥哥比我姐姐大三岁。" }, { key: "C", text: "家里还有 ne，来点儿水果吧。" }, { key: "D", text: "这是我爸爸送给我的，昨天是我的生日。" }, { key: "E", text: "他在哪儿呢？你看见 he/tā 了吗？（例）" }, { key: "F", text: "我觉得公共汽车没有自行车快。因为路上车太多了。" }
      ], questions: [
        { id: "31", prompt: "今天的鸡蛋比昨天的便宜一些，您来点儿吧。", answer: "C" },
        { id: "32", prompt: "你哥哥大还是你姐姐大？", answer: "B" },
        { id: "33", prompt: "这是你的自行车吗？真漂亮。", answer: "D" },
        { id: "34", prompt: "你每天坐公共汽车去学校吗？", answer: "F" },
        { id: "35", prompt: "她可能去旅游了。", answer: "A" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập - Nghe và hình ảnh", source: "book", note: "HSK2.md thiếu script/audio/đáp án gốc cho phần nghe, nên chưa tự chấm.", lines: ["Nghe Phần 1-3: giữ làm tham khảo.", "Các bài phụ thuộc hình gốc chưa đưa vào tự chấm."] },
      { title: "Dữ liệu nguồn bất thường", source: "book", note: "Không dùng các mẩu lỗi để tạo câu AI.", lines: ["Nguồn ngữ pháp có cụm lỗi “表达/的” trong ví dụ.", "Câu 28 có lẫn she/Tā.", "Lựa chọn ghép có lẫn ne và he/tā."] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "Chọn câu đúng.", options: ["我哥哥比我大三岁。", "我哥哥三岁比我大。", "比我哥哥大三岁。"], answer: "我哥哥比我大三岁。", explain: "A 比 B + tính từ + mức chênh lệch.", source: "ai" },
      { type: "fill", prompt: "前边说话（ ）人是我老师。", answer: "的", explain: "Cụm động từ + 的 + danh từ.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Có lẽ trời sắp mưa.", answer: "可能要下雨了。", explain: "可能 + 要...了.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "我哥哥比我大三岁。", prompt: "哥哥比我大几岁？", options: ["三岁", "两岁", "一岁"], answer: "三岁", explain: "Script nói 大三岁。" },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "苹果比西瓜便宜。", prompt: "西瓜比苹果便宜。", options: ["√", "x"], answer: "x", explain: "Script nói táo rẻ hơn dưa hấu." },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "天气不太好，可能要下雨了。", prompt: "天气不太好，（ ）要下雨了。", answer: "可能", explain: "Từ nghe được là 可能." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：右边写字的人是谁？\n男：是我哥哥。", prompt: "谁是哥哥？", options: ["右边写字的人", "左边看书的人", "唱歌的人"], answer: "右边写字的人", explain: "Script nói 右边写字的人是哥哥。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
