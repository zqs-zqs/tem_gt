<template>
  <div id="rider">
    <!-- 头部 -->
    <mt-header title="添加乘车人" class="header" fixed>
      <router-link to="/addpassenger" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 主题 -->
    <div class="ztnr">
      <!-- 扫描 -->
      <div>
        <div  class="xs"></div>
        <button class="add">扫描身份证添加</button>
      </div>
      <!-- 内容 -->
      <div class="qtzs">
        <!-- 姓名 -->
        <mt-field
          label="姓名"
          placeholder="请输入乘车人姓名"
          :attr="{ maxlength: 15 }"
          type="text"
          autocomplete="off"
          v-model="rider_name"
          @blur.native.capture="checkName"
        ></mt-field>
        <mt-field
          label="证件号码"
          placeholder="请输入证件号码"
          :attr="{ maxlength: 18 }"
          type="text"
          autocomplete="off"
          v-model="rider_card"
          @blur.native.capture="checkCard"
        ></mt-field>
        <!-- 旅客类型 -->
        <mt-field
          label="成人票"
          placeholder="成人票"
          type="text"
          autocomplete="off"
        ></mt-field>
        <!-- 联系方式 -->
        <p class="title2">联系方式</p>
        <mt-field
          label="手机号"
          placeholder="填写中国大陆手机号码"
          :attr="{ maxlength: 11 }"
          type="text"
          autocomplete="off"
          v-model="rider_phone"
          @blur.native.capture="checkPhone"
        ></mt-field>
      </div>
      <mt-button class="bottom" size="large" type="primary" @click="handle">确认添加</mt-button>
    </div>
  </div>
</template>
<style>
#rider .qtzs .title2 {
  font-size: 16px;
  padding-left: 16px;
  margin: 18px 0;
  color: #555;
}
#rider .qtzs .mint-cell-text{
  font-size: 17px;
  color: #777;
}
#rider>.ztnr .xs{
  width: 0px;height: 1px;
}
#rider>.ztnr .add {
  display: block;
  width: 95%;
  text-decoration: #000;
  color: #000;
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 12px 0;
  margin: 12px auto;
  text-align: center;
}
#rider{
  background-color: #f9f9f9 !important;
}
</style>
<script>
export default {
  data(){
    return {
      rider_name:'',
      rider_phone:'',
      rider_card:""
    }
  },
  methods: {
    checkName() {
      //真实姓名
      let namereg = /^[\u2E80-\u9FFF]{2,}$/;
      if (namereg.test(this.rider_name)) {
        return true;
      } else {
        // 标准方式消息提示框
        this.$toast({
          message: "请输入真实的中文名", //内容
          position: "top", //位置
          duration: "2000", //2秒
        });
        return false;
      }
    },
    checkCard() {
      //二代身份证
      let user_cardreg = /^\d{17}[0-9Xx]$/;
      if (user_cardreg.test(this.rider_card)) {
        return true;
      } else {
        this.$toast({
          message: "请输入正确的身份证号", //内容
          position: "top", //位置
          duration: "2000", //2秒
        });
        return false;
      }
    },
    checkPhone() {
      //手机号码
      let phonereg = /^1[3-9]\d{9}$/;
      if (phonereg.test(this.rider_phone)) {
        return true;
      } else {
        // 标准方式消息提示框
        this.$toast({
          message: "请输入正确的手机号", //内容
          position: "top", //位置
          duration: "2000", //2秒
        });
        return false;
      }
    },
    handle() {
      if (this.checkName && this.checkCard && this.checkPhone) {
        this.axios.post('/rider','rider_uid='+this.$store.state.uid+'&rider_name='+this.rider_name+'&rider_card='+this.rider_card+'&rider_phone='+this.rider_phone)
        .then(res=>{
          if(res.data.code==1){
            this.$router.push('/addpassenger')
          }else{
            //用于显示提示框
            this.$messagebox('注册提示','该乘车人已存在')
          }
        })
      }
    },
  },
}
</script>