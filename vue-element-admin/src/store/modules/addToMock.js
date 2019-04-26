import { addToMockUser, addToMockIdentity, addToauthorityView, addToAuthorityApi } from '@/api/addToMock'

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
  },
  async addToauthorityView(context, praram) {
    const res = await addToauthorityView(praram)
    if (res === undefined) {
      return ''
    } else if (res.code === 1) {
      return res.msg
    }
  },
  async addToAuthorityApi(context, praram) {
    const res = await addToAuthorityApi(praram)
    if (res === undefined) {
      return ''
    } else if (res.code === 1) {
      return res.msg
    }
  }
}

export default {
  namespaced: true,
  actions
}
