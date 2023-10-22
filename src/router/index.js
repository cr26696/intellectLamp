import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from '@/views/MainView.vue'
import DeviceList from '@/components/DeviceList.vue'
import DeviceControl from '@/components/DeviceControl.vue'
import AlarmInfo from '@/components/AlarmInfo.vue'

import ParamSetting from '@/components/device_control_detail/ParamSetting.vue'
import SwitchSetting from '@/components/device_control_detail/SwitchSetting.vue'
import TimerSetting from '@/components/device_control_detail/TimerSetting.vue'
import ModeSetting from '@/components/device_control_detail/ModeSetting.vue'
import RebootSetting from '@/components/device_control_detail/RebootSetting.vue'
import CarSetting from '@/components/device_control_detail/CarSetting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mainview'
  },
  {
    path: '/mainview',
    name: 'MainView',
    component: MainView,
    children: [
      {
        path: '/',
        redirect: 'deviceList'
      },
      {
        path: 'deviceList',
        component: DeviceList
      },
      {
        path: 'deviceControl',
        component: DeviceControl,
        children: [
          {
            path: '/',
            redirect: 'paramsetting'
          },
          {
            path: 'paramsetting',
            component: ParamSetting
          },
          {
            path: 'switchsetting',
            component: SwitchSetting
          },
          {
            path: 'timersetting',
            component: TimerSetting
          },
          {
            path: 'modesetting',
            component: ModeSetting
          },
          {
            path: 'rebootsetting',
            component: RebootSetting
          },
          {
            path: 'carsetting',
            component: CarSetting
          }
        ]
      },
      {
        path: 'alarmInfo',
        component: AlarmInfo
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
