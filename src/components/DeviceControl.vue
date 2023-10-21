<template>
<div id="main_container">

  <div id="head_row" class="contentRow">
      <span>设备id：</span>
      <span><input></span>
      <span>版本号：</span>
      <span><input></span>
      <span>控制器状态：</span>
      <span><input></span>
      <span></span>
      <span><button>查询</button></span>
      <span><button>重置</button></span>
  </div>

  <div id="table">
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    </el-table>
  </div>

</div>
</template>

<script>
export default {
  name: 'AlarmParam',
  data: function () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped lang="less">
.contentRow {
  position: absolute;
  left: 53px;
  top: 41px;
  height: 50px;
  line-height: 0;
}
#table {
  position: absolute;
  left: 53px;
  top: 41px;
  line-height: 0;
  height: 400px;
}
</style>
