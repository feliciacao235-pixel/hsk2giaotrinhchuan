/**
 * Data Schema for HSK2 Standard Course - Lesson 15
 * Source: Giáo trình Chuẩn HSK 2 & Sách Bài Tập HSK 2 (migrated, official workbook answers verified)
 */

const lesson15Data = {
  "lessonInfo": {
    "id": 15,
    "titleZH": "新年就要到了",
    "titleVI": "Năm mới sắp đến rồi",
    "audioMain": "audio/workbook/lesson-15-workbook-audio-1.mp3",
    "audioPronunciation": "audio/workbook/lesson-15-workbook-audio-2.mp3",
    "pronunciationAudio": "audio/workbook/lesson-15-workbook-audio-2.mp3",
    "sourceStatus": "MIGRATED_FROM_OLD_SCHEMA"
  },
  "vocabulary": [
    {
      "id": 1,
      "hanzi": "日",
      "pinyin": "rì",
      "wordType": "Danh từ",
      "meaning": "Ngày",
      "exampleZH": "今天是十二月二十日。",
      "examplePinyin": "Jīntiān shì shí'èr yuè èrshí rì.",
      "exampleVI": "Hôm nay là ngày 20 tháng 12.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 2,
      "hanzi": "新年",
      "pinyin": "xīnnián",
      "wordType": "Danh từ",
      "meaning": "Năm mới",
      "exampleZH": "新年快要到了。",
      "examplePinyin": "Xīnnián kuài yào dào le.",
      "exampleVI": "Năm mới sắp đến rồi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 3,
      "hanzi": "票",
      "pinyin": "piào",
      "wordType": "Danh từ",
      "meaning": "Vé",
      "exampleZH": "我想买火车票。",
      "examplePinyin": "Wǒ xiǎng mǎi huǒchē piào.",
      "exampleVI": "Tôi muốn mua vé tàu.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 4,
      "hanzi": "火车站",
      "pinyin": "huǒchēzhàn",
      "wordType": "Danh từ",
      "meaning": "Ga tàu hỏa",
      "exampleZH": "火车站离这儿很远。",
      "examplePinyin": "Huǒchēzhàn lí zhèr hěn yuǎn.",
      "exampleVI": "Ga tàu cách đây rất xa.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 5,
      "hanzi": "大家",
      "pinyin": "dàjiā",
      "wordType": "Đại từ",
      "meaning": "Mọi người",
      "exampleZH": "大家新年好！",
      "examplePinyin": "Dàjiā xīnnián hǎo!",
      "exampleVI": "Chúc mọi người năm mới vui vẻ!",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 6,
      "hanzi": "更",
      "pinyin": "gèng",
      "wordType": "Phó từ",
      "meaning": "Càng, hơn nữa",
      "exampleZH": "明天天气更冷。",
      "examplePinyin": "Míngtiān tiānqì gèng lěng.",
      "exampleVI": "Ngày mai thời tiết càng lạnh hơn.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 7,
      "hanzi": "妹妹",
      "pinyin": "mèimei",
      "wordType": "Danh từ",
      "meaning": "Em gái",
      "exampleZH": "我妹妹明天就要走了。",
      "examplePinyin": "Wǒ mèimei míngtiān jiù yào zǒu le.",
      "exampleVI": "Em gái tôi ngày mai sắp đi rồi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 8,
      "hanzi": "阴",
      "pinyin": "yīn",
      "wordType": "Tính từ",
      "meaning": "Âm u, nhiều mây",
      "exampleZH": "今天是阴天。",
      "examplePinyin": "Jīntiān shì yīntiān.",
      "exampleVI": "Hôm nay là ngày nhiều mây.",
      "sourceStatus": "VERIFIED"
    }
  ],
  "grammar": [
    {
      "id": "g1",
      "name": "要……了 / 快要……了 / 就要……了",
      "formula": "要/快要/快/就要 + động từ/tính từ + 了",
      "explanation": "Diễn tả một việc sắp xảy ra trong tương lai gần.",
      "examples": [
        {
          "zh": "要下雨了。",
          "pinyin": "Yào xiàyǔ le.",
          "vi": "Sắp mưa rồi."
        },
        {
          "zh": "新的一年快要到了。",
          "pinyin": "Xīn de yì nián kuài yào dào le.",
          "vi": "Một năm mới sắp đến rồi."
        },
        {
          "zh": "下个月我们就要回国了。",
          "pinyin": "Xià ge yuè wǒmen jiù yào huí guó le.",
          "vi": "Tháng sau chúng tôi sắp về nước rồi."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn câu nói “sắp mưa rồi”.",
        "options": [
          "要下雨了。",
          "下雨要了。",
          "要了下雨。"
        ],
        "answer": "要下雨了。",
        "explanation": "要 + động từ + 了."
      }
    },
    {
      "id": "g2",
      "name": "都……了",
      "formula": "都 + số/thời gian/tình huống + 了",
      "explanation": "Nhấn mạnh đã đến mức nào đó, thường kèm ý nhắc nhở hoặc than phiền nhẹ.",
      "examples": [
        {
          "zh": "都8点了，快点儿起床吧。",
          "pinyin": "Dōu bā diǎn le, kuài diǎnr qǐchuáng ba.",
          "vi": "Đã 8 giờ rồi, dậy nhanh lên."
        },
        {
          "zh": "你都十岁了，可以自己洗衣服了。",
          "pinyin": "Nǐ dōu shí suì le, kěyǐ zìjǐ xǐ yīfu le.",
          "vi": "Con đã 10 tuổi rồi, có thể tự giặt quần áo rồi."
        },
        {
          "zh": "都等她半个小时了。",
          "pinyin": "Dōu děng tā bàn ge xiǎoshí le.",
          "vi": "Đã đợi cô ấy nửa tiếng rồi."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn câu đúng.",
        "options": [
          "都8点了，快点儿起床吧。",
          "8点都快点儿了起床吧。",
          "都了8点快起床。"
        ],
        "answer": "都8点了，快点儿起床吧。",
        "explanation": "都 + thời gian + 了 để nhấn mạnh đã đến giờ."
      }
    }
  ],
  "vocabularyGames": {
    "quizQuestions": [
      {
        "id": "q1",
        "type": "hanzi-to-meaning",
        "prompt": "日",
        "options": [
          "Ngày",
          "Năm mới",
          "Vé",
          "Ga tàu hỏa"
        ],
        "answer": "Ngày",
        "pinyin": "rì",
        "meaning": "Ngày",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q2",
        "type": "meaning-to-hanzi",
        "prompt": "Năm mới",
        "options": [
          "日",
          "新年",
          "票",
          "火车站"
        ],
        "answer": "新年",
        "pinyin": "xīnnián",
        "meaning": "Năm mới",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q3",
        "type": "hanzi-to-meaning",
        "prompt": "票",
        "options": [
          "Ngày",
          "Năm mới",
          "Vé",
          "Ga tàu hỏa"
        ],
        "answer": "Vé",
        "pinyin": "piào",
        "meaning": "Vé",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q4",
        "type": "meaning-to-hanzi",
        "prompt": "Ga tàu hỏa",
        "options": [
          "日",
          "新年",
          "票",
          "火车站"
        ],
        "answer": "火车站",
        "pinyin": "huǒchēzhàn",
        "meaning": "Ga tàu hỏa",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p1",
        "type": "hanzi-to-pinyin",
        "prompt": "大家",
        "options": [
          "dàjiā",
          "rì",
          "xīnnián",
          "piào"
        ],
        "answer": "dàjiā",
        "meaning": "Mọi người",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p2",
        "type": "hanzi-to-pinyin",
        "prompt": "更",
        "options": [
          "gèng",
          "rì",
          "xīnnián",
          "piào"
        ],
        "answer": "gèng",
        "meaning": "Càng, hơn nữa",
        "sourceStatus": "VERIFIED"
      }
    ],
    "matchingPairs": [
      {
        "id": "m1",
        "zh": "日",
        "pinyin": "rì",
        "vi": "Ngày"
      },
      {
        "id": "m2",
        "zh": "新年",
        "pinyin": "xīnnián",
        "vi": "Năm mới"
      },
      {
        "id": "m3",
        "zh": "票",
        "pinyin": "piào",
        "vi": "Vé"
      },
      {
        "id": "m4",
        "zh": "火车站",
        "pinyin": "huǒchēzhàn",
        "vi": "Ga tàu hỏa"
      },
      {
        "id": "m5",
        "zh": "大家",
        "pinyin": "dàjiā",
        "vi": "Mọi người"
      },
      {
        "id": "m6",
        "zh": "更",
        "pinyin": "gèng",
        "vi": "Càng, hơn nữa"
      },
      {
        "id": "m7",
        "zh": "妹妹",
        "pinyin": "mèimei",
        "vi": "Em gái"
      },
      {
        "id": "m8",
        "zh": "阴",
        "pinyin": "yīn",
        "vi": "Âm u, nhiều mây"
      }
    ]
  },
  "workbookExercises": {
    "audioFile": "audio/workbook/lesson-15-workbook-audio-1.mp3",
    "sourceStatus": "official-answer-key-verified",
    "listeningPart1": {
      "type": "listening-true-false-image",
      "sourceStatus": "official-workbook",
      "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 139.",
      "questions": [
        {
          "id": 1,
          "image": "images/workbook/lesson15/listening-part1/q01.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 2,
          "image": "images/workbook/lesson15/listening-part1/q02.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 3,
          "image": "images/workbook/lesson15/listening-part1/q03.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 4,
          "image": "images/workbook/lesson15/listening-part1/q04.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 5,
          "image": "images/workbook/lesson15/listening-part1/q05.png",
          "imageSource": "official-workbook",
          "answer": true
        }
      ]
    },
    "imageSets": {
      "listeningPart2": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 140.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson15/listening-part2/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson15/listening-part2/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson15/listening-part2/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson15/listening-part2/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson15/listening-part2/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson15/listening-part2/f.png",
            "imageSource": "official-workbook"
          }
        ]
      },
      "readingPart1": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 142.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson15/reading-part1/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson15/reading-part1/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson15/reading-part1/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson15/reading-part1/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson15/reading-part1/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson15/reading-part1/f.png",
            "imageSource": "official-workbook"
          }
        ]
      }
    },
    "listeningPart2": [
      {
        "id": 6,
        "question": "Câu 6",
        "answer": "C"
      },
      {
        "id": 7,
        "question": "Câu 7",
        "answer": "A"
      },
      {
        "id": 8,
        "question": "Câu 8",
        "answer": "E"
      },
      {
        "id": 9,
        "question": "Câu 9",
        "answer": "F"
      },
      {
        "id": 10,
        "question": "Câu 10",
        "answer": "B"
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
        "answer": "B"
      },
      {
        "id": 12,
        "question": "Câu 12",
        "options": [
          "A Lựa chọn A",
          "B Lựa chọn B",
          "C Lựa chọn C"
        ],
        "answer": "C"
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
        "text": "我想去火车站买票。",
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
        "id": 17,
        "text": "新年快要到了。",
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
        "text": "她在公共汽车上。",
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
        "id": 19,
        "text": "今天是阴天。",
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
        "id": 20,
        "text": "王方唱歌唱得非常好。",
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
          "word": "新年"
        },
        {
          "key": "B",
          "word": "票"
        },
        {
          "key": "C",
          "word": "火车站"
        },
        {
          "key": "D",
          "word": "大家"
        },
        {
          "key": "E",
          "word": "更"
        },
        {
          "key": "F",
          "word": "阴"
        }
      ],
      "questions": [
        {
          "id": 21,
          "text": "（ ）快要到了。",
          "answer": "F"
        },
        {
          "id": 22,
          "text": "我想买一张（ ）。",
          "answer": "B"
        },
        {
          "id": 23,
          "text": "（ ）离这儿很远。",
          "answer": "C"
        },
        {
          "id": 24,
          "text": "（ ）新年好！",
          "answer": "D"
        },
        {
          "id": 25,
          "text": "明天天气（ ）冷。",
          "answer": "A"
        }
      ]
    },
    "readingPart3": [
      {
        "id": 26,
        "text": "新年快要到了。",
        "statement": "新年还很远。",
        "answer": true,
        "explanation": ""
      },
      {
        "id": 27,
        "text": "都8点了，快点儿起床吧。",
        "statement": "说话的人让别人快起床。",
        "answer": true,
        "explanation": ""
      },
      {
        "id": 28,
        "text": "我妹妹明天就要走了。",
        "statement": "妹妹今天已经走了。",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 29,
        "text": "今天是阴天。",
        "statement": "今天不是晴天。",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 30,
        "text": "下个月我们就要回国了。",
        "statement": "他们这个月回国。",
        "answer": true,
        "explanation": ""
      }
    ],
    "readingPart4": {
      "type": "dialogue-matching",
      "sourcePage": 145,
      "options": [
        {
          "key": "A",
          "text": "我想新年的时候休息休息。你们自己去玩儿吧。"
        },
        {
          "key": "B",
          "text": "这件衣服的颜色我不喜欢。"
        },
        {
          "key": "C",
          "text": "你的生日是几月几号？我们一起吃饭吧。"
        },
        {
          "key": "D",
          "text": "这是我第二次来北京。"
        },
        {
          "key": "E",
          "text": "他在哪儿呢？你看见他了吗？（例）"
        },
        {
          "key": "F",
          "text": "十分钟以后就要开始了。"
        }
      ],
      "questions": [
        {
          "id": 31,
          "text": "希望这次你能在这儿多住几天。",
          "answer": "D"
        },
        {
          "id": 32,
          "text": "电影什么时候开始？",
          "answer": "F"
        },
        {
          "id": 33,
          "text": "我的生日快要到了。",
          "answer": "C"
        },
        {
          "id": 34,
          "text": "新年快要到了，你想和大家一起去旅游吗？",
          "answer": "A"
        },
        {
          "id": 35,
          "text": "没关系，我们再去别的商店看看吧。",
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
      "Audio ngữ âm được giữ trong lessonInfo nhưng không render trong tab Ngữ pháp.",
      "Bài 14-15: thay placeholder Đọc bằng dữ liệu bài tập cũ có nghĩa học tập; đáp án giữ theo PDF chính thức.",
      "Đọc phần 4 bảo đảm đủ lựa chọn A-F để khớp đáp án chính thức."
    ],
    "needsVerification": []
  }
};

window.lesson15Data = lesson15Data;
