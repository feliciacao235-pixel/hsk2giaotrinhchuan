(function () {
  const lesson = {
    id: "lesson04",
    order: 4,
    type: "lesson",
    status: "ready",
    title: "这个工作是他帮我介绍的",
    viTitle: "Công việc này là do ông ấy giới thiệu cho tôi",
    scope: "Bài 4",
    sourceRange: "HSK2.md: sách giáo trình Bài 4 và sách bài tập Bài 4",
    vocabulary: [
      { hanzi: "生日", pinyin: "shēngrì", pos: "Danh từ", meaning: "Sinh nhật", example: "明天是丽丽的生日。", examplePinyin: "Míngtiān shì Lìli de shēngrì.", exampleVi: "Ngày mai là sinh nhật Lệ Lệ.", source: "book" },
      { hanzi: "快乐", pinyin: "kuàilè", pos: "Tính từ", meaning: "Vui vẻ, hạnh phúc", example: "生日快乐！", examplePinyin: "Shēngrì kuàilè!", exampleVi: "Chúc mừng sinh nhật!", source: "book" },
      { hanzi: "给", pinyin: "gěi", pos: "Giới từ", meaning: "Cho", example: "你想送给她什么？", examplePinyin: "Nǐ xiǎng sòng gěi tā shénme?", exampleVi: "Bạn muốn tặng cho cô ấy cái gì?", source: "book" },
      { hanzi: "接", pinyin: "jiē", pos: "Động từ", meaning: "Nhận, đón", example: "下午我睡觉的时候有一个电话，我没接。", examplePinyin: "Xiàwǔ wǒ shuìjiào de shíhou yǒu yí ge diànhuà, wǒ méi jiē.", exampleVi: "Buổi chiều lúc tôi ngủ có một cuộc điện thoại, tôi không nghe máy.", source: "book" },
      { hanzi: "晚上", pinyin: "wǎnshang", pos: "Danh từ", meaning: "Buổi tối", example: "明天晚上我不工作。", examplePinyin: "Míngtiān wǎnshang wǒ bù gōngzuò.", exampleVi: "Tối mai tôi không làm việc.", source: "book" },
      { hanzi: "问", pinyin: "wèn", pos: "Động từ", meaning: "Hỏi", example: "你问一下医生吧。", examplePinyin: "Nǐ wèn yíxià yīshēng ba.", exampleVi: "Bạn hỏi bác sĩ một chút đi.", source: "book" },
      { hanzi: "非常", pinyin: "fēicháng", pos: "Phó từ", meaning: "Rất, vô cùng", example: "这本书非常好。", examplePinyin: "Zhè běn shū fēicháng hǎo.", exampleVi: "Cuốn sách này rất hay.", source: "book" },
      { hanzi: "开始", pinyin: "kāishǐ", pos: "Động từ", meaning: "Bắt đầu", example: "我是大学的时候开始学的。", examplePinyin: "Wǒ shì dàxué de shíhou kāishǐ xué de.", exampleVi: "Tôi bắt đầu học từ hồi đại học.", source: "book" },
      { hanzi: "已经", pinyin: "yǐjīng", pos: "Phó từ", meaning: "Đã", example: "王老师已经回家了。", examplePinyin: "Wáng lǎoshī yǐjīng huí jiā le.", exampleVi: "Cô Vương đã về nhà rồi.", source: "book" },
      { hanzi: "长", pinyin: "cháng", pos: "Tính từ", meaning: "Dài, lâu", example: "时间很长。", examplePinyin: "Shíjiān hěn cháng.", exampleVi: "Thời gian rất dài.", source: "book", exampleSource: "ai" },
      { hanzi: "两", pinyin: "liǎng", pos: "Số từ", meaning: "Hai", example: "已经两年了。", examplePinyin: "Yǐjīng liǎng nián le.", exampleVi: "Đã hai năm rồi.", source: "book" },
      { hanzi: "帮", pinyin: "bāng", pos: "Động từ", meaning: "Giúp, giúp đỡ", example: "你帮我给王老师打个电话吧。", examplePinyin: "Nǐ bāng wǒ gěi Wáng lǎoshī dǎ ge diànhuà ba.", exampleVi: "Bạn giúp tôi gọi cho thầy Vương một cuộc điện thoại nhé.", source: "book" },
      { hanzi: "介绍", pinyin: "jièshào", pos: "Động từ", meaning: "Giới thiệu", example: "能不能给我介绍一下？", examplePinyin: "Néng bu néng gěi wǒ jièshào yíxià?", exampleVi: "Có thể giới thiệu cho tôi một chút không?", source: "book" }
    ],
    grammar: [
      { id: "g1", title: "Cấu trúc 是……的", structure: "Chủ ngữ + (是) + tác nhân + động từ + 的 / Chủ ngữ + 不是 + tác nhân + động từ + 的", explanation: "Dùng với sự việc đã xảy ra để nhấn mạnh người/thành phần thực hiện hành động.", examples: [
        { zh: "这本书是我买的。", pinyin: "Zhè běn shū shì wǒ mǎi de.", vi: "Quyển sách này là do tôi mua." },
        { zh: "晚饭是妈妈做的。", pinyin: "Wǎnfàn shì māma zuò de.", vi: "Cơm tối là do mẹ nấu." },
        { zh: "电话是谁打的？", pinyin: "Diànhuà shì shéi dǎ de?", vi: "Điện thoại là do ai gọi thế?" }
      ], source: "book" },
      { id: "g2", title: "……的时候", structure: "Cụm thời gian/Động từ/Cụm động từ + 的时候", explanation: "Dùng để nói lúc/khi một sự việc xảy ra.", examples: [
        { zh: "今天早上八点的时候我没在家。", pinyin: "Jīntiān zǎoshang bā diǎn de shíhou wǒ méi zài jiā.", vi: "Lúc 8 giờ sáng nay tôi không có ở nhà." },
        { zh: "我十一岁的时候开始踢足球。", pinyin: "Wǒ shíyī suì de shíhou kāishǐ tī zúqiú.", vi: "Lúc tôi 11 tuổi, tôi bắt đầu đá bóng." },
        { zh: "我睡觉的时候，我妈妈在做饭。", pinyin: "Wǒ shuìjiào de shíhou, wǒ māma zài zuò fàn.", vi: "Lúc tôi ngủ, mẹ tôi đang nấu cơm." }
      ], source: "book" },
      { id: "g3", title: "Phó từ 已经", structure: "已经 + động từ/tính từ (+ tân ngữ) + 了", explanation: "Diễn tả hành động đã hoàn thành hoặc trạng thái đã đạt tới mức nào đó; cuối câu thường có 了.", examples: [
        { zh: "王老师已经回家了。", pinyin: "Wáng lǎoshī yǐjīng huí jiā le.", vi: "Cô Vương đã về nhà rồi." },
        { zh: "我的身体已经好了。", pinyin: "Wǒ de shēntǐ yǐjīng hǎo le.", vi: "Sức khỏe của tôi đã tốt rồi." },
        { zh: "足球已经踢了十年了。", pinyin: "Zúqiú yǐjīng tī le shí nián le.", vi: "Đã đá bóng được 10 năm rồi." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "明天是丽丽的（ ）。", answer: "生日", hint: "sinh nhật", source: "book" },
        { prompt: "这本书（ ）好。", answer: "非常", hint: "rất", source: "book" },
        { prompt: "能不能给我（ ）一下？", answer: "介绍", hint: "giới thiệu", source: "book" },
        { prompt: "你的病（ ）好了。", answer: "已经", hint: "đã", source: "book" }
      ],
      listeningChoice: [
        { script: "生日", prompt: "Nghe và chọn từ đúng", answer: "生日", options: ["生日", "晚上", "开始", "介绍"], source: "ai" },
        { script: "非常", prompt: "Nghe và chọn từ đúng", answer: "非常", options: ["非常", "已经", "快乐", "两"], source: "ai" },
        { script: "帮", prompt: "Nghe và chọn từ đúng", answer: "帮", options: ["帮", "给", "问", "接"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu nhấn mạnh người mua sách.", options: ["这本书是我买的。", "这本书我的是买。", "这本书买我是的。"], answer: "这本书是我买的。", explain: "是……的 nhấn mạnh tác nhân 我.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "晚饭（ ）妈妈做的。", answer: "是", explain: "Trong câu khẳng định có thể dùng 是 để nhấn mạnh.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "我睡觉（ ），我妈妈在做饭。", answer: "的时候", explain: "Động từ/cụm động từ + 的时候 nghĩa là khi/lúc.", source: "book", grammarId: "g2" },
      { type: "order", prompt: "Sắp xếp thành câu đúng.", pieces: ["我", "十八岁", "的时候", "来到", "北京"], answer: "我十八岁的时候来到北京", explain: "Cụm thời gian + 的时候 đặt trước sự việc chính.", source: "book", grammarId: "g2" },
      { type: "choice", prompt: "Chọn câu dùng 已经 đúng.", options: ["王老师已经回家了。", "王老师回家已经。", "已经王老师了回家。"], answer: "王老师已经回家了。", explain: "已经 thường đứng trước động từ và cuối câu có 了.", source: "book", grammarId: "g3" },
      { type: "fill", prompt: "我的身体（ ）好了。", answer: "已经", explain: "已经 diễn tả trạng thái đã tốt lên.", source: "book", grammarId: "g3" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Giới thiệu” là từ nào?", options: ["介绍", "开始", "快乐", "接"], answer: "介绍", source: "book" },
      { type: "fill", prompt: "生日（ ）！", answer: "快乐", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["这本书", "是", "我", "买", "的"], answer: "这本书是我买的", source: "book" },
      { type: "choice", prompt: "Chọn nghĩa đúng của 已经.", options: ["Đã", "Bắt đầu", "Buổi tối", "Giúp"], answer: "Đã", source: "book" }
    ],
    workbook: [
      { id: "wb-read-21-25", title: "Sách bài tập - Đọc Phần 2, Câu 21-25", source: "book", type: "fillChoice", choices: [
        { key: "A", text: "介绍" }, { key: "B", text: "帮" }, { key: "C", text: "给" }, { key: "D", text: "非常" }, { key: "E", text: "贵" }, { key: "F", text: "已经" }
      ], questions: [
        { id: "21", prompt: "我身体不好，不能去学校，你（ ）我给王老师打个电话吧。", answer: "B" },
        { id: "22", prompt: "明天是丽丽的生日，你想送（ ）她什么？", answer: "C" },
        { id: "23", prompt: "这本书（ ）好，我们都看了，你也看看吧。", answer: "D" },
        { id: "24", prompt: "医生说你的病（ ）好了，明天开始不吃这个药了。", answer: "F" },
        { id: "25", prompt: "你认识李先生吗？能不能给我（ ）一下。", answer: "A" }
      ] },
      { id: "wb-judge-26-30", title: "Sách bài tập - Đọc Phần 3, Câu 26-30", source: "book", type: "trueFalse", questions: [
        { id: "26", original: "妈妈做晚饭了，晚上我们回家吃饭吧。", prompt: "他们晚上不出去吃饭。", answer: "√", explain: "Đúng, họ về nhà ăn cơm." },
        { id: "27", original: "下午我睡觉的时候有一个电话，我没接。", prompt: "我不知道电话是谁打的。", answer: "√", explain: "Đúng, người nói không nghe máy." },
        { id: "28", original: "明天是你的生日，明天晚上我不工作。", prompt: "他明天晚上没有时间。", answer: "x", explain: "Sai, không làm việc nghĩa là có thời gian." },
        { id: "29", original: "你问一下爸爸什么时候去踢足球。", prompt: "爸爸要去踢足球。", answer: "√", explain: "Đúng theo dữ liệu HSK2.md." },
        { id: "30", original: "山姆，我给你介绍一下，这是我的大学同学谢力。", prompt: "我和谢力是大学的时候认识的。", answer: "√", explain: "Đúng theo câu gốc." }
      ] },
      { id: "wb-match-31-35", title: "Sách bài tập - Đọc Phần 4, Câu 31-35", source: "book", type: "matchChoice", choices: [
        { key: "A", text: "这本书是你什么时候写的？" }, { key: "B", text: "昨天晚상의 电话是谁打的？" }, { key: "C", text: "你的汉字非常漂亮！" }, { key: "D", text: "今天我非常高兴，你们多吃点儿。" }, { key: "E", text: "他在哪儿呢？你看见 he 了吗？（例）" }, { key: "F", text: "这几块天不想吃饭，觉得很累。" }
      ], questions: [
        { id: "31", prompt: "王方打的，她说今天不能去学校了。", answer: "B" },
        { id: "32", prompt: "谢谢！我是大学的时候开始学的。", answer: "C" },
        { id: "33", prompt: "是不是病了？你问一下医生吧。", answer: "F" },
        { id: "34", prompt: "2011年吧，已经两年了。", answer: "A" },
        { id: "35", prompt: "我们也很高兴，生日快乐！", answer: "D" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập - Nghe Phần 1, Câu 1-5", source: "book", note: "HSK2.md chỉ có mô tả hình, không có script/audio/đáp án gốc nên chưa tự chấm.", lines: ["Hình 1: Một người phụ nữ đang đứng mỉm cười chuẩn bị thức ăn trong bếp.", "Hình 2: Hai cầu thủ đang tranh bóng quyết liệt trên sân cỏ.", "Hình 3: Một cặp nam nữ vui vẻ cùng nấu nướng tại bếp.", "Hình 4: Cảnh phố xá có người đi bộ và cửa hàng bán báo/sách bên đường.", "Hình 5: Một nữ nhân viên công sở mỉm cười tự tin."] },
      { title: "Sách bài tập - Nghe Phần 2, Câu 6-10", source: "book", note: "HSK2.md thiếu script/audio/đáp án gốc.", lines: ["Hình A: Ba người đàn ông mặc comple đang trò chuyện và bắt tay.", "Hình B: Một người phụ nữ đang đứng nấu ăn.", "Hình C: Một rổ/đĩa rau củ quả tươi.", "Hình D: Một nam thanh niên đang đá bóng (Hình ví dụ).", "Hình E: Một nữ bác sĩ mặc áo blouse trắng.", "Hình F: Một người đàn ông ngồi trên giường ngủ, đang vươn vai thức dậy."] },
      { title: "Sách bài tập - Nghe Phần 3, Câu 11-15", source: "book", note: "HSK2.md có lựa chọn nhưng không có script/audio/đáp án gốc.", lines: ["11. A 张老师 | B 小王 | C 王老师", "12. A 大卫 | B 李先生 | C 不知道", "13. A 一年前 | B 一年多了 | C 两年前", "14. A 很不喜欢 | B 非常喜欢 | C 不太喜欢", "15. A 十年 | B 不到十年 | C 十几年"] },
      { title: "Sách bài tập - Đọc Phần 1, Câu 16-20", source: "book", note: "Phần này phụ thuộc hình ảnh, project chưa có bộ hình gốc nên để tham khảo, không tự chấm.", lines: ["16. 汤姆先生介绍我们认识的。", "17. 爸爸已经回来了，他在看电视呢。", "18. 昨天是我的生日，这是我丈夫送给我的。", "19. 晚饭是李小姐帮我做的。", "20. 张先生非常忙，晚上不能回家。"] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "电话是谁打的？", options: ["王方打的。", "生日快乐。", "一米七。"], answer: "王方打的。", explain: "Dùng 是……的 để trả lời người thực hiện hành động.", source: "ai" },
      { type: "fill", prompt: "我睡觉（ ），妈妈在做饭。", answer: "的时候", explain: "……的时候 nghĩa là khi/lúc.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Cô Vương đã về nhà rồi.", answer: "王老师已经回家了。", explain: "已经 + 回家 + 了.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "女：这本书是谁买的？\n男：这本书是我买的。", prompt: "这本书是谁买的？", options: ["我买的", "妈妈做的", "王方打的"], answer: "我买的", explain: "Script nói 这本书是我买的。" },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "王老师已经回家了。", prompt: "王老师还没回家。", options: ["√", "x"], answer: "x", explain: "Script nói 已经回家了。" },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "我睡觉的时候有一个电话。", prompt: "我睡觉（ ）有一个电话。", answer: "的时候", explain: "Từ cần điền là 的时候." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：明天是丽丽的生日。\n男：生日快乐！", prompt: "明天是什么日子？", options: ["丽丽的生日", "王老师回家", "爸爸休息"], answer: "丽丽的生日", explain: "Script nói 明天是丽丽的生日。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
