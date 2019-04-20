import { userdelete, identitydelete, apipermissions, InterfaceRelationship, Viewinterface, Identityview } from '@/api/usermanage'

const state = {
  userarr: null,
  identityarr: null,
  apiperArr: null,
  InterArr: null,
  ViewinterArr: null,
  IdentityviewArr: null
}

// const mutations = {
//   getuser: (state, useArr) => {
//     state.userarr = useArr
//   },
//   getidentity:(state,ideArr) =>{
//     state.identityarr = ideArr
//   },
//   getapiper:(state,apiperArr) =>{
//     state.apiperArr = apiperArr
//   },
//   getInter:(state,InterArr) =>{
//     state.InterArr = InterArr
//   },
//   getViewinter:(state,Viewinterdata) =>{
//     state.ViewinterArr = Viewinterdata
//   },
//   getIdentityview:(state,Identityviewdata) =>{
//     state.IdentityviewArr = Identityviewdata
//   }
// }

const actions = {
  async userdelete(context) {
    const res = await userdelete()
    return res
    // return context.commit('getuser', res)
  },
  async identitydelete(context) {
    const res = await identitydelete()
    return res
    // return context.commit('getidentity',res)
  },
  async apipermissions(context) {
    const res = await apipermissions()
    return res
    // return context.commit('getapiper',res)
  },
  async InterfaceRelationship(context) {
    const res = await InterfaceRelationship()
    return res
    // return context.commit('getInter',res)
  },
  async Viewinterface(context) {
    const res = await Viewinterface()
    return res
    // return context.commit('getViewinter',res)
  },
  async Identityview(context) {
    const res = await Identityview()
    return res
    // return context.commit('getIdentityview',res)
  }
}

export default {
  namespaced: true,
  state,
  actions
}
