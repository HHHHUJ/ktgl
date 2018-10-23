// import { asyncRouterMap, constantRouterMap } from '../../router/index.js';
export default {
    changeWdList(state,preload){
        var obj = preload
        for(var k in obj){
            state.wdlist.forEach(list => {
                if(list.pinyin == k){
                    list.value = obj[k]
                }
            });
        }    
    },
    // saveRole(state,preload) {
    //     // window.localStorage.setItem('permission',preload)
    //     state.role = preload;
    // },
    SET_ROUTERS(state, routers) {
        state.addRouters = routers;
        state.routers = constantRouterMap.concat(routers);
    }
};
