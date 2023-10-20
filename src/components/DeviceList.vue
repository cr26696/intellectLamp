<template>
  <div id="container">
    <div id="contentHeader">
      <span id="textDeviceID" class="contentHeader" style="float:left;width:;">设备id:</span>
      <input type="text" class="contentHeader" style="float:left;left:24px;
        width: 240px;
        position:relative;
        border:0;
        border-radius: 25px;">
      <button style="float: right;
        width: 120px;
        height: 50px;
        opacity: 1;
        border-radius: 24.5px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 8px 18px  rgba(0, 0, 0, 0.1)">重置</button>
      <button style="float: right;
        width: 120px;
        height: 50px;
        opacity: 1;
        border-radius: 24.5px;
        background: rgba(30, 170, 231, 1);
        box-shadow: 0px 8px 18px  rgba(0, 0, 0, 0.1);">查询</button>
    </div>
    <el-table id="content"
      :data="tableData"
      :header-cell-style="{height:'90px',padding:'0 !important'}"
      :row-style="{height: '90px',padding:'0 !important'}"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        fixed
        prop="id"
        label="设备ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="version"
        label="版本号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="lampNumb"
        label="灯柱号"
        width="180">
      </el-table-column>
      <el-table-column
        label="灭灯延时"
        width="180"><template slot-scope="scope">{{scope.row.turnoffDelay}}分钟</template>
      </el-table-column>
      <el-table-column
        prop="voltage"
        label="电压"
        width="180">
      </el-table-column>
      <el-table-column
        prop="electricity"
        label="电流压"
        width="180">
      </el-table-column>
      <el-table-column
        prop="power"
        label="功率"
        width="180">
      </el-table-column>
      <el-table-column
        prop="powers"
        label="功率因子"
        width="180">
      </el-table-column>
      <el-table-column
        prop="lampState"
        label="灯具状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sensorState"
        label="传感器状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="temperature"
        label="温度"
        width="180">
      </el-table-column>
      <el-table-column
        prop="humidness"
        label="湿度"
        width="180">
      </el-table-column>
      <el-table-column
        prop="bright"
        label="亮度"
        width="180">
      </el-table-column>
      <el-table-column
        prop="a"
        label="电流标准"
        width="180">
      </el-table-column>
      <el-table-column
        prop="v"
        label="电压标准"
        width="180">
      </el-table-column>
      <el-table-column
        prop="lightIntensity"
        label="光照强度"
        width="180">
      </el-table-column>
      <el-table-column
        prop="lal"
        label="经纬度"
        width="180">
      </el-table-column>
      <el-table-column
        prop="adress"
        label="面向地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="controllerMode"
        label="控制器模式"
        width="180">
      </el-table-column>
      <el-table-column
        prop="controllerDuratioon"
        label="控制器在线时长"
        width="180">
      </el-table-column>
      <el-table-column
        prop="signalNoiseRatio"
        label="信噪比"
        width="180">
      </el-table-column>
      <el-table-column
        prop="signalCoverageStrength"
        label="信号覆盖强度"
        width="180">
      </el-table-column>
      <el-table-column
        prop="baseStationNumbe"
        label="基站号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="controllerOnlineStatus"
        label="控制器在线状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="msgSerialNumber"
        label="信息序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="moduleInformation"
        label="模组信息"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mainControlChip"
        label="主控芯片"
        width="180">
      </el-table-column>
      <el-table-column
        prop="timeTwo"
        label="更新时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="carState"
        label="当前有无车辆"
        width="180">
      </el-table-column>
      <el-table-column
        prop="nineteenTime"
        label="有无车辆通行上传时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="channel"
        label="信道"
        width="180">
      </el-table-column>
      <el-table-column
        prop="group"
        label="组号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="addressTwentyThree"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="groupNumberOne"
        label="左组号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="groupNumberTwo"
        label="右组号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="addressOne"
        label="灯柱地址"
        width="180">
      </el-table-column>
      <el-table-column
        header-align="center"
        fixed="right"
        label="操作"
        width="320">
        <template slot-scope="scope">
        <router-link to="/mainview/alarmInfo">
        <el-button @click="open(scope.row)" type="text" size="small">预警信息</el-button>
        </router-link>
        <el-button type="text" size="small">接受日志</el-button>
        <el-button type="text" size="small">指令设置</el-button>
        <el-button type="text" size="small">详情</el-button>
        <el-button type="text" size="small">修改</el-button>
        <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DeviceList',
  data: function () {
    return {
      tableData: [
        {
          id: '5453',
          version: '0x2e',
          lampNumb: 'A163',
          turnoffDelay: '30',
          voltage: '234',
          electricity: '438',
          power: '101',
          powers: '98',
          lampState: '亮',
          sensorState: '带湿传感器',
          temperature: '28',
          humidness: '77.9',
          bright: '50',
          a: '1000',
          v: '220',
          lightIntensity: '0',
          lal: '30.425508,120.312309',
          adress: '221.219.214.202',
          controllerMode: '正常模式',
          controllerDuratioon: '236',
          signalNoiseRatio: '1:3',
          signalCoverageStrength: '85',
          baseStationNumbe: '308',
          controllerOnlineStatus: '故障',
          msgSerialNumber: '291',
          moduleInformation: 'CAT1模块',
          mainControlChip: '雅特力',
          timeTwo: '2023-10-12 11:57:25',
          carState: '有车',
          nineteenTime: 'null',
          channel: 'null',
          group: 'null',
          addressTwentyThree: 'null',
          groupNumberOne: 'null',
          groupNumberTwo: 'null',
          addressOne: 'null'
        },
        {
          id: '5453',
          version: '0x2e',
          lampNumb: 'A163',
          turnoffDelay: '30',
          voltage: '234',
          electricity: '438',
          power: '101',
          powers: '98',
          lampState: '亮',
          sensorState: '带湿传感器',
          temperature: '28',
          humidness: '77.9',
          bright: '50',
          a: '1000',
          v: '220',
          lightIntensity: '0',
          lal: '30.425508,120.312309',
          adress: '221.219.214.202',
          controllerMode: '正常模式',
          controllerDuratioon: '236',
          signalNoiseRatio: '1:3',
          signalCoverageStrength: '85',
          baseStationNumbe: '308',
          controllerOnlineStatus: '故障',
          msgSerialNumber: '291',
          moduleInformation: 'CAT1模块',
          mainControlChip: '雅特力',
          timeTwo: '2023-10-12 11:57:25',
          carState: '有车',
          nineteenTime: 'null',
          channel: 'null',
          group: 'null',
          addressTwentyThree: 'null',
          groupNumberOne: 'null',
          groupNumberTwo: 'null',
          addressOne: 'null'
        },
        {
          id: '5453',
          version: '0x2e',
          lampNumb: 'A163',
          turnoffDelay: '30',
          voltage: '234',
          electricity: '438',
          power: '101',
          powers: '98',
          lampState: '亮',
          sensorState: '带湿传感器',
          temperature: '28',
          humidness: '77.9',
          bright: '50',
          a: '1000',
          v: '220',
          lightIntensity: '0',
          lal: '30.425508,120.312309',
          adress: '221.219.214.202',
          controllerMode: '正常模式',
          controllerDuratioon: '236',
          signalNoiseRatio: '1:3',
          signalCoverageStrength: '85',
          baseStationNumbe: '308',
          controllerOnlineStatus: '故障',
          msgSerialNumber: '291',
          moduleInformation: 'CAT1模块',
          mainControlChip: '雅特力',
          timeTwo: '2023-10-12 11:57:25',
          carState: '有车',
          nineteenTime: 'null',
          channel: 'null',
          group: 'null',
          addressTwentyThree: 'null',
          groupNumberOne: 'null',
          groupNumberTwo: 'null',
          addressOne: 'null'
        },
        {
          id: '5453',
          version: '0x2e',
          lampNumb: 'A163',
          turnoffDelay: '30',
          voltage: '234',
          electricity: '438',
          power: '101',
          powers: '98',
          lampState: '亮',
          sensorState: '带湿传感器',
          temperature: '28',
          humidness: '77.9',
          bright: '50',
          a: '1000',
          v: '220',
          lightIntensity: '0',
          lal: '30.425508,120.312309',
          adress: '221.219.214.202',
          controllerMode: '正常模式',
          controllerDuratioon: '236',
          signalNoiseRatio: '1:3',
          signalCoverageStrength: '85',
          baseStationNumbe: '308',
          controllerOnlineStatus: '故障',
          msgSerialNumber: '291',
          moduleInformation: 'CAT1模块',
          mainControlChip: '雅特力',
          timeTwo: '2023-10-12 11:57:25',
          carState: '有车',
          nineteenTime: 'null',
          channel: 'null',
          group: 'null',
          addressTwentyThree: 'null',
          groupNumberOne: 'null',
          groupNumberTwo: 'null',
          addressOne: 'null'
        },
        {
          id: '5453',
          version: '0x2e',
          lampNumb: 'A163',
          turnoffDelay: '30',
          voltage: '234',
          electricity: '438',
          power: '101',
          powers: '98',
          lampState: '亮',
          sensorState: '带湿传感器',
          temperature: '28',
          humidness: '77.9',
          bright: '50',
          a: '1000',
          v: '220',
          lightIntensity: '0',
          lal: '30.425508,120.312309',
          adress: '221.219.214.202',
          controllerMode: '正常模式',
          controllerDuratioon: '236',
          signalNoiseRatio: '1:3',
          signalCoverageStrength: '85',
          baseStationNumbe: '308',
          controllerOnlineStatus: '故障',
          msgSerialNumber: '291',
          moduleInformation: 'CAT1模块',
          mainControlChip: '雅特力',
          timeTwo: '2023-10-12 11:57:25',
          carState: '有车',
          nineteenTime: 'null',
          channel: 'null',
          group: 'null',
          addressTwentyThree: 'null',
          groupNumberOne: 'null',
          groupNumberTwo: 'null',
          addressOne: 'null'
        },
        {
          id: '5453',
          version: '0x2e',
          lampNumb: 'A163',
          turnoffDelay: '30',
          voltage: '234',
          electricity: '438',
          power: '101',
          powers: '98',
          lampState: '亮',
          sensorState: '带湿传感器',
          temperature: '28',
          humidness: '77.9',
          bright: '50',
          a: '1000',
          v: '220',
          lightIntensity: '0',
          lal: '30.425508,120.312309',
          adress: '221.219.214.202',
          controllerMode: '正常模式',
          controllerDuratioon: '236',
          signalNoiseRatio: '1:3',
          signalCoverageStrength: '85',
          baseStationNumbe: '308',
          controllerOnlineStatus: '故障',
          msgSerialNumber: '291',
          moduleInformation: 'CAT1模块',
          mainControlChip: '雅特力',
          timeTwo: '2023-10-12 11:57:25',
          carState: '有车',
          nineteenTime: 'null',
          channel: 'null',
          group: 'null',
          addressTwentyThree: 'null',
          groupNumberOne: 'null',
          groupNumberTwo: 'null',
          addressOne: 'null'
        },
        {
          id: '5453',
          version: '0x2e',
          lampNumb: 'A163',
          turnoffDelay: '30',
          voltage: '234',
          electricity: '438',
          power: '101',
          powers: '98',
          lampState: '亮',
          sensorState: '带湿传感器',
          temperature: '28',
          humidness: '77.9',
          bright: '50',
          a: '1000',
          v: '220',
          lightIntensity: '0',
          lal: '30.425508,120.312309',
          adress: '221.219.214.202',
          controllerMode: '正常模式',
          controllerDuratioon: '236',
          signalNoiseRatio: '1:3',
          signalCoverageStrength: '85',
          baseStationNumbe: '308',
          controllerOnlineStatus: '故障',
          msgSerialNumber: '291',
          moduleInformation: 'CAT1模块',
          mainControlChip: '雅特力',
          timeTwo: '2023-10-12 11:57:25',
          carState: '有车',
          nineteenTime: 'null',
          channel: 'null',
          group: 'null',
          addressTwentyThree: 'null',
          groupNumberOne: 'null',
          groupNumberTwo: 'null',
          addressOne: 'null'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
#container{
  height: 100%;
}
#contentHeader{
  position: absolute;
  top: 41px;
  left: 53px;
  width: 90%;
}
#content{
  position: absolute;
  top: 112px;
  left: 53px;
  width: 90%;
  height: 775px;
}
#textDeviceID{
  font-size: 20.83px;
  font-weight: 700;
  line-height: 30.17px;
  color: rgba(40, 40, 40, 1);
  text-align: left;
}
.contentHeader{
  height: 50px;
}

</style>
