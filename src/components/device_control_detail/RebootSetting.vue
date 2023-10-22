<!-- 重启设备页 -->
<template>
  <div id="panelContainer">

    <div id="panelHeader">
      <span class="t_paneltitle" id="panelTitle">设备重启</span>
      <button id="reboot"><i>图</i><p class="t_rebootButton" >重启设备</p></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RebootSetting',
  data () {
    return {
      deviceIdImei: '',
      version: '27',
      restartCommand: '0'
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
@left : 45px;
//id嵌套样式-----------------------------------------
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
    height: 60px;
    top: 9px;
    margin: 0 auto;
    background-color: hsla(140, 50%, 80%, 0.9);

    #panelTitle{
      display: block;
      position: relative;
      float: left;
      width: 100px;
      height: 37px;
      top: 50%;
      left: @left;
      transform: translateY(-50%);
    }

    #reboot{
      position: absolute;
      display: block;
      width: 232px;
      height: 60px;
      left: 200px;
      float: left;
      background: rgba(30, 170, 231, 1);
      border-radius: 20px;
      border: 0;
      i{
        position: absolute;
        width: 42px;
        height: 42px;
        left: 13px;
        top:8px;
        border: 1px solid black;
      }
      p{
        position: absolute;
        width: 100px;
        height: 37px;
        right: 46px;
        top: 12px;
      }
    }
  }

  #panelSubmit{
    position:absolute;
    width:100%;
    text-align: center;
    bottom: 33px;
  }
}
//--------------------------------------------
.pos_center{
  transform: translate(-50%,-50%);
}.pos_leftcenter{
  transform: translateY(-50%);
}.pos_topcenter{
  transform: translateX(-50%);
}
//按钮样式--------------------------------------------
.b_submit{//提交
  position: relative;
  width: 232px;
  height: 60px;
  opacity: 1;
  margin: 0 auto;
  border-radius: 15px;
  background: rgba(30, 170, 231, 1);
}
//字体样式--------------------------------------------
.t_paneltitle{
  font-size: 25px;
  font-weight: 500;
  line-height: 36.2px;
  color: rgba(66, 66, 66, 1);
}
.t_rebootButton{
  font-size: 25px;
  font-weight: 500;
  line-height: 36.2px;
  color: rgba(255, 255, 255, 1);
}
.t_bSubmit{//参数设置面板提交按钮所用字体
  font-size: 20.83px;
  font-weight: 500;
  line-height: 30.17px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
}
</style>
