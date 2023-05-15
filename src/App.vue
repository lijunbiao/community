<template>
  <div id="app">
      <!-- 头部 -->
       <Header></Header>
       <!-- 主页面 -->
       <router-view name="main"></router-view>
       <router-view name="sidebar"></router-view>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
<style>
html {
   background-color: #DDDDDD
}
* {
   margin: 0;
   padding: 0;
}
#app {
     font-size: 20px;
}
</style>
