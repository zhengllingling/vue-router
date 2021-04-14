<template>
    <div class="home">
        Home
        <!-- 使用命名路由的方式跳转 -->
        <router-link :to="{name: 'child1'}">child1</router-link>
        <router-link :to="{name: 'child2'}">child2</router-link>
        <button @click="routeJump('child1')">编程方式跳转</button>
        <button @click="programRouter()">编程式导航</button>
        <router-view/>
        <!-- 命名视图 -->
        <!-- <router-view name="child1"/>
        <router-view name="child2"/> -->
    </div>
</template>
<script>
export default {
    name: 'home',
    created() {
        console.log(this.$router);
    },
    methods: {
        routeJump(name) {
            this.$router.push({name});
        },
        /** 
         * 编程式导航
        */
        programRouter() {
            this.$router.push({name: 'child1'})
            this.$router.push({name: 'child2', query: { id: 1}, params: {name: 'child21'}});
            this.$router.go(1);
            this.$router.replace({name: 'child2'});
        }
    }
}
</script>