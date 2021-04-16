<template>
    <div class="login">
        <div>
            <span>用户名：</span>
            <input v-model="username" >
        </div>
        <div>
            <span>密码：</span>
            <input v-model="password">
        </div>
        <button @click="loginIn()">登录</button>
    </div>
</template>
<script>
export default {
    name: 'login',
    data(){
        return{
            username: '',
            password: ''
        }
    },
    methods: {
        /** 
         * 登录
        */
        loginIn(){

        }
    }
}
</script>