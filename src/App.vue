<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { getVuexState } from '@/utils/session.js'
export default {
  name: 'App',
  mounted () {
    // 注：在页面刷新前将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      let vuexState = JSON.stringify(this.$store.state)
      sessionStorage.setItem('vuexState', vuexState)
    })
    // 刷新后将session里面的赋值给vuex的state
    getVuexState()
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
