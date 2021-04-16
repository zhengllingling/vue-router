import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './modules/index';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
    /** 
     * 导航滚动行为
     * 当切换路由时，页面的滚动行为， 只有当history.pushstate时有效
     * 第三个参数只有当history.popstate时才可用，浏览器的前进/后退按钮
     * */  
    scrollBehavior: (to, from, savedPosition ) => {
        // // 这中间可以控制各种滚动行为
        // if(savedPosition) {
        //     return savedPosition;
        // }else{
        //     return {x:0, y:0}
        // }
        // // 还可以模拟滚动到锚点
        // if(to.hash) {
        //     return { selector: to.hash }
        // }
        // // 可以使用异步函数来实现异步滚动
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         return resolve({x: 0, y: 0})
        //     }, 1000);
        // })
        // // 还可以添加返回参数设置平滑滚动
        // return {
        //     selector: to.hash,
        //     behavior: 'smooth'
        // }
    }
})

export default router;