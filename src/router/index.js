import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Pantry from '../views/Pantry.vue'
import Scan from '../views/Scan.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/pantry', name: 'Pantry', component: Pantry },
  { path: '/scan', name: 'Scan', component: Scan },
  { path: '*', name: 'Dashboard', component: Dashboard }
]

const router = new VueRouter({ routes })

export default router
