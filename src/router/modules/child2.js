import Child2 from "../../views/home/child2";

const child2 = {
    path: 'child2',
    name: 'child2',
    // // 别名
    // alias: 'child3',
    component: Child2,
    beforeEnter: (to, from, next) => {
        console.log(to, 'child2 beforeEnter')
        next();
    }
}

export default child2;