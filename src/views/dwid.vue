<template>
  <div class="dwid">
      <Header></Header>
        <div class="dwlist">
            <div class="dw" v-show="isDel">
                <span class="dw-title">點位ID：{{showval}}</span>
                <section>
                    <mt-button type="primary" size="small" @click.native="change">修改</mt-button>
                    <mt-button type="danger" size="small" @click.native="dele">刪除</mt-button>
                </section>
            </div>
        </div>
  </div>
</template>

<script>
import Header from './header.vue'
import { MessageBox } from 'mint-ui';
export default {
    name:'dwid',
    data(){
        return{
            changeval:'',
            showval:'',
            isDel:true
        }
    },
    created(){
        if(window.localStorage&&localStorage.getItem('dwid')){
            this.showval = JSON.parse(localStorage.getItem('dwid'));
        }
    },
    components:{
        Header
    },
    mounted(){

    },
    methods:{
        change(){
            MessageBox.prompt('请输入新的點位id','')
            .then(({ value, action }) => {
                this.showval = value;
            })
            .catch(action=>{
                console.log(action)
            })
        },
        dele(){
            MessageBox.confirm('确定刪除點位id碼?')
            .then(action => {
                console.log(action)
            })
            .catch(action=>{
                console.log(action)
            })
        }
    },
    // sockets:{
    //     connect:function() {//与socket.io连接后回调
    //         console.log('socket connected');
    //     },
    //     login:function(value) {
    //         console.log(value);//监听login(后端向前端emit  login的回调)
    //     }
    // }
}
</script>

<style scoped>
    .dwid{
        padding-top:1.37rem;
    }
    .dwlist{
        width:100%;
        padding:0.25rem 0.43rem;
    }
    .dw{
        background: #fff;
        width:100%;
        border-radius:6px;
        box-shadow: 0 0 15px rgba(0,0,0,0.15);
        /* height:3rem; */
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .dw-title{
        margin-left:8px;
        color:#444;
        font-size:0.42rem;
    }
    section{
        padding: 12px 10px;
    }
    .mint-button{
        margin:2px 3px !important;
    }
</style>
