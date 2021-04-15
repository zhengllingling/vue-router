<template>
    <div class="child2">
        child2
    </div>
</template>
<script>
export default {
    name: 'child2',
    watch: {
        $route: {
            handler(val) {
                console.log(val);
                console.log(val.query, 'query');
                console.log(val.params, 'params');
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log(to, 'child2 beforeRouteEnter')
        next();
    }
}
</script>