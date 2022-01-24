import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: '',
      score:''
    },
    questions:[],
    // answers
  },

  mutations: {
    setUser: (state, user) => {
      state.user = user
    }

  },

  actions: {
    
  },
});

export default store;
