import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './stores/index'
import router from './routers'
// import './vuex/rem'
// 一般不建议这样用，因为会污染全局环境
// window.axios=axios 
// vue继承了axios的功能 
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
    // 既支持vue this.$router
    router,
    // 也支持vuex this.$store
    store,
    render: h => h(App),
}).$mount('#app')