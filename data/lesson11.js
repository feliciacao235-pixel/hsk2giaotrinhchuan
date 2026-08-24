/**
 * Data Schema for HSK2 Standard Course - Lesson 11
 * Source: Giáo trình Chuẩn HSK 2 & Sách Bài Tập HSK 2 (migrated, official workbook answers verified)
 */

const lesson11Data = {
  "lessonInfo": {
    "id": 11,
    "titleZH": "他比我大三岁",
    "titleVI": "Anh ấy hơn tôi ba tuổi",
    "audioMain": "audio/workbook/lesson-11-workbook-audio-1.mp3",
    "audioPronunciation": "audio/workbook/lesson-11-workbook-audio-2.mp3",
    "pronunciationAudio": "audio/workbook/lesson-11-workbook-audio-2.mp3",
    "sourceStatus": "MIGRATED_FROM_OLD_SCHEMA"
  },
  "vocabulary": [
    {
      "id": 1,
      "hanzi": "唱歌",
      "pinyin": "chànggē",
      "wordType": "Động từ",
      "meaning": "Hát",
      "exampleZH": "我喜欢和朋友们一起去唱歌。",
      "examplePinyin": "Wǒ xǐhuan hé péngyoumen yìqǐ qù chànggē.",
      "exampleVI": "Tôi thích đi hát cùng bạn bè.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 2,
      "hanzi": "男",
      "pinyin": "nán",
      "wordType": "Tính từ/Danh từ",
      "meaning": "Nam",
      "exampleZH": "那个男孩子是我弟弟。",
      "examplePinyin": "Nà ge nán háizi shì wǒ dìdi.",
      "exampleVI": "Cậu bé kia là em trai tôi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 3,
      "hanzi": "女",
      "pinyin": "nǚ",
      "wordType": "Tính từ/Danh từ",
      "meaning": "Nữ",
      "exampleZH": "那个女孩子会唱歌。",
      "examplePinyin": "Nà ge nǚ háizi huì chànggē.",
      "exampleVI": "Cô bé kia biết hát.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 4,
      "hanzi": "孩子",
      "pinyin": "háizi",
      "wordType": "Danh từ",
      "meaning": "Trẻ em, con cái",
      "exampleZH": "我女儿已经六岁了。",
      "examplePinyin": "Wǒ nǚ'ér yǐjīng liù suì le.",
      "exampleVI": "Con gái tôi đã sáu tuổi rồi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 5,
      "hanzi": "右边",
      "pinyin": "yòubian",
      "wordType": "Danh từ",
      "meaning": "Bên phải",
      "exampleZH": "右边写字的那个人是我哥哥。",
      "examplePinyin": "Yòubian xiězì de nà ge rén shì wǒ gēge.",
      "exampleVI": "Người đang viết chữ bên phải là anh trai tôi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 6,
      "hanzi": "比",
      "pinyin": "bǐ",
      "wordType": "Giới từ",
      "meaning": "Hơn, so với",
      "exampleZH": "哥哥比姐姐高。",
      "examplePinyin": "Gēge bǐ jiějie gāo.",
      "exampleVI": "Anh trai cao hơn chị gái.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 7,
      "hanzi": "便宜",
      "pinyin": "piányi",
      "wordType": "Tính từ",
      "meaning": "Rẻ",
      "exampleZH": "苹果比西瓜便宜。",
      "examplePinyin": "Píngguǒ bǐ xīguā piányi.",
      "exampleVI": "Táo rẻ hơn dưa hấu.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 8,
      "hanzi": "说话",
      "pinyin": "shuōhuà",
      "wordType": "Động từ",
      "meaning": "Nói chuyện",
      "exampleZH": "你认识前边说话的那两个人吗？",
      "examplePinyin": "Nǐ rènshi qiánbian shuōhuà de nà liǎng ge rén ma?",
      "exampleVI": "Bạn có quen hai người đang nói chuyện phía trước không?",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 9,
      "hanzi": "可能",
      "pinyin": "kěnéng",
      "wordType": "Phó từ",
      "meaning": "Có thể, có lẽ",
      "exampleZH": "天气不太好，我觉得可能要下雨了。",
      "examplePinyin": "Tiānqì bú tài hǎo, wǒ juéde kěnéng yào xiàyǔ le.",
      "exampleVI": "Thời tiết không tốt lắm, tôi thấy có lẽ sắp mưa.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 10,
      "hanzi": "去年",
      "pinyin": "qùnián",
      "wordType": "Danh từ",
      "meaning": "Năm ngoái",
      "exampleZH": "我去年去过北京。",
      "examplePinyin": "Wǒ qùnián qù guo Běijīng.",
      "exampleVI": "Năm ngoái tôi từng đi Bắc Kinh.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 11,
      "hanzi": "姓",
      "pinyin": "xìng",
      "wordType": "Động từ/Danh từ",
      "meaning": "Mang họ, họ",
      "exampleZH": "你姓什么？",
      "examplePinyin": "Nǐ xìng shénme?",
      "exampleVI": "Bạn họ gì?",
      "sourceStatus": "VERIFIED"
    }
  ],
  "grammar": [
    {
      "id": "g1",
      "name": "Động từ/cụm động từ làm định ngữ",
      "formula": "Động từ/cụm động từ + 的 + danh từ",
      "explanation": "Cụm trước 的 bổ nghĩa cho danh từ phía sau.",
      "examples": [
        {
          "zh": "新买的自行车。",
          "pinyin": "Xīn mǎi de zìxíngchē.",
          "vi": "Chiếc xe đạp mới mua."
        },
        {
          "zh": "和你一起唱歌的人。",
          "pinyin": "Hé nǐ yìqǐ chànggē de rén.",
          "vi": "Người hát cùng bạn."
        },
        {
          "zh": "我妈妈做的饭。",
          "pinyin": "Wǒ māma zuò de fàn.",
          "vi": "Cơm mẹ tôi nấu."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn cụm định ngữ đúng.",
        "options": [
          "说话的人",
          "人说话的",
          "的说话人"
        ],
        "answer": "说话的人",
        "explanation": "Cụm động từ đứng trước 的 để bổ nghĩa cho 人."
      }
    },
    {
      "id": "g2",
      "name": "Câu so sánh 比",
      "formula": "A + 比 + B + tính từ / A + 没有 + B + tính từ",
      "explanation": "Dùng 比 để nói A hơn B; dùng 没有 để nói A không bằng B.",
      "examples": [
        {
          "zh": "哥哥比姐姐高。",
          "pinyin": "Gēge bǐ jiějie gāo.",
          "vi": "Anh trai cao hơn chị gái."
        },
        {
          "zh": "今天比昨天热得多。",
          "pinyin": "Jīntiān bǐ zuótiān rè de duō.",
          "vi": "Hôm nay nóng hơn hôm qua nhiều."
        },
        {
          "zh": "她比我们老师小两岁。",
          "pinyin": "Tā bǐ wǒmen lǎoshī xiǎo liǎng suì.",
          "vi": "Cô ấy nhỏ hơn thầy/cô chúng tôi hai tuổi."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn câu so sánh đúng.",
        "options": [
          "哥哥比姐姐高。",
          "哥哥高比姐姐。",
          "比哥哥姐姐高。"
        ],
        "answer": "哥哥比姐姐高。",
        "explanation": "A 比 B + tính từ."
      }
    },
    {
      "id": "g3",
      "name": "可能",
      "formula": "Chủ ngữ + 可能 + động từ / 可能 + chủ ngữ + động từ",
      "explanation": "Diễn tả khả năng hoặc phỏng đoán: có thể, có lẽ.",
      "examples": [
        {
          "zh": "他可能早就知道这件事情了。",
          "pinyin": "Tā kěnéng zǎo jiù zhīdào zhè jiàn shìqing le.",
          "vi": "Có thể anh ấy đã biết việc này từ lâu rồi."
        },
        {
          "zh": "可能我明天不来上课了。",
          "pinyin": "Kěnéng wǒ míngtiān bù lái shàngkè le.",
          "vi": "Có lẽ ngày mai tôi không đến lớp."
        },
        {
          "zh": "你可能不认识她。",
          "pinyin": "Nǐ kěnéng bú rènshi tā.",
          "vi": "Có thể bạn không quen cô ấy."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "天气不太好，我觉得（ ）要下雨了。",
        "options": [],
        "answer": "可能",
        "explanation": "可能 diễn tả phỏng đoán."
      }
    }
  ],
  "vocabularyGames": {
    "quizQuestions": [
      {
        "id": "q1",
        "type": "hanzi-to-meaning",
        "prompt": "唱歌",
        "options": [
          "Hát",
          "Nam",
          "Nữ",
          "Trẻ em, con cái"
        ],
        "answer": "Hát",
        "pinyin": "chànggē",
        "meaning": "Hát",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q2",
        "type": "meaning-to-hanzi",
        "prompt": "Nam",
        "options": [
          "唱歌",
          "男",
          "女",
          "孩子"
        ],
        "answer": "男",
        "pinyin": "nán",
        "meaning": "Nam",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q3",
        "type": "hanzi-to-meaning",
        "prompt": "女",
        "options": [
          "Hát",
          "Nam",
          "Nữ",
          "Trẻ em, con cái"
        ],
        "answer": "Nữ",
        "pinyin": "nǚ",
        "meaning": "Nữ",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q4",
        "type": "meaning-to-hanzi",
        "prompt": "Trẻ em, con cái",
        "options": [
          "唱歌",
          "男",
          "女",
          "孩子"
        ],
        "answer": "孩子",
        "pinyin": "háizi",
        "meaning": "Trẻ em, con cái",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p1",
        "type": "hanzi-to-pinyin",
        "prompt": "右边",
        "options": [
          "yòubian",
          "chànggē",
          "nán",
          "nǚ"
        ],
        "answer": "yòubian",
        "meaning": "Bên phải",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p2",
        "type": "hanzi-to-pinyin",
        "prompt": "比",
        "options": [
          "bǐ",
          "chànggē",
          "nán",
          "nǚ"
        ],
        "answer": "bǐ",
        "meaning": "Hơn, so với",
        "sourceStatus": "VERIFIED"
      }
    ],
    "matchingPairs": [
      {
        "id": "m1",
        "zh": "唱歌",
        "pinyin": "chànggē",
        "vi": "Hát"
      },
      {
        "id": "m2",
        "zh": "男",
        "pinyin": "nán",
        "vi": "Nam"
      },
      {
        "id": "m3",
        "zh": "女",
        "pinyin": "nǚ",
        "vi": "Nữ"
      },
      {
        "id": "m4",
        "zh": "孩子",
        "pinyin": "háizi",
        "vi": "Trẻ em, con cái"
      },
      {
        "id": "m5",
        "zh": "右边",
        "pinyin": "yòubian",
        "vi": "Bên phải"
      },
      {
        "id": "m6",
        "zh": "比",
        "pinyin": "bǐ",
        "vi": "Hơn, so với"
      },
      {
        "id": "m7",
        "zh": "便宜",
        "pinyin": "piányi",
        "vi": "Rẻ"
      },
      {
        "id": "m8",
        "zh": "说话",
        "pinyin": "shuōhuà",
        "vi": "Nói chuyện"
      }
    ]
  },
  "workbookExercises": {
    "audioFile": "audio/workbook/lesson-11-workbook-audio-1.mp3",
    "sourceStatus": "official-answer-key-verified",
    "listeningPart1": {
      "type": "listening-true-false-image",
      "sourceStatus": "official-workbook",
      "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 103.",
      "questions": [
        {
          "id": 1,
          "image": "images/workbook/lesson11/listening-part1/q01.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 2,
          "image": "images/workbook/lesson11/listening-part1/q02.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 3,
          "image": "images/workbook/lesson11/listening-part1/q03.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 4,
          "image": "images/workbook/lesson11/listening-part1/q04.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 5,
          "image": "images/workbook/lesson11/listening-part1/q05.png",
          "imageSource": "official-workbook",
          "answer": true
        }
      ]
    },
    "imageSets": {
      "listeningPart2": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 104.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson11/listening-part2/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson11/listening-part2/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson11/listening-part2/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson11/listening-part2/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson11/listening-part2/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson11/listening-part2/f.png",
            "imageSource": "official-workbook"
          }
        ]
      },
      "readingPart1": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 106.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson11/reading-part1/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson11/reading-part1/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson11/reading-part1/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson11/reading-part1/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson11/reading-part1/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson11/reading-part1/f.png",
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
        "answer": "E"
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
        "answer": "B"
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
        "answer": "B"
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
        "text": "昨天我和朋友们一起去喝咖啡了。",
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
        "text": "左边那个女孩子比右边的那个大两岁。",
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
        "id": 18,
        "text": "正在打电话的那个人可能是新来的王老师。",
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
        "text": "多吃水果对身体好，你也来一个吧。",
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
        "text": "这件衣服300块，比那件便宜50块。",
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
          "word": "唱歌"
        },
        {
          "key": "B",
          "word": "便宜"
        },
        {
          "key": "C",
          "word": "说话"
        },
        {
          "key": "D",
          "word": "可能"
        },
        {
          "key": "E",
          "word": "贵"
        },
        {
          "key": "F",
          "word": "比"
        }
      ],
      "questions": [
        {
          "id": 21,
          "text": "昨天25度，今天（ ）昨天热一点儿。",
          "answer": "F"
        },
        {
          "id": 22,
          "text": "每个周末，我都喜欢和朋友们一起去（ ）。",
          "answer": "A"
        },
        {
          "id": 23,
          "text": "你认识前边（ ）的那两个人吗？",
          "answer": "C"
        },
        {
          "id": 24,
          "text": "天气不太好，我觉得（ ）要下雨了。",
          "answer": "D"
        },
        {
          "id": 25,
          "text": "苹果比西瓜（ ），我想多买点儿苹果。",
          "answer": "B"
        }
      ]
    },
    "readingPart3": [
      {
        "id": 26,
        "text": "左边看报纸的这个人是我姐姐，右边写字的那个人是我哥哥。",
        "statement": "他们家可能有三个孩子。",
        "answer": true,
        "explanation": ""
      },
      {
        "id": 27,
        "text": "女儿让我告诉你，她今天晚上和朋友们一起去唱歌，不回来吃晚饭了。",
        "statement": "女儿今天在家吃晚饭。",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 28,
        "text": "这是儿子送给我的手表，因为明天是我的生日。",
        "statement": "she/Tā sòng gěi érzi yí kuài shǒubiǎo.",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 29,
        "text": "你问的这个问题很好，我要想一想，明天再告诉你，可以吗？",
        "statement": "他现在没有回答这个问题。",
        "answer": true,
        "explanation": ""
      },
      {
        "id": 30,
        "text": "哥哥的汉语比我好，姐姐的汉语也比我好。",
        "statement": "我的汉语没有哥哥和姐姐那么好。",
        "answer": true,
        "explanation": ""
      }
    ],
    "readingPart4": {
      "options": [
        {
          "key": "A",
          "text": "这两天怎么没看见王老师？"
        },
        {
          "key": "B",
          "text": "我哥哥比我姐姐大三岁。"
        },
        {
          "key": "C",
          "text": "家里还有 呢，来点儿水果吧。"
        },
        {
          "key": "D",
          "text": "这是我爸爸送给我的，昨天是我的生日。"
        },
        {
          "key": "E",
          "text": "他在哪儿呢？你看见 他 了吗？（例）"
        },
        {
          "key": "F",
          "text": "我觉得公共汽车没有自行车快。因为路上车太多了。"
        }
      ],
      "questions": [
        {
          "id": 31,
          "text": "今天的鸡蛋比昨天的便宜一些，您来点儿吧。",
          "answer": "C"
        },
        {
          "id": 32,
          "text": "你哥哥大还是你姐姐大？",
          "answer": "B"
        },
        {
          "id": 33,
          "text": "这是你的自行车吗？真漂亮。",
          "answer": "D"
        },
        {
          "id": 34,
          "text": "你每天坐公共汽车去学校吗？",
          "answer": "F"
        },
        {
          "id": 35,
          "text": "她可能去旅游了。",
          "answer": "A"
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

window.lesson11Data = lesson11Data;
