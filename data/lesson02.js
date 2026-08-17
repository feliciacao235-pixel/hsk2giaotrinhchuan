(function () {
  const lesson = {
    id: "lesson02",
    order: 2,
    type: "lesson",
    status: "ready",
    title: "我每天六点起床",
    viTitle: "Hàng ngày tôi thức dậy lúc 6 giờ",
    scope: "Bài 2",
    sourceRange: "HSK2.md: sách giáo trình Bài 2 và sách bài tập Bài 2",
    vocabulary: [
      { hanzi: "生病", pinyin: "shēng bìng", pos: "Động từ", meaning: "Sinh bệnh, bị bệnh, bị ốm", example: "我的小猫生病了。", examplePinyin: "Wǒ de xiǎomāo shēngbìng le.", exampleVi: "Con mèo của tôi bị ốm rồi.", source: "book" },
      { hanzi: "每", pinyin: "měi", pos: "Đại từ", meaning: "Mỗi", example: "我每天六点起床。", examplePinyin: "Wǒ měi tiān liù diǎn qǐchuáng.", exampleVi: "Hàng ngày tôi thức dậy lúc 6 giờ.", source: "book" },
      { hanzi: "早上", pinyin: "zǎoshang", pos: "Danh từ", meaning: "Buổi sáng", example: "妈妈每天早上七点前起床。", examplePinyin: "Māma měi tiān zǎoshang qī diǎn qián qǐchuáng.", exampleVi: "Mẹ mỗi sáng thức dậy trước bảy giờ.", source: "book" },
      { hanzi: "跑步", pinyin: "pǎobù", pos: "Động từ", meaning: "Chạy bộ", example: "我每天下午和同学一起去跑步。", examplePinyin: "Wǒ měi tiān xiàwǔ hé tóngxué yìqǐ qù pǎobù.", exampleVi: "Mỗi buổi chiều tôi cùng bạn học đi chạy bộ.", source: "book" },
      { hanzi: "起床", pinyin: "qǐchuáng", pos: "Động từ", meaning: "Thức dậy", example: "我每天六点起床。", examplePinyin: "Wǒ měi tiān liù diǎn qǐchuáng.", exampleVi: "Hàng ngày tôi thức dậy lúc 6 giờ.", source: "book" },
      { hanzi: "药", pinyin: "yào", pos: "Danh từ", meaning: "Thuốc", example: "这是一个星期的药，每天早上吃。", examplePinyin: "Zhè shì yí ge xīngqī de yào, měi tiān zǎoshang chī.", exampleVi: "Đây là thuốc của một tuần, mỗi sáng đều uống.", source: "book" },
      { hanzi: "身体", pinyin: "shēntǐ", pos: "Danh từ", meaning: "Sức khỏe, cơ thể", example: "我的身体好多了。", examplePinyin: "Wǒ de shēntǐ hǎo duō le.", exampleVi: "Sức khỏe của tôi đỡ nhiều rồi.", source: "book" },
      { hanzi: "出院", pinyin: "chūyuàn", pos: "Động từ", meaning: "Xuất viện", example: "明天能出院。", examplePinyin: "Míngtiān néng chūyuàn.", exampleVi: "Ngày mai có thể xuất viện.", source: "book" },
      { hanzi: "出", pinyin: "chū", pos: "Động từ", meaning: "Ra, ra ngoài", example: "下午四点出去买东西了。", examplePinyin: "Xiàwǔ sì diǎn chūqù mǎi dōngxi le.", exampleVi: "Bốn giờ chiều ra ngoài mua đồ rồi.", source: "book" },
      { hanzi: "高", pinyin: "gāo", pos: "Tính từ", meaning: "Cao", example: "他多高？", examplePinyin: "Tā duō gāo?", exampleVi: "Anh ấy cao bao nhiêu?", source: "book" },
      { hanzi: "米", pinyin: "mǐ", pos: "Lượng từ", meaning: "Mét", example: "他儿子一米七。", examplePinyin: "Tā érzi yì mǐ qī.", exampleVi: "Con trai ông ấy cao 1m70.", source: "book" },
      { hanzi: "知道", pinyin: "zhīdào", pos: "Động từ", meaning: "Biết", example: "我也不知道北京的天气。", examplePinyin: "Wǒ yě bù zhīdào Běijīng de tiānqì.", exampleVi: "Tôi cũng không biết thời tiết Bắc Kinh thế nào.", source: "book" },
      { hanzi: "休息", pinyin: "xiūxi", pos: "Động từ", meaning: "Nghỉ ngơi", example: "星期六也不休息。", examplePinyin: "Xīngqīliù yě bù xiūxi.", exampleVi: "Thứ bảy cũng không nghỉ ngơi.", source: "book" },
      { hanzi: "忙", pinyin: "máng", pos: "Tính từ", meaning: "Bận", example: "爸爸每天工作很忙。", examplePinyin: "Bàba měi tiān gōngzuò hěn máng.", exampleVi: "Bố mỗi ngày công việc rất bận.", source: "book" },
      { hanzi: "时间", pinyin: "shíjiān", pos: "Danh từ", meaning: "Thời gian", example: "我没时间去看电影。", examplePinyin: "Wǒ méi shíjiān qù kàn diànyǐng.", exampleVi: "Tôi không có thời gian đi xem phim.", source: "book" }
    ],
    grammar: [
      { id: "g1", title: "Câu hỏi 是不是", structure: "Chủ ngữ + 是不是 + vị ngữ? / 是不是 + mệnh đề? / Mệnh đề, 是不是?", explanation: "Dùng để xác nhận lại điều người nói phỏng đoán là đúng.", examples: [
        { zh: "你很少生病，是不是喜欢运动？", pinyin: "Nǐ hěn shǎo shēngbìng, shì bu shì xǐhuan yùndòng?", vi: "Bạn ít khi bị bệnh, có phải là thích thể thao không?" },
        { zh: "是不是明天爸爸休息？", pinyin: "Shì bu shì míngtiān bàba xiūxi?", vi: "Có phải ngày mai bố được nghỉ không?" },
        { zh: "我们星期一去北京，是不是？", pinyin: "Wǒmen xīngqīyī qù Běijīng, shì bu shì?", vi: "Chúng ta thứ Hai đi Bắc Kinh, có phải không?" }
      ], source: "book" },
      { id: "g2", title: "Đại từ 每", structure: "每 + lượng từ (+ danh từ) + 都 + hành động/tính chất", explanation: "Nói mỗi/từng cá thể trong một nhóm; trong câu thường có 都 để nhấn mạnh tính toàn thể.", examples: [
        { zh: "山姆每年都去中国旅游。", pinyin: "Shānmǔ měi nián dōu qù Zhōngguó lǚyóu.", vi: "Sam năm nào cũng đi Trung Quốc du lịch." },
        { zh: "你每个星期六都工作吗？", pinyin: "Nǐ měi ge xīngqīliù dōu gōngzuò ma?", vi: "Thứ Bảy tuần nào bạn cũng làm việc à?" },
        { zh: "我每天六点起床。", pinyin: "Wǒ měi tiān liù diǎn qǐchuáng.", vi: "Hàng ngày tôi thức dậy lúc 6 giờ." }
      ], source: "book" },
      { id: "g3", title: "Câu hỏi 多 + tính từ", structure: "Chủ ngữ + 多 + tính từ?", explanation: "Dùng 多 trước tính từ như 大, 高 để hỏi mức độ; câu trả lời cần số lượng cụ thể.", examples: [
        { zh: "你多大？", pinyin: "Nǐ duō dà?", vi: "Bạn bao nhiêu tuổi?" },
        { zh: "王医生的儿子多高？", pinyin: "Wáng yīshēng de érzi duō gāo?", vi: "Con trai bác sĩ Vương cao bao nhiêu?" },
        { zh: "他多高？一米八几。", pinyin: "Tā duō gāo? Yì mǐ bā jǐ.", vi: "Anh ấy cao bao nhiêu? Hơn 1m80." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "我每天六点（ ）。", answer: "起床", hint: "thức dậy", source: "book" },
        { prompt: "我每天下午和同学一起去（ ）。", answer: "跑步", hint: "chạy bộ", source: "book" },
        { prompt: "对不起，我很（ ）。", answer: "忙", hint: "bận", source: "book" },
        { prompt: "我的小猫（ ）了。", answer: "生病", hint: "bị ốm", source: "book" }
      ],
      listeningChoice: [
        { script: "起床", prompt: "Nghe và chọn từ đúng", answer: "起床", options: ["起床", "跑步", "休息", "知道"], source: "ai" },
        { script: "身体", prompt: "Nghe và chọn từ đúng", answer: "身体", options: ["身体", "时间", "早上", "药"], source: "ai" },
        { script: "生病", prompt: "Nghe và chọn từ đúng", answer: "生病", options: ["生病", "出院", "高", "米"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu dùng 是不是 đúng.", options: ["你是不是喜欢运动？", "你喜欢是不是运动？", "是不是你吗喜欢运动？"], answer: "你是不是喜欢运动？", explain: "是不是 có thể đứng trước vị ngữ để xác nhận lại thông tin.", source: "ai", grammarId: "g1" },
      { type: "order", prompt: "Sắp xếp thành câu đúng.", pieces: ["是不是", "明天", "爸爸", "休息"], answer: "是不是明天爸爸休息", explain: "是不是 có thể đứng ở đầu câu.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "我（ ）天六点起床。", answer: "每", explain: "每天 nghĩa là mỗi ngày/hàng ngày.", source: "book", grammarId: "g2" },
      { type: "choice", prompt: "Chọn câu đúng với 每.", options: ["你每个星期六都工作吗？", "你每星期六个都工作吗？", "你都每个星期六工作吗？"], answer: "你每个星期六都工作吗？", explain: "每 + lượng từ/danh từ, trong câu thường có 都.", source: "book", grammarId: "g2" },
      { type: "choice", prompt: "Chọn câu hỏi đúng để hỏi chiều cao.", options: ["他多高？", "他多少高？", "他高多？"], answer: "他多高？", explain: "多 đứng trước tính từ 高.", source: "book", grammarId: "g3" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Anh ấy cao bao nhiêu?", answer: "他多高？", explain: "Dùng 多 + 高 để hỏi chiều cao.", source: "ai", grammarId: "g3" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Thức dậy” là từ nào?", options: ["起床", "跑步", "药", "休息"], answer: "起床", source: "book" },
      { type: "fill", prompt: "他不在家，下午四点（ ）买东西了。", answer: "出去", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["我", "每天", "六点", "起床"], answer: "我每天六点起床", source: "book" },
      { type: "choice", prompt: "Chọn nghĩa đúng của 身体.", options: ["Sức khỏe, cơ thể", "Thời gian", "Thuốc", "Buổi sáng"], answer: "Sức khỏe, cơ thể", source: "book" }
    ],
    workbook: [
      { id: "wb-read-21-25", title: "Sách bài tập - Đọc Phần 2, Câu 21-25", source: "book", type: "fillChoice", choices: [
        { key: "A", text: "出去", vi: "ra ngoài" }, { key: "B", text: "每", vi: "mỗi" }, { key: "C", text: "忙", vi: "bận" }, { key: "D", text: "知道", vi: "biết" }, { key: "E", text: "贵", vi: "đắt" }, { key: "F", text: "生病", vi: "bị ốm" }
      ], questions: [
        { id: "21", prompt: "我们（ ）个星期六都工作。", vi: "Chúng tôi ___ thứ bảy đều làm việc.", answer: "B" },
        { id: "22", prompt: "对不起，我很（ ），没时间去看电影。", vi: "Xin lỗi, tôi rất ___, không có thời gian đi xem phim.", answer: "C" },
        { id: "23", prompt: "他不在家，下午四点（ ）买东西了。", vi: "Anh ấy không ở nhà, bốn giờ chiều ___ mua đồ rồi.", answer: "A" },
        { id: "24", prompt: "我的小猫不想吃东西，我觉得它（ ）了。", vi: "Con mèo của tôi không muốn ăn gì, tôi nghĩ nó ___ rồi.", answer: "F" },
        { id: "25", prompt: "我也不（ ）北京的天气，你问问小李，他是北京人。", vi: "Tôi cũng không ___ thời tiết Bắc Kinh thế nào.", answer: "D" }
      ] },
      { id: "wb-judge-26-30", title: "Sách bài tập - Đọc Phần 3, Câu 26-30", source: "book", type: "trueFalse", questions: [
        { id: "26", original: "医生说我要住两天院，明天能出院。", prompt: "我今天不能出院。", answer: "√", explain: "Đúng, vì ngày mai mới được xuất viện." },
        { id: "27", original: "我的小猫生病了，你知道去哪个医院好吗？", prompt: "我的小猫现在好多了。", answer: "x", explain: "Sai, vì con mèo hiện tại đang ốm." },
        { id: "28", original: "你星期天也去学校吗？太忙了！", prompt: "他星期天不休息。", answer: "√", explain: "Đúng, chủ nhật cũng đến trường tức là không nghỉ." },
        { id: "29", original: "这个药每天中午吃，晚饭后不要吃。", prompt: "每天晚饭后吃药。", answer: "x", explain: "Sai, thuốc uống buổi trưa, không uống sau bữa tối." },
        { id: "30", original: "我儿子不太高，他今年十四岁，一米五几。", prompt: "他儿子今年十多岁。", answer: "√", explain: "Đúng, mười bốn tuổi là mười mấy tuổi." }
      ] },
      { id: "wb-match-31-35", title: "Sách bài tập - Đọc Phần 4, Câu 31-35", source: "book", type: "matchChoice", choices: [
        { key: "A", text: "他儿子今年八岁了。" }, { key: "B", text: "星期六也不休息，你工作累不累？" }, { key: "C", text: "我不喜欢早上运动，我喜欢下午和朋友一起踢足球。" }, { key: "D", text: "医生说他不能出院。" }, { key: "E", text: "他在哪儿呢？你看见 he 了吗？（例）" }, { key: "F", text: "你每天什么时候睡觉？" }
      ], questions: [
        { id: "31", prompt: "什么？已经三天了，为什么？", answer: "D" },
        { id: "32", prompt: "我也不喜欢，我早上没时间。", answer: "C" },
        { id: "33", prompt: "是啊，已经一米四了。", answer: "A" },
        { id: "34", prompt: "没关系，星期天我有不少时间休息。", answer: "B" },
        { id: "35", prompt: "九点多吧，很早。我早上起床也很早。", answer: "F" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập - Nghe Phần 1, Câu 1-5", source: "book", note: "HSK2.md chỉ có mô tả hình, không có script/audio/đáp án gốc nên chưa tự chấm.", lines: ["Hình 1: Bệnh nhân đang nằm viện và bác sĩ đang khám bệnh.", "Hình 2: Hai người lớn tuổi đang ngồi ăn sáng và uống trà/cà phê cùng nhau.", "Hình 3: Chụp cận cảnh một chiếc đồng hồ đeo tay.", "Hình 4: Một người đang hắt hơi, sụt sịt mũi vì bị ốm.", "Hình 5: Một người đang nằm ngủ nướng trên giường, bên cạnh là chiếc đồng hồ báo thức."] },
      { title: "Sách bài tập - Nghe Phần 2, Câu 6-10", source: "book", note: "HSK2.md thiếu script/audio/đáp án gốc.", lines: ["Hình A: Bé gái đang đo chiều cao cạnh thước đo trên tường.", "Hình B: Bác sĩ đang đưa thuốc và dặn dò bệnh nhân.", "Hình C: Cô gái đang đứng tìm và đọc sách trong thư viện.", "Hình D: Một người đang đá bóng (Hình ví dụ).", "Hình E: Cô gái trẻ đeo túi xách chuẩn bị đi ra ngoài.", "Hình F: Ông cụ đang đi bộ tập thể dục ngoài trời."] },
      { title: "Sách bài tập - Nghe Phần 3, Câu 11-15", source: "book", note: "HSK2.md có lựa chọn nhưng không có script/audio/đáp án gốc.", lines: ["11. A 能 | B 不能 | C 不知道", "12. A 六点多 | B 七点多 | C 十点多", "13. A 不累 | B 很累 | C 累", "14. A 工作了 | B 在学习 | C 在找工作", "15. A 去医院了 | B 病了 | C 身体好多了"] },
      { title: "Sách bài tập - Đọc Phần 1, Câu 16-20", source: "book", note: "HSK2.md yêu cầu chọn hình nhưng không có bộ hình trong project.", lines: ["16. 麦克先生最不喜欢住院。", "17. 爸爸每天工作很忙，星期六也不休息。", "18. 我每天下午和同学一起去跑步。", "19. 这是一个星期的药，每天早上吃。", "20. 妈妈每天早上七点前起床。"] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "是不是明天爸爸休息？", options: ["是，明天爸爸休息。", "他多高？", "我每天六点。"], answer: "是，明天爸爸休息。", explain: "Câu hỏi 是不是 dùng để xác nhận.", source: "ai" },
      { type: "fill", prompt: "我（ ）天早上跑步。", answer: "每", explain: "每 + 天 = mỗi ngày.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Tôi không biết.", answer: "我不知道。", explain: "知道 là biết; 不知道 là không biết.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "女：你每天几点起床？\n男：我每天六点起床。", prompt: "男的每天几点起床？", options: ["六点", "七点", "十点"], answer: "六点", explain: "Script nói 我每天六点起床。" },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "爸爸每天工作很忙，星期六也不休息。", prompt: "爸爸星期六休息。", options: ["√", "x"], answer: "x", explain: "Script nói 星期六也不休息。" },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "我的小猫生病了。", prompt: "我的小猫（ ）了。", answer: "生病", explain: "Từ cần điền là 生病." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：他多高？\n男：一米七。", prompt: "他多高？", options: ["一米七", "十四岁", "六点多"], answer: "一米七", explain: "Script trả lời 一米七。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
