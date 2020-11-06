<template>
  <div>
    <!-- 轮播图开始 -->
    <router-link to="/" class="dw">
      <mt-button icon="back" class="back"></mt-button>
    </router-link>
    <div>
      <mt-swipe
        id="swipe-height"
        :showIndicators="false"
        :auto="3000"
        :speed="500"
      >
        <mt-swipe-item><img src="../../public/imgsc/1.png" /></mt-swipe-item>
        <mt-swipe-item><img src="../../public/imgsc/1.png" /></mt-swipe-item>
        <mt-swipe-item><img src="../../public/imgsc/1.png" /></mt-swipe-item>
        <mt-swipe-item><img src="../../public/imgsc/1.png" /></mt-swipe-item>
        <mt-swipe-item><img src="../../public/imgsc/1.png" /></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图结束 -->
    机票页面
  </div>
</template>