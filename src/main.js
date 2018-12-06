import Vue from 'vue';
import VueRouter from 'vue-router';
import Firebase from 'firebase/app';
import 'firebase/auth';
import Routes from './routes';
import App from './App.vue';
import authRoute from './middleware/authRoute';
import settings from './tools/settings';
import store from './store';


Firebase.initializeApp(settings.firebase);

Vue.use(VueRouter);


const router = new VueRouter({ /* eslint-disable no-new */
  routes: Routes,
  mode: 'history'
});

router.beforeEach(authRoute);

Firebase.auth().onAuthStateChanged(function (user) {

  new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(App)
  });

});
