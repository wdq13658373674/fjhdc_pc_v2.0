<template>
  <div>
    <div class="tz-index-title">
      <div class="bg">
        <span>专注房地产开发管理</span>
        <span class="ml30">为客户创造最大利益</span>
      </div>
    </div>
    <div class="tz-index-teams">
      <ul class="teams-list clearfix">
        <li class="item">
          <a class="link" href="#">
            <div class="img"><img src="@/assets/images/img/a_con101.png" alt=""></div>
            <div class="tit">专业管理团队</div>
            <div class="en">MANAGEMENT TEAM</div>
          </a>
        </li>
        <li class="item">
          <a class="link" href="#">
            <div class="img"><img src="@/assets/images/img/a_con102.png" alt=""></div>
            <div class="tit">专业销售团队</div>
            <div class="en">SALES TEAM</div>
          </a>
        </li>
        <li class="item">
          <a class="link" href="#">
            <div class="img"><img src="@/assets/images/img/a_con103.png" alt=""></div>
            <div class="tit">专业物业团队</div>
            <div class="en">PROPERTY TEAM</div>
          </a>
        </li>
        <li class="item">
          <a class="link" href="#">
            <div class="img"><img src="@/assets/images/img/a_con104.png" alt=""></div>
            <div class="tit">专业科技团队</div>
            <div class="en">TECHLNOLOGY TEAM</div>
          </a>
        </li>
      </ul>
    </div>

    <!--项目-->
    <div class="tz-pro-title">
      <span class="span1">管理项目</span>
      <span class="span2">MANAGEMENT ITEM</span>
      <a class="link" href="#">+ MORE</a>
    </div>
    <div class="tz-index-project">
      <div class="project-list clearfix">
        <a class="item" href="#">
          <div class="img-box" style="background-image: url('@/assets/images/test/house.jpg')"></div>
          <div class="con-box">
            <p class="desc">房计划·诚远御府</p>
          </div>
        </a>
        <a class="item" href="#">
          <div class="img-box" style="background-image: url('@/assets/images/test/house.jpg')"></div>
          <div class="con-box">
            <p class="desc">房计划</p>
          </div>
        </a>
        <a class="item" href="#">
          <div class="img-box" style="background-image: url('@/assets/images/test/house.jpg')"></div>
          <div class="con-box">
            <p class="desc">房计划房计划房计划房计划房计划·诚远御府</p>
          </div>
        </a>
      </div>

    </div>

    <!--企业动态-->
    <div class="tz-pro-title">
      <span class="span1">企业动态</span>
      <span class="span2">BUSINESS MOVEMENT</span>
      <a class="link" href="#">+ MORE</a>
    </div>
    <div class="tz-index-news clearfix">
      <div class="news-list pull-left">
        <a class="item" href="#">
          <span class="date">2018.05.24 </span>
          横横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科琴联手万科，全国首个物业城市启动建设
        </a>
        <a class="item" href="#">
          <span class="date">2018.05.24 </span>
          横横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科琴联手万科，全国首个物业城市启动建设
        </a>
        <a class="item" href="#">
          <span class="date">2018.05.24 </span>
          横横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科琴联手万科，全国首个物业城市启动建设
        </a>
        <a class="item" href="#">
          <span class="date">2018.05.24 </span>
          横横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科琴联手万科，全国首个物业城市启动建设
        </a>
        <a class="item" href="#">
          <span class="date">2018.05.24 </span>
          横横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科琴联手万科，全国首个物业城市启动建设
        </a>
      </div>

      <div class="about-box pull-right">
        <div class="title">房计划首家物业二手房专营店诞生</div>
        <div class="con">作为万科作为万科物业旗下房屋资产服务机构作为万科物业旗下房屋资产服务机构作为万科物业旗下房屋资产服务机构作为万科物业旗下房屋资产服务机构作为万科物业旗下房屋资产服务机构物业旗下房屋资产服务机构“万科租售中心”，5月28日将在全国百城租售门店同步更名为“朴邻·万科物业二手房专营店”（以下简称为“朴邻”）。标志着国内物业行业的首家二手房营店诞生，新品牌朴邻将集中全力深化接管小区的二手房业务，持续为业主实现不动产的保值增值，让客户感受经纪服务的信任和温度。</div>
        <div>
          <a class="link" href="#">查看详情</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { getIndex } from '@/api/info.js'

  export default {
      name: "index",
      data(){
        return {
          projectList:[]
        }
      },
      mounted(){
        this.getProjectList();
      },
      methods:{
        /**
         * 获取项目列表
         * **/
        async getProjectList(){
          let res =await getIndex();

          if(res){
            this.projectList=res.ret.data;
          }
        },
      }
    }
</script>

<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/index";
</style>
