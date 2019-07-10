import Vue from 'vue'
import Vuex from 'vuex'
import stroes from './storeOne'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    li:''
  },
  mutations: {

  },
  actions: {

  },
  getters:{

  },
  modules:{
      stroes
  }
})
