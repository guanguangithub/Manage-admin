// 引入路由实列
import router from './router'
// 引入VUX
import store from './store'
// 引入ele组件
import { Message } from 'element-ui'

// 页面加载进度条
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie

// 配置进度条是否需要Spinner
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      // const hasRoles = store.getters.roles && store.getters.roles.length > 0
      const userInfo = store.getters.userInfo
      // 判断是否获取用户信息,如果有就不在获取,如果没有就第一次获取
      if (userInfo.user_name) {
        next()
      } else {
        try {
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          // 如果没有用户信息就去获取用户信息
          const userInfo = await store.dispatch('user/getInfo')
          console.log(userInfo)
          // 通过身份获取权限
          await store.dispatch('permission/generateRoutes', [])
          // 通过权限生成路由

          next({ ...to, replace: true })
          // get user info

          // generate accessible routes map based on roles
          // const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // // dynamically add accessible routes
          // router.addRoutes(accessRoutes)

          // // hack method to ensure that addRoutes is complete
          // // set the replace: true, so the navigation will not leave a history record
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    // 判断要去的页面是否在白名单内，有的话就不从定向到登录页面，没有就重定向登录页面
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
