<template>
  <!--个人中心-参与项目详情-->
  <div>
    <!--header-->
    <headers></headers>
    <!--header-->

    <div class="user-project-wrap min-width">
      <!--crumbs-->
      <div class="tz-user-crumbs clearfix">
        <div class="crumbs mt20 pull-right">
          <a href="/">房计划地产首页 </a> &gt;
          <router-link class="about" :to="{name:'User'}">个人中心</router-link> &gt;
          <router-link class="about" :to="{name:'UserProject'}">参与项目</router-link> &gt;
          <span>详情</span>
        </div>
      </div>

      <!--project-container-->
      <div class="user-project-detail user-project-container mt20">
        <div class="project-content clearfix">
          <div class="img pull-left"><img :src="IMG_HOST+info.pro.cover" alt=""></div>

          <div class="content pull-right">
            <h1 class="f20">{{info.pro.title}}</h1>

            <ul class="msg-list clearfix">
              <li class="item">
                <div class="tit">项目预计投资金额（元）</div>
                <div class="con">{{info.pro.max_amount}}</div>
              </li>
              <li class="item">
                <div class="tit">您的投资金额（元）</div>
                <div class="con">{{info.real_amount}}</div>
              </li>
              <li class="item">
                <div class="tit">您的投资占比</div>
                <div class="con">{{(info.real_amount/info.pro.max_amount)*100 | formatMoney}} %</div>
              </li>
            </ul>

            <div class="user-hr"></div>
            <ul class="msg-list2 clearfix">
              <li class="item">
                <div class="tit">地块位置</div>
                <div class="con">{{info.pro.region}}</div>
              </li>
              <li class="item">
                <div class="tit">容积率</div>
                <div class="con">{{info.pro.ratio}}</div>
              </li>
              <li class="item">
                <div class="tit">地块编号</div>
                <div class="con">{{info.pro.land_code}}</div>
              </li>
              <li class="item">
                <div class="tit">绿化率</div>
                <div class="con">{{info.pro.green}}</div>
              </li>
              <li class="item">
                <div class="tit">地块面积</div>
                <div class="con">{{info.pro.land_area}} <span class="yellow">m<sup>2</sup></span></div>
              </li>
              <li class="item">
                <div class="tit">建筑密度</div>
                <div class="con">{{info.pro.built_density}}</div>
              </li>
            </ul>
          </div>
        </div>

        <!--tab-->
        <div id="project-tab" class="mt60">
          <router-link :to="{name:'UserSales',query:{id:info.id,pid:info.project_id}}" class="item" :class="{active : $route.name=='UserSales'}">销售报表</router-link>
          <router-link :to="{name:'UserFinancial',query:{id:info.id,pid:info.project_id}}" class="item" :class="{active : $route.name=='UserFinancial' || $route.name=='UserFinancialDetail'}">财务报表</router-link>
        </div>

        <!--tab-box-->
        <div class="tab-box active">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headers from './header'
  import { getOneMyProject } from '@/api/info.js'
  import {mapState} from 'vuex'

  export default {
    name: "report",
    components: {
      headers,
    },
    data(){
      return {
        IMG_HOST:global.IMG_HOST || '',
        info:[]
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getProject();
    },
    methods:{
      /**
       * 获取当前用户信息
       * **/
      async getProject(){
        var params={
          "user_id":this.userInfo,
          "id":this.$route.query.id,
        };
        let res =await getOneMyProject(params);
        if(res){
          this.info=res.ret;
        }
      },
    }
  }
</script>
<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/userSales";
</style>
