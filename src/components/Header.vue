<template>
   <div class="Header">
         <!-- 左部分 -->
        <router-link to="/">
            <img src="../assets/cnodejs_light.svg" alt="">
        </router-link>
        <!-- 右部分 -->
        <span><a href="#">关于</a></span>
   </div>
</template>
<script>
export default {
  name: 'c-header'
}
</script>
<style scoped>
.Header {
   height: 50px;
   background: #5A5555;
   line-height: 50px;
}
.Header img {
   max-width: 120px;
   margin-left: 50px;
   margin-top: 8px;
}
.Header span {
   float: right;
   margin-right: 50px;
}
.Header a {
   text-decoration: none;
   color:#CBC9C9;
}
</style>
