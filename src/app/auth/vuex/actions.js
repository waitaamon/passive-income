import axios from 'axios'
import firebase from 'firebase'

export const login = ({ commit }, payload) => {
  
  firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(user => {
      commit('setUser', user)
      commit('setIsAuthenticated', true)
    })
    .catch(() => {
      commit('setUser', null);
      commit('setIsAuthenticated', false);
    })
};


export const logout = ( { dispatch }) => {

    return axios.post('/api/logout').then(() => {

        dispatch('clearAuth')

    })
};

export const clearAuth = ( { commit } ) => {

    commit('setAuthenticated', false);
    commit('setUserData', null);
    commit('setToken', null)
};