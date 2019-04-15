/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const readingRouter = {
  path: '/reading',
  component: Layout,
  redirect: 'noredirect',
  name: 'Markmanagement',
  meta: {
    title: 'Markmanagement',
    icon: 'chart'
  },
  children: [
    {
      path: 'readclass',
      component: () => import('@/views/reading/readclass'),
      name: 'ReadClass',
      meta: { title: 'ReadClass', noCache: true }
    },
    {
      path: 'classtobe',
      component: () => import('@/views/reading/classtobe'),
      name: 'ClassToBeApproved',
      meta: { title: 'ClassToBeApproved', noCache: true }
    }
  ]
}

export default readingRouter
