import Vue from 'vue'
import Router from 'vue-router'

/**template**/
import Header from '@/views/template/header'
import Footer from '@/views/template/footer'

/**首页**/
import Index from '@/views/home'

/**登陆注册**/
import Login from '@/views/sign/login'
import Register from '@/views/sign/register'

Vue.use(Router)

export default new Router({
  // mode:'history',
  saveScrollPosition : false,
  linkExactActiveClass:'active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        default: Index,
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
