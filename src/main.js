import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

// 时间格式化
Vue.filter('formateDate', (value) => {
  if (!value) return ''
  const preTime = new Date(value)
  const now = new Date().getTime() - preTime.getTime()
  if (now < 0) {
    return ''
  } else if (now / 1000 < 30) { // 30秒内
    return '刚刚'
  } else if (now / 1000 < 60) { // 60秒内
    return parseInt(now / 1000) + '秒前'
  } else if (now / 1000 / 60 < 60) { // 60分钟内
    return parseInt(now / 1000 / 60) + '分钟前'
  } else if (now / 1000 / 60 / 60 < 24) { // 24小时内
    return parseInt(now / 1000 / 60 / 60) + '小时前'
  } else if (now / 1000 / 60 / 60 / 24 < 30) { // 30天内
    return parseInt(now / 1000 / 60 / 60 / 24) + '天前'
  } else if (now / 1000 / 60 / 60 / 24 / 30 < 12) { // 12月内
    return parseInt(now / 1000 / 60 / 60 / 24 / 30) + '月前'
  } else {
    return parseInt(now / 1000 / 60 / 60 / 24 / 30 / 12) + '年前'
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
