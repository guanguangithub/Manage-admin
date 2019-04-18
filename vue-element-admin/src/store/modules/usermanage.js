import { userdelete } from '@/api/usermanage'

const state = {
  userarr: []
}

const mutations = {
  getuser: (state, useArr) => {
    state.userarr.push(useArr)
  }
}

const actions = {
  async userdelete(context) {
    const res = await userdelete()
    return context.commit('getuser', res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
