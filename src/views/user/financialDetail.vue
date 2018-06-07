<template>
  <!--财务报表详情-->
  <div id="project-box3" class="content">
    <!--返回-->
    <router-link :to="{name:'UserFinancial',query:{id:id,pid:pid}}" class="back-btn"> << 返回</router-link>

    <div class="tz-line-title mt50">
      <span class="title">{{balance.year}}年{{balance.month}}月收入明细</span>
      <div class="line"></div>
    </div>
    <table class="project-table mt20">
      <thead>
      <tr>
        <td style="width: 502px">名称</td>
        <td>金额（元）</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="item in expenditure">
        <td>{{item.title}}</td>
        <td>{{item.amount | formatMoney}}</td>
      </tr>
      <!--合计-->
      <tr class="total">
        <td>合计</td>
        <td>{{expenditureCount | formatMoney}}</td>
      </tr>
      </tbody>
    </table>

    <div class="tz-line-title mt50">
      <span class="title">{{balance.year}}年{{balance.month}}月支出明细</span>
      <div class="line"></div>
    </div>
    <table class="project-table mt20">
      <thead>
      <tr>
        <td style="width: 502px">名称</td>
        <td>金额（元）</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="item in income">
        <td>{{item.title}}</td>
        <td>{{item.amount | formatMoney}}</td>
      </tr>
      <!--合计-->
      <tr class="total">
        <td>合计</td>
        <td>{{incomeCount | formatMoney}}</td>
      </tr>
      </tbody>
    </table>

    <div class="tz-line-title mt50">
      <span class="title">{{balance.year}}年{{balance.month}}月余额明细</span>
      <div class="line"></div>
    </div>
    <table class="project-table mt20">
      <thead>
      <tr>
        <td style="width: 502px">名称</td>
        <td>金额（元）</td>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>现金</td>
        <td>{{balance.cash | formatMoney}}</td>
      </tr>
      <tr>
        <td>银行存款</td>
        <td>{{balance.bank_cash | formatMoney}}</td>
      </tr>
      <!--合计-->
      <tr class="total">
        <td>合计</td>
        <td>{{parseFloat(balance.cash)+parseFloat(balance.bank_cash) | formatMoney}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getOneFinance } from '@/api/info.js'

export default {
  name: "financialDetail",
  data(){
    return {
      id: this.$route.query.id,
      pid: this.$route.query.pid,
      expenditure: [],
      expenditureCount: 0,
      income: [],
      incomeCount: 0,
      balance: [],
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
        "cash_id": this.$route.query.cid
      };
      let res = await getOneFinance(params);
      if (res["code"]) {
        this.expenditure = res.ret.expenditure;
        this.income = res.ret.income;
        this.balance = res.ret.balance;

        this.saleCountSUM();
      }
    },

    /**
     * 计算总销售数据
     */
    saleCountSUM: function () {
      var that = this;
      this.expenditure.find(item=> {
        that.expenditureCount += parseFloat(item.amount);
      });

      this.income.find(item=> {
        that.incomeCount += parseFloat(item.amount);
      });
    },


  }
}
</script>

<style scoped>

</style>
