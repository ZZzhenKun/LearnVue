<template>
  <div id="app">
    <h2>----------------app的内容-----------------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <h2>----------------getters的内容-----------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>----------------hello vuex的内容-----------------</h2>
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
    };
  },
  methods: {
    addition(){
      // 通过commit方法来调用mutations定义的方法
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
    }
  }
};
</script>

<style>
</style>
