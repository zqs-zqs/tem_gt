<template>
  <div>
    <!-- 头部 -->
    <mt-header title="" class="header">
      <router-link to="/personal" slot="left" v-if="this.$store.state.isLogined">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/person" slot="left" v-else>
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button @click="pop" slot="right"><img src="../assets/lqyimges/more.png"></mt-button>
    </mt-header>
    <div>
      <h1 class="title">登录账号</h1>
      <!-- 表单区域开始 -->
      <div>
        <mt-field
          label="用户名"
          placeholder="用户名/手机号"
          type="text"
          autocomplete="off"
          v-model="uname"
          @blur.native.capture="checkUname"
        ><img src="../assets/lqyimges/user.png"></mt-field>
        <mt-field
          class="biaodan"
          label="密码"
          placeholder="密码"
          type="password"
          autocomplete="off"
          v-model="upwd"
          @blur.native.capture="checkUpwd"
        ><img src="../assets/lqyimges/password.png" ></mt-field>
      </div>
      <!-- 表单区域结束 -->
    </div>
    <p class="ziti">登录表示您已阅读并同意<router-link to="/login" class="abq">[账号授权协议]</router-link></p>
    <mt-button class="dl" size="large" type="primary" @click="handle">登录</mt-button>
    <div class="zc">
      <p><router-link to="/register" class="abq">注册新账号</router-link></p>
    </div>
    <!-- 更多 -->
    <mt-popup v-model="popupVisible" position="bottom" class="more">
      <router-link to="/register" class="p">注册新账号</router-link>
      <router-link to="/revise" class="p">忘记密码?</router-link>
    </mt-popup>
  </div>
</template>
<style>
.ziti{
  line-height: 20px;
  margin-top: 8px;
  padding: 5px 10px;
  color: #555;
}
.biaodan{
  margin: 10px 0;
}
.more>.p{
  display: block;
  text-decoration: #000;
  color: #000;
  background-color: #fff;
  padding: 20px 50px;
  border-radius: 10px;
  border: 0;
  margin: 0 auto;
}
.more{
  width: 90%;
  border-radius: 6px;
  text-align: center;
  margin-bottom: 20px;
}
.dl{
  margin: 30px auto;
  width: 92% !important;
}
.zc > p {
  text-align: center;
  padding-right: 10px;
  margin-top: 20px;
}
.abq {
  text-decoration: none;
  color: #1e81cc;
}
.title {
  font-size: 26px;
  font-weight: 600;
  padding-left: 10px;
  margin: 30px 0;
}
.header {
  background-color: #fff !important;
  color: #000 !important;
  font-size: 20px !important;
  font-weight: bold !important;
  padding-top: 16px !important;
}
</style>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      popupVisible:false
    };
  },
  methods: {
    //pop
    pop(){
      this.popupVisible=true;
    },
    checkUname() {
      //校验用户名
      let unameReg = /^[0-9a-zA-Z_]{6,20}$/;
      if (unameReg.test(this.uname)) {
        return true;
      } else {
        return false;
      }
    },
    checkUpwd() {
      //校验密码
      let paswReg = /^[0-9a-zA-Z_]{6,20}$/;
      if (paswReg.test(this.upwd)) {
        return true;
      } else {
        return false;
      }
    },
    handle() {
      // 运用短路逻辑 校验前三个数据的返回值是否为true
      if (this.checkUname() && this.checkUpwd()) {
        let obj = {
          uname: this.uname,
          upwd : this.upwd,
        };
        this.axios.post("/login", this.qs.stringify(obj)).then((res) => {
          // console.log(res.data);
          if (res.data.code == 1) {
            this.$store.commit("logined", res.data.info);
            localStorage.setItem("isLogin", "1");
            this.$router.push("/person");
          } else {
            //用于显示提示框
            this.$messagebox("登录提示", "用户名或密码错误");
          }
        });
      }
    },
  },
};
</script>