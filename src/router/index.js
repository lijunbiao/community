import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '@/components/PostList.vue'
import UserInfo from '@/components/UserInfo.vue'
import Article from '@/components/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      main: PostList
    }
  },
  {
    path: '/user/:name',
    name: 'user_info',
    components: {
      main: UserInfo
    }
  },
  {
    path: '/topic/:id&author=:name',
    name: 'post_content',
    components: {
      main: Article
    }

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
