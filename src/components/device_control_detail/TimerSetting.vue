<!-- 定时调节页 -->
<template>
  <div id="timerContainer">

    <div id="timerHeader">
      <span class="t_paneltitle" id="panelTitle">定时调光</span>
    </div>
    <div id="timeraddTask">
      <button class="b_task" id="addTask">+增加定时任务</button>
      <button class="b_task" id="readTask" style="background: rgba(239, 239, 239, 1);">读取定时调光任务</button>
    </div>
    <div id="timerTable">
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="data1"
        label="版本号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="data2"
        label="任务类型"
        width="200">
      </el-table-column>
      <el-table-column
        prop="data3"
        label="时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="data4"
        label="亮度值"
        width="200">
      </el-table-column>
      <el-table-column
        prop="data5"
        label="操作"
        width="200">
      </el-table-column>
    </el-table>
    </div>
    <div id="timerSubmit">
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
      }, {
        data1: '0x2e',
        data2: '开灯指令',
        data3: '14:38:23',
        data4: '100',
        data5: '已完成'
      }]
    }
  }
}
</script>

<style scoped lang="less">
@left : 45px;

#timerContainer{
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 575px;
  background-color: hsla(140, 50%, 92%, 0.9);

  div{
    width: 100%;
  }

  #timerHeader{
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
  #timerSubmit{
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
.t_bSubmit{//参数设置面板提交按钮所用字体
  font-size: 20.83px;
  font-weight: 500;
  line-height: 30.17px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
}
</style>
