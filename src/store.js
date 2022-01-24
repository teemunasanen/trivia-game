import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: '',
      score: ''
    },
    questions: [],
    // answers
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user
    },
    setQuestions: (state, questions) => {
      state.questions = questions
    }

  },

  actions: {

  },
});

export default store;
