// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/default.css'
import inputValid from '@/directives/input-valid.js'// 引入自定义指令
import store from './store/index' // 引入状态管理 store
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import tableRowClick from '@/mixin/tableRowClick.js'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.cloneObject = (obj) => JSON.parse(JSON.stringify(obj)) // 添加在Vue.prototype上的方法也算是插件
Vue.directive('input-valid', inputValid)
Vue.mixin(tableRowClick)
/* eslint-disable no-new */
// 也可用下面代码实现全局使用插件
// let MyPlugin = {}
// MyPlugin.install = function (Vue, options) {
//   Vue.directive('input-valid', inputValid)
// }
// Vue.use(MyPlugin)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
