import request from '@/utils/request'

export function userdelete(data) {
  return request({
    url: '/user/user',
    method: 'get',
    data
  })
}
