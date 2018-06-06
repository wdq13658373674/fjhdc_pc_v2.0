<template>
  <div>
    <!--banner-->
    <div class="tz-index-banner"></div>

    <!--企业动态-->
    <div class="tz-pro-title">
      <span class="span1">企业动态</span>
      <span class="span2">BUSINESS MOVEMENT</span>
    </div>

    <!--新闻列表-->
    <div class="tz-news-list">
      <div class="news-list">
        <!--<a class="item" href="#">
          <span class="date">2018.05.24 </span>
          横横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科横琴联手万科琴联手万科，全国首个物业城市启动建设
        </a>-->
        <router-link class="item" :to="{name:'NewsDetail',query:{
          id:items.id
        }}" v-for="(items,index) in newsList" :key="index">
          <span class="date">{{items.create_time | stampToDate}} </span>
          {{items.title}}
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import { postNews } from '@/api/info.js'

  export default {
      name: "news",
      data(){
        return {
          newsList:[]
        }
      },
      mounted(){
        this.getNewsList();
      },
      methods:{
        /**
         * 获取新闻列表
         * **/
        async getNewsList(){
          const params={
            page:1
          }

          let res=await postNews(params);

          if(res){
            this.newsList=res.ret.data;
          }
        },
      }
    }
</script>

<style lang="scss">
  $host:'../../assets/';
  @import "../../assets/scss/news";
</style>
