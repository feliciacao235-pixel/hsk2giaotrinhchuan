(function () {
  const lesson = {
    id: "lesson05",
    order: 5,
    type: "lesson",
    status: "ready",
    title: "就买这件吧",
    viTitle: "Mua chiếc áo này đi",
    scope: "Bài 5",
    sourceRange: "HSK2.md: sách giáo trình Bài 5 và sách bài tập Bài 5",
    vocabulary: [
      { hanzi: "外面", pinyin: "wàimiàn", pos: "Danh từ", meaning: "Bên ngoài", example: "我们就去外面吃饭吧。", examplePinyin: "Wǒmen jiù qù wàimiàn chīfàn ba.", exampleVi: "Chúng ta ra ngoài ăn cơm đi.", source: "book" },
      { hanzi: "准备", pinyin: "zhǔnbèi", pos: "Động từ", meaning: "Định, dự định", example: "明天再准备吧。", examplePinyin: "Míngtiān zài zhǔnbèi ba.", exampleVi: "Ngày mai hãy chuẩn bị.", source: "book" },
      { hanzi: "就", pinyin: "jiù", pos: "Phó từ", meaning: "Chỉ kết luận hay sự kiện quyết định", example: "你喜欢就买吧。", examplePinyin: "Nǐ xǐhuan jiù mǎi ba.", exampleVi: "Bạn thích thì mua đi.", source: "book" },
      { hanzi: "鱼", pinyin: "yú", pos: "Danh từ", meaning: "Cá, món cá", example: "我会做鱼。", examplePinyin: "Wǒ huì zuò yú.", exampleVi: "Tôi biết làm món cá.", source: "book" },
      { hanzi: "吧", pinyin: "ba", pos: "Trợ từ", meaning: "Dùng cuối câu để thương lượng, đề nghị, thỉnh cầu hay mệnh lệnh", example: "你去买一点儿水果吧。", examplePinyin: "Nǐ qù mǎi yìdiǎnr shuǐguǒ ba.", exampleVi: "Bạn đi mua một ít hoa quả nhé.", source: "book" },
      { hanzi: "件", pinyin: "jiàn", pos: "Lượng từ", meaning: "Cái, chiếc; dùng cho áo", example: "这件衣服有点儿大。", examplePinyin: "Zhè jiàn yīfu yǒudiǎnr dà.", exampleVi: "Chiếc áo này hơi rộng.", source: "book" },
      { hanzi: "还", pinyin: "hái", pos: "Phó từ", meaning: "Cũng, khá", example: "今天的菜还可以。", examplePinyin: "Jīntiān de cài hái kěyǐ.", exampleVi: "Món ăn hôm nay cũng được.", source: "book" },
      { hanzi: "可以", pinyin: "kěyǐ", pos: "Tính từ", meaning: "Không tệ, tạm được", example: "听和说还可以。", examplePinyin: "Tīng hé shuō hái kěyǐ.", exampleVi: "Nghe và nói thì tạm được.", source: "book" },
      { hanzi: "不错", pinyin: "búcuò", pos: "Tính từ", meaning: "Tuyệt, khá tốt", example: "我觉得还不错。", examplePinyin: "Wǒ juéde hái búcuò.", exampleVi: "Tôi thấy cũng khá tốt.", source: "book" },
      { hanzi: "考试", pinyin: "kǎoshì", pos: "Danh từ", meaning: "Cuộc thi, bài kiểm tra", example: "我下午四点考试。", examplePinyin: "Wǒ xiàwǔ sì diǎn kǎoshì.", exampleVi: "Chiều nay 4 giờ tôi thi.", source: "book" },
      { hanzi: "意思", pinyin: "yìsi", pos: "Danh từ", meaning: "Nghĩa, ý nghĩa", example: "这个意思我知道。", examplePinyin: "Zhège yìsi wǒ zhīdào.", exampleVi: "Ý nghĩa này tôi biết.", source: "ai" },
      { hanzi: "咖啡", pinyin: "kāfēi", pos: "Danh từ", meaning: "Cà phê", example: "我中午喝了两杯咖啡。", examplePinyin: "Wǒ zhōngwǔ hē le liǎng bēi kāfēi.", exampleVi: "Buổi trưa tôi đã uống hai cốc cà phê.", source: "book" },
      { hanzi: "对", pinyin: "duì", pos: "Giới từ", meaning: "Đối với, cho", example: "运动对身体很好。", examplePinyin: "Yùndòng duì shēntǐ hěn hǎo.", exampleVi: "Vận động rất tốt cho sức khỏe.", source: "book" },
      { hanzi: "以后", pinyin: "yǐhòu", pos: "Danh từ", meaning: "Sau này, sau khi", example: "考试以后给你打电话。", examplePinyin: "Kǎoshì yǐhòu gěi nǐ dǎ diànhuà.", exampleVi: "Thi xong tôi sẽ gọi điện cho bạn.", source: "book" }
    ],
    grammar: [
      { id: "g1", title: "Phó từ 就", structure: "Hoàn cảnh/điều kiện, 就 + động từ", explanation: "Dùng để đưa ra kết luận hoặc cách xử lý dựa trên điều vừa nói.", examples: [
        { zh: "你不想去，就在家休息吧。", pinyin: "Nǐ bù xiǎng qù, jiù zài jiā xiūxi ba.", vi: "Bạn không muốn đi thì ở nhà nghỉ ngơi đi." },
        { zh: "这儿的咖啡不错，就喝咖啡吧。", pinyin: "Zhèr de kāfēi búcuò, jiù hē kāfēi ba.", vi: "Cà phê ở đây ngon đấy, thì uống cà phê đi." },
        { zh: "就做你爱吃的鱼吧。", pinyin: "Jiù zuò nǐ ài chī de yú ba.", vi: "Thì làm món cá mà anh thích ăn nhé." }
      ], source: "book" },
      { id: "g2", title: "还 + tính từ", structure: "还 + tính từ", explanation: "Nói trạng thái ở mức tạm được, tạm ổn, chấp nhận được.", examples: [
        { zh: "还好。", pinyin: "Hái hǎo.", vi: "Cũng tạm ổn." },
        { zh: "还行，不太大。", pinyin: "Hái xíng, bú tài dà.", vi: "Cũng tạm, không rộng lắm." },
        { zh: "我觉得听和说还可以。", pinyin: "Wǒ juéde tīng hé shuō hái kěyǐ.", vi: "Tôi thấy nghe và nói tạm được." }
      ], source: "book" },
      { id: "g3", title: "有点儿 + tính từ/động từ", structure: "有点儿 + tính từ / động từ", explanation: "Diễn tả mức độ nhẹ, thường mang sắc thái tiêu cực hoặc không hài lòng.", examples: [
        { zh: "今天天气有点儿冷。", pinyin: "Jīntiān tiānqì yǒudiǎnr lěng.", vi: "Thời tiết hôm nay hơi lạnh." },
        { zh: "我昨天有点儿累。", pinyin: "Wǒ zuótiān yǒudiǎnr lèi.", vi: "Hôm qua tôi hơi mệt." },
        { zh: "这件衣服有点儿大。", pinyin: "Zhè jiàn yīfu yǒudiǎnr dà.", vi: "Chiếc áo này hơi rộng." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "你喜欢（ ）买吧。", answer: "就", hint: "thì/liền", source: "book" },
        { prompt: "今天的菜（ ）可以。", answer: "还", hint: "cũng/tạm", source: "book" },
        { prompt: "我下午四点（ ）。", answer: "考试", hint: "thi", source: "book" },
        { prompt: "运动（ ）身体很好。", answer: "对", hint: "đối với", source: "book" }
      ],
      listeningChoice: [
        { script: "咖啡", prompt: "Nghe và chọn từ đúng", answer: "咖啡", options: ["咖啡", "考试", "以后", "外面"], source: "ai" },
        { script: "鱼", prompt: "Nghe và chọn từ đúng", answer: "鱼", options: ["鱼", "吧", "件", "意思"], source: "ai" },
        { script: "准备", prompt: "Nghe và chọn từ đúng", answer: "准备", options: ["准备", "不错", "可以", "对"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu dùng 就 đúng.", options: ["你喜欢就买吧。", "你就喜欢买吧。", "就你喜欢买吧。"], answer: "你喜欢就买吧。", explain: "Điều kiện/hoàn cảnh trước, kết luận sau 就.", source: "book", grammarId: "g1" },
      { type: "order", prompt: "Sắp xếp thành câu đúng.", pieces: ["就", "喝", "咖啡", "吧"], answer: "就喝咖啡吧", explain: "就 đứng trước động từ 喝.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "今天的菜（ ）可以。", answer: "还", explain: "还可以 nghĩa là cũng/tạm được.", source: "book", grammarId: "g2" },
      { type: "choice", prompt: "Chọn câu nói “cũng khá tốt”.", options: ["还不错。", "不错还。", "还不太不错。"], answer: "还不错。", explain: "还 + tính từ.", source: "ai", grammarId: "g2" },
      { type: "fill", prompt: "我中午（ ）累。", answer: "有点儿", explain: "有点儿 + tính từ, thường nói hơi không thoải mái.", source: "book", grammarId: "g3" },
      { type: "choice", prompt: "Chọn câu đúng với 有点儿.", options: ["这件衣服有点儿大。", "这件衣服大有点儿。", "有点儿这件衣服大。"], answer: "这件衣服有点儿大。", explain: "有点儿 đứng trước tính từ 大.", source: "book", grammarId: "g3" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Cà phê” là từ nào?", options: ["咖啡", "考试", "鱼", "外面"], answer: "咖啡", source: "book" },
      { type: "fill", prompt: "考试（ ）给你打电话。", answer: "以后", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["你", "喜欢", "就", "买", "吧"], answer: "你喜欢就买吧", source: "book" },
      { type: "choice", prompt: "Chọn nghĩa đúng của 不错.", options: ["Khá tốt", "Bên ngoài", "Sau này", "Ý nghĩa"], answer: "Khá tốt", source: "book" }
    ],
    workbook: [
      { id: "wb-read-21-25", title: "Sách bài tập - Đọc Phần 2, Câu 21-25", source: "book", type: "fillChoice", choices: [
        { key: "A", text: "就" }, { key: "B", text: "吧" }, { key: "C", text: "还" }, { key: "D", text: "对" }, { key: "E", text: "贵" }, { key: "F", text: "以后" }
      ], questions: [
        { id: "21", prompt: "王方，你去买一点儿水果（ ）。", answer: "B" },
        { id: "22", prompt: "我下午四点考试，考试（ ）给你打电话。", answer: "F" },
        { id: "23", prompt: "我有两本书，你喜欢（ ）送你一本。", answer: "A" },
        { id: "24", prompt: "我太忙了，没时间运动，我知道运动（ ）身体很好。", answer: "D" },
        { id: "25", prompt: "今天的菜（ ）可以，都是我丈夫做的。", answer: "C" }
      ] },
      { id: "wb-judge-26-30", title: "Sách bài tập - Đọc Phần 3, Câu 26-30", source: "book", type: "trueFalse", questions: [
        { id: "26", original: "三百块钱还可以，你喜欢就买吧。", prompt: "她不喜欢这件衣服。", answer: "x", explain: "Sai, câu gốc khuyên nếu thích thì mua." },
        { id: "27", original: "我们一起准备晚饭，你做鱼，我做菜。", prompt: "他们不去外面吃饭。", answer: "√", explain: "Đúng, họ chuẩn bị bữa tối ở nhà." },
        { id: "28", original: "昨天的考试读和写不太好。", prompt: "他在想昨天的考试呢。", answer: "√", explain: "Đúng theo dữ liệu HSK2.md." },
        { id: "29", original: "我中午有点儿累，喝了两杯咖啡。", prompt: "他累的时候喝咖啡。", answer: "√", explain: "Đúng, khi mệt người nói uống cà phê." },
        { id: "30", original: "你少喝一点儿吧，喝多了对身体不好。", prompt: "他的身体不太好。", answer: "x", explain: "Sai, đây là lời khuyên chung, không khẳng định sức khỏe hiện tại." }
      ] },
      { id: "wb-match-31-35", title: "Sách bài tập - Đọc Phần 4, Câu 31-35", source: "book", type: "matchChoice", choices: [
        { key: "A", text: "我今天早上六点起床的，现在有点儿累。" }, { key: "B", text: "你会做什么菜？" }, { key: "C", text: "明天我去公司，不去打球了。" }, { key: "D", text: "昨天的考试你觉得怎么样？" }, { key: "E", text: "他在哪儿呢？你看见 he 了吗？（例）" }, { key: "F", text: "你准备去北京旅游的东西了吗？" }
      ], questions: [
        { id: "31", prompt: "我会做鱼，你爱吃鱼吗？", answer: "B" },
        { id: "32", prompt: "你休息一下吧。", answer: "A" },
        { id: "33", prompt: "我觉得还不错。", answer: "D" },
        { id: "34", prompt: "我们下个星期去，明天再准备吧。", answer: "F" },
        { id: "35", prompt: "好吧，你明天回家以后给我打电话。", answer: "C" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập - Nghe Phần 1, Câu 1-5", source: "book", note: "HSK2.md chỉ có mô tả hình, không có script/audio/đáp án gốc nên chưa tự chấm.", lines: ["Hình 1: Người đàn ông ngồi làm việc bên bàn với máy tính.", "Hình 2: Hai người cùng đi bộ.", "Hình 3: Người phụ nữ cầm cốc uống trà/cà phê.", "Hình 4: Bé gái đang dùng thìa ăn uống.", "Hình 5: Tủ quần áo treo comple và áo sơ mi."] },
      { title: "Sách bài tập - Nghe Phần 2, Câu 6-10", source: "book", note: "Thiếu script/audio/đáp án gốc.", lines: ["Hình A: Hai vợ chồng lớn tuổi đang trò chuyện.", "Hình B: Cặp nam nữ chuẩn bị nấu ăn.", "Hình C: Hai người đang đi dạo.", "Hình D: Cô bé đá bóng (ví dụ).", "Hình E: Đôi nam nữ nói chuyện ngoài trời.", "Hình F: Ba chiếc cốc nhỏ và bình nước/sữa."] },
      { title: "Sách bài tập - Nghe Phần 3, Câu 11-15", source: "book", note: "Có lựa chọn nhưng thiếu script/audio/đáp án gốc.", lines: ["11. A 外面 | B 咖啡馆 | C 书店", "12. A 鱼 | B 都爱吃 | C 晚饭", "13. A 他儿子不喜欢 | B 椅子有点儿高 | C 一百块钱", "14. A 读和写还不错 | B 说和写还不错 | C 听和说还不错", "15. A 一个 | B 不吃 | C 很多"] },
      { title: "Sách bài tập - Đọc Phần 1, Câu 16-20", source: "book", note: "Phần này phụ thuộc hình ảnh, project chưa có bộ hình gốc nên để tham khảo.", lines: ["16. 今天是爸爸的生日，我们就去外面吃饭吧。", "17. 妈妈做了你最爱吃的菜。", "18. 我有点儿累，休息一下。", "19. 他这几天要准备考试，我没给他打电话。", "20. 我不喝了，我已经喝了三杯了。"] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "这儿的咖啡不错，怎么办？", options: ["就喝咖啡吧。", "他多高？", "我在教室。"], answer: "就喝咖啡吧。", explain: "Dùng 就 để đưa ra quyết định.", source: "ai" },
      { type: "fill", prompt: "这件衣服（ ）大。", answer: "有点儿", explain: "有点儿 + tính từ.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Thi xong tôi gọi điện cho bạn.", answer: "考试以后给你打电话。", explain: "以后 nghĩa là sau khi/sau này.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "女：这儿的咖啡不错。\n男：就喝咖啡吧。", prompt: "他们喝什么？", options: ["咖啡", "鱼", "水"], answer: "咖啡", explain: "Script nói 就喝咖啡吧。" },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "我中午有点儿累，喝了两杯咖啡。", prompt: "他中午有点儿累。", options: ["√", "x"], answer: "√", explain: "Script nói 有点儿累。" },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "今天的菜还可以。", prompt: "今天的菜（ ）可以。", answer: "还", explain: "Từ cần điền là 还." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：你下午做什么？\n男：我下午四点考试。", prompt: "男的下午几点考试？", options: ["四点", "六点", "十点"], answer: "四点", explain: "Script nói 下午四点考试。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
