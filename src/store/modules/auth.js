import axios from 'axios'

const state = {
  test: true
}

const getters = {
  password: (state, getters, rootState) => {
    return state._admin
  }
}

const mutations = {
  setPassword (state, data) {
    state._admin = data._admin
  }
}

const actions = {
  login ({ commit, state }, data) {
    axios.get(`https://jsonplaceholder.typicode.com/users/${Math.round((Math.random() * 100))}`)
      .then((r) => {
        console.log(r.data)
        // commit('setPassword', data)
      }).catch((e) => {
        console.error(e)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
