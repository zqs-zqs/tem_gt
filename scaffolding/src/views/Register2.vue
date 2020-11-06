<template>
  <div>
    <!-- 头部 -->
    <mt-header title="" class="header">
      <router-link to="/register" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <h1 class="title">注册自定义账号</h1>
      <!-- 表单区域开始 -->
      <div class="field">
        <p class="qian">用户名</p>
        <mt-field
          placeholder="请输入用户名"
          type="text"
          :attr="{ maxlength: 20 }"
          autocomplete="off"
          v-model="username"
          :state="isusername"
          @blur.native.capture="checkUsername"
        ></mt-field>
        <p class="qian">密码</p>
        <mt-field
          placeholder="请输入8-16位密码"
          type="password"
          :attr="{ maxlength: 16 }"
          autocomplete="off"
          v-model="upwd"
          :state="isupwd"
          @blur.native.capture="checkUpwd"
        ></mt-field>
        <p class="qian">确认密码</p>
        <mt-field
          placeholder="请确认密码"
          type="password"
          :attr="{ maxlength: 15 }"
          autocomplete="off"
          v-model="conupwd"
          :state="isconupwd"
          @blur.native.capture="checkConupwd"
        ></mt-field>
      </div>
      <!-- 表单区域结束 -->
    </div>
    <mt-button class="bottom" size="large" type="primary" @click="handle"
      >免费注册</mt-button
    >
  </div>
</template>
<style>
.bottom {
  margin-top: 30px;
}
</style>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      isusername: "",
      upwd: "",
      isupwd: "",
      conupwd: "",
      isconupwd: "",
    };
  },
  methods: {
    ...mapActions(["getData"]),
    checkUsername() {
      //用户名
      let namereg = /^[0-9a-zA-Z]{8,20}$/;
      if (namereg.test(this.username)) {
        this.isusername = "success";
        return true;
      } else {
        this.isusername = "error";
        // 标准方式消息提示框
        this.$toast({
          message: "请输入正确的用户名格式", //内容
          position: "top", //位置
          duration: "2000", //2秒
        });
        return false;
      }
    },
    checkUpwd() {
      //密码
      let upwdreg = /^[0-9a-zA-Z]{8,16}$/;
      if (upwdreg.test(this.upwd)) {
        this.isupwd = "success";
      } else {
        this.isupwd = "error";
        this.$toast({
          message: "请输入正确的密码格式", //内容
          position: "top", //位置
          duration: "2000", //2秒
        });
        return false;
      }
    },
    checkConupwd() {
      //校验两次密码
      if (this.upwd == this.conupwd && this.conupwd!="") {
        this.isconupwd = "success";
        return true;
      } else {
        this.$toast({
          message: "两次密码不一样",
          position: "top",
          duration: "2000",
        });
        return false;
      }
    },
    handle() {
      if (this.checkUsername && this.checkUpwd && this.checkConupwd) {
        this.axios
          .post(
            "/register2",
            "username=" + this.username + "&upwd=" + this.upwd
          )
          .then((res) => {
            if (res.data.code == 1) {
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