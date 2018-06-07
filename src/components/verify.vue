<!--获取验证码-->
<template>
  <button class="btn-code" :class="{disabled : count>0}"  :disabled="count>0"  @click.prevent="getCode">{{text}}</button>
</template>

<script>
  import {postVerify} from '@/api/info.js'

  export default {
    name: "verify",
    props:{
      second:{
        default:60,
      },
      phone:{
        default:'',
      },
      type:{
        default:1,//1：注册；2：修改手机；3：找回密码
      },
    },
    data(){
      return {
        count:0,
        timer:null,
      }
    },
    computed:{
      text:function(){
        return this.count > 0 ? this.count + '秒后重发' : '发送验证码';
      }
    },
    methods:{
      /**获取验证码*/
      async getCode(){
        if(!this.phone || !this.$utils.is_mobile(this.phone)){
          return false;
        }
        this.start();

        const params={
          'mobile':this.phone,
          'type':this.type
        }
        let res =await postVerify(params);

        if(res){
          /**
           * todo : 后期修改验证码
           * **/
          var code_num=res.ret.content.slice(21,27);
          this.$emit('run',code_num);
        }
      },
      /**计时开始*/
      start(){
        if(!this.timer){
          this.count = parseInt(this.second);

          this.timer=setInterval(()=>{
            if(this.count > 0){
              this.count--;
            }else {
              clearInterval(this.timer);
              this.timer = null;
            }
          },1000)
        }
      }
    }
  }
</script>
