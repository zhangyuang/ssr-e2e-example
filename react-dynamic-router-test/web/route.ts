
export const FeRoutes = [
  {
    fetch: async () => await import(/* webpackChunkName: "detail-id-fetch" */ '@/pages/detail/fetch'),
    path: '/detail/:id',
    component: async function dynamicComponent () {
      return await import(/* webpackChunkName: "detail-id" */ '@/pages/detail/render$id')
    },
    webpackChunkName: 'detail-id'
  },
  {
    fetch: async () => await import(/* webpackChunkName: "index-fetch" */ '@/pages/index/fetch'),
    path: '/',
    component: async function dynamicComponent () {
      return await import(/* webpackChunkName: "index" */ '@/pages/index/render')
    },
    webpackChunkName: 'index'
  }]
export { default as App } from '@/components/layout/App'
