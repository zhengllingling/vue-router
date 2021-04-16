// import Child2 from "../../views/home/child2";

const child2 = {
    path: 'child2',
    name: 'child2',
    // // 别名
    // alias: 'child3',
    // component: Child2,
    // 路由懒加载
    component: () => import("../../views/home/child2"),
    beforeEnter: (to, from, next) => {
        console.log(to, 'child2 beforeEnter')
        next();
    },
    // 路由元信息 添加一些字段用于登陆验证，传递路由标题等等一些功能
    meta: {
        title: 'child2'
    }
}

export default child2;