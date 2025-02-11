import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import axios from "axios";
import Main from '../pages/Main.vue'
import Home from '../pages/Home.vue'
import Recover from '../pages/Recover.vue'
import Order from '../pages/Order.vue'
import Mine from '../pages/Mine.vue'
import Detail from '../pages/Detail.vue'
import DetailShow from '../pages/DetailShow.vue'
import Reg from '../pages/Reg.vue'
import AboutUs from '../pages/AboutUs.vue'
import RegCode from '../pages/RegCode.vue'
import logOut from '../pages/logOut.vue'
import CartList from '../pages/CartList.vue'
// import Register from '../pages/Register.vue'

const routes = [{
        //当页面为http://localhost:8080/main 在<router-view />加载Main组件
        path: '/main',
        name: 'main',
        component: Main,
        children: [{
                path: 'home',
                name: 'home',
                component: Home,
                // 别名
                // alias: 'h'
            }, {
                path: 'recover',
                name: 'recover',
                component: Recover
            },
            {
                path: 'order',
                name: 'order',
                component: Order
            },
            {
                path: 'mine',
                name: 'mine',
                component: Mine
            },
        ]
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail
    },
    {
        path: '/detailShow',
        name: 'detailShow',
        component: DetailShow
    },
    {
        path: '/cartList',
        name: 'cartList',
        component:CartList
    },
    {
        path: '/reg',
        name: 'reg',
        component: Reg
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs
    },
    {
        path: '/regcode',
        name: 'regcode',
        component: RegCode
    },
    {
        path: '/logout',
        name: 'logout',
        component: logOut
    },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: Register
    // },
    // 默认重定向
    {
        path: '/',
        redirect: '/main/home'
    }
]

const router = new VueRouter({
    // 默认 hash
    mode: 'history', //可以去掉#号
    routes // (缩写) 相当于 routes: routes
})

// 路由守卫
// 进所有路由之前都要判断
// router.beforeEach((to, from, next) => {
//     axios.get('http://localhost:3000/reg', {
//         params: {
//             token: sessionStorage.getItem('token')
//         }
//     });

//     // to 将要进去的路由
//     // from 将要远离的路由
//     // next 函数，如果执行了，那就往下通行
//     window.console.log(to, from, next)

//     // 如果登录信息是正确的，或者你在登录页，那就触发next放行，否则，就回跳到login页面，重新获取登录信息
//     if (window.sessionStorage.getItem('token') === '12345678' || to.name === 'login') {
//         next()
//     } else {
//         // 如果不成功，回跳登录页
//         router.push({
//             name: 'login'
//         })
//     }

// })

export default router