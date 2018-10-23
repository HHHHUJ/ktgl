import Vue from 'vue'

const filter = (() =>{
    Vue.filter('suffix', function (value) {
        return value+' '+'℃';
    })
})()
export default  {
    filter
}
  