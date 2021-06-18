<template>
    <div class="home">
        Home
        <!-- 使用命名路由的方式跳转 -->
        <router-link :to="{name: 'child1'}">child1</router-link>
        <router-link :to="{name: 'child2'}">child2</router-link>
        <button @click="routeJump('child1')">编程方式跳转</button>
        <button @click="programRouter()">编程式导航</button>
        <transition :name="transitionName">
            <router-view/>
        </transition>
        <!-- 命名视图 -->
        <!-- <router-view name="child1"/>
        <router-view name="child2"/> -->
    </div>
</template>
<script>
import VueRouter from "vue-router";
const { isNavigationFailure, NavigationFailureType } = VueRouter;
export default {
    name: 'home',
    data(){
        return{
            transitionName: "",
            arr: [
                {
                    a: 1
                }
            ],
            s1: new Set()
        }
    },
    watch: {
        $route(to, from){
            // 监听路由信息，改变transition的name来 动态设置路由过渡效果，还可以在每个组件上加transition标签设置不同的name来给个没有路由组件设置不同的国度效果
            // 所有transition的功能在这边都可以使用
            console.log(to, "home $route to watch");
        },
        arr:{
            deep: true,
            handler(val){
                console.log(val);
            }
        },
        s1: {
            deep: true,
            handler(val){
                console.log(val);
            }
        }
    },
    created() {
        console.log(this.$router);
    },
    methods: {
        routeJump(name) {
            // this.$router.push({name});
            // vue不能监听数组，但是对数组的push pop等方法实现了监听
            // this.$set(this.arr, '0', 1);
            // this.arr.push(1);
            // this.arr[2] = 1;
            this.s1.add(1);
            
        },
        /** 
         * 编程式导航
        */
        programRouter() {
            this.$router.push({name: 'child1'}).catch(failure => {
                console.log(isNavigationFailure(failure, NavigationFailureType.duplicated));
            })
            // this.$router.push({name: 'child2', query: { id: 1}, params: {name: 'child21'}});
            // this.$router.go(1);
            // this.$router.replace({name: 'child2'});
        }
    }
}
</script>