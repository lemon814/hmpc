/**
 * 专门用来处理用户信息本地持久化---保存在localStorage
*/

// 定义一些工具方法，实现数据保存，获取，删除，修改

const KEY = 'hm-tt-pc-userinfo'

/**
* 保存用户信息到localStorage
* @param {*} user
*/
const setUser = (user) => {
  localStorage.setItem(KEY, JSON.stringify(user))
}

/**
 * 取出用户信息
*/
const getUser = () => {
  return JSON.parse(localStorage.getItem(KEY))
}

export { setUser, getUser }
