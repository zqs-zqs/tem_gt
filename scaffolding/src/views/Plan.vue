<template>
  <div class="plan">
    <mt-header title="出行必备" flxed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="plan_pre">
      <p>
        &nbsp;工作辛苦，学习疲惫，来一场说走就走的旅行吧！除了自己必带的衣物，我们也为大家准备了一些必带的物品。请带上这些东西出发吧！
      </p>
    </div>
    <div class="plan_item" v-for="(item,index) of items" :key="index">
      <p>出行必备———{{item[0]}}</p>
      <div class="plan_detail">
        <div>
          <img :src="require(`../../public/img/my_icon${item[1]}`)" />
        </div>
        <div>
          {{item[2]}}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plan {
  background: #f9f9f9;
}
.plan_pre {
  padding: 0.5rem;
  font-size: 1.05rem;
  background: #f8f8f8;
  margin-top: .5rem;
}
.plan_pre p {
  text-indent: 2rem;
  line-height: 1.5rem;
}
.plan_item{
    padding: .3rem .5rem;
}
.plan_item>p{
    font-size: 1.2rem;
    font-weight: 600;
    padding: .2rem 0 .3rem;
}
.plan_item>.plan_detail {
  width: 100%;
  color: #333;
  display: flex;
  background: #fff;
  border-radius: .5rem;
  align-items: center;
}
.plan_item>.plan_detail > div > img {
  width: 6rem;
  padding: .4rem;
  border-radius: 1rem;
  margin-right: .25rem;
}
</style>

<script>
export default {
    data(){
        return {
            items:[
                ["旅行箱","/box.jpg","行李箱主要作用就是装你旅行所需物品，一般有拉杆和轮子方便携带，可以避免很多你携带旅行用品的烦恼。"],
                ["收纳袋","/bag.jpg","收纳袋作为收纳神器，受到越来越多的人重视，不仅可以用来装衣服棉被等日常物品，还可以外出旅行盛放个人物品。"],
                ["水杯","/cap.jpg","户外水杯作为饮水必备，它能保证个人出行，身边没有可用水源时，及时有水可以饮用。"],
                ["饼干","/cookie.jpg","压缩饼干用膨化粉制成。压缩饼干具有香酥脆、不吸水变软的特点。由于膨化时经高温高压灭菌清毒，适宜长期保管和运输。"],
                ["医药箱","/cure_box.jpg","医药箱中放一些消炎药 ，止血药，肠胃药，感冒药。剪刀，纱布，消毒水等。应对出行突然情况。"],
                ["地图","/map.jpg","地图可以用来确定两地之间的最佳路径。通过地图，包裹速递公司能够找到最有效的运输路径；公共交通设计者也能设计出最优的公交路线。"],
                ["口罩","/mask.jpg","虽然疫情大以消散，但是仍然要注意防范。或者遇到一些空气不好的地方，也可以用作过滤空气。"],
                ["运动鞋","/shose.jpg","运动鞋是柔软而富bai有弹性的，能起一定的缓冲作用。运动时能增强弹性，有的还能防止脚裸受伤。"],
                ["防晒衣","/sun_clothes.jpg","防晒衣在炎热的季节穿上具有防紫外线功能的服装，汗水会迅速由皮肤表面导出至织物表面，并很快干燥，不再受到汗湿的困扰"],
                ["双肩包","/trival_bag.jpg","双肩包的作用在于东西不多的时候，背上就走，比较起行李箱要方便许多"]
            ]
        }
    }
}
</script>