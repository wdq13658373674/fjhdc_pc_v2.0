<template>
  <div>
    <div class="index-title1">
      <div class="bg">
        <span>专注房地产开发管理</span>
        <span class="ml30">为客户创造最大利益</span>
      </div>
    </div>
    <div class="index-teams">
      <ul class="teams-list clearfix">
        <li class="item">
          <a class="link" href="#">
            <div class="img"><img src="@/assets/images/img/a_con101.png" alt=""></div>
            <div class="tit">专业科技团队</div>
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
    <div class="index-projects min-width">

      <div class="index-title2">
        <div class="content">
          <h1 class="con f20">管理项目</h1>
          <h2 class="f10">MANAGE PROJECT</h2>
        </div>
      </div>

      <div class="link-more clearfix  ">
        <a class="pull-right" href="#">查看更多</a>
      </div>

      <div class="project-list">
        <div class="project">
          <a href="#" class="link clearfix">
            <div class="img pull-left"><img src="@/assets/images/test/house.jpg" alt=""></div>

            <div class="content pull-left">
              <div class="title">邻水县西部新城A-01地块</div>
              <div class="border-line mt10"></div>

              <ul class="msg-list clearfix">
                <li class="item">
                  <div class="tit"><i class="icon icon-caret-right"></i>地块位置</div>
                  <div class="con">邻水县西部新城三完小旁边</div>
                </li>
                <li class="item">
                  <div class="tit"><i class="icon icon-caret-right"></i>地块编号</div>
                  <div class="con">A-05</div>
                </li>
                <li class="item">
                  <div class="tit"><i class="icon icon-caret-right"></i>地块面积</div>
                  <div class="con">100000 m<sup>2</sup></div>
                </li>
                <li class="item">
                  <div class="tit"><i class="icon icon-caret-right"></i>容积率</div>
                  <div class="con">2.0</div>
                </li>
                <li class="item">
                  <div class="tit"><i class="icon icon-caret-right"></i>绿化率</div>
                  <div class="con">45%</div>
                </li>
                <li class="item">
                  <div class="tit"><i class="icon icon-caret-right"></i>建筑密度</div>
                  <div class="con">55%</div>
                </li>

              </ul>
            </div>
          </a>
        </div>

        <div class="project">
          <a href="#" class="link clearfix">
            <div class="img pull-left"><img src="@/assets/images/test/house.jpg" alt=""></div>

            <div class="content pull-left">
              <div class="title">邻水县西部新城A-01地块</div>
              <div class="border-line mt10"></div>

              <ul class="msg-list clearfix">
                <li class="item">
                  <div class="tit">地块位置</div>
                  <div class="con">邻水县西部新城三完小旁边</div>
                </li>
                <li class="item">
                  <div class="tit">地块编号</div>
                  <div class="con">A-05</div>
                </li>
                <li class="item">
                  <div class="tit">地块面积</div>
                  <div class="con">100000 m<sup>2</sup></div>
                </li>
                <li class="item">
                  <div class="tit">容积率</div>
                  <div class="con">2.0</div>
                </li>
                <li class="item">
                  <div class="tit">绿化率</div>
                  <div class="con">45%</div>
                </li>
                <li class="item">
                  <div class="tit">建筑密度</div>
                  <div class="con">55%</div>
                </li>

              </ul>
            </div>
          </a>
        </div>
      </div>

      <div class="project-more">
        <a href="#">MANAGE PROJECT</a>
      </div>
    </div>
    <div class="index-partners hide">
      <div class="title">
        <div class="f20">合作伙伴</div>
        <div class="f10 yellow-light">PARTENERS</div>
      </div>

      <div class="partner-list clearfix">
        <a class="item" href="#"></a>
        <a class="item" href="#"></a>
        <a class="item" href="#"></a>
        <a class="item" href="#"></a>
        <a class="item" href="#"></a>
        <a class="item" href="#"></a>
        <a class="item" href="#"></a>
        <a class="item" href="#"></a>
        <a class="item" href="#"></a>
        <a class="item" href="#"></a>
        <a class="item" href="#"></a>
        <a class="item" href="#"></a>
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

<style lang="scss">
  @import "~@/assets/scss/index";
</style>
