(function () {
  const sourceLessons = window.HSK2_DATA.lessons.filter((item) => /^lesson0[1-8]$/.test(item.id));
  const pick = ["旅游", "觉得", "最", "为什么", "一起", "要", "眼睛", "生病", "每", "跑步", "起床", "药", "身体", "知道", "时间", "手表", "报纸", "送", "一下", "房间", "旁边", "真", "颜色", "生日", "给", "非常", "开始", "已经", "帮", "介绍", "外面", "准备", "就", "鱼", "吧", "还", "考试", "咖啡", "以后", "门", "自行车", "羊肉", "面条", "打篮球", "所以", "经常", "机场", "离", "公司", "远", "公共汽车", "小时", "再", "让", "告诉", "等", "找", "事情", "服务员", "白", "黑", "贵"];
  const vocabulary = pick
    .map((hanzi) => sourceLessons.flatMap((lesson) => lesson.vocabulary).find((word) => word.hanzi === hanzi))
    .filter(Boolean)
    .map((word) => ({ ...word, source: word.source || "book" }));
  const grammar = sourceLessons.flatMap((lesson) => lesson.grammar.map((item) => ({
    ...item,
    id: `${lesson.id}-${item.id}`,
    title: `${lesson.scope}: ${item.title}`,
    examples: item.examples.slice(0, 2)
  })));

  const lesson = {
    id: "review01",
    order: 16,
    type: "review",
    status: "ready",
    title: "Ôn tập 1",
    viTitle: "Tổng hợp Bài 1-8",
    scope: "Ôn tập 1",
    sourceRange: "Tổng hợp từ data/lesson01.js đến data/lesson08.js và HSK2.md",
    sourceNotes: [
      "Không dùng các câu nguồn lẫn chữ lạ như know/he/today/de trong bài nghe AI hoặc bài luyện AI.",
      "Không tự chấm phần nghe sách hoặc chọn hình vì thiếu script/audio/bộ hình gốc."
    ],
    vocabulary,
    grammar,
    vocabGames: {
      fillSentences: [
        { prompt: "我最喜欢（ ）。", answer: "旅游", hint: "du lịch", source: "book" },
        { prompt: "我每天六点（ ）。", answer: "起床", hint: "thức dậy", source: "book" },
        { prompt: "今天的天气（ ）好。", answer: "真", hint: "thật", source: "book" },
        { prompt: "医生说你的病（ ）好了。", answer: "已经", hint: "đã", source: "book" },
        { prompt: "考试（ ）给你打电话。", answer: "以后", hint: "sau khi", source: "book" },
        { prompt: "我家（ ）学校不太远。", answer: "离", hint: "cách", source: "book" },
        { prompt: "让我想想再（ ）你。", answer: "告诉", hint: "nói cho biết", source: "book" },
        { prompt: "这件（ ）的有点儿长。", answer: "白", hint: "trắng", source: "book" }
      ],
      listeningChoice: [
        { script: "旅游", prompt: "Nghe và chọn từ đúng", answer: "旅游", options: ["旅游", "考试", "公司", "服务员"], source: "ai" },
        { script: "起床", prompt: "Nghe và chọn từ đúng", answer: "起床", options: ["起床", "找", "送", "到"], source: "ai" },
        { script: "自行车", prompt: "Nghe và chọn từ đúng", answer: "自行车", options: ["自行车", "公共汽车", "手表", "报纸"], source: "ai" },
        { script: "告诉", prompt: "Nghe và chọn từ đúng", answer: "告诉", options: ["告诉", "介绍", "准备", "知道"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu dùng 要 đúng.", options: ["我要买一个新杯子。", "我要很忙。", "我很要休息。"], answer: "我要买一个新杯子。", explain: "要 đứng trước động từ.", source: "ai", grammarId: "lesson01-g1" },
      { type: "fill", prompt: "王老师（ ）喜欢吃苹果。", answer: "最", explain: "最 + động từ tâm lý/tính từ.", source: "book", grammarId: "lesson01-g2" },
      { type: "choice", prompt: "Chọn câu hỏi đúng để xác nhận.", options: ["你是不是喜欢运动？", "你喜欢是不是运动？", "是不是你吗喜欢运动？"], answer: "你是不是喜欢运动？", explain: "是不是 có thể đứng trước vị ngữ.", source: "ai", grammarId: "lesson02-g1" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["我", "每天", "六点", "起床"], answer: "我每天六点起床", explain: "每天 đặt trước thời điểm/hành động thường lệ.", source: "book", grammarId: "lesson02-g2" },
      { type: "fill", prompt: "这本书不是我（ ）。", answer: "的", explain: "我的 thay cho 我的书.", source: "ai", grammarId: "lesson03-g1" },
      { type: "choice", prompt: "Chọn câu dùng 一下 đúng.", options: ["你休息一下吧。", "你一下休息吧。", "一下你休息吧。"], answer: "你休息一下吧。", explain: "一下 đứng sau động từ.", source: "book", grammarId: "lesson03-g2" },
      { type: "fill", prompt: "这本书（ ）我买的。", answer: "是", explain: "是……的 nhấn mạnh tác nhân.", source: "ai", grammarId: "lesson04-g1" },
      { type: "choice", prompt: "Chọn câu dùng 已经 đúng.", options: ["王老师已经回家了。", "王老师回家已经。", "已经王老师了回家。"], answer: "王老师已经回家了。", explain: "已经 thường đứng trước động từ và đi với 了.", source: "book", grammarId: "lesson04-g3" },
      { type: "fill", prompt: "这件衣服（ ）大。", answer: "有点儿", explain: "有点儿 + tính từ.", source: "ai", grammarId: "lesson05-g3" },
      { type: "choice", prompt: "Chọn câu nhân quả đúng.", options: ["因为昨天下雨，所以我们都没去。", "所以昨天下雨，因为我们都没去。", "因为所以我们都没去昨天下雨。"], answer: "因为昨天下雨，所以我们都没去。", explain: "因为 nêu nguyên nhân, 所以 nêu kết quả.", source: "book", grammarId: "lesson06-g3" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Nhà tôi cách trường rất xa.", answer: "我家离学校很远。", explain: "A 离 B 很远.", source: "ai", grammarId: "lesson07-g3" },
      { type: "fix", prompt: "Sửa câu sai: 你明天给我再打电话吧。", answer: "你明天再给我打电话吧。", explain: "再 đặt trước cụm động từ 给我打电话.", source: "ai", grammarId: "lesson08-g2" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Thường xuyên” là từ nào?", options: ["经常", "已经", "以后", "一起"], answer: "经常", source: "book" },
      { type: "fill", prompt: "运动（ ）身体很好。", answer: "对", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["让我", "想想", "再", "告诉", "你"], answer: "让我想想再告诉你", source: "book" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Tôi muốn mua một cái cốc mới.", answer: "我要买一个新杯子。", source: "ai" },
      { type: "choice", prompt: "Đọc hiểu ngắn: 我中午有点儿累，喝了两杯咖啡。Người nói uống gì?", options: ["咖啡", "牛奶", "水"], answer: "咖啡", source: "book" }
    ],
    workbook: [
      {
        id: "final-fill-01-10",
        title: "Kiểm tra cuối - Điền từ tổng hợp",
        source: "ai",
        type: "fillChoice",
        choices: [
          { key: "A", text: "最" }, { key: "B", text: "每" }, { key: "C", text: "一下" }, { key: "D", text: "已经" }, { key: "E", text: "就" }, { key: "F", text: "有点儿" }, { key: "G", text: "因为" }, { key: "H", text: "离" }, { key: "I", text: "再" }, { key: "J", text: "让" }
        ],
        questions: [
          { id: "1", prompt: "大卫的汉语（ ）好。", answer: "A", vocabTags: ["最"], grammarTags: ["最"] },
          { id: "2", prompt: "我（ ）天六点起床。", answer: "B", vocabTags: ["每", "起床"], grammarTags: ["每"] },
          { id: "3", prompt: "你休息（ ）吧。", answer: "C", vocabTags: ["一下", "休息"], grammarTags: ["一下"] },
          { id: "4", prompt: "王老师（ ）回家了。", answer: "D", vocabTags: ["已经"], grammarTags: ["已经"] },
          { id: "5", prompt: "你喜欢（ ）买吧。", answer: "E", vocabTags: ["就"], grammarTags: ["就"] },
          { id: "6", prompt: "这件衣服（ ）大。", answer: "F", vocabTags: ["件"], grammarTags: ["有点儿"] },
          { id: "7", prompt: "（ ）昨天下雨，所以我们都没去。", answer: "G", vocabTags: ["因为", "所以"], grammarTags: ["因为……所以……"] },
          { id: "8", prompt: "我家（ ）学校很远。", answer: "H", vocabTags: ["离", "远"], grammarTags: ["离"] },
          { id: "9", prompt: "你明天（ ）给我打电话吧。", answer: "I", vocabTags: ["再"], grammarTags: ["再"] },
          { id: "10", prompt: "王老师（ ）我告诉你。", answer: "J", vocabTags: ["让", "告诉"], grammarTags: ["句子: 让"] }
        ]
      },
      {
        id: "final-judge-11-16",
        title: "Kiểm tra cuối - Đúng/Sai",
        source: "ai",
        type: "trueFalse",
        questions: [
          { id: "11", original: "九月北京天气最好。", prompt: "九月去北京旅游最好。", answer: "√", vocabTags: ["九月", "旅游", "最好"], grammarTags: ["最"] },
          { id: "12", original: "医生说我要住两天院，明天能出院。", prompt: "我今天能出院。", answer: "x", explain: "Ngày mai mới xuất viện.", vocabTags: ["医生", "出院"], grammarTags: ["要"] },
          { id: "13", original: "这块手表是昨天买的。", prompt: "这块手表不是今天买的。", answer: "√", vocabTags: ["手表"], grammarTags: ["的"] },
          { id: "14", original: "我睡觉的时候，我妈妈在做饭。", prompt: "妈妈做饭的时候，我在睡觉。", answer: "√", vocabTags: ["睡觉", "做饭"], grammarTags: ["的时候"] },
          { id: "15", original: "坐公共汽车太慢了，我们坐出租车吧。", prompt: "公共汽车很快。", answer: "x", vocabTags: ["公共汽车", "慢", "快"], grammarTags: ["吧"] },
          { id: "16", original: "让我想想再告诉你。", prompt: "他现在马上告诉你。", answer: "x", vocabTags: ["让", "再", "告诉"], grammarTags: ["再", "让"] }
        ]
      },
      {
        id: "final-match-17-22",
        title: "Kiểm tra cuối - Ghép câu",
        source: "ai",
        type: "matchChoice",
        choices: [
          { key: "A", text: "我每天六点起床。" },
          { key: "B", text: "左边那个红色的是我的。" },
          { key: "C", text: "这本书是我买的。" },
          { key: "D", text: "因为工作很忙，所以我没有时间运动。" },
          { key: "E", text: "不远，我每天走路去学校。" },
          { key: "F", text: "晚上去看电影，好吗？" }
        ],
        questions: [
          { id: "17", prompt: "你每天几点起床？", answer: "A", vocabTags: ["每天", "起床"], grammarTags: ["每"] },
          { id: "18", prompt: "哪个杯子是你的？", answer: "B", vocabTags: ["左边", "红色"], grammarTags: ["的"] },
          { id: "19", prompt: "这本书是谁买的？", answer: "C", vocabTags: ["书", "买"], grammarTags: ["是……的"] },
          { id: "20", prompt: "你为什么没有时间运动？", answer: "D", vocabTags: ["因为", "所以", "运动"], grammarTags: ["因为……所以……"] },
          { id: "21", prompt: "你家离学校远不远？", answer: "E", vocabTags: ["离", "远", "走路"], grammarTags: ["离"] },
          { id: "22", prompt: "你想做什么？", answer: "F", vocabTags: ["晚上", "电影"], grammarTags: ["好吗"] }
        ]
      }
    ],
    workbookReference: [
      {
        title: "Ôn tập 1 - dữ liệu sách không tự chấm",
        source: "book",
        note: "Các bài nghe sách và bài chọn hình Bài 1-8 thiếu script/audio/hình gốc hoặc có ký tự bất thường, nên không đưa vào kiểm tra tự chấm.",
        lines: [
          "Loại khỏi AI luyện tập: các câu lẫn know/he/today/de/he-tā và mục nguồn bất thường “静态/因为”.",
          "Không tự tạo đáp án cho bài nghe sách khi HSK2.md không có script/audio/đáp án gốc."
        ]
      }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "Chọn câu đúng.", options: ["你为什么不坐公共汽车去公司？", "你不为什么坐公共汽车去公司？", "为什么你公司不坐公共汽车去？"], answer: "你为什么不坐公共汽车去公司？", explain: "为什么 đứng trước phần cần hỏi lý do.", source: "ai", vocabTags: ["为什么", "公共汽车", "公司"], grammarTags: ["为什么"] },
      { type: "fill", prompt: "同学们七点半（ ）来教室了。", answer: "就", explain: "就 nhấn mạnh đến sớm.", source: "ai", vocabTags: ["教室", "就"], grammarTags: ["就"] },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["我", "请", "你", "吃饭"], answer: "我请你吃饭", explain: "Câu kiêm ngữ: 请 + 你 + 吃饭.", source: "book", vocabTags: ["请", "吃饭"], grammarTags: ["句子 kiêm ngữ"] },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Tôi hơi mệt.", answer: "我有点儿累。", explain: "有点儿 + tính từ.", source: "ai", vocabTags: ["累"], grammarTags: ["有点儿"] }
    ],
    listeningHomework: [
      { id: "listen-review-1", title: "Nghe chọn đáp án", source: "ai", script: "女：你为什么没去打篮球？\n男：因为昨天下雨，所以我没去。", prompt: "男的为什么没去打篮球？", options: ["昨天下雨", "身体很好", "要去旅游"], answer: "昨天下雨", explain: "Script nói 因为昨天下雨。", vocabTags: ["打篮球", "因为", "所以"], grammarTags: ["因为……所以……"] },
      { id: "listen-review-2", title: "Nghe đúng/sai", source: "ai", script: "我家离学校不远，我每天走路去学校。", prompt: "他每天坐公共汽车去学校。", options: ["√", "x"], answer: "x", explain: "Script nói 每天走路去学校。", vocabTags: ["离", "学校", "走路"], grammarTags: ["离", "每"] },
      { id: "listen-review-3", title: "Nghe điền từ", source: "ai", script: "让我想想再告诉你。", prompt: "让我想想（ ）告诉你。", answer: "再", explain: "Từ cần điền là 再.", vocabTags: ["让", "告诉"], grammarTags: ["再"] },
      { id: "listen-review-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：这件白的怎么样？\n男：这件白的有点儿长，那件黑的有点儿贵。", prompt: "白的怎么样？", options: ["有点儿长", "有点儿贵", "很好吃"], answer: "有点儿长", explain: "Script nói 白的有点儿长。", vocabTags: ["白", "黑", "贵"], grammarTags: ["有点儿"] }
    ]
  };

  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
