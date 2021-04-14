import home from '../../views/home';
import page404 from "../../views/404";
import { child1, child2 } from './index.as';
const routes = [
    {  
        // path: '/home/:id', // 动态路由配置 id存在与param中
        path: '/home',
        name: 'home',
        component: home,
        // 嵌套路由
        children: [ child1, child2 ]
    },
    {
        // 通配符 必须放在最后
        path: "*",
        name: "*",
        component: page404
    }
]

export default routes;