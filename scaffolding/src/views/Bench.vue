<template>
  <!-- 顶部导航开始 -->

  <div>
    <header>
      <mt-header title="添加抢票">
        <router-link slot="left" to="/ticked">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/bb" class="short" slot="right">抢票说明</router-link>
      </mt-header>
    </header>
    <!-- 表单开始 -->
    <div class="back">
        <div class="back1">
      <!-- 1 -->
      <div class="bj">
        <div>
          <p class="font2">出发地</p>
          <p class="font">北京</p>
        </div>
        <div>
            <img src="../assets/iconfrom/zuoyoujiantou.png" alt="">
        </div>
        <div>
            <p class="font2">目的地</p>
            <p class="font">上海</p>
        </div>
      </div>
      <!-- 2 -->
      <div class="bj">
          <div>
              <p>指定日期</p>
              <p class="font">10月16日</p>
          </div>
          <div>
              <span class="font1">修改</span>
          </div>
      </div>
      <!-- 3 -->
      <div class="bj">
        <div>
          <p>指定车次</p>
          <p class="font2">请选择主车次</p>
        </div>
        <div>
          <span class="font1">指定车次</span>
        </div>
      </div>
      <!-- 4 -->
      <div class="bj">
        <div>
          <p>席别</p>
          <p class="font2">请选择坐席</p>
        </div>
        <div>
          <span class="font1">可多选</span>
        </div>
      </div>
      <!-- 5 -->
      <div class="button">
        <button>下一步</button>
      </div>
      </div>
    </div>
    <!-- 表单结束 -->

    <!-- 底部选项卡开始 -->
    <div>
      <mt-tabbar v-model="tabbar" fixed>
        <mt-tab-item id="index">
          云端抢票
          <img
            src="../assets/icon/qiangpiao.png"
            slot="icon"
            v-if="tabbar == 'index'"
          />
          <img src="../assets/iconfrom/qiangpiao.png" slot="icon" v-else />
        </mt-tab-item>
        <mt-tab-item id="travel">
          专属VIP通道
          <img
            src="../assets/icon/vip.png"
            slot="icon"
            v-if="tabbar == 'travel'"
          />
          <img src="../assets/iconfrom/vip.png" slot="icon" v-else />
        </mt-tab-item>

        <mt-tab-item id="arrive">
          8千万用户选择
          <img
            src="../assets/icon/yonghuxuanze.png"
            slot="icon"
            v-if="tabbar == 'arrive'"
          />
          <img src="../assets/iconfrom/yonghuxuanze.png" slot="icon" v-else />
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <!-- 底部选项卡结束 -->
  </div>
  <!-- 顶部导航结束 -->
</template>
<style scoped>
p{
  color: #000;
}
.short {
  text-decoration: none;
}
.back{
    background: #f0eeee;
    height: 600px;
    padding: 10px;
    width: 100%;
}
.back1{
    background: white;
    padding: 10px;
    
}
.bj{
    display: flex;
    padding: 10px;    
    justify-content: space-between;
    border-bottom:1px solid #f0eeee;
    }
.font{
  font-weight: 800;
  padding-top: .5rem;
}   
.font1{
  color: blue;
} 
.font2{
  color: gray;
  font-size: 14px;
  padding-top: 8px;
}
.button{
 text-align: center;
}
button{  
  padding:10px 90px;
  margin-top: 10px;
  background: blue;
  border-radius: 8px;
  color: white;
}
</style>
<script>
export default {
  data() {
    return {
      //默认被选定的底部选项卡的ID
      tabbar: "index",
    };
  },
};
</script>