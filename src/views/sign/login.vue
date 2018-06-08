<template>
  <div class="form-wrap">
    <div class="form-box" style="margin-top:333px;">
      <router-link class="logo mt40" to="/"><img src="@/assets/images/public/logo2.png" alt=""></router-link>

      <form class="form mt60" id="logForm" @submit.prevent="submit">
        <div class="input-group">
          <input class="icon-input user" type="text" v-model="inputValue.mobile" v-verify="inputValue.mobile" autocomplete="off" placeholder="请输入手机号">
        </div>
        <div class="input-group mt20">
          <input class="icon-input pas" type="password" v-model="inputValue.password"  v-verify="inputValue.password" autocomplete="off" placeholder="请输入密码">
        </div>

        <!--tips-->
        <div class="tz-err-tips">
          <span class="Validform_checktip wrong" v-remind="inputValue.mobile"></span>
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
  import {mapMutations} from 'vuex'
  import {postLogin} from '@/api/info.js'

  export default {
    name: "login",
    data() {
      return {
        inputValue: {
          mobile:'',
          password:''
        },
        tips:''
      }
    },
    /**
     * 表单验证
     * **/
    verify: {
      inputValue: {
        mobile: ["required","mobile"],
        password:["required"]
      }
    },
    mounted(){

    },
    methods: {
      /**
       * 登陆提交
       * **/
      ...mapMutations(['update_userInfo']),
      async submit(){
        // console.log(this.$verify.$errors);//错误信息

        if(this.$verify.check()){
          const params=this.inputValue;
          let res=await postLogin(params);

          if(res.code==0){
            // this.$message.warning(res.desc);
            this.$Message({
              type:"warning",
              content:res.desc
            });
          }else {
            this.update_userInfo(res.ret);
            this.$router.push({
              name:'User'
            });
          }
        }
      },
    }
  }
</script>

<style lang="scss">
  $host:'../../assets/';
  @import "../../assets/scss/form";
</style>
