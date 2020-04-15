const axios = require('axios')

axios.defaults.baseURL = 'https://brainfood-98234974.herokuapp.com/api/'

const state = {
  token: null
}

const getters = {
  token (state) {
    return state.token
  }
}

const actions = {
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post('auth/login', {
        email: data.email,
        password: data.password
      }).then((res) => {
        commit('SET_TOKEN', res.data.token)
        resolve()
      }).catch((e) => {
        reject(e)
      })
    })
  },
  register ({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post('auth/register', {
        email: data.email,
        password: data.password,
        name: data.name
      }).then((res) => {
        commit('SET_TOKEN', res.data)
        resolve()
      }).catch((e) => {
        reject(e)
      })
    })
  },
  logout ({ commit }) {
    commit('REMOVE_TOKEN')
  }
}

const mutations = {
  SET_TOKEN (state, data) {
    state.token = data.token
    axios.defaults.headers.common.Authorization = data.token
    localStorage.setItem('token', data.token)
  },
  REMOVE_TOKEN (state, data) {
    state.token = null
    axios.defaults.headers.common.Authorization = null
    localStorage.setItem('token', null)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
