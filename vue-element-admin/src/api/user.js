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
export function GetviewAuthority() {
  return request({
    url: '/user/view_authority',
    method: 'get'
  })
}

export function avatarUser(data) {
  return request({
    url: '/user/user',
    method: 'put',
    data
  })
}

