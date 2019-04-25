import request from '@/utils/request'

// 获取教室接口
export function getRoom() {
  return request({
    url: '/manger/room',
    method: 'get'
  })
}
// 获取课程名/exam/subject
export function getSubject() {
  return request({
    url: '/exam/subject',
    method: 'get'
  })
}
// 获取所有已经分班的学生的接口
export function getStudent() {
  return request({
    url: '/manger/student',
    method: 'get'
  })
}

// 获取已经分配教室的班级的接口
export function getGrade() {
  return request({
    url: '/manger/grade',
    method: 'get'
  })
}
// 添加教室接口
// export function addRoom(id, data) {
//   return request({
//     url: `/manger/room${id}`,
//     method: 'post',
//     data
//   })
// }
// export const addRoom = data => fetch('/manger/room', data, 'POST')
export function addRoom(room_text) {
  return request({
    url: '/manger/room',
    method: 'post',
    data: { room_text }
  })
}
// 更新教室
export function upStudent(id, data) {
  return request({
    url: `/manger/student/edit${id}`,
    method: 'put',
    data
  })
}
// 更新班级/manger/grade/update
export function upGrade(data) {
  return request({
    url: `/manger/grade/update`,
    method: 'put',
    data
  })
}
// 删除教室接口
export function deleteRoom(room_id) {
  return request({
    url: `/manger/room/delete`,
    method: 'delete',
    data: { room_id }
  })
}
// 删除学生/manger/student
export function deleteStudent(id) {
  return request({
    url: `/manger/student/${id}`,
    method: 'delete'
  })
}
// 删除班级
export function deleteGrade(grade_id) {
  return request({
    url: `/manger/grade/delete`,
    method: 'delete',
    data: { grade_id }
  })
}
// 添加班级
export function addGrade(data) {
  return request({
    url: `/manger/grade`,
    method: 'post',
    data
  })
}
// export const addGrade = data => fetch('/manger/grade', data, 'POST')
