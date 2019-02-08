export  const setIsAuthenticated = (state, trueOrFalse) => {

    state.authenticated = trueOrFalse
};

export  const setUser = (state, data) => {
    state.user = data
};