<template>
  <div class="UserInfo">
        <div class="info">
              <!-- 上部分 -->
              <div class="user">
                 <img :src="userinfo.avatar_url" :title="userinfo.loginname">
                 <span>{{userinfo.loginname}}</span>
                 <p>{{userinfo.score}} 积分</p>
                 <p>注册时间：{{userinfo.create_at | formateDate}}</p>
              </div>
              <!-- 中部分 -->
              <div class="reply">
                    <p>回复的主题</p>
                    <ul>
                        <li v-for="(item, index) in userinfo.recent_replies" :key="index">
                            <router-link :to="{name: 'post_content', params: {id: item.id, name: item.author.loginname}}">
                              {{item.title}}
                            </router-link>
                        </li>
                    </ul>
              </div>
              <!-- 下部分 -->
              <div class="establish">
                <p>创建的主题</p>
                    <ul>
                   <li v-for="(item, index) in userinfo.recent_topics" :key="index">
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
  name: 'c-userinfo',
  data () {
    return {
      userinfo: {} // 用户信息
    }
  },
  beforeMount () {
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
          if (res.data.success === true) { // 获取信息成功
            this.userinfo = res.data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
.info {
    background: white;
    width: 75%;
    margin: 10px auto;
}
.user {
  padding: 0.8rem;
}
.user img {
   width: 5rem;
}
.user span {
  margin-left: 3px;
}
.reply, .establish {
   font-size: 12px;
   border-top: 10px solid #dddddd;
}
.reply p,
.establish p{
  padding: 0.5rem;
  background: #F8F7F7;
}
.reply li,
.establish li{
    list-style: none;
    padding: 0.5rem;
}
.reply li a,
.establish li a{
    text-decoration: none;
    color: #094E99;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 70%;
}

</style>
