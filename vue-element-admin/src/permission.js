import router from './router' // 引入路由实例
import store from './store'// 引入vuex
import { Message } from 'element-ui'// 引入ele
import NProgress from 'nprogress' // 进度条progress bar
import 'nprogress/nprogress.css' // 进度条的样式 progress bar style
import { getToken } from '@/utils/auth' // 引入登录态 get token from cookie

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // 白名单 如果已经是当前这两个路由 就不再重定向了 避免重复跳转
// *************全局导航守卫
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
      // 判断是否获取过用户信息 如果获取过就往下走  没有就第一次获取
      if (userInfo.user_name) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          // 如果没有用户信息就去获取用户信息 //获取到的用户信息
          const userInfo = await store.dispatch('user/getInfo')
          // console.log('permission第35行', userInfo)
          // 2.通过身份获取权限
          const viewAutohostiry = await store.dispatch('user/getviewAuthority', { user_id: userInfo.user_id })
          // 通过权限生成路由

          const routess = await store.dispatch('permission/generateRoutes', viewAutohostiry)

          router.addRoutes(routess)
          next({ ...to, replace: true })
          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          // next({ ...to, replace: true })
        } catch (error) {
          console.log(error)
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
    if (whiteList.indexOf(to.path) !== -1) { // 如果已经是当前这两个路由 就不再重定向了 避免重复跳转
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`) // 登陆完成回到要去的页面
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
