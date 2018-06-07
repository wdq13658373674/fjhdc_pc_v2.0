<template>
  <div class="form-wrap">
    <div class="form-box" style="margin-top:333px;">
      <a class="logo mt40" href="/"><img src="@/assets/images/public/logo2.png" alt=""></a>

      <form class="form mt60" id="logForm" @submit="submit">
        <div class="input-group">
          <input class="icon-input user" type="text" v-model="inputValue.mobile" v-verify="inputValue.mobile" autocomplete="off" placeholder="请输入手机号">
        </div>
        <div class="input-group mt20">
          <input class="icon-input pas" type="password" v-model="inputValue.password" autocomplete="off" placeholder="请输入密码">
        </div>

        <!--tips-->
        <div class="tz-err-tips">
          <span class="Validform_checktip Validform_wrong" v-remind="inputValue.mobile"></span>
        </div>

        <input type="submit" class="btn-submit" value="登陆">

        <div class="link clearfix">
          <a class="yellow-light pull-left" href="#">忘记密码 ></a>

          <span class="pull-right yellow">还没有信力达集团账号？ <router-link class="yellow-light" :to="{name:'Register'}">点击注册 ></router-link></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {postLogin} from '@/api/info.js'

  export default {
    name: "login",
    data() {
      return {
        inputValue: {},
        tips:''
      }
    },
    verify: {
      inputValue: {
        mobile: ["required","mobile"]
      }
    },
    methods: {
      /**
       * 登陆提交
       * **/
      async submit(){
        this.checkForm();

        /*const params=this.inputValue;
        let res=await postLogin(params);

        if(res){
          console.log(res);
        }*/
      },
      /**
       * 登陆验证
       * **/
      checkForm(){
        console.log(this.$verify.check());
      }
    }
  }
</script>

<style lang="scss">
  $host:'../../assets/';
  @import "../../assets/scss/form";
</style>
