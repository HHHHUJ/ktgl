<template>
<div class="sblist">
    <Header2 :role="role"></Header2>
    <div class="sbs">
        <div v-if="sbList.length === 0" style="font-size:0.5rem;font-weight:bold;">暂无数据！！！</div>
        <div v-else class="sb" v-for="(item,i) in sbList" :key="i">
            <a href="javascript:;">
                <img src="../assets/imgs/images/unit.png" alt="空调机组">
                <span>{{item.name}}</span>
                <span @click="downcmd(item.sbbh)" v-if="role==='admin'">下载命令</span>
                <i @click="listwd(item.sbbh)"></i>
            </a>
        </div>
    </div>
</div>
    
</template>

<script>
import { mapState } from 'vuex'
import Header2 from './header2'
export default {
    name:"sblist",
    data() {
        return {
            sbList:[],
            dwid:'',
            role:''
        }
    },
    created(){
        if(window.localStorage) {
            this.dwid = JSON.parse(window.localStorage.getItem('dwid'));
            this.role = window.localStorage.getItem('role');
        } 
    },
    mounted(){ 
        this.$http.get('/listsb',{params:{dwid:this.dwid}})
        .then(res=>{
            this.sbList = res.data[0].sblist;
        })
    },
    components:{
        Header2
    },
    methods:{
        listwd(val) {
            this.$router.push({name:'wdlist',query:{sbbh:val}})
        },
        downcmd(val){
            this.$router.push({name:'lowerComputer',query:{sbbh:val}})
        },
    }

}
</script>

<style scoped>
    .sblist{
        padding-top:1.37rem;
    }
    .sbs {
        padding:0.75rem 0.36rem 2.62rem;
        text-align: center;
    }
    .sb {
        width:100%;
        height:2.00rem;
        background:rgba(255,255,255,1);
        margin-bottom:0.60rem;
        border-radius:6px;
        box-shadow: 0 0 15px rgba(0,0,0,.15)
    }
    a {
        display:inline-block;
        height:100%;
        width:100%;
        display:flex;
        display:-webkit-flex;
        justify-content: space-between;
        align-items: center;
    }
    img{
        width:1.80rem;
        height:90%;
        margin-left:10px;
    }
    /* i {
        display:inline-block;
        width:1.71rem;
        height:100%;
        background:url(../assets/imgs/icon/column_btn_icon_right.png) no-repeat center center;
        vertical-align: middle;
    } */
    span {
        display:inline-block;
        color:#444;
        font-size:0.350rem;
        font-weight:bold;
    }
    i{
        background:url(../assets/imgs/icon/icon_right.png) no-repeat center center;
        display: inline-block;
        width:2.00rem;
        height:2.00rem;
    }
</style>
