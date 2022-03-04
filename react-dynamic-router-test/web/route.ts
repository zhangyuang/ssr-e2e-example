
export const FeRoutes = [
{
  "fetch": () => import(/* webpackChunkName: "detail-id-fetch" */ '@/pages/detail/fetch'),
  "path": "/detail/:id",
  "component":  function dynamicComponent () {
    return import(/* webpackChunkName: "detail-id" */ '@/pages/detail/render$id')
   }, 
   "webpackChunkName": "detail-id"
}, 
{
  "fetch": () => import(/* webpackChunkName: "index-fetch" */ '@/pages/index/fetch'),
  "path": "/",
  "component": function dynamicComponent () {
    return import(/* webpackChunkName: "index" */ '@/pages/index/render')
   }, 
   "webpackChunkName": "index"
}]
export { default as App } from "@/components/layout/App"