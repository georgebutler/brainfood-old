import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'

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
      requiresAuth: true,
      title: 'Home'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
      title: 'Dashboard'
    }
  },
  {
    path: '/pantry',
    name: 'Pantry',
    component: Pantry,
    meta: {
      requiresAuth: true,
      title: 'Pantry'
    }
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan,
    meta: {
      requiresAuth: true,
      title: 'Scan'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresAuth: false,
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
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = localStorage.getItem('auth.token')

    if (token !== null) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    const title = to.meta.title ? `${to.meta.title} | ` : ''
    document.title = `${title} Brainfood - Think about how you eat.`
  })
})

export default router
