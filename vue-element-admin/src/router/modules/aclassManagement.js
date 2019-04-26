/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/aclassManagement',
  component: Layout,
  redirect: 'noredirect',
  name: 'Administration',
  meta: {
    title: 'aclassManagement',
    icon: 'classmanagament',
    view_id: ['main-grade', 'main-room', 'main-student']
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
      meta: { title: 'teachingManagement', noCache: true, view_id: 'main-room' }
    },
    {
      path: 'view',
      component: () => import('@/views/aclassManagement/studentManagement'),
      name: 'studentManagement',
      meta: { title: 'studentManagement', noCache: true, view_id: 'main-student' }
    }
  ]
}

export default examsRouter
