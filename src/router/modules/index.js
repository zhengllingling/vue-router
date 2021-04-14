import home from '../../views/home';
import page404 from "../../views/404";
import { child1, child2 } from './index.as';
// import Child1 from "../../views/home/child1";
// import Child2 from "../../views/home/child2";
const routes = [
    {  
        // path: '/home/:id', // 动态路由配置 id存在与param中
        path: '/home',
        name: 'home',
        component: home,
        // // 重定向
        // redirect: '/home/child1',
        // redirect: { name:'child1' },
        // redirect: (to) => {
        //     // to 是当前路由对象
        //     console.log(to);
        //     return `${to.path}/child1`
        // },
        // 嵌套路由
        children: [ child1, child2 ]
        // // 命名视图
        // children: [
        //     {
        //         name: '',
        //         path: '',
        //         components: {
        //             child1: Child1,
        //             child2: Child2
        //         }
        //     }
        // ]
    },
    {
        // 通配符 必须放在最后
        path: "*",
        name: "*",
        component: page404
    }
]

export default routes;