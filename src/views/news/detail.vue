<template>
  <div>
    <!--banner-->
    <div class="tz-index-banner"></div>

    <div class="tz-news-detail">
      <div class="crumbs mt40">
        <a href="#">首页 </a> >
        <span>企业动态 </span>
      </div>


      <h1 class="title">横琴联手万科，全国首个物业城市启动建设</h1>
      <p class="total">
        <span class="mr20">2018.05.24 </span>
        <span>浏览量</span>
        <span>2052</span>
      </p>
      <div class="tz-content">
        <p style="font-size:16px">5月24日，珠海大横琴投资有限公司与万科物业发展股份有限公司正式签署战略合作框架协议，双方将携手推动“物业城市”管理理念的落地，同时将以珠海大横琴城市公共资源经营管理有限公司为合作载体进行混合所有制改革（简称混改），这标志着横琴新区深化国有企业改革，创建全国“物业城市”试点工作正式启动。</p>
        <p>
          <img src="@/assets/images/test/house.jpg" alt="">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { getIndex } from '@/api/info.js'

  export default {
      name: "news",
      data(){
        return {

        }
      },
      mounted(){

      },
      methods:{
        /**
         * 获取项目列表
         * **/
        async getProjectList(){

        },
      }
    }
</script>

<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/newsDetail";
</style>
