<template>
  <div>
    <!--banner-->

    <!--项目-->
    <div class="tz-pro-title">
      <span class="span1">管理项目</span>
      <span class="span2">MANAGEMENT ITEM</span>
    </div>
    <div class="tz-index-project">
      <div class="project-list clearfix">
        <!--<a class="item" href="#">
          <div class="img-box" style="">
            <div class="mask">
              <span class="arc"></span>
            </div>
          </div>
          <div class="con-box">
            <p class="desc">房计划·诚远御府</p>
          </div>


        </a>-->
        <router-link class="item" :to="{name:'ProjectDetail',query:{
          id:items.id
        }}" v-for="(items,index) in projectList" :key="index">
          <div class="img-box" :style="{backgroundImage:'url('+ IMG_HOST+items.cover +')'}">
            <div class="mask">
              <div class="mask">
                <span class="arc"></span>
              </div>
            </div>
          </div>
          <div class="con-box">
            <p class="desc">{{items.title}}</p>
          </div>
        </router-link>
      </div>
      <!--
            total：总条数
            size：每页显示条目个数不传默认10
            page：设置默认页码，默认1
            changge：页码切换方法触发，比如：传入pageFn方法接收page页码
          -->
      <pageination class="page" :total="pageObj.total" :size="pageObj.per_page" :page="pageObj.current_page" :changge="pageFn" :isUrl="true"></pageination>
    </div>


  </div>
</template>

<script>
  import { getIndex } from '@/api/info.js'

  export default {
      name: "index",
      data(){
        return {
          IMG_HOST:global.IMG_HOST || '',
          projectList:[],
          pageObj:{}
        }
      },
      mounted(){
        this.getProjectList();
      },
      methods:{
        /**
         * 获取项目列表
         * **/
        async getProjectList(page){
          var params={
            perPage:12,
            page:page,
          };
          let res =await getIndex(params);

          if(res){
            this.projectList=res.ret.data;

            /*分页*/
            let total=Math.ceil(res.ret.total / res.ret.per_page);
            this.pageObj={
              total:total,
              per_page:res.ret.per_page,
              current_page:res.ret.current_page,
            }
          }
        },
        /***
         * 分页
         * */
        pageFn(val){
          this.getProjectList(val);
        }
      }
    }
</script>

<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/index";
</style>
