<template>
    <div class="child1">
        child1 {{id}} {{query}}
        <router-view name="test1"/>
        <router-view name="test2"/>
    </div>
</template>
<script>
export default {
    name: 'child1',
    props: {
        id: String,
        query: String
    },
    // 路由进入之前触发
    beforeRouteEnter(to, from, next){
        console.log(to, 'child1 beforeRouteEnter');
        // 不能访问this，在next回调中可以访问
        next(vm=>{
            console.log(vm, 'vm')
        });
    },
    // 查询或参数改变，组件复用之后触发 比如child1/1 跳转到 child1/2时会触发
    beforeRouteUpdate(to, from, next) {
        console.log(to,'child1 beforeRouteUpdate')
        // 可以访问this
        next();
    },
    // 离开守卫时触发，用来提示用户还未保存修改前就退出时的提示
    beforeRouteLeave(to, from, next) {
        console.log(to, 'child1 beforeRouteLeave');
        // 可以访问this
        next();
    }
}
</script>