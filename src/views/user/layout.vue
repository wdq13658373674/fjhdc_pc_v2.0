<template>
  <div>
    <!--header-->
    <headers></headers>
    <!--header-->

    <div class="tz-user-wrap min-width">
      <!--crumbs-->
      <div class="tz-user-crumbs clearfix">
        <div class="crumbs mt20 pull-right">
          <router-link to="/">房计划地产首页 </router-link> >
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
  import headers from './header'
  import menus from './menu'

  export default {
    name: "layout",
    components: {
      headers,
      menus
    }
  }
</script>
<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/user";
</style>
