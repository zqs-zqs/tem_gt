<template>
  <div>
    <!-- 头部 -->
    <mt-header title="" class="header">
      <router-link to="/login" slot="left" v-if="this.$store.state.isLogined">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/person" slot="left" v-else>
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="nr">
      <h1 class="title">开通账号</h1>
      <!-- 表单区域开始 -->
      <div class="field">
        <p class="qian">姓名</p>
        <mt-field
          placeholder="请输入真实姓名"
          type="text"
          :attr="{ maxlength: 15 }"
          autocomplete="off"
          v-model="realname"
          :state="isrealname"
          @blur.native.capture="checkName"
        ></mt-field>
        <p class="qian">二代身份证</p>
        <mt-field
          placeholder="请输入18位身份证号"
          type="text"
          :attr="{ maxlength: 18 }"
          autocomplete="off"
          v-model="user_card"
          :state="isuser_card"
          @blur.native.capture="checkCard"
        ></mt-field>
        <p class="qian">电话</p>
        <mt-field
          placeholder="请输入11位号码"
          type="text"
          :attr="{ maxlength: 11 }"
          autocomplete="off"
          v-model="phone"
          :state="isphone"
          @blur.native.capture="checkPhone"
        ></mt-field>
      </div>
      <p><router-link to="/register2" class="abq">其他证件注册</router-link></p>
      <!-- 表单区域结束 -->
    </div>
    <p class="ziti">
      根据铁路部门要求，购买火车票需要实名制，请如实填写您的证件信息
    </p>
    <mt-button class="bottom" size="large" type="primary" @click="handle"
      >免费注册</mt-button
    >
  </div>
</template>
<style>
.field > .qian {
  margin: 16px 0 16px 16px;
  font-size: 18px;
}
.nr > p {
  text-align: right;
  padding-right: 10px;
  margin-top: 20px;
}
</style>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      realname: "",
      isrealname: "",
      user_card: "",
      isuser_card: "",
      phone: "",
      isphone: "",
    };
  },
  methods: {
    ...mapActions(["getData"]),
    checkName() {
      //真实姓名
      let namereg = /^[\u2E80-\u9FFF]{2,}$/;
      if (namereg.test(this.realname)) {
        this.isrealname = "success";
        return true;
      } else {
        this.isrealname = "error";
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
      if (user_cardreg.test(this.user_card)) {
        this.isuser_card = "success";
      } else {
        this.isuser_card = "error";
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
      if (phonereg.test(this.phone)) {
        this.isphone = "success";
      } else {
        this.isphone = "error";
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
        this.axios
          .post(
            "/register",
            "realname=" +
              this.realname +
              "&user_card=" +
              this.user_card +
              "&phone=" +
              this.phone
          )
          .then((res) => {
            if (res.data.code == 1) {
              this.$messagebox("注册提示", "注册成功,默认密码为身份证后8位");
              this.$router.push("/login");
            } else {
              //用于显示提示框
              this.$messagebox("注册提示", "用户名已存在");
            }
          });
      }
    },
  },
  watch: {},
};
</script>
