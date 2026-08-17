(function () {
  const lesson = {
    id: "lesson06",
    order: 6,
    type: "lesson",
    status: "ready",
    title: "你怎么不吃了",
    viTitle: "Sao anh không ăn nữa?",
    scope: "Bài 6",
    sourceRange: "HSK2.md: sách giáo trình Bài 6 và sách bài tập Bài 6",
    vocabulary: [
      { hanzi: "门", pinyin: "mén", pos: "Danh từ", meaning: "Cửa, cổng", example: "我在门外看见小王的自行车了。", examplePinyin: "Wǒ zài mén wài kànjiàn Xiǎo Wáng de zìxíngchē le.", exampleVi: "Tôi nhìn thấy xe đạp của Tiểu Vương ở ngoài cửa rồi.", source: "book" },
      { hanzi: "外", pinyin: "wài", pos: "Danh từ", meaning: "Bên ngoài", example: "门外有一辆自行车。", examplePinyin: "Mén wài yǒu yí liàng zìxíngchē.", exampleVi: "Ngoài cửa có một chiếc xe đạp.", source: "ai" },
      { hanzi: "自行车", pinyin: "zìxíngchē", pos: "Danh từ", meaning: "Xe đạp", example: "我看见小王的自行车了。", examplePinyin: "Wǒ kànjiàn Xiǎo Wáng de zìxíngchē le.", exampleVi: "Tôi nhìn thấy xe đạp của Tiểu Vương rồi.", source: "book" },
      { hanzi: "羊肉", pinyin: "yángròu", pos: "Danh từ", meaning: "Thịt dê, thịt cừu", example: "这个星期天天吃羊肉。", examplePinyin: "Zhège xīngqī tiāntiān chī yángròu.", exampleVi: "Tuần này ngày nào cũng ăn thịt cừu.", source: "book" },
      { hanzi: "好吃", pinyin: "hǎochī", pos: "Tính từ", meaning: "Ngon", example: "羊肉很好吃。", examplePinyin: "Yángròu hěn hǎochī.", exampleVi: "Thịt cừu rất ngon.", source: "ai" },
      { hanzi: "面条", pinyin: "miàntiáo", pos: "Danh từ", meaning: "Mì sợi", example: "我想来点儿面条。", examplePinyin: "Wǒ xiǎng lái diǎnr miàntiáo.", exampleVi: "Tôi muốn ăn chút mì.", source: "book" },
      { hanzi: "打篮球", pinyin: "dǎ lánqiú", pos: "Cụm động từ", meaning: "Chơi bóng rổ", example: "我们都没去打篮球。", examplePinyin: "Wǒmen dōu méi qù dǎ lánqiú.", exampleVi: "Chúng tôi đều không đi chơi bóng rổ.", source: "book" },
      { hanzi: "因为", pinyin: "yīnwèi", pos: "Liên từ", meaning: "Bởi vì", example: "因为昨天下雨，所以我们都没去。", examplePinyin: "Yīnwèi zuótiān xiàyǔ, suǒyǐ wǒmen dōu méi qù.", exampleVi: "Vì hôm qua trời mưa nên chúng tôi đều không đi.", source: "book", sourceNote: "HSK2.md ghi mục từ là “静态/因为”, giữ nghĩa mục tiêu là 因为." },
      { hanzi: "所以", pinyin: "suǒyǐ", pos: "Liên từ", meaning: "Cho nên", example: "因为工作很忙，所以我没有时间运动。", examplePinyin: "Yīnwèi gōngzuò hěn máng, suǒyǐ wǒ méiyǒu shíjiān yùndòng.", exampleVi: "Vì công việc rất bận nên tôi không có thời gian vận động.", source: "book" },
      { hanzi: "游泳", pinyin: "yóu yǒng", pos: "Động từ", meaning: "Bơi, bơi lội", example: "我喜欢游泳。", examplePinyin: "Wǒ xǐhuan yóuyǒng.", exampleVi: "Tôi thích bơi.", source: "ai" },
      { hanzi: "经常", pinyin: "jīngcháng", pos: "Phó từ", meaning: "Thường xuyên", example: "我经常跟同学们一起学习汉语。", examplePinyin: "Wǒ jīngcháng gēn tóngxuémen yìqǐ xuéxí Hànyǔ.", exampleVi: "Tôi thường xuyên cùng các bạn học tiếng Trung.", source: "book" },
      { hanzi: "公斤", pinyin: "gōngjīn", pos: "Lượng từ", meaning: "Kilôgam", example: "现在五十公斤了。", examplePinyin: "Xiànzài wǔshí gōngjīn le.", exampleVi: "Bây giờ 50 kg rồi.", source: "book" },
      { hanzi: "姐姐", pinyin: "jiějie", pos: "Danh từ", meaning: "Chị gái", example: "小王去北京看他姐姐了。", examplePinyin: "Xiǎo Wáng qù Běijīng kàn tā jiějie le.", exampleVi: "Tiểu Vương đi Bắc Kinh thăm chị gái rồi.", source: "book" }
    ],
    grammar: [
      { id: "g1", title: "Đại từ nghi vấn 怎么", structure: "怎么 + động từ / tính từ", explanation: "Dùng để hỏi nguyên nhân, thường mang sắc thái ngạc nhiên.", examples: [
        { zh: "你怎么不高兴？", pinyin: "Nǐ zěnme bù gāoxìng?", vi: "Sao bạn lại không vui thế?" },
        { zh: "今天怎么这么热？", pinyin: "Jīntiān zěnme zhème rè?", vi: "Hôm nay sao mà nóng thế?" },
        { zh: "昨天你们怎么都没去打篮球？", pinyin: "Zuótiān nǐmen zěnme dōu méi qù dǎ lánqiú?", vi: "Hôm qua sao các anh đều không đi chơi bóng rổ?" }
      ], source: "book" },
      { id: "g2", title: "Lặp lại lượng từ", structure: "Lượng từ dạng AA + 都", explanation: "Lượng từ lặp lại mang nghĩa mỗi một/tất cả mọi, thường đi với 都.", examples: [
        { zh: "同学们个个都很高兴。", pinyin: "Tóngxuémen gè ge dōu hěn gāoxìng.", vi: "Các bạn học sinh ai nấy đều rất vui." },
        { zh: "这个商店的衣服件件都很漂亮。", pinyin: "Zhège shāngdiàn de yīfu jiàn jiàn dōu hěn piàoliang.", vi: "Quần áo ở cửa hàng này chiếc nào cũng đẹp." },
        { zh: "这个星期我天天都吃羊肉。", pinyin: "Zhège xīngqī wǒ tiāntiān dōu chī yángròu.", vi: "Tuần này ngày nào tôi cũng ăn thịt cừu." }
      ], source: "book" },
      { id: "g3", title: "因为……所以……", structure: "因为 + nguyên nhân, 所以 + kết quả", explanation: "Nối hai vế câu có quan hệ nguyên nhân - kết quả; có thể dùng đủ cặp hoặc lược bớt một từ.", examples: [
        { zh: "因为她生病了，所以没去学校。", pinyin: "Yīnwèi tā shēngbìng le, suǒyǐ méi qù xuéxiào.", vi: "Vì cô ấy bị ốm nên không đến trường." },
        { zh: "因为他每天跑步，所以身体很好。", pinyin: "Yīnwèi tā měi tiān pǎobù, suǒyǐ shēntǐ hěn hǎo.", vi: "Vì anh ấy chạy bộ mỗi ngày nên sức khỏe rất tốt." },
        { zh: "因为昨天下雨，所以我们都没去。", pinyin: "Yīnwèi zuótiān xiàyǔ, suǒyǐ wǒmen dōu méi qù.", vi: "Vì hôm qua trời mưa nên chúng tôi đều không đi." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "我在门外看见小王的（ ）了。", answer: "自行车", hint: "xe đạp", source: "book" },
        { prompt: "天天吃（ ），我想吃鱼了。", answer: "羊肉", hint: "thịt cừu", source: "book" },
        { prompt: "昨天下雨了，所以我们都没去（ ）篮球。", answer: "打", hint: "chơi/đánh", source: "book" },
        { prompt: "我（ ）跟同学们一起学习汉语。", answer: "经常", hint: "thường xuyên", source: "book" }
      ],
      listeningChoice: [
        { script: "自行车", prompt: "Nghe và chọn từ đúng", answer: "自行车", options: ["自行车", "面条", "羊肉", "公斤"], source: "ai" },
        { script: "因为", prompt: "Nghe và chọn từ đúng", answer: "因为", options: ["因为", "所以", "经常", "姐姐"], source: "ai" },
        { script: "游泳", prompt: "Nghe và chọn từ đúng", answer: "游泳", options: ["游泳", "打篮球", "好吃", "门"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu hỏi nguyên nhân đúng.", options: ["你怎么不高兴？", "你不怎么高兴？", "怎么你吗高兴？"], answer: "你怎么不高兴？", explain: "怎么 đứng trước động/tính từ để hỏi nguyên nhân.", source: "book", grammarId: "g1" },
      { type: "order", prompt: "Sắp xếp thành câu đúng.", pieces: ["今天", "怎么", "这么", "热"], answer: "今天怎么这么热", explain: "怎么 đứng trước cụm trạng thái 这么热.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "这个商店的衣服（ ）都很漂亮。", answer: "件件", explain: "Lượng từ 件 lặp lại thành 件件.", source: "book", grammarId: "g2" },
      { type: "choice", prompt: "Chọn câu có lặp lượng từ đúng.", options: ["同学们个个都很高兴。", "同学们个都个很高兴。", "同学们都个个很高兴吗。"], answer: "同学们个个都很高兴。", explain: "AA thường đi với 都.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "（ ）工作很忙，所以我没有时间运动。", answer: "因为", explain: "因为 nêu nguyên nhân.", source: "book", grammarId: "g3" },
      { type: "choice", prompt: "Chọn câu nhân quả đúng.", options: ["因为昨天下雨，所以我们都没去。", "所以昨天下雨，因为我们都没去。", "因为所以昨天下雨我们都没去。"], answer: "因为昨天下雨，所以我们都没去。", explain: "因为 đặt trước nguyên nhân, 所以 đặt trước kết quả.", source: "book", grammarId: "g3" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Xe đạp” là từ nào?", options: ["自行车", "面条", "公斤", "门"], answer: "自行车", source: "book" },
      { type: "fill", prompt: "这个星期天天吃（ ），我想吃鱼了。", answer: "羊肉", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["因为", "昨天下雨", "所以", "我们", "都没去"], answer: "因为昨天下雨所以我们都没去", source: "book" },
      { type: "choice", prompt: "Chọn nghĩa đúng của 经常.", options: ["Thường xuyên", "Bơi", "Chị gái", "Kilôgam"], answer: "Thường xuyên", source: "book" }
    ],
    workbook: [
      { id: "wb-read-21-25", title: "Sách bài tập - Đọc Phần 2, Câu 21-25", source: "book", type: "fillChoice", choices: [
        { key: "A", text: "件件" }, { key: "B", text: "因为" }, { key: "C", text: "打" }, { key: "D", text: "经常" }, { key: "E", text: "贵" }, { key: "F", text: "公斤" }
      ], questions: [
        { id: "21", prompt: "昨天下雨了，所以我们都没去（ ）篮球。", answer: "C" },
        { id: "22", prompt: "这家商店的衣服（ ）都漂亮。", answer: "A" },
        { id: "23", prompt: "我（ ）跟同学们一起学习汉语。", answer: "D" },
        { id: "24", prompt: "（ ）工作很忙，所以我没有时间运动。", answer: "B" },
        { id: "25", prompt: "你 know 一（ ）苹果 多少 钱 吗？", answer: "F", explain: "Nguồn HSK2.md có chữ lẫn tiếng Anh “know”; giữ nguyên câu nguồn." }
      ] },
      { id: "wb-judge-26-30", title: "Sách bài tập - Đọc Phần 3, Câu 26-30", source: "book", type: "trueFalse", questions: [
        { id: "26", original: "我在门外看见小王的自行车了。", prompt: "小王来了，我看见 he 了。", answer: "x", explain: "Sai, chỉ nhìn thấy xe đạp, chưa thấy người. Nguồn có chữ “he”." },
        { id: "27", original: "天天吃羊肉，有鸡蛋面条吗？", prompt: "我不想吃羊肉了。", answer: "√", explain: "Đúng, người nói đã ngán ăn thịt cừu." },
        { id: "28", original: "因为昨天下雨，所以我们都没去打篮球。", prompt: "昨天天气不好。", answer: "√", explain: "Đúng, vì trời mưa." },
        { id: "29", original: "听说小王去北京看他姐姐了，所以没来学校。", prompt: "小王现在在北京呢。", answer: "√", explain: "Đúng theo dữ liệu HSK2.md." },
        { id: "30", original: "爸爸在医院工作，他每天都很忙，所以很少有时间休息。", prompt: "爸爸是大夫，他在医院工作。", answer: "√", explain: "Đúng theo đáp án ghi trong HSK2.md." }
      ] },
      { id: "wb-match-31-35", title: "Sách bài tập - Đọc Phần 4, Câu 31-35", source: "book", type: "matchChoice", choices: [
        { key: "A", text: "是啊，下雨了。" }, { key: "B", text: "他已经来了，你没看见吗？" }, { key: "C", text: "他今天身体不太好。" }, { key: "D", text: "天天吃米饭，我想来点儿面条。" }, { key: "E", text: "他在教室里学习。（例）" }, { key: "F", text: "昨天下午下雨了。" }
      ], questions: [
        { id: "31", prompt: "小王今天怎么没来学校？", answer: "C" },
        { id: "32", prompt: "你们昨天怎么没去打篮球？", answer: "F" },
        { id: "33", prompt: "大卫什么时候来学校？", answer: "B" },
        { id: "34", prompt: "你还想吃什么？", answer: "D" },
        { id: "35", prompt: "今天天气很冷。", answer: "A" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập - Nghe Phần 1, Câu 1-5", source: "book", note: "HSK2.md chỉ có mô tả hình, không có script/audio/đáp án gốc nên chưa tự chấm.", lines: ["Hình 1: Đĩa hải sản/cua luộc.", "Hình 2: Bát cơm trắng.", "Hình 3: Cánh cửa phòng màu trắng.", "Hình 4: Nhóm bạn/gia đình ăn uống.", "Hình 5: Một người đang bơi."] },
      { title: "Sách bài tập - Nghe Phần 2, Câu 6-10", source: "book", note: "Nguồn chỉ ghi yêu cầu, thiếu danh sách hình/script/audio/đáp án gốc.", lines: ["Yêu cầu: Nghe các mẩu đối thoại ngắn và chọn hình ảnh (A-F) tương ứng."] },
      { title: "Sách bài tập - Nghe Phần 3, Câu 11-15", source: "book", note: "Có lựa chọn nhưng thiếu script/audio/đáp án gốc.", lines: ["11. A 女的 | B 男的 | C 没有人看见小卫", "12. A 羊肉不好吃 | B 羊肉太贵了 | C 每天都吃", "13. A 天气不好 | B 天气太冷了 | C 工作太忙了", "14. A 八十公斤 | B 六十五公斤 | C 七十公斤", "15. A 小王 | B 小张 | C 姐姐"] },
      { title: "Sách bài tập - Đọc Phần 1, Câu 16-20", source: "book", note: "Phần này phụ thuộc hình ảnh, project chưa có bộ hình gốc nên để tham khảo.", lines: ["16. 你的新家很漂亮，我想去你家玩儿。", "17. 我和朋友们买的衣服件件都很贵。", "18. 这个星期天天吃羊肉，我想吃鱼了。", "19. 我每天运动，现在五十公斤了。", "20. 听说李朋和他女朋友去旅游了。"] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "你怎么没去打篮球？", options: ["因为昨天下雨。", "件件都漂亮。", "我想吃面条。"], answer: "因为昨天下雨。", explain: "怎么 hỏi nguyên nhân.", source: "ai" },
      { type: "fill", prompt: "同学们（ ）都很高兴。", answer: "个个", explain: "个 lặp lại thành 个个.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Vì công việc bận nên tôi không có thời gian vận động.", answer: "因为工作很忙，所以我没有时间运动。", explain: "Dùng 因为……所以…….", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "女：你怎么没去打篮球？\n男：因为昨天下雨，所以我没去。", prompt: "男的为什么没去打篮球？", options: ["昨天下雨", "想吃面条", "买自行车"], answer: "昨天下雨", explain: "Script nói 因为昨天下雨。" },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "这个星期天天吃羊肉，我想吃鱼了。", prompt: "他还想吃羊肉。", options: ["√", "x"], answer: "x", explain: "Script nói 想吃鱼了。" },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "我经常跟同学们一起学习汉语。", prompt: "我（ ）跟同学们一起学习汉语。", answer: "经常", explain: "Từ cần điền là 经常." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：你看见小王了吗？\n男：我在门外看见小王的自行车了。", prompt: "男的看见了什么？", options: ["小王的自行车", "小王的姐姐", "一碗面条"], answer: "小王的自行车", explain: "Script nói 看见小王的自行车。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
