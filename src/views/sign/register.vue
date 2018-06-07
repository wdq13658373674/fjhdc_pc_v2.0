<template>
  <div class="form-wrap">
    <div class="form-box" style="margin-top:240px;">
      <a class="logo mt40" href="/"><img src="@/assets/images/public/logo2.png" alt=""></a>

      <form class="form mt60" action="" id="regForm"  @submit="submit">
        <div class="input-group">
          <div>
            <input class="icon-input phone" type="tel" v-model="inputValue.mobile" autocomplete="off"  placeholder="请输入手机号">
          </div>
          <span class="Validform_checktip suc"></span>
        </div>

        <div class="input-group mt20">
          <div>
            <input class="icon-input pas" name="password" type="password"  v-model="inputValue.password" autocomplete="off" placeholder="请输入密码">
          </div>
          <span class="Validform_checktip suc"></span>
        </div>

        <div class="input-group mt20">
          <div>
            <input class="icon-input pas" type="password" v-model="inputValue.rpassword" autocomplete="off" placeholder="请输入密码">
          </div>
          <span class="Validform_checktip suc"></span>
        </div>

        <div class="input-group mt20">
          <div class="clearfix">
            <input class="input w189 pull-left" type="text" v-model="inputValue.verification" autocomplete="off" placeholder="请输入验证码">
            <verify class="pull-right" second=10 phone="13658373674" @run="getVerify"></verify>
          </div>
          <span class="Validform_checktip suc"></span>
        </div>

        <div class="rule-box clearfix mt20">
          <label class="check-label pull-left">
            <input id="rule" class="check-input" name="rule" type="checkbox" checked>
            <div class="check clearfix">
              <span class="arc pull-left"></span>
            </div>
          </label>
          <span class="yellow pull-left">我已同意<a class="blue" href="#">《房计划注册协议》</a>协议</span>
        </div>

        <input id="register" type="submit" class="btn-submit mt30" value="注册">
      </form>
    </div>
  </div>
</template>

<script>
  import {postRegister} from '@/api/info.js'
  import verify from '@/components/verify'

  export default {
    name: "register",
    components:{
      verify
    },
    data(){
      return {
        inputValue:{}
      }
    },
    mounted(){

    },
    methods:{
      /**
       * 注册提交
       * **/
      async submit(){
        const params=this.inputValue;
        let res =await postRegister(params);

        if(res){
          console.log(res);
        }

      },
      /**
       * 获取验证码
       * **/
      getVerify(code){
        alert('验证码:'+code);
      }
    }
  }
</script>

<style lang="scss">
  $host:'../../assets/';
  @import "../../assets/scss/form";
</style>
