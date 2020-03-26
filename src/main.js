import './assets/scss/app.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase'

Vue.config.ignoredElements = [/^ion-/]
Vue.config.productionTip = false

Vue.use(require('vue-moment'))

const firebaseConfig = {
  apiKey: 'AIzaSyAB8S2K8zEEZr1uQld30UfeGxFUaI9mHl4',
  authDomain: 'brainfood-f3232.firebaseapp.com',
  databaseURL: 'https://brainfood-f3232.firebaseio.com',
  projectId: 'brainfood-f3232',
  storageBucket: 'brainfood-f3232.appspot.com',
  messagingSenderId: '492426066478',
  appId: '1:492426066478:web:c6484162fb042759273dbf',
  measurementId: 'G-4BJ0XGSD2M'
}

firebase.initializeApp(firebaseConfig)
new Vue({ store, router, render: h => h(App) }).$mount('#app')
