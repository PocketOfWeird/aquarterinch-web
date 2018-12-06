import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        db: null,
    },
    getters: {
        getUser: state => {
          return state.user;
        }
    },
    mutations: {
        setUser: state => {
          state.user = Firebase.auth().currentUser;
      },
      setDb: state => {
          state.db = Firebase.firestore();
      }
    },
    actions: {
        setUser: context => {
          context.commit('setUser');
        },
        setDb: context => {
          context.commit('setDb');
        }
    }
});

export default store;
