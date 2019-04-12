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
      component: () => import('@/views/exam/addQuetions'),
      name: 'KeyboardChart',
      meta: { title: 'addQuetions', noCache: true }
    },
    {
      path: 'types',
      component: () => import('@/views/exam/typesQuetions'),
      name: 'Types',
      meta: { title: 'typesQuetions', noCache: true }
    },
    {
      path: 'looks',
      component: () => import('@/views/exam/looksQuetions'),
      name: 'Looks',
      meta: { title: 'looksQuetions', noCache: true }
    }
  ]
}

export default testRouter
