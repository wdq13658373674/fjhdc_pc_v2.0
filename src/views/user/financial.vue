<template>
  <!--财务报表 start-->
  <div id="project-box2" class="content">
    <div class="tz-line-title mt50">
      <span class="title">财务报表</span>
      <div class="line"></div>
    </div>
    <table class="project-table mt20">
      <thead>
      <tr>
        <td>日期</td>
        <td>收入（元）</td>
        <td>支出（元）</td>
        <td>余额（元）</td>
        <td></td>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>2017年5月</td>
        <td>200,200.00</td>
        <td>200,200.00</td>
        <td>200,200.00</td>
        <router-link tag="td" :to="{name:'UserFinancialDetail'}" class="link">查看明细</router-link>
      </tr>
      <tr>
        <td>2017年5月</td>
        <td>200,200.00</td>
        <td>200,200.00</td>
        <td>200,200.00</td>
        <td class="link">查看明细</td>
      </tr>
      <!--合计-->
      <tr class="total">
        <td>合计</td>
        <td>200,200.00</td>
        <td>200,200.00</td>
        <td>200,200.00</td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "financial"
    }
</script>

<style scoped>

</style>
