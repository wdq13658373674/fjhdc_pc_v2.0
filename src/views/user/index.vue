<template>
  <!--个人中心-->
  <div class="user-msg-list clearfix">
    <div class="img pull-left mr20"><img src="@/assets/images/img/user.png" alt=""></div>

    <ul class="msg-list">
      <li class="item f16">你好，房计划地产用户</li>
      <li class="item yellow-light f30 mt10">{{info.nickname}}</li>
      <li class="item mt20 clearfix">
        <span class="yellow-light3 pull-left">上次登录时间&nbsp;</span>
        <span class="pull-left"> &nbsp;{{info.last_login_time}}&nbsp;</span>
        <router-link class="btn-edit pull-right" :to="{name:'UserMessage'}">编辑个人资料</router-link>
      </li>
    </ul>

    <div class="tz-user-hr mt40"></div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/info.js'
import {mapState} from 'vuex'

export default {
  name: "user",
  data(){
    return {
      info:[]
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted(){
    this.getUserInfo();
  },
  methods:{
    /**
     * 获取当前用户信息
     * **/
    async getUserInfo(){
      var params={
        "uid":this.userInfo
      };
      let res =await getUserInfo(params);

      if(res){
        res.ret.last_login_time == '1970-01-01 08:00:00' ? res.ret.last_login_time=this.$utils.stampToDate(new Date()/1000,true) : res.ret.last_login_time=res.ret.last_login_time;
        this.info=res.ret;
      }
    },
  }
}
</script>

<style lang="scss" >
  $host:'../../assets/';
  @import "../../assets/scss/userCenter";
</style>
