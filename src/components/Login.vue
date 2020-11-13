<template>
  <div class="hello">
    <el-button type="primary" @click="login">Login</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$router.push('index')
      // 重置vuex的state
      // this.$store.replaceState(Object.assign({}, this.cloneObject(this.$store.state), { reset: this.$store.state.reset }))
      // this.$store.commit('setNavMenuIndex', 'index') // 设置当前激活菜单的 index
      // let basicInfo = this.cloneObject(this.$store.state.basicInfo)
      // this.$store.commit('setInitState', {basicInfo}) // 记录初始用户信息对象字段，以后退出登录后作为合并原state使用
    }
  },
  mounted () {
    let {isInit} = this.$store.state.reset
    if (isInit) {
      let basicInfo = this.cloneObject(this.$store.state.basicInfo)
      this.$store.commit('setInitState', {basicInfo}) // 记录初始用户信息对象字段，以后退出登录后作为合并原state使用
      this.$store.commit('setIsInit') // 设置初始化状态为false
    }
    console.log(this.$store.state)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
