<template>
  <div id="app">
    <h2>这是APP组件</h2>
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="'/user/' + userId" replace>用户</router-link>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 组件中的data要写成函数类型，返回一个新的对象，避免数据间的相互影响
  data(){
    return {
      // userId: 'zhangsan'
      userId:'lisi'
    }
  },
  methods:{
    homeClick(){
      // this.$router.replace('/home')
      this.$router.push('/home')
      console.log('点击首页')
    },
    aboutClick(){
      // this.$router.replace('/about')
      this.$router.push('/about')
      console.log('点击关于')
    }
  }
}
</script>

<style>

</style>
