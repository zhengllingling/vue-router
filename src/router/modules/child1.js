import Child1 from "../../views/home/child1";
import Test1 from "../../views/home/test1";
import Test2 from "../../views/home/test2";

const child1 = {
    // path: 'child1/:id',
    // path: 'child1/:id/:name',
    name: 'child1',
    component: Child1,
    // children: [
    //     {
    //         name: '',
    //         path: '',
    //         components: {
    //             test1:Test1,
    //             test2:Test2
    //         },
    //         props: {
    //             test1: true,
    //             test2: true
    //         }
    //     }
    // ]
    // 路由组件传参
    // props: true
    // props: route => {
    //     console.log(route);
    //     return {
    //         id: route.params.id,
    //         query: route.query.a
    //     }
    // },
    beforeEnter:(to,from,next) => {
        console.log(to, 'child1 beforeEnter')
        next();
    }
}

export default child1;