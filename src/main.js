import Vue from "vue";
import App from "./App.vue";

import router from './router';
import store from './store';


/** 
 * 导航守卫
 * */ 
// 前置守卫 - 路由跳转之前触发 用于权限验证、登录验证跳转等
router.beforeEach((to, from, next) => {
    console.log(to, "beforeEach");
    // console.log(from, "from");
    // 进入到下一个钩子
    next();
    // // 中断当前导航，进入到from指的路由地址
    // next(false);
    // // 指定跳转到任意一个地址,传参可以向router.push那样传入参数
    // next('/home');
})

// 全局解析守卫 导航被确认之前，所有组件内守卫和异步路由组件被解析之后，才触发
router.beforeResolve((to, from, next) => {
    console.log(to, 'beforeResolve');
    next();
})

// 后置守卫 - 路由跳转完成之后会触发
router.afterEach((to, from) => {
    console.log(to, 'afterEach')
})

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
})