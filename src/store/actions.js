export const setError = ( {commit}, error) => {
  
  commit('setError', error)
}

export const clearError = ({ commit }) => {
  
  commit('setError', null)
}