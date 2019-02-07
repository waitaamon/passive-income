let lang = require('lodash/lang');

export const setToken = (state, token) => {

    if(lang.isEmpty(token)){
        state.user.token = null;
        return
    }
  
  state.user.token = token
};

export  const setIsAuthenticated = (state, trueOrFalse) => {

    state.user.authenticated = trueOrFalse
};

export  const setUser = (state, data) => {
    state.user.data = data
};