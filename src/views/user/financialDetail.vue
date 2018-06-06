<template>
  <!--财务报表详情-->
  <div id="project-box3" class="content">
    <!--返回-->
    <router-link :to="{name:'UserFinancial'}" class="back-btn"> << 返回</router-link>

    <div class="tz-line-title mt50">
      <span class="title">2017年5月收入明细</span>
      <div class="line"></div>
    </div>
    <table class="project-table mt20">
      <thead>
      <tr>
        <td>名称</td>
        <td>金额（元）</td>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>股金</td>
        <td>200,200.00</td>
      </tr>
      <tr>
        <td>股金</td>
        <td>200,200.00</td>
      </tr>
      <!--合计-->
      <tr class="total">
        <td>合计</td>
        <td>200,200.00</td>
      </tr>
      </tbody>
    </table>

    <div class="tz-line-title mt50">
      <span class="title">2017年5月支出明细</span>
      <div class="line"></div>
    </div>
    <table class="project-table mt20">
      <thead>
      <tr>
        <td>名称</td>
        <td>金额（元）</td>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>股金</td>
        <td>200,200.00</td>
      </tr>
      <tr>
        <td>股金</td>
        <td>200,200.00</td>
      </tr>
      <!--合计-->
      <tr class="total">
        <td>合计</td>
        <td>200,200.00</td>
      </tr>
      </tbody>
    </table>

    <div class="tz-line-title mt50">
      <span class="title">2017年5月余额明细</span>
      <div class="line"></div>
    </div>
    <table class="project-table mt20">
      <thead>
      <tr>
        <td>名称</td>
        <td>金额（元）</td>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>股金</td>
        <td>200,200.00</td>
      </tr>
      <tr>
        <td>股金</td>
        <td>200,200.00</td>
      </tr>
      <!--合计-->
      <tr class="total">
        <td>合计</td>
        <td>200,200.00</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "financialDetail"
    }
</script>

<style scoped>

</style>
