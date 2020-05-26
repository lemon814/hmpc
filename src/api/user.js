/**
 * 封装用户相关操作
 *
 * es6按需导入导出
 */
// ajax名字是可以改的。它的格式与 axios()的格式是一样的
import ajax from '../utils/request'
//  定义一个函数，并导出
//  传入手机号验证码进行登陆操作
export const userLogin = (mobile, code) => {
  // 这个函数的返回结果是一个promise类型的数据
  // ajax是request.js中导出的axios的实例
  // 它的执行结果就是一个promise对象
  return ajax({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    data: {
      mobile: mobile,
      code: code
    }
  })
}

/**
 * 获取用户的身份信息。
 * 这个接口是需要token信息才能访问的
 */
export const userGetProfile = () => {
  // 请求接口
  return ajax({
    method: 'GET',
    url: '/mp/v1_0/user/profile'
    // 设置改到了request.js中的请求拦截器
    // 不再需要写token参数，会在请求拦截器自动添加
  })
}
