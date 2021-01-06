import Vue from 'vue'
import Vuex from 'Vuex'

// 1.安装vuex
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state:{
    counter:100
  },
  // 同步操作
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  // 对state中数据进行处理
  getters:{
    powerCounter(state){
      return state.counter * state.counter 
    }
  },
  // 异步操作
  actions:{

  },
})

// 3.导出store
export default store