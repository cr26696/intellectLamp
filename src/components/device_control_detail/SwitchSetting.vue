<!-- 开关调节页 -->
<template>
  <div id="switchContainer">

    <div id="switchHeader">
      <span class="t_switchSet" style="position: absolute;width: 100px;height: 37px;left: 46px;float: left;">开关调节</span>
    </div>
    <div id="lightName">
      <p class="t_lightName" style="float: left;">主灯1：</p>
    </div>
    <div id="lightStatus">
      <span class="t_lightStatus" style="float: left;">开关状态：</span>
      <el-Switch v-model="lightOn" active-color="#rgba(30, 170, 231, 1);" id="switch"></el-Switch>
      <span>开</span>
    </div>
    <div id="lightBrightness">
      <span class="t_lightStatus" style="float: left;">亮度调节：</span>
      <el-slider v-model="brightness" id="slider"></el-slider>
      <span id="brightPercent">亮度{{brightness}}%</span>
      <input type="text" v-model="brightness" class="input_bright" style="position: absolute;float: right;right: 53px;">
    </div>
//提交按钮
    <div style="position:absolute;
    width:100%;
    text-align: center;
    bottom: 33px;"
    >
      <button class="b_submit"><i style="float: left;">图</i><span>提交</span></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchSetting',
  data: function () {
    return {
      lightOn: true,
      brightness: 80
    }
  }
}
</script>

<style scoped lang="less">
#switchContainer{
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 575px;
  background-color: hsla(140, 50%, 92%, 0.9);
}
#switchHeader{
  position: relative;
  height: 45px;
  margin: 0 auto;
  background-color: hsla(140, 50%, 80%, 0.9);
}

#lightName{
  @left : 45px;

  position: absolute;
  width: calc(100% - @left);
  left: @left;
  top: 93px;
}
#lightStatus{
  @left : 45px;

  position: absolute;
  width: calc(100% - @left);
  height: 40px;
  left: @left;
  top: 132px;
}
#lightBrightness{
  @left : 45px;

  position: absolute;
  width: calc(100% - @left);
  left: @left;
  top: 183px;
}
#slider{
  position: absolute;
  left: 112px;
  width: calc((1000/1531)*100%);
}
#brightPercent{
  position: absolute;
  right: 251px;
  width:88px;
  height:28px;
  font-size: 18.77px;
  font-weight: 500;
  line-height: 27.17px;
  color: rgba(153, 153, 153, 1);
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
.b_paramHeader{//参数设置面板两按钮
  position: absolute;
  height: 45px;
  padding:0px 16px;
  border-radius: 50px;
  border: 0;
  background: rgba(30, 170, 231, 1);
  float: right;
  vertical-align: middle;
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
.t_switchSet{
  font-size: 25px;
  font-weight: 500;
  line-height: 36.2px;
  color: rgba(66, 66, 66, 1);
}
.t_lightName{
  font-size: 20px;
  font-weight: 500;
  line-height: 28.96px;
  color: rgba(30, 170, 231, 1);
}
.t_lightStatus{//亮度调节字样共用
  font-size: 18.77px;
  font-weight: 500;
  line-height: 27.17px;
  color: rgba(102, 102, 102, 1);
}
.t_b2{//参数设置面板两按钮所用字体
  font-size: 18.77px;
  font-weight: 500;
  line-height: 27.17px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
}
.t_bSubmit{//参数设置面板提交按钮所用字体
  font-size: 20.83px;
  font-weight: 500;
  line-height: 30.17px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
}
</style>
<style lang="less">
//开关样式--------------------------------------------
.el-switch__core{
    width:95px!important;
    height:40px!important;
    /*color:#409EFF;*/
  }
  /*设置圆*/
.el-switch__core::after{
    width:35px!important;
    height:35px!important;
    margin-top:-1px;
    margin-bottom: 2px;
  }
</style>
