import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入登陆组件
import Login from '../views/login/index.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
