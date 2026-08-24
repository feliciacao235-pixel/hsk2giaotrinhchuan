/**
 * Data Schema for HSK2 Standard Course - Lesson 10
 * Source: Giáo trình Chuẩn HSK 2 & Sách Bài Tập HSK 2 (migrated, official workbook answers verified)
 */

const lesson10Data = {
  "lessonInfo": {
    "id": 10,
    "titleZH": "别找了，手机在桌子上呢",
    "titleVI": "Đừng tìm nữa, điện thoại ở trên bàn kìa",
    "audioMain": "audio/workbook/lesson-10-workbook-audio-1.mp3",
    "audioPronunciation": "audio/workbook/lesson-10-workbook-audio-2.mp3",
    "pronunciationAudio": "audio/workbook/lesson-10-workbook-audio-2.mp3",
    "sourceStatus": "MIGRATED_FROM_OLD_SCHEMA"
  },
  "vocabulary": [
    {
      "id": 1,
      "hanzi": "别",
      "pinyin": "bié",
      "wordType": "Phó từ",
      "meaning": "Đừng",
      "exampleZH": "别看电视了，明天还要考试呢。",
      "examplePinyin": "Bié kàn diànshì le, míngtiān hái yào kǎoshì ne.",
      "exampleVI": "Đừng xem tivi nữa, mai còn phải thi.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 2,
      "hanzi": "帮助",
      "pinyin": "bāngzhù",
      "wordType": "Động từ",
      "meaning": "Giúp đỡ",
      "exampleZH": "大卫喜欢帮助别人。",
      "examplePinyin": "Dàwèi xǐhuan bāngzhù biérén.",
      "exampleVI": "David thích giúp đỡ người khác.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 3,
      "hanzi": "哥哥",
      "pinyin": "gēge",
      "wordType": "Danh từ",
      "meaning": "Anh trai",
      "exampleZH": "哥哥正在玩电脑。",
      "examplePinyin": "Gēge zhèngzài wán diànnǎo.",
      "exampleVI": "Anh trai đang chơi máy tính.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 4,
      "hanzi": "鸡蛋",
      "pinyin": "jīdàn",
      "wordType": "Danh từ",
      "meaning": "Trứng gà",
      "exampleZH": "我每天早上吃一个鸡蛋。",
      "examplePinyin": "Wǒ měitiān zǎoshang chī yí ge jīdàn.",
      "exampleVI": "Mỗi sáng tôi ăn một quả trứng gà.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 5,
      "hanzi": "西瓜",
      "pinyin": "xīguā",
      "wordType": "Danh từ",
      "meaning": "Dưa hấu",
      "exampleZH": "我想买一个西瓜。",
      "examplePinyin": "Wǒ xiǎng mǎi yí ge xīguā.",
      "exampleVI": "Tôi muốn mua một quả dưa hấu.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 6,
      "hanzi": "正在",
      "pinyin": "zhèngzài",
      "wordType": "Phó từ",
      "meaning": "Đang",
      "exampleZH": "哥哥正在玩电脑呢。",
      "examplePinyin": "Gēge zhèngzài wán diànnǎo ne.",
      "exampleVI": "Anh trai đang chơi máy tính.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 7,
      "hanzi": "手机",
      "pinyin": "shǒujī",
      "wordType": "Danh từ",
      "meaning": "Điện thoại di động",
      "exampleZH": "手机在桌子上呢。",
      "examplePinyin": "Shǒujī zài zhuōzi shang ne.",
      "exampleVI": "Điện thoại ở trên bàn kìa.",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 8,
      "hanzi": "洗",
      "pinyin": "xǐ",
      "wordType": "Động từ",
      "meaning": "Giặt, rửa",
      "exampleZH": "这些衣服你一个人能洗完吗？",
      "examplePinyin": "Zhèxiē yīfu nǐ yí ge rén néng xǐ wán ma?",
      "exampleVI": "Một mình bạn giặt xong những quần áo này được không?",
      "sourceStatus": "VERIFIED"
    },
    {
      "id": 9,
      "hanzi": "课",
      "pinyin": "kè",
      "wordType": "Danh từ",
      "meaning": "Giờ học, môn học, bài học",
      "exampleZH": "明天的课我都准备好了。",
      "examplePinyin": "Míngtiān de kè wǒ dōu zhǔnbèi hǎo le.",
      "exampleVI": "Bài ngày mai tôi đều chuẩn bị xong rồi.",
      "sourceStatus": "VERIFIED"
    }
  ],
  "grammar": [
    {
      "id": "g1",
      "name": "不要/别 + động từ + 了",
      "formula": "不要/别 + V + 了",
      "explanation": "Dùng để khuyên ngăn hoặc bảo ai đừng tiếp tục làm việc gì.",
      "examples": [
        {
          "zh": "不要玩手机了。",
          "pinyin": "Búyào wán shǒujī le.",
          "vi": "Đừng chơi điện thoại nữa."
        },
        {
          "zh": "别睡觉了。",
          "pinyin": "Bié shuìjiào le.",
          "vi": "Đừng ngủ nữa."
        },
        {
          "zh": "别看书了。",
          "pinyin": "Bié kàn shū le.",
          "vi": "Đừng đọc sách nữa."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn câu khuyên ngăn đúng.",
        "options": [
          "别看电视了。",
          "看别电视了。",
          "别了看电视。"
        ],
        "answer": "别看电视了。",
        "explanation": "别 đứng trước động từ."
      }
    },
    {
      "id": "g2",
      "name": "Giới từ 对",
      "formula": "Chủ ngữ + 对 + người/việc + tính từ/động từ",
      "explanation": "Nói thái độ, tác dụng hoặc ảnh hưởng đối với ai/cái gì.",
      "examples": [
        {
          "zh": "跑步对身体很好。",
          "pinyin": "Pǎobù duì shēntǐ hěn hǎo.",
          "vi": "Chạy bộ rất tốt cho sức khỏe."
        },
        {
          "zh": "老师对学生非常好。",
          "pinyin": "Lǎoshī duì xuésheng fēicháng hǎo.",
          "vi": "Thầy cô rất tốt với học sinh."
        },
        {
          "zh": "看电视对学汉语有帮助。",
          "pinyin": "Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.",
          "vi": "Xem tivi có ích cho việc học tiếng Trung."
        }
      ],
      "sourceStatus": "VERIFIED",
      "quickQuiz": {
        "question": "Chọn câu dùng 对 đúng.",
        "options": [
          "跑步对身体很好。",
          "跑步身体对很好。",
          "对跑步身体很好。"
        ],
        "answer": "跑步对身体很好。",
        "explanation": "对 đứng trước đối tượng chịu ảnh hưởng."
      }
    }
  ],
  "vocabularyGames": {
    "quizQuestions": [
      {
        "id": "q1",
        "type": "hanzi-to-meaning",
        "prompt": "别",
        "options": [
          "Đừng",
          "Giúp đỡ",
          "Anh trai",
          "Trứng gà"
        ],
        "answer": "Đừng",
        "pinyin": "bié",
        "meaning": "Đừng",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q2",
        "type": "meaning-to-hanzi",
        "prompt": "Giúp đỡ",
        "options": [
          "别",
          "帮助",
          "哥哥",
          "鸡蛋"
        ],
        "answer": "帮助",
        "pinyin": "bāngzhù",
        "meaning": "Giúp đỡ",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q3",
        "type": "hanzi-to-meaning",
        "prompt": "哥哥",
        "options": [
          "Đừng",
          "Giúp đỡ",
          "Anh trai",
          "Trứng gà"
        ],
        "answer": "Anh trai",
        "pinyin": "gēge",
        "meaning": "Anh trai",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "q4",
        "type": "meaning-to-hanzi",
        "prompt": "Trứng gà",
        "options": [
          "别",
          "帮助",
          "哥哥",
          "鸡蛋"
        ],
        "answer": "鸡蛋",
        "pinyin": "jīdàn",
        "meaning": "Trứng gà",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p1",
        "type": "hanzi-to-pinyin",
        "prompt": "西瓜",
        "options": [
          "xīguā",
          "bié",
          "bāngzhù",
          "gēge"
        ],
        "answer": "xīguā",
        "meaning": "Dưa hấu",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "p2",
        "type": "hanzi-to-pinyin",
        "prompt": "正在",
        "options": [
          "zhèngzài",
          "bié",
          "bāngzhù",
          "gēge"
        ],
        "answer": "zhèngzài",
        "meaning": "Đang",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "f1",
        "type": "meaning-to-hanzi",
        "prompt": "“Đừng tìm nữa” là câu nào?",
        "options": [
          "别找了",
          "正在找",
          "帮助找"
        ],
        "answer": "别找了",
        "translation": "",
        "sourceStatus": "VERIFIED"
      },
      {
        "id": "f2",
        "type": "fill-blank",
        "prompt": "手机在桌子上（ ）。",
        "options": [
          "别",
          "帮助",
          "哥哥",
          "鸡蛋"
        ],
        "answer": "呢",
        "translation": "",
        "sourceStatus": "VERIFIED"
      }
    ],
    "matchingPairs": [
      {
        "id": "m1",
        "zh": "别",
        "pinyin": "bié",
        "vi": "Đừng"
      },
      {
        "id": "m2",
        "zh": "帮助",
        "pinyin": "bāngzhù",
        "vi": "Giúp đỡ"
      },
      {
        "id": "m3",
        "zh": "哥哥",
        "pinyin": "gēge",
        "vi": "Anh trai"
      },
      {
        "id": "m4",
        "zh": "鸡蛋",
        "pinyin": "jīdàn",
        "vi": "Trứng gà"
      },
      {
        "id": "m5",
        "zh": "西瓜",
        "pinyin": "xīguā",
        "vi": "Dưa hấu"
      },
      {
        "id": "m6",
        "zh": "正在",
        "pinyin": "zhèngzài",
        "vi": "Đang"
      },
      {
        "id": "m7",
        "zh": "手机",
        "pinyin": "shǒujī",
        "vi": "Điện thoại di động"
      },
      {
        "id": "m8",
        "zh": "洗",
        "pinyin": "xǐ",
        "vi": "Giặt, rửa"
      }
    ]
  },
  "workbookExercises": {
    "audioFile": "audio/workbook/lesson-10-workbook-audio-1.mp3",
    "sourceStatus": "official-answer-key-verified",
    "listeningPart1": {
      "type": "listening-true-false-image",
      "sourceStatus": "official-workbook",
      "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 94.",
      "questions": [
        {
          "id": 1,
          "image": "images/workbook/lesson10/listening-part1/q01.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 2,
          "image": "images/workbook/lesson10/listening-part1/q02.png",
          "imageSource": "official-workbook",
          "answer": true
        },
        {
          "id": 3,
          "image": "images/workbook/lesson10/listening-part1/q03.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 4,
          "image": "images/workbook/lesson10/listening-part1/q04.png",
          "imageSource": "official-workbook",
          "answer": false
        },
        {
          "id": 5,
          "image": "images/workbook/lesson10/listening-part1/q05.png",
          "imageSource": "official-workbook",
          "answer": true
        }
      ]
    },
    "imageSets": {
      "listeningPart2": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 95.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson10/listening-part2/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson10/listening-part2/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson10/listening-part2/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson10/listening-part2/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson10/listening-part2/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson10/listening-part2/f.png",
            "imageSource": "official-workbook"
          }
        ]
      },
      "readingPart1": {
        "sourceStatus": "official-workbook",
        "sourceNote": "Ảnh gốc được crop từ HSK 2 Sách bài tập.pdf, PDF page 97.",
        "images": [
          {
            "id": "A",
            "src": "images/workbook/lesson10/reading-part1/a.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "B",
            "src": "images/workbook/lesson10/reading-part1/b.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "C",
            "src": "images/workbook/lesson10/reading-part1/c.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "D",
            "src": "images/workbook/lesson10/reading-part1/d.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "E",
            "src": "images/workbook/lesson10/reading-part1/e.png",
            "imageSource": "official-workbook"
          },
          {
            "id": "F",
            "src": "images/workbook/lesson10/reading-part1/f.png",
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
        "answer": "B"
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
          "A 电视好看",
          "B 他不想睡觉",
          "C 他想学习汉语"
        ],
        "answer": "C"
      },
      {
        "id": 12,
        "question": "Câu 12",
        "options": [
          "A 茶不好喝",
          "B 他生病了",
          "C 他吃药了"
        ],
        "answer": "C"
      },
      {
        "id": 13,
        "question": "Câu 13",
        "options": [
          "A 不知道",
          "B 床上",
          "C 桌子上"
        ],
        "answer": "A"
      },
      {
        "id": 14,
        "question": "Câu 14",
        "options": [
          "A 不太忙",
          "B 不太累",
          "C 想休息"
        ],
        "answer": "B"
      },
      {
        "id": 15,
        "question": "Câu 15",
        "options": [
          "A 没有米饭",
          "B 吃完了",
          "C 很快就可以吃饭"
        ],
        "answer": "C"
      }
    ],
    "readingPart1": [
      {
        "id": 16,
        "text": "我每天早上都看报纸。",
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
        "text": "妈妈正在给我们洗衣服呢。",
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
        "text": "别玩儿电脑了，看电脑时间长了对眼睛不好。",
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
        "text": "别工作了，睡觉吧，明天早点儿起床。",
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
        "text": "有什么问题，你可以打我的手机。",
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
          "word": "帮助"
        },
        {
          "key": "B",
          "word": "正在"
        },
        {
          "key": "C",
          "word": "课"
        },
        {
          "key": "D",
          "word": "鸡蛋"
        },
        {
          "key": "E",
          "word": "贵"
        },
        {
          "key": "F",
          "word": "别"
        }
      ],
      "questions": [
        {
          "id": 21,
          "text": "明天的（ ）我都准备好了，可以睡觉了。",
          "answer": "C"
        },
        {
          "id": 22,
          "text": "大卫是一个喜欢（ ）别人的好孩子。",
          "answer": "A"
        },
        {
          "id": 23,
          "text": "我每天早上吃一个（ ），喝一杯牛奶。",
          "answer": "D"
        },
        {
          "id": 24,
          "text": "妈妈睡觉了，我们（ ）看电视了。",
          "answer": "F"
        },
        {
          "id": 25,
          "text": "哥哥（ ）玩电脑呢，没时间帮助我。",
          "answer": "B"
        }
      ]
    },
    "readingPart3": [
      {
        "id": 26,
        "text": "这本书是我写的，希望能对你有所帮助。",
        "statement": "这本书还没写完。",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 27,
        "text": "医生说这个药要饭前吃，吃药后两个小时别喝茶。",
        "statement": "医生说多喝茶对身体好。",
        "answer": false,
        "explanation": ""
      },
      {
        "id": 28,
        "text": "别找了，你的手机在桌子上呢，电脑旁边。",
        "statement": "电脑也在桌子上。",
        "answer": true,
        "explanation": ""
      },
      {
        "id": 29,
        "text": "那件白色的衣服我帮你洗了，在外面呢。",
        "statement": "衣服在外面。",
        "answer": true,
        "explanation": ""
      },
      {
        "id": 30,
        "text": "机场离这儿很远，坐公共汽车要一个多小时，坐出租车也要四五十分钟吧。",
        "statement": "机场离这儿非常远。",
        "answer": true,
        "explanation": ""
      }
    ],
    "readingPart4": {
      "options": [
        {
          "key": "A",
          "text": "爸，我们明天去跑步吧。"
        },
        {
          "key": "B",
          "text": "你弟弟正在学习汉语吗？"
        },
        {
          "key": "C",
          "text": "一个红的，一个白的，真漂亮。"
        },
        {
          "key": "D",
          "text": "你明天的课都准备好了吗？"
        },
        {
          "key": "E",
          "text": "他在哪儿呢？你看见 他 了吗？（例）"
        },
        {
          "key": "F",
          "text": "别看电视了，明天还要考试呢。"
        }
      ],
      "questions": [
        {
          "id": 31,
          "text": "你喜欢哪个？我可以送给你。",
          "answer": "C"
        },
        {
          "id": 32,
          "text": "好啊，医生说多运动对我的身体好。",
          "answer": "A"
        },
        {
          "id": 33,
          "text": "好吧，我这就去睡觉。",
          "answer": "F"
        },
        {
          "id": 34,
          "text": "对，因为公司想让他明年去中国工作。",
          "answer": "B"
        },
        {
          "id": 35,
          "text": "没问题，您放心吧。",
          "answer": "D"
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

window.lesson10Data = lesson10Data;
