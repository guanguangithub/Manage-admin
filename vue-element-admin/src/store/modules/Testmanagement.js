import { Testdelete, Batchdetails } from '@/api/Testmanagement'

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
  }
}

export default {
  namespaced: true,
  actions
}
