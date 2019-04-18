import request from '@/utils/request'
// 这个文件里是 试题管理的所有api接口
// 获取所有考试类型
export function getexamtype(data) {
  return request({
    url: '/exam/examType',
    method: 'get',
    data
  })
}
// 获取所有课程类型/exam/subject
export function getexamsubject(data) {
  return request({
    url: '/exam/subject',
    method: 'get',
    data
  })
}
// 获取所有题目类型/exam/getQuestionsType //获取所有的试题类型/exam/getQuestionsType
export function getquestionstype(data) {
  return request({
    url: '/exam/getQuestionsType',
    method: 'get',
    data
  })
}
// 添加试题  /exam/questions
export function addquestionstype(data) {
  return request({
    url: 'exam/questions',
    method: 'post',
    data
  })
}
// 添加试题类型 /exam/insertQuestionsType
export function insertQuestionsType(params) {
  return request({
    url: 'exam/insertQuestionsType',
    method: 'get',
    params
  })
}

