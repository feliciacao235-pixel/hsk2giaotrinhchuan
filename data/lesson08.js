/**
 * Data Schema for HSK2 Standard Course - Lesson 08
 * Source: Giáo trình Chuẩn HSK 2 & Sách Bài Tập HSK 2 (migrated, official workbook answers verified)
 */

const lesson08Data = {
  "lessonInfo": {
    "id": 8,
    "titleZH": "让我想想再告诉你",
    "titleVI": "Để mình suy nghĩ rồi sẽ nói cho bạn biết",
    "audioMain": "audio/workbook/lesson-08-workbook-audio-1.mp3",
    "audioPronunciation": "audio/workbook/lesson-08-workbook-audio-2.mp3",
    "pronunciationAudio": "audio/workbook/lesson-08-workbook-audio-2.mp3",
    "sourceStatus": "MIGRATED_FROM_OLD_SCHEMA"
  },
  "vocabulary": [
    {
      "id": 1,
      "hanzi": "再",
      "pinyin": "zài",
      "wordType": "Phó từ",
      "meaning": "Lại, lần nữa, hãy, rồi sẽ...",
      "exampleZH": "明天再给他打电话吧。",
      "examplePinyin": "Míngtiān zài gěi tā dǎ diànhuà ba.",
      "exampleVI": "Ngày mai hãy gọi lại cho cậu ấy nhé.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 2,
      "hanzi": "让",
      "pinyin": "ràng",
      "wordType": "Động từ",
      "meaning": "Để, bảo, cho phép",
      "exampleZH": "王老师让我给张朋打个电话。",
      "examplePinyin": "Wáng lǎoshī ràng wǒ gěi Zhāng Péng dǎ ge diànhuà.",
      "exampleVI": "Thầy Vương bảo tôi gọi điện cho Trương Bằng.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 3,
      "hanzi": "告诉",
      "pinyin": "gàosù",
      "wordType": "Động từ",
      "meaning": "Nói, bảo, nói cho biết",
      "exampleZH": "让我想想再告诉你。",
      "examplePinyin": "Ràng wǒ xiǎngxiang zài gàosu nǐ.",
      "exampleVI": "Để tôi suy nghĩ rồi sẽ nói cho bạn biết.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 4,
      "hanzi": "等",
      "pinyin": "děng",
      "wordType": "Động từ",
      "meaning": "Đợi, chờ",
      "exampleZH": "他让你等一会儿。",
      "examplePinyin": "Tā ràng nǐ děng yíhuìr.",
      "exampleVI": "Thầy ấy bảo bạn đợi một lát.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 5,
      "hanzi": "找",
      "pinyin": "zhǎo",
      "wordType": "Động từ",
      "meaning": "Tìm, tìm kiếm",
      "exampleZH": "下个星期再找时间。",
      "examplePinyin": "Xià ge xīngqī zài zhǎo shíjiān.",
      "exampleVI": "Tuần sau lại tìm thời gian.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 6,
      "hanzi": "事情",
      "pinyin": "shìqing",
      "wordType": "Danh từ",
      "meaning": "Sự việc, việc",
      "exampleZH": "你找服务员有什么事情？",
      "examplePinyin": "Nǐ zhǎo fúwùyuán yǒu shénme shìqing?",
      "exampleVI": "Bạn tìm nhân viên phục vụ có việc gì?",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 7,
      "hanzi": "服务员",
      "pinyin": "fúwùyuán",
      "wordType": "Danh từ",
      "meaning": "Nhân viên phục vụ, bồi bàn",
      "exampleZH": "请问，你找服务员有什么事情？",
      "examplePinyin": "Qǐngwèn, nǐ zhǎo fúwùyuán yǒu shénme shìqing?",
      "exampleVI": "Xin hỏi, bạn tìm nhân viên phục vụ có việc gì?",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 8,
      "hanzi": "白",
      "pinyin": "bái",
      "wordType": "Tính từ",
      "meaning": "Trắng, có màu trắng",
      "exampleZH": "这件白的有点儿长。",
      "examplePinyin": "Zhè jiàn bái de yǒudiǎnr cháng.",
      "exampleVI": "Chiếc màu trắng này hơi dài.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 9,
      "hanzi": "黑",
      "pinyin": "hēi",
      "wordType": "Tính từ",
      "meaning": "Đen, có màu đen",
      "exampleZH": "那件黑的有点儿贵。",
      "examplePinyin": "Nà jiàn hēi de yǒudiǎnr guì.",
      "exampleVI": "Chiếc màu đen kia hơi đắt.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 10,
      "hanzi": "贵",
      "pinyin": "guì",
      "wordType": "Tính từ",
      "meaning": "Đắt, mắc",
      "exampleZH": "这个商店的东西有点儿贵。",
      "examplePinyin": "Zhège shāngdiàn de dōngxi yǒudiǎnr guì.",
      "exampleVI": "Đồ ở cửa hàng này hơi đắt.",
      "sourceStatus": "VERIFIED"
    }
  ],
  "grammar": [
    {
      "id": "g1",
      "name": "Câu hỏi ……, 好吗？",
      "formula": "Mệnh đề đề xuất + ，好吗？",
      "explanation": "Đặt cuối câu để đưa ra đề xuất và hỏi ý kiến người nghe.",
      "examples": [
        {
          "zh": "我们一起去吃饭，好吗？",
          "pinyin": "Wǒmen yìqǐ qù chīfàn, hǎo ma?",
          "vi": "Chúng ta cùng đi ăn cơm nhé, được không?"
        },
        {
          "zh": "你明天下午给我打电话，好吗？",
          "pinyin": "Nǐ míngtiān xiàwǔ gěi wǒ dǎ diànhuà, hǎo ma?",
          "vi": "Chiều mai bạn gọi điện cho tôi nhé, được không?"
        },
        {
          "zh": "我们下午去看电影，好吗？",
          "pinyin": "Wǒmen xiàwǔ qù kàn diànyǐng, hǎo ma?",
          "vi": "Chiều nay chúng ta đi xem phim nhé, được không?"
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn câu đề nghị đúng.",
        "options": [
          "晚上去看电影，好吗？",
          "好吗晚上去看电影？",
          "晚上好吗去看电影？"
        ],
        "answer": "晚上去看电影，好吗？",
        "explanation": "好吗 đặt cuối mệnh đề đề xuất."
      }
    },
    {
      "id": "g2",
      "name": "Phó từ 再",
      "formula": "再 + động từ",
      "explanation": "Biểu thị hành động sẽ lặp lại hoặc xảy ra sau một điều kiện/tình huống khác.",
      "examples": [
        {
          "zh": "你再看看这本书吧。",
          "pinyin": "Nǐ zài kànkan zhè běn shū ba.",
          "vi": "Bạn hãy đọc lại quyển sách này đi."
        },
        {
          "zh": "你明天再给我打电话吧。",
          "pinyin": "Nǐ míngtiān zài gěi wǒ dǎ diànhuà ba.",
          "vi": "Ngày mai bạn hãy gọi lại cho tôi nhé."
        },
        {
          "zh": "让我想想再告诉你。",
          "pinyin": "Ràng wǒ xiǎngxiang zài gàosu nǐ.",
          "vi": "Để tôi suy nghĩ đã rồi sẽ nói cho bạn biết."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn câu dùng 再 đúng.",
        "options": [
          "你明天再给我打电话吧。",
          "你再明天给我打电话吧。",
          "你给我再明天打电话吧。"
        ],
        "answer": "你明天再给我打电话吧。",
        "explanation": "再 đứng trước động từ 给/打电话."
      }
    },
    {
      "id": "g3",
      "name": "Câu kiêm ngữ",
      "formula": "Chủ ngữ + 请/让/叫 + tân ngữ/chủ ngữ + động từ 2",
      "explanation": "Tân ngữ của động từ thứ nhất đồng thời là chủ ngữ thực hiện hành động thứ hai.",
      "examples": [
        {
          "zh": "我请你吃饭。",
          "pinyin": "Wǒ qǐng nǐ chīfàn.",
          "vi": "Tôi mời bạn ăn cơm."
        },
        {
          "zh": "你让我再想想。",
          "pinyin": "Nǐ ràng wǒ zài xiǎngxiang.",
          "vi": "Bạn để tôi suy nghĩ thêm đã."
        },
        {
          "zh": "我叫人去看看。",
          "pinyin": "Wǒ jiào rén qù kànkan.",
          "vi": "Tôi bảo người đi xem thử."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "王老师（ ）我给张朋打个电话。",
        "options": [],
        "answer": "让",
        "explanation": "让 + người + làm việc gì."
      }
    },
    {
      "id": "g4",
      "name": "Lặp lại động từ",
      "formula": "A → AA / A一A; AB → ABAB",
      "explanation": "Diễn tả hành động ngắn, nhẹ, thử làm hoặc làm một chút.",
      "examples": [
        {
          "zh": "说说 / 说一说",
          "pinyin": "shuōshuo / shuō yi shuō",
          "vi": "Nói một chút."
        },
        {
          "zh": "看看 / 看一看",
          "pinyin": "kànkan / kàn yi kàn",
          "vi": "Xem thử."
        },
        {
          "zh": "准备准备",
          "pinyin": "zhǔnbèi zhǔnbèi",
          "vi": "Chuẩn bị một chút."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "你再（ ）这本书吧。",
        "options": [],
        "answer": "看看",
        "explanation": "看 lặp lại thành 看看 để nói xem thử/xem một chút."
      }
    }
  ],
  "vocabularyGames": {
    "quizQuestions": [
      {
        "id": "q1",
        "type": "hanzi-to-meaning",
        "prompt": "再",
        "options": [
          "Lại, lần nữa, hãy, rồi sẽ...",
          "Để, bảo, cho phép",
          "Nói, bảo, nói cho biết",
          "Đợi, chờ"
        ],
        "answer": "Lại, lần nữa, hãy, rồi sẽ...",
        "pinyin": "zài",
        "meaning": "Lại, lần nữa, hãy, rồi sẽ...",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q2",
        "type": "meaning-to-hanzi",
        "prompt": "Để, bảo, cho phép",
        "options": [
          "再",
          "让",
          "告诉",
          "等"
        ],
        "answer": "让",
        "pinyin": "ràng",
        "meaning": "Để, bảo, cho phép",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q3",
        "type": "hanzi-to-meaning",
        "prompt": "告诉",
        "options": [
          "Lại, lần nữa, hãy, rồi sẽ...",
          "Để, bảo, cho phép",
          "Nói, bảo, nói cho biết",
          "Đợi, chờ"
        ],
        "answer": "Nói, bảo, nói cho biết",
        "pinyin": "gàosù",
        "meaning": "Nói, bảo, nói cho biết",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q4",
        "type": "meaning-to-hanzi",
        "prompt": "Đợi, chờ",
        "options": [
          "再",
          "让",
          "告诉",
          "等"
        ],
        "answer": "等",
        "pinyin": "děng",
        "meaning": "Đợi, chờ",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p1",
        "type": "hanzi-to-pinyin",
        "prompt": "找",
        "options": [
          "zhǎo",
          "zài",
          "ràng",
          "gàosù"
        ],
        "answer": "zhǎo",
        "meaning": "Tìm, tìm kiếm",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p2",
        "type": "hanzi-to-pinyin",
        "prompt": "事情",
        "options": [
          "shìqing",
          "zài",
          "ràng",
          "gàosù"
        ],
        "answer": "shìqing",
        "meaning": "Sự việc, việc",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "f1",
        "type": "meaning-to-hanzi",
        "prompt": "“Nhân viên phục vụ” là từ nào?",
        "options": [
          "服务员",
          "事情",
          "告诉",
          "找"
        ],
        "answer": "服务员",
        "translation": "",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "f2",
        "type": "fill-blank",
        "prompt": "王老师（ ）我告诉你。",
        "options": [
          "再",
          "让",
          "告诉",
          "等"
        ],
        "answer": "让",
        "translation": "",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "f3",
        "type": "meaning-to-hanzi",
        "prompt": "Chọn nghĩa đúng của 贵.",
        "options": [
          "Đắt",
          "Trắng",
          "Đen",
          "Đợi"
        ],
        "answer": "Đắt",
        "translation": "",
        "sourceStatus": "VERIFIED"
      }
    ],
    "matchingPairs": [
      {
        "id": "m1",
        "zh": "再",
        "pinyin": "zài",
        "vi": "Lại, lần nữa, hãy, rồi sẽ..."
      },
      {
        "id": "m2",
        "zh": "让",
        "pinyin": "ràng",
        "vi": "Để, bảo, cho phép"
      },
      {
        "id": "m3",
        "zh": "告诉",
        "pinyin": "gàosù",
        "vi": "Nói, bảo, nói cho biết"
      },
      {
        "id": "m4",
        "zh": "等",
        "pinyin": "děng",
        "vi": "Đợi, chờ"
      },
      {
        "id": "m5",
        "zh": "找",
        "pinyin": "zhǎo",
        "vi": "Tìm, tìm kiếm"
      },
      {
        "id": "m6",
        "zh": "事情",
        "pinyin": "shìqing",
        "vi": "Sự việc, việc"
      },
      {
        "id": "m7",
        "zh": "服务员",
        "pinyin": "fúwùyuán",
        "vi": "Nhân viên phục vụ, bồi bàn"
      },
      {
        "id": "m8",
        "zh": "白",
        "pinyin": "bái",
        "vi": "Trắng, có màu trắng"
      }
    ]
  },
  "workbookExercises": {
    "audioFile": "audio/workbook/lesson-08-workbook-audio-1.mp3",
    "sourceStatus": "official-answer-key-verified",
    "listeningPart1": {
      "type": "listening-true-false-image",
      "sourceStatus": "official-workbook",
      "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 76.",
      "questions": [
        {
          "id": 1,
          "image": "images/workbook/lesson08/listening-part1/q01.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 2,
          "image": "images/workbook/lesson08/listening-part1/q02.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 3,
          "image": "images/workbook/lesson08/listening-part1/q03.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 4,
          "image": "images/workbook/lesson08/listening-part1/q04.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 5,
          "image": "images/workbook/lesson08/listening-part1/q05.png",
          "imageSource": "official-workbook",
          "answer": false
        }
      ]
    },
    "imageSets": {
      "listeningPart2": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 77.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson08/listening-part2/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson08/listening-part2/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson08/listening-part2/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson08/listening-part2/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson08/listening-part2/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson08/listening-part2/f.png",
            "imageSource": "official-workbook"
          }
        ]
      },
      "readingPart1": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 79.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson08/reading-part1/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson08/reading-part1/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson08/reading-part1/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson08/reading-part1/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson08/reading-part1/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson08/reading-part1/f.png",
            "imageSource": "official-workbook"
          }
        ]
      }
    },
    "listeningPart2": [
      {
        "id": 6,
        "question": "Câu 6",
        "answer": "A"
      },
      {
        "id": 7,
        "question": "Câu 7",
        "answer": "E"
      },
      {
        "id": 8,
        "question": "Câu 8",
        "answer": "F"
      },
      {
        "id": 9,
        "question": "Câu 9",
        "answer": "B"
      },
      {
        "id": 10,
        "question": "Câu 10",
        "answer": "C"
      }
    ],
    "listeningPart3": [
      {
        "id": 11,
        "question": "Câu 11",
        "options": [
          "A 手机",
          "B 手表",
          "C 自行车"
        ],
        "answer": "A"
      },
      {
        "id": 12,
        "question": "Câu 12",
        "options": [
          "A 想唱歌",
          "B 想看电影",
          "C 想看电视"
        ],
        "answer": "B"
      },
      {
        "id": 13,
        "question": "Câu 13",
        "options": [
          "A 踢足球",
          "B 跑步",
          "C 打篮球"
        ],
        "answer": "C"
      },
      {
        "id": 14,
        "question": "Câu 14",
        "options": [
          "A 老师",
          "B 医生",
          "C 服务员"
        ],
        "answer": "C"
      },
      {
        "id": 15,
        "question": "Câu 15",
        "options": [
          "A 都不好",
          "B 黑的",
          "C 白的"
        ],
        "answer": "A"
      }
    ],
    "readingPart1": [
      {
        "id": 16,
        "text": "我今天很忙，没时间看电影。",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "answer": "E"
      },
      {
        "id": 17,
        "text": "外面天气很好，我们一起去运动运动吧。",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "answer": "A"
      },
      {
        "id": 18,
        "text": "王老师让我给张朋打个电话。",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "answer": "F"
      },
      {
        "id": 19,
        "text": "妈妈生病了，我们去医院看看她吧。",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "answer": "C"
      },
      {
        "id": 20,
        "text": "小王告诉我，这个商店的东西有点儿贵。",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "answer": "B"
      }
    ],
    "readingPart2": {
      "options": [
        {
          "key": "A",
          "word": "等"
        },
        {
          "key": "B",
          "word": "让"
        },
        {
          "key": "C",
          "word": "再"
        },
        {
          "key": "D",
          "word": "事情"
        },
        {
          "key": "E",
          "word": "贵"
        },
        {
          "key": "F",
          "word": "找"
        }
      ],
      "questions": [
        {
          "id": 21,
          "text": "我这个星期太忙了，下个星期再（ ）时间一起去看电影吧。",
          "answer": "F"
        },
        {
          "id": 22,
          "text": "张老师在上课呢，他让你（ ）一会儿。",
          "answer": "A"
        },
        {
          "id": 23,
          "text": "王老师（ ）我告诉你，明天他有事，不能来上课了。",
          "answer": "B"
        },
        {
          "id": 24,
          "text": "大卫今天不在家，你明天（ ）给他打电话吧。",
          "answer": "C"
        },
        {
          "id": 25,
          "text": "请问，你找服务员有什么（ ）？",
          "answer": "D"
        }
      ]
    },
    "readingPart3": [
      {
        "id": 26,
        "text": "王老师让我给大卫打个电话。",
        "statement": "王老师给大卫打电话。",
        "answer": false,
        "explanation": "Sai, thầy Vương bảo tôi gọi."
      },
      {
        "id": 27,
        "text": "今天下午我没时间，明天再去看电影吧。",
        "statement": "今天不能去看电影。",
        "answer": true,
        "explanation": "Đúng."
      },
      {
        "id": 28,
        "text": "这件白的有点儿长，那件黑的有点儿贵。",
        "statement": "两件衣服，我都不喜欢。",
        "answer": true,
        "explanation": "Sai, câu gốc chỉ mô tả áo trắng hơi dài, áo đen hơi đắt."
      },
      {
        "id": 29,
        "text": "今天天气不太好，等天气好的时候再给你买自行车吧。",
        "statement": "外面正在下雨。",
        "answer": false,
        "explanation": "Sai, thời tiết không tốt không chắc là đang mưa."
      },
      {
        "id": 30,
        "text": "你看，这是我们家的猫，眼睛漂亮吧？是我姐姐送给我的。",
        "statement": "猫不是我家的。",
        "answer": false,
        "explanation": "Sai, nguồn nói 这是我们家的猫; câu nguồn có chữ “de”."
      }
    ],
    "readingPart4": {
      "options": [
        {
          "key": "A",
          "text": "这件白的有点儿长，这件黑的我也不太喜欢，我再看看吧。"
        },
        {
          "key": "B",
          "text": "服务员，我想 要点儿 热水。"
        },
        {
          "key": "C",
          "text": "明天要考试，考试后再去看吧。"
        },
        {
          "key": "D",
          "text": "让我 想想 再 告诉你。"
        },
        {
          "key": "E",
          "text": "他在哪儿呢？你看见 他 了吗？（例）"
        },
        {
          "key": "F",
          "text": "听说他生病了，我想去医院看看他。"
        }
      ],
      "questions": [
        {
          "id": 31,
          "text": "你想看什么电影？",
          "answer": "D"
        },
        {
          "id": 32,
          "text": "你找大卫有什么事情吗？",
          "answer": "F"
        },
        {
          "id": 33,
          "text": "这些都是今天新来的衣服。",
          "answer": "A"
        },
        {
          "id": 34,
          "text": "好的，请问您住哪个房间？",
          "answer": "B"
        },
        {
          "id": 35,
          "text": "晚上去看电影，好吗？",
          "answer": "C"
        }
      ]
    }
  },
  "migrationAudit": {
    "officialAnswersSource": "HSK2 Đáp án sách bài tập.pdf",
    "officialImagesSource": "HSK 2 Sách bài tập.pdf",
    "audioSource": "audio/workbook",
    "cleanedSourceArtifacts": [
      "Mixed English tokens in old source were normalized where official text was clear."
    ],
    "needsVerification": []
  }
};

window.lesson08Data = lesson08Data;
