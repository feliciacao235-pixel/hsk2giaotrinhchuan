/**
 * Data Schema for HSK2 Standard Course - Lesson 09
 * Source: Giáo trình Chuẩn HSK 2 & Sách Bài Tập HSK 2 (migrated, official workbook answers verified)
 */

const lesson09Data = {
  "lessonInfo": {
    "id": 9,
    "titleZH": "题太多，我没做完",
    "titleVI": "Câu hỏi quá nhiều nên mình không làm hết",
    "audioMain": "audio/workbook/lesson-09-workbook-audio-1.mp3",
    "audioPronunciation": "audio/workbook/lesson-09-workbook-audio-2.mp3",
    "pronunciationAudio": "audio/workbook/lesson-09-workbook-audio-2.mp3",
    "sourceStatus": "MIGRATED_FROM_OLD_SCHEMA"
  },
  "vocabulary": [
    {
      "id": 1,
      "hanzi": "错",
      "pinyin": "cuò",
      "wordType": "Tính từ",
      "meaning": "Sai, nhầm",
      "exampleZH": "这个题我做错了。",
      "examplePinyin": "Zhège tí wǒ zuò cuò le.",
      "exampleVI": "Câu này tôi làm sai rồi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 2,
      "hanzi": "从",
      "pinyin": "cóng",
      "wordType": "Giới từ",
      "meaning": "Từ",
      "exampleZH": "从下个星期一开始上班。",
      "examplePinyin": "Cóng xià ge xīngqī yī kāishǐ shàngbān.",
      "exampleVI": "Từ thứ Hai tuần sau bắt đầu đi làm.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 3,
      "hanzi": "跳舞",
      "pinyin": "tiàowǔ",
      "wordType": "Động từ",
      "meaning": "Múa, khiêu vũ",
      "exampleZH": "这是我第一次跳舞。",
      "examplePinyin": "Zhè shì wǒ dì yī cì tiàowǔ.",
      "exampleVI": "Đây là lần đầu tiên tôi khiêu vũ.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 4,
      "hanzi": "第一",
      "pinyin": "dì-yī",
      "wordType": "Số từ",
      "meaning": "Thứ nhất, đầu tiên",
      "exampleZH": "这是我的第一个工作。",
      "examplePinyin": "Zhè shì wǒ de dì yī ge gōngzuò.",
      "exampleVI": "Đây là công việc đầu tiên của tôi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 5,
      "hanzi": "希望",
      "pinyin": "xīwàng",
      "wordType": "Động từ/Danh từ",
      "meaning": "Mong, hy vọng",
      "exampleZH": "我希望能找到一个好的工作。",
      "examplePinyin": "Wǒ xīwàng néng zhǎodào yí ge hǎo de gōngzuò.",
      "exampleVI": "Tôi hy vọng có thể tìm được một công việc tốt.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 6,
      "hanzi": "问题",
      "pinyin": "wèntí",
      "wordType": "Danh từ",
      "meaning": "Vấn đề, câu hỏi",
      "exampleZH": "你有什么问题都可以问老师。",
      "examplePinyin": "Nǐ yǒu shénme wèntí dōu kěyǐ wèn lǎoshī.",
      "exampleVI": "Bạn có vấn đề gì đều có thể hỏi thầy cô.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 7,
      "hanzi": "欢迎",
      "pinyin": "huānyíng",
      "wordType": "Động từ",
      "meaning": "Hoan nghênh, chào mừng",
      "exampleZH": "欢迎你来我家。",
      "examplePinyin": "Huānyíng nǐ lái wǒ jiā.",
      "exampleVI": "Hoan nghênh bạn đến nhà tôi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 8,
      "hanzi": "上班",
      "pinyin": "shàngbān",
      "wordType": "Động từ",
      "meaning": "Đi làm",
      "exampleZH": "我每天走路去上班。",
      "examplePinyin": "Wǒ měitiān zǒulù qù shàngbān.",
      "exampleVI": "Mỗi ngày tôi đi bộ đi làm.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 9,
      "hanzi": "懂",
      "pinyin": "dǒng",
      "wordType": "Động từ",
      "meaning": "Hiểu, biết",
      "exampleZH": "今天的课你都听懂了吗？",
      "examplePinyin": "Jīntiān de kè nǐ dōu tīng dǒng le ma?",
      "exampleVI": "Bài hôm nay bạn đều nghe hiểu chưa?",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 10,
      "hanzi": "完",
      "pinyin": "wán",
      "wordType": "Động từ/Bổ ngữ",
      "meaning": "Xong, hết, hoàn thành",
      "exampleZH": "我没做完考试题。",
      "examplePinyin": "Wǒ méi zuò wán kǎoshì tí.",
      "exampleVI": "Tôi chưa làm xong đề thi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 11,
      "hanzi": "题",
      "pinyin": "tí",
      "wordType": "Danh từ",
      "meaning": "Đề bài, câu hỏi",
      "exampleZH": "昨天的考试题很多。",
      "examplePinyin": "Zuótiān de kǎoshì tí hěn duō.",
      "exampleVI": "Đề thi hôm qua có rất nhiều câu.",
      "sourceStatus": "VERIFIED"
    }
  ],
  "grammar": [
    {
      "id": "g1",
      "name": "Bổ ngữ kết quả",
      "formula": "Động từ + bổ ngữ kết quả (+ 了)",
      "explanation": "Đứng sau động từ để nói kết quả của hành động đã đạt được hay chưa.",
      "examples": [
        {
          "zh": "我听懂今天的汉语课了。",
          "pinyin": "Wǒ tīng dǒng jīntiān de Hànyǔ kè le.",
          "vi": "Tôi đã nghe hiểu bài tiếng Trung hôm nay."
        },
        {
          "zh": "我没做完考试题。",
          "pinyin": "Wǒ méi zuò wán kǎoshì tí.",
          "vi": "Tôi chưa làm xong đề thi."
        },
        {
          "zh": "大卫找到工作了。",
          "pinyin": "Dàwèi zhǎodào gōngzuò le.",
          "vi": "David đã tìm được việc rồi."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn câu dùng bổ ngữ kết quả đúng.",
        "options": [
          "我听懂今天的课了。",
          "我懂听今天的课了。",
          "我听今天的课懂了。"
        ],
        "answer": "我听懂今天的课了。",
        "explanation": "懂 đứng ngay sau động từ 听 để nói kết quả nghe hiểu."
      }
    },
    {
      "id": "g2",
      "name": "Giới từ 从",
      "formula": "从 + điểm bắt đầu (+ 到 + điểm kết thúc)",
      "explanation": "Dùng để nói điểm xuất phát về thời gian, địa điểm hoặc phạm vi.",
      "examples": [
        {
          "zh": "从北京到上海要坐几个小时的飞机？",
          "pinyin": "Cóng Běijīng dào Shànghǎi yào zuò jǐ ge xiǎoshí de fēijī?",
          "vi": "Từ Bắc Kinh đến Thượng Hải phải ngồi máy bay mấy tiếng?"
        },
        {
          "zh": "从下个星期一开始上班。",
          "pinyin": "Cóng xià ge xīngqī yī kāishǐ shàngbān.",
          "vi": "Từ thứ Hai tuần sau bắt đầu đi làm."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "我每天（ ）八点到十二点都在公司工作。",
        "options": [],
        "answer": "从",
        "explanation": "从 đánh dấu điểm bắt đầu về thời gian."
      }
    },
    {
      "id": "g3",
      "name": "Thứ tự 第一",
      "formula": "第 + số + lượng từ + danh từ",
      "explanation": "Dùng để nói thứ tự: thứ nhất, thứ hai, lần đầu...",
      "examples": [
        {
          "zh": "这是我的第一个工作。",
          "pinyin": "Zhè shì wǒ de dì yī ge gōngzuò.",
          "vi": "Đây là công việc đầu tiên của tôi."
        },
        {
          "zh": "这是我第一次跳舞。",
          "pinyin": "Zhè shì wǒ dì yī cì tiàowǔ.",
          "vi": "Đây là lần đầu tiên tôi khiêu vũ."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "这是我的（ ）一个工作。",
        "options": [],
        "answer": "第",
        "explanation": "第 + số để nói thứ tự."
      }
    }
  ],
  "vocabularyGames": {
    "quizQuestions": [
      {
        "id": "q1",
        "type": "hanzi-to-meaning",
        "prompt": "错",
        "options": [
          "Sai, nhầm",
          "Từ",
          "Múa, khiêu vũ",
          "Thứ nhất, đầu tiên"
        ],
        "answer": "Sai, nhầm",
        "pinyin": "cuò",
        "meaning": "Sai, nhầm",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q2",
        "type": "meaning-to-hanzi",
        "prompt": "Từ",
        "options": [
          "错",
          "从",
          "跳舞",
          "第一"
        ],
        "answer": "从",
        "pinyin": "cóng",
        "meaning": "Từ",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q3",
        "type": "hanzi-to-meaning",
        "prompt": "跳舞",
        "options": [
          "Sai, nhầm",
          "Từ",
          "Múa, khiêu vũ",
          "Thứ nhất, đầu tiên"
        ],
        "answer": "Múa, khiêu vũ",
        "pinyin": "tiàowǔ",
        "meaning": "Múa, khiêu vũ",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q4",
        "type": "meaning-to-hanzi",
        "prompt": "Thứ nhất, đầu tiên",
        "options": [
          "错",
          "从",
          "跳舞",
          "第一"
        ],
        "answer": "第一",
        "pinyin": "dì-yī",
        "meaning": "Thứ nhất, đầu tiên",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p1",
        "type": "hanzi-to-pinyin",
        "prompt": "希望",
        "options": [
          "xīwàng",
          "cuò",
          "cóng",
          "tiàowǔ"
        ],
        "answer": "xīwàng",
        "meaning": "Mong, hy vọng",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p2",
        "type": "hanzi-to-pinyin",
        "prompt": "问题",
        "options": [
          "wèntí",
          "cuò",
          "cóng",
          "tiàowǔ"
        ],
        "answer": "wèntí",
        "meaning": "Vấn đề, câu hỏi",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "f1",
        "type": "meaning-to-hanzi",
        "prompt": "“Nghe hiểu” nên nói thế nào?",
        "options": [
          "听懂",
          "听完",
          "听错"
        ],
        "answer": "听懂",
        "translation": "",
        "sourceStatus": "NEEDS_VERIFICATION"
      },
      {
        "id": "f2",
        "type": "fill-blank",
        "prompt": "题太多，我没做（ ）。",
        "options": [
          "错",
          "从",
          "跳舞",
          "第一"
        ],
        "answer": "完",
        "translation": "",
        "sourceStatus": "VERIFIED"
      }
    ],
    "matchingPairs": [
      {
        "id": "m1",
        "zh": "错",
        "pinyin": "cuò",
        "vi": "Sai, nhầm"
      },
      {
        "id": "m2",
        "zh": "从",
        "pinyin": "cóng",
        "vi": "Từ"
      },
      {
        "id": "m3",
        "zh": "跳舞",
        "pinyin": "tiàowǔ",
        "vi": "Múa, khiêu vũ"
      },
      {
        "id": "m4",
        "zh": "第一",
        "pinyin": "dì-yī",
        "vi": "Thứ nhất, đầu tiên"
      },
      {
        "id": "m5",
        "zh": "希望",
        "pinyin": "xīwàng",
        "vi": "Mong, hy vọng"
      },
      {
        "id": "m6",
        "zh": "问题",
        "pinyin": "wèntí",
        "vi": "Vấn đề, câu hỏi"
      },
      {
        "id": "m7",
        "zh": "欢迎",
        "pinyin": "huānyíng",
        "vi": "Hoan nghênh, chào mừng"
      },
      {
        "id": "m8",
        "zh": "上班",
        "pinyin": "shàngbān",
        "vi": "Đi làm"
      }
    ]
  },
  "workbookExercises": {
    "audioFile": "audio/workbook/lesson-09-workbook-audio-1.mp3",
    "sourceStatus": "official-answer-key-verified",
    "listeningPart1": {
      "type": "listening-true-false-image",
      "sourceStatus": "official-workbook",
      "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 85.",
      "questions": [
        {
          "id": 1,
          "image": "images/workbook/lesson09/listening-part1/q01.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 2,
          "image": "images/workbook/lesson09/listening-part1/q02.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 3,
          "image": "images/workbook/lesson09/listening-part1/q03.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 4,
          "image": "images/workbook/lesson09/listening-part1/q04.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 5,
          "image": "images/workbook/lesson09/listening-part1/q05.png",
          "imageSource": "official-workbook",
          "answer": false
        }
      ]
    },
    "imageSets": {
      "listeningPart2": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 86.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson09/listening-part2/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson09/listening-part2/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson09/listening-part2/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson09/listening-part2/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson09/listening-part2/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson09/listening-part2/f.png",
            "imageSource": "official-workbook"
          }
        ]
      },
      "readingPart1": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 88.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson09/reading-part1/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson09/reading-part1/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson09/reading-part1/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson09/reading-part1/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson09/reading-part1/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson09/reading-part1/f.png",
            "imageSource": "official-workbook"
          }
        ]
      }
    },
    "listeningPart2": [
      {
        "id": 6,
        "question": "Câu 6",
        "answer": "B"
      },
      {
        "id": 7,
        "question": "Câu 7",
        "answer": "C"
      },
      {
        "id": 8,
        "question": "Câu 8",
        "answer": "A"
      },
      {
        "id": 9,
        "question": "Câu 9",
        "answer": "E"
      },
      {
        "id": 10,
        "question": "Câu 10",
        "answer": "F"
      }
    ],
    "listeningPart3": [
      {
        "id": 11,
        "question": "Câu 11",
        "options": [
          "A 想找女的",
          "B 想找张欢",
          "C 想去看看张欢"
        ],
        "answer": "B"
      },
      {
        "id": 12,
        "question": "Câu 12",
        "options": [
          "A 昨天",
          "B 今天",
          "C 明天"
        ],
        "answer": "C"
      },
      {
        "id": 13,
        "question": "Câu 13",
        "options": [
          "A 医院",
          "B 学校",
          "C 公司"
        ],
        "answer": "A"
      },
      {
        "id": 14,
        "question": "Câu 14",
        "options": [
          "A 没看见",
          "B 看见了",
          "C 没有报纸"
        ],
        "answer": "A"
      },
      {
        "id": 15,
        "question": "Câu 15",
        "options": [
          "A 没听懂",
          "B 不会做",
          "C 没做完"
        ],
        "answer": "C"
      }
    ],
    "readingPart1": [
      {
        "id": 16,
        "text": "非常欢迎你来我们公司上班。",
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
        "text": "吃完晚饭后，她还要慢跑一个小时。",
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
        "text": "考试不难，我都做对了。",
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
        "text": "我希望能和朋友们一起过生日。",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "answer": "B"
      },
      {
        "id": 20,
        "text": "从我家到学校要坐一个多小时的公共汽车。",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "answer": "C"
      }
    ],
    "readingPart2": {
      "options": [
        {
          "key": "A",
          "word": "上班"
        },
        {
          "key": "B",
          "word": "从"
        },
        {
          "key": "C",
          "word": "希望"
        },
        {
          "key": "D",
          "word": "问题"
        },
        {
          "key": "E",
          "word": "贵"
        },
        {
          "key": "F",
          "word": "懂"
        }
      ],
      "questions": [
        {
          "id": 21,
          "text": "我每天（ ）八点到十二点都在公司工作。",
          "answer": "B"
        },
        {
          "id": 22,
          "text": "我家离公司不太远，所以每天走路去（ ）。",
          "answer": "A"
        },
        {
          "id": 23,
          "text": "今天的课你都听（ ）了吗？",
          "answer": "F"
        },
        {
          "id": 24,
          "text": "你有什么（ ）都可以问老师。",
          "answer": "D"
        },
        {
          "id": 25,
          "text": "我（ ）能找到一个好的工作。",
          "answer": "C"
        }
      ]
    },
    "readingPart3": [
      {
        "id": 26,
        "text": "我女儿已经六岁了，我希望她能跟我学唱歌。",
        "statement": "她女儿唱歌非常好。",
        "answer": false,
        "explanation": "Câu gốc chỉ nói hy vọng con gái học hát."
      },
      {
        "id": 27,
        "text": "这是他的第一个工作，从下个星期开始上班，希望他能喜欢这个工作。",
        "statement": "他还没有上班呢。",
        "answer": true,
        "explanation": "Nguồn có lẫn chữ “his”; giữ nguyên câu nguồn."
      },
      {
        "id": 28,
        "text": "昨天的考试不太难，题很多，我有两个题没有做完。",
        "statement": "这次考试题很多，很难。",
        "answer": false,
        "explanation": "Câu gốc nói không quá khó."
      },
      {
        "id": 29,
        "text": "今天是9月20号，还有三天就是爸爸的生日了。我想送他一个新手机。",
        "statement": "9月23号是我的生日。",
        "answer": false,
        "explanation": "Ngày 23 là sinh nhật bố."
      },
      {
        "id": 30,
        "text": "我的一个朋友正在找房子，希望离公司近一些，这样他每天七点起床就可以了。",
        "statement": "他的朋友现在每天七点起床。",
        "answer": false,
        "explanation": "Câu gốc nói nếu gần công ty thì có thể dậy lúc bảy giờ."
      }
    ],
    "readingPart4": {
      "options": [
        {
          "key": "A",
          "text": "就在前面，你还没看见吗？"
        },
        {
          "key": "B",
          "text": "非常好，我想明年再来一次。"
        },
        {
          "key": "C",
          "text": "还可以，都做完了。"
        },
        {
          "key": "D",
          "text": "这些衣服你一个人能洗完吗？"
        },
        {
          "key": "E",
          "text": "他在哪儿呢？你看见 他 了吗？（例）"
        },
        {
          "key": "F",
          "text": "等等我，我也想去。"
        }
      ],
      "questions": [
        {
          "id": 31,
          "text": "昨天的考试怎么样？题都做完了吗？",
          "answer": "C"
        },
        {
          "id": 32,
          "text": "没关系，今天洗一些，明天再洗一些。",
          "answer": "D"
        },
        {
          "id": 33,
          "text": "你看见我哥哥了吗？",
          "answer": "A"
        },
        {
          "id": 34,
          "text": "羊肉吃完了，我再去商店买一些吧。",
          "answer": "F"
        },
        {
          "id": 35,
          "text": "第一次来北京吧？北京漂亮吗？",
          "answer": "B"
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

window.lesson09Data = lesson09Data;
