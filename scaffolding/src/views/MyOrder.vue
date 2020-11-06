<template>
  <div class="myorder">
    <!-- 头部开始 -->
    <mt-header title="我的订单">
      <router-link to="/person" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 头部结尾 -->
    <!-- 主要内容区域开始 -->
    <div class="trip">
      <div @click="toDetails()" class="trip-item" v-for="(v, i) of trip" :key="i">
        <img :src="require(`../../public/img/my_icon/${v[1]}.png`)" />
        <p>{{ v[0] }}</p>
      </div>
    </div>
    <div class="trip">
      <div class="trip-item" v-for="(v, i) of travel" :key="i">
        <img :src="require(`../..//public/img/my_icon/${v[1]}.png`)" />
        <p>{{v[0]}}</p>
      </div>
    </div>
    <!-- 主要内容区域结尾 -->
  </div>
</template>

<style scoped>
.myorder > .trip {
  background: #fff;
  margin: 0.5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
}
.myorder > .trip > .trip-item {
  width: 25%;
  padding: 0.5rem 0;
}
.myorder > .trip > .trip-item > img {
  width: 35%;
  border-radius: 50%;
}
/* 修改组件头部样式 */
.mint-header {
  background: #fff;
  color: #333;
  font-weight: 600;
}
/* 组件头部样式结束 */
/* 整个页面样式 */
.myorder {
  background: #f0eeee;
  height: 80rem;
}
</style>

<script>
export default {
  data() {
    return {
      trip: [
        ["火车票", "huoche"],
        ["抢票", "svgmoban05"],
        ["机票", "jipiao"],
        ["酒店", "jiudian"],
        ["伙力专车", "zhuanche"],
        ["汽车票", "qichepiao"],
        ["打车", "dache_fill"],
        ["跨域拼车", "dangdidachefuwu2"],
      ],
      travel: [
        ["旅行订单", "travel"],
        ["精选好货", "jingxuanxuanzhong"],
        ["景点门票", "jingdian"],
        ["景点门票", "qita"],
      ],
    };
  },
  methods: {
    toDetails() {
      this.$router.push("/trian_details");
    }
  },
};
</script>