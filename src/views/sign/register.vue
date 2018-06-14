<template>
  <div class="form-wrap">
    <div class="form-box">
      <router-link class="logo mt40" to="/"><img src="@/assets/images/public/logo2.png" alt=""></router-link>

      <form class="form mt60" action="" id="regForm"  @submit.prevent="submit">
        <div class="input-group">
          <input class="icon-input phone" type="tel" v-model="inputValue.mobile" v-verify="inputValue.mobile" autocomplete="off"  placeholder="请输入手机号">
          <!--tips-->
          <div class="tz-err-tips">
            <span class="Validform_checktip wrong" v-remind="inputValue.mobile"></span>
            <!--<span class="Validform_checktip suc"  v-show=""></span>-->
          </div>
        </div>

        <div class="input-group">
          <input class="icon-input pas" name="password" type="password"  v-model="inputValue.password"  v-verify="inputValue.password" autocomplete="off" placeholder="请输入密码">
          <!--tips-->
          <div class="tz-err-tips">
            <span class="Validform_checktip wrong"  v-remind="inputValue.password"></span>
            <!--<span class="Validform_checktip suc"></span>-->
          </div>
        </div>

        <div class="input-group">
          <input class="icon-input pas" type="password" v-model="inputValue.rpassword" v-verify="inputValue.rpassword" autocomplete="off" placeholder="请输入密码">
          <!--tips-->
          <div class="tz-err-tips">
            <span class="Validform_checktip wrong"  v-remind="inputValue.rpassword"></span>
            <!--<span class="Validform_checktip suc"></span>-->
          </div>
        </div>

        <div class="input-group">
          <div class="clearfix">
            <input class="input w189 pull-left" type="text" v-model="inputValue.verification" v-verify="inputValue.verification" autocomplete="off" placeholder="请输入验证码">
            <verify class="pull-right" second=10 :phone="inputValue.mobile" @run="getVerify"></verify>
          </div>
          <!--tips-->
          <div class="tz-err-tips">
            <span class="Validform_checktip wrong"  v-remind="inputValue.verification"></span>
            <!--<span class="Validform_checktip suc"></span>-->
          </div>
        </div>

        <div class="rule-box clearfix">
          <label class="check-label pull-left">
            <input id="rule" class="check-input" type="checkbox" v-model="inputValue.rule"  v-verify="inputValue.rule">
            <div class="check clearfix">
              <span class="arc pull-left"></span>
            </div>
          </label>
          <span class="yellow pull-left">我已同意<a class="blue" href="#">《信力达注册协议》</a>协议</span>
        </div>
        <!--tips-->
        <div class="tz-err-tips">
          <span class="Validform_checktip wrong"  v-remind="inputValue.rule"></span>
        </div>

        <input id="register" type="submit" class="btn-submit mt10" value="注册">
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
        inputValue:{
          mobile:'',
          password:'',
          rpassword:'',
          verification:'',
          rule:true
        },
      }
    },
    /**
     * 表单验证
     * **/
    verify: {
      inputValue: {
        mobile: ["required","mobile"],
        password:[
          "required",
          {
            minLength:6,
            message:'密码至少为6位'
          }
        ],
        rpassword:[
          "required",
          {
            test:function(val){
              if(val != this.inputValue.password){
                return false;
              }
              return true;
            },
            message:'两次密码不一致'
          }
        ],
        verification:["required"],
        rule:['rule']
      }
    },
    methods:{
      /**
       * 注册提交
       * **/
      async submit(){
        if(this.$verify.check()){
          const params=this.inputValue;
          let res =await postRegister(params);

          if(res.code==0){
            this.$Message({
              type:"warning",
              content:res.desc
            })
          }else {
            this.$Message({
              type:"success",
              content:'注册成功,请登陆'
            })
            this.$router.push({
              name:'Login'
            })
          }
        }
      },
      /**
       * 获取验证码
       * **/
      getVerify(code){
        alert('验证码:'+code);
      },
    }
  }
</script>

<style lang="scss">
  $host:'../../assets/';
  @import "../../assets/scss/form";
</style>
