/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/aclassManagement',
  component: Layout,
  redirect: 'noredirect',
  name: 'Administration',
  meta: {
    title: 'aclassManagement',
    icon: 'chart'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/aclassManagement/classManagement'),
      name: 'classManagement',
      meta: { title: 'classManagement', noCache: true }
    },
    {
      path: 'type',
      component: () => import('@/views/aclassManagement/teachingManagement'),
      name: 'teachingManagement',
      meta: { title: 'teachingManagement', noCache: true }
    },
    {
      path: 'view',
      component: () => import('@/views/aclassManagement/studentManagement'),
      name: 'studentManagement',
      meta: { title: 'studentManagement', noCache: true }
    }
  ]
}

export default examsRouter
