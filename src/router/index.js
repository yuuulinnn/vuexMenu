import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import store from '@/store/index' // 引入状态管理 store
// 注：不加下面这段代码，跳转本身的时候浏览器会报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
// end

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: () =>
        import('@/components/global/home'),
      children: [ // 嵌套子路由,用户登录后首页
        {
          path: '/index', // 注：必须写/，否则地址不正确
          name: 'index',
          component: () =>
            import('@/components/index')
        },
        {
          path: '/menu1-2',
          name: 'menu1-2',
          component: () =>
            import('@/components/menu1-2')
        }]
    }
  ]
})
router.beforeEach((to, from, next) => {
  store.commit('setNavMenuIndex', to.name) // 点击浏览器的前进后退设置当前激活菜单的 index
  next()
})
export default router
