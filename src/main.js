import './assets/scss/app.scss'

import Vue from 'vue'
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios.js'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(AllIosIcon)
Vue.config.productionTip = false

                           new Vue({store, router, render : h => h(App)})
                               .$mount('#app')
