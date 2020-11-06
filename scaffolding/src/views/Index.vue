<template>
  <div>
    <!-- 轮播图开始 -->
    <div>
      <mt-swipe id="swipe-height" :auto="3000" :speed="500">
        <mt-swipe-item>
          <router-link to="/more">
            <img src="../../public/imgsc/1.png" /> </router-link
        ></mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/more">
            <img src="../../public/imgsc/2.png" /> </router-link
        ></mt-swipe-item>
        <mt-swipe-item
          ><router-link to="/more">
            <img src="../../public/imgsc/3.png" /> </router-link
        ></mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/more">
            <img src="../../public/imgsc/1.png" /> </router-link
        ></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图结束 -->
    <!-- 导航栏开始 -->
    <div>
      <mt-navbar v-model="active" id="dh">
        <mt-tab-item id="d2" class="trin">
          <router-link to="/" class="text">火车票</router-link>
        </mt-tab-item>
        <mt-tab-item id="d3" class="plan">
          <router-link to="/hotel">酒店</router-link>
        </mt-tab-item>
      </mt-navbar>
    </div>
    <!-- 导航栏结束 -->
    <!-- 车票地点选择开始 -->
    <mt-navbar class="article">
      <div class="text-1" @click="checkPlacego1">
        {{ place1 }}
      </div>
      <div>
        <img src="../../public/imgsc/toggle.png" @click="toggle" />
      </div>
      <div class="text-1" @click="checkPlaceto1">
        {{ place2 }}
      </div>
    </mt-navbar>
    <!-- 车票地点选择结束 -->
    <!-- 出发地点选择 -->
    <mt-popup v-model="checkPlacego" position="top" class="checkDate">
      <div>
        <mt-header title="选择出发站点">
          <div slot="left" @click="back1">
            <mt-button icon="back" class="button1"></mt-button>
          </div>
        </mt-header>
      </div>
      <span class="citys">城市选择</span>
      <div class="placeCheckCss" @click="checkCitygo">
        <div class="placeDD" v-for="(v, i) of zdPlace" :key="i">{{v.place}}</div>
      </div>
    </mt-popup>
    <!-- 到达地点选择 -->
    <mt-popup v-model="checkPlaceto" position="top" class="checkDate">
      <div>
        <mt-header title="选择到达站点">
          <div slot="left" @click="back2">
            <mt-button icon="back" class="button1"></mt-button>
          </div>
        </mt-header>
      </div>
      <span class="citys">城市选择</span>
      <div class="placeCheckCss" @click="checkCityto">
        <div class="placeDD" v-for="(v, i) of zdPlace" :key="i">{{v.place}}</div>
      </div>
    </mt-popup>
    <!-- 火车票搜索开始 -->
    <div @click="rq">
      <span id="ymd">{{ date }}</span>
      <span>星期{{ week }}</span>
    </div>
    <div>
      <mt-button type="primary" size="large" class="button2" @click="place_to"
        >搜索火车票</mt-button
      >
      <span class="histoir" @click="histoir_place">{{ histoir }}</span>
    </div>
    <div v-if="pop"></div>
    <!-- 日历 -->
    <mt-popup v-model="popupVisible" position="top" class="checkDate" v-else>
      <mt-header title="出发日期选择" class="header"></mt-header>
      <vue-hash-calendar
        :visible.sync="popupVisible"
        :disabled-date="disabledDate"
        @click="confirm"
      ></vue-hash-calendar>
    </mt-popup>
    <!-- 火车票搜索结束 -->
    <!-- 选项滑动功能开始 -->
    <mt-swipe
      id="swipe-height2"
      :showIndicators="false"
      :auto="0"
      :continuous="false"
    >
      <mt-swipe-item>
        <div class="dom1">
          <router-link to="/plan">
            <img src="../../public/imgsc/shop.png" /><br />
            精选好货
          </router-link>
          <router-link to="/plan">
            <img src="../../public/imgsc/diner.png" /><br />
            火车订餐
          </router-link>
          <router-link to="/plan">
            <img src="../../public/imgsc/didi.png" /><br />
            打车
          </router-link>
          <router-link to="/plan">
            <img src="../../public/imgsc/bus.png" /><br />
            汽车票
          </router-link>
          <router-link to="/plan">
            <img src="../../public/imgsc/qiang.png" /><br />
            抢票
          </router-link>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="dom1">
          <router-link to="/plan">
            <img src="../../public/imgsc/fuwu.png" /><br />
            企业服务
          </router-link>
          <router-link to="/plan">
            <img src="../../public/imgsc/plan.png" /><br />
            航班动态
          </router-link>
          <router-link to="/plan">
            <img src="../../public/imgsc/money.png" /><br />
            借钱
          </router-link>
          <router-link to="/plan">
            <img src="../../public/imgsc/xiuxi.png" /><br />
            高铁休息室
          </router-link>
          <router-link to="/plan">
            <img src="../../public/imgsc/more.png" /><br />
            更多
          </router-link>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 选项滑动功能结束 -->
    <!-- 酒店预订开始 -->
    <h1>酒店预订</h1>
    <div class="jdyd">
      <router-link to="/hotel">
        <img src="../../public/imgsc/jd1.jpg" /><br />
        <span class="span1">华尔道夫酒店</span><br />
        <div class="price">
          <span class="price1">¥671</span><span class="span2">起</span>
        </div>
      </router-link>
      <router-link to="/hotel">
        <img src="../../public/imgsc/jd2.jpg" /><br />
        <span class="span1">星河丽思卡尔顿酒店</span><br />
        <div class="price">
          <span class="price1">¥1322</span><span class="span2">起</span>
        </div>
      </router-link>
      <router-link to="/hotel">
        <img src="../../public/imgsc/jd3.jpg" /><br />
        <span class="span1">榛悦隆堡酒店</span><br />
        <div class="price">
          <span class="price1">¥775</span><span class="span2">起</span>
        </div>
      </router-link>
      <router-link to="/hotel">
        <img src="../../public/imgsc/jd4.jpg" /><br />
        <span class="span1">海洋莱特顿酒店</span><br />
        <div class="price">
          <span class="price1">¥412</span><span class="span2">起</span>
        </div>
      </router-link>
      <router-link to="/hotel">
        <img src="../../public/imgsc/jd5.jpg" /><br />
        <span class="span1">香格里拉酒店</span><br />
        <div class="price">
          <span class="price1">¥1070</span><span class="span2">起</span>
        </div>
      </router-link>
      <router-link to="/hotel">
        <img src="../../public/imgsc/jd6.jpg" /><br />
        <span class="span1">丽思卡尔顿酒店</span><br />
        <div class="price">
          <span class="price1">¥3148</span><span class="span2">起</span>
        </div>
      </router-link>
      <router-link to="/hotel">
        <img src="../../public/imgsc/jd7.jpg" /><br />
        <span class="span1">金安大饭店</span><br />
        <div class="price">
          <span class="price1">¥709</span><span class="span2">起</span>
        </div>
      </router-link>
      <router-link to="/hotel">
        <img src="../../public/imgsc/jd8.jpg" /><br />
        <span class="span1">净月潭益田喜来登酒店</span><br />
        <div class="price">
          <span class="price1">¥564</span><span class="span2">起</span>
        </div>
      </router-link>
    </div>
    <!-- 酒店预订结束 -->
    <!-- 底部选项卡开始 -->
    <div>
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
    <!-- 底部选项卡结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "d2",
      tabbar: "train",
      place: "",
      place1: "北京",
      place2: "上海",
      date: "",
      popupVisible: false,
      date2: 0,
      year: "",
      pop: true,
      week: "",
      histoir: "",
      arr: ["日", "一", "二", "三", "四", "五", "六"],
      checkPlacego: false,
      checkPlaceto: false,
      date3:"",
      zdPlace:[]
    };
  },
  // 日期选择
  methods: {    
    confirm(date) {
      this.week = this.arr[date.getDay()];
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      this.date = y + "年" + m + "月" + d + "日";
      this.pop = true;
      let realdate=this.date+date.getDay();
      localStorage.setItem('realdate',realdate)
    },
    // 地点交换
    toggle() {
      this.place = this.place1;
      this.place1 = this.place2;
      this.place2 = this.place;
    },
    skip_index(){
      this.$router.push('/')
    },
    skip_person(){
      this.$router.push('/person')
    },
    rq() {
      this.popupVisible = true;
      this.pop = false;
    },
    disabledDate(date) {
      let timestamp = date.getTime();
      let oneday = 10*60*60*1000;
      if (timestamp + oneday < new Date().getTime() ) {
        return true;
      }
      return false;
    },
    checkdate(date) {
      this.time = date; //得到日期年月日
      this.week = this.get_week(date); //根据日期计算星期
      this.time_show = false; //隐藏弹窗
    },
    // 搜索车票
    place_to() {
      localStorage.setItem("day",this.date)
      localStorage.setItem("date", this.week);
      localStorage.setItem("place1", this.place1);
      localStorage.setItem("place2", this.place2);
      this.$router.push("/ticked");
    },
    // 历史记录修改地址
    histoir_place() {
      this.place1 = this.histoir.split("→")[0];
      this.place2 = this.histoir.split("→")[1];
    },
    // 地点选择
    checkPlacego1() {
      this.checkPlacego = true;
    },
    checkPlaceto1() {
      this.checkPlaceto = true;
    },
    back1() {
      this.checkPlacego = false;
    },
    back2() {
      this.checkPlaceto = false;
    },
    checkCitygo(e){
       this.place1=e.target.innerHTML
       this.checkPlacego=false
    },
    checkCityto(e){
       this.place2=e.target.innerHTML
       this.checkPlaceto=false
    }
  },
  mounted() {
    var date = new Date();
    this.date3=date;
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    this.week = this.arr[date.getDay()];
    this.date = "" + y + "年" + m + "月" + d + "日";
    let date1 = new Date(y, m, 0);
    this.date2 = date1.getDate();
    this.year = y + "年" + m + "月" + d + "日";
    // 获取已经搜索过的记录
    let pl1 = localStorage.getItem("place1");
    let pl2 = localStorage.getItem("place2");
    if (pl1 != null && pl2 != null) {
      this.histoir = pl1 + "→" + pl2;
    }
    // 请求站点
    this.axios.get('/').then(result=>{
      this.zdPlace=result.data;
      // console.log(result);
    })
  },
};
</script>
<style>
#swipe-height img{
  width: 100%;
}
#swipe-height {
  height: 140px;
  /* margin-bottom: -16px; */
}
a {
  text-decoration: none;
  color: black;
  font-size: .9rem;
}
#dh {
  background-color: #dce8f596;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.trin {
  background-color: white;
  border: 0px !important;
}
.mint-tab-item {
  border-radius: 8px !important;
}
.text {
  color: #26a2ff;
}
#d3 {
  border-bottom-right-radius: 50px !important;
}
.article {
  margin-top: 10px;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #00000012;
  width: 90%;
  margin: 10px auto;
  padding: 10px;
}
.text-1 {
  width: 30%;
  font-size: 20px;
}
.button2 {
  width: 90% !important;
  margin: 10px auto;
}
#ymd {
  margin: 0px 10px 0px 20px !important;
  font-weight: bold;
  font-size: 20px;
}
.checkDate {
  width: 100%;
}
.header {
  background-color: white !important ;
  color: black !important;
}
.histoir {
  border-radius: 5px;
  background-color: gainsboro;
  font-size: 5px;
  margin-left: 15px;
}
.dom1 {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  text-align: center;
  font-size: 10px;
}
.dom1 img {
  margin-bottom: 5px;
}
#swipe-height2 {
  height: 90px;
}
.mint-swipe-indicators {
  margin-bottom: 8px;
}
h1 {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
}
.jdyd {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 15px 5px 55px 5px;
}
.span1 {
  display: block;
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
.price1 {
  color: red;
  font-size: 20px;
  font-weight: bold;
}
.span2 {
  font-size: 10px;
  color: red;
  text-align: center;
}
.price {
  margin: -10px 0px 10px 0px;
  text-align: center;
}
.placeCheckCss{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}
.citys{
  display: block;
  font-weight: bold;
  padding: 5px;
}
.placeDD{
  width: 31.333333%;
  padding: 5px 0px 5px 0px;
  height: 20px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #dce8f596;
}
</style>