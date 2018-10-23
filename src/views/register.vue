<template>
  <div class="login">
      <form action="">
            <p>
                <input type="text" placeholder="请输入账号" v-model="username">
            </p>
            <p class="p2">
                <input type="password" placeholder="请输入密码" v-model="password" autocomplete="new-password">
            </p>
            <Role v-on:transmit="transmitRole"></Role>
            <p class="p3">
                <button type="button"><a href="javascript:;" @click="submit">注册</a></button>
            </p>
            <p class="p4">
                <router-link :to="{name:'login'}" style="float:left;">登录</router-link>
                <router-link :to="{name:'sblist'}" style="float:right;">忘记密码</router-link>
            </p>
      </form>
  </div>
</template>

<script>
import Role from "../components/roleType.vue"
export default {
    data(){
        return {
            username:'',
            password:'',
            selectValue:'',
        }
    },
    methods:{
        submit(){
            var datas = {username:this.username,password:this.password,role:this.selectValue};
            this.$http.post('/register',{data:datas})
                .then(res=>{
                    console.log(res.data)
                    if(res.data === true) {
                        this.$router.push({name:'login'})
                    }
                })
        },
        transmitRole(val) {
            this.selectValue = val;
        }
    },
    components:{
        Role
    }
}
</script>

<style scoped>
    .login {
        height:100vh; /*vh视口高度被分成100份 */
        background:url(../assets/imgs/images/bg_login.png) no-repeat center center;
        background-size: cover;
        zoom:1;
        padding:7.24rem 0.97rem 0;
    }
    button,input {
        border:none;
        outline: none;
        height:1.50rem;
        width:100%;
        line-height: 1.50rem;
        color:#666666;
        font-size:0.40rem;
    }
    input {
        background:rgba(255,255,255,.6);
        padding-left:0.41rem;
    }
    input::-webkit-input-placeholder {
        color:#666666;
        font-size:0.40rem;
        
    }
    button {
        background:rgba(39,161,162,.5);
        font-size:0.40rem;
    }
    button>a {
        color:#fff;
        display:inline-block;
        width:100%;
        height:100%;
    }
    .p2 {
        margin-top:0.84rem;
    }
    .p3 {
        margin-top:0.84rem;
    }
    .p4 {
        padding:0 0.40rem;
        margin-top:0.53rem;
        overflow: hidden;
    }
    .p4>a {
        color:#0099ff;
        font-size:0.40rem;
        text-decoration: underline;
    }
</style>
