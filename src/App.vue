<template>
  <div id="app">
    <transition :name="transitionName">
       <keep-alive :include="cacheComps">
            <router-view class="child-view"></router-view>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
const cacheComps = []
export default {
  name: 'App',
  data(){
      return {
          cacheComps:cacheComps
      }
  }
}
</script>

<style>
   /*必须要让子路由绝对定位*/
  .child-view {
    width:100%;
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  @keyframes right-enter{
      0%{transform:translateX(100%)}
      100%{transform:translateX(0%)}
  }
  @keyframes right-leave{
      0%{transform:translateX(0%)}
      100%{transform:translateX(-100%)}
  }

  .slide-right-enter-active{
      animation: right-enter .8s ;
  }
  .slide-right-leave-active{
      animation: right-leave .8s ;
  }

  @keyframes left-enter{
      0%{transform:translateX(-100%)}
      100%{transform:translateX(0%)}
  }
  @keyframes left-leave{
      0%{transform:translateX(0%)}
      100%{transform:translateX(100%)}
  }

  .slide-left-enter-active{
      animation: left-enter .8s ;
  }
  .slide-left-leave-active{
      animation: left-leave .8s ;
  }
</style>
