<template>
  <div class="header">
      <i @click="loginOut" class="loginout"></i>
      <h1>{{this.$route.meta.navTitle}}</h1>
      <i @click="checkDw" class="dwid" v-if="role==='admin'"></i>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
    name:'header2',
    props:['role'],
    methods:{
        loginOut () {
            MessageBox.confirm('确定退出吗?').then(action => {
                window.localStorage.removeItem('dwid');
                window.localStorage.removeItem('role');
                this.$router.push({name:'login'})
            })
            .catch(action=>{
                return;
            })
            
        },
        checkDw() {
            this.$router.push({name:'dwid'})
        }
    }
}
</script>

<style scoped>
    .header{
        height:1.37rem;
        background: -webkit-linear-gradient(left,#a0d2f2 0,#0091ea 100%);
        background: -moz-linear-gradient(left,#a0d2f2 0,#0091ea 100%);
        background: -o-linear-gradient(left,#a0d2f2 0,#e3e3e3 100%);
        background: linear-gradient(to right,#a0d2f2 0,#0091ea 100%);
        width:100%;
        line-height: 1.37rem;
        text-align: center;
        position:fixed;
        top:0;
        left:0;
        z-index:10;
    }
    h1{
        font-size:0.45rem;
        color:#fff;
    }
    i {
        display:inline-block;
        position:absolute;
        top:0rem;
        width:1.50rem;
        height:1.37rem;
    }
    .loginout {
        background:url(../assets/imgs/icon/login_out.png) no-repeat center center;
        left:0rem;
        background-size:50% 50%;
    }
    .dwid {
        background:url(../assets/imgs/icon/dw_icon.png) no-repeat center center;
        right:0rem;
        background-size:50% 50%;
    }
</style>
