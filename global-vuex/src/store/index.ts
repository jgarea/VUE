import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 1,
  },
  getters: {
    times2(state){
      return state.counter * 2;
    }
  },
  mutations: {
    setCounter(state, value) {
      state.counter = value;
    }
  },
  actions: {
    // set async
  },
  // modules: {
  // }
})
