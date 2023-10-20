<template>
<div id="main_container">
    <div class="contentHeader">
        <span class="verticalCenter" style="width: 37px;"></span>
        <router-link to="" class="verticalCenter" id="backlink">《 返回上一页</router-link>
        <span class="verticalCenter" style="width: 54px;"></span>
        <span class="verticalCenter textInfo" >预警信息</span>
    </div>
    <div id="info">
        <div id="infoHead">
            <p class="textInfo">报警信息：</p>
            <p>无电源电压报警</p>
        </div>
        <div id="line"></div>
        <div id="infoContent">
            <span>阈值信息</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'AlarmInfo',
  data: function () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
#main_container{
    position: absolute;
    width: 100%;
}
#info{
    height: 85%;
    min-height: 600px;
}
#backlink{
    text-decoration: none;
    font-size: 18.75px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 27.15px;
    color: rgba(30, 170, 231, 1);
}
#infoHead{
    min-height: 170px;
}
#line{
    border: none;
    border-top: 1px solid black;
    margin: 0px;
}
.contentHeader{
    position: relative;
    left: 52px;
    top: 14px;
    width: 90%;
    height: 84px;
    line-height: 0;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius:20px
}
.verticalCenter{
    vertical-align:middle;
}
.textInfo{
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
