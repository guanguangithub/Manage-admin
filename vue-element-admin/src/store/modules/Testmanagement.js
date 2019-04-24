import { Testdelete, Batchdetails, studentDeleta } from '@/api/Testmanagement'

const state = {
  studentArr: []
}

const mutations = {
  STUDENTDELETA: (state, studentDeletaArr) => {
    state.studentArr = studentDeletaArr
  }
}

const actions = {
  async Testdelete() {
    const res = await Testdelete()
    if (res.code === 1) {
      return res.data
    }
  },
  async Batchdetails() {
    const res = await Batchdetails()
    if (res.code === 1) {
      return res.exam
    }
  },
  async studentDeleta(context, examId) {
    const res = await studentDeleta(examId)
    console.log(res)
    context.commit('STUDENTDELETA', res.data)
    return res.data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
