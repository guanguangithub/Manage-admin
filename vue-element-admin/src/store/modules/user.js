import { login, logout, getInfo, GetviewAuthority, avatarUser } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  userInfo: {},
  viewAutohostiry: [] // 用户路由权限
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  GET_USERINFOR: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_VIEWAUTOHOSTIRY: (state, viewAutohority) => {
    state.viewAutohostiry = viewAutohority
  }
}

const actions = {
  // user login
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    const res = await login({ user_name: username, user_pwd: password })
    // console.log('settoken',setToken())
    setToken(res.token)
    // console.log('login....', res)
    return res
  },

  // get user info
  async getInfo({ commit }) {
    const data = await getInfo()
    // 把用户信息给了mutations 里面  交给state中userInfo：{}
    commit('GET_USERINFOR', data.data)
    return data.data
  },

  async getviewAuthority({ commit }, payload) {
    const userAutohostiry = await GetviewAuthority(payload)
    // console.log('userAutohostiry...', userAutohostiry)
    if (userAutohostiry.code === 1) {
      commit('SET_VIEWAUTOHOSTIRY', userAutohostiry.data)
      return userAutohostiry.data
    }
    return []
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // Dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      resolve()
    })
  },

  async avatarUser(context, payload) {
    const res = await avatarUser(payload)
    return res
  }
}
// console.log(actions) //分发出去的 方法
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
