/**
 * 封装用户相关操作
 *
 * es6按需导入导出
 */

// ajax名字是可以改的。它的格式与 axios()的格式是一样的
// ajax名字是可以改的。它的格式与 axios()的格式是一样的
import ajax from '../utils/request'
//  定义一个函数，并导出
//  传入手机号验证码进行登陆操作
export const userLogin = (mobile, code) => {
  return ajax({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    data: {
      mobile: mobile,
      code: code
    }
  })
}

/* 获取用户的身份信息 */
export const userGetProfile = () => {
  // 请求接口
  return ajax({
    method: 'GET',
    url: '/mp/v1_0/user/profile',
    // 参数写在headers中是由于 接口的要求
    // 参数名，个数，类型，在哪里传过去......都是由后端写接口的人决定！
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjE2ODE4MjYsInVzZXJfaWQiOjEsInJlZnJlc2giOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZX0.uMD1HEac8N6ydeXOzaTb8aHtMVGAgwemObcFJ8CXElg'
    }
  })
}
