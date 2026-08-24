/**
 * Storage Module for HSK2 Web App
 * Persists all learning progress, flashcard status, student info, and exam results into localStorage.
 */

const STORAGE_KEY = "hsk2_learning_progress_v1";

const Storage = {
  getStore() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.error("Failed to parse localStorage data", e);
      return {};
    }
  },

  saveStore(store) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  },

  // --- Student Name ---
  getStudentName() {
    const store = this.getStore();
    return store.studentName || "";
  },

  setStudentName(name) {
    const store = this.getStore();
    store.studentName = (name || "").trim();
    this.saveStore(store);
  },

  // --- Lesson Data Store Helper ---
  getLessonStore(lessonId) {
    const store = this.getStore();
    const key = `lesson_${lessonId}`;
    if (!store[key]) {
      store[key] = {
        flashcards: {}, // { [wordId]: 'remembered' | 'forgot' }
        visitedTabs: [], // ['vocab', 'grammar', 'practice', 'exercises']
        examResult: null, // { score, total, correct, percentage, submittedAt, details: [...] }
        draftAnswers: {}, // { [qId]: value }
        wrongQuestions: [], // [qId, ...]
        practiceScores: [] // [{ timestamp, score, total }]
      };
      this.saveStore(store);
    }
    return store[key];
  },

  updateLessonStore(lessonId, updater) {
    const store = this.getStore();
    const key = `lesson_${lessonId}`;
    const lessonData = store[key] || {
      flashcards: {},
      visitedTabs: [],
      examResult: null,
      draftAnswers: {},
      wrongQuestions: [],
      practiceScores: []
    };
    store[key] = updater(lessonData) || lessonData;
    this.saveStore(store);
    return store[key];
  },

  // --- Flashcard Status ---
  getFlashcardStatus(lessonId, wordId) {
    const lesson = this.getLessonStore(lessonId);
    return lesson.flashcards[wordId] || null;
  },

  setFlashcardStatus(lessonId, wordId, status) {
    this.updateLessonStore(lessonId, (lesson) => {
      lesson.flashcards[wordId] = status; // 'remembered' or 'forgot'
      return lesson;
    });
  },

  getFlashcardStats(lessonId, totalWords) {
    const lesson = this.getLessonStore(lessonId);
    const rememberedCount = Object.values(lesson.flashcards).filter((s) => s === "remembered").length;
    const forgotCount = Object.values(lesson.flashcards).filter((s) => s === "forgot").length;
    return {
      remembered: rememberedCount,
      forgot: forgotCount,
      total: totalWords || Object.keys(lesson.flashcards).length
    };
  },

  // --- Tab Progress ---
  markTabVisited(lessonId, tabId) {
    this.updateLessonStore(lessonId, (lesson) => {
      if (!lesson.visitedTabs.includes(tabId)) {
        lesson.visitedTabs.push(tabId);
      }
      return lesson;
    });
  },

  getVisitedTabs(lessonId) {
    const lesson = this.getLessonStore(lessonId);
    return lesson.visitedTabs || [];
  },

  // --- Calculate Overall Progress Percentage ---
  getLessonProgress(lessonId, totalVocab = 13) {
    const lesson = this.getLessonStore(lessonId);
    let progressPoints = 0;
    const maxPoints = 100;

    // 1. Visited tabs (up to 30%)
    const visitedCount = (lesson.visitedTabs || []).length;
    progressPoints += Math.min(30, visitedCount * 7.5);

    // 2. Flashcard remembered (up to 30%)
    const rememberedCount = Object.values(lesson.flashcards || {}).filter((s) => s === "remembered").length;
    if (totalVocab > 0) {
      progressPoints += Math.min(30, Math.round((rememberedCount / totalVocab) * 30));
    }

    // 3. Exam completion & score (up to 40%)
    if (lesson.examResult) {
      const examPct = lesson.examResult.percentage || 0;
      progressPoints += Math.min(40, Math.round((examPct / 100) * 40));
    }

    return Math.min(100, Math.round(progressPoints));
  },

  // --- Draft Answers ---
  saveDraftAnswer(lessonId, qId, value) {
    this.updateLessonStore(lessonId, (lesson) => {
      lesson.draftAnswers[qId] = value;
      return lesson;
    });
  },

  getDraftAnswers(lessonId) {
    const lesson = this.getLessonStore(lessonId);
    return lesson.draftAnswers || {};
  },

  clearDraftAnswers(lessonId) {
    this.updateLessonStore(lessonId, (lesson) => {
      lesson.draftAnswers = {};
      return lesson;
    });
  },

  // --- Exam Results ---
  saveExamResult(lessonId, result) {
    this.updateLessonStore(lessonId, (lesson) => {
      lesson.examResult = result;
      // Also update wrongQuestions list
      lesson.wrongQuestions = (result.details || [])
        .filter((item) => !item.correct)
        .map((item) => item.id);
      return lesson;
    });
  },

  getExamResult(lessonId) {
    const lesson = this.getLessonStore(lessonId);
    return lesson.examResult || null;
  },

  getWrongQuestions(lessonId) {
    const lesson = this.getLessonStore(lessonId);
    return lesson.wrongQuestions || [];
  },

  updateWrongQuestionStatus(lessonId, qId, isCorrect) {
    this.updateLessonStore(lessonId, (lesson) => {
      if (isCorrect) {
        lesson.wrongQuestions = (lesson.wrongQuestions || []).filter((id) => id !== qId);
      }
      return lesson;
    });
  },

  clearExamResult(lessonId) {
    this.updateLessonStore(lessonId, (lesson) => {
      lesson.examResult = null;
      lesson.draftAnswers = {};
      lesson.wrongQuestions = [];
      return lesson;
    });
  },

  // --- Review Results ---
  getReviewStore(reviewId) {
    const store = this.getStore();
    const key = `review${String(reviewId).padStart(2, "0")}`;
    if (!store[key]) {
      store[key] = {
        attempts: [],
        lastResult: null,
        wrongItems: [],
        weakLessonId: null
      };
      this.saveStore(store);
    }
    return store[key];
  },

  saveReviewResult(reviewId, result) {
    const store = this.getStore();
    const key = `review${String(reviewId).padStart(2, "0")}`;
    const review = store[key] || { attempts: [], lastResult: null, wrongItems: [], weakLessonId: null };
    review.attempts = [result, ...(review.attempts || [])].slice(0, 10);
    review.lastResult = result;
    review.wrongItems = result.wrongItems || [];
    review.weakLessonId = result.weakLessonId || null;
    store[key] = review;
    this.saveStore(store);
  },

  getReviewResult(reviewId) {
    return this.getReviewStore(reviewId).lastResult || null;
  },

  getReviewWrongItems(reviewId) {
    return this.getReviewStore(reviewId).wrongItems || [];
  }
};

window.Storage = Storage;
