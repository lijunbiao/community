<template>
  <div class="SideBar">
       <div v-if="loading">
          Loading....
       </div>
       <div v-else class="info">
               <!-- 顶部 -->
               <div class="user">
                    <p>作者</p>
                    <div>
                          <router-link :to="{name: 'user_info', params: {
                             name: userinfo.loginname
                          }}">
                            <img :src="userinfo.avatar_url" alt="">
                          </router-link>
                          <router-link :to="{name: 'user_info', params: {
                             name: userinfo.loginname
                          }}">
                              {{userinfo.loginname}}
                          </router-link>
                    </div>
                    <p>积分：{{userinfo.score}}</p>
               </div>
               <!-- 中部 -->
               <div class="topics">
                    <p>作者最近主题</p>
                    <ul>
                         <li v-for="(item, index) in userinfo.recent_topics" :key="index">
                            <router-link :to="{name: 'post_content', params: {id: item.id, name: item.author.loginname}}">
                              {{item.title}}
                          </router-link>
                         </li>
                    </ul>
               </div>
               <!-- 底部 -->
               <div class="replies">
                   <p>作者最近回复</p>
                    <ul>
                         <li v-for="(item, index) in userinfo.recent_replies" :key="index">
                            <router-link :to="{name: 'post_content', params: {id: item.id, name: item.author.loginname}}">
                              {{item.title}}
                          </router-link>
                         </li>
                    </ul>
               </div>
       </div>
  </div>
</template>
<script>
export default {
  name: 'c-sidebar',
  data () {
    return {
      userinfo: {},
      loading: false
    }
  },
  beforeMount () {
    this.loading = true
    this.getData()
  },
  methods: {
    getData () {
      // 发送请求获取用户信息
      this.$http({
        url: `https://cnodejs.org/api/v1/user/${this.$route.params.name}`,
        method: 'get'
      })
        .then((res) => {
          if (res.data.success === true) {
            this.userinfo = res.data.data
            this.loading = false
          }
        })
    }
  },
  watch: {
    $route () {
      this.getData()
    }
  }
}
</script>
<style scoped>
.SideBar {
   float: right;
   width: 25%;
   margin: 10px 64px 10px 10px;
}
.user {
   background: white;
}
.SideBar p {
      font-size: 14px;
      padding: 12px;
}
.user p:nth-of-type(1){
    background: #F8F7F7;
}
.user div {
    padding: 10px;
}
.user img {
   width: 5rem;
   vertical-align: middle;
   margin-right: 5px;
}
.user a {
    text-decoration: none;
    color: #A8A3A3;
}
.topics,
.replies {
   background: white;
   margin-top: 15px;
}
.topics p,
.replies p
{
 background: #F8F7F7;
}
.topics ul,
.replies ul {
   padding: 10px;
}
.topics ul li,
.replies ul li {
  list-style: none;
  font-size: 13px;
  padding: 4px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 80%;
}
.topics ul li a,
.replies ul li a {
    color: #BDB9BC;
    text-decoration: none;
}

</style>
