<template>
  <div class="main-container">
    <div class="header">
      <div v-if="this.$route.path != '/'" class="iconfont icon-home" @click="jumpToPage('/')"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
  @import "assets/css/iconfont.css";

  .main-container{
    width: 1200px;
    margin: 0px auto;

    .header{
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon-home{
        font-size: 60px;
        cursor: pointer;
      }
    }
  }
</style>
