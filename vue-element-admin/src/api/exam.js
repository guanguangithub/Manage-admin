import request from '@/utils/request'

export function fatchExamList() {
  return request({
    url: '/exam/exam',
    method: 'get'
  })
}
export function addExam(data) {
  return request({
    url: '/exam/exam',
    method: 'post',
    data
  })
}
