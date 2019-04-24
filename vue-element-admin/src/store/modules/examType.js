import { getexamtype, getexamsubject, getquestionstype, addquestionstype, insertQuestionsType, checkitems, updateQuestionsType, updatedata, delQuestionsType, condition } from '@/api/examType' // 是获取数据的方法名
const state = {
  examlist: [],
  subjectlist: [],
  getquestionslist: [], // yuanben
  checkitemlist: []// 查看所有试题
}
const mutations = {
  getlist: (state, getdata) => {
    // console.log(state) //state就是上面state的
    state.examlist = getdata
  },
  getsubjectlist: (state, getdata) => {
    // console.log(state) //state就是上面state的
    state.subjectlist = getdata
  },
  gettype: (state, getdata) => {
    // console.log(state) //state就是上面state的
    state.getquestionslist = getdata
  },
  // 添加试题
  // addquestion: (state, payload) => {
  //   state.code = payload
  // }
  // checlitemlist查看试题
  checkitemlist: (state, getdata) => {
    state.checkitemlist = getdata
  },
  changeitemlist: (state, payload) => {
    state.checkitemlist = state.checkitemlist.filter((item, ind) => {
      return item.subject_id === payload.subject && item.questions_type_id === payload.questions && item.exam_id === payload.exam
    })
  }

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

  async getquestionstype(context) { // 获取考试类型
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
  },

  async checkitems(context) {
    const res = await checkitems()
    return context.commit('checkitemlist', res.data)
  },
  async updateQuestionsType(context, payload) { // 更新试题   payload是传过去的参数
    const res = await updateQuestionsType(payload)
    return res
  },
  async updatedata(context, payload) { // 用户更新头像
    const res = await updatedata(payload)
    return res
  },
  async condition(context) { // 按条件查询试题
    const res = await condition()
    console.log(res)
    return res
  },

  async delQuestionsType(context, payload) { // 删除试题类型
    const res = await delQuestionsType(payload)
    console.log(payload)
    return res
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
