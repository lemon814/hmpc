/**
 * 基于 axios 封装的请求模块
 */
import { getUser } from './storage'

import axios from 'axios'

// 创建一个 axios 实例，说白了就是复制了一个 axios
// 我们通过这个实例去发请求，把需要的配置配置给这个实例来处理
const ajax = axios.create({
  // 基地址：当前项目所有的接口都是以这个地址开头的
  baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础路径
  // baseURL: 'http://api-toutiao-web.itheima.net/'
})

// Add a request interceptor
// 请求拦截器
// 所有请求发出去之前会执行的函数，都会处理的逻辑。
ajax.interceptors.request.use(function (config) {
  const userInfo = getUser()
  // Do something before request is sent
  // 在请求发出去之前做一些事
  console.log('ajax.interceptors.request', Date.now(), config)
  // 本次请求采用的配置
  // 补充一个headers参数Authorization
  if (userInfo && userInfo.token) {
    // 在这里给请求加上header，设置token
    config.headers.Authorization = `Bearer ${userInfo.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 导出请求方法
export default ajax
