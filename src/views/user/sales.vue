<template>
  <!--销售报表 start-->
  <div id="project-box1" class="content">
    <div class="tz-line-title mt50">
      <span class="title">销售报表</span>
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
      <tr v-for="(items,index) in saleCountList">
        <td>{{items.title}}</td>
        <td>{{items.room_sum}}</td>
        <td>{{items.signup_num}}</td>
        <td>{{items.custom_num}}</td>
        <td>{{items.contract_num}}</td>
        <td class="link" v-on:click="showSaleList(items.title,items.id)">查看明细</td>
      </tr>

      <!--合计-->
      <tr class="total">
        <td>合计</td>
        <td>{{saleCount.room_sum}}</td>
        <td>{{saleCount.signup_num}}</td>
        <td>{{saleCount.custom_num}}</td>
        <td>{{saleCount.contract_num}}</td>
        <td></td>
      </tr>
      </tbody>
    </table>

    <div class="tz-line-title mt90" v-if="check">
      <span class="title">{{build_type}}月销售情况</span>
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
    <table class="project-table mt20 mb60" v-if="check">
      <thead>
      <tr>
        <td>日期</td>
        <td>报名</td>
        <td>认筹</td>
        <td>签约</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(items,index) in saleList">
        <td>{{items.year}}年{{items.month}}月</td>
        <td>{{items.signup_num}}</td>
        <td>{{items.custom_num}}</td>
        <td>{{items.contract_num}}</td>
      </tr>
      <tr class="total">
        <td>合  计</td>
        <td>{{saleCount.signup_d}}</td>
        <td>{{saleCount.custom_d}}</td>
        <td>{{saleCount.contract_d}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { getProjectPlan,getProjectPlanList } from '@/api/info.js'

  export default {
    name: "sales",
    data(){
      return {
        pid: this.$route.query.pid,
        saleCountList: [],
        saleList: [],
        saleCount: {
          room_sum: 0,
          signup_num: 0,
          custom_num: 0,
          contract_num: 0,
          signup_d: 0,
          custom_d: 0,
          contract_d: 0
        },
        check: false,
        build_type: "",
      }
    },
    mounted(){
      this.getCount();
    },
    methods: {
      /**
       * 获取总销售数据
       * **/
      async getCount(){
        var params = {
          "project_id": this.pid
        };
        let res = await getProjectPlan(params);
        if (res["code"]) {
          this.saleCountList = res.ret;

          this.saleCountSUM();
        }
      },

      /**
       * 获取销售列表
       * @param title
       * @param id
       */
      async showSaleList(title, id) {
        this.check = true;
        this.build_type = title;

        var params = {
          "type_id":id
        };
        let res = await getProjectPlanList(params);
        if (res["code"]) {
          this.saleList = res.ret;

          this.saleSUM();
        }
      },

      /**
       * 计算总销售数据
       */
      saleCountSUM: function () {
        var that = this;
        this.saleCountList.find(item=> {
          that.saleCount.room_sum += item.room_sum;
          that.saleCount.signup_num += item.signup_num;
          that.saleCount.custom_num += item.custom_num;
          that.saleCount.contract_num += item.contract_num;
        });
      },

      /**
       * 单项计算
       */
      saleSUM: function () {
        var that = this;
        that.saleCount.signup_d = 0;
        that.saleCount.custom_d = 0;
        that.saleCount.contract_d = 0;

        this.saleList.find(item=> {
          that.saleCount.signup_d += item.signup_num;
          that.saleCount.custom_d += item.custom_num;
          that.saleCount.contract_d += item.contract_num;
        });
      },


    }
  }
</script>
<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/userSales";
</style>
