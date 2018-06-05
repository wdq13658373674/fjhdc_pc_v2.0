<template>
  <header class="header min-width">
    <div class="top-box">
      <div class="top clearfix">
        <!--登陆前-->
        <div class="before pull-right hide">
          <a href="#">登陆</a>
          <a href="#">注册</a>
        </div>

        <!--登陆后-->
        <div class="after pull-right ">
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
        <img src="@/assets/images/public/logo2.png" alt="">
        <img class="ml60" src="@/assets/images/public/logo2_name.png" alt="">
      </a>

      <div class="menu pull-right">
        <a class="item active" href="#">首页</a>
        <a class="item" href="#">管理项目</a>
        <a class="item" href="#">关于我们</a>
      </div>
    </div>

  </header>
</template>

<script>
    export default {
        name: "header"
    }
</script>
