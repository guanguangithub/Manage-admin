import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getUserInfo() {
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}
export function updateUserInfo(data) {
  // console.log('data...', data)
  return request({
    url: '/user/user',
    method: 'put',
    data
  })
}
export function GetviewAuthority(params) {
  // console.log('user_idn', params)
  return request({
    url: '/user/new',
    method: 'get',
    params
  })
}
export function userupdata(data) {
  return request({
    url: '/user/user',
    method: 'put',
    data
  })
}

export function avatarUser(data) {
  return request({
    url: '/user/user',
    method: 'put',
    data
  })
}

