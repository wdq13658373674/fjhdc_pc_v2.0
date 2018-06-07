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
      <tr v-for="item in countList">
        <td>{{item.year}}年{{item.month}}月</td>
        <td>{{item.expenditure | formatMoney}}</td>
        <td>{{item.income | formatMoney}}</td>
        <td>{{item.total_amounts | formatMoney}}</td>
        <router-link tag="td" :to="{name:'UserFinancialDetail',query:{id:id,pid:pid,cid:item.id}}" class="link">查看明细</router-link>
      </tr>

      <!--合计-->
      <tr class="total">
        <td>合计</td>
        <td>{{saleCount.sr | formatMoney}}</td>
        <td>{{saleCount.zc | formatMoney}}</td>
        <td>{{saleCount.ye | formatMoney}}</td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getFinance } from '@/api/info.js'

    export default {
      name: "financial",
      data(){
        return {
          id: this.$route.query.id,
          pid: this.$route.query.pid,
          countList: [],
          saleCount: {
            sr: 0,
            zc: 0,
            ye: 0
          }
        }
      },
      mounted(){
        this.getCount();
      },
      methods: {
        /**
         * 获取财务报表
         * **/
        async getCount(){
          var params = {
            "project_id": this.pid
          };
          let res = await getFinance(params);
          if (res["code"]) {
            this.countList = res.ret;

            this.saleCountSUM();
          }
        },

        /**
         * 计算总销售数据
         */
        saleCountSUM: function () {
          var that = this;
          this.countList.find(item=> {
            that.saleCount.sr += parseFloat(item.expenditure);
            that.saleCount.zc += parseFloat(item.income);
            that.saleCount.ye += parseFloat(item.total_amounts);
          });
        },


      }
    }
</script>

<style scoped>

</style>
