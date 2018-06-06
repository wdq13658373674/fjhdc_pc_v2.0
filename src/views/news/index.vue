<template>
  <div>
    <!--banner-->
    <div class="tz-index-banner"></div>


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
