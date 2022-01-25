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
    results: []
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
    }

  },

  actions: {

  },
});

export default store;
