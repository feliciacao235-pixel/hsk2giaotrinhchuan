(function () {
  const lesson = {
    id: "lesson07",
    order: 7,
    type: "lesson",
    status: "ready",
    title: "你家离公司远吗？",
    viTitle: "Nhà chị có ở xa công ty không?",
    scope: "Bài 7",
    sourceRange: "HSK2.md: sách giáo trình Bài 7 và sách bài tập Bài 7",
    vocabulary: [
      { hanzi: "教室", pinyin: "jiàoshì", pos: "Danh từ", meaning: "Lớp học", example: "大卫还在教室学习呢。", examplePinyin: "Dàwèi hái zài jiàoshì xuéxí ne.", exampleVi: "David vẫn đang học ở phòng học.", source: "book" },
      { hanzi: "机场", pinyin: "jīchǎng", pos: "Danh từ", meaning: "Sân bay", example: "我在去机场的路上呢。", examplePinyin: "Wǒ zài qù jīchǎng de lù shang ne.", exampleVi: "Tôi đang trên đường đến sân bay.", source: "book" },
      { hanzi: "路", pinyin: "lù", pos: "Danh từ", meaning: "Đường, lối đi", example: "我在去机场的路上。", examplePinyin: "Wǒ zài qù jīchǎng de lù shang.", exampleVi: "Tôi đang trên đường đến sân bay.", source: "book" },
      { hanzi: "离", pinyin: "lí", pos: "Động từ", meaning: "Cách", example: "我家离学校不太远。", examplePinyin: "Wǒ jiā lí xuéxiào bú tài yuǎn.", exampleVi: "Nhà tôi cách trường không xa lắm.", source: "book" },
      { hanzi: "公司", pinyin: "gōngsī", pos: "Danh từ", meaning: "Công ty", example: "爸爸还在公司工作呢。", examplePinyin: "Bàba hái zài gōngsī gōngzuò ne.", exampleVi: "Bố vẫn đang làm việc ở công ty.", source: "book" },
      { hanzi: "远", pinyin: "yuǎn", pos: "Tính từ", meaning: "Xa", example: "医院离我们这儿还远呢。", examplePinyin: "Yīyuàn lí wǒmen zhèr hái yuǎn ne.", exampleVi: "Bệnh viện cách chỗ chúng ta còn xa lắm.", source: "book" },
      { hanzi: "公共汽车", pinyin: "gōnggòng qìchē", pos: "Danh từ", meaning: "Xe buýt", example: "坐公共汽车太慢了。", examplePinyin: "Zuò gōnggòng qìchē tài màn le.", exampleVi: "Đi xe buýt chậm quá.", source: "book" },
      { hanzi: "小时", pinyin: "xiǎoshí", pos: "Danh từ", meaning: "Giờ đồng hồ", example: "坐出租车要一个小时。", examplePinyin: "Zuò chūzūchē yào yí ge xiǎoshí.", exampleVi: "Đi taxi mất một tiếng.", source: "book" },
      { hanzi: "慢", pinyin: "màn", pos: "Tính từ", meaning: "Chậm", example: "坐公共汽车太慢了。", examplePinyin: "Zuò gōnggòng qìchē tài màn le.", exampleVi: "Đi xe buýt chậm quá.", source: "book" },
      { hanzi: "快", pinyin: "kuài", pos: "Tính từ", meaning: "Nhanh", example: "出租车很快。", examplePinyin: "Chūzūchē hěn kuài.", exampleVi: "Taxi rất nhanh.", source: "ai" },
      { hanzi: "过", pinyin: "guò", pos: "Động từ", meaning: "Ăn mừng, trải qua", example: "今天是你的生日，你想怎么过？", examplePinyin: "Jīntiān shì nǐ de shēngrì, nǐ xiǎng zěnme guò?", exampleVi: "Hôm nay là sinh nhật bạn, bạn muốn đón thế nào?", source: "book" },
      { hanzi: "走", pinyin: "zǒu", pos: "Động từ", meaning: "Đi, đi bộ", example: "我每天走路去学校。", examplePinyin: "Wǒ měi tiān zǒulù qù xuéxiào.", exampleVi: "Hàng ngày tôi đi bộ đến trường.", source: "book" },
      { hanzi: "到", pinyin: "dào", pos: "Động từ", meaning: "Đến, tới", example: "还有十分钟就到了。", examplePinyin: "Hái yǒu shí fēnzhōng jiù dào le.", exampleVi: "Còn mười phút nữa là đến.", source: "book" }
    ],
    grammar: [
      { id: "g1", title: "Phó từ ngữ khí 还", structure: "还 + động từ/tính từ / 还没 + động từ", explanation: "Biểu thị hành động hoặc trạng thái vẫn tiếp diễn; phủ định là 还没.", examples: [
        { zh: "八点了，他还在睡觉。", pinyin: "Bā diǎn le, tā hái zài shuìjiào.", vi: "Tám giờ rồi, anh ấy vẫn đang ngủ." },
        { zh: "你怎么还没吃饭？", pinyin: "Nǐ zěnme hái méi chīfàn?", vi: "Sao bạn vẫn chưa ăn cơm?" },
        { zh: "他还在教室学习呢。", pinyin: "Tā hái zài jiàoshì xuéxí ne.", vi: "Anh ấy vẫn đang học ở lớp học đấy." }
      ], source: "book" },
      { id: "g2", title: "Phó từ thời gian 就", structure: "Chủ ngữ + thời gian/số lượng + 就 + động từ", explanation: "Nhấn mạnh sự việc xảy ra sớm, nhanh hoặc thuận lợi.", examples: [
        { zh: "同学们七点半就来教室了。", pinyin: "Tóngxuémen qī diǎn bàn jiù lái jiàoshì le.", vi: "Các bạn học sinh bảy giờ rưỡi đã đến lớp rồi." },
        { zh: "我坐飞机一个半小时就到北京了。", pinyin: "Wǒ zuò fēijī yí ge bàn xiǎoshí jiù dào Běijīng le.", vi: "Tôi đi máy bay một tiếng rưỡi là đến Bắc Kinh rồi." },
        { zh: "二十分钟就到。", pinyin: "Èrshí fēnzhōng jiù dào.", vi: "Hai mươi phút nữa là đến ngay." }
      ], source: "book" },
      { id: "g3", title: "Động từ 离", structure: "A + 离 + B + tính từ khoảng cách / cụm số lượng", explanation: "Dùng để nói khoảng cách giữa hai địa điểm, thời điểm hoặc mục tiêu.", examples: [
        { zh: "我家离学校很远。", pinyin: "Wǒ jiā lí xuéxiào hěn yuǎn.", vi: "Nhà tôi cách trường rất xa." },
        { zh: "学校离机场有20多公里。", pinyin: "Xuéxiào lí jīchǎng yǒu èrshí duō gōnglǐ.", vi: "Trường học cách sân bay hơn 20 km." },
        { zh: "我的生日离还有一个多星期呢！", pinyin: "Wǒ de shēngrì lí hái yǒu yí ge duō xīngqī ne!", vi: "Sinh nhật của tôi còn cách hơn một tuần nữa cơ.", note: "Câu nguồn trong HSK2.md có cấu trúc hơi bất thường, giữ theo nguồn." }
      ], source: "book" },
      { id: "g4", title: "Trợ từ ngữ khí 呢", structure: "Câu trần thuật + 呢", explanation: "Đặt cuối câu để xác nhận, nhấn mạnh hoặc làm sắc thái câu mạnh hơn.", examples: [
        { zh: "八点上课，时间还早呢。", pinyin: "Bā diǎn shàngkè, shíjiān hái zǎo ne.", vi: "Tám giờ mới học, thời gian còn sớm chán!" },
        { zh: "医院离我们这儿还远呢。", pinyin: "Yīyuàn lí wǒmen zhèr hái yuǎn ne.", vi: "Bệnh viện cách chỗ chúng ta còn xa lắm đấy!" },
        { zh: "坐公共汽车要一个多小时呢！", pinyin: "Zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne!", vi: "Đi xe buýt mất hơn một tiếng đồng hồ cơ đấy!" }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "我家（ ）学校不太远。", answer: "离", hint: "cách", source: "book" },
        { prompt: "晚上十点多了，爸爸还在（ ）工作呢。", answer: "公司", hint: "công ty", source: "book" },
        { prompt: "坐公共汽车太（ ）了。", answer: "慢", hint: "chậm", source: "book" },
        { prompt: "还有十分钟就（ ）了。", answer: "到", hint: "đến", source: "book" }
      ],
      listeningChoice: [
        { script: "机场", prompt: "Nghe và chọn từ đúng", answer: "机场", options: ["机场", "教室", "公司", "路"], source: "ai" },
        { script: "公共汽车", prompt: "Nghe và chọn từ đúng", answer: "公共汽车", options: ["公共汽车", "自行车", "出租车", "手表"], source: "ai" },
        { script: "离", prompt: "Nghe và chọn từ đúng", answer: "离", options: ["离", "到", "走", "过"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu dùng 还 đúng.", options: ["他还在教室学习呢。", "他在还教室学习呢。", "他教室还在学习呢。"], answer: "他还在教室学习呢。", explain: "还 đặt trước phần diễn tả trạng thái/hành động tiếp diễn.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "你怎么（ ）没吃饭？", answer: "还", explain: "还没 nghĩa là vẫn chưa.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "二十分钟（ ）到。", answer: "就", explain: "就 nhấn mạnh đến nhanh/sớm.", source: "book", grammarId: "g2" },
      { type: "choice", prompt: "Chọn câu đúng với 就.", options: ["我坐飞机一个半小时就到北京了。", "我坐飞机就一个半小时到北京了。", "我就坐飞机一个半小时到北京了。"], answer: "我坐飞机一个半小时就到北京了。", explain: "Cụm thời lượng đứng trước 就.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "我家（ ）学校很远。", answer: "离", explain: "A 离 B + khoảng cách.", source: "book", grammarId: "g3" },
      { type: "choice", prompt: "Chọn câu hỏi khoảng cách đúng.", options: ["你家离公司远吗？", "你家公司离远吗？", "离你家公司远吗？"], answer: "你家离公司远吗？", explain: "A 离 B 远吗？", source: "book", grammarId: "g3" },
      { type: "fill", prompt: "时间还早（ ）。", answer: "呢", explain: "呢 cuối câu để nhấn mạnh.", source: "book", grammarId: "g4" },
      { type: "choice", prompt: "Chọn câu dùng 呢 đúng.", options: ["坐公共汽车要一个多小时呢！", "呢坐公共汽车要一个多小时！", "坐公共汽车呢要一个多小时！"], answer: "坐公共汽车要一个多小时呢！", explain: "呢 đặt cuối câu.", source: "book", grammarId: "g4" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Sân bay” là từ nào?", options: ["机场", "公司", "教室", "路"], answer: "机场", source: "book" },
      { type: "fill", prompt: "北京到上海坐飞机一个多小时（ ）到了。", answer: "就", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["我家", "离", "学校", "不太远"], answer: "我家离学校不太远", source: "book" },
      { type: "choice", prompt: "Chọn nghĩa đúng của 远.", options: ["Xa", "Nhanh", "Chậm", "Đến"], answer: "Xa", source: "book" }
    ],
    workbook: [
      { id: "wb-read-21-25", title: "Sách bài tập - Đọc Phần 2, Câu 21-25", source: "book", type: "fillChoice", choices: [
        { key: "A", text: "离" }, { key: "B", text: "教室" }, { key: "C", text: "就" }, { key: "D", text: "过" }, { key: "E", text: "贵" }, { key: "F", text: "公司" }
      ], questions: [
        { id: "21", prompt: "我家（ ）学校不太远。", answer: "A" },
        { id: "22", prompt: "北京到上海坐飞机一个多小时（ ）到了。", answer: "C" },
        { id: "23", prompt: "晚上十点多了，爸爸还在（ ）工作呢。", answer: "F" },
        { id: "24", prompt: "明天有考试，大卫还在（ ）学习呢。", answer: "B" },
        { id: "25", prompt: "今天是你的生日，你想怎么（ ）？", answer: "D" }
      ] },
      { id: "wb-judge-26-30", title: "Sách bài tập - Đọc Phần 3, Câu 26-30", source: "book", type: "trueFalse", questions: [
        { id: "26", original: "大卫明天有考试, 所以还在教室学习呢。", prompt: "大卫不在家。", answer: "√", explain: "Đúng, anh ấy đang học ở trường." },
        { id: "27", original: "我在去机场的路上呢，还有十分钟就到了。", prompt: "我到机场十分钟了。", answer: "x", explain: "Sai, người nói chưa đến sân bay." },
        { id: "28", original: "离我家不远有一个饭馆，走几分钟就到了。", prompt: "饭馆离我家不远。", answer: "√", explain: "Đúng." },
        { id: "29", original: "坐公共汽车太慢了，我们还是坐出租车吧。", prompt: "坐出租车也很慢。", answer: "x", explain: "Sai, người nói chọn taxi để nhanh hơn xe buýt." },
        { id: "30", original: "从学校到机场，坐出租车要一个小时，我们八点走，可以吗？", prompt: "他们要坐八点的飞机。", answer: "x", explain: "Sai, tám giờ là giờ xuất phát từ trường." }
      ] },
      { id: "wb-match-31-35", title: "Sách bài tập - Đọc Phần 4, Câu 31-35", source: "book", type: "matchChoice", choices: [
        { key: "A", text: "还没有呢。" }, { key: "B", text: "坐公共汽车太慢了。" }, { key: "C", text: "不远，我每天走路去学校。" }, { key: "D", text: "我们家前面有一个小饭馆，走几分钟就到了，去那儿吃吧。" }, { key: "E", text: "他在哪儿呢？你看见 he/tá 了吗？（例）" }, { key: "F", text: "我在去机场的路上。" }
      ], questions: [
        { id: "31", prompt: "大卫回来了吗？", answer: "A" },
        { id: "32", prompt: "你现在在哪儿呢？", answer: "F" },
        { id: "33", prompt: "你为什么不坐公共汽车去公司？", answer: "B" },
        { id: "34", prompt: "我 today 很累，不想做饭了，我们出去吃吧。", answer: "D", explain: "Nguồn HSK2.md có chữ “today”; giữ nguyên câu nguồn." },
        { id: "35", prompt: "你家离学校远不远？", answer: "C" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập - Nghe Phần 1, Câu 1-5", source: "book", note: "HSK2.md chỉ có mô tả hình, không có script/audio/đáp án gốc nên chưa tự chấm.", lines: ["Hình 1: Phòng ăn gia đình.", "Hình 2: Người phụ nữ kéo vali ở sân bay.", "Hình 3: Cô gái chạy bộ.", "Hình 4: Đoàn tàu cao tốc.", "Hình 5: Nữ bác sĩ tư vấn/khám bệnh."] },
      { title: "Sách bài tập - Nghe Phần 3, Câu 11-15", source: "book", note: "Có lựa chọn nhưng thiếu script/audio/đáp án gốc.", lines: ["11. A 睡觉 | B 考试 | C 学习", "12. A 路上 | B 机场 | C 飞机上", "13. A 坐公共汽车 | B 自行车 | C 出租车", "14. A 二月一号 | B 二月七号 | C 二月十四号", "15. A 不远 | B 很远 | C 不太远"] },
      { title: "Sách bài tập - Đọc Phần 1", source: "book", note: "Trong đoạn HSK2.md cung cấp cho Bài 7 không có nội dung Đọc Phần 1 chi tiết; không tự tạo.", lines: ["Thiếu dữ liệu gốc trong HSK2.md đoạn Bài 7."] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "你家离公司远吗？", options: ["不远。", "我喜欢鱼。", "生日快乐。"], answer: "不远。", explain: "Câu hỏi dùng 离 để hỏi khoảng cách.", source: "ai" },
      { type: "fill", prompt: "他（ ）在教室学习呢。", answer: "还", explain: "还 biểu thị vẫn đang tiếp diễn.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Nhà tôi cách trường rất xa.", answer: "我家离学校很远。", explain: "A 离 B 很远.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "女：你家离公司远吗？\n男：不远，我每天走路去公司。", prompt: "男的家离公司远吗？", options: ["不远", "很远", "不知道"], answer: "不远", explain: "Script nói 不远。" },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "大卫明天有考试，所以还在教室学习呢。", prompt: "大卫现在在家。", options: ["√", "x"], answer: "x", explain: "Script nói 在教室学习。" },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "我在去机场的路上。", prompt: "我在去（ ）的路上。", answer: "机场", explain: "Từ cần điền là 机场." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：坐公共汽车怎么样？\n男：坐公共汽车太慢了，我们坐出租车吧。", prompt: "男的觉得公共汽车怎么样？", options: ["太慢了", "很快", "不远"], answer: "太慢了", explain: "Script nói 坐公共汽车太慢了。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
