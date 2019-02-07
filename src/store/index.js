import Vue from 'vue';

import Vuex from 'vuex'

import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

import auth from '../app/auth/vuex'
import article from '../app/admin/vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    auth,
    article
  }
  
})