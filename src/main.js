import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/scss/app.scss'
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios.js'

Vue.use(AllIosIcon)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
