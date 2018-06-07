// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

import * as filters from '@/libs/filter'
import pagination from 'vue_pagination';
import utils from '@/libs/util.js'
import verify from "vue-verify-plugin";

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
    token:storeJs('token') ? storeJs('token') : {},//token值
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
  components: { App },
  template: '<App/>'
})
