const axios = require('axios')
axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000/api/' : 'https://brainfood-98234974.herokuapp.com/api/'

const state = {
  token: ''
}

const getters = {
  token: state => state.token,
  tokenData: (state, getters) => state.token ? JSON.parse(atob(getters.token.split('.')[1])) : null
}

const mutations = {
  SET_TOKEN (state, data) {
    state.token = data.token
  }
}

const actions = {
  async login ({ commit }, data) {
    return axios.post('auth/login', {
      email: data.email,
      password: data.password
    }).then((res) => {
      commit('SET_TOKEN', res.data)
    }).catch((e) => {
      throw e
    })
  },
  async register ({ commit }, data) {
    return axios.post('auth/register', {
      email: data.email,
      password: data.password,
      name: data.name
    }).then((res) => {
      commit('SET_TOKEN', res.data.token)
    }).catch((e) => {
      throw e
    })
  },
  async logout ({ commit }, data) {
    await commit('SET_TOKEN', '')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
