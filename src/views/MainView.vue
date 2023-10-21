<template>

<el-container id="container">
  <el-header>Header</el-header>
  <el-container>
    <el-aside><SideBar></SideBar></el-aside>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>

</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/outerframe/SideBar.vue'
export default {
  name: 'MainView',
  components: {
    SideBar
  }
}
</script>

<style>
 .el-header{
    background-color: hsla(183, 13%, 67%, 0.85);
    color: #333;
    text-align: center;
    height: 94px !important;
  }

  .el-aside {
    background-color: hsla(133, 30%, 58%, 0.85);
    color: #333;
    text-align: center;
    width: 233px !important;
  }

  .el-main {
    background-color: hsla(140, 100%, 98%, 0.85);
    color: #333;
    text-align: center;
    position: relative;
    padding: 0 !important;
  }

 #container {
    position: absolute;
    height: 100%;
    width: 100%;
  }

</style>
