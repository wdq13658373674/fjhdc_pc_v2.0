<template>
  <header class="header min-width">
    <div class="top-box">
      <div class="top clearfix">
        <!--登陆前-->
        <router-link class="about" target="_blank" :to="{name:'About'}">关于我们</router-link>
        <div class="before pull-right" v-if="!userInfo">
          <router-link :to="{name:'Login'}">登陆</router-link>
          <router-link :to="{name:'Register'}">注册</router-link>
        </div>
        <!--登陆后-->


        <div class="after pull-right" v-else>
          <div class="menu-box">
            <span class="icon"></span>
            <ul class="menu-list">
              <li class="item">
                <router-link :to="{name:'User'}" class="icon ico1">个人中心</router-link>
              </li>
              <li class="item">
                <a class="icon ico2" @click.prevent="exit">退出</a>
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
    <div class="nav clearfix">
      <a href="/" class="pull-left">
        <img src="@/assets/images/public/logo.png" alt="">
      </a>

      <div class="menu pull-right">
        <router-link class="item active" to="/">首页</router-link>
        <a class="item" target="_blank" href="http://www.fjhok.com/Project/index.html">定制购房</a>
        <a class="item" target="_blank" href="http://www.fjhok.com/Public/wy/t/wy.html">房计划物业</a>
        <a class="item" target="_blank" href="http://cq.tuanzhuanw.com/">团转到家</a>
        <a class="item" target="_blank" href="http://www.fjhok.com/Public/zx/t/wy.html">房计划装修</a>
      </div>
    </div>
  </header>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
    export default {
      name: "headers",
      computed:{
        ...mapState(['userInfo'])
      },
      methods:{
        /**
         * 退出
         * **/
        ...mapMutations(['update_userInfo']),
        exit(){
          this.update_userInfo('');
          this.$router.push('/');
        }
      }
    }
</script>
