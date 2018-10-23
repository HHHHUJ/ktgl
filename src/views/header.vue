<template>
  <div class="header">
      <i @click="goBack"></i>
      <h1>{{this.$route.meta.navTitle}}</h1>
  </div>
</template>

<script>
export default {
    mounted () {
        
    },
    methods:{
        goBack () {
            this.$router.back(-1);
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
        background:url(../assets/imgs/icon/icon.png) no-repeat center center;
        display:inline-block;
        position:absolute;
        top:0rem;
        left:0rem;
        width:1.50rem;
        height:1.37rem;
    }
</style>
