<template>
  <div class="header">
    <el-row>
      <el-col :span="20">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">菜单一</template>
              <el-menu-item index="index">选项1</el-menu-item>
              <el-menu-item index="menu1-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">菜单二</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="print">打印</el-menu-item>
            <el-menu-item index="4"
              ><a href="https://www.ele.me" target="_blank"
                >订单管理</a
              ></el-menu-item
            >
          </el-menu></el-col
      >
      <el-col :span="4">
        <el-button @click="logout" style="margin-top:10px" type="primary">Log out</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'APPheader',
  data () {
    return {
      activeIndex: this.$store.state.basicInfo.navMenuIndex
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({
        path: key
        // params: { data: 'query' }
      })
      this.$store.commit('setNavMenuIndex', key) // 设置当前激活菜单的 index
    },
    logout () {
      sessionStorage.clear()
      this.$store.replaceState(Object.assign({}, this.cloneObject(this.$store.state.reset.initState), {reset: this.$store.state.reset})) // 重置vuex的state
      this.$router.push({name: 'Login'})
      console.log(this.cloneObject(this.$store.state))
    }
  },
  components: {

  },
  computed: {
  },
  watch: {
    // 监听vuex中navMenuIndex的变化，设置当前菜单激活项
    '$store.state.basicInfo.navMenuIndex': function () {
      this.activeIndex = this.$store.state.basicInfo.navMenuIndex
    }
  },
  created () {

  }
}
</script>

<style scoped>
</style>
