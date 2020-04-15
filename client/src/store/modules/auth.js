const axios = require('axios')

axios.defaults.baseURL = `${process.env.API_URL}`

const state = {
  token: null
}

const getters = {
  token (state) {
    return state.token
  },
  isAuthenticated (state) {
    return state.token !== null
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
        commit('SET_TOKEN', res.data.token)
        resolve()
      }).catch((e) => {
        reject(e)
      })
    })
  },
  logout ({ commit }) {
    commit('SET_TOKEN', null)
  }
}

const mutations = {
  SET_TOKEN (state, data) {
    state.token = data
    axios.defaults.headers.common.Authorization = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
