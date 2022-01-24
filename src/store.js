import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: '',
      score:''
    }


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
