import { fatchExamList, addExam, getDetailPaper } from '@/api/exam.js'
import moment from 'moment'
const state = {
  table: [],
  newPaper: {},
  detailPaper: []
}
const mutations = {
  GETTABLEDATE: (state, payload) => {
    state.table = payload.map(item => {
      item.start_time = moment(item.start_time * 1).format('YYYY-MM-DD HH:mm:ss')
      item.end_time = moment(item.end_time * 1).format('YYYY-MM-DD HH:mm:ss')
      return item
    })
  },
  SETQUESTION: (state, payload) => {
    state.newPaper = payload
  },
  SETDETAILPAPER: (state, payload) => {
    state.detailPaper = payload
  }
}
const actions = {
  async fatchExamList({ commit }) {
    const res = await fatchExamList()
    if (res.code === 1) {
      return commit('GETTABLEDATE', res.exam)
    }
  },
  async addExam({ commit }, payload) {
    const res = await addExam(payload)
    console.log(res)
    commit('SETQUESTION', res.data)
    return res
  },
  async getDetailPaper(context, examId) {
    const res = await getDetailPaper(examId)
    context.commit('SETDETAILPAPER', res.data)
    return res.data
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
