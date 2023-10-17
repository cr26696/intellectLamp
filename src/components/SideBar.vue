<template>
  <el-menu>
    <el-menu-item index="1">
      <div>
        <i class="el-icon-menu"></i>
        <router-link to="/mainview/deviceList">设备列表</router-link>
      </div>
    </el-menu-item>
    <el-menu-item index="2">
      <div>
        <i class="el-icon-view"></i>
        <router-link to="/mainview/alarmParam">预警参数页面</router-link>
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
