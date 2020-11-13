const state = {
  isInit: true, // 默认值是true，初始化加载时根据状态缓存全局state
  initState: {} // 记录basicInfo && permission
}
const mutations = {
  // 设置isInit状态
  setIsInit (state) {
    state.isInit = false
  },
  // 缓存vuex初始化全局state
  setInitState (state, data) {
    state.initState = data
  }
}
const getters = {

}
const actions = {

}
export default {
  state,
  mutations,
  getters,
  actions
}
