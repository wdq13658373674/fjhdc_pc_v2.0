<template>
  <div class="form-wrap">
    <div class="form-box">
      <router-link class="logo mt40" to="/"><img src="@/assets/images/public/logo2.png" alt=""></router-link>

      <form class="form mt60" action="" id="regForm"  @submit.prevent="submit">
        <div class="input-group">
          <input class="icon-input phone" type="tel" v-model="inputValue.mobile" v-verify="inputValue.mobile" autocomplete="off"  placeholder="请输入注册手机号">
          <!--tips-->
          <div class="tz-err-tips">
            <span class="Validform_checktip wrong" v-remind="inputValue.mobile"></span>
            <!--<span class="Validform_checktip suc"></span>-->
          </div>
        </div>

        <div class="input-group">
          <input class="icon-input pas" name="password" type="password"  v-model="inputValue.password"  v-verify="inputValue.password" autocomplete="off" placeholder="请输入新密码">
          <!--tips-->
          <div class="tz-err-tips">
            <span class="Validform_checktip wrong"  v-remind="inputValue.password"></span>
            <!--<span class="Validform_checktip suc"></span>-->
          </div>
        </div>

        <div class="input-group">
          <input class="icon-input pas" type="password" v-model="inputValue.rpassword" v-verify="inputValue.rpassword" autocomplete="off" placeholder="请确认密码">
          <!--tips-->
          <div class="tz-err-tips">
            <span class="Validform_checktip wrong"  v-remind="inputValue.rpassword"></span>
            <!--<span class="Validform_checktip suc"></span>-->
          </div>
        </div>

        <div class="input-group">
          <div class="clearfix">
            <input class="input w189 pull-left" type="text" v-model="inputValue.verification" v-verify="inputValue.verification" autocomplete="off" placeholder="请输入验证码">
            <verify class="pull-right" second=10 :phone="inputValue.mobile" type=3 @run="getVerify"></verify>
          </div>
          <!--tips-->
          <div class="tz-err-tips">
            <span class="Validform_checktip wrong"  v-remind="inputValue.verification"></span>
            <!--<span class="Validform_checktip suc"></span>-->
          </div>
        </div>

        <input id="register" type="submit" class="btn-submit mt10" value="确认">
      </form>
    </div>
  </div>
</template>

<script>
  import {postRepassword} from '@/api/info.js'
  import verify from '@/components/verify'

  export default {
    name: "repassword",
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
      }
    },
    methods:{
      /**
       * 找回密码提交
       * **/
      async submit(){
        if(this.$verify.check()){
          const params=this.inputValue;
          let res =await postRepassword(params);

          if(res.code==0){
            this.$Message({
              type:"warning",
              content:res.desc
            })
          }else {
            this.$Message({
              type:"success",
              content:'密码修改成功,请登陆'
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
