<template>
    <div class="responsive-test">
        <input v-model="obj.a" />
        <button @click="test1()">测 试</button>
        <br/>
        {{obj.b}}
        <div ref="test">{{test}}</div>
    </div>
</template>
<script>
export default {
    name: 'responsive-test',
    data(){
        return {
            obj: {
                a: '1'
            },
            test: "1"
        }
    },
    created() {
        this.$set(this.obj, "b", 0)
    },
    methods: {
        // test() {
        //     this.obj.b++;
        // },
        test1() {
            this.test = "22";
            console.log(this.$refs.test.textContent === "22")
            // 改变相应式数据，不会立即重新渲染，而会刷新队列， 等待下一次事件循环tick中更新
            this.$nextTick(() => {
                console.log(this.$refs.test.textContent === "22")
            })
        }
    }
}
</script>