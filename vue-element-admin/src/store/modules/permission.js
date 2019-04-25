import { asyncRoutes, constantRoutes } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(view_ids, route) {
  // console.log(route,'888')
  if (route.meta && route.meta.view_id) {
    // console.log(view_ids.some(item => item === route.meta.view_id), 'is')
    return view_ids.some(item => route.meta.view_id.includes(item))
  } else {
    console.log(111)
    return true
  }
}
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, view_ids) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(view_ids, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, view_ids)
      }
      res.push(tmp)
    }
  })
  // console.log('过滤后的路由', res)
  return res
}
const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  async generateRoutes({ commit }, view_autohority) {
    // 获取用户所有的view_id
    // console.log('view_autohority....', view_autohority)
    // console.log(view_autohority)
    const view_ids = view_autohority.map(item => item.view_id)
    // console.log('view_ids', view_ids)
    // 在路由里面过滤一遍 得到用户能访问的路由
    // console.log(view_ids)
    const accessedRoutes = filterAsyncRoutes(asyncRoutes, view_ids)
    // 更新路由
    console.log('accessedRoutes...', accessedRoutes)
    commit('SET_ROUTES', accessedRoutes)
    return accessedRoutes
    // return new Promise(resolve => {
    //   let accessedRoutes
    //   if (roles.includes('admin')) {
    //     accessedRoutes = asyncRoutes
    //   } else {
    //     accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    //   }
    //   commit('SET_ROUTES', accessedRoutes)
    //   resolve(accessedRoutes)
    // })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
