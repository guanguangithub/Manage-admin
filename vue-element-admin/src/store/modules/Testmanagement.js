import { Testdelete, Batchdetails, studentDeleta } from '@/api/Testmanagement'

const actions = {
  async Testdelete() {
    const res = await Testdelete()
    if (res.code === 1) {
      return res.data
    }
  },
  async Batchdetails(context, examId) {
    const res = await Batchdetails(examId)
    if (res) {
      return res.exam
    } else {
      return ''
    }
  },
  async studentDeleta(context, examId) {
    const res = await studentDeleta(examId)
    if (res.code === 1) {
      return res.data
    } else if (res.ENOENT) {
      return res.message
    }
  }
}

export default {
  namespaced: true,
  actions
}
