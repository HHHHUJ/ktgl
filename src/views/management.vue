<template>
    <div>
        <Header/>
        <div class="management">
            <div class="title">
                <i class="icon"></i>
                <span>环球中心W6-789</span>
            </div>
            <div class="manageList">
               <router-link :to="{name:'detail'}">
                    <img src="../assets/imgs/images/icon_aircondition.png" />
                    <span>W6-123</span>
               </router-link>
            </div>
        </div>
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
    .management {
        width:100%;
        padding:77px 43px 262px;
        background:#f2f2f2;
    }
    .title {
        height:50px;
        width:100%;
        margin-bottom:95px;
    }
    .icon {
        background:url(../assets/imgs/icon/column_btn_icon_down.png) no-repeat center center;
        display: inline-block;
        height:100%;
        width:127px;
    }
    .title>span {
        display:inline-block;
        font-size:45px;/*px*/
        color:#666;
    }
    .manageList {
        height:203px;
        width:100%;
        background-color:#fff;
        padding:37px 0 37px 31px;
        border-radius: 20px;
    }
    .manageList>a {
        display: inline-block;
        width:100%;
        height:100%;
    }
    .manageList>a img {
        width:129px;
        height:129px;
        vertical-align: middle;
    }
    .manageList>a span {
        font-size:35px;/*px*/
        color:#000;
        font-weight:bold;
        vertical-align: middle;
        margin-left:113px;
    }
</style>
