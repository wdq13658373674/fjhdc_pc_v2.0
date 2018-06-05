<template>
  <div>
    <!--header-->
    <header></header>
    <!--header-->

    <div class="tz-user-wrap min-width">
      <!--crumbs-->
      <div class="tz-user-crumbs clearfix">
        <div class="crumbs mt20 pull-right">
          <a href="#">房计划地产首页 </a> >
          <span>个人中心 </span>
        </div>
      </div>
      <!--crumbs-->

      <!--container-->
      <div class="tz-user-container mt20 clearfix">
        <!--menu-->
        <menus></menus>
        <!--menu-->

        <!--content-->
        <div class="user-content pull-right">
          <router-view></router-view>
        </div>
        <!--content-->
      </div>
    </div>
  </div>

</template>

<script>
  import header from './header'
  import menus from './menu'

  export default {
    name: "layout",
    components: {
      header,
      menus
    }
  }
</script>
<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/user";
</style>
