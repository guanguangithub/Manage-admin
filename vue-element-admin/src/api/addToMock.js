import request from '@/utils/request'

// 添加用户
export function addToMockUser(data) {
  return request({
    url: '/user',
    method: 'post',
    data
  })
}

// 添加身份
export function addToMockIdentity(params) {
  console.log(params)
  return request({
    url: '/user/identity/edit?identity_text=' + params.identity_text,
    method: 'get'
  })
}
