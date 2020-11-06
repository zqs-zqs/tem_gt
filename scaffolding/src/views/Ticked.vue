<template>
  <!-- 顶部导航开始 -->
  <div>
    <header>
      <mt-header :title="place" fixed>
        <router-link slot="left" to="/">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/bench" class="short" slot="right"
          >候补抢票</router-link
        >
      </mt-header>
    </header>
    <!-- 日期选择开始 -->
    <!-- <div @click="date_1" id="date_2"></div> -->
    
    <!-- 顶部选项卡开始 -->
    <div>
      <mt-navbar v-model="active" class="a">
        <mt-tab-item id="1">火车</mt-tab-item>
        <mt-tab-item id="2"
          >机票
          <div>2小时15分</div></mt-tab-item
        >
        <mt-tab-item id="3">中转</mt-tab-item>
      </mt-navbar>
    </div>
    <!-- 顶部选项卡结束 -->
    <!-- 面板开始 -->
    <div class="mb">
      <mt-tab-container v-model="active">
        <!-- 火车内容开始 -->
        <mt-tab-container-item id="1">
          <!-- 1 -->
          <div class="dis1">
            <div><img src="../assets/icon/tehui.png" alt="" /></div>
            <div>
              <div>
                <span>{{ place1 }}</span>
                <img src="../assets/icon/fj.png" alt="" />
                <span>{{ place2 }}</span>
              </div>
              <span class="hour">2小时20分</span>
            </div>
            <div>
              <div class="rmb">
                <span class="rm">¥</span>
                <span class="nub">348</span>
                <span class="qi">起</span>
              </div>
              <div class="lj1">
                <img src="../assets/icon/xiangxia.png" alt="" />
                <span class="lj">领劵再返¥10</span>
              </div>
            </div>
          </div>
          <!-- 2开始 -->
          <div style="padding-bottom: 48px">
            <div  v-for="(k,p) of play" :key="p">
              <router-link class="dis2" :to="{path:'/details',query:{start:k.start,end:k.end}}">
              <div v-show="true">{{p+1 }}</div>
              <!-- 左 -->
              <div class="zuo">
                <div>
                  <span>{{k.start}}</span>
                  <div>
                    <span>{{ place1 }}</span>
                    <img src="../assets/icon/shi.png" alt="" />
                  </div>
                  <div class="fx">
                    <span>G415</span>
                    <div class="fx1">复兴号</div>
                    <img src="../assets/icon/credentials_icon1.png" alt="" />
                  </div>
                </div>
                <div>-2时04分——</div>
                <div>
                  <span>{{k.end}}</span>
                  <div class="sh">
                    <img src="../assets/icon/zhong.png" alt="" />
                    <span>{{place2}}</span>
                  </div>
                </div>
              </div>
              <!-- 右 -->
              <div>
                <span>¥233</span>
                <p>二等座</p>
                <p>有票</p>
              </div>
              </router-link>
            </div>
          </div>
          <!-- 2结束 -->
        </mt-tab-container-item>
        <!-- 火车内容结束 -->
        <!--机票内容开始  -->
        <mt-tab-container-item id="2">
          <div class="mb">
            <!-- 1  -->
            <div class="font">
              <img src="../assets/icon/4.png" alt="" />
              <span style="color: gray">当前日期坐飞机比高铁约</span>
              <span class="font1">便宜￥108</span>
            </div>
            <!-- 2 -->
            <div class="li">
              <span class="font2">离京提醒：</span>
              <span class="font3">根据最新北京市新型冠状...</span>
              <span>></span>
            </div>
            <!-- 2 -->
            <div class="li1">
              <img src="../assets/icon/hongbao.png" alt="" />
              <span>您有机票返现红包待领取</span>
              <img src="../assets/icon/lijilingqu-.png" alt="" />
            </div>
            <!-- 3 -->
            <div style="padding-bottom: 58px" class="li2">
              <div class="dis2" v-for="(k,p) of play" :key="p">
                <div v-show="true">{{ p+1 }}</div>
                <!-- 左 -->
                <div class="zuo">
                  <div>
                    <span>{{k.start}}</span>
                    <div>
                      <span class="font4">{{ place1 }}</span>
                      <!-- <img src="../assets/icon/donghang.png" alt=""> -->
                    </div>
                    <div class="fx">
                      <!-- <span>G415</span> -->
                      <img src="../assets/icon/donghang.png" alt="" />
                      <!-- <div class="fx1">复兴号</div> -->
                      <span class="font4">东航MU5390</span>
                      <!-- <img src="../assets/icon/credentials_icon1.png" alt=""> -->
                    </div>
                  </div>
                  <div>——</div>
                  <div>
                    <span>{{k.end}}</span>
                    <div class="sh">
                      <!-- <img src="../assets/icon/zhong.png" alt=""> -->
                      <span class="font4">{{ place2 }}</span>
                    </div>
                  </div>
                </div>
                <!-- 右 -->
                <div>
                  <span>¥558</span>
                  <div>
                    <span class="fx1">礼包</span>
                    <span class="butie">已补贴3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <!--机票内容结束  -->
        <!-- 中转开始 -->
        <mt-tab-container-item id="3">
          <div style="padding-bottom: 58px">
            <div class="dis2" v-for="(k,p) of play" :key="p">
              <div v-show="true">{{ p+1 }}</div>
              <!-- 左 -->
              <div class="zuo">
                <div>
                  <span>{{k.start}}</span>
                  <div>
                    <span class="p">{{ place1 }}</span>
                    <img src="../assets/icon/shi.png" alt="" />
                  </div>
                  <div class="font4">
                    <span>G5 二等座1张</span>
                  </div>
                </div>
                <div class="font5">-南京南-</div>
                <div>
                  <span>{{k.end}}</span>
                  <div class="sh">
                    <img src="../assets/icon/zhong.png" alt="" />
                    <span class="font4">{{ place2 }}</span>
                  </div>
                  <p class="font4">二等座有票</p>
                </div>
              </div>
              <!-- 右 -->
              <div>
                <span>¥578起</span>
                <p class="font4">全程5时31分</p>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <!-- 中转结束 -->
      </mt-tab-container>
    </div>
    <!-- 面板结束 -->
    <!-- 底部选项卡开始 -->
    <div>
      <mt-tabbar v-model="tabbar" fixed>
        <mt-tab-item id="index">
          出发时间
          <img
            src="../assets/icon/chufashijian.png"
            slot="icon"
            v-if="tabbar == 'index'"
          />
          <img src="../assets/iconfrom/chufashijian.png" slot="icon" v-else />
        </mt-tab-item>
        <mt-tab-item id="travel">
          耗时旅行
          <img
            src="../assets/icon/shalou.png"
            slot="icon"
            v-if="tabbar == 'travel'"
          />
          <img src="../assets/iconfrom/shalou.png" slot="icon" v-else />
        </mt-tab-item>

        <mt-tab-item id="arrive">
          到达时间
          <img
            src="../assets/icon/daodashijian.png"
            slot="icon"
            v-if="tabbar == 'arrive'"
          />
          <img src="../assets/iconfrom/daodashijian.png" slot="icon" v-else />
        </mt-tab-item>

        <mt-tab-item id="filtrate">
          筛选
          <img
            src="../assets/icon/shaixuan.png"
            slot="icon"
            v-if="tabbar == 'filtrate'"
          />
          <img src="../assets/iconfrom/shaixuan.png" slot="icon" v-else />
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <!-- 底部选项卡结束-->
  </div>
  <!-- 顶部导航结束 -->
</template> 
<style scoped>
.mint-navbar{
  margin-top: 2.5rem;
}
.short {
  text-decoration: none;
}
.a {
  background-color: #26a2ff;
}

.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid white;
  color: white;
  margin-bottom: 0px;
}
.mb {
  background: #f0eeee;
}

/* 火车class号1 */

.dis1 {
  display: flex;
  justify-content: space-between;
  background: white;
  margin: 3px 0;
  padding: 8px;
}

.hour {
  font-size: 10px;
}
.rmb {
  color: orange;
}
.rm {
  font-size: 8px;
}
.nub {
  font-size: 20px;
}
.qi {
  font-size: 8px;
}
.lj1 {
  display: flex;
  border: 1px solid orange;
  border-radius: 6px;
  background: rgb(206, 188, 171);
}

.lj {
  font-size: 8px;
  color: orange;
}
/* 火车class号2 */
.dis2 {
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  padding: 10px;
  margin: 3px 0;
}
.zuo {
  display: flex;
  justify-content: space-around;
}
.fx {
  display: flex;
}
.fx1 {
  border: 1px solid red;
  font-size: 12px;
  transform: scale(0.75);
  color: red;
  border-radius: 3px;
}
.sh {
  display: flex;
  margin-left: -6px;
}
/* 机票class号 */
.font {
  text-align: center;
  background: rgb(243, 243, 13);
  padding: 6px;
}
.font1 {
  color: orange;
}
.li {
  text-align: center;
  padding: 8px;
  background: white;
}
.li1 {
  text-align: center;
  padding: 8px;
  background: white;
  margin: 6px;
  border-radius: 4px;
}
.li2 {
  margin: 6px;
  border-radius: 4px;
}
.font2 {
  color: red;
  font-weight: 600;
}
.font3 {
  color: red;
}
.font4 {
  font-size: 12px;
}
.butie {
  background: orange;
  color: white;
  font-size: 12px;
  transform: scale(0.75);
  margin-left: 6px;
}
/* 中转class号 */
.font5 {
  color: blue;
}
#date_2 {
  display: flex;
  justify-content: space-around;
  background-color: #26a2ff;
  font-size: 10px;
  text-align: center;
  color: white;
}
.bt{
  border: 1px solid red;
}
</style>
<script>
export default {
  data() {
    return {
      //默认被选定的顶部选项卡及面板的ID
      active: "1",
      //默认被选定的底部选项卡的ID
      tabbar: "index",
      // 循环
      play: [
        {start:"6:00",end:"8:00"},
        {start:"7:00",end:"9:00"},
        {start:"8:00",end:"10:00"},
        {start:"9:00",end:"11:00"},
        {start:"10:00",end:"12:00"},
        {start:"11:00",end:"13:00"},
        {start:"12:00",end:"14:00"},
        {start:"13:00",end:"15:00"},
        {start:"14:00",end:"16:00"},
        {start:"15:00",end:"17:00"},
        {start:"16:00",end:"18:00"}
      ],
      place1: "",
      place2: "",
      place: "北京→上海",
      day: "",
      moth: "",
      arry: [
        "日",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "日",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
      ],
      active_2: "",
    };
  },
  methods: {
    huo() {
      this.$router.push("/details");
    },
    date_1(e) {
      localStorage.setItem("checkDate", e.target.innerHTML);
    },
  },
  mounted() {
    this.place1 = localStorage.getItem("place1");
    this.place2 = localStorage.getItem("place2");
    this.place = this.place1 + "→" + this.place2;
    let date = new Date();
    this.moth = date.getMonth() + 1;
    this.day = date.getDate();
    this.active_2 = localStorage.getItem("date");
    // console.log(date.getDay());
    // let div = "";
    // for (var i = 0; i <= 6; i++) {
    //   div += `<div id='${this.arry[date.getDay() + i]}'>星期${
    //     this.arry[date.getDay() + i]
    //   }<br>${this.moth + "月" + (this.day + i)}</div>`;
    //   let view = document.getElementById("date_2");
    //   view.innerHTML = div;
    // }
    // let id=document.getElementById('date_2')
    
  },
};
</script>