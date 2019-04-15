/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/exams',
  component: Layout,
  redirect: 'noredirect',
  name: 'exams',
  meta: {
    title: 'exams',
    icon: 'chart'
  },
  children: [
    {
      path: 'addExam',
      component: () => import('@/views/exams/addExam'),
      name: 'addExam',
      meta: { title: 'addExam', noCache: true }
    },
    {
      path: 'paperList',
      component: () => import('@/views/exams/paperList'),
      name: 'paperList',
      meta: { title: 'paperList', noCache: true }
    }
  ]
}

export default examsRouter