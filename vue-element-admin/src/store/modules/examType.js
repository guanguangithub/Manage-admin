import { getexamtype, getexamsubject, getquestionstype, addquestionstype, insertQuestionsType } from '@/api/examType' // 是获取数据的方法名
const state = {
  examlist: [],
  subjectlist: [],
  getquestionslist: []
}
const mutations = {
  getlist: (state, payload) => {
    // console.log(state) //state就是上面state的
    state.examlist = payload
  },
  getsubjectlist: (state, payload) => {
    // console.log(state) //state就是上面state的
    state.subjectlist = payload
  },
  gettype: (state, payload) => {
    // console.log(state) //state就是上面state的
    state.getquestionslist = payload
  }
  // 添加试题
  // addquestion: (state, payload) => {
  //   state.code = payload
  // }

}
const actions = {
  // aync 后面的getexamtype是自由命名的 await是请求数据那边的方法名 context里面有commit dispatch
  async getexamtype(context) {
    const res = await getexamtype()
    return context.commit('getlist', res)
  },
  async getexamsubject(context) {
    const res = await getexamsubject()
    return context.commit('getsubjectlist', res)
  },

  async getquestionstype(context) {
    const res = await getquestionstype()
    return context.commit('gettype', res)
  },

  async addquestionstype(context, payload) { // 添加试题 要传参
    const res = await addquestionstype(payload)
    return res
  },
  async insertQuestionsType(context, payload) { // 添加类型 要传参
    const res = await insertQuestionsType(payload)
    return res
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
