<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive>  -->
    <TabBar v-show="this.$route.meta.flag"/>
  </div>
</template>

<script>
import TabBar from "./common/footer"
export default {
  name:"app",
  components:{
    TabBar
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
