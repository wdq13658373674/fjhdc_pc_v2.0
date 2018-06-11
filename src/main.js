// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

import * as filters from '@/libs/filter'
import utils from '@/libs/util.js'
import pagination from 'vue_pagination';
import verify from "vue-verify-plugin";

import {DatePicker,Select,Option,Message} from 'iview';
import '@/theme/index.less';

Vue.config.productionTip = false

/**
 * 接口请求设置
 */
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  config.headers['appid'] = 'fjhdc';
  config.headers['authkey'] = 'FJHDC2018';
  config.headers['user_agent'] = 'FJH_VISITER';

  return config;
});

/**
 * iView
 * **/
Vue.component('DatePicker', DatePicker);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.prototype.$message = Message;
/**
 * 全局ajax访问域名
 * **/
global.API_HOST="";

/**
 *
 * 全局图片域名地址
 * */
global.IMG_HOST="http://res.2.fjhok.com/res/image/";

/**
 * 全局过滤器
 * **/
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/**
 * 全局工具函数
 * **/
Vue.prototype.$utils = utils;

/**
 * 分页
 * **/
Vue.use(pagination);

/**
 * 表单验证
 * **/
const myRules={
  rule:{
    test:function(val){
      if(!val) {
        return false
      }
      return true;
    },
    message:"请同意协议"
  }

}
Vue.use(verify,{
  blur:true,
  rules:myRules
});

/**
 * 弹框
 * **/
var popbox = require('popbox');
Vue.use(popbox);

/**
 * store状态管理
 * **/
Vue.use(Vuex);
const storeJs=require('storejs');
const store = new Vuex.Store({
  state:{
    userInfo:storeJs('userInfo') ? storeJs('userInfo') : '',//userInfo
  },
  mutations:{
    /**
     * 更新用户信息
     * **/
    update_userInfo(state,userInfo){
      state.userInfo=userInfo;
      storeJs.set('userInfo',state.userInfo);
    },
  },
  actions:{

  },
})

/**
 * 路由全局拦截器
 * **/
router.beforeEach((to,from,next)=>{
  /**登陆拦截**/
  if (to.meta.requireAuth){
    if (store.state.userInfo) {
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: router.currentRoute.fullPath}
      })
    }
  }
  next()
})

/**vue实列**/
new Vue({
  el: '#app',
  router,
  store,
  // render: h => h(App)
  components: { App },
  template: '<App/>'
})
