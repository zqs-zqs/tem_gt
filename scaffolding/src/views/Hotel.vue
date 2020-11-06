<template>
  <!-- 顶部导航栏开始 -->
  <div>
    <header>
      <mt-header title="酒店" fixed>
        <router-link slot="left" to="/">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </header>
    <!-- 轮播图开始 -->
    <div>
      <mt-swipe class="img1" :showIndicators="true" :auto="3000" :speed="500">
        <mt-swipe-item
          ><img class="img2" src="../assets/icon/b1.jpg"
        /></mt-swipe-item>
        <mt-swipe-item
          ><img class="img2" src="../assets/icon/b3.jpg"
        /></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图结束 -->
    <!-- 表单开始1 -->
    <div class="bj">
      <div class="bj1">
        <div class="bj2">
          <div class="font2">
            <p>国内</p>
            <p>海外</p>
            <p>钟点房</p>
            <p>民宿</p>
          </div>
          <div class="oo">
            <div class="font3">
              <img src="../assets/icon/hotel6.png" alt="" />
              <span>您有2张优惠券待</span>
              <span class="color1">领取</span>，
              <span>最高优惠</span>
              <span class="color1">10元</span>
              <img src="../assets/icon/left.png" alt="" />
            </div>
            <div class="font4">
              <span style="font-size: 20px">北京</span>
              <div>
                <img src="../assets/icon/hotel10.png" alt="" />
                <span style="color: #1296db; font-size: 8px">当前位置</span>
              </div>
            </div>
            <div class="font5">光健字/酒店名/位置/品牌</div>
            <div class="font5">价格/星级</div>
            <mt-button type="primary" class="button1">搜索酒店</mt-button>
            <div class="hotel">
              <div class="hotel1">
                <img src="../assets/icon/j.png" alt="" />
                <p class="hotel2">经济酒店</p>
              </div>
              <div class="hotel1">
                <img src="../assets/icon/weibiaoti-.png" alt="" />
                <p class="hotel2">五星酒店</p>
              </div>
              <div class="hotel1">
                <img src="../assets/icon/z.png" alt="" />
                <p class="hotel2">钟点房</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 表单结束1 -->
      <!-- 表单开始2 -->
      <div>
        <div class="tj_title">北京酒店攻略</div>
        <div class="tj">
          <img src="../assets/icon/a5.jpg" alt="" />
          <img src="../assets/icon/a2.jpg" alt="" />
        </div>
        <div class="tj1">
          <img src="../assets/icon/a1.jpg" alt="" />
        </div>
        <div class="tj2">
          <img src="../assets/icon/a4.jpg" alt="" />
          <img src="../assets/icon/a3.jpg" alt="" />
        </div>
      </div>
    </div>
    <!-- 表单结束2 -->

    <!-- 底部选项卡开始 -->
    <div>
      <mt-tabbar class="font1" fixed>
        <mt-tab-item style="color: black">
          酒店订单
          <img src="../assets/icon/hotel3.png" slot="icon" />
        </mt-tab-item>
        <mt-tab-item style="color: black">
          浏览/收藏
          <img src="../assets/icon/hotel2.png" slot="icon" />
        </mt-tab-item>
        <mt-tab-item style="color: black">
          我的优惠
          <img src="../assets/icon/hotel1.png" slot="icon" />
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <!-- 底部选项卡结束 -->
  </div>
  <!-- 顶部导航栏结束 -->
</template>
<style scoped>
.mint-swipe {
  margin-top: 2.55rem;
}
.tj_title {
  font-weight: 600;
  margin-left: 0.5rem;
  padding: 0.5rem 0 0.3rem;
}
.tj,
.tj1,
.tj2 {
  padding: 0.5rem 0.6rem;
}
.tj img,
.tj1 img,
.tj2 img {
  border-radius: 8px;
}
.tj > img {
  width: 48%;
  margin-left: 4px;
}
.tj1 > img {
  width: 98%;
}
.tj2 > img {
  width: 48%;
  margin-left: 4px;
}
.hotel2 {
  font-size: 8px;
  padding-top: 6px;
}
.hotel1 {
  text-align: center;
}
.hotel {
  display: flex;
  justify-content: space-between;
  padding: 18px;
}
/* .button1 {
  margin-left: 4%;
  padding: 0 120px;
} */
.color1 {
  color: orange;
}
.oo {
  padding: 0 8px;
}
.bj {
  background-color: #f0eeee;
  height: 900px;
}
.bj1 {
  background-color: #f0eeee;

  padding: 0 12px;
}
.bj2 {
  background-color: white;
  border-radius: 8px;
}
.img1 {
  height: 5.5rem;
}
.img2 {
  height: 88px;
  width: 100%;
}
.font2 {
  display: flex;
  justify-content: space-around;
  /* background-color: #f0eeee; */
  padding: 10px;
}
.font3 {
  background-color: #f0eeee;
  text-align: center;
  font-size: 12px;
  width: 80%;
  margin: 0 auto;
  border-radius: 4px;
  padding: 2px;
}
.font4 {
  display: flex;
  justify-content: space-around;
  padding: 12px;
  border-bottom: 1px solid#f0eeee;
}
.font5 {
  padding: 20px;
  border-bottom: 1px solid#f0eeee;
  color: #9c9393;
}
</style>
