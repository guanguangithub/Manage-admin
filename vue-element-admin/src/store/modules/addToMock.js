import { addToMockUser, addToMockIdentity } from '@/api/addToMock'

const actions = {
  // 添加用户
  async addToMockUser(context, payload) {
    const res = await addToMockUser(payload)
    return res
  },
  // 添加身份
  async addToMockIdentity(context, item_text) {
    const res = await addToMockIdentity(item_text)
    return res
  }
}

export default {
  namespaced: true,
  actions
}
