/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const uploadimageRouter = {
  path: '/uploadimage',
  component: Layout,
  redirect: 'noredirect',
  name: 'uploadimage',
  alwaysShow: true,
  meta: {
    title: 'uploadimage',
    icon: 'titlegirl',
    view_id: 'browser-upload'
  },
  children: [
    {
      path: 'upload',
      component: () => import('@/views/uploadimage/upload'),
      name: 'upload',
      meta: { title: 'uploadDetele', noCache: true, view_id: 'browser-upload' }
    }
  ]
}

export default uploadimageRouter

