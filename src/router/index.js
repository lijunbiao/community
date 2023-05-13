import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '@/components/PostList.vue'
import UserInfo from '@/components/UserInfo.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
