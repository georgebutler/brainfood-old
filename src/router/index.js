import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Pantry from '../views/Pantry.vue'
import Scan from '../views/Scan.vue'
import Login from '../views/auth/Login'
import Error from '../views/message/Error'
import Register from '../views/auth/Register'

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
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      auth: false,
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      auth: false,
      title: 'Register'
    }
  },
  {
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title ? `${to.meta.title} | ` : ''
  document.title = `${title} Brainfood - Think about how you eat.`
  next()
})

export default router
