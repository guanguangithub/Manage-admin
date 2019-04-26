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
  return request({
    url: '/user/identity/edit?identity_text=' + params.identity_text,
    method: 'get'
  })
}

// 添加视图权限
export function addToauthorityView(params) {
  return request({
    url: '/user/authorityView/edit?view_authority_text=' + params.view_authority_text + '&view_id=' + params.view_id,
    method: 'get'
  })
}

// 添加API权限 /user/authorityApi/edit
export function addToAuthorityApi(params) {
  console.log('30params', params)
  return request({
    url: '/user/authorityApi/edit?api_authority_text=' + params.api_authority_text + '&api_authority_url=' + params.api_authority_url + '&api_authority_method=' + params.api_authority_mehtod,
    method: 'get'
  })
}
