<!-- 模式设置页 -->
<template>
  <div id="panelContainer">

    <div id="panelHeader">
      <span class="t_paneltitle" id="panelTitle">设备模式</span>
      <span class="t_paneltitle" id="modeCurrent">正常模式</span>
    </div>
    <div id="timeraddTask">
      <span class="t_mode" style="float: left;">开关状态：</span>
      <el-Switch v-model=lightOn active-color="#rgba(30, 170, 231, 1);" id="switch" style="zoom: 1.8;"></el-Switch>
      <span>{{ lightOn?"开":"关" }}</span>
    </div>
    <div id="panelSubmit">
      <button class="b_submit"><i style="float: left;">图</i><span>提交</span></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimerSetting',
  data: function () {
    return {
      lightOn: true,
      brightness: 80,
      tableData: [{
        data1: '0x2e',
        data2: '关灯指令',
        data3: '14:38:23',
        data4: '100',
        data5: '已完成'
      }, {
        data1: '0x2e',
        data2: '开灯指令',
        data3: '14:38:23',
        data4: '100',
        data5: '未完成'
      }]
    }
  }
}
</script>

<style scoped lang="less">
@left : 45px;

#panelContainer{
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 575px;
  background-color: hsla(140, 50%, 92%, 0.9);

  div{
    width: 100%;
  }

  #panelHeader{
    position: relative;
    height: 37px;
    top: 9px;
    margin: 0 auto;
    background-color: hsla(140, 50%, 80%, 0.9);

    #panelTitle{
      position: absolute;
      width: 100px;
      height: 37px;
      left: @left;
      float: left;
    }
    #modeCurrent{
      position: absolute;
      width: 100px;
      height: 37px;
      left: 296px;
      float: left;
      color: rgba(30, 170, 231, 1);
    }
  }
  #timeraddTask{
    position: absolute;
    height: 45px;
    top: 98px;
    margin: 0 auto;
    background-color: hsla(140, 50%, 65%, 0.9);

    #addTask{
      position: absolute;
      left: @left;
      border: 0;
    }
    #readTask{
      position: absolute;
      right: 54px;
      border: 0;
    }
  }
  #timerTable{
    position: absolute;
    height: 45px;
    top: 184px;
    margin: 0 auto;
    background-color: hsla(140, 50%, 55%, 0.9);
  }
  #panelSubmit{
    position:absolute;
    width:100%;
    text-align: center;
    bottom: 33px;
  }
}
//--------------------------------------------
.paramColumn{
  position: relative;
  width: 452px;
  background-color: hsla(0, 0%, 100%, 0.9);
}
.paramItem{
  display: flex;
  margin: 10px 0 0 0;
}
.input_param{
  position: relative;
  width: 260px;
  height: 51px;
  opacity: 1;
  border-radius: 10px;
  background: rgba(239, 239, 239, 1);
}
//输入框样式--------------------------------------------
.input_bright{
  width: 90px;
  height: 40px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(102, 102, 102, 1);
}
//复用按钮样式--------------------------------------------
.b_task{//参数设置面板两按钮
  position: absolute;
  width: 150px;
  height: 45px;
  opacity: 1;
  border-radius: 50px;
  background: rgba(30, 170, 231, 1);
}
.b_submit{//提交
  position: relative;
  width: 232px;
  height: 60px;
  opacity: 1;
  margin: 0 auto;
  border-radius: 15px;
  background: rgba(30, 170, 231, 1);
}
//复用字体样式--------------------------------------------
.t_paneltitle{
  font-size: 25px;
  font-weight: 500;
  line-height: 36.2px;
  color: rgba(66, 66, 66, 1);
}
.t_mode{
  font-size: 18.77px;
  font-weight: 500;
  line-height: 27.17px;
  color: rgba(102, 102, 102, 1);
}
.t_bSubmit{//参数设置面板提交按钮所用字体
  font-size: 20.83px;
  font-weight: 500;
  line-height: 30.17px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
}
</style>
