import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'yuying',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: { login }
})

export default store
