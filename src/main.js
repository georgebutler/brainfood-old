import './assets/scss/app.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.ignoredElements = [/^ion-/]
Vue.config.productionTip = false

Vue.use(require('vue-moment'))

new Vue({ store, router, render: h => h(App) }).$mount('#app')
