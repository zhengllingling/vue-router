<template>
    <div class="test">
        <!-- <span>{{count}}</span>
        <span>{{count1}}</span>
        <span>{{name}}</span>
        <button @click="setCount(23)">测试</button>
        <button @click="SetName('ee')">测试1</button> -->
        <input v-focus/>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions, createNamespacedHelpers } from "vuex";
const { mapState: aMapState} = createNamespacedHelpers("a"); 
export default {
    name: "test",
    computed: {
        ...mapState({
            count: "count"
        }),
        ...aMapState({
            name: "name"
        }),
        ...mapGetters(["count1"])
    },
    mounted(){
        this.$store.commit('setCount', 10)
        this.$store.dispatch("changeCount", 100)
        console.log(this.$store.getters.add1(2))
    },
    methods: {
        ...mapMutations([
            "setCount"
        ]),
        ...mapActions([
            "changeCount"
        ]),
        ...mapActions('a', [
            "SetName"
        ])
    }
}
</script>