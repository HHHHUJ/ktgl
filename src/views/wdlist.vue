<template>
    <div class="wd">
        <Header/>
        <div class="title">
            <span class="sbbh">设备编号：{{$route.query.sbbh}}</span>
        </div>
        <p v-if="role==='admin'">
          <button @click="begin" :class="{'btn':switchStatus==='on'}" :disabled="switchStatus==='on'"><label>启动</label></button>
        </p>
        <p v-if="role==='admin'">
          <button @click="stop" :class="{'btn':switchStatus==='off'}" :disabled="switchStatus==='off'"><label>停止</label></button>
        </p>
        <p v-if="role==='admin'">
          <mt-button plain size="large" @click="update">更新</mt-button>
        </p>
        <div class="wdlist">
            <ul>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.pg1">
                    <section class="el-input decrease" @click="jian('pg1')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('pg1')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">盘管1温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.yhj1">
                    <section class="el-input decrease" @click="jian('yhj1')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('yhj1')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">用户1进温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.yhc1">
                    <section class="el-input decrease" @click="jian('yhc1')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('yhc1')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">用户1出温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.syj1">
                    <section class="el-input decrease" @click="jian('syj1')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('syj1')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">水源1进温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.syc1">
                    <section class="el-input decrease" @click="jian('syc1')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('syc1')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">水源1出温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.ysjxq1">
                    <section class="el-input decrease" @click="jian('ysjxq1')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('ysjxq1')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">压缩机1吸气温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.ysjpq1">
                    <section class="el-input decrease" @click="jian('ysjpq1')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('ysjpq1')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">压缩机1排气温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.pg2">
                    <section class="el-input decrease" @click="jian('pg2')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('pg2')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">盘管2温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.yhj2">
                    <section class="el-input decrease" @click="jian('yhj2')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('yhj2')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">用户2进温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.yhc2">
                    <section class="el-input decrease" @click="jian('yhc2')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('yhc2')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">用户2出温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.syj2">
                    <section class="el-input decrease" @click="jian('syj2')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('syj2')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">水源2进温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.syc2">
                    <section class="el-input decrease" @click="jian('syc2')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('syc2')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">水源2出温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.ysjxq2">
                    <section class="el-input decrease" @click="jian('ysjxq2')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('ysjxq2')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">压缩机2吸气温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.ysjpq2">
                    <section class="el-input decrease" @click="jian('ysjpq2')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('ysjpq2')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">压缩机2排气温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.hj">
                    <section class="el-input decrease" @click="jian('hj')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('hj')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">环境温度</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.ylwd1">
                    <section class="el-input decrease" @click="jian('ylwd1')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('ylwd1')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">预留温度1</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.ylwd2">
                    <section class="el-input decrease" @click="jian('ylwd2')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('ylwd2')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">预留温度2</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.ylwd3">
                    <section class="el-input decrease" @click="jian('ylwd3')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('ylwd3')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">预留温度3</span>
                </li>
                <li>
                    <i></i>
                    <input type="text" class="inp" v-model="updateList.ylwd4">
                    <section class="el-input decrease" @click="jian('ylwd4')">
                      <em class="el-icon-minus"></em>
                    </section>
                    <section class="el-input increase" @click="jia('ylwd4')">
                      <em class="el-icon-plus"></em>
                    </section>
                    <span class="props">预留温度4</span>
                </li>
            </ul>
        </div>
</div>
  
</template>

<script>
import Header from "./header";
import { mapState, mapActions } from "vuex";
import { MessageBox } from "mint-ui";
export default {
  name: "wdlist",
  data() {
    return {
      list: [],
      dwid: "",
      switchStatus:'',
      role:'',
      updateList:{
        "dwid": null,
        "sbbh": null,
        "pg1" : null, 
        "yhj1" : null, 
        "yhc1" : null, 
        "syj1" : null, 
        "syc1" : null, 
        "ysjxq1" : null, 
        "ysjpq1" : null, 
        "pg2" : null, 
        "yhj2" : null, 
        "yhc2" : null, 
        "syj2" : null, 
        "syc2" : null, 
        "ysjxq2" : null, 
        "ysjpq2" : null, 
        "hj" : null, 
        "ylwd1" : null, 
        "ylwd2" : null, 
        "ylwd3" : null, 
        "ylwd4" : null
      }
    };
  },
  components: {
    Header
  },
  computed: {
    ...mapState("common", ["wdlist"])
  },
  created() {
    this.dwid = JSON.parse(window.localStorage.getItem("dwid"));
    this.role = window.localStorage.getItem('role');
  },
  methods: {
    ...mapActions("common", ["changeWdList"]),
    jian(val) {
      this.updateList[val] = (this.updateList[val] - 0.1).toFixed(1)
    },
    jia(val) {
      if(parseFloat(this.updateList[val])<=0) {
       this.updateList[val] =  (this.updateList[val] - -0.1).toFixed(1)
      }else {
        this.updateList[val] = (this.updateList[val] - -0.1).toFixed(1)
      }
    },
    sendOn(){
      const data = {
        dwid: this.dwid,
        sbbh: this.$route.query.sbbh,
        cmd:"on"
      };
      this.$http.get("/listwd", { params: data }).then(res => {
        console.log(res.data);
      });
    },
    sendOff(){
      const data = {
        dwid: this.dwid,
        sbbh: this.$route.query.sbbh,
        cmd:"off"
      };
      this.$http.get("/listwd", { params: data }).then(res => {
        console.log(res.data);
      });
    },
    begin(){
      this.sendOn();
      var that = this;
      setTimeout(()=>{
        that.getData();
      },200)
    },
    stop(){
      this.sendOff();
      var that = this;
      setTimeout(()=>{
        that.getoffData();
      },200)
    },
    getUpdateList(data) {
      for(let i in this.updateList) {
        if(i) {
          this.updateList[i] = data[i];
        }
      }
    },
    update(){
      this.$http.get('/listwd',{params:this.updateList})
      .then(res=>{
        this.getData();
      })
    },
    getData() {
      var sbbh = this.$route.query.sbbh;
      this.$http.get("/listwd", {params:{
        sbbh: sbbh,
        dwid: this.dwid,
        acquire: true
      }}).then(res=>{
        this.list = res.data;
        this.getUpdateList(this.list);
        this.switchStatus = 'on';
      })
    },
    getoffData() {
      var sbbh = this.$route.query.sbbh;
      this.$http.get("/wenduoff", {params:{
        sbbh: sbbh,
        dwid: this.dwid
      }}).then(res=>{
        this.switchStatus = 'off';
        this.list = res.data;
        this.getUpdateList(this.list);
      })
    },
    jugdeSwitch() {
      var sbbh = this.$route.query.sbbh;
      this.$http.get("/downcmd",{params:{
        getCmd:true,
        sbbh: sbbh,
        dwid: this.dwid
      }}).then(res=>{
        var status = res.data[0].cmd;
        if(status==='on') {
          this.getData()
        } else {
          this.getoffData()
        }
      })
    },
  },
  mounted() {
   this.jugdeSwitch()
  }
};
</script>

<style scoped>
.wd {
  padding-top: 1.37rem;
}
.wdlist {
  width: 100%;
  padding: 0.7rem 0.43rem 2.62rem;
}
.title {
  width: 100%;
  padding: 3px 0.43rem;
  height: 1.37rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  position: sticky;
  position: -webkit-sticky;
  top: 0rem;
  overflow: hidden;
  margin-top: -1px;
  z-index:1000;
}
p{
  margin:15px 15px;
}
ul {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-items: center;
}
li {
  width: 47%;
  position: relative;
  padding: 6px 0;
  display: flex;
  display: -webkit-flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 6px;
  margin-bottom: 0.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}
.el-input{
    position: absolute;
    z-index: 1;
    bottom: 5px;
    width: 48%;
    height: 38px;
    line-height: 38px;
    text-align: center;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
    font-size: 0.6rem;
}
.decrease{
    left: 0px;
    border-radius: 0 6px 6px 0;
    border: 1px solid #dcdfe6;
    border-left:none;
}
.increase{
    right: 0px;
    border-radius: 6px 0 0 6px;
    border: 1px solid #dcdfe6;
    border-right:none;
}
.el-icon-minus:before {
  content: "－";
}
.el-icon-plus:before {
    content: "＋";
}
em {
  font-style:normal;
}
.inp {
  border:none;
  outline: none;
  width:40%;
  position:absolute;
  background:transparent;
  text-align: center;
  font-size: 0.2rem;
  color: #444;
  top:35px;
}
span {
  display: inline-block;
  font-size: 0.4rem;
  color: #434343;
}
.sbbh{
  margin:0 auto;
}
.props {
  margin:8px auto 45px;
}
i {
  display: inline-block;
  width: 3.66rem;
  height: 2.64rem;
  background: url(../assets/imgs/images/wendu2.png) no-repeat center center;
  background-size: 2.6rem 2.55rem;
  text-align: center;
  line-height: 2.02rem;
}
button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 4px;
    border: 0;
    display: block;
    font-size: 18px;
    width:100%;
    height: 41px;
    outline: 0;
    overflow: hidden;
    text-align: center;
    position: relative;
     background-color:#0091ea;
}
label {
  font-size:18px;
  color:#fff;
}
.btn {
 
  background-color:rgba(0, 0, 0, 0.15)
}
.btn_action:after {
  background-color: #000;
  content: " ";
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
}
</style>
