import request from '@/utils/request'

// 获取 所有教室
export const getAllRoom = params => {
  return request.get('/manger/room', params)
}
// 添加教室
export const addRoom = params => {
  return request.post('/manger/room', params)
}
// 删除教室
export const DeleteRoom = params => {
  return request.delete('/manger/room/delete', { data: params })
}
