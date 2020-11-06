<template>
  <div>
    <!-- 轮播图开始 -->
    <div >
      <router-link to="/" class="dw">
              <mt-button icon="back" class="back" ></mt-button>
      </router-link>
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

    这是酒店页面
  </div>
</template>
<style>
  .dw{
    position: fixed;
    z-index: 2;
  }
  .back{
    color: white !important;
    display: block !important;
    padding: 0!important;
    position:fixed ;
    font-size: 5px !important;
    box-shadow:none!important;
    /* border-radius: 50% !important; */
    background-color:  rgba(243, 7, 7, 0.007) ! important;
  }
</style>
