/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const usermanageRouter = {
  path: '/usermanage',
  component: Layout,
  redirect: 'noredirect',
  name: 'UserManagement',
  meta: {
    title: 'UserManagement',
    icon: 'chart'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/usermanage/add'),
      name: 'addUserManage',
      meta: { title: 'AddUser', noCache: true }
    },
    {
      path: 'display',
      component: () => import('@/views/usermanage/display'),
      name: 'displayUserManage',
      meta: { title: 'UserDisplay', noCache: true }
    }
  ]
}

export default usermanageRouter
