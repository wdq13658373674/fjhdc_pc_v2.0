<template>
  <!--参与项目-->
  <div id="user-project" class="clearfix">
    <router-link class="project clearfix" :to="{name:'UserProjectSales',query:{
      id:1
    }}">
      <div class="img pull-left"><img src="@/assets/images/test/house.jpg" alt=""></div>
      <div class="content pull-left">
        <div class="title-box">
          <h1>房计划诚远御府</h1>
          <p class="p">
            <span class="span1">您的投资额(元)</span>
            <span class="span2">500,000.00</span>
          </p>
        </div>
        <div class="tz-user-hr"></div>
        <ul class="msg-list clearfix">
          <li class="item">
            <div class="tit">地块位置</div>
            <div class="con">邻水县西部新城三完小旁边</div>
          </li>
          <li class="item">
            <div class="tit">容积率</div>
            <div class="con">2.0</div>
          </li>
          <li class="item">
            <div class="tit">地块面积</div>
            <div class="con">100000 <span class="yellow">m<sup>2</sup></span></div>
          </li>
          <li class="item">
            <div class="tit">建筑密度</div>
            <div class="con">55%</div>
          </li>
        </ul>
      </div>
    </router-link>
    <a class="project clearfix" href="#">
      <div class="img pull-left"><img src="@/assets/images/test/house.jpg" alt=""></div>

      <div class="content pull-left">
        <div class="title-box">
          <h1>房计划诚远御府</h1>
          <p class="p">
            <span class="span1">您的投资额(元)</span>
            <span class="span2">500,000.00</span>
          </p>
        </div>
        <div class="tz-user-hr"></div>
        <ul class="msg-list clearfix">
          <li class="item">
            <div class="tit">地块位置</div>
            <div class="con">邻水县西部新城三完小旁边</div>
          </li>
          <li class="item">
            <div class="tit">容积率</div>
            <div class="con">2.0</div>
          </li>
          <li class="item">
            <div class="tit">地块面积</div>
            <div class="con">100000 <span class="yellow">m<sup>2</sup></span></div>
          </li>
          <li class="item">
            <div class="tit">建筑密度</div>
            <div class="con">55%</div>
          </li>
        </ul>
      </div>
    </a>

    <!--为空时-->
    <div class="empty">
      你尚未参加任何项目或项目正在审核中，请耐心等待
    </div>
  </div>
</template>

<script>
    export default {
        name: "project"
    }
</script>

<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/userProject";
</style>
