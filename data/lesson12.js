/**
 * Data Schema for HSK2 Standard Course - Lesson 12
 * Source: Giáo trình Chuẩn HSK 2 & Sách Bài Tập HSK 2 (migrated, official workbook answers verified)
 */

const lesson12Data = {
  "lessonInfo": {
    "id": 12,
    "titleZH": "你穿得太少了",
    "titleVI": "Bạn mặc ít quá",
    "audioMain": "audio/workbook/lesson-12-workbook-audio-1.mp3",
    "audioPronunciation": "audio/workbook/lesson-12-workbook-audio-2.mp3",
    "pronunciationAudio": "audio/workbook/lesson-12-workbook-audio-2.mp3",
    "sourceStatus": "MIGRATED_FROM_OLD_SCHEMA"
  },
  "vocabulary": [
    {
      "id": 1,
      "hanzi": "得",
      "pinyin": "de",
      "wordType": "Trợ từ",
      "meaning": "Trợ từ dùng trước bổ ngữ trạng thái",
      "exampleZH": "他说得很好。",
      "examplePinyin": "Tā shuō de hěn hǎo.",
      "exampleVI": "Anh ấy nói rất tốt.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 2,
      "hanzi": "妻子",
      "pinyin": "qīzi",
      "wordType": "Danh từ",
      "meaning": "Vợ",
      "exampleZH": "我妻子比我做得好。",
      "examplePinyin": "Wǒ qīzi bǐ wǒ zuò de hǎo.",
      "exampleVI": "Vợ tôi làm tốt hơn tôi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 3,
      "hanzi": "雪",
      "pinyin": "xuě",
      "wordType": "Danh từ",
      "meaning": "Tuyết",
      "exampleZH": "外面下雪了。",
      "examplePinyin": "Wàimian xià xuě le.",
      "exampleVI": "Bên ngoài tuyết rơi rồi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 4,
      "hanzi": "零",
      "pinyin": "líng",
      "wordType": "Số từ",
      "meaning": "Số không",
      "exampleZH": "今天零度。",
      "examplePinyin": "Jīntiān líng dù.",
      "exampleVI": "Hôm nay 0 độ.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 5,
      "hanzi": "度",
      "pinyin": "dù",
      "wordType": "Lượng từ",
      "meaning": "Độ",
      "exampleZH": "昨天二十五度。",
      "examplePinyin": "Zuótiān èrshíwǔ dù.",
      "exampleVI": "Hôm qua 25 độ.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 6,
      "hanzi": "穿",
      "pinyin": "chuān",
      "wordType": "Động từ",
      "meaning": "Mặc",
      "exampleZH": "你穿得太少了。",
      "examplePinyin": "Nǐ chuān de tài shǎo le.",
      "exampleVI": "Bạn mặc ít quá.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 7,
      "hanzi": "进",
      "pinyin": "jìn",
      "wordType": "Động từ",
      "meaning": "Vào",
      "exampleZH": "请进。",
      "examplePinyin": "Qǐng jìn.",
      "exampleVI": "Mời vào.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 8,
      "hanzi": "弟弟",
      "pinyin": "dìdi",
      "wordType": "Danh từ",
      "meaning": "Em trai",
      "exampleZH": "我弟弟跑得很快。",
      "examplePinyin": "Wǒ dìdi pǎo de hěn kuài.",
      "exampleVI": "Em trai tôi chạy rất nhanh.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 9,
      "hanzi": "近",
      "pinyin": "jìn",
      "wordType": "Tính từ",
      "meaning": "Gần",
      "exampleZH": "我家离学校很近。",
      "examplePinyin": "Wǒ jiā lí xuéxiào hěn jìn.",
      "exampleVI": "Nhà tôi cách trường rất gần.",
      "sourceStatus": "VERIFIED"
    }
  ],
  "grammar": [
    {
      "id": "g1",
      "name": "Bổ ngữ trạng thái 得",
      "formula": "Động từ + 得 + tính từ/cụm miêu tả",
      "explanation": "Dùng để nói hành động được thực hiện như thế nào.",
      "examples": [
        {
          "zh": "他说得很好。",
          "pinyin": "Tā shuō de hěn hǎo.",
          "vi": "Anh ấy nói rất tốt."
        },
        {
          "zh": "我起得很早。",
          "pinyin": "Wǒ qǐ de hěn zǎo.",
          "vi": "Tôi dậy rất sớm."
        },
        {
          "zh": "他说得不好。",
          "pinyin": "Tā shuō de bù hǎo.",
          "vi": "Anh ấy nói không tốt."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn câu dùng 得 đúng.",
        "options": [
          "他说得很好。",
          "他说很好得。",
          "他得说很好。"
        ],
        "answer": "他说得很好。",
        "explanation": "得 đứng sau động từ 说."
      }
    },
    {
      "id": "g2",
      "name": "So sánh với bổ ngữ trạng thái",
      "formula": "A + 比 + B + V + 得 + tính từ",
      "explanation": "Dùng 比 kết hợp 得 để so sánh mức độ làm một việc.",
      "examples": [
        {
          "zh": "他比我学得好。",
          "pinyin": "Tā bǐ wǒ xué de hǎo.",
          "vi": "Anh ấy học tốt hơn tôi."
        },
        {
          "zh": "姐姐比我跑得快。",
          "pinyin": "Jiějie bǐ wǒ pǎo de kuài.",
          "vi": "Chị chạy nhanh hơn tôi."
        },
        {
          "zh": "我妻子比我做得好。",
          "pinyin": "Wǒ qīzi bǐ wǒ zuò de hǎo.",
          "vi": "Vợ tôi làm tốt hơn tôi."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn câu so sánh đúng.",
        "options": [
          "他比我学得好。",
          "他学比我得好。",
          "他比我得学好。"
        ],
        "answer": "他比我学得好。",
        "explanation": "A 比 B V 得 Adj."
      }
    }
  ],
  "vocabularyGames": {
    "quizQuestions": [
      {
        "id": "q1",
        "type": "hanzi-to-meaning",
        "prompt": "得",
        "options": [
          "Trợ từ dùng trước bổ ngữ trạng thái",
          "Vợ",
          "Tuyết",
          "Số không"
        ],
        "answer": "Trợ từ dùng trước bổ ngữ trạng thái",
        "pinyin": "de",
        "meaning": "Trợ từ dùng trước bổ ngữ trạng thái",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q2",
        "type": "meaning-to-hanzi",
        "prompt": "Vợ",
        "options": [
          "得",
          "妻子",
          "雪",
          "零"
        ],
        "answer": "妻子",
        "pinyin": "qīzi",
        "meaning": "Vợ",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q3",
        "type": "hanzi-to-meaning",
        "prompt": "雪",
        "options": [
          "Trợ từ dùng trước bổ ngữ trạng thái",
          "Vợ",
          "Tuyết",
          "Số không"
        ],
        "answer": "Tuyết",
        "pinyin": "xuě",
        "meaning": "Tuyết",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q4",
        "type": "meaning-to-hanzi",
        "prompt": "Số không",
        "options": [
          "得",
          "妻子",
          "雪",
          "零"
        ],
        "answer": "零",
        "pinyin": "líng",
        "meaning": "Số không",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p1",
        "type": "hanzi-to-pinyin",
        "prompt": "度",
        "options": [
          "dù",
          "de",
          "qīzi",
          "xuě"
        ],
        "answer": "dù",
        "meaning": "Độ",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p2",
        "type": "hanzi-to-pinyin",
        "prompt": "穿",
        "options": [
          "chuān",
          "de",
          "qīzi",
          "xuě"
        ],
        "answer": "chuān",
        "meaning": "Mặc",
        "sourceStatus": "VERIFIED"
      }
    ],
    "matchingPairs": [
      {
        "id": "m1",
        "zh": "得",
        "pinyin": "de",
        "vi": "Trợ từ dùng trước bổ ngữ trạng thái"
      },
      {
        "id": "m2",
        "zh": "妻子",
        "pinyin": "qīzi",
        "vi": "Vợ"
      },
      {
        "id": "m3",
        "zh": "雪",
        "pinyin": "xuě",
        "vi": "Tuyết"
      },
      {
        "id": "m4",
        "zh": "零",
        "pinyin": "líng",
        "vi": "Số không"
      },
      {
        "id": "m5",
        "zh": "度",
        "pinyin": "dù",
        "vi": "Độ"
      },
      {
        "id": "m6",
        "zh": "穿",
        "pinyin": "chuān",
        "vi": "Mặc"
      },
      {
        "id": "m7",
        "zh": "进",
        "pinyin": "jìn",
        "vi": "Vào"
      },
      {
        "id": "m8",
        "zh": "弟弟",
        "pinyin": "dìdi",
        "vi": "Em trai"
      }
    ]
  },
  "workbookExercises": {
    "audioFile": "audio/workbook/lesson-12-workbook-audio-1.mp3",
    "sourceStatus": "official-answer-key-verified",
    "listeningPart1": {
      "type": "listening-true-false-image",
      "sourceStatus": "official-workbook",
      "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 112.",
      "questions": [
        {
          "id": 1,
          "image": "images/workbook/lesson12/listening-part1/q01.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 2,
          "image": "images/workbook/lesson12/listening-part1/q02.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 3,
          "image": "images/workbook/lesson12/listening-part1/q03.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 4,
          "image": "images/workbook/lesson12/listening-part1/q04.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 5,
          "image": "images/workbook/lesson12/listening-part1/q05.png",
          "imageSource": "official-workbook",
          "answer": false
        }
      ]
    },
    "imageSets": {
      "listeningPart2": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 113.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson12/listening-part2/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson12/listening-part2/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson12/listening-part2/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson12/listening-part2/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson12/listening-part2/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson12/listening-part2/f.png",
            "imageSource": "official-workbook"
          }
        ]
      },
      "readingPart1": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 115.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson12/reading-part1/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson12/reading-part1/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson12/reading-part1/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson12/reading-part1/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson12/reading-part1/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson12/reading-part1/f.png",
            "imageSource": "official-workbook"
          }
        ]
      }
    },
    "listeningPart2": [
      {
        "id": 6,
        "question": "Câu 6",
        "answer": "F"
      },
      {
        "id": 7,
        "question": "Câu 7",
        "answer": "B"
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
        "answer": "C"
      }
    ],
    "listeningPart3": [
      {
        "id": 11,
        "question": "Câu 11",
        "options": [
          "A Lựa chọn A",
          "B Lựa chọn B",
          "C Lựa chọn C"
        ],
        "answer": "C"
      },
      {
        "id": 12,
        "question": "Câu 12",
        "options": [
          "A Lựa chọn A",
          "B Lựa chọn B",
          "C Lựa chọn C"
        ],
        "answer": "A"
      },
      {
        "id": 13,
        "question": "Câu 13",
        "options": [
          "A Lựa chọn A",
          "B Lựa chọn B",
          "C Lựa chọn C"
        ],
        "answer": "B"
      },
      {
        "id": 14,
        "question": "Câu 14",
        "options": [
          "A Lựa chọn A",
          "B Lựa chọn B",
          "C Lựa chọn C"
        ],
        "answer": "A"
      },
      {
        "id": 15,
        "question": "Câu 15",
        "options": [
          "A Lựa chọn A",
          "B Lựa chọn B",
          "C Lựa chọn C"
        ],
        "answer": "C"
      }
    ],
    "readingPart1": [
      {
        "id": 16,
        "text": "别离电脑太近，对眼睛不好。",
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
        "text": "妻子这几天很忙，所以我洗衣服。",
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
        "id": 18,
        "text": "今天零下十度，比昨天冷多了。你多穿点儿衣服吧。",
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
        "id": 19,
        "text": "你唱歌唱得太好了，再来一个吧。",
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
        "text": "今天比昨天起得早，所以我走路去上班。",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "answer": "F"
      }
    ],
    "readingPart2": {
      "options": [
        {
          "key": "A",
          "word": "穿"
        },
        {
          "key": "B",
          "word": "进"
        },
        {
          "key": "C",
          "word": "近"
        },
        {
          "key": "D",
          "word": "让"
        },
        {
          "key": "E",
          "word": "贵"
        },
        {
          "key": "F",
          "word": "希望"
        }
      ],
      "questions": [
        {
          "id": 21,
          "text": "他的家比我的家离公司（ ）一点儿。",
          "answer": "C"
        },
        {
          "id": 22,
          "text": "我（ ）找一个比现在钱多一点儿的工作。",
          "answer": "F"
        },
        {
          "id": 23,
          "text": "外面太冷了，快请（ ）房间里来吧。",
          "answer": "B"
        },
        {
          "id": 24,
          "text": "明天有一个新年晚会，我想（ ）得漂亮一点儿。",
          "answer": "A"
        },
        {
          "id": 25,
          "text": "大卫生病了，他（ ）我告诉王老师。",
          "answer": "D"
        }
      ]
    },
    "readingPart3": [
      {
        "id": 26,
        "text": "今年没有去年冷，北京到现在还没下雪呢。去年这个时候已经下雪了。",
        "statement": "北京今年比去年冷。",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 27,
        "text": "你上个月没怎么运动吧？明天和我一起去踢足球怎么样？打篮球也可以。",
        "statement": "他们可能明天一起运动。",
        "answer": true,
        "explanation": ""
      },
      {
        "id": 28,
        "text": "妻子每天睡觉前都要喝一杯牛奶，她说这样可以睡得好一些。",
        "statement": "妻子起床后要喝牛奶。",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 29,
        "text": "谢谢您，没有您的帮助，这件事情可能到今天晚上也做不完。",
        "statement": "事情已经做完了。",
        "answer": true,
        "explanation": ""
      },
      {
        "id": 30,
        "text": "慢一点儿，你走得太快了，我们去那个茶馆喝杯茶好不好？",
        "statement": "他想去喝茶。",
        "answer": true,
        "explanation": ""
      }
    ],
    "readingPart4": {
      "options": [
        {
          "key": "A",
          "text": "路上车太多，坐公共汽车还没有走路快呢。"
        },
        {
          "key": "B",
          "text": "上个星期怎么没看到你？"
        },
        {
          "key": "C",
          "text": "天气太冷了，都零下十度了。"
        },
        {
          "key": "D",
          "text": "他比我游得快，但是没有大卫游得快。"
        },
        {
          "key": "E",
          "text": "他在哪儿呢？你看见他了吗？（例）"
        },
        {
          "key": "F",
          "text": "住得远真的很累。"
        }
      ],
      "questions": [
        {
          "id": 31,
          "text": "你今天怎么穿得这么多？",
          "answer": "C"
        },
        {
          "id": 32,
          "text": "我每天要坐一个多小时的公共汽车去上班。",
          "answer": "F"
        },
        {
          "id": 33,
          "text": "小王每天都游泳，他游得快吗？",
          "answer": "D"
        },
        {
          "id": 34,
          "text": "你每天坐公共汽车去学校吗？",
          "answer": "A"
        },
        {
          "id": 35,
          "text": "我和妻子一起去北京旅游了几天。",
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
      "Audio ngữ âm được giữ trong lessonInfo nhưng không render trong tab Ngữ pháp."
    ],
    "needsVerification": []
  }
};

window.lesson12Data = lesson12Data;
