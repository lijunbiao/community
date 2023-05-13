import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '@/components/PostList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      main: PostList
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
