<template>
  <div class="container">
    <!-- 头部开始 -->
    <div class="login">
      <mt-header title="我的" fixed>
        <router-link to="/set" slot="left">
          <img src="../../public/img/my_icon/shezhi.png" />
        </router-link>
        <router-link to="/" slot="right">
          <img src="../../public/img/my_icon/xiaoxi.png" />
        </router-link>
      </mt-header>
    </div>
    <!-- 头部结尾 -->
    <!-- 登陆注册开始 -->
    <div class="center">
      <!-- 未登录状态 -->
      <div v-if="this.$store.state.isLogined == 0">
        <p>Hi~欢迎来到高铁管家</p>
        <p>新用户注册享特别好礼</p>
        <span>
          <router-link to="/login">登录</router-link>
          <span>/</span>
          <router-link to="/register">注册</router-link>
        </span>
      </div>
      <!-- 登录状态 -->
      <div v-else @click="skip_personal()">
        <div>
          <img src="../../public/imgsc/me.png" />
        </div>
        <div>
          <div>{{this.$store.state.nickname}},您好！</div>
        </div>
      </div>
      <div>
        <img src="../../public/img/my_icon/kefu.png" alt="" />
        <span>客服</span>
      </div>
    </div>
    <!-- 登录注册结尾 -->
    <!-- 白金条开始 -->
    <div class="content-money">
      <ul v-if="this.$store.state.isLogined == 0">
        <li v-for="(v, i) of money" :key="i">
          <p><img :src="require(`../../public/img/my_icon/${v[1]}.png`)" /></p>
          <span>{{ v[0] }}</span>
        </li>
      </ul>
      <ul v-else>
        <li v-for="(v, i) of money1" :key="i">
          <p>
            <span>{{ v[1] }}</span>
          </p>
          <span>{{ v[0] }}</span>
        </li>
      </ul>
    </div>
    <!-- 白金条结尾 -->
    <!-- 我的订单开始 -->
    <div class="content-order">
      <div>
        <p>我的订单</p>
        <p>
          <span v-if="this.$store.state.isLogined==0" @click="alertLogin()">查看全部></span>
          <router-link to="/MyOrder" v-else>查看全部></router-link>
        </p>
      </div>
      <ul>
        <div v-if="this.$store.state.isLogined==0">
          <li v-for="(v, i) of order" :key="i" @click="alertLogin()">
            <p><img :src="require(`../../public/img/my_icon/${v[1]}.png`)" /></p>
            <span>{{ v[0] }}</span>
          </li>
        </div>
        <div v-else>
          <li v-for="(v, i) of order" :key="i" @click="toDetails()">
            <p><img :src="require(`../../public/img/my_icon/${v[1]}.png`)" /></p>
            <span>{{ v[0] }}</span>
          </li>
        </div>
      </ul>
    </div>
    <!-- 我的订单结尾 -->
    <!-- 广告位开始---轮播图 -->
    <div class="content-poster">
      <mt-swipe :showIndicators="false">
        <mt-swipe-item v-for="(v, i) of poster" :key="i">
          <img :src="require(`../../public/img/my_icon/${v}.jpg`)" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 广告位结尾 -->
    <!-- 常用功能开始 -->
    <div class="content-func">
      <div><p>常用功能</p></div>
      <div v-for="(v, i) of fun" :key="i" @click="more">
        <p><img :src="require(`../../public/img/my_icon/${v[1]}.png`)" /></p>
        <span>{{ v[0] }}</span>
      </div>
    </div>
    <!-- 常用功能结尾 -->
    <!-- 签到活动开始 -->
    <div class="content-active">
      <div v-for="(v, i) of 4" :key="i" @click="more">
        <div>
          <img src="../../public/img/my_icon/qiandao.png" />
        </div>
        <div>
          <p>签到领积分</p>
          <p>签满有大礼</p>
        </div>
      </div>
    </div>
    <!-- 签到结尾 -->
    <!-- 滑动卡片开始 -->
    <div class="content-card">
      <div class="content-card-item" v-for="(item, index) in 3" :key="index">
        <div class="each-card">
          <div>
            <img src="../../public/img/my_icon/tubiaozhizuomoban-.png" />
            <span>正在热议</span>
          </div>
          <div>你会提前到车站还是卡点到？</div>
          <div>
            <div>
              <img src="../../public/img/my_icon/qunzuduoren.png" />
              <span>686人已参与讨论</span>
            </div>
          </div>
          <div>
            <button>提前到</button>
            <button>卡点到</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 滑动卡片结束 -->
    <!-- 游戏开始 -->
    <div class="content-paly">
      <div>
        <div>
          <img src="../../public/img/my_icon/youxi.png" />
          <div>
            <p>精彩活动</p>
            <span>海量游戏 即点即玩</span>
          </div>
        </div>
        <button>开玩</button>
      </div>
    </div>
    <!-- 游戏结束 -->
    <mt-tabbar fixed v-model="tabbar">
      <mt-tab-item id="train" @click.native="skip_index()">
        火车票
        <img
          src="../../public/imgsc/train.png"
          slot="icon"
          v-if="tabbar != 'train'"
        />
        <img src="../../public/imgsc/trained.png" slot="icon" v-else />
      </mt-tab-item>
      <mt-tab-item id="me" @click.native="skip_person()">
        我的
        <img
          src="../../public/imgsc/me.png"
          slot="icon"
          v-if="tabbar != 'me'"
        />
        <img src="../../public/imgsc/meed.png" slot="icon" v-else />
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style scoped>
/* 组件样式开始 */
.mint-popup {
  width: 78%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
}
.mint-popup ul {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
}
.mint-popup ul li {
  padding: 0.2rem 0.8rem;
}
/* 组件样式结尾---我的订单 */
.content-paly {
  padding: 0.5rem;
  font-size: 0.85rem;
  margin-bottom: 2.5rem;
}
.content-paly > div {
  background: #fff;
  border-radius: 0.2rem;
  display: flex;
  padding: 0.5rem;
  margin: 0.2rem 0;
  justify-content: space-between;
}
.content-paly > div > div {
  display: flex;
  justify-content: space-between;
}
.content-paly > div img {
  width: 2rem;
  margin-right: 0.5rem;
  border-radius: 50%;
}
.content-paly > div p {
  font-weight: 600;
  font-size: 1rem;
  padding: 0.1rem 0;
}
.content-paly button {
  border-radius: 2rem;
  background: rgb(197, 147, 7);
  padding: 0.5rem 1rem;
  border: 0;
}

.content-card {
  padding: 0.3rem 0.75rem;
  background: #f0eeee;
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
}
.content-card::-webkit-scrollbar {
  display: none;
}
.content-card-item {
  border-radius: 0.2rem;
  display: flex;
  margin-right: 8px;
  background-image: linear-gradient(to bottom, #d0d0d0, #abcae4);
}
.each-card {
  width: 13.5rem;
  height: 6rem;
  color: #666;
  font-size: 0.5rem;
  padding: 0.5rem;
}
.each-card div:nth-child(2) {
  font-weight: 600;
  font-size: 1rem;
  color: #000;
  padding: 0.2rem 0;
}
.each-card div img {
  width: 10%;
  padding: 0 0.1rem;
}
.each-card div button {
  border-radius: 25%;
  margin: 0.3rem 0.5rem;
  padding: 0.3rem;
  color: #fff;
  background: rgb(12, 154, 236);
  border: 0;
}
.each-card div button:last-child {
  background: rgb(247, 45, 9);
}

.content-active > div {
  background: #fff;
  border-radius: 0.2rem;
  width: 50%;
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
  justify-content: space-around;
}
.content-active > div > div > p:first-child {
  font-weight: 600;
}
.content-active > div > div > p:last-child {
  font-size: 0.8rem;
  padding: 0.2rem;
}
.content-active div img {
  width: 200%;
}
.content-func,
.content-active {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.content-func div:first-child {
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.3rem 0.5rem;
  font-weight: 600;
}
.content-func div {
  padding: 0.5rem 0;
  background: #fff;
  border-radius: 0.2rem;
  width: 25%;
  text-align: center;
}
.content-func div p img {
  width: 33%;
}
.content-poster {
  height: 4.5rem;
}
.content-poster img {
  width: 100%;
}
.content-order > div {
  background: #fff;
  border-radius: 0.2rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  align-items: center;
}
.content-order > div a,.content-order > div span {
  font-weight: 400;
  outline: 0;
  background: #fff;
  border: 0;
  font-size: 0.9rem;
  text-decoration: none;
  color: #666;
}
.content-order > ul > div{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.content-order > ul > div>li img {
  width: 98%;
  border-radius: 50%;
}
.content-order,
.content-money,
.content-poster,
.content-func,
.content-active,
.content-paly {
  background-color: #f9f9f9;
  padding: 0.3rem 0.75rem;
}
.content-money ul,
.content-order > ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  background: #fff;
  padding: 0.5rem;
  border-radius: 0.2rem;
  text-align: center;
}
.content-money ul li img {
  width: 70%;
}
.content-money ul li>p{
  padding: .5rem 0;
  font-weight: 600;
}
.center {
  background-color: #f9f9f9;
  display: flex;
  font-size: 14px;
  padding: 3.5rem 0.75rem 1rem;
  justify-content: space-between;
  align-items: center;
}
.center > div:last-child {
  display: flex;
  justify-content: flex-start;
}
.center > div > div > img {
  padding: 0.3rem 1rem .3rem;
  width: 35px;
  border-radius: 50%;
}
.center > div > div >div{
  padding: .2rem;
  font-size: 1rem;
  font-weight: 600;
}
.center div:first-child p:first-child {
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0 0 0.5rem 0;
}
.center div:first-child p:nth-child(2) {
  padding: 0.3rem 0 1rem 0;
}
.center div:first-child span {
  border-radius: 1rem;
  padding: 0.4rem;
  color: #fff;
  background: #66c9ea;
}
.center div:first-child span a {
  text-decoration: none;
  color: #fff;
}
.center div:nth-child(2) {
  float: right;
}
.login {
  font-size: 0.5rem;
  color: #333;
}
.login img {
  width: 28%;
}
.mint-header {
  align-items: center;
  background-color: #f9f9f9;
  color: #000;
}
</style>

<script>
export default {
  data() {
    return {
      tabbar: "me",
      trip: [
        ["火车", "huoche"],
        ["机票", "jipiao"],
        ["酒店", "jiudian"],
        ["打车", "zhuanche"],
        ["汽车", "qichepiao"],
      ],
      fun: [
        ["打车", "dangdidachefuwu2"],
        ["点评", "dianping"],
        ["乘车", "changyongchengcheren"],
        ["通知", "weixin"],
        ["电话", "kefudianhua"],
        ["会员", "iconfont12306"],
        ["酒店", "dingjiudiantianchong"],
        ["发票", "fapiao"],
      ],
      money: [
        ["金条", "jintiao"],
        ["白条", "baitiao"],
        ["红包", "hongbao"],
        ["积分", "jf"],
        ["钱包", "qianbao3"],
      ],
      money1: [
        ["金条", "0.00"],
        ["白条", "0.00"],
        ["红包", "0"],
        ["积分", "0"],
        ["钱包", "0.00"],
      ],
      order: [
        ["火车", "huoche"],
        ["机票", "jipiao"],
        ["打车", "dache_fill"],
        ["酒店", "jiudian"],
        ["汽车", "qichepiao"],
      ],
      poster: [["poster_1"], ["poster_2"], ["poster_3"], ["poster_4"]],
    };
  },
  methods: {
    toDetails() {
      this.$router.push("/trian_details");
    },
    alertLogin(){
      this.$messagebox("提示","请先登录");
    },
    more(){
      this.$router.push('/more')
    },
    skip_index(){
      this.$router.push('/')
    },
    skip_person(){
      this.$router.push('/person')
    },
    skip_personal(){
      this.$router.push('personal')
    }
  },
};
</script>