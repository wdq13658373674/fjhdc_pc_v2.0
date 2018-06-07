// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import * as filters from '@/libs/filter'
import pagination from 'vue_pagination';

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
 * 分页
 * **/
Vue.use(pagination);

/**
 * 路由全局拦截器
 * **/
router.beforeEach((to,from,next)=>{
  /**登陆拦截**/
  /*if (to.meta.requireAuth){
    if (store.state.userInfo.user_id) {
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: router.currentRoute.fullPath}
      })
    }
  }*/
  next()
})

/**vue实列**/
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
