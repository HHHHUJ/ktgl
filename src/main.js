// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'lib-flexible/flexible.js'
import adaptive from './config/adaptive.js'
import './assets/css/global.css'
adaptive();
Vue.config.productionTip = false
import store from './store';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import Routeranimate from './config/routeranimate.js'
import setHttp from './config/setHttp.js'
import validator from './config/validator.js'
import filter from './filter'
// import './permission.js'
// import VueSocketio from 'vue-socket.io';
// import socketio from 'socket.io-client';

// Vue.use(VueSocketio, socketio('http://localhost:7100'), store);
Vue.use(Mint);
Vue.use(setHttp)
Vue.mixin(Routeranimate)
Vue.mixin(validator)
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


