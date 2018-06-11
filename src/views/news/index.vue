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

    <!--
      total：总条数
      size：每页显示条目个数不传默认10
      page：设置默认页码，默认1
      changge：页码切换方法触发，比如：传入pageFn方法接收page页码
    -->
    <pageination class="page" :total="pageObj.total" :size="pageObj.per_page" :page="pageObj.current_page" :changge="pageFn" :isUrl="true"></pageination>
  </div>
</template>

<script>
  import { postNews } from '@/api/info.js'

  export default {
      name: "news",
      data(){
        return {
          newsList:[],
          pageObj:{}
        }
      },
      mounted(){
        this.getNewsList();
      },
      methods:{
        /**
         * 获取新闻列表
         * **/
        async getNewsList(page){
          const params={
            page:page
          }

          let res=await postNews(params);
          if(res){
            this.newsList=res.ret.data;

            /*分页*/
            let total=res.ret.total * res.ret.per_page;
            this.pageObj={
              total:total,
              per_page:res.ret.per_page,
              current_page:res.ret.current_page,
            }
            /*this.pageObj={
              total:100,
              per_page:10,
              current_page:1,
            }*/

          }
        },
        /***
         * 分页
         * */
        pageFn(val){
          this.getNewsList(val);
        }
      }
    }
</script>

<style lang="scss">
  $host:'../../assets/';
  @import "../../assets/scss/news";
</style>
