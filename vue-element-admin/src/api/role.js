import request from '@/utils/request'

// 获取教室接口
export function getRoom() {
  return request({
    url: '/manger/room',
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
export function getRoles() {
  return request({
    url: '/manger/grade',
    method: 'get'
  })
}
// 添加教室接口
// export function addRoom(room_text) {
//   return request({
//     url: '/manger/room',
//     method: 'post',
//     data: { room_text }
//   })
// }
export function addRoom(data) {
  return request({
    url: '/manger/room',
    method: 'post',
    data
  })
}
export function updateRole(id, data) {
  return request({
    url: `/role/${id}`,
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
