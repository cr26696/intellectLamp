<template>

<el-container>
  <el-header>Header</el-header>
  <el-container>
    <SideBar></SideBar>
    <el-main><div><router-view/></div></el-main>
  </el-container>
</el-container>

</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
export default {
  name: 'MainView',
  components: {
    SideBar
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 94px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    position: relative;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
`
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
