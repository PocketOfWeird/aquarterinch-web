import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from 'firebase/app';
import 'firebase/auth';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    setUser: state => {
      state.user = Firebase.auth().currentUser;
    }
  },
  actions: {
    setUser: context => {
      context.commit('setUser');
    }
  }
});

export default store;
