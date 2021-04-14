<template>
    <div class="home">
        Home
        <!-- 使用命名路由的方式跳转 -->
        <router-link :to="{name: 'child1'}">child1</router-link>
        <router-link :to="{name: 'child2'}">child2</router-link>
        <button @click="routeJump('child1')">编程方式跳转</button>
        <router-view/>
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
        }
    }
}
</script>