<template>
  <!--个人中心-->
  <div class="user-msg-list clearfix">
    <div class="img pull-left mr20"><img src="@/assets/images/test/house.png" alt=""></div>

    <ul class="msg-list">
      <li class="item f16">你好，房计划地产用户</li>
      <li class="item yellow-light f30 mt10">王棣</li>
      <li class="item mt20 clearfix">
        <span class="yellow-light3 pull-left">上次登录时间&nbsp;</span>
        <span class="pull-left"> &nbsp;2017/05/28&nbsp;</span>
        <span class="pull-left"> &nbsp;14:25:15</span>
        <a class="btn-edit pull-right" href="">编辑个人资料</a>
      </li>
    </ul>

    <div class="tz-user-hr mt40"></div>
  </div>
</template>

<script>
    export default {
        name: "user"
    }
</script>

<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/userCenter";
</style>
