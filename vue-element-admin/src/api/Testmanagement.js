import request from '@/utils/request'

// 班级列表
export function Testdelete() {
  return request({
    url: '/manger/grade',
    method: 'get'
  })
}

export function Batchdetails() {
  return request({
    url: '/exam/student',
    method: 'get'
  })
}
