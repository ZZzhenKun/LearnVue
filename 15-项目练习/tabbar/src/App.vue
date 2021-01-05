<template>
  <div id="app">
    <main-tab-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
// 注册组件
import MainTabBar from './components/MainTabBar.vue';
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>
<style>
/* 导入css样式 */
@import "./assets/css/base.css";
</style>
