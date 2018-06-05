<template>
  <header class="header min-width">
    <div class="top-box">
      <div class="top clearfix">
        <!--登陆前-->
        <div class="before pull-right">
          <a href="#">登陆</a>
          <a href="#">注册</a>
          <a class="about" href="#">关于我们</a>
        </div>

        <!--登陆后-->
        <div class="after pull-right hide">
          <div class="menu-box">
            <span class="icon"></span>
            <ul class="menu-list">
              <li class="item">
                <a href="#" class="icon ico1">个人中心</a>
              </li>
              <li class="item">
                <a href="#" class="icon ico2">退出</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="nav clearfix">
      <a href="#" class="pull-left">
        <img src="@/assets/images/public/logo.png" alt="">
      </a>

      <div class="menu pull-right">
        <a class="item active" href="#">首页</a>
        <a class="item" href="#">定制购房</a>
        <a class="item" href="#">房计划物业</a>
        <a class="item" href="#">团转到家</a>
        <a class="item" href="#">房计划装修</a>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "header"
    }
</script>
