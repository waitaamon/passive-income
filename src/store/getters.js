export const getError =  (state) => state.error

export const clearError =  (state) => {
  state.error = null
}

export const loading = (state) => state.loading