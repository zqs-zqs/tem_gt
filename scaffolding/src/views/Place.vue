<template>
  <div>
    <div>
      <mt-header title="选择到达站点">
        <router-link to="/" slot="left">
          <mt-button icon="back" class="button1"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- 搜索框开始 -->
    <div>
      <mt-search placeholder="请输入车站名称(如北京、bj、beijing)" autofocus cancel-text></mt-search>
    </div>
    <!-- 搜索框结束 -->
    <div>
      <button>重庆</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.button1 {
  color: white !important;
  display: block !important;
  padding: 0 !important;
  position: fixed;
  font-size: 5px !important;
  box-shadow: none !important;
  /* border-radius: 50% !important; */
  background-color: rgba(243, 7, 7, 0.007) !important;
}
</style>