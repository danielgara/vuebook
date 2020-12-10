import { createStore } from 'vuex';
import UserStore from './user';

export default new createStore({
  ...UserStore,
});

/*
export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    },
  },
  modules: {
  },
});*/