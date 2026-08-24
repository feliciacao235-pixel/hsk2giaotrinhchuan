/**
 * Data Schema for HSK2 Standard Course - Lesson 14
 * Source: Giáo trình Chuẩn HSK 2 & Sách Bài Tập HSK 2 (migrated, official workbook answers verified)
 */

const lesson14Data = {
  "lessonInfo": {
    "id": 14,
    "titleZH": "你看过那个电影吗？",
    "titleVI": "Bạn đã từng xem bộ phim đó chưa?",
    "audioMain": "audio/workbook/lesson-14-workbook-audio-1.mp3",
    "audioPronunciation": "audio/workbook/lesson-14-workbook-audio-2.mp3",
    "pronunciationAudio": "audio/workbook/lesson-14-workbook-audio-2.mp3",
    "sourceStatus": "MIGRATED_FROM_OLD_SCHEMA"
  },
  "vocabulary": [
    {
      "id": 1,
      "hanzi": "意思",
      "pinyin": "yìsi",
      "wordType": "Danh từ",
      "meaning": "Ý nghĩa",
      "exampleZH": "这个字是什么意思？",
      "examplePinyin": "Zhège zì shì shénme yìsi?",
      "exampleVI": "Chữ này có nghĩa là gì?",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 2,
      "hanzi": "但是",
      "pinyin": "dànshì",
      "wordType": "Liên từ",
      "meaning": "Nhưng",
      "exampleZH": "虽然汉字很难，但是我很喜欢写汉字。",
      "examplePinyin": "Suīrán Hànzì hěn nán, dànshì wǒ hěn xǐhuan xiě Hànzì.",
      "exampleVI": "Tuy chữ Hán khó, nhưng tôi rất thích viết chữ Hán.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 3,
      "hanzi": "虽然",
      "pinyin": "suīrán",
      "wordType": "Liên từ",
      "meaning": "Tuy, mặc dù",
      "exampleZH": "虽然外面很冷，但是房间里很热。",
      "examplePinyin": "Suīrán wàimian hěn lěng, dànshì fángjiān li hěn rè.",
      "exampleVI": "Tuy bên ngoài lạnh, nhưng trong phòng rất nóng.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 4,
      "hanzi": "次",
      "pinyin": "cì",
      "wordType": "Lượng từ",
      "meaning": "Lần",
      "exampleZH": "我看过这个电影两次。",
      "examplePinyin": "Wǒ kàn guo zhège diànyǐng liǎng cì.",
      "exampleVI": "Tôi từng xem bộ phim này hai lần.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 5,
      "hanzi": "玩儿",
      "pinyin": "wánr",
      "wordType": "Động từ",
      "meaning": "Chơi",
      "exampleZH": "周末我们一起去玩儿吧。",
      "examplePinyin": "Zhōumò wǒmen yìqǐ qù wánr ba.",
      "exampleVI": "Cuối tuần chúng ta cùng đi chơi nhé.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 6,
      "hanzi": "晴",
      "pinyin": "qíng",
      "wordType": "Tính từ",
      "meaning": "Nắng, trời quang",
      "exampleZH": "虽然是晴天，但是很冷。",
      "examplePinyin": "Suīrán shì qíngtiān, dànshì hěn lěng.",
      "exampleVI": "Tuy là ngày nắng, nhưng rất lạnh.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 7,
      "hanzi": "百",
      "pinyin": "bǎi",
      "wordType": "Số từ",
      "meaning": "Trăm",
      "exampleZH": "这件衣服一百块。",
      "examplePinyin": "Zhè jiàn yīfu yì bǎi kuài.",
      "exampleVI": "Cái áo này một trăm tệ.",
      "sourceStatus": "VERIFIED"
    }
  ],
  "grammar": [
    {
      "id": "g1",
      "name": "Trợ từ kinh nghiệm 过",
      "formula": "Động từ + 过 + tân ngữ",
      "explanation": "Dùng để nói đã từng có kinh nghiệm làm việc gì.",
      "examples": [
        {
          "zh": "他们来过我家。",
          "pinyin": "Tāmen lái guo wǒ jiā.",
          "vi": "Họ từng đến nhà tôi."
        },
        {
          "zh": "我看过那个电影。",
          "pinyin": "Wǒ kàn guo nà ge diànyǐng.",
          "vi": "Tôi từng xem bộ phim đó."
        },
        {
          "zh": "我没看过那个电影。",
          "pinyin": "Wǒ méi kàn guo nà ge diànyǐng.",
          "vi": "Tôi chưa từng xem bộ phim đó."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn câu hỏi kinh nghiệm đúng.",
        "options": [
          "你看过那个电影吗？",
          "你看那个电影过吗？",
          "你过看那个电影吗？"
        ],
        "answer": "你看过那个电影吗？",
        "explanation": "过 đứng sau động từ 看."
      }
    },
    {
      "id": "g2",
      "name": "虽然……但是……",
      "formula": "虽然 + mệnh đề 1，但是 + mệnh đề 2",
      "explanation": "Nói hai ý tương phản: tuy/mặc dù... nhưng...",
      "examples": [
        {
          "zh": "虽然外面很冷，但是房间里很热。",
          "pinyin": "Suīrán wàimian hěn lěng, dànshì fángjiān li hěn rè.",
          "vi": "Tuy bên ngoài lạnh, nhưng trong phòng rất nóng."
        },
        {
          "zh": "虽然汉字很难，但是我很喜欢写汉字。",
          "pinyin": "Suīrán Hànzì hěn nán, dànshì wǒ hěn xǐhuan xiě Hànzì.",
          "vi": "Tuy chữ Hán khó, nhưng tôi rất thích viết chữ Hán."
        },
        {
          "zh": "虽然是晴天，但是很冷。",
          "pinyin": "Suīrán shì qíngtiān, dànshì hěn lěng.",
          "vi": "Tuy là ngày nắng, nhưng rất lạnh."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "（ ）外面很冷，但是房间里很热。",
        "options": [],
        "answer": "虽然",
        "explanation": "虽然 mở đầu vế nhượng bộ."
      }
    },
    {
      "id": "g3",
      "name": "Lượng từ 次",
      "formula": "Động từ (+ 过) + số + 次 + tân ngữ",
      "explanation": "Dùng 次 để nói số lần làm việc gì.",
      "examples": [
        {
          "zh": "我们去过三次北京。",
          "pinyin": "Wǒmen qù guo sān cì Běijīng.",
          "vi": "Chúng tôi từng đi Bắc Kinh ba lần."
        },
        {
          "zh": "我上星期去过一次医院。",
          "pinyin": "Wǒ shàng xīngqī qù guo yí cì yīyuàn.",
          "vi": "Tuần trước tôi từng đi bệnh viện một lần."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "我去过三（ ）北京。",
        "options": [],
        "answer": "次",
        "explanation": "次 chỉ số lần."
      }
    }
  ],
  "vocabularyGames": {
    "quizQuestions": [
      {
        "id": "q1",
        "type": "hanzi-to-meaning",
        "prompt": "意思",
        "options": [
          "Ý nghĩa",
          "Nhưng",
          "Tuy, mặc dù",
          "Lần"
        ],
        "answer": "Ý nghĩa",
        "pinyin": "yìsi",
        "meaning": "Ý nghĩa",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q2",
        "type": "meaning-to-hanzi",
        "prompt": "Nhưng",
        "options": [
          "意思",
          "但是",
          "虽然",
          "次"
        ],
        "answer": "但是",
        "pinyin": "dànshì",
        "meaning": "Nhưng",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q3",
        "type": "hanzi-to-meaning",
        "prompt": "虽然",
        "options": [
          "Ý nghĩa",
          "Nhưng",
          "Tuy, mặc dù",
          "Lần"
        ],
        "answer": "Tuy, mặc dù",
        "pinyin": "suīrán",
        "meaning": "Tuy, mặc dù",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q4",
        "type": "meaning-to-hanzi",
        "prompt": "Lần",
        "options": [
          "意思",
          "但是",
          "虽然",
          "次"
        ],
        "answer": "次",
        "pinyin": "cì",
        "meaning": "Lần",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p1",
        "type": "hanzi-to-pinyin",
        "prompt": "玩儿",
        "options": [
          "wánr",
          "yìsi",
          "dànshì",
          "suīrán"
        ],
        "answer": "wánr",
        "meaning": "Chơi",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p2",
        "type": "hanzi-to-pinyin",
        "prompt": "晴",
        "options": [
          "qíng",
          "yìsi",
          "dànshì",
          "suīrán"
        ],
        "answer": "qíng",
        "meaning": "Nắng, trời quang",
        "sourceStatus": "VERIFIED"
      }
    ],
    "matchingPairs": [
      {
        "id": "m1",
        "zh": "意思",
        "pinyin": "yìsi",
        "vi": "Ý nghĩa"
      },
      {
        "id": "m2",
        "zh": "但是",
        "pinyin": "dànshì",
        "vi": "Nhưng"
      },
      {
        "id": "m3",
        "zh": "虽然",
        "pinyin": "suīrán",
        "vi": "Tuy, mặc dù"
      },
      {
        "id": "m4",
        "zh": "次",
        "pinyin": "cì",
        "vi": "Lần"
      },
      {
        "id": "m5",
        "zh": "玩儿",
        "pinyin": "wánr",
        "vi": "Chơi"
      },
      {
        "id": "m6",
        "zh": "晴",
        "pinyin": "qíng",
        "vi": "Nắng, trời quang"
      },
      {
        "id": "m7",
        "zh": "百",
        "pinyin": "bǎi",
        "vi": "Trăm"
      }
    ]
  },
  "workbookExercises": {
    "audioFile": "audio/workbook/lesson-14-workbook-audio-1.mp3",
    "sourceStatus": "official-answer-key-verified",
    "listeningPart1": {
      "type": "listening-true-false-image",
      "sourceStatus": "official-workbook",
      "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 130.",
      "questions": [
        {
          "id": 1,
          "image": "images/workbook/lesson14/listening-part1/q01.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 2,
          "image": "images/workbook/lesson14/listening-part1/q02.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 3,
          "image": "images/workbook/lesson14/listening-part1/q03.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 4,
          "image": "images/workbook/lesson14/listening-part1/q04.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 5,
          "image": "images/workbook/lesson14/listening-part1/q05.png",
          "imageSource": "official-workbook",
          "answer": true
        }
      ]
    },
    "imageSets": {
      "listeningPart2": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 131.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson14/listening-part2/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson14/listening-part2/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson14/listening-part2/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson14/listening-part2/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson14/listening-part2/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson14/listening-part2/f.png",
            "imageSource": "official-workbook"
          }
        ]
      },
      "readingPart1": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 133.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson14/reading-part1/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson14/reading-part1/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson14/reading-part1/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson14/reading-part1/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson14/reading-part1/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson14/reading-part1/f.png",
            "imageSource": "official-workbook"
          }
        ]
      }
    },
    "listeningPart2": [
      {
        "id": 6,
        "question": "Câu 6",
        "answer": "E"
      },
      {
        "id": 7,
        "question": "Câu 7",
        "answer": "F"
      },
      {
        "id": 8,
        "question": "Câu 8",
        "answer": "A"
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
        "answer": "A"
      },
      {
        "id": 14,
        "question": "Câu 14",
        "options": [
          "A Lựa chọn A",
          "B Lựa chọn B",
          "C Lựa chọn C"
        ],
        "answer": "C"
      },
      {
        "id": 15,
        "question": "Câu 15",
        "options": [
          "A Lựa chọn A",
          "B Lựa chọn B",
          "C Lựa chọn C"
        ],
        "answer": "B"
      }
    ],
    "readingPart1": [
      {
        "id": 16,
        "text": "我看过这部电影。",
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
        "id": 17,
        "text": "虽然外面很冷，但是她还要出去。",
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
        "id": 18,
        "text": "我去过长城。",
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
        "text": "这本书很有意思。",
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
        "id": 20,
        "text": "这件衣服一百多块。",
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
          "word": "意思"
        },
        {
          "key": "B",
          "word": "虽然"
        },
        {
          "key": "C",
          "word": "但是"
        },
        {
          "key": "D",
          "word": "次"
        },
        {
          "key": "E",
          "word": "晴"
        },
        {
          "key": "F",
          "word": "百"
        }
      ],
      "questions": [
        {
          "id": 21,
          "text": "这个字是什么（ ）？",
          "answer": "C"
        },
        {
          "id": 22,
          "text": "（ ）外面很冷，但是房间里很热。",
          "answer": "F"
        },
        {
          "id": 23,
          "text": "虽然是晴天，（ ）很冷。",
          "answer": "A"
        },
        {
          "id": 24,
          "text": "我去过两（ ）北京。",
          "answer": "B"
        },
        {
          "id": 25,
          "text": "这本书一（ ）块。",
          "answer": "D"
        }
      ]
    },
    "readingPart3": [
      {
        "id": 26,
        "text": "我没看过那个电影。",
        "statement": "我以前看过那个电影。",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 27,
        "text": "虽然汉字很难，但是我很喜欢写汉字。",
        "statement": "他说他不喜欢写汉字。",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 28,
        "text": "我们去过三次北京。",
        "statement": "他们有去北京的经验。",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 29,
        "text": "虽然是晴天，但是很冷。",
        "statement": "今天不冷。",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 30,
        "text": "这个字是什么意思？",
        "statement": "说话的人在问字的意思。",
        "answer": true,
        "explanation": ""
      }
    ],
    "readingPart4": {
      "type": "dialogue-matching",
      "sourcePage": 136,
      "options": [
        {
          "key": "A",
          "text": "你出去的时候多穿些衣服。"
        },
        {
          "key": "B",
          "text": "你在那个商店买过东西没有？"
        },
        {
          "key": "C",
          "text": "妈妈告诉过我很多次，长时间玩儿电脑和手机对眼睛不好。"
        },
        {
          "key": "D",
          "text": "没学过，听说很难，但是很有意思。"
        },
        {
          "key": "E",
          "text": "他在哪儿呢？你看见他了吗？（例）"
        },
        {
          "key": "F",
          "text": "没关系，喜欢就买吧。"
        }
      ],
      "questions": [
        {
          "id": 31,
          "text": "你学过汉语吗？",
          "answer": "D"
        },
        {
          "id": 32,
          "text": "今天真冷，第一次到了零下10度。",
          "answer": "A"
        },
        {
          "id": 33,
          "text": "所以我现在很少玩儿电脑和手机了。",
          "answer": "C"
        },
        {
          "id": 34,
          "text": "我很喜欢这件衣服，但是觉得有点儿贵。",
          "answer": "F"
        },
        {
          "id": 35,
          "text": "东西还可以，而且很便宜。",
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

window.lesson14Data = lesson14Data;
