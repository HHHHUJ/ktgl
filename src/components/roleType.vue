<template>
    <div class="roles">
        <section @click="changeRole('admin')">
            <i :class="{'radio_action':selectValue === 'admin'}"></i>
            <span :class="{'span_action':selectValue === 'admin'}">管理员</span>
        </section>
        <section @click="changeRole('user')">
            <i :class="{'radio_action':selectValue === 'user'}"></i>
            <span :class="{'span_action':selectValue === 'user'}">用户</span>
        </section>
    </div>
</template>

<script>
export default {
    name:'roleType',
    data(){
        return {
            selectValue:'admin'
        }
    },
    methods:{
        changeRole(val){
            if(val) {
                this.selectValue = val;
                this.$emit('transmit',val)
            }else {
                this.$emit('transmit',this.selectValue)
            }
            
        }
    },
    mounted(){
        this.changeRole()
    }
}
</script>

<style scoped>
    .roles {
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-top:0.84rem;
    }
    i {
        display: inline-block;
        width:0.8rem;
        height:0.8rem;
        border:1px solid #666;
        border-radius:50%;
        margin-right:0.4rem;
    }
    .radio_action {
        background:url(../assets/imgs/icon/radio.png) no-repeat center center;
        background-size:0.8rem 0.8rem;
        border-color: #26a2ff;
    }
    .span_action {
        color:#26a2ff;
    }
    section {
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    span {
        font-size:0.4rem;
        color:#666;
    }
</style>
