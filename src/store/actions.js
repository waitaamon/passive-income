export const setValidationErrors = ({commit}, errors) => {
  
  commit('setValidationErrors', errors)
}

export const clearValidationErrors = ({ commit }) => {
  
  commit('setValidationErrors', [])
}