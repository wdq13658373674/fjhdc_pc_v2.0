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
          <a href="#">房计划地产首页 </a> >
          <a href="#">个人中心 </a> >
          <span>推荐客户 </span>
        </div>
      </div>

      <!--project-container-->
      <div  id="project-sales" class="user-project-container mt20">
        <div class="project-content clearfix">
          <div class="img pull-left"><img src="@/assets/images/test/house.jpg" alt=""></div>

          <div class="content pull-right">
            <h1 class="f20">房计划诚远御府</h1>

            <ul class="msg-list clearfix">
              <li class="item">
                <div class="tit">项目总投资（元）</div>
                <div class="con">2000,000,000.00</div>
              </li>
              <li class="item">
                <div class="tit">您的投资额（元）</div>
                <div class="con">500,000.00</div>
              </li>
            </ul>

            <div class="user-hr"></div>
            <ul class="msg-list2 clearfix">
              <li class="item">
                <div class="tit">地块位置</div>
                <div class="con">邻水县西部新城三完小旁边</div>
              </li>
              <li class="item">
                <div class="tit">容积率</div>
                <div class="con">2.0</div>
              </li>
              <li class="item">
                <div class="tit">地块编号</div>
                <div class="con">A-05</div>
              </li>
              <li class="item">
                <div class="tit">绿化率</div>
                <div class="con">45%</div>
              </li>
              <li class="item">
                <div class="tit">地块面积</div>
                <div class="con">100000 <span class="yellow">m<sup>2</sup></span></div>
              </li>
              <li class="item">
                <div class="tit">建筑密度</div>
                <div class="con">55%</div>
              </li>
            </ul>
          </div>
        </div>

        <!--tab-->
        <div id="project-tab" class="mt60">
          <router-link :to="{name:'UserSales'}" class="item" :class="{active : $route.name=='UserSales'}">销售报表</router-link>
          <router-link :to="{name:'UserFinancial'}" class="item" :class="{active : $route.name=='UserFinancial' || $route.name=='UserFinancialDetail'}">财务报表</router-link>
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
  export default {
    name: "report",
    components: {
      headers,
    }
  }
</script>
<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/userSales";
</style>
