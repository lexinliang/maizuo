import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 import Mint from 'mint-ui';
 import 'mint-ui/lib/style.css'
  Vue.use(Mint); 
import "./common"
Vue.config.productionTip = false
Vue.prototype.timestampToTime = function (timestamp) {
  var date = new Date(timestamp * 1000);   //timestamp 为10位需*1000，timestamp 为13位的话不需乘1000
  var Y = date.getFullYear();
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) ;
  var D = (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate()) ;
  var h = (date.getHours() < 10 ? '0'+ date.getHours() : date.getHours()) ;
  var m = (date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes());
  var s = (date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds());
  return {Y,M,D,h,m,s};
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
