import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Error from '../views/message/Error'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login'
import Pantry from '../views/Pantry.vue'
import Register from '../views/auth/Register'
import Scan from '../views/Scan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title ? `${to.meta.title} | ` : ''
  document.title = `${title} Brainfood - Think about how you eat.`
  next()
})

export default router
