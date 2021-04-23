import Vue from 'vue';
import Vuex from 'vuex';
import { a } from "./modules/index";
import myPlugin from "../plugins/index";

// Vuex单一状态树

Vue.use(Vuex);

//改变store状态唯一方法是提交mutation mutation类似于事件 mutation必须是同步函数 如果使用异步很难检测状态

/** 
 * action类似与mutation，但是不同的是
 * action提交的是mutation，不是直接改变状态， action可以包含任意异步操作 第一参数接收与store有相同属性和方法的对象
*/

const stroe = new Vuex.Store({
    // 类似与store中的data
    state: {
        count: 0
    },
    // 类似与store中的计算属性
    getters: {
        count1: (state, getter) => state.count,
        add1: state => val => state.count + val
    },
    mutations: {
        setCount(state, value) {
            state.count = value
        }
    },
    actions: {
        changeCount({ commit }, value) {
            commit("setCount", value)
        }
    },
    // 模块分割
    modules: {
        a
    },
    plugins: [myPlugin] 
});

export default stroe;