
import store from '@/store/index'
// 针对vuex刷新页面后，利用浏览器的sessionStorage缓存数据
export function getVuexState () {
  let state = sessionStorage.getItem('vuexState') ? JSON.parse(sessionStorage.getItem('vuexState')) : ''
  if (state) {
    store.replaceState(Object.assign({}, state))
    sessionStorage.removeItem('vuexState')
  }
}
