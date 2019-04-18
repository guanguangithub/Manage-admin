import request from '@/utils/request'

export function fatchExamList(query) {
  return request({
    url: '/exam/exam',
    method: 'get',
    params: query
  })
}

