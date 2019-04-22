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
export function getDetailPaper(params) {
  return request({
    url: '/exam/exam/' + params,
    method: 'get',
    params
  })
}
export function updateDetailPaper(id, data) {
  console.log(data)
  return request({
    url: `/exam/exam/${id}`,
    method: 'put',
    data
  })
}
export function deletePaper(params) {
  return request({
    url: '/exam/exam/' + params,
    method: 'DELETE'
  })
}
