<template>
  <!-- 顶部导航开始 -->
  <div>
    <header>
      <mt-header title="车次详情">
        <router-link slot="left" to="/ticked">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/bench" class="short" slot="right">
          <img src="../assets/icon/sandian.png" alt="" />
        </router-link>
      </mt-header>
    </header>
    <!-- 面板开始 -->
    <div class="bj">
      <div>
        <!-- 1开始 -->
        <div class="felx">
          <div>
            <span class="font">{{place1}}站</span>
            <img src="../assets/icon/dshi.png" alt="" />
            <p class="font1">{{start}}</p>
            <p class="font2">复兴号智能型350km/h</p>
          </div>
          <div class="font3">
            
            <div class="w">G7</div>
            <div>
              <span>——</span>
              <span class="b">2站</span>
              <span>——</span>
            </div>
            <div class="w">4小时28分</div>
            <div class="w">正点率100%></div>
          </div>
          <div>
            <img src="../assets/icon/dzhong.png" alt="" />
            <span class="font">{{place2}}站</span>
            <p class="font1">{{end}}</p>
            <p class="font2">CR400AE-B型</p>
          </div>
        </div>
        <!-- 1结束 -->
        <!-- 2开始 -->
        <div class="felx1">
          <span @click="day1">前一天</span>
          <span>{{times}}</span>
          <img src="../assets/icon/bottom.png" alt="" />
          <span @click="day2">后一天</span>
        </div>
        <!-- 2结束 -->
        <!-- 3开始 -->
        <div class="bj1">
          <div class="font4">
            <img src="../assets/icon/saoma.png" alt="" />
            <span>该车次已实行电子客票，可刷证进站</span>
            <img src="../assets/icon/wenhao.png" alt="" />
          </div>
          <div class="deng">
            <span>商务座</span>
            <span>¥633</span>
            <span>有票</span>
            <span class="fon"><div class="dingp" @click="shop">预订</div></span>
          </div>
          <div class="deng">
            <span>一等座</span>
            <span>¥433</span>
            <span>有票</span>
            <span class="fon"><div class="dingp" @click="shop">预订</div></span>
          </div>
          <div class="deng">
            <span>二等座</span>
            <span>¥233</span>
            <span>无票</span>
            <span class="font5">候补抢票</span>
          </div>
        </div>
        <!-- 3结束 -->
      </div>
      <div class="font6">
        <span>——为您推荐——</span>
      </div>
      <div>
        <div class="dis1">
          <div><img src="../assets/icon/tehui.png" alt="" /></div>
          <div>
            <div>
              <span>北京</span>
              <img src="../assets/icon/fj.png" alt="" />
              <span>上海</span>
            </div>
            <span class="hour">2小时20分</span>
          </div>
          <div class="jian">
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
            <div>
                <img src="../assets/icon/left.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="zui">
          <div class="zui1">
              <div><img src="../assets/icon/h.png" alt=""></div>
              <div>
                  <p>买礼包送钻石会员</p>
                  <p class="p">光速抢票卷15张，优先出票15次</p>
              </div>
          </div>
          <div>
              <div>
                  <img src="../assets/icon/left.png" alt="">
              </div>
          </div>
      </div>
    </div>
    <!-- 面板结束 -->
  </div>
  <!-- 顶部导航结束 -->
</template>
<style scoped>
.deng>.fon>.dingp{
  color: #fff;
  text-decoration: #fff;
}
.bj {
  background-image: linear-gradient(180deg, #26a2ff, #f0eeee 50%, #f0eeee);
  height: 625px;
}
/* 1的class号 */
.felx {
  display: flex;
  justify-content: space-between;
  padding: 12px;
}
.font {
  color: white;
}
.font1 {
  color: white;  
  font-weight: 1000;
  padding: 10px;
}
.font2 {
  color: white;
  font-size: 6px;
}
.font3 {
  color: white;
  font-size: 6px; 
  
}
.w{
  margin: 0 auto;
  text-align: center;
  padding: 4px;
}
.b {
  border: 1px solid white;
  padding: 0 10px;
  border-radius: 3px;
 
}
/* 2的class号 */
.felx1 {
  display: flex;
  justify-content: space-between;
  background: white;
  margin: 10px;
  color: #26a2ff;
  padding: 12px;
  border-radius: 6px;
}
/* 3的class号 */
.font4 {
  background: #f0eeee;
  border-radius: 6px;
  padding: 10px;
}
.bj1 {
  background: white;
  margin: 6px;
  border-radius: 6px;
  padding: 10px;
}
.deng {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0eeee;
  padding: 16px;
}
.fon {
 
  border-bottom: 1px solid #f0eeee;
  background:#0aa1ed;
  color: white;
  font-size: 6px;
  padding: 8px 18px;
  border-radius: 4px;
}
.font5 {
  border-bottom: 1px solid #f0eeee;
  background: orangered;
  color: white;
  font-size: 6px;
  padding: 8px;
  border-radius: 4px;
}
/* 为您推荐 */
.font6 {
  padding: 12px;
  text-align: center;
  font-size: 10px;
  color: gray;
}
/*  */
.dis1 {
  display: flex;
  justify-content: space-between;
  background: white;
  margin: 3px 0;
  padding: 8px;
  margin: 10px;
  border-radius: 8px;
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
.jian {
  display: flex;
}
.zui{
    display: flex;
    justify-content: space-between;
    background: white;
    padding: 10px;
    margin: 10px;
    border-radius: 6px;
    }
.zui1{
    display: flex;
    font-size: 10px;
    color:  gray;
}
.p{
    margin-top: 8px;
}
</style>
<script>
export default {
  data(){
    return{
      start:'',
      end:'',
      place1:'',
      place2:'',
      times:'' ,
      day:17,
      dayss:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
      getday:4,
      mouth:10,
      year:2020
    }
  },
  methods:{
    days(){
      if(localStorage.getItem('realdate')!=null){
        let real=localStorage.getItem('realdate').match(/\d+/g)
      this.year=Number(real[0])
      this.mouth=Number(real[1]) 
      this.day=Number(real[2]) 
      this.getday=Number(real[3]) 
      this.times=this.mouth+'月'+this.day+'日'+this.dayss[this.getday];
    }},

    day1(){
      // console.log(this.day)
      if(this.day>1){
        this.day--
        let realstorg=this.year+'年'+ this.mouth+'月'+this.day+'日' + this.getday;
        localStorage.setItem('realdate',realstorg);
        if(this.getday==0){
          this.getday=6
          let realstorg=this.year+'年'+ this.mouth+'月'+this.day+'日' + this.getday;
        localStorage.setItem('realdate',realstorg);           
        }else{
          this.getday--
          let realstorg=this.year+'年'+ this.mouth+'月'+this.day+'日' + this.getday;
          localStorage.setItem('realdate',realstorg);
        }
      }else{
        this.day=31
        this.mouth--
        let realstorg=this.year+'年'+ this.mouth+'月'+this.day+'日' + this.getday;
          localStorage.setItem('realdate',realstorg);
      }
      this.days()      
    },
    day2(){
       if(this.day<31){
        this.day++
        let realstorg=this.year+'年'+ this.mouth+'月'+this.day+'日' + this.getday;
          localStorage.setItem('realdate',realstorg);
        if(this.getday==6){
          this.getday=0   
          let realstorg=this.year+'年'+ this.mouth+'月'+this.day+'日' + this.getday;
          localStorage.setItem('realdate',realstorg);        
        }else{
          this.getday++
          let realstorg=this.year+'年'+ this.mouth+'月'+this.day+'日' + this.getday;
          localStorage.setItem('realdate',realstorg);
        }
      }else{
        this.day=1
        this.mouth++
        let realstorg=this.year+'年'+ this.mouth+'月'+this.day+'日' + this.getday;
          localStorage.setItem('realdate',realstorg);
      }
      this.days()     
    },
    
    shop(){
      if(this.$store.state.isLogined){
        this.$router.push({name:'Tickets',params:{start:this.start,end:this.end}})
      }else{
        this.$messagebox("提示", "请先登录账号");
      }
    }
  },
  mounted(){
     this.days()
         this.place1 = localStorage.getItem("place1");
         this.place2 = localStorage.getItem("place2");
         this.start=this.$route.query.start;
         this.end=this.$route.query.end;
  }
}
</script>