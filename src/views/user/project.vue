<template>
  <!--参与项目-->
  <div id="user-project" class="clearfix">
    <router-link class="project clearfix" :to="{name:'UserSales',query:{
          id:items.id,pid:items.project_id
        }}" v-for="(items,index) in projectList" :key="index">

      <div class="img pull-left"><img :src="IMG_HOST+items.project_ad.cover" alt=""></div>
      <div class="content pull-left">
        <div class="title-box">
          <h1>{{items.project_ad.title}}</h1>
          <p class="p">
            <span class="span1">您的投资额(元)</span>
            <span class="span2">{{items.real_amount}}</span>
          </p>
        </div>
        <div class="tz-user-hr"></div>
        <ul class="msg-list clearfix">
          <li class="item">
            <div class="tit">地块位置</div>
            <div class="con">{{items.project_ad.region}}</div>
          </li>
          <li class="item">
            <div class="tit">容积率</div>
            <div class="con">{{items.project_ad.ratio}}</div>
          </li>
          <li class="item">
            <div class="tit">地块面积</div>
            <div class="con">{{items.project_ad.land_area}} <span class="yellow">m<sup>2</sup></span></div>
          </li>
          <li class="item">
            <div class="tit">建筑密度</div>
            <div class="con">{{items.project_ad.built_density}}</div>
          </li>
        </ul>
      </div>
    </router-link>


    <!--
      total：总条数
      size：每页显示条目个数不传默认10
      page：设置默认页码，默认1
      changge：页码切换方法触发，比如：传入pageFn方法接收page页码
    -->
    <pageination class="page" :total="pageObj.total" :size="pageObj.per_page" :page="pageObj.current_page" :changge="pageFn" :isUrl="true"></pageination>

    <!--为空时-->
    <div class="empty" v-if="projectList.length<=0">
      你尚未参加任何项目或项目正在审核中，请耐心等待
    </div>
  </div>
</template>

<script>
    import { getMyProject } from '@/api/info.js'
    import {mapState} from 'vuex'

    export default {
      name: "project",
      data(){
        return {
          IMG_HOST:global.IMG_HOST || '',
          projectList:[],
          pageObj:{}
        }
      },
      computed: {
        ...mapState(['userInfo'])
      },
      mounted(){
        this.getMyProject();
      },
      methods:{
        /**
         * 获取新闻列表
         * **/
        async getMyProject(page){
          const params={
            page:page,
            uid:this.userInfo
          }

          let res=await getMyProject(params);
          if(res["code"]){
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
          //this.page = val;
          this.getMyProject(val);
        }
      }
    }

</script>

<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/userProject";
</style>
