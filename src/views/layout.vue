<template>
  <div class="layout">
      <Header/>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './header'
export default {
    components:{
        Header
    }
}
</script>

<style scoped>

</style>

