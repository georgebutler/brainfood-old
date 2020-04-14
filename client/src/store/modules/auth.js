const axios = require('axios')
axios.defaults.baseURL = process.env.API_URL || 'http://localhost:3000/api/'

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
      axios.post('auth/register', {
        email: data.email,
        password: data.password,
        name: {
          first: data.name.first,
          last: data.name.last
        }
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
