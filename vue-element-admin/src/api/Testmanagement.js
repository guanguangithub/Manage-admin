import request from '@/utils/request'

// 班级列表
export function Testdelete() {
  return request({
    url: '/manger/grade',
    method: 'get'
  })
}

export function Batchdetails(params) {
  return request({
    url: '/exam/student?grade_id=' + params,
    method: 'get'
  })
}

export function studentDeleta(params) {
  return request({
    url: '/exam/student/' + params,
    method: 'get'
  })
}

