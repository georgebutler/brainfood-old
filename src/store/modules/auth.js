// import axios from 'axios'
import firebase from 'firebase'

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
  login ({ commit, state }, payload) {
    return firebase.auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((r) => {
        // console.log('Success, logged in.')
      })
  },
  register ({ commit, state }, payload) {
    return firebase.auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((r) => {
        r.user.updateProfile({
          displayName: payload.displayName
        }).then((r) => {
          // console.log('Success, welcome to Brainfood.')
        }).catch((e) => {
          // console.error(e)
        })
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
