import { addToMockUser, addToMockIdentity, addToauthorityView, addToAuthorityApi, SetIdentityApi, SetIdentityView, Updateuser } from '@/api/addToMock'

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
  },
  async SetIdentityApi(context, payload) {
    const res = await SetIdentityApi(payload)
    console.log('32', res)
    if (res === undefined) {
      return ''
    } else {
      return res
    }
  },
  async SetIdentityView(context, payload) {
    const res = await SetIdentityView(payload)
    console.log('41', res)
    if (res === undefined) {
      return ''
    } else {
      return res.msg
    }
  },
  async Updateuser(context, payload) {
    const res = await Updateuser(payload)
    console.log('50', res)
    return res
  }
}

export default {
  namespaced: true,
  actions
}
