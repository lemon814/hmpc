/**
 * 基于 axios 封装的请求模块
 */
import axios from 'axios'

// 创建一个 axios 实例，说白了就是复制了一个 axios
// 我们通过这个实例去发请求，把需要的配置配置给这个实例来处理
const ajax = axios.create({
  // 基地址：当前项目所有的接口都是以这个地址开头的
  baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础路径
  // baseURL: 'http://api-toutiao-web.itheima.net/'
})

// 导出请求方法
export default ajax
