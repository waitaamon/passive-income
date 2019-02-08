import firebase from 'firebase'

export const login = ({ commit }, payload) => {
  
  commit('setLoading', true, {root: true})
  
  firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(data => {
      
        const newUser = {
          id: data.user.uid,
          email: data.user.email,
        }
        
        commit('setLoading', false, {root: true})
      
        commit('setIsAuthenticated', true)
      
        commit('setUser', newUser)
      }
    )
    .catch(error => {
        commit('setLoading', false, {root: true})
        commit('setError', error, { root: true })
      }
    )
};

export const logout = ({ commit }) => {
  firebase.auth().signOut()
  
  commit('setUser', null)
  
};