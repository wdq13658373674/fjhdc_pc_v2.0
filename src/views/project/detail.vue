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

    <div class="tab-box" :class="{active:tabIndex==0}">
      <div id="project-box1" class="content mb60" v-html="info.detail_content">
      </div>
    </div>

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
        <div class="right-box pull-right" v-html="info.support.content">

        </div>
      </div>
    </div>

    <div class="tab-box" :class="{active:tabIndex==2}">
      <div id="project-box3" class="content mb60">
        <!--列表 start-->
        <ul id="proList" class="pro-list clearfix">
          <li class="item" v-for="item in info.schedule">
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
          <div class="back"><a href="javascript:void(0)" onclick="$(this).parents('#project-box3').removeClass('active');">返回>></a></div>
          <div class="top mt20 clearfix">
            <div class="top-schedule active">
              <div class="descri pull-left">
                <div class="title">A-5-1户型</div>

                <div class="dsc-item">
                  <span class="tit">户型结构</span>
                  <span class="con">三室两厅两卫</span>
                </div>
                <div class="dsc-item">
                  <span class="tit">建筑面积</span>
                  <span class="con">约118 <span class="gray">m<sup>2</sup></span></span>
                </div>
                <div class="dsc-item">
                  <span class="tit">户型描述</span>
                  <span class="con">约82平米的套二，大小适中，明厨明卫，动静分离。入户花园面积较大，作为入户的过渡空间，较好地保证了室内的私密性</span>
                </div>
              </div>
              <div class="flash pull-right">
                <!-- Swiper start -->
                <div id="gallery0" class="swiper-container gallery-top" style="width:100%;height:386px;border: 1px solid #cbbfaa;background:#fff;">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;"></div>
                    <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;"></div>
                    <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;"></div>
                    <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;"></div>
                    <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;"></div>
                  </div>
                </div>
                <div class="thumbs-box">
                  <div id="thumbs0" class="swiper-container gallery-thumbs mt10" style="width:680px;height:115px;background:#fff;">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" style="background:url('@/assets/images/test/house.png') center no-repeat;">
                        <p class="caption">户型图1</p>
                      </div>
                      <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;">
                        <p class="caption">户型图2</p>
                      </div>
                      <div class="swiper-slide" style="background:url('@/assets/images/test/house.png') center no-repeat;">
                        <p class="caption">户型图3</p>
                      </div>
                      <div class="swiper-slide" style="background:url('@/assets/images/test/house.png') center no-repeat;">
                        <p class="caption">户型图4</p>
                      </div>
                      <div class="swiper-slide" style="background:url('@/assets/images/test/house.png') center no-repeat;">
                        <p class="caption">户型图5</p>
                      </div>
                    </div>
                  </div>

                  <!-- Add Arrows -->
                  <div class="swiper-button-prev2 gallery-btn"> < </div>
                  <div class="swiper-button-next2 gallery-btn"> > </div>
                  <!-- Swiper end -->
                </div>
              </div>
            </div>
            <div class="top-schedule">
              <div class="descri pull-left">
                <div class="title">A-5-1户型</div>

                <div class="dsc-item">
                  <span class="tit">户型结构</span>
                  <span class="con">三室两厅两卫</span>
                </div>
                <div class="dsc-item">
                  <span class="tit">建筑面积</span>
                  <span class="con">约118 <span class="gray">m<sup>2</sup></span></span>
                </div>
                <div class="dsc-item">
                  <span class="tit">户型描述</span>
                  <span class="con">约82平米的套二，大小适中，明厨明卫，动静分离。入户花园面积较大，作为入户的过渡空间，较好地保证了室内的私密性</span>
                </div>
              </div>
              <div class="flash pull-right">
                <!-- Swiper start -->
                <div id="gallery1" class="swiper-container gallery-top" style="width:100%;height:386px;border: 1px solid #cbbfaa;background:#fff;">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;"></div>
                    <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;"></div>
                    <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;"></div>
                    <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;"></div>
                    <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;"></div>
                  </div>
                </div>
                <div class="thumbs-box">
                  <div id="thumbs1" class="swiper-container gallery-thumbs mt10" style="width:680px;height:115px;background:#fff;">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" style="background:url('@/assets/images/test/house.png') center no-repeat;">
                        <p class="caption">户型图1</p>
                      </div>
                      <div class="swiper-slide" style="background:url('@/assets/images/test/house.jpg') center no-repeat;">
                        <p class="caption">户型图2</p>
                      </div>
                      <div class="swiper-slide" style="background:url('@/assets/images/test/house.png') center no-repeat;">
                        <p class="caption">户型图3</p>
                      </div>
                      <div class="swiper-slide" style="background:url('@/assets/images/test/house.png') center no-repeat;">
                        <p class="caption">户型图4</p>
                      </div>
                      <div class="swiper-slide" style="background:url('@/assets/images/test/house.png') center no-repeat;">
                        <p class="caption">户型图5</p>
                      </div>
                    </div>
                  </div>

                  <!-- Add Arrows -->
                  <div class="swiper-button-prev2 gallery-btn"> < </div>
                  <div class="swiper-button-next2 gallery-btn"> > </div>
                  <!-- Swiper end -->
                </div>
              </div>
            </div>
          </div>

          <div class="bottom mt30">
            <div class="house-msg-list clearfix">
              <label class="check-label">
                <input class="check-input" type="radio" name="type" checked>
                <div class="msg-item">二室两厅两卫</div>
              </label>
              <label class="check-label">
                <input class="check-input" type="radio" name="type">
                <div class="msg-item">二室两厅两卫</div>
              </label>
              <label class="check-label">
                <input class="check-input" type="radio" name="type">
                <div class="msg-item">二室两厅两卫</div>
              </label>
            </div>
          </div>
        </div>
        <!--详情 end-->
      </div>
    </div>
  </div>
</template>

<script>
    import { getProjectInfo } from '@/api/info.js'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    export default {
      name: "index",
      data(){
        return {
          IMG_HOST:global.IMG_HOST || '',
          info:[],
          tabs:['项目介绍','周边配套','建设进度'],
          tabIndex:0
        }
      },
      mounted(){
        this.getInfo();
        this.setSwiper();
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
            "project_id":this.$route.query.id
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
         * 设置幻灯片
         */
        setSwiper:function () {
          setTimeout(function () {
            var s =  new Swiper('#gallery', {
              prevText: '',
              nextText: '',
              directionNav: false,
              slideshowSpeed: 4000,
              animationSpeed: 400,
              touch: true,
              pagination: {
                el: '.swiper-pagination',
              },
            });
          }, 100)
        },
      }
    }
</script>

<style lang="scss">
  $host:'../../assets/';
  @import "../../assets/scss/project";
</style>
