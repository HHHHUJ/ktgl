const mixin = {
    data(){
        return {
            transitionName: 'slide-left'
        }
    },
    watch:{
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
        }
    }
}
export default mixin;