<template>
  <div id="app">
    <!--header-->
    <router-view name="headers"></router-view>

    <!--content-->
    <router-view></router-view>

    <!--footer-->
    <router-view name="footers"></router-view>
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

<style lang="scss">
  @import './assets/scss/common';
</style>
