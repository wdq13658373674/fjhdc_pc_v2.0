<template>
  <div id="app">
    <!--header-->
    <router-view name="header"></router-view>

    <!--content-->
    <router-view></router-view>

    <!--footer-->
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>
<style lang="less">
  @import 'theme/index.less';
</style>
<style lang="scss">
  @import './assets/scss/common';
  #app{
    height:100%;
  }
</style>
