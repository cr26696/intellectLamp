<template>
<div id="main_container">

    <div id="backHeader">
        <span class="verticalCenter" style="width: 37px;"></span>
        <router-link to="/mainview/deviceList" class="verticalCenter" id="backlink">《 返回上一页</router-link>
        <span class="verticalCenter" style="width: 54px;"></span>
        <span class="verticalCenter textInfo" >设备控制</span>
    </div>

    <div id="infoPanel">
      <el-row :gutter="20" id="panelNav">
        <el-col :span="4"><div class="grid-content">
          <router-link to="/mainview/deviceControl/paramsetting"><button class="b_header">参数设置</button></router-link>
        </div></el-col>
        <el-col :span="4"><div class="grid-content">
          <router-link to="/mainview/deviceControl/switchsetting"><button class="b_header">开关调节</button></router-link>
        </div></el-col>
        <el-col :span="4"><div class="grid-content">
          <router-link to="/mainview/deviceControl/timersetting"><button class="b_header">定时调节</button></router-link>
        </div></el-col>
        <el-col :span="4"><div class="grid-content">
          <router-link to="/mainview/deviceControl/modesetting"><button class="b_header">模式设置</button></router-link>
        </div></el-col>
        <el-col :span="4"><div class="grid-content">
          <router-link to="/mainview/deviceControl/rebootsetting"><button class="b_header">重启设备</button></router-link>
        </div></el-col>
        <el-col :span="4"><div class="grid-content">
          <router-link to="/mainview/deviceControl/carsetting"><button class="b_header">车辆设置</button></router-link>
        </div></el-col>
      </el-row>
      <div id="deviceInfoTable">
        <el-row>
            <el-col :span="4"><div class="grid-content"><p class="textCategory">设备id</p><br><p class="textInfoContent">861817066805433</p></div></el-col>
            <el-col :span="4"><div class="grid-content"><p class="textCategory">灯杆号</p><br><p class="textInfoContent">-</p></div></el-col>
            <el-col :span="4"><div class="grid-content"><p class="textCategory">经度</p><br><p class="textInfoContent">121.3825168185769</p></div></el-col>
            <el-col :span="4"><div class="grid-content"><p class="textCategory">控制器状态</p><br><p class="textInfoContent">·离线</p></div></el-col>
            <el-col :span="4"><div class="grid-content"><p class="textCategory">控制器模式</p><br><p class="textInfoContent">正常模式</p></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><div class="grid-content"><p class="textCategory">版本号</p><br><p class="textInfoContent">0x2e</p></div></el-col>
            <el-col :span="4"><div class="grid-content"><p class="textCategory">lora模块信道</p><br><p class="textInfoContent">0-110</p></div></el-col>
            <el-col :span="4"><div class="grid-content"><p class="textCategory">纬度</p><br><p class="textInfoContent">31.16577853732639</p></div></el-col>
            <el-col :span="4"><div class="grid-content"><p class="textCategory">灯具状态</p><br><p class="textInfoContent">·亮</p></div></el-col>
            <el-col :span="4"><div class="grid-content"><p class="textCategory">lora地址</p><br><p class="textInfoContent">0-65535</p></div></el-col>
        </el-row>
      </div>

      <div id="line"></div>

      <router-view style="position: absolute;top:500px"/>
    </div>

</div>
</template>

<script>
export default {
  name: 'DeviceControl',
  data: function () {
    return {
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
    }
  }
}
</script>

<style scoped lang="less">
#main_container{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: hsla(140, 100%, 92%, 0.85);
}
#backHeader{//返回导航栏，居中
  position: relative;
  left: 52px;
  top: 14px;
  width: 90%;
  height: 84px;
  line-height: 0;
  background-color: hsla(140, 100%, 88%, 0.85);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius:20px
}
#backlink{//返回链接
    text-decoration: none;
    font-size: 18.75px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 27.15px;
    color: rgba(30, 170, 231, 1);
}
#infoPanel{//控制界面主体
    position: absolute;
    top: 110px;
    left: 52px;
    height: 85%;
    width: 90%;
    min-height: 600px;
    background-color: hsla(140, 100%, 84%, 0.85);
    display: flex;
}
#panelNav {
  border-radius: 4px;
  top: 19px;
  width: 100%;
  height: 60px;
  margin: 0 auto;
  background-color: hsla(140, 100%, 71%, 0.85);
}
#deviceInfoTable{//设备信息2行
    position: absolute;
    height: 135px;
    width: 95%;
    min-width: 1000px;
    max-width: 1461px;
    top: 117px;
    margin: 0 auto;
}
#line{//分隔线
  position: relative;
  top: 265px;
  width: 93%;
  height:2px;
  margin: 0 auto;
  border: 1px solid rgba(220, 220, 220, 1);
}
.verticalCenter{
    vertical-align:middle;
}
.el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
.grid-content {
  min-height: 50px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
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
.textCategory{
    font-size: 16.67px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24.13px;
    color: rgba(102, 102, 102, 1);
}
.textInfoContent{
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
