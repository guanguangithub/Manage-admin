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
export function updateDetailPaper(id, data) {
  return request({
    url: '/exam/exam/' + id,
    method: 'put',
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
export function deletePaper(params) {
  return request({
    url: '/exam/exam/' + params,
    method: 'DELETE'
  })
}
export function getallPapers() {
  return request({
    url: '/exam/questions/new',
    method: 'get'
  })
}
export function getConditionPaper(params) {
  return request({
    url: '/exam/questions/condition',
    method: 'get',
    params
  })
}
