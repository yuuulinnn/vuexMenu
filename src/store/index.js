import Vue from 'vue'
import Vuex from 'vuex'// 注：使用之前要先安装npm install --save vuex

import reset from './modules/reset'
import basicInfo from './modules/basicInfo'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    reset,
    basicInfo
  }
})
export default store
