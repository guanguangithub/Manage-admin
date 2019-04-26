/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/aclassManagement',
  component: Layout,
  redirect: 'noredirect',
  name: 'Administration',
  meta: {
    title: 'aclassManagement',
    icon: 'chart',
    view_id: ['main-grade', 'main-addUser', 'main-room']
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/aclassManagement/classManagement'),
      name: 'classManagement',
      meta: { title: 'classManagement', noCache: true, view_id: 'main-grade' }
    },
    {
      path: 'type',
      component: () => import('@/views/aclassManagement/teachingManagement'),
      name: 'teachingManagement',
      meta: { title: 'teachingManagement', noCache: true, view_id: 'main-addUser' }
    },
    {
      path: 'view',
      component: () => import('@/views/aclassManagement/studentManagement'),
      name: 'studentManagement',
      meta: { title: 'studentManagement', noCache: true, view_id: 'main-room' }
    }
  ]
}

export default examsRouter
