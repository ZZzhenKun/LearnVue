<template>
  <div>
    <h2>这是用户界面</h2>
    <p>用户的相关信息</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  computed:{
    userId(){
      return this.$route.params.userId
    },
  }
}
</script>

<style>

</style>