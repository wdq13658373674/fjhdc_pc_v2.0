<template>
  <!--个人资料编辑-->
  <div id="user-edit" class="user-msg-list clearfix">
    <div class="img pull-left mr20"><img src="@/assets/images/img/user.png" alt=""></div>

    <ul class="msg-list">
      <li class="item yellow-light f30 mt10">{{info.mobile}}</li>
      <li class="item f16">欢迎您！</li>
      <li class="item mt20 clearfix">
        <span class="btn-edit pull-right" @click="exit()">退出登陆</span>
      </li>
    </ul>

    <div class="user-hr mt40"></div>

    <form id="msgForm" class="form mt20" @submit.prevent="submit">
      <div class="input-group">
        <label class="label">手机号码</label>
        <span class="phone">{{info.mobile}}</span>
      </div>

      <div class="input-group">
        <label class="label">会员昵称</label>
        <input class="input" v-model="info.nickname" v-verify="info.nickname" type="text" placeholder="请输入昵称">
        <!--tips-->
        <span class="Validform_checktip wrong" v-remind="info.nickname"></span>
      </div>

      <div class="input-group clearfix">
        <label class="label pull-left">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label>
        <Select v-model="info.sex" style="width:201px" class="tz-select">
          <Option v-for="(item,index) in sexList" :value="item.value" :key="index">{{ item.label }}</Option>
        </Select>
      </div>

      <div class="input-group">
        <label class="label">出生日期</label>
        <DatePicker type="date" :clearable="false" :editable="false" :value="info.birthday" @on-change="birthChange" placeholder="请选择" class="tz-date"></DatePicker>
      </div>

      <div class="input-group">
        <label class="label">联系地址</label>
        <input class="input w326" type="text" placeholder="请输入联系地址" v-model="info.address"   v-verify="info.address">
        <!--tips-->
        <span class="Validform_checktip wrong" v-remind="info.address"></span>
      </div>

      <div class="user-hr mt40"></div>

      <button type="submit" class="btn-rec">保存</button>
    </form>

  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import { getUserInfo , postUserMessage} from '@/api/info.js'

    export default {
      name: "message",
      data(){
        return {
          info:{
            nickname:'',
            address:'',
          },
          sexList:[
            {
              value: 0,
              label: '女'
            },
            {
              value: 1,
              label: '男'
            },
          ],
        }
      },
      /**
       * 表单验证
       * **/
      verify: {
        info: {
          nickname: ["required"],
          address:["required"]
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

          if(res){
            res.ret.last_login_time == '1970-01-01 08:00:00' ? res.ret.last_login_time=this.$utils.stampToDate(new Date()/1000,true) : res.ret.last_login_time=res.ret.last_login_time;
            this.info=res.ret;
          }
        },
        /**
         * 表单提交(修改资料)
         * **/
        async submit(){
          if(this.$verify.check()){
            var params=this.info;
            let res =await postUserMessage(params);

            this.$message.config({
              top: 500,
              duration: 3
            });

            if(res.code==0){
              this.$message.warning('你没有修改');
            }else{
              this.$message.success('修改成功');
            }
          }
        },
        /**
         * 生日改变
         * **/
        birthChange(val){
          this.info.birthday=val;
        },
        /**
         * 退出
         * **/
        ...mapMutations(['update_userInfo']),
        exit(){
          this.update_userInfo('');
          this.$router.push('/');
        }
      }
    }
</script>

<style lang="scss" scoped>
  $host:'../../assets/';
  @import "../../assets/scss/userMessage";
</style>
