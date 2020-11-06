<template>
  <div class="add">
    <mt-header class="addheader" title="请选择乘车人" fixed>
      <span slot="left">
        <router-link to="/tickets">
          <mt-button icon="back" type="primary"></mt-button>
        </router-link>
      </span>
      <div slot="right">
        <mt-button @click="queding">确定</mt-button>
      </div>
    </mt-header>
    <div class="divall2">
      <div class="search">
        <div class="search_div1">
          <div>
            <img src="../assets/images/hb_dynamic_search_icon.png" alt="" />
          </div>
          <div>
            <input class="input" type="text" placeholder="搜索乘车人" />
          </div>
        </div>
      </div>
      <div class="switch_account">
        <div>
          <img src="../assets/images/icon_gtgj_circle.png" alt="" />
        </div>
        <div>
          <p>{{ this.$store.state.nickname }}</p>
          <p>管家账号托管出票，方便快捷</p>
        </div>
        <div>
          <span>切换账号</span>
        </div>
      </div>
      <div class="add_scan">
        <div>
          <mt-button class="button_left" type="primary" plain @click="addrider">
            <img src="../assets/images/add05.png" alt="" /> 添加乘车人
          </mt-button>
          <mt-button type="primary" plain>
            <img src="../assets/images/camera.png" alt="" /> 扫描身份证添加
          </mt-button>
        </div>
        <!-- 乘车人列表 -->
        <div class="search_id" v-for="(k, i) of rider" :key="i">
          <div>
            <input
              class="input2"
              name="ridernum"
              type="checkbox"
              @click="mai"
            />
          </div>
          <div >
            <p name="rider_name">{{ k.rider_name }}</p>
            <p name="rider_card">身份证 {{ k.rider_card }}</p>
          </div>
          <div>
            <img src="../assets/images/amend.png" alt="" />
          </div>
        </div>
      </div>
      <div class="verification">
        <span>身份核验说明</span>
        <img src="../assets/images/right_arrow.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rider: [],
      n: 0,
      passengers:[]
    };
  },
  methods: {
    addrider() {
      this.$router.push("/rider");
    },
    mai() {
      let riders = document.getElementsByName("ridernum");
      let rider_name = document.getElementsByName("rider_name");
      let rider_card = document.getElementsByName("rider_card");
      let a=0;
      this.passengers = [];
      for ( let i = 0; i < riders.length; i++) {
        if (riders[i].checked == true) {
          a += 1;
          let str = rider_card[i].innerHTML;
          let rid =this.rider[i].rid
          let card = str.substring(4,22);
          let obj = {
            rider_name:rider_name[i].innerHTML,
            rider_card:card,
            rid:rid,
          }
          this.passengers.push(obj);
        }
      }
      this.n=a;
      // console.log(this.passengers);
    },
    queding(){
      //this.$store.commit("getrider", this.n);
      this.$router.push({
          name: "Tickets",
          params: { passengers: this.passengers,n:this.n},
          // params: { usersitelist: 'userlist' }
      })
    }
  },
  mounted() {
    this.axios
      .get("/rider?rider_uid=" + this.$store.state.uid)
      .then((result) => {
        //console.log(result.data);
        this.rider = result.data;
      });
  },
};
</script>
<style>
.addheader {
  background-color: #fff !important;
  color: black !important;
}
.addheader a {
  color: black;
}
.divall2 {
  background-color: #f0eeee;
  height: 628px;
  padding-top: 40px;
}
.search {
  background-color: #fff;
  padding: 5px;
}
.search_div1 {
  display: flex;
}
.search_div1 div img {
  width: 30px;
}
.search div {
  background-color: #f0eeee;
  margin: 5px 10px;
  border-radius: 10px;
  text-align: center;
}
.input {
  background-color: #f0eeee;
  border: none;
  height: 25px;
  width: 200px;
  margin-left: -15px;
}
.switch_account {
  background-color: #fff;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}
.switch_account img {
  width: 50%;
}
.switch_account div:nth-child(2) {
  margin-left: -80px;
}
.switch_account div:nth-child(2) p:last-child {
  margin-top: 5px;
  color: #999;
  font-size: 10px;
}
.switch_account div:last-child span {
  font-size: 14px;
  color: #0aa1ed;
}
.add_scan {
  background-color: #fff;
  margin: 0px 10px;
  padding: 10px;
  border-radius: 10px;
}

.add_scan div:first-child {
  display: flex;
  justify-content: space-between;
}
.button_left img {
  width: 13%;
}
.add_scan div button {
  font-size: 16px;
}
.search_id {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 5px;
}
.search_id div:nth-child(2) p:last-child {
  margin-top: 5px;
  color: #999;
  font-size: 10px;
}
.search_id div:nth-child(2) {
  margin-left: -80px;
}
.verification {
  text-align: center;
  margin: 10px;
}
.verification span {
  font-size: 10px;
  color: #0aa1ed;
}
</style>