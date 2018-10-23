import router from './router'
import store from './store'
const whiteList = ['/login'] // 不重定向白名单

router.beforeEach((to, from, next) => {
    if (window.localStorage.getItem('role')) { // 判断是否有token
        if (to.path === '/home') {
        next();
        } else {
        const role = window.localStorage.getItem('role');
        console.log(role)
        store.dispatch('common/GenerateRoutes', role ).then(() => { // 生成可访问的路由表
            console.log(store.state.common.addRouters)
            router.addRoutes(store.state.common.addRouters) // 动态添加可访问路由表
            console.log(to)
            // if(to.path === '/')
            next(); // hack方法 确保addRoutes已完成
        })
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
});
