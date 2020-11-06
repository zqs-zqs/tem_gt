<template>
  <div class="detail">
    <!-- 车票查询头部 -->
    <mt-header title="火车票订单">
      <router-link to="/person" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 车票查询头部结尾 -->
    <!-- 车票开始 -->
    <div class="container" v-for="(k,i) of r" :key="i">
      <div>
        <span>我的订单</span>
        <span>刷新</span>
      </div>
      <div class="route">
        <span>{{k.place_start}} -> {{k.place_over}} - D1997</span>
        <span>已出站</span>
      </div>
      <div class="route">
        <span>出发：{{k.travel_timestart}}</span>
        <!-- <span>出发：{{this.moment.unix(this.travel_timestar).format('MMMM/Do/YYYY h:mm')}}</span> -->
        <span>¥248</span>
      </div>
      <div class="route">
        <span>到达：{{k.travel_timeover}}</span>
        <!-- <span>到达：{{this.moment.unix(this.travel_timeover).format('MMMM/Do/YYYY h:mm')}}</span> -->
      </div>
      <div class="route">
        <span>购票时间：{{k.buying_time}}</span>

        <!-- <span>购票时间：{{this.moment.unix(this.buying_time).format('MMMM/Do/YYYY h:mm')}}</span> -->
      </div>
      <div class="route">
        <span>乘车人：{{k.rider_name}}</span>
      </div>
      <div class="change">
        <mt-button size="large" type="primary">删除订单</mt-button>
      </div>
    </div>
    
    <!-- 车票结束 -->
  </div>
</template>

<style scoped>
.container > div:first-child > span:last-child {
  color: #26a2ff;
}
.change {
  margin: 0.1rem;
}
.container {
  padding: 0.5rem;
  margin-top: 0.3rem;
}
.container > div {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;
}
.container > .route {
  background: #fff;
  border-radius: 0.25rem;
  padding: 0.3rem 0.5rem;
}
.detail {
  background: #f9f9f9;
  padding-bottom: 25.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      r:[],
    };
  },
  methods: {
     add0(m){return m<10?'0'+m:m }
  },
  mounted() {
    this.axios
      .get("/ticket_details?ticket_uid=" + this.$store.state.uid)
      .then((result) => {
        //console.log(result.data);
        //this.a = result.data;
        let results = result.data[0];
        this.r=result.data
      });
  },
};
</script>