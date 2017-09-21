import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import axios from 'axios'
import Loading from './components/loading'
import stores from './store/store'
import filters from './filter'

import './assets/css/base.css'

Vue.filter('normalTime',filters.normalTime);
// Object.keys(filters).forEach(key => Vue.filter(key, filters[key])) //ES6 语法规则


Vue.use(Loading); //use 使用全局组件
Vue.use(VueRouter); //use 使用全局组件

Vue.prototype.$http=axios; //将axios对象绑定到Vue的$http原型上

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  stores.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  stores.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

var router = new VueRouter({
	mode:'history', //路径的切换模式，改成history模式
	scrollBehavior: () => ({ y: 0 }), //滚动条置顶
	routes
})
new Vue({
  el: '#app',
  store:stores,
  router,
  render: h => h(App)
})
