(function () {
  const lesson = {
    id: "lesson03",
    order: 3,
    type: "lesson",
    status: "ready",
    title: "左边那个红色的是我的",
    viTitle: "Cái màu đỏ ở bên trái là của tôi",
    scope: "Bài 3",
    sourceRange: "HSK2.md: sách giáo trình Bài 3 và sách bài tập Bài 3",
    vocabulary: [
      { hanzi: "手表", pinyin: "shǒubiǎo", pos: "Danh từ", meaning: "Đồng hồ đeo tay", example: "这块手表是你的。", examplePinyin: "Zhè kuài shǒubiǎo shì nǐ de.", exampleVi: "Chiếc đồng hồ này là của bạn.", source: "book" },
      { hanzi: "千", pinyin: "qiān", pos: "Số từ", meaning: "Nghìn, ngàn", example: "这块手表一千多块钱。", examplePinyin: "Zhè kuài shǒubiǎo yì qiān duō kuài qián.", exampleVi: "Chiếc đồng hồ này hơn một nghìn tệ.", source: "book" },
      { hanzi: "报纸", pinyin: "bàozhǐ", pos: "Danh từ", meaning: "Báo, tờ báo", example: "桌子上的报纸是昨天的。", examplePinyin: "Zhuōzi shàng de bàozhǐ shì zuótiān de.", exampleVi: "Tờ báo trên bàn là của hôm qua.", source: "book" },
      { hanzi: "送", pinyin: "sòng", pos: "Động từ", meaning: "Giao, đưa, gửi", example: "我要去给他送饭。", examplePinyin: "Wǒ yào qù gěi tā sòng fàn.", exampleVi: "Tôi phải đi đưa cơm cho anh ấy.", source: "book" },
      { hanzi: "一下", pinyin: "yīxià", pos: "Số lượng từ", meaning: "Một chút, thử xem", example: "你休息一下吧。", examplePinyin: "Nǐ xiūxi yíxià ba.", exampleVi: "Bạn nghỉ ngơi một chút đi.", source: "book" },
      { hanzi: "牛奶", pinyin: "niúnǎi", pos: "Danh từ", meaning: "Sữa bò", example: "这是两瓶牛奶。", examplePinyin: "Zhè shì liǎng píng niúnǎi.", exampleVi: "Đây là hai chai sữa bò.", source: "book", exampleSource: "ai" },
      { hanzi: "房间", pinyin: "fángjiān", pos: "Danh từ", meaning: "Phòng", example: "这个房间不是我的。", examplePinyin: "Zhège fángjiān bú shì wǒ de.", exampleVi: "Căn phòng này không phải của tôi.", source: "book" },
      { hanzi: "丈夫", pinyin: "zhàngfu", pos: "Danh từ", meaning: "Chồng", example: "我丈夫在医院呢。", examplePinyin: "Wǒ zhàngfu zài yīyuàn ne.", exampleVi: "Chồng tôi đang ở bệnh viện.", source: "book" },
      { hanzi: "旁边", pinyin: "pángbiān", pos: "Danh từ", meaning: "Bên cạnh", example: "爸爸在桌子旁边看报纸。", examplePinyin: "Bàba zài zhuōzi pángbiān kàn bàozhǐ.", exampleVi: "Bố đang xem báo ở bên cạnh bàn.", source: "book" },
      { hanzi: "真", pinyin: "zhēn", pos: "Phó từ", meaning: "Thật, quả là", example: "今天天气真好！", examplePinyin: "Jīntiān tiānqì zhēn hǎo!", exampleVi: "Hôm nay thời tiết thật đẹp!", source: "book" },
      { hanzi: "粉色", pinyin: "fěnsè", pos: "Danh từ", meaning: "Màu hồng", example: "她喜欢粉色的房间。", examplePinyin: "Tā xǐhuan fěnsè de fángjiān.", exampleVi: "Cô ấy thích căn phòng màu hồng.", source: "book" },
      { hanzi: "颜色", pinyin: "yánsè", pos: "Danh từ", meaning: "Màu, màu sắc", example: "你喜欢哪个颜色的杯子？", examplePinyin: "Nǐ xǐhuan nǎ ge yánsè de bēizi?", exampleVi: "Bạn thích cái cốc màu nào?", source: "book" },
      { hanzi: "左边", pinyin: "zuǒbian", pos: "Danh từ", meaning: "Bên trái", example: "左边那个红色的是我的。", examplePinyin: "Zuǒbian nà ge hóngsè de shì wǒ de.", exampleVi: "Cái màu đỏ ở bên trái là của tôi.", source: "book" },
      { hanzi: "红色", pinyin: "hóngsè", pos: "Danh từ", meaning: "Màu đỏ", example: "左边那个红色的是我的。", examplePinyin: "Zuǒbian nà ge hóngsè de shì wǒ de.", exampleVi: "Cái màu đỏ ở bên trái là của tôi.", source: "book" }
    ],
    grammar: [
      { id: "g1", title: "Cụm từ có 的", structure: "Đại từ/Tính từ/Động từ + 的", explanation: "Dùng 的 để tạo cụm có chức năng như danh từ; danh từ phía sau được lược bỏ khi đã rõ.", examples: [
        { zh: "这本书不是我的。", pinyin: "Zhè běn shū bú shì wǒ de.", vi: "Quyển sách này không phải của tôi." },
        { zh: "这个杯子是昨天买的。", pinyin: "Zhège bēizi shì zuótiān mǎi de.", vi: "Cái ly này là cái mua hôm qua." },
        { zh: "这块手表是你的吗？", pinyin: "Zhè kuài shǒubiǎo shì nǐ de ma?", vi: "Chiếc đồng hồ này là của bạn phải không?" }
      ], source: "book" },
      { id: "g2", title: "Động từ + 一下", structure: "Chủ ngữ + động từ + 一下 (+ tân ngữ)", explanation: "Diễn tả hành động ngắn, làm thử hoặc làm một chút.", examples: [
        { zh: "我看一下。", pinyin: "Wǒ kàn yíxià.", vi: "Tôi xem một chút." },
        { zh: "你休息一下吧。", pinyin: "Nǐ xiūxi yíxià ba.", vi: "Bạn nghỉ một chút đi." },
        { zh: "我问一下老师。", pinyin: "Wǒ wèn yíxià lǎoshī.", vi: "Tôi hỏi giáo viên một chút." }
      ], source: "book" },
      { id: "g3", title: "Phó từ 真", structure: "真 + tính từ", explanation: "Dùng trước tính từ để cảm thán, nghĩa là thật/quả là.", examples: [
        { zh: "你真好！", pinyin: "Nǐ zhēn hǎo!", vi: "Bạn thật tốt!" },
        { zh: "今天天气真好！", pinyin: "Jīntiān tiānqì zhēn hǎo!", vi: "Hôm nay thời tiết thật đẹp!" },
        { zh: "你女儿的房间真漂亮！", pinyin: "Nǐ nǚ'ér de fángjiān zhēn piàoliang!", vi: "Phòng của con gái bạn thật đẹp!" }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "这块（ ）是你的。", answer: "手表", hint: "đồng hồ đeo tay", source: "book" },
        { prompt: "爸爸在桌子（ ）看报纸。", answer: "旁边", hint: "bên cạnh", source: "book" },
        { prompt: "今天的天气（ ）好。", answer: "真", hint: "thật", source: "book" },
        { prompt: "左边那个（ ）的是我的。", answer: "红色", hint: "màu đỏ", source: "book" }
      ],
      listeningChoice: [
        { script: "手表", prompt: "Nghe và chọn từ đúng", answer: "手表", options: ["手表", "报纸", "房间", "牛奶"], source: "ai" },
        { script: "旁边", prompt: "Nghe và chọn từ đúng", answer: "旁边", options: ["左边", "旁边", "红色", "颜色"], source: "ai" },
        { script: "一下", prompt: "Nghe và chọn từ đúng", answer: "一下", options: ["一下", "真", "千", "送"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu có cụm 的 đúng.", options: ["左边那个红色的是我的。", "左边那个红色的我。", "左边那个是我的红色。"], answer: "左边那个红色的是我的。", explain: "红色的 và 我的 đều là cụm có 的 thay cho danh từ đã biết.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "这本书不是我（ ）。", answer: "的", explain: "我的 thay cho 我的书.", source: "ai", grammarId: "g1" },
      { type: "order", prompt: "Sắp xếp thành câu đúng.", pieces: ["我", "看", "一下"], answer: "我看一下", explain: "一下 đặt sau động từ.", source: "book", grammarId: "g2" },
      { type: "choice", prompt: "Chọn câu dùng 一下 đúng.", options: ["你休息一下吧。", "你一下休息吧。", "一下你休息吧。"], answer: "你休息一下吧。", explain: "一下 đứng ngay sau động từ 休息.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "今天天气（ ）好！", answer: "真", explain: "真 đứng trước tính từ 好 để cảm thán.", source: "book", grammarId: "g3" },
      { type: "choice", prompt: "Chọn câu đúng với 真.", options: ["你女儿的房间真漂亮！", "你女儿的房间漂亮真！", "真你女儿的房间漂亮！"], answer: "你女儿的房间真漂亮！", explain: "真 đặt trước tính từ 漂亮.", source: "book", grammarId: "g3" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Màu hồng” là từ nào?", options: ["粉色", "红色", "颜色", "左边"], answer: "粉色", source: "book" },
      { type: "fill", prompt: "我丈夫在医院呢，我要去给他（ ）饭。", answer: "送", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["左边", "那个", "红色的", "是", "我的"], answer: "左边那个红色的是我的", source: "book" },
      { type: "choice", prompt: "Chọn nghĩa đúng của 报纸.", options: ["Báo, tờ báo", "Phòng", "Sữa bò", "Màu sắc"], answer: "Báo, tờ báo", source: "book" }
    ],
    workbook: [
      { id: "wb-read-21-25", title: "Sách bài tập - Đọc Phần 2, Câu 21-25", source: "book", type: "fillChoice", choices: [
        { key: "A", text: "送" }, { key: "B", text: "真" }, { key: "C", text: "一下" }, { key: "D", text: "旁边" }, { key: "E", text: "贵" }, { key: "F", text: "千" }
      ], questions: [
        { id: "21", prompt: "今天的天气（ ）好，我们出去玩儿玩儿吧。", answer: "B" },
        { id: "22", prompt: "我也不知道吃什么，我想（ ）。", answer: "C" },
        { id: "23", prompt: "我丈夫在医院呢，我要去给他（ ）饭。", answer: "A" },
        { id: "24", prompt: "这块手表一（ ）多块钱，我有八百块，你有多少钱？", answer: "F" },
        { id: "25", prompt: "妈妈在做饭呢，爸爸在桌子（ ）看报纸呢。", answer: "D" }
      ] },
      { id: "wb-judge-26-30", title: "Sách bài tập - Đọc Phần 3, Câu 26-30", source: "book", type: "trueFalse", questions: [
        { id: "26", original: "这个房间是丽丽的，她喜欢粉色的房间。", prompt: "丽丽的房间是粉色的。", answer: "√", explain: "Đúng theo câu gốc." },
        { id: "27", original: "桌子上的报纸是昨天的，今天送报纸的没来。", prompt: "桌子上的报纸不是今天的。", answer: "√", explain: "Đúng, báo trên bàn là của hôm qua." },
        { id: "28", original: "你的药在房间里，这是爸爸的。", prompt: "房间里的药是爸爸的。", answer: "√", explain: "Đúng theo dữ liệu HSK2.md." },
        { id: "29", original: "这块手表是昨天买的，我很喜欢。", prompt: "我昨天买了一块手表。", answer: "√", explain: "Đúng, chiếc đồng hồ được mua hôm qua." },
        { id: "30", original: "小王，你喜欢哪个颜色的杯子？给你一个。", prompt: "他要给小王一个红色杯子。", answer: "x", explain: "Sai, câu gốc chỉ hỏi màu yêu thích, không khẳng định màu đỏ." }
      ] },
      { id: "wb-match-31-35", title: "Sách bài tập - Đọc Phần 4, Câu 31-35", source: "book", type: "matchChoice", choices: [
        { key: "A", text: "我不认识前边的那两个人，他们是谁？" }, { key: "B", text: "来了，你休息一下吧，看看报纸，喝喝茶。" }, { key: "C", text: "我想给爸爸买一块手表，你觉得这块怎么样？" }, { key: "D", text: "今天我要给儿子、女儿做早饭，要给丈夫做午饭，还要给朋友们做晚饭。" }, { key: "E", text: "他在哪儿呢？你看见 he 了吗？（例）" }, { key: "F", text: "我的房间太小，住不下两个人。" }
      ], questions: [
        { id: "31", prompt: "做三次饭，真累啊！", answer: "D" },
        { id: "32", prompt: "左边的是王老师，旁边的是张老师。", answer: "A" },
        { id: "33", prompt: "没关系，我去大卫家，他家很大。", answer: "F" },
        { id: "34", prompt: "今天的报纸来了吗？", answer: "B" },
        { id: "35", prompt: "我觉得这块很漂亮。", answer: "C" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập - Nghe Phần 2, Câu 6-10", source: "book", note: "HSK2.md thiếu script/audio/đáp án gốc nên chưa tự chấm.", lines: ["Hình A: Tờ báo và tách trà/cà phê trên bàn.", "Hình B: Hai chiếc áo khoác nỉ có mũ.", "Hình C: Cuốn sách đang mở trên bàn học.", "Hình D: Cô bé đang đá bóng (Hình ví dụ).", "Hình E: Chiếc giường ngủ có ga gối màu hồng.", "Hình F: Hai chai sữa thủy tinh."] },
      { title: "Sách bài tập - Nghe Phần 3, Câu 11-15", source: "book", note: "HSK2.md có lựa chọn nhưng không có script/audio/đáp án gốc. Câu 15 trong nguồn có ký tự lỗi, được giữ ở phần tham khảo.", lines: ["11. A 左边的 | B 旁边的 | C 右边的", "12. A 昨天的 | B 今天的 | C 明天的", "13. A 送饭的 | B 送牛奶的 | C 送报纸的", "14. A 爸爸妈妈的 | B 丽丽的 | C 哥哥的", "15. A 新的 | B 都不是 | C <td>化学"] },
      { title: "Sách bài tập - Đọc Phần 1, Câu 16-20", source: "book", note: "Phần này phụ thuộc hình ảnh, project chưa có bộ hình gốc nên để tham khảo.", lines: ["16. 这几块手表都不是我的。", "17. 你身体不好，多喝水，休息一下吧。", "18. 这个房间不是我的，是丽丽和文文的。", "19. 他骑着车去送报纸。", "20. 前边的这个车是李老师的。"] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "哪个是你的？", options: ["左边那个红色的是我的。", "我每天六点起床。", "他多高？"], answer: "左边那个红色的是我的。", explain: "Dùng cụm 的 để thay cho danh từ đã biết.", source: "ai" },
      { type: "fill", prompt: "你休息（ ）吧。", answer: "一下", explain: "一下 đặt sau động từ.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Hôm nay thời tiết thật đẹp.", answer: "今天天气真好。", explain: "真 + 好 để cảm thán.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "男：哪个杯子是你的？\n女：左边那个红色的是我的。", prompt: "哪个杯子是女的的？", options: ["左边红色的", "旁边粉色的", "昨天买的"], answer: "左边红色的", explain: "Script nói 左边那个红色的是我的。" },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "今天的天气真好，我们出去玩儿玩儿吧。", prompt: "今天的天气不好。", options: ["√", "x"], answer: "x", explain: "Script nói 天气真好。" },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "我想看一下。", prompt: "我想看（ ）。", answer: "一下", explain: "Từ cần điền là 一下." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：妈妈在哪儿？\n男：妈妈在做饭，爸爸在桌子旁边看报纸。", prompt: "爸爸在哪儿看报纸？", options: ["桌子旁边", "房间里", "左边"], answer: "桌子旁边", explain: "Script nói 爸爸在桌子旁边看报纸。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
