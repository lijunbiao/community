<template>
   <div class="PostList">
         <div v-if="loading">
            Loading...
         </div>
         <div v-else class="list">
                <ul>
                     <li v-for="(item, index) in list" :key="index">
                          <router-link to="#" :title="item.author_id"><img :src="item.author.avatar_url" :title="item.author.loginname"></router-link>
                          <span class="count">{{item.reply_count}}/{{item.visit_count}}</span>
                          <router-link to="#" :title="item.title">{{item.title}}</router-link>
                          <span class="time">{{item.last_reply_at | formateDate}}</span>
                     </li>
                </ul>
         </div>
   </div>
</template>
<script>
export default {
  name: 'c-postlist',
  data () {
    return {
      list: [], // 存储作者分享信息列表
      loading: false
    }
  },
  beforeMount () {
    this.loading = true
    this.getData()
  },
  methods: {
    getData () {
      // 发送请求获取作者分享信息列表
      this.$http({
        url: 'https://cnodejs.org/api/v1/topics',
        method: 'get',
        params: {
          page: 1,
          limit: 20
        }
      })
        .then((res) => { // 响应成功
          if (res.data.success === true) {
            this.list = res.data.data
            this.loading = false
          }
        })
        .catch((error) => { // 发送请求失败
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
.list {
    background: white;
    margin: 0.5rem 3rem;
    padding: 0  8px;
}
.list li {
     list-style: none;
     padding: 10px 0 5px 0;
     border-bottom: 1px solid #E7E7E7;
}
.list img {
    width: 1.2rem;
    height: 1.2rem;
}
.list li span {
    font-size: 0.5rem;
}
.list .count {
   display: inline-block;
   width: 120px;
   text-align: center;
   /* margin: 0 20px; */
}
.list li a {
   text-decoration: none;
   color: #000000;
   vertical-align: middle;
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
   max-width: 70%;
}
.list li a:visited {
   color: #8D8F8D;
}
.list .time {
   float: right;
   margin-right: 30px;
   margin-top: 10px;
}
</style>
