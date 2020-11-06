<template>
  <div>
    <mt-header title="预定车票" fixed>
      <span slot="left">
        <router-link to="/details">
          <mt-button icon="back" type="primary"></mt-button>
        </router-link>
      </span>
      <div slot="right">
        <mt-button>说明</mt-button>
      </div>
    </mt-header>
    <div class="divall">
      <div class="odall">
        <div class="od">
          <div class="od1">
            <p>{{place1}}</p>
            <p>{{start}}</p>
          </div>
          <div class="od2">
            <p>时刻表</p>
            <p>G101</p>
          </div>
          <div class="od3">
            <p>{{place2}}</p>
            <p>{{end}}</p>
          </div>
        </div>
        <div class="time">
          <span>{{start}}</span>
          <span class="tiemspan2">剩余11小时44分钟</span>
        </div>
      </div>
      <div class="chengche">
        <router-link to="/addpassenger">
          <div class="div1">
            <div>
              <img src="../assets/images/choose_passenger_normal.png" alt="" />
              <span>乘车人</span>
              <div v-if="passengers != null">
                <div v-for="(passenger,i) of passengers" :key="i" class='passengers'>
                  <p>姓名:{{passenger.rider_name}}</p>
                  <p>身份证:{{passenger.rider_card}}</p>
                </div>
              </div>
            </div>
            <span style="color: #0aa1ed">添加/修改</span>
          </div>
        </router-link>
      </div>
      <div class="zuoxi">
        <div class="div2">
          <span>坐席选择</span>
          <span class="rider">{{count}}<span class="riders">/{{this.n}}</span></span>
        </div>
        <div class="div3">
          <ul>
            <li>窗户</li>
            <li>
              <img
                v-if="isSelecteda"
                src="../assets/images/icon_seat_a_normal.png"
                alt=""
                @click="disimga"
              />
              <img
                v-else
                src="../assets/images/icon_seat_a_select.png"
                alt=""
                @click="enimga"
              />
            </li>
            <li>
              <img
                v-if="isSelectedb"
                src="../assets/images/icon_seat_b_normal.png"
                alt=""
                @click="disimgb"
              />
              <img
                v-else
                src="../assets/images/icon_seat_b_select.png"
                alt=""
                @click="enimgb"
              />
            </li>
            <li>
              <img
                v-if="isSelectedc"
                src="../assets/images/icon_seat_c_normal.png"
                alt=""
                @click="disimgc"
              />
              <img
                v-else
                src="../assets/images/icon_seat_c_select.png"
                alt=""
                @click="enimgc"
              />
            </li>
            <li>过道</li>
            <li>
              <img
                v-if="isSelectedd"
                src="../assets/images/icon_seat_d_normal.png"
                alt=""
                @click="disimgd"
              />
              <img
                v-else
                src="../assets/images/icon_seat_d_select.png"
                alt=""
                @click="enimgd"
              />
            </li>
            <li>
              <img
                v-if="isSelectedf"
                src="../assets/images/icon_seat_f_normal.png"
                alt=""
                @click="disimgf"
              />
              <img
                v-else
                src="../assets/images/icon_seat_f_select.png"
                alt=""
                @click="enimgf"
              />
            </li>
            <li>窗户</li>
          </ul>
        </div>
      </div>
      <div class="prompt">
        <p>有限按指定作息出票，若余票不足，将随机为您申请座位。</p>
      </div>
      <div class="huiyuan">
        <div class="crown_icon">
          <div class="crown_text">
            <img src="../assets/images/1602681390(1).jpg" alt="" />
            <span>开通黄金会员</span>
            <img src="../assets/images/maohao.png" alt="" />
          </div>
          <span class="nian">¥49/年</span>
          <img
            v-if="pushButton == false"
            class="kaiguan"
            src="../assets/images/switch_off.png"
            alt=""
          />
          <img
            v-else
            class="kaiguan"
            src="../assets/images/switch_on.png"
            alt=""
          />
        </div>
        <span class="quanyi">6大权益，购票返现金55元</span>
        <div><img src="../assets/images/1602681340(1).jpg" alt="" /></div>
      </div>
      <div class="phone">
        <p>联系手机</p>
        <p>15266668888</p>
      </div>
      <!-- <div> -->
      <!-- <p v-for="(v, k) of 80" :key="k">{{ v }}</p> -->
      <!-- </div> -->
      <div class="yuding">
        <div>
          <mt-button plain size="large" @click="goumai">
            <p>普通预定></p>
          </mt-button>
        </div>
        <div>
          <mt-button type="primary" size="large" @click="goumai">
            <p>立即预定</p>
            <p>vip优享，极速出票</p>
          </mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.passengers{
  margin-left: 10px;
}
.passengers p{
  margin-top: 5px;
  color: rgb(37, 37, 37);
  font-size: 10px;
}

.div2>.rider{
  color:  #26a2ff;
}
.div2>.rider>.riders{
  color:  #666;
}
.mint-header a {
  color: #fff;
}
.odall {
  background-color: #26a2ff;
  color: #fff;
  padding: 15px;
}
.od {
  display: flex;
  justify-content: space-between;
}
.od2 {
  padding-top: 22px;
}
.od1 p:last-child,
.od3 p:last-child {
  font-size: 30px;
  margin: 10px 0;
}
.od3 p {
  text-align: right;
}
.time {
  font-size: 10px;
}
.tiemspan2 {
  margin-left: 5px;
  color: #f3e2a9;
}
.divall {
  padding-top: 40px;
  background-color: #f9f9f9;
  height: 550px;
  position: relative;
}
.zuoxi {
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  margin: 10px 10px 0;
  padding: 15px;
}
.chengche {
  border-radius: 5px;
  padding: 15px;
  background-color: #fff;
  margin: 0 10px 10px;
}
.chengche a {
  text-decoration: none;
}
.div1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div1 div img {
  width: 25%;
  margin-right: 0.8rem;
}
.div1 div span {
  color: black;
}

.div2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div3 {
  margin: 15px 20px 5px;
}
.div3 ul {
  display: flex;
  list-style: none;
  align-items: center;
}
.div3 ul li {
  text-align: center;
}
.div3 ul li img {
  width: 90%;
}
.prompt p {
  background-color: #f3e2a9;
  color: #dba901;
  font-size: 13px;
  margin: 0 10px;
  padding: 6px;
  border-radius: 0 10px;
}
.huiyuan {
  border-radius: 10px;
  background-color: #fff;
  margin: 10px;
  padding: 15px;
}
.crown_icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nian {
  margin-left: 90px;
}
.kaiguan {
  width: 15%;
}
.crown_text {
  font-size: 14px;
}
.crown_text span {
  padding: 0 5px;
}
.quanyi {
  font-size: 12px;
}
.phone {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  border-radius: 10px;
  background-color: #fff;
  margin: 10px 10px 0;
  padding: 15px;
}
.phone p:last-child {
  color: #26a2ff;
}

.yuding {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.yuding div:first-child {
  text-align: center;
  margin: 0px 10px;
}
.yuding div:first-child p {
  font-family: 微软雅黑;
  font-size: 14px;
}
.yuding div:first-child button {
  border: none;
}

.yuding div:last-child {
  background-color: #26a2ff;
  text-align: center;
  color: #fff;
  margin: 5px 10px 5px;
  border-radius: 5px;
}
.yuding div:last-child p:first-child {
  font-size: 16px;
}
.yuding div:last-child p:last-child {
  font-family: 微软雅黑;
  font-size: 12px;
}
</style>

<script>
export default {
  data() {
    return {
      start:'',
      end:'',
      isSelecteda: true,
      isSelectedb: true,
      isSelectedc: true,
      isSelectedd: true,
      isSelectedf: true,
      pushButton: true,
      Seats: 2,
      passengers: [],
      count:0,
      place1:'',
      place2:'',
      n:0
    };
  },
  methods: {
    enimga() {
       this.count--;
      this.isSelecteda = true;
     if(this.count<=0){
       this.count = 0;
        this.$messagebox("选座提示", "请选择座位");
      }
    },
    disimga() {
      if(this.n==0){
        this.$messagebox("选座提示", "请先添加乘车人");
      }else if(this.count>this.n-1){
        this.$messagebox("选座提示", "人数以满，请勿重复选择");
      }else{
       this.count++;
      this.isSelecteda = false;

      }
    },
    enimgb() {
      this.count--;
      this.isSelectedb = true;
     if(this.count<=0){
       this.count = 0;
        this.$messagebox("选座提示", "请选择座位");
      }
    },
    disimgb() {
      if(this.n==0){
        this.$messagebox("选座提示", "请先添加乘车人");
      }else if(this.count>this.n-1){
        this.$messagebox("选座提示", "人数以满，请勿重复选择");
      }else{
       this.count++;
      this.isSelectedb = false;

      }
    },
    enimgc() {
      this.count--;
      this.isSelectedc = true;
     if(this.count<=0){
       this.count = 0;
        this.$messagebox("选座提示", "请选择座位");
      }
    },
    disimgc() {
       if(this.n==0){
        this.$messagebox("选座提示", "请先添加乘车人");
      }else if(this.count>this.n-1){
        this.$messagebox("选座提示", "人数以满，请勿重复选择");
      }else{
       this.count++;
      this.isSelectedc = false;

      }
    },
    enimgd() {
       this.count--;
      this.isSelectedd = true;
     if(this.count<=0){
       this.count = 0;
        this.$messagebox("选座提示", "请选择座位");
      }
    },
    disimgd() {
       if(this.n==0){
        this.$messagebox("选座提示", "请先添加乘车人");
      }else if(this.count>this.n-1){
        this.$messagebox("选座提示", "人数以满，请勿重复选择");
      }else{
       this.count++;
      this.isSelectedd = false;

      }
    },
    enimgf() {
      this.count--;
      this.isSelectedf = true;
     if(this.count<=0){
       this.count = 0;
        this.$messagebox("选座提示", "请选择座位");
      }
    },
    disimgf() {
      if(this.n==0){
        this.$messagebox("选座提示", "请先添加乘车人");
      }else if(this.count>this.n-1){
        this.$messagebox("选座提示", "人数以满，请勿重复选择");
      }else{
       this.count++;
      this.isSelectedf = false;

      }
    },

    switchoff() {
      this.pushButton = false;
    },
    switchon() {
      this.pushButton = true;
    },
    goumai(){
      if(this.count<this.n){
        this.$messagebox("购买提示", "还未选择座位");
      }else{
        let date=new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        date = "" + y + "年" + m + "月" + d + "日";
        this.$messagebox("购买提示", "购买成功");
        //this.$router.push('/');
        this.count = 0
        this.passengers.forEach(element => {
           let obj={
            ticket_uid:this.$store.state.uid,
            ticket_rid:element.rid,
            travel_timestart:"2020年10月29日 23:15:59",
            travel_timeover:"2020年10月30日 23:15:59",
            place_start:this.place1 = localStorage.getItem("place1"),
            place_over:this.place2 = localStorage.getItem("place2"),
            buying_time:date,
        }
        this.axios.post('/tickets',this.qs.stringify(obj)).then(result=>{
          // console.log(result)
        });
  })
        
      }
    }
  },
  mounted(){
    this.place1 = localStorage.getItem("place1");
    this.place2 = localStorage.getItem("place2");
    this.passengers = this.$route.params.passengers;
    if(this.$route.params.n!=undefined){
      this.n=this.$route.params.n
    }
    this.start = this.$route.params.start;
    this.end = this.$route.params.end;
    //console.log(this.start)
  }
};
</script>