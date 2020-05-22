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
