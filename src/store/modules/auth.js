import axios from 'axios'

const state = {
  test: {}
}

const getters = {
  test: (state, getters, rootState) => {
    return state.test
  }
}

const mutations = {
  setTest (state, data) {
    state.test = { ...data }
  }
}

const actions = {
  login ({ commit, state }, data) {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then((r) => {
        commit('setTest', r.data)
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
