<template>

  <div id="project-box2" class="content" style="position: relative">
    <!--财务报表 start-->
    <div v-if="!inx">
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
          <td><a v-on:click="getMore(item.id)" class="link">查看明细</a></td>
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
    <!--财务报表 end-->


    <!--财务详情 start-->
    <div v-if="inx">
      <!--返回-->
      <a v-on:click="inx=false" class="back-btn" > &lt;&lt; 返回</a>

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
    <!--财务详情 end-->
  </div>

</template>

<script>
import { getFinance,getOneFinance } from '@/api/info.js'

    export default {
      name: "financial",
      data(){
        return {
          id: this.$route.query.id || 0,
          pid: this.$route.query.pid || 0,
          inx:false,
          countList: [],
          saleCount: {
            sr: 0,
            zc: 0,
            ye: 0
          },
          expenditure: [],
          expenditureCount: 0,
          income: [],
          incomeCount: 0,
          balance: []
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

        /**
         * 获取财务详情报表
         * **/
        async getMore(id){
          this.inx=true;
          var params = {
            "cash_id": id
          };
          let res = await getOneFinance(params);
          if (res["code"]) {
            this.expenditure = res.ret.expenditure;
            this.income = res.ret.income;
            this.balance = res.ret.balance;

            this.saleMoreCountSUM();
          }
        },

        /**
         * 计算总销售数据
         */
        saleMoreCountSUM: function () {
          var that = this;
          that.expenditureCount=0;
          that.incomeCount=0;
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
