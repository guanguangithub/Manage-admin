import { fatchExamList, addExam } from '@/api/exam.js'
import moment from 'moment'
console.log(addExam)
const state = {
  table: [],
  examOptions: [{
    value: '选项1',
    label: ' 周考1'
  }, {
    value: '选项2',
    label: '周考2'
  }, {
    value: '选项3',
    label: '周考3'
  }, {
    value: '选项4',
    label: '月考'
  }],
  lessonOptions: [{
    value: '选项1',
    label: ' javascript上'
  }, {
    value: '选项2',
    label: 'javascript下'
  }, {
    value: '选项3',
    label: 'jquery'
  }, {
    value: '选项4',
    label: 'h5'
  },
  {
    value: '选项5',
    label: 'nodejs'
  }, {
    value: '选项6',
    label: 'vue'
  }, {
    value: '选项7',
    label: 'react'
  }, {
    value: '选项8',
    label: '小程序'
  }, {
    value: '选项9',
    label: '实训1'
  }, {
    value: '选项10',
    label: '实训2'
  }]
}
const mutations = {
  GETTABLEDATE: (state, payload) => {
    state.table = payload.map(item => {
      item.start_time = moment(item.start_time * 1).format('YYYY-MM-DD HH:mm:ss')
      item.end_time = moment(item.end_time * 1).format('YYYY-MM-DD HH:mm:ss')
      return item
    })
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
    console.log(payload)
    const res = await addExam(payload)
    // console.log(res)
    return res
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
