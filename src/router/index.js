// 设置路由
// 这个文件是由脚手架工具自动生成的

// 功能：设置路由。决定哪个地址显示哪个组件

import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入登陆组件
// 导入了组件并不是说它立即会显示出来，而是会根据当前地址和路由表来决定是否显示
import Login from '../views/login/index.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
