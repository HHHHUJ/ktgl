<template>
  <div class="lowerComputer">
      <Header></Header>
      <div class="main">
          <div class="list" v-for="(item,i) in list" :key="i">
              <span>设备编号：{{item.sbbh}}</span>
              <span>开关状态：{{item.cmd}}</span>
          </div>
      </div>
      <!-- <div ref="echart" class="echart"></div> -->
  </div>
</template>

<script>
import Header from './header.vue'
// import echarts from '../config/echarts.js'
export default {
    name:'lowerComputer',
    data(){
        return{
            dwid:'',
            timer:null,
            list:[]
        }
    },
    components:{
        Header
    },
    created(){
        this.dwid = JSON.parse(window.localStorage.getItem('dwid'))
        if(this.dwid){
            this.visited();
        } 
    },
    mounted(){
        // echarts(this.$refs.echart)
        var that = this;
        this.timer = setInterval(()=>{
            that.visited();
        },5000)//一分钟访问一次
        
    },
    // beforeDestroy(){
    //     clearInterval(this.timer); //有效
    // },
    beforeRouteLeave (to, from, next) {
        clearInterval(this.timer);
        next();
    },
    methods:{
        visited(){
            this.$http.get('/downcmd',{params:{dwid:this.dwid,sbbh:this.$route.query.sbbh}})
            .then(res=>{
                console.log(res)
                this.list = res.data
            })
        }
    }
}
</script>

<style scoped>
.lowerComputer{
    padding-top:1.37rem;
    width:100%;
}
.main{
    width:100%;
}
.list{
    height:1.35rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin:15px 10px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 0 16px rgba(0,0,0,0.25);
}
span{
    font-size:0.4rem;
    color:#434343;
}
.echart{
    width:100%;
    height:8rem;
}
</style>
