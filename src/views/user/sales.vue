<template>
  <!--销售报表 start-->
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
        <td></td>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>洋房</td>
        <td>200</td>
        <td>20</td>
        <td>0</td>
        <td>0</td>
        <td class="link">查看明细</td>
      </tr>
      <tr>
        <td>洋房</td>
        <td>200</td>
        <td>20</td>
        <td>0</td>
        <td>0</td>
        <td class="link">查看明细</td>
      </tr>
      <!--合计-->
      <tr class="total">
        <td>合计</td>
        <td>200</td>
        <td>20</td>
        <td>0</td>
        <td>0</td>
        <td></td>
      </tr>
      </tbody>
    </table>

    <div class="tz-line-title mt90">
      <span class="title">洋房月销售情况</span>
      <div class="line"></div>
    </div>
    <!--<div class="date-box clearfix">
      <div class="input-group">
        <input class="input input-date" value="1992-02-07" type="text">
        <span class="Validform_checktip ml20"></span>
      </div>

      <div class="input-group">
        <input class="input input-date" value="1992-02-07" type="text">
        <span class="Validform_checktip ml20"></span>
      </div>
    </div>-->
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
</template>

<script>
  import { getOneMyProject } from '@/api/info.js'

  export default {
    name: "sales",
    data(){
      return {
      }
    },
    mounted(){
    },
    methods:{
    }
  }
</script>
<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/userSales";
</style>
