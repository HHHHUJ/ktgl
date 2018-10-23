// import { asyncRouterMap, constantRouterMap } from '../../router/index.js';
function hasPermission(roles, route) {
    if (route.meta && route.meta.role) {
      if(route.meta.role.indexOf(roles) >= 0) {
        return true
      }else {
        return false;
      }
    } else {
      return false;
    }
}

function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      return true
    }
    return false
  })
  return accessedRouters
}
export default {
    changeWdList({commit,state},preload){
        commit('changeWdList',preload)
    },
    GenerateRoutes({ commit }, data) {
        return new Promise(resolve => {
          const roles = data
          let accessedRouters
          if (roles === 'admin') {
            accessedRouters = asyncRouterMap
          } else {
            accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
          }
          console.log('accessedRouters', accessedRouters)
          commit('SET_ROUTERS', accessedRouters)
          resolve();
        })
    },
    loginByRole({commit}, data) {
        return new Promise((resolve,reject)=>{
            window.localStorage.setItem('role',data);
            // commit('saveRole',data);
            resolve()
        })
    }
};
