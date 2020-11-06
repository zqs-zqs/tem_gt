<template>
  <div>
    <!-- 头部 -->
    <mt-header title="个人信息" class="header" fixed>
      <router-link to="/person" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button @click="pop" slot="right"
        ><img src="../assets/lqyimges/close.png"
      /></mt-button>
    </mt-header>
    <!-- 主体 -->
    <div class="ztnr">
      <!--个人设置 -->
      <div>
        <p class="title1">个人设置</p>
        <button class="anniu" @click="setname">
          <div class="shez">
            <div class="zuo">昵称</div>
            <div class="you">
              {{this.$store.state.nickname}} <img src="../assets/lqyimges/right.png" />
            </div>
          </div>
        </button>
        <button class="anniu" @click="popPhone">
          <div class="shez">
            <div class="zuo">手机号</div>
            <div class="you">
              {{this.$store.state.phone}} <img src="../assets/lqyimges/right.png" />
            </div>
          </div>
        </button>
        <button class="anniu" @click="popWechat">
          <div class="shez">
            <div class="zuo">微信号</div>
            <div class="you">
              <img src="../assets/lqyimges/wechat.png" />
              <span>&nbsp;671</span>
              <img src="../assets/lqyimges/right.png" />
            </div>
          </div>
        </button>
      </div>
      <!-- 证件 -->
      <div>
        <p class="title1">我的证件</p>
        <button class="anniu">
          <div class="shez">
            <div class="zsxx">
              <div>{{this.$store.state.realname}}</div>
              <div class="sfz">
                二代身份证&nbsp;<span>{{this.$store.state.user_card}}</span>
              </div>
            </div>
            <div class="you">
              <img src="../assets/lqyimges/discertify.png" v-if="this.$store.state.user_card=='未绑定'"/>
              <img src="../assets/lqyimges/encertify.png" v-else />
              <img src="../assets/lqyimges/right.png" />
            </div>
          </div>
        </button>
      </div>
      <!-- 绑定账号 -->
      <div>
        <p class="title1">绑定账号</p>
        <button class="anniu">
          <div class="shez">
            <div class="zsxx">
              <div>{{this.$store.state.username}}</div>
              <div class="sfz">{{this.$store.state.phone}}</div>
            </div>
            <div class="loging"></div>
          </div>
        </button>
        <!-- 添加新账号 -->
        <button class="anniu">
          <router-link to="/login" class="a">
            <div id="adduser">
              <div class="add">
                <img src="../assets/lqyimges/add.png" /><span>添加新账号</span>
              </div>
            </div>
          </router-link>
        </button>
      </div>
      <!-- 其它 -->
      <div>
        <p class="title1">其它</p>
        <button class="anniu">
          <div class="shez">
            <div class="zuo">永久注销账号</div>
            <div class="you"><img src="../assets/lqyimges/right.png" /></div>
          </div>
        </button>
        <button class="anniu">
          <div class="shez">
            <div class="zuo">安全设置</div>
            <div class="you"><img src="../assets/lqyimges/right.png" /></div>
          </div>
        </button>
        <button class="anniu" @click="pop">
          <div class="shez">
            <div class="zuo">退出登录</div>
            <div class="you"><img src="../assets/lqyimges/right.png" /></div>
          </div>
        </button>
        <!-- 空白 -->
        <div class="shez">
            <div class="zuo"></div>
            <div class="you"></div>
        </div>
      </div>
    </div>
    <!-- 更多 -->
    <div>
      <!-- 关闭 -->
      <mt-popup v-model="popupVisible" position="bottom" class="more">
        <button class="p t" @click="logout">退出登录</button>
        <router-link to="login" class="p">登录其他账号</router-link>
      </mt-popup>
      <mt-popup v-model="popupVisible1" position="bottom" class="more">
        <router-link to="/login" class="p">登录其他手机账号</router-link>
        <button class="p">更换本账号手机号</button>
      </mt-popup>
      <mt-popup v-model="popupVisible2" position="bottom" class="more">
        <button class="p">解除微信绑定</button>
        <button class="p">更换微信绑定</button>
      </mt-popup>
    </div>
  </div>
</template>
<style>
.ztnr{
  margin-top: 60px;
}
.anniu {
  display: block;
  width: 100%;
  text-decoration: #000;
  color: #000;
  background-color: #fff;
  border: 0;
  text-align: left;
}
.anniu>.a{
  text-decoration: none;
}
.more > .t {
  color: #f00 !important;
}
.title1 {
  font-size: 16px;
  padding-left: 16px;
  margin-top: 30px;
  color: #555;
}
#adduser > .add > span {
  margin-left: 8px;
  vertical-align: middle;
}
#adduser > .add {
  margin-left: 8px;
  color: #1296db;
  text-align: left;
}
.shez > .loging {
  margin-right: 16px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(56, 224, 56);
}
.shez > .zsxx > .sfz {
  color: #555;
  padding-top: 8px;
}
.shez > .zsxx > div{
  padding-left: 16px;
}
.shez > .zuo {
  padding-left: 16px;
  font-size: 18px;
}
.shez > .you {
  padding-right: 16px;
  font-size: 16px;
}
.shez {
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  align-items: center;
}
</style>
<script>
export default {
  data() {
    return {
      popupVisible: false,
      popupVisible1: false,
      popupVisible2: false
    };
  },
  methods: {
    //pop
    pop() {
      this.popupVisible = true;
    },
    popPhone(){
      this.popupVisible1 = true;
    },
    popWechat(){
      this.popupVisible2 = true;
    },
    setname(){
      this.$router.push('/setname')
    },
    logout(){
      localStorage.clear();
      this.$store.commit('logouted');
      this.$router.push('/person')
    },
  },
};
</script>