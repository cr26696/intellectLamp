<template>
  <el-menu>
    <el-menu-item index="1">
      <div>
        <i class="el-icon-menu"></i>
        <router-link to="/mainview/deviceList" style="text-decoration: none">设备列表</router-link>
      </div>
    </el-menu-item>
    <el-menu-item index="2">
      <div>
        <i class="el-icon-view"></i>
        <router-link to="/mainview/alarmParam" style="text-decoration: none">预警参数</router-link>
      </div>
    </el-menu-item>
    <el-menu-item index="3">
      <div>
        <i class="el-icon-view"></i>
        <router-link to="/mainview/alarmInfo" style="text-decoration: none">预警信息</router-link>
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
