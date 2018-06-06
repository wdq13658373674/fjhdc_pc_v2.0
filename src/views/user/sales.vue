<template>
  <div>
    <!--header-->
    <headers></headers>
    <!--header-->

    <div class="user-project-wrap min-width">
      <!--crumbs-->
      <div class="user-crumbs clearfix">
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
          <div class="item active">销售报表</div>
          <div class="item">财务报表</div>
        </div>

        <!--销售计划管理 start-->
        <div class="tab-box active">
          <div id="project-box1" class="content">
            <div class="tz-line-title mt50">
              <span class="title">总销售计划</span>
              <div class="line"></div>
            </div>
            <table class="project-table mt20">
              <thead>
              <tr>
                <td>物业类型</td>
                <td>总数量（套/个）</td>
                <td>累计报名</td>
                <td>累计认筹</td>
                <td>累计签约</td>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>洋房</td>
                <td>200</td>
                <td>20</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>洋房</td>
                <td>200</td>
                <td>20</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr class="total">
                <td>合计</td>
                <td>200</td>
                <td>20</td>
                <td>0</td>
                <td>0</td>
              </tr>
              </tbody>
            </table>

            <div class="tz-line-title mt90">
              <span class="title">洋房月销售情况</span>
              <div class="line"></div>
            </div>

            <div class="date-box clearfix">
              <div class="input-group">
                <input class="input input-date" value="1992-02-07" type="text">
                <span class="Validform_checktip ml20"></span>
              </div>

              <div class="input-group">
                <input class="input input-date" value="1992-02-07" type="text">
                <span class="Validform_checktip ml20"></span>
              </div>
            </div>

            <table class="project-table mt20 mb60">
              <thead>
              <tr>
                <td>日期</td>
                <td>报名</td>
                <td>认筹</td>
                <td>签约</td>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>2017年3月</td>
                <td>200</td>
                <td>450</td>
                <td>24%</td>
              </tr>
              <tr>
                <td>2017年3月</td>
                <td>200</td>
                <td>450</td>
                <td>24%</td>
              </tr>
              <tr class="total">
                <td>合  计</td>
                <td>1500</td>
                <td>0</td>
                <td>0</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!--收入计划管理 start-->
        <div class="tab-box">
          <div id="project-box2" class="content">
            <div class="title mt50">总收入明细</div>
            <table class="project-table mt20">
              <thead>
              <tr>
                <td>收入明细</td>
                <td>预算收入（元）</td>
                <td>累计收入（元）</td>
                <td>累计完成率</td>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>股金</td>
                <td>20,800,000.00</td>
                <td>21,150,000.00</td>
                <td>24%</td>
              </tr>
              <tr>
                <td>股金</td>
                <td>20,800,000.00</td>
                <td>21,150,000.00</td>
                <td>24%</td>
              </tr>
              <tr>
                <td>合计</td>
                <td>20,800,000.00</td>
                <td>21,150,000.00</td>
                <td>24%</td>
              </tr>
              </tbody>
            </table>

            <div class="title mt50">月收入明细</div>
            <table class="project-table mt20 mb60">
              <thead>
              <tr>
                <td>日期</td>
                <td>计划</td>
                <td>实际</td>
                <td>完成率</td>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>2017年3月</td>
                <td>200</td>
                <td>450</td>
                <td>24%</td>
              </tr>
              <tr>
                <td>2017年3月</td>
                <td>200</td>
                <td>450</td>
                <td>24%</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headers from './header'
  export default {
    name: "layout",
    components: {
      headers,
    }
  }
</script>
<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/userSales";
</style>
