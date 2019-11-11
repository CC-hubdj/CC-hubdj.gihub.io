import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
// 导出一个vuex.Store实例，可接受一个对象作为参数
export default new Vuex.Store({
    // < !--状态-- >
    state: {
        author: 'wen',
        search: {
            value: ''
        },
        goodsList: localStorage["goodsList"] ? JSON.parse(localStorage["goodsList"]) : []
    },
    //< !--状态的计算属性-- >
    getters: {
        getAuthor(state) {
            return state.search
        },
        sum: state => {
            var total = 0;
            state.goodsList.forEach((item) => {
                if (item.select) {
                    total += item.price * item.number
                }
            })
            return total
        },
        goddsNumber: state => {
            return state.goodsList.length
        }
    },
    //< !--用于改变状态-- >
    mutations: {
        setAuthor(state, data) {
            state.search = data
        },
        addGoods: (state, data) => {
            state.goodsList.push(data);
            localStorage.setItem("goodsList", JSON.stringify(state.goodsList));
        },
        deleteGoods(state, index) {
            state.goodsList.splice(index, 1);
            localStorage.setItem("goodsList", JSON.stringify(state.goodsList));
        },
        updateGoods(state, data) {
            const {
                index,
                key,
                value
            } = data;
            state.goodsList[index][key] = value;
            localStorage.setItem("goodsList", JSON.stringify(state.goodsList));
        }
    },
    //< !--可包含异步操作的mutation-- >
    actions: {
        setAuthor(context, data) {
            context.commit('setAuthor', data)
        }
    }
})