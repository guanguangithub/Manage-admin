/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const readingRouter = {
  path: '/reading',
  component: Layout,
  redirect: 'noredirect',
  name: 'Markmanagement',
  alwaysShow: true,
  meta: {
    title: 'Markmanagement',
    icon: 'chart'
  },
  children: [
    {
      path: 'classtobe',
      component: () => import('@/views/reading/classtobe'),
      name: 'ClassToBeApproved',
      meta: { title: 'ClassToBeApproved', noCache: true }
    },
    {
      path: 'readelete',
      component: () => import('@/views/reading/readelete'),
      name: 'MarkDelete',
      hidden: true,
      meta: { noCache: true, breadcrumb: false }
    },
    {
      path: 'delete',
      component: () => import('@/views/reading/delete'),
      name: 'MarkDelete',
      hidden: true,
      meta: { noCache: true, breadcrumb: false }
    }
  ]
}

export default readingRouter
