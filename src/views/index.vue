<template>
  <div class="list-container">
    <el-button type="primary" round @click="jumpToPage('/iconShine')">发光的图标</el-button>


<!--    <el-button type="primary" round>主要按钮</el-button>-->
<!--    <el-button type="success" round>成功按钮</el-button>-->
<!--    <el-button type="info" round>信息按钮</el-button>-->
<!--    <el-button type="warning" round>警告按钮</el-button>-->
<!--    <el-button type="danger" round>危险按钮</el-button>-->
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  .list-container{
    width: 1200px;
    margin: 100px auto;
  }
</style>
