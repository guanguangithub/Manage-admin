/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/mxaminationManagement',
  component: Layout,
  redirect: 'noredirect',
  name: 'Administration',
  meta: {
    title: 'mxaminationManagement',
    icon: 'chart'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/charts/keyboard'),
      name: 'addExam',
      meta: { title: 'addExam', noCache: true }
    },
    {
      path: 'type',
      component: () => import('@/views/charts/line'),
      name: 'paperList',
      meta: { title: 'paperList', noCache: true }
    }
  ]
}

export default examsRouter
