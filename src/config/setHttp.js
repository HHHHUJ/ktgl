import axios from 'axios'

const Axios = axios.create({
    // baseURL: 'http://47.94.153.68:7100',
    baseURL:'http://47.106.137.254:7100',
    timeout: 25000,
})
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
    install(Vue) {
      Object.defineProperty(Vue.prototype, '$http', { value: Axios })
    }
  }
  