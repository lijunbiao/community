<template>
  <div class="Article">
        <div v-if="loading">
              Loading...
        </div>
       <div v-else class="art_content">
              <!-- 上部分 -->
             <div class="top">
                  <h1>{{content.title}}</h1>
                  <ul>
                       <li>•分类：问答</li>
                       <li>•{{content.visit_count}}次访问</li>
                       <li>•发布于{{content.last_reply_at | formateDate}}</li>
                       <li>•作者：{{content.author.loginname}}</li>
                  </ul>
                  <div v-html="content.content" id="content">内容</div>
             </div>
              <!-- 下部分 -->
             <div v-for="(item, index) in content.replies" :key="index" class="bottom">
                  <!-- 用户信息 -->
                  <div class="user">
                        <router-link to="/">
                            <img :src="item.author.avatar_url" :title="item.author.loginname">
                        </router-link>
                        <router-link to="/">
                              {{item.author.loginname}}
                        </router-link>
                        <span>{{index + 1}}楼</span>
                  </div>
                  <!-- 点赞数量 -->
                  <div class="count" v-if="item.ups.length > 0">
                        <span>❤</span>{{item.ups.length}}
                  </div>
                  <!-- 评论区域 -->
                  <p  v-html ="item.content">
                  </p>
             </div>
       </div>
  </div>
</template>
<script>
export default {
  name: 'c-article',
  data () {
    return {
      content: {},
      loading: false
    }
  },
  beforeMount () {
    this.loading = true
    this.getData()
  },
  methods: {
    // 发送请求数据获取文章内容
    getData () {
      this.$http({
        url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,
        method: 'get',
        params: {
          mdrender: true
        }
      })
        .then((res) => {
          if (res.data.success === true) {
            this.content = res.data.data
            this.loading = false
          }
        })
        .catch((error) => {
          console.log(error)
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
@import url('../assets/markdown-github.css');
.Article {
   display: inline-block;
   width: 70%;
}
.art_content {
    margin: 10px 10px 10px 50px;
}
.top {
     background: white;
     padding: 20px;
     border-bottom: 10px solid #dddddd;
}
.top h1 {
  font-size: 19px;
  margin-bottom: 20px;
}
.top ul {
   margin-bottom: 30px;
}
.top ul li {
  list-style: none;
  display: inline-block;
  font-size: 13px;
  margin-right: 10px;
  color: #C0B2AE;
}
.bottom {
   background: white;
   padding: 15px;
   border-bottom: 1px solid #dddddd;
}
.user {
   display: inline-block;
}
.user img {
    width: 1.8rem;
}
.user a {
   text-decoration: none;
    color: #000000;
    font-weight: 600;
}
.user span {
    font-size: 13px;
    color: #806767;
}
.count {
    color: red;
    float: right;
}
.comment {
    margin-left: 50px;
    margin-top: 10px;
}
.bottom p {
   overflow: hidden;
}
.bottom p img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
