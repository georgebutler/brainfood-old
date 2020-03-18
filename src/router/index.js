import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Pantry from '../views/Pantry.vue'
import Scan from '../views/Scan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      auth: true,
      title: 'Home'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      auth: true,
      title: 'Dashboard'
    }
  },
  {
    path: '/pantry',
    name: 'Pantry',
    component: Pantry,
    meta: {
      auth: true,
      title: 'Pantry'
    }
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan,
    meta: {
      auth: true,
      title: 'Scan'
    }
  },
  {
    path: '*',
    redirect: {
      name: 'Dashboard'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
