<template>
  <!--个人资料编辑-->
  <div id="user-edit" class="user-msg-list clearfix">
    <div class="img pull-left mr20"><img src="@/assets/images/img/user.png" alt=""></div>

    <ul class="msg-list">
      <li class="item yellow-light f30 mt10">{{info.mobile}}</li>
      <li class="item f16">欢迎您！</li>
      <li class="item mt20 clearfix">
        <a class="btn-edit pull-right" href="">退出登陆</a>
      </li>
    </ul>

    <div class="user-hr mt40"></div>

    <form id="msgForm" class="form mt20" action="">
      <div class="input-group">
        <label class="label">手机号码</label>
        <span class="phone">{{info.mobile}}</span>
      </div>

      <div class="input-group">
        <label class="label">会员昵称</label>
        <input class="input required" sucmsg=" " :value="info.nickname" type="text" placeholder="请输入昵称">
        <span class="Validform_checktip ml20"></span>
      </div>
      <div class="input-group clearfix">
        <label class="label pull-left">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label>

        <div class="fixed-select select-box pull-left">
          <div class="form-control">
            <span v-if="info.sex">男</span>
            <span v-else>女</span>
          </div>
          <input class="required" sucmsg=" " type="hidden" datatype="text" id=""  :value="info.sex" />
          <ul>
            <li value="0">女</li>
            <li value="1">男</li>
          </ul>
        </div>
      </div>
      <div class="input-group">
        <label class="label">出生日期</label>
        <input id="date" class="input input-date required" sucmsg=" " type="text" :value="info.birthday">
        <span class="Validform_checktip ml20"></span>
      </div>
      <div class="input-group">
        <label class="label">联系地址</label>
        <input class="input w326 required" sucmsg=" " type="text" placeholder="请输入联系地址" :value="info.address">
        <span class="Validform_checktip ml20"></span>
      </div>

      <div class="user-hr mt40"></div>

      <button type="submit" class="btn-rec">保存</button>
    </form>

  </div>
</template>

<script>
    import { getUserInfo } from '@/api/info.js'

    export default {
      name: "message",
      data(){
        return {
          info:[]
        }
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
            "uid":2
          };
          let res =await getUserInfo(params);
          console.log(res);

          if(res){
            res.ret.last_login_time == '1970-01-01 08:00:00' ? res.ret.last_login_time=this.$utils.stampToDate(new Date()/1000,true) : res.ret.last_login_time=res.ret.last_login_time;
            this.info=res.ret;
          }
        },
      }
    }
</script>

<style lang="scss" scoped>
  $host:'../../assets/';
  @import "../../assets/scss/userMessage";
</style>
