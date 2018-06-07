<template>
  <!--menu-list start-->
  <div class="tz-user-menu pull-left">
    <ul class="menu-list">
      <li class="item"><router-link class="link icon1" :to="{name:'User'}">个人中心</router-link></li>
      <li class="item"><router-link class="link icon2" :to="{name:'UserProject'}">参与项目</router-link></li>
      <li class="item"><router-link class="link icon3" :to="{name:'UserMessage'}">个人资料</router-link></li>
      <!--<li class="item"><router-link class="link icon4" :to="{name:'UserRecommend'}">推荐客户</router-link></li>-->
    </ul>
  </div>
  <!--menu-list end-->
</template>

<script>
    export default {
        name: "menus"
    }
</script>

<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/userCenter";
  @import "../../assets/scss/userMenu";
</style>
