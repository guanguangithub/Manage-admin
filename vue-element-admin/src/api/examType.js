import request from '@/utils/request'
// api里是所有的请求
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

// 查看获取所有试题/exam/questions/new
export function checkitems() {
  return request({
    url: '/exam/questions/new',
    method: 'get'
  })
}
// /exam/questions/condition按条件获取试题
export function condition() {
  return request({
    url: 'exam/questions/condition',
    method: 'get'
  })
}

// exam/questions/update //更新试题
export function updateQuestionsType(data) {
  console.log(data)
  return request({
    url: 'exam/questions/update',
    method: 'put',
    data
  })
}
//
// export function updatedata(data) { // 更新用户头像
//   console.log(data)
//   return request({
//     url: 'user/user',
//     method: 'put',
//     data
//   })
// }
// /exam/delQuestionsType
export function delQuestionsType(data) { // 删除考试类型
  console.log(data)
  return request({
    url: 'exam/delQuestionsType',
    method: 'post',
    data
  })
}
