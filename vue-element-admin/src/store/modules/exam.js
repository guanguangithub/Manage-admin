import { fatchExamList, addExam, getDetailPaper, updateDetailPaper } from '@/api/exam.js'
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
    return res.exam
  },
  async addExam({ commit }, payload) {
    const res = await addExam(payload)
    commit('SETQUESTION', res.data)
    return res
  },
  async getDetailPaper(context, examId) {
    const res = await getDetailPaper(examId)
    context.commit('SETDETAILPAPER', res.data)
    return res.data
  },
  async updateDetailPaper(context, payload) {
    console.log(payload)
    const res = await updateDetailPaper(payload.id, { question_ids: payload.question_ids })
    return res
  }
  // async deletePaper(context, examId) {
  //   const res = await deletePaper(examId)
  //   return res.data
  // },
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
