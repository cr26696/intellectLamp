<template>
<div id="main_container">
  <div id="container">
    <div id="backHeader">
        <span class="verticalCenter" style="width: 37px;"></span>
        <router-link to="/mainview/deviceList" class="verticalCenter" id="backlink">《 返回上一页</router-link>
        <span class="verticalCenter" style="width: 54px;"></span>
        <span class="verticalCenter textInfo" >设备控制</span>
    </div>

    <div id="infoPanel">
      <ul class="ul_nav">
        <li v-for="(item, index) in panelList" :key="item.id" :id="`button${index}`">
          <div class="center">
            <button class="b_header"  :class="{'actived' : panelList[index][1] === currentPanel }" @click="currentPanel = item[1]">{{item[0]}}</button>
          </div>
        </li>
      </ul>

      <div id="deviceInfoTable">
        <el-row style="position: relative;height:54px">
            <el-col :span="4"><div id=""><p class="t_category">设备id</p><br><p class="t_cateInfo">861817066805433</p></div></el-col>
            <el-col :span="4"><div id=""><p class="t_category">灯杆号</p><br><p class="t_cateInfo">-</p></div></el-col>
            <el-col :span="4"><div id=""><p class="t_category">经度</p><br><p class="t_cateInfo">121.3825168185769</p></div></el-col>
            <el-col :span="4"><div id=""><p class="t_category">控制器状态</p><br><p class="t_cateInfo">·离线</p></div></el-col>
            <el-col :span="4"><div id=""><p class="t_category">控制器模式</p><br><p class="t_cateInfo">正常模式</p></div></el-col>
        </el-row>
        <el-row style="position: relative;height:54px">
            <el-col :span="4"><div id=""><p class="t_category">版本号</p><br><p class="t_cateInfo">0x2e</p></div></el-col>
            <el-col :span="4"><div id=""><p class="t_category">lora模块信道</p><br><p class="t_cateInfo">0-110</p></div></el-col>
            <el-col :span="4"><div id=""><p class="t_category">纬度</p><br><p class="t_cateInfo">31.16577853732639</p></div></el-col>
            <el-col :span="4"><div id=""><p class="t_category">灯具状态</p><br><p class="t_cateInfo">·亮</p></div></el-col>
            <el-col :span="4"><div id=""><p class="t_category">lora地址</p><br><p class="t_cateInfo">0-65535</p></div></el-col>
        </el-row>
      </div>
      <div id="line"></div>
      <keep-alive>
        <component :is="currentPanel" style="top:21px"></component>
      </keep-alive>
    </div>
  </div>
</div>
</template>

<script>
import ParamSetting from '@/components/device_control_detail/ParamSetting.vue'
import SwitchSetting from '@/components/device_control_detail/SwitchSetting.vue'
import TimerSetting from '@/components/device_control_detail/TimerSetting.vue'
import ModeSetting from '@/components/device_control_detail/ModeSetting.vue'
import RebootSetting from '@/components/device_control_detail/RebootSetting.vue'
import CarSetting from '@/components/device_control_detail/CarSetting.vue'

export default {
  name: 'DeviceControl',
  data: function () {
    return {
      deviceInfo: {
        deviceIdImei: '',
        version: '',
        alarmInterva: '',
        temperatureWarning: '',
        humidityWarning: '',
        lightWarning: '',
        signalStrengthWarning: '',
        lightPoleTiltWarning: '',
        leakageAlarm: '',
        reportCycleSetting: '',
        apn: '',
        plmn: '',
        controllerStatusInstruction: ''
      },
      panelList: [
        ['参数设置', ParamSetting],
        ['开关调节', SwitchSetting],
        ['定时调节', TimerSetting],
        ['模式设置', ModeSetting],
        ['重启设备', RebootSetting],
        ['车辆设置', CarSetting]
      ],
      currentPanel: ParamSetting
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
#main_container{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: hsla(140, 100%, 92%, 0.85);

  #container{
    position: absolute;
    width: 1531px;
    height: 936px;
    min-height: 936px;
    max-height: 1200px;
    top: 14px;
    left: 52px;
    background-color: hsl(139, 27%, 75%);

    #backHeader{//返回导航栏，居中
      position: relative;
      height: 84px;
      line-height: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-radius:20px;
      background-color: hsla(140, 100%, 88%, 0.85);

      #backlink{//返回链接
          text-decoration: none;
          font-size: 18.75px;
          font-weight: 500;
          letter-spacing: 0px;
          line-height: 27.15px;
          color: rgba(30, 170, 231, 1);
      }
    }
    #infoPanel{//控制界面主体
        position: relative;
        top: 12px;
        height: 85%;
        min-height: 600px;
        background-color: hsla(140, 100%, 84%, 0.85);

      .ul_nav{
        position: relative;
        top: 19px;
        left: 46px;
        right: 54px;
        width: 1427px;
        height: 60px;
        list-style: none;
        display: flex ;
        justify-content: space-between;
        border-radius: 4px;
        background-color: hsla(140, 100%, 71%, 0.85);
        }
        .center{
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          button{
            position: relative;
          }
        }
        .actived{
          width: 285px;
          height: 60px;
          border-radius: 20px;
          background: rgba(30, 170, 231, 1);
        }
    }
    #deviceInfoTable{//设备信息2行
        position: relative;
        height: 135px;
        min-width: 1000px;
        max-width: 1461px;
        top: 37px;
        left: 105px;
    }
    #line{//分隔线
      position: relative;
      top: 14px;
      width: 93%;
      height:2px;
      border: 1px solid rgba(220, 220, 220, 1);
    }
}
}
.verticalCenter{
    vertical-align:middle;
}
.el-row {
    &:last-child {
      margin-bottom: 0;
    }
}
.b_header{//设置页导航按钮
  width: 200px;
  height: 50px;
  border-radius: 20px;
  border: 0;
  background: rgba(239, 239, 239, 1);
}
.textInfo{//几种字体
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height:36.2px;
    color: rgba(66, 66, 66, 1);
}
.t_category{
    font-size: 16.67px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24.13px;
    color: rgba(102, 102, 102, 1);
}
.t_cateInfo{
    font-size: 18.75px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 27.15px;
    color: rgba(40, 40, 40, 1);
}
p{
    position: absolute;
    height: auto;
}
</style>
