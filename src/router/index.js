import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import('@/views/layout.vue')
const Login = () => import('@/views/login.vue')
const Register = () => import('@/views/register.vue')
const Sblist = () => import('@/views/sblist.vue')
const Management = () => import('@/views/management.vue')
const Wdlist = () => import('@/views/wdlist.vue')
const Dwid = () => import('@/views/dwid.vue')
const LowerComputer = () => import('@/views/lowerComputer.vue')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/home/sblist/dwid',
      name:'dwid',
      component:Dwid,
      meta:{navTitle:'點位ID'}
    },
    {
      path:'/home/sblist/lowerComputer',
      name:'lowerComputer',
      component:LowerComputer,
      meta:{navTitle:'访问下位机'}
    },
    {
      path:'/home/sblist',
      name:'sblist',
      component:Sblist,
      meta:{navTitle:'设备列表'}
    },
    {
      path:'/home/sblist/management',
      name:'management',
      component:Management,
      meta:{navTitle:'空调管理'}
    },
    {
      path:'/home/sblist/wdlist',
      name:'wdlist',
      component:Wdlist,
      meta:{navTitle:'温度列表'}
    }
  ]
 
})
