const state = {
  isAuthenticated: false,
  user: null
}

const getters = {
  isAuthenticated (state) {
    return state.isAuthenticated
  },
  user (state) {
    return state.user
  }
}

const actions = {
  login ({ commit }, data) {
    commit('SET_LOGGED_IN', true)
    commit('SET_USER', {
      displayName: 'John Doe',
      email: 'johndoe@brainfood.com'
    })
  },
  logout ({ commit }) {
    commit('SET_LOGGED_IN', false)
    commit('SET_USER', null)
  }
}

const mutations = {
  SET_LOGGED_IN (state, value) {
    state.isAuthenticated = value
  },
  SET_USER (state, data) {
    state.user = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
