/** When your routing table is too long, you can split it into small modules**/

/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const testRouter = {
  path: '/quetions',
  component: Layout,
  redirect: 'noredirect',
  name: 'Charts',
  meta: {
    title: 'quetions',
    icon: 'chart'
  },
  children: [
    {
      path: 'adds',
      component: () => import('@/views/qustions/addQuetions'),
      name: 'KeyboardChart',
      meta: { title: 'addQuetions', noCache: true }
    },
    {
      path: 'types',
      component: () => import('@/views/qustions/typesQuetions'),
      name: 'Types',
      meta: { title: 'typesQuetions', noCache: true }
    },
    {
      path: 'looks',
      component: () => import('@/views/qustions/looksQuetions'),
      name: 'Looks',
      meta: { title: 'looksQuetions', noCache: true }
    }

  ]
}

const detailRouter = {
  path: '/permission',
  component: Layout,
  redirect: '/permission/detail', // 重定向地址，在面包屑中点击会重定向去的地址
  hidden: true, // 不在侧边栏线上
  alwaysShow: true, // 一直显示根路由
  meta: { roles: ['admin', 'editor'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
  children: [{
    path: 'detail',
    component: () => import('@/views/qustions/questions'),
    name: 'permission',
    meta: {
      title: 'permission',
      icon: 'lock', // 图标
      role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
      noCache: true // 不会被 <keep-alive> 缓存
    }
  }]
}

export { testRouter, detailRouter }
