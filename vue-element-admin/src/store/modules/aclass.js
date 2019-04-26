import {
  // 获取所有教室
  getAllRoom,
  // 添加教室
  addRoom,
  // 删除教室
  DeleteRoom
} from '@/api/aclass'

const actions = {
  // 获取所有教室
  getAllRoom({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const Data = await getAllRoom(payload)
      resolve(Data)
    })
  },
  // 添加教室
  addRoom({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const Data = await addRoom(payload)
      resolve(Data)
    })
  },
  // 删除教室
  DeleteRoom({ state }, payload) {
    return new Promise(async(resolve, reject) => {
      const deleteData = await DeleteRoom(payload)
      resolve(deleteData)
    })
  }
}

export default {
  namespaced: true,
  actions
}

