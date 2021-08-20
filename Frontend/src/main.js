import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

import './plugins/bootstrap-vue'
import './plugins/axios'

const firebaseConfig = {
  apiKey: "AIzaSyCnYi6M-QVG7QXpAPwrOC7K7xT_ig51Lu4",
  authDomain: "simp-ac837.firebaseapp.com",
  projectId: "simp-ac837",
  storageBucket: "simp-ac837.appspot.com",
  messagingSenderId: "1013475959296",
  appId: "1:1013475959296:web:e0a9632c9cdd75ad2e2ee5"
};

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
