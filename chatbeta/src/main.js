import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import VueChatScroll from 'vue-chat-scroll';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import firebase from 'firebase';

Vue.config.productionTip = false;
Vue.use(VueChatScroll);

let app = null

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')     
  }
})
