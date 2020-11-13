<template>
  <div>
    <APPheader />
    <!-- <router-view /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import APPheader from './header'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    APPheader
  },
  computed: {
  },
  watch: {
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>

</style>
