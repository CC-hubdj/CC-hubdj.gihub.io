import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
// 导出一个vuex.Store实例，可接受一个对象作为参数
export default new Vuex.Stores({
    // < !--状态-- >
    state: {
        goodsList:[]
    },

    //  < !--状态的计算属性-- >
    getters: {
        
    },
   
    //< !--用于改变状态-- >
    mutations: {
        add:state=>state.number++      
    },
  
    //< !--可包含异步操作的mutation-- >
    actions: {
        
    },
})