(function () {
  const lesson = {
    id: "lesson10",
    order: 10,
    type: "lesson",
    status: "ready",
    title: "别找了，手机在桌子上呢",
    viTitle: "Đừng tìm nữa, điện thoại ở trên bàn kìa",
    scope: "Bài 10",
    sourceRange: "HSK2.md: sách giáo trình Bài 10 và sách bài tập Bài 10",
    vocabulary: [
      { hanzi: "别", pinyin: "bié", pos: "Phó từ", meaning: "Đừng", example: "别看电视了，明天还要考试呢。", examplePinyin: "Bié kàn diànshì le, míngtiān hái yào kǎoshì ne.", exampleVi: "Đừng xem tivi nữa, mai còn phải thi.", source: "book", exampleSource: "book" },
      { hanzi: "帮助", pinyin: "bāngzhù", pos: "Động từ", meaning: "Giúp đỡ", example: "大卫喜欢帮助别人。", examplePinyin: "Dàwèi xǐhuan bāngzhù biérén.", exampleVi: "David thích giúp đỡ người khác.", source: "book", exampleSource: "book" },
      { hanzi: "哥哥", pinyin: "gēge", pos: "Danh từ", meaning: "Anh trai", example: "哥哥正在玩电脑。", examplePinyin: "Gēge zhèngzài wán diànnǎo.", exampleVi: "Anh trai đang chơi máy tính.", source: "book", exampleSource: "book" },
      { hanzi: "鸡蛋", pinyin: "jīdàn", pos: "Danh từ", meaning: "Trứng gà", example: "我每天早上吃一个鸡蛋。", examplePinyin: "Wǒ měitiān zǎoshang chī yí ge jīdàn.", exampleVi: "Mỗi sáng tôi ăn một quả trứng gà.", source: "book", exampleSource: "book" },
      { hanzi: "西瓜", pinyin: "xīguā", pos: "Danh từ", meaning: "Dưa hấu", example: "我想买一个西瓜。", examplePinyin: "Wǒ xiǎng mǎi yí ge xīguā.", exampleVi: "Tôi muốn mua một quả dưa hấu.", source: "book", exampleSource: "ai" },
      { hanzi: "正在", pinyin: "zhèngzài", pos: "Phó từ", meaning: "Đang", example: "哥哥正在玩电脑呢。", examplePinyin: "Gēge zhèngzài wán diànnǎo ne.", exampleVi: "Anh trai đang chơi máy tính.", source: "book", exampleSource: "book" },
      { hanzi: "手机", pinyin: "shǒujī", pos: "Danh từ", meaning: "Điện thoại di động", example: "手机在桌子上呢。", examplePinyin: "Shǒujī zài zhuōzi shang ne.", exampleVi: "Điện thoại ở trên bàn kìa.", source: "book", exampleSource: "book" },
      { hanzi: "洗", pinyin: "xǐ", pos: "Động từ", meaning: "Giặt, rửa", example: "这些衣服你一个人能洗完吗？", examplePinyin: "Zhèxiē yīfu nǐ yí ge rén néng xǐ wán ma?", exampleVi: "Một mình bạn giặt xong những quần áo này được không?", source: "book", exampleSource: "book" },
      { hanzi: "课", pinyin: "kè", pos: "Danh từ", meaning: "Giờ học, môn học, bài học", example: "明天的课我都准备好了。", examplePinyin: "Míngtiān de kè wǒ dōu zhǔnbèi hǎo le.", exampleVi: "Bài ngày mai tôi đều chuẩn bị xong rồi.", source: "book", exampleSource: "book" }
    ],
    grammar: [
      { id: "g1", title: "不要/别 + động từ + 了", structure: "不要/别 + V + 了", explanation: "Dùng để khuyên ngăn hoặc bảo ai đừng tiếp tục làm việc gì.", examples: [
        { zh: "不要玩手机了。", pinyin: "Búyào wán shǒujī le.", vi: "Đừng chơi điện thoại nữa." },
        { zh: "别睡觉了。", pinyin: "Bié shuìjiào le.", vi: "Đừng ngủ nữa." },
        { zh: "别看书了。", pinyin: "Bié kàn shū le.", vi: "Đừng đọc sách nữa." }
      ], source: "book" },
      { id: "g2", title: "Giới từ 对", structure: "Chủ ngữ + 对 + người/việc + tính từ/động từ", explanation: "Nói thái độ, tác dụng hoặc ảnh hưởng đối với ai/cái gì.", examples: [
        { zh: "跑步对身体很好。", pinyin: "Pǎobù duì shēntǐ hěn hǎo.", vi: "Chạy bộ rất tốt cho sức khỏe." },
        { zh: "老师对学生非常好。", pinyin: "Lǎoshī duì xuésheng fēicháng hǎo.", vi: "Thầy cô rất tốt với học sinh." },
        { zh: "看电视对学汉语有帮助。", pinyin: "Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.", vi: "Xem tivi có ích cho việc học tiếng Trung." }
      ], source: "book" }
    ],
    vocabGames: {
      fillSentences: [
        { prompt: "妈妈睡觉了，我们（ ）看电视了。", answer: "别", hint: "đừng", source: "book" },
        { prompt: "明天的（ ）我都准备好了。", answer: "课", hint: "bài học", source: "book" },
        { prompt: "我每天早上吃一个（ ）。", answer: "鸡蛋", hint: "trứng gà", source: "book" },
        { prompt: "哥哥（ ）玩电脑呢。", answer: "正在", hint: "đang", source: "book" }
      ],
      listeningChoice: [
        { script: "手机", prompt: "Nghe và chọn từ đúng", answer: "手机", options: ["手机", "西瓜", "鸡蛋", "课"], source: "ai" },
        { script: "帮助", prompt: "Nghe và chọn từ đúng", answer: "帮助", options: ["帮助", "正在", "别", "洗"], source: "ai" },
        { script: "哥哥", prompt: "Nghe và chọn từ đúng", answer: "哥哥", options: ["哥哥", "课", "手机", "西瓜"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu khuyên ngăn đúng.", options: ["别看电视了。", "看别电视了。", "别了看电视。"], answer: "别看电视了。", explain: "别 đứng trước động từ.", source: "book", grammarId: "g1" },
      { type: "fill", prompt: "（ ）玩手机了。", answer: "别", explain: "别 + V + 了: đừng làm nữa.", source: "book", grammarId: "g1" },
      { type: "choice", prompt: "Chọn câu dùng 对 đúng.", options: ["跑步对身体很好。", "跑步身体对很好。", "对跑步身体很好。"], answer: "跑步对身体很好。", explain: "对 đứng trước đối tượng chịu ảnh hưởng.", source: "book", grammarId: "g2" },
      { type: "fill", prompt: "看电视（ ）学汉语有帮助。", answer: "对", explain: "对学汉语 = đối với việc học tiếng Trung.", source: "book", grammarId: "g2" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Đừng tìm nữa” là câu nào?", options: ["别找了", "正在找", "帮助找"], answer: "别找了", source: "book" },
      { type: "fill", prompt: "手机在桌子上（ ）。", answer: "呢", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["跑步", "对", "身体", "很好"], answer: "跑步对身体很好", source: "book" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Anh trai đang học tiếng Trung.", answer: "哥哥正在学习汉语。", source: "ai" }
    ],
    workbook: [
      { id: "wb-read-21-25", title: "Sách bài tập - Đọc Phần 2, Câu 21-25", source: "book", type: "fillChoice", choices: [
        { key: "A", text: "帮助" }, { key: "B", text: "正在" }, { key: "C", text: "课" }, { key: "D", text: "鸡蛋" }, { key: "E", text: "贵" }, { key: "F", text: "别" }
      ], questions: [
        { id: "21", prompt: "明天的（ ）我都准备好了，可以睡觉了。", answer: "C" },
        { id: "22", prompt: "大卫是一个喜欢（ ）别人的好孩子。", answer: "A" },
        { id: "23", prompt: "我每天早上吃一个（ ），喝一杯牛奶。", answer: "D" },
        { id: "24", prompt: "妈妈睡觉了，我们（ ）看电视了。", answer: "F" },
        { id: "25", prompt: "哥哥（ ）玩电脑呢，没时间帮助 me。", answer: "B", explain: "Nguồn có lẫn chữ “me”; giữ nguyên câu nguồn." }
      ] },
      { id: "wb-judge-26-30", title: "Sách bài tập - Đọc Phần 3, Câu 26-30", source: "book", type: "trueFalse", questions: [
        { id: "26", original: "这本书是我写的，希望能对你有所帮助。", prompt: "这本书还没写完。", answer: "x" },
        { id: "27", original: "医生说这个药要饭前吃，吃药后两个小时别喝茶。", prompt: "医生说多喝茶对身体好。", answer: "x" },
        { id: "28", original: "别找了，你的手机在桌子上呢，电脑旁边。", prompt: "电脑也在桌子上。", answer: "√" },
        { id: "29", original: "那件白色的衣服我帮你洗了，在外面呢。", prompt: "衣服在外面。", answer: "√" },
        { id: "30", original: "机场离这儿很远，坐公共汽车要一个多小时，坐出租车也要四五十分钟吧。", prompt: "机场离这儿非常远。", answer: "√" }
      ] },
      { id: "wb-match-31-35", title: "Sách bài tập - Đọc Phần 4, Câu 31-35", source: "book", type: "matchChoice", choices: [
        { key: "A", text: "爸，我们明天去跑步吧。" }, { key: "B", text: "你弟弟正在学习汉语吗？" }, { key: "C", text: "一个红的，一个白的，真漂亮。" }, { key: "D", text: "你明天的课都准备好了吗？" }, { key: "E", text: "他在哪儿呢？你看见 he/tā 了吗？（例）" }, { key: "F", text: "别看电视了，明天还要考试呢。" }
      ], questions: [
        { id: "31", prompt: "你喜欢哪个？我可以送给你。", answer: "C" },
        { id: "32", prompt: "好啊，医生说多运动对我的身体好。", answer: "A" },
        { id: "33", prompt: "好吧，我这就去睡觉。", answer: "F" },
        { id: "34", prompt: "对，因为公司想让他明年去中国工作。", answer: "B" },
        { id: "35", prompt: "没问题，您放心吧。", answer: "D" }
      ] }
    ],
    workbookReference: [
      { title: "Sách bài tập - Nghe và hình ảnh", source: "book", note: "HSK2.md thiếu script/audio/đáp án gốc và một phần đọc theo hình nên chưa tự chấm.", lines: ["Nghe Phần 1-3: thiếu script/audio/đáp án.", "Đọc Phần 1: nguồn hiện tại không đủ chi tiết hình/đáp án."] },
      { title: "Dữ liệu nguồn bất thường", source: "book", note: "Giữ nguyên khi trích sách, không dùng để tạo câu AI.", lines: ["Câu 25 có lẫn chữ “me”.", "Lựa chọn ví dụ phần ghép có lẫn he/tā."] }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "Chọn câu đúng.", options: ["不要玩手机了。", "不要手机玩了。", "玩不要手机了。"], answer: "不要玩手机了。", explain: "不要 đứng trước động từ.", source: "ai" },
      { type: "fill", prompt: "跑步（ ）身体很好。", answer: "对", explain: "对身体 = đối với sức khỏe.", source: "ai" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Đừng ngủ nữa.", answer: "别睡觉了。", explain: "别 + 睡觉 + 了.", source: "ai" }
    ],
    listeningHomework: [
      { id: "listen-ai-1", title: "Nghe chọn đáp án", source: "ai", script: "别找了，手机在桌子上呢。", prompt: "手机在哪儿？", options: ["桌子上", "椅子下", "学校"], answer: "桌子上", explain: "Script nói 在桌子上。" },
      { id: "listen-ai-2", title: "Nghe đúng/sai", source: "ai", script: "哥哥正在玩电脑呢。", prompt: "哥哥正在学习汉语。", options: ["√", "x"], answer: "x", explain: "Script nói đang chơi máy tính." },
      { id: "listen-ai-3", title: "Nghe điền từ", source: "ai", script: "跑步对身体很好。", prompt: "跑步（ ）身体很好。", answer: "对", explain: "Từ nghe được là 对." },
      { id: "listen-ai-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：妈妈睡觉了。\n男：那我们别看电视了。", prompt: "他们为什么不看电视？", options: ["妈妈睡觉了", "要去上班", "手机没了"], answer: "妈妈睡觉了", explain: "Script nói 妈妈睡觉了。" }
    ]
  };
  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
