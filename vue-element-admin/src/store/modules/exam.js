import { fatchExamList, addExam, getDetailPaper, updateDetailPaper, getallPapers } from '@/api/exam.js'
import { updateUserInfo } from '@/api/user.js'
import moment from 'moment'
const state = {
  table: [],
  newPaper: {},
  detailPaper: [],
  allPapers: []
}
const mutations = {
  GETTABLEDATE: (state, payload) => {
    // console.log(payload)
    state.table = payload.map(item => {
      item.start_time = moment(item.start_time * 1).format('YYYY-MM-DD HH:mm:ss')
      item.end_time = moment(item.end_time * 1).format('YYYY-MM-DD HH:mm:ss')
      return item
    })
  },
  GETCONDITIONPAPER: (state, payload) => {
    // state.table = state.table.filter(item => item.exam_id ==payload.exam_id && item.subject_id = payload.subject_id)
    state.table = state.table.filter(item => {
      if (item.exam_id === payload.exam_id && item.subject_id === payload.subject_id) {
        return item
      }
    })
  },
  SETQUESTION: (state, payload) => {
    state.newPaper = payload
  },
  SETDETAILPAPER: (state, payload) => {
    state.detailPaper = payload
  },
  DELETEPAPER: (state, payload) => {
    state.newPaper.questions.splice(payload, 1)
  },
  ALLPAPERS: (state, payload) => {
    state.allPapers = payload
  },
  ADDNEWPAPER: (state, payload) => {
    console.log(state.newPaper.questions, payload)
    state.newPaper.questions.unshift(payload)
    // return payload.question_
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
    console.log(res.data)
    commit('SETQUESTION', res.data)
    return res
  },
  async getDetailPaper(context, examId) {
    const res = await getDetailPaper(examId)
    context.commit('SETDETAILPAPER', res.data)
    return res.data
  },
  async updateDetailPaper(context, payload) {
    // console.log(payload)
    // console.log(updateDetailPaper)
    const res = await updateDetailPaper(payload.id, { question_ids: payload.question_ids })
    return res
  },
  async updateUserInfo(context, payload) {
    const res = await updateUserInfo(payload)
    return res
  },
  async getallPapers(context) {
    const res = await getallPapers()
    context.commit('ALLPAPERS', res.data)
    return res
  }
  //
  // async getConditionPaper({ commit }, payload) {
  //   const res = await getConditionPaper(payload)
  //   console.log(res)
  //   if (res.code === 1) {
  //     commit('GETCONDITIONPAPER', res.data)
  //   }
  //   return res
  // }
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
