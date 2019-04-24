import Cookies from 'js-cookie'
// 登录态
const TokenKey = 'authorization'

export function getToken() { // 获取登录态的方法
  return Cookies.get(TokenKey)
}
export function setToken(token) { // 设置登录态的方法
  return Cookies.set(TokenKey, token, { expires: 7 })
}
export function removeToken() { // 删除登录态的方法
  return Cookies.remove(TokenKey)
}
