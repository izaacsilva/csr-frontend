import Vue from 'vue'
import Router from 'vue-router'
const routerOptions = [
  { path: '/', component: 'Home' },
  { path: '/UserPage', component: 'UserPageRegular' },
  { path: '/ViewBookings', component: 'ViewBookings' },
  { path: '/CancelMeeting', component: 'CancelMeeting' },
  { path: '/BookMeeting', component: 'BookMeeting' },
  { path: '/UserPageAdmin', component: 'UserPageAdmin' },
  { path: '/ManageMeetingRoom', component: 'ManageMeetingRoom' },
  { path: '/ManageUsers', component: 'ManageUsers' },
  { path: '/ManageRequisition', component: 'ManageRequisition' },
  { path: '*', component: 'NotFound' }
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})
Vue.use(Router)
export default new Router({
  routes,
  mode: 'history'
})
