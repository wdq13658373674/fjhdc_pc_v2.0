<template>
  <div class="form-wrap">
    <a class="logo mt180" href="#"><img src="@/assets/images/public/logo2.png" alt=""></a>

    <div class="form-box">
      <h1 class="title mt40"><img src="@/assets/images/public/logo2_name.png" alt=""></h1>

      <form class="form mt40" id="regForm" @submit="postRegister">
        <div class="input-group">
          <div>
            <input class="icon-input phone" type="tel" v-model="inputValue.mobile" autocomplete="off"  placeholder="请输入手机号">
          </div>
          <span class="Validform_checktip suc"></span>
        </div>

        <div class="input-group">
          <div>
            <input class="icon-input phone" type="password" v-model="inputValue.password" autocomplete="off"  placeholder="请输入手机号">
          </div>
          <span class="Validform_checktip suc"></span>
        </div>

        <div class="input-group">
          <div>
            <input class="icon-input phone" type="password" v-model="inputValue.rpassword" autocomplete="off"  placeholder="请输入手机号">
          </div>
          <span class="Validform_checktip suc"></span>
        </div>

        <div class="input-group">
          <div>
            <input class="icon-input phone" type="text" v-model="inputValue.verification" autocomplete="off"  placeholder="请输入手机号">
          </div>
          <span class="Validform_checktip suc"></span>
        </div>

        <div class="rule-box clearfix mt20">
          <label class="check-label pull-left">
            <input id="rule" class="check-input" name="rule" datatype="*" sucmsg=" " type="checkbox" checked>
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

  export default {
    name: "register",
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
      async postRegister(){
        const params=this.inputValue;

        let res =await postRegister(params);

        console.log(res);

      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/form";
</style>
