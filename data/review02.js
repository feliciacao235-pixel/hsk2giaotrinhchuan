(function () {
  const sourceLessons = window.HSK2_DATA.lessons.filter((item) => /^lesson(09|10|11|12|13|14|15)$/.test(item.id));
  const vocabulary = sourceLessons
    .flatMap((lesson) => lesson.vocabulary)
    .map((word) => ({ ...word, source: word.source || "book" }));
  const grammar = sourceLessons.flatMap((lesson) => lesson.grammar.map((item) => ({
    ...item,
    id: `${lesson.id}-${item.id}`,
    title: `${lesson.scope}: ${item.title}`,
    examples: item.examples.slice(0, 2)
  })));

  const lesson = {
    id: "review02",
    order: 17,
    type: "review",
    status: "ready",
    title: "Ôn tập 2",
    viTitle: "Tổng hợp Bài 9-15",
    scope: "Ôn tập 2",
    sourceRange: "Tổng hợp từ data/lesson09.js đến data/lesson15.js và HSK2.md",
    sourceNotes: [
      "Trọng tâm là từ vựng và ngữ pháp Bài 9-15.",
      "Không dùng các mẩu nguồn lỗi như his, me, she/Tā, ne, he/tā hoặc ví dụ bất thường để tạo bài AI.",
      "Bài 12-15 thiếu phần sách bài tập đầy đủ trong HSK2.md nên bài tự chấm liên quan là AI bổ sung, không giả làm bài sách."
    ],
    vocabulary,
    grammar,
    vocabGames: {
      fillSentences: [
        { prompt: "今天的课你都听（ ）了吗？", answer: "懂", hint: "hiểu", source: "book" },
        { prompt: "妈妈睡觉了，我们（ ）看电视了。", answer: "别", hint: "đừng", source: "book" },
        { prompt: "苹果比西瓜（ ）。", answer: "便宜", hint: "rẻ", source: "book" },
        { prompt: "你（ ）得太少了。", answer: "穿", hint: "mặc", source: "book" },
        { prompt: "门开（ ）呢。", answer: "着", hint: "trạng thái duy trì", source: "book" },
        { prompt: "这个字是什么（ ）？", answer: "意思", hint: "ý nghĩa", source: "ai" },
        { prompt: "新年快要（ ）了。", answer: "到", hint: "đến", source: "book" },
        { prompt: "从这儿一直（ ）前走。", answer: "往", hint: "về phía", source: "book" }
      ],
      listeningChoice: [
        { script: "问题", prompt: "Nghe và chọn từ đúng", answer: "问题", options: ["问题", "意思", "课", "票"], source: "ai" },
        { script: "手机", prompt: "Nghe và chọn từ đúng", answer: "手机", options: ["手机", "火车站", "铅笔", "鸡蛋"], source: "ai" },
        { script: "便宜", prompt: "Nghe và chọn từ đúng", answer: "便宜", options: ["便宜", "比", "得", "更"], source: "ai" },
        { script: "往右走", prompt: "Nghe và chọn từ đúng", answer: "往右走", options: ["往右走", "跳舞", "唱歌", "上班"], source: "ai" },
        { script: "新年", prompt: "Nghe và chọn từ đúng", answer: "新年", options: ["新年", "去年", "晴天", "西瓜"], source: "ai" }
      ]
    },
    grammarPractice: [
      { type: "choice", prompt: "Chọn câu dùng bổ ngữ kết quả đúng.", options: ["我听懂今天的课了。", "我懂听今天的课了。", "我听今天的课懂了。"], answer: "我听懂今天的课了。", explain: "懂 đứng sau 听 để chỉ kết quả nghe hiểu.", source: "book", grammarId: "lesson09-g1" },
      { type: "fill", prompt: "题太多，我没做（ ）。", answer: "完", explain: "没 + V + 完: chưa làm xong.", source: "book", grammarId: "lesson09-g1" },
      { type: "fill", prompt: "我每天（ ）八点到十二点都在公司工作。", answer: "从", explain: "从 đánh dấu điểm bắt đầu.", source: "book", grammarId: "lesson09-g2" },
      { type: "choice", prompt: "Chọn câu nói “công việc đầu tiên”.", options: ["第一个工作", "第一工作", "一个第工作"], answer: "第一个工作", explain: "第 + số + lượng từ + danh từ.", source: "book", grammarId: "lesson09-g3" },
      { type: "choice", prompt: "Chọn câu khuyên ngăn đúng.", options: ["别玩手机了。", "玩别手机了。", "别了玩手机。"], answer: "别玩手机了。", explain: "别/不要 đứng trước động từ.", source: "ai", grammarId: "lesson10-g1" },
      { type: "fill", prompt: "跑步（ ）身体很好。", answer: "对", explain: "对身体 = đối với sức khỏe.", source: "book", grammarId: "lesson10-g2" },
      { type: "fill", prompt: "前边说话（ ）那个人是我哥哥。", answer: "的", explain: "Cụm động từ + 的 + danh từ.", source: "book", grammarId: "lesson11-g1" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["苹果", "比", "西瓜", "便宜"], answer: "苹果比西瓜便宜", explain: "A 比 B + tính từ.", source: "book", grammarId: "lesson11-g2" },
      { type: "fill", prompt: "天气不太好，我觉得（ ）要下雨了。", answer: "可能", explain: "可能 biểu thị phỏng đoán.", source: "book", grammarId: "lesson11-g3" },
      { type: "choice", prompt: "Chọn câu dùng 得 đúng.", options: ["他说得很好。", "他说很好得。", "他得说很好。"], answer: "他说得很好。", explain: "得 đứng sau động từ.", source: "book", grammarId: "lesson12-g1" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Chị chạy nhanh hơn tôi.", answer: "姐姐比我跑得快。", explain: "A 比 B 跑得快.", source: "ai", grammarId: "lesson12-g2" },
      { type: "fill", prompt: "门开（ ）。", answer: "着", explain: "着 nói trạng thái đang duy trì.", source: "book", grammarId: "lesson13-g1" },
      { type: "fix", prompt: "Sửa câu sai: 你北京人不是吗？", answer: "你不是北京人吗？", explain: "不是 đặt trước nội dung nhắc lại.", source: "ai", grammarId: "lesson13-g2" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["从这儿", "一直", "往前", "走"], answer: "从这儿一直往前走", explain: "往 + hướng + động từ.", source: "book", grammarId: "lesson13-g3" },
      { type: "fill", prompt: "你看（ ）那个电影吗？", answer: "过", explain: "V + 过 hỏi kinh nghiệm.", source: "book", grammarId: "lesson14-g1" },
      { type: "choice", prompt: "Chọn câu tương phản đúng.", options: ["虽然是晴天，但是很冷。", "虽然是晴天，很冷但是。", "但是虽然是晴天很冷。"], answer: "虽然是晴天，但是很冷。", explain: "虽然 ở vế 1, 但是 ở vế 2.", source: "book", grammarId: "lesson14-g2" },
      { type: "fill", prompt: "我去过三（ ）北京。", answer: "次", explain: "次 chỉ số lần.", source: "book", grammarId: "lesson14-g3" },
      { type: "choice", prompt: "Chọn câu nói “sắp mưa rồi”.", options: ["要下雨了。", "下雨要了。", "要了下雨。"], answer: "要下雨了。", explain: "要 + động từ + 了.", source: "book", grammarId: "lesson15-g1" },
      { type: "fill", prompt: "（ ）8点了，快点儿起床吧。", answer: "都", explain: "都...了 nhấn mạnh đã đến mức/thời điểm.", source: "book", grammarId: "lesson15-g2" }
    ],
    shortPractice: [
      { type: "choice", prompt: "“Nghe hiểu” là cụm nào?", options: ["听懂", "听完", "听错"], answer: "听懂", source: "ai" },
      { type: "fill", prompt: "别找了，（ ）在桌子上呢。", answer: "手机", source: "book" },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["我哥哥", "比", "我", "大三岁"], answer: "我哥哥比我大三岁", source: "book" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Cửa đang mở.", answer: "门开着。", source: "book" },
      { type: "choice", prompt: "Đọc hiểu ngắn: 新年快要到了，大家都很高兴。Mọi người cảm thấy thế nào?", options: ["很高兴", "很冷", "没做完"], answer: "很高兴", source: "ai" },
      { type: "fill", prompt: "虽然汉字很难，（ ）我很喜欢写汉字。", answer: "但是", source: "book" },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Tôi chưa từng xem bộ phim đó.", answer: "我没看过那个电影。", source: "ai" }
    ],
    workbook: [
      {
        id: "final-fill-01-10",
        title: "Kiểm tra cuối - Điền từ tổng hợp",
        source: "ai",
        type: "fillChoice",
        choices: [
          { key: "A", text: "从" }, { key: "B", text: "懂" }, { key: "C", text: "别" }, { key: "D", text: "对" }, { key: "E", text: "比" }, { key: "F", text: "可能" }, { key: "G", text: "得" }, { key: "H", text: "着" }, { key: "I", text: "过" }, { key: "J", text: "都" }
        ],
        questions: [
          { id: "1", prompt: "我每天（ ）八点开始上班。", answer: "A", vocabTags: ["从", "上班"], grammarTags: ["从"] },
          { id: "2", prompt: "今天的课你都听（ ）了吗？", answer: "B", vocabTags: ["懂", "课"], grammarTags: ["Bổ ngữ kết quả"] },
          { id: "3", prompt: "妈妈睡觉了，我们（ ）看电视了。", answer: "C", vocabTags: ["别"], grammarTags: ["不要/别 + V + 了"] },
          { id: "4", prompt: "跑步（ ）身体很好。", answer: "D", vocabTags: ["对"], grammarTags: ["对"] },
          { id: "5", prompt: "苹果（ ）西瓜便宜。", answer: "E", vocabTags: ["比", "便宜", "西瓜"], grammarTags: ["比"] },
          { id: "6", prompt: "天气不太好，我觉得（ ）要下雨了。", answer: "F", vocabTags: ["可能"], grammarTags: ["可能"] },
          { id: "7", prompt: "他说（ ）很好。", answer: "G", vocabTags: ["得"], grammarTags: ["得"] },
          { id: "8", prompt: "门开（ ）呢。", answer: "H", vocabTags: ["着"], grammarTags: ["着"] },
          { id: "9", prompt: "你看（ ）那个电影吗？", answer: "I", vocabTags: ["过", "电影"], grammarTags: ["过"] },
          { id: "10", prompt: "（ ）8点了，快点儿起床吧。", answer: "J", vocabTags: ["都"], grammarTags: ["都……了"] }
        ]
      },
      {
        id: "final-judge-11-16",
        title: "Kiểm tra cuối - Đúng/Sai",
        source: "ai",
        type: "trueFalse",
        questions: [
          { id: "11", original: "题太多，我没做完。", prompt: "他说题不多。", answer: "x", explain: "Câu gốc nói câu hỏi quá nhiều.", vocabTags: ["题", "完"], grammarTags: ["Bổ ngữ kết quả"] },
          { id: "12", original: "手机在桌子上呢。", prompt: "手机不在桌子上。", answer: "x", vocabTags: ["手机"], grammarTags: [] },
          { id: "13", original: "我哥哥比我大三岁。", prompt: "哥哥比我小。", answer: "x", vocabTags: ["哥哥", "比"], grammarTags: ["比"] },
          { id: "14", original: "你穿得太少了，外面下雪了。", prompt: "外面很冷。", answer: "√", vocabTags: ["穿", "雪"], grammarTags: ["得"] },
          { id: "15", original: "她拿着铅笔。", prompt: "她手里有铅笔。", answer: "√", vocabTags: ["拿", "铅笔", "手"], grammarTags: ["着"] },
          { id: "16", original: "虽然是晴天，但是很冷。", prompt: "今天不冷。", answer: "x", vocabTags: ["虽然", "但是", "晴"], grammarTags: ["虽然……但是……"] }
        ]
      },
      {
        id: "final-match-17-21",
        title: "Kiểm tra cuối - Ghép câu",
        source: "ai",
        type: "matchChoice",
        choices: [
          { key: "A", text: "这是我的第一个工作。" },
          { key: "B", text: "哥哥正在玩电脑呢。" },
          { key: "C", text: "从这儿一直往前走。" },
          { key: "D", text: "我去过三次北京。" },
          { key: "E", text: "新年快要到了。" }
        ],
        questions: [
          { id: "17", prompt: "Đây là công việc đầu tiên của tôi.", answer: "A", vocabTags: ["第一", "工作"], grammarTags: ["第"] },
          { id: "18", prompt: "Anh trai đang chơi máy tính.", answer: "B", vocabTags: ["哥哥", "正在"], grammarTags: ["正在"] },
          { id: "19", prompt: "Từ đây cứ đi thẳng về phía trước.", answer: "C", vocabTags: ["一直", "往"], grammarTags: ["往"] },
          { id: "20", prompt: "Tôi từng đi Bắc Kinh ba lần.", answer: "D", vocabTags: ["次"], grammarTags: ["过", "次"] },
          { id: "21", prompt: "Năm mới sắp đến rồi.", answer: "E", vocabTags: ["新年"], grammarTags: ["快要……了"] }
        ]
      }
    ],
    workbookReference: [
      {
        title: "Ôn tập 2 - dữ liệu sách không tự chấm",
        source: "book",
        note: "Các phần nghe/chọn hình thiếu script, audio, hình hoặc đáp án gốc vẫn chỉ để tham khảo trong từng bài, không đưa vào kiểm tra cuối.",
        lines: [
          "Bài 9-11: không dùng các mẩu nguồn có his, me, she/Tā, ne, he/tā để tạo bài AI.",
          "Bài 12-15: HSK2.md hiện thiếu phần sách bài tập đầy đủ; không tự suy đoán đáp án sách.",
          "Bài 14-15: loại khỏi AI các ví dụ nguồn bất thường như “表达/但是” và “火车快要来换/了”."
        ]
      }
    ],
    supplementalHomework: [
      { type: "choice", prompt: "Chọn câu đúng.", options: ["姐姐比我跑得快。", "姐姐跑比我得快。", "姐姐得比我跑快。"], answer: "姐姐比我跑得快。", explain: "A 比 B V 得 Adj.", source: "ai", vocabTags: ["比", "得"], grammarTags: ["So sánh với 得"] },
      { type: "fill", prompt: "虽然外面很冷，（ ）房间里很热。", answer: "但是", explain: "虽然...但是... nối hai ý tương phản.", source: "ai", vocabTags: ["虽然", "但是"], grammarTags: ["虽然……但是……"] },
      { type: "order", prompt: "Sắp xếp câu.", pieces: ["他", "可能", "去", "旅游", "了"], answer: "他可能去旅游了", explain: "可能 đứng trước cụm động từ.", source: "ai", vocabTags: ["可能"], grammarTags: ["可能"] },
      { type: "translate", prompt: "Dịch sang tiếng Trung: Em gái tôi ngày mai sắp đi rồi.", answer: "我妹妹明天就要走了。", explain: "就要...了 nói việc sắp xảy ra.", source: "ai", vocabTags: ["妹妹"], grammarTags: ["就要……了"] }
    ],
    listeningHomework: [
      { id: "listen-review2-1", title: "Nghe chọn đáp án", source: "ai", script: "女：昨天的考试怎么样？\n男：题太多，我没做完。", prompt: "男的为什么没做完？", options: ["题太多", "手机不见了", "想去跳舞"], answer: "题太多", explain: "Script nói 题太多。", vocabTags: ["题", "完"], grammarTags: ["Bổ ngữ kết quả"] },
      { id: "listen-review2-2", title: "Nghe đúng/sai", source: "ai", script: "别找了，手机在桌子上呢。", prompt: "手机在桌子上。", options: ["√", "x"], answer: "√", explain: "Script nói 在桌子上.", vocabTags: ["别", "手机"], grammarTags: ["别 + V + 了"] },
      { id: "listen-review2-3", title: "Nghe điền từ", source: "ai", script: "我哥哥比我大三岁。", prompt: "我哥哥（ ）我大三岁。", answer: "比", explain: "Từ cần điền là 比.", vocabTags: ["哥哥", "比"], grammarTags: ["比"] },
      { id: "listen-review2-4", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：请问，宾馆怎么走？\n男：从这儿一直往前走，到了路口再往右走。", prompt: "到了路口以后怎么走？", options: ["往右走", "往左走", "回火车站"], answer: "往右走", explain: "Script nói 到了路口再往右走。", vocabTags: ["宾馆", "一直", "往", "路口"], grammarTags: ["往"] },
      { id: "listen-review2-5", title: "Nghe hội thoại và trả lời", source: "ai", script: "女：你看过那个电影吗？\n男：看过两次，虽然很长，但是很有意思。", prompt: "男的看过几次那个电影？", options: ["两次", "一次", "没看过"], answer: "两次", explain: "Script nói 看过两次。", vocabTags: ["意思", "次"], grammarTags: ["过", "虽然……但是……", "次"] }
    ]
  };

  const index = window.HSK2_DATA.lessons.findIndex((item) => item.id === lesson.id);
  if (index >= 0) window.HSK2_DATA.lessons[index] = lesson;
})();
