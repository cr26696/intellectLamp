import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mainview'
  },
  {
    path: '/mainview',
    name: 'MainView',
    component: () => import('@/views/MainView.vue'),
    children: [
      {
        path: 'deviceList',
        component: () => import('@/components/DeviceList.vue')
      },
      {
        path: 'alarmParam',
        component: () => import('@/components/AlarmParam.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
