import request from '@/utils/request'

// 展示用户
export function userdelete() {
  return request({
    url: '/user/user',
    method: 'get'
  })
}

// 身份
export function identitydelete() {
  return request({
    url: '/user/identity',
    method: 'get'
  })
}

// API权限
export function apipermissions() {
  return request({
    url: '/user/api_authority',
    method: 'get'
  })
}

// 身份和API接口关系 /user/identity_api_authority_relation
export function InterfaceRelationship() {
  return request({
    url: '/user/identity_api_authority_relation',
    method: 'get'
  })
}

// 视图接口权限 /user/view_authority
export function Viewinterface() {
  return request({
    url: '/user/view_authority',
    method: 'get'
  })
}

// 身份视图权限关系 /user/identity_view_authority_relation Identityview
export function Identityview() {
  return request({
    url: '/user/identity_view_authority_relation',
    method: 'get'
  })
}
