import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: '',
      score: ''
    },
    questions: [],
    // answers
    highScore: false,
    results: [],
    questionParams: 
    {
      amount: '',
      category: '',
      difficulty: '',
    },
    currentScore: '',
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user
    },
    setUserScore: (state, score) => {
      state.user.score = score
    },
    setQuestions: (state, questions) => {
      state.questions = questions
    },
    setHighScore: (state, highScore) => {
      state.highScore = highScore
    },
    setResults: (state, answerArray) => {
      state.results = answerArray
    },
    setQuestionParams: (state, params) => {
      state.questionParams = params
    },
    setCurrentScore: (state, score) => {
      state.currentScore = score
    }

  },

  actions: {

  },
});

export default store;
