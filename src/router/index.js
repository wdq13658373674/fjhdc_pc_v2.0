import Vue from 'vue'
import Router from 'vue-router'

/**template**/
import Header from '@/views/template/header'
import Footer from '@/views/template/footer'

/**首页**/
import Index from '@/views/home'

/**项目详情**/
import ProjectDetail from '@/views/project/detail'

/**登陆注册**/
import Login from '@/views/sign/login'
import Register from '@/views/sign/register'

/**新闻动态**/
import News from '@/views/news/index'
import NewsDetail from '@/views/news/detail'

/**个人中心**/
import UserLayout from '@/views/user/layout'
import User from '@/views/user/index'
import UserProject from '@/views/user/project'
import UserProjectSales from '@/views/user/sales'
import UserMessage from '@/views/user/message'

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
      path: '/project/detail',
      name: 'ProjectDetail',
      components: {
        default: ProjectDetail,
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
    },
    {
      path: '/news/detail',
      name: 'NewsDetail',
      components: {
        default: NewsDetail,
        header: Header,
        footer: Footer,
      },
    },
    {
      path: '/news/index',
      name: 'News',
      components: {
        default: News,
        header: Header,
        footer: Footer,
      },
    },
    /**
     * layout
     * */
    {
      path: '/layout',
      component: UserLayout,
      children: [
        {
          path: '/user',
          name: 'User',
          component: User
        },
        {
          path: '/user/project',
          name: 'UserProject',
          component: UserProject
        },
        {
          path: '/user/message',
          name: 'UserMessage',
          component: UserMessage
        },
      ]
    },
    {
      path: '/user/sales',
      name: 'UserProjectSales',
      components: {
        default: UserProjectSales,
      },
    },
  ]
})
