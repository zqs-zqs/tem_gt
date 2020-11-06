<template>
  <div id="set">
    <!-- 头 -->
    <mt-header title="" class="header">
      <router-link to="/personal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <h1 class="title">设置昵称</h1>
      <mt-field
          placeholder="请输入昵称"
          type="text"
          autocomplete="off"
          :attr="{ maxlength: 20 }"
      ></mt-field>
      <p class="tishi">以英文字母或汉字开头，限制20个字符以内。</p>
    </div>
    <mt-button class="bottom" size="large" type="primary">保存</mt-button>
  </div>
</template>
<style>
  #set .tishi{
    padding: 10px;
    color: #555;
    font-size: 14px;
  }
</style>