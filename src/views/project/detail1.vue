<template>
  <div>
    <div id="project-detail">
      <div class="crumbs mt40">
        <a href="/">房计划地产首页 </a> &gt;
        <span>{{info.title}} </span>
      </div>

      <div class="content clearfix">
        <div class="flash pull-left">
          <!-- Swiper start -->
          <div id="gallery" class="swiper-container gallery-top tz-swiper" style="width:100%;height:450px;background:#fff;">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in info.album" :style="{background:'url('+ IMG_HOST+item.path +') center no-repeat'}" ></div>
            </div>

            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>

        </div>

        <div class="msg pull-left">
          <h1 class="title f20">{{info.title}}</h1>

          <div class="horizontal-line mt50"></div>
          <ul class="msg-list">
            <li class="item">
              <span class="tit">地块位置</span>
              <div class="con">{{info.address}}</div>
            </li>
            <li class="item">
              <span class="tit">地块编号</span>
              <div class="con">{{info.land_code}}</div>
            </li>
            <li class="item">
              <span class="tit">地块面积</span>
              <div class="con">{{info.land_area}} <span class="yellow-light">m<sup>2</sup></span></div>
            </li>
            <li class="item">
              <span class="tit">建筑面积</span>
              <div class="con">{{info.built_area}} <span class="yellow-light">m<sup>2</sup></span></div>
            </li>
            <li class="item">
              <span class="tit">容积率</span>
              <div class="con">{{info.ratio}}</div>
            </li>
            <li class="item">
              <span class="tit">绿化率</span>
              <div class="con">{{info.green}}</div>
            </li>
            <li class="item">
              <span class="tit">建筑密度</span>
              <div class="con">{{info.built_density}}</div>
            </li>
          </ul>
          <div class="horizontal-line mt10"></div>
        </div>
      </div>
    </div>

    <div id="project-tab" class="mt60">
      <div class="item" :class="{active:tabIndex==index}" v-for="(item,index) in tabs" :key="index" @click="tab(index)">{{item}}</div>
    </div>

    <!--详情-->
    <div class="tab-box" :class="{active:tabIndex==0}">
      <div id="project-box1" class="content mb60" v-html="info.detail_content">
      </div>
    </div>

    <!--周边配套-->
    <div class="tab-box" :class="{active:tabIndex==1}">
      <div id="project-box2" class="content mb60 clearfix">
        <div class="left-box pull-left">
          <h1>项目区位图</h1>

          <div class="img-box">
            <div style="position: relative;">
              <img class="img" :src="IMG_HOST+info.support.picture" alt=""/><!--大图路径-->

              <!--hover效果-->
              <a id="map" href="javascript:void(0);" class="dark-mask-box">
                <img class="vr-img zoom-img" layer-src="@/assets/images/test/house.jpg" src="@/assets/images/icons/zoom_add.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div class="right-box pull-right" v-html="info.support.content"></div>
      </div>
    </div>

    <!--建设进度-->
    <div class="tab-box" :class="{active:tabIndex==2}">
      <div id="project-box3" class="content " :class="{active:schedule==0}" >
        <!--列表 start-->
        <ul id="proList" class="pro-list clearfix">
          <li class="item" v-for="item in info.schedule" v-on:click="showDetail(item.id)">
            <div class="date pull-left">
              <p class="year">{{item.progress_time | stampToDate(false,1)}}</p>

              <p class="mon">{{item.progress_time | stampToDate(false,2)}}-{{item.progress_time | stampToDate(false,3)}}</p>
            </div>
            <div class="tit">
              {{item.title}}
            </div>
          </li>
        </ul>
        <!--列表 end-->

        <!--详情 start-->
        <div class="pro-detail">
          <div class="back"><a href="javascript:void(0)"  v-on:click="schedule=1">返回>></a></div>
          <div class="top mt20 clearfix">
            <div class="top-schedule" v-for="(item,key) in scheduleList"  :class="{active:key==imgStatus}">
              <div class="descri pull-left">
                <div class="title">{{item.title}}</div>
                <div class="dsc-item">
                  <span class="tit">进度描述</span>
                  <span class="con" v-html="item.content"></span>
                </div>
              </div>
              <div class="flash pull-right">
                <!-- Swiper start -->
                <div :id="'gallery'+key" class="swiper-container gallery-top" style="width:100%;height:511px;border: 1px solid #cbbfaa;background:#fff;">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="items in item.images" :style="{background:'url('+ IMG_HOST+items.path +') center no-repeat'}" ></div>
                  </div>

                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>
                </div>

              </div>
            </div>
          </div>

          <div class="bottom mt30">
            <div class="house-msg-list clearfix">
              <label class="check-label" v-for="(item,key) in scheduleList" v-on:click="showImgStatus(key)">
                <input class="check-input" type="radio" name="type" />
                <div class="msg-item">{{item.title}}</div>
              </label>
            </div>
          </div>
        </div>
        <!--详情 end-->
      </div>
    </div>

    <!--销售报表-->
    <div class="tab-box" :class="{active:tabIndex==3}">
      <div class="user-project-detail content mb60 ">
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
            <td>{{saleCount.signup_num | formatMoney}}</td>
            <td>{{saleCount.custom_num}}</td>
            <td>{{saleCount.contract_num}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--财务报表 start-->
    <div class="tab-box" :class="{active:tabIndex==4}">
     <div class="user-project-detail content">
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
           <td>{{saleCounts.sr | formatMoney}}</td>
           <td>{{saleCounts.zc | formatMoney}}</td>
           <td>{{saleCounts.ye | formatMoney}}</td>
           <td></td>
         </tr>
         </tbody>
       </table>
     </div>
   </div>

    <!--财务详情-->
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    import { getProjectInfo,getSchedule,getProjectPlan,getProjectPlanList,getFinance} from '@/api/info.js'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    export default {
      name: "index",
      data(){
        return {
          IMG_HOST:global.IMG_HOST || '',
          info:[],
          // tabs:['项目介绍','周边配套','建设进度','销售报表','财务报表'],
          tabIndex:0,
          schedule:1,
          project_id:this.$route.query.pid,
          scheduleList:[],
          imgStatus:0,
          // pid: this.$route.query.pid,

          saleCountList: [],
          saleList: [],
          saleCount: {
            room_sum: 0,
            signup_num: 0,
            custom_num: 0,
            contract_num: 0
          },
          check: false,
          build_type: "",

          countList: [],
          saleCounts: {
            sr: 0,
            zc: 0,
            ye: 0
          }
        }
      },
      mounted(){
        this.getInfo();
        this.setSwiper();
        this.getCount();
        this.getCount2();
      },
      computed:{
        ...mapState(['userInfo']),
        tabs(){
          let arr=['项目介绍','周边配套','建设进度'];
          if(this.userInfo){
            arr=['项目介绍','周边配套','建设进度','销售报表','财务报表'];
          }

          return arr;
        },
      },
      methods:{
        /**
         * tab切换
         * **/
        tab(index){
          this.tabIndex=index;
        },
        /**
         * 获取项目详情
         * **/
        async getInfo(){
          var params={
            "project_id":this.project_id
          };
          let res =await getProjectInfo(params);
          if(res){
            this.info=res.ret;
            if(this.info.support==null){
              this.info.support={
                picture:""
              };
            }
          }
        },

        /**
         * 建设进度详情
         * @param id
         */
        async showDetail(id){
          this.schedule=0;

          var params={
            "pid":id,
            "project_id":this.project_id
          };
          let res =await getSchedule(params);
          if(res){
            this.scheduleList=res.ret;

            this.showImgStatus(0);
          }
        },

        /**
         * 设置幻灯片
         */
        setSwiper:function () {
          setTimeout(function () {
            var s =  new Swiper('#gallery', {
              prevText: '',
              nextText: '',
              autoplay:true,
              directionNav: false,
              slideshowSpeed: 4000,
              animationSpeed: 400,
              touch: true,
              pagination: {
                el: '.swiper-pagination',
                clickable :true,
              },
            });
          }, 100);
        },

        /**
         * 切换图片
         * @param key
           */
        showImgStatus:function(key){
          this.imgStatus=key;

          setTimeout(function () {
            var i =  new Swiper('#gallery'+key, {
              prevText: '',
              nextText: '',
              autoplay:false,
              directionNav: false,
              slideshowSpeed: 4000,
              animationSpeed: 400,
              touch: true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
          }, 100)
        },

        /**
         * 获取总销售数据
         * **/
        async getCount(){
          var params = {
            "project_id": this.project_id
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
            "type_id":this.project_id
          };
          let res = await getProjectPlanList(params);
          if (res["code"]) {
            this.saleList = res.ret;
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
         * 获取财务报表
         * **/
        async getCount2(){
          var params = {
            "project_id": this.project_id
          };
          let res = await getFinance(params);
          if (res["code"]) {
            this.countList = res.ret;

            this.saleCountSUMs();
          }
        },

        /**
         * 计算总销售数据
         */
        saleCountSUMs: function () {
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

<style lang="scss">
  $host:'../../assets/';
  @import "../../assets/scss/project";
  @import "../../assets/scss/userSales";
</style>
