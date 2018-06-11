<template>
  <footer class="footer min-width">
    <div class="container clearfix">
      <div class="pull-left">
        <p class="p1">联系我们</p>
        <p class="p2">CONTACT US</p>
        <p class="p3 clearfix">
          400-135-6677
        </p>
        <p class="p4 f12">
          © 2018 重庆市信力达科技集团有限公司 渝ICP备18004075号-2
        </p>
      </div>

      <div class="footer-menu pull-right">
        <router-link target="_blank" :to="{name:'About'}">关于我们</router-link>
        <span>|</span>
        <router-link :to="{name:'News'}">企业动态</router-link>
        <span>|</span>
        <router-link :to="{name:'ProjectIndex'}">管理项目</router-link>
        <span>|</span>
        <a href="#">投资项目</a>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "footers"
    }
</script>
