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
    }
}
</script>