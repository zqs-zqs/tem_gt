import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined:localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : 0,
    nickname:localStorage.getItem('nickname') ? localStorage.getItem('nickname') : '未设置',
    username:localStorage.getItem('username') ? localStorage.getItem('username') : '未登录',
    user_card:localStorage.getItem('user_card') ? localStorage.getItem('user_card') : "未绑定",
    realname:localStorage.getItem('realname') ? localStorage.getItem('realname') : "未绑定",
    phone:localStorage.getItem('phone') ? localStorage.getItem('phone') : "未绑定",
    uid:localStorage.getItem('uid') ? localStorage.getItem('uid') : 0,
  },
  mutations: {
    logined(state,payload){
      state.isLogined=1;
      //昵称
      state.nickname=payload.nickname==null ? (payload.username==null ? payload.phone:payload.username) :payload.nickname;
      localStorage.setItem('nickname',payload.nickname==null ? payload.username:payload.nickname);
      //身份证
      state.user_card=payload.user_card==null ? "未绑定":payload.user_card;
      localStorage.setItem('user_card',payload.nickname==null ? "未绑定":payload.user_card);
      //真实姓名
      state.realname=payload.realname==null ? "未绑定":payload.realname;
      localStorage.setItem('realname',payload.realname==null ? "未绑定":payload.realname);
      //电话号码
      state.phone=payload.phone==null ? "未绑定":payload.phone;
      localStorage.setItem('phone',payload.phone==null ? "未绑定":payload.phone);
      //用户id
      state.uid=payload.uid;
      localStorage.setItem('uid',payload.uid);
      //用户名
      state.username=payload.username==null ? '未绑定':payload.username;
      localStorage.setItem('username',payload.username==null ? '未绑定':payload.username);
    },
    logouted(state){
      state.isLogined=0;
      state.nickname='';
      state.username='';
      state.realname='';
      state.phone='';
      state.user_card='';
      state.uid='';
    }
  },
  actions: {
  },
  modules: {
  }
})
