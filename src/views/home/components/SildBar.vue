<template>
  <div class="sild-bar">
    <div ref="target" class="nav-bar">
      <img class="logo" src="/img/img_navbar_logo.png" alt="" />
      <img class="menu" src="/img/ic_navbbar_close.png" alt="" @click="close" />
    </div>
    <div class="menu-list">
      <div class="menu-item" @click="close">
        <img src="/img/ic_menu_home.png" alt="" />
        <div class="name">Home</div>
      </div>
      <div class="menu-item" @click="goPage('ProfileVue')">
        <img src="/img/ic_menu_home.png" alt="" />
        <div class="name">编辑个人资料</div>
      </div>
      <div class="menu-item" @click="goPage('QAVue')">
        <img src="/img/ic_menu_qa.png" alt="" />
        <div class="name">编辑 Q&A</div>
      </div>
      <div class="menu-item" @click="openModal">
        <img src="/img/barcode.png" alt="" />
        <div class="name">我的二维码</div>
      </div>
    </div>
    <div class="button" @click="Disconnect">Disconnect</div>
  </div>
</template>
<script setup>
import { defineEmits } from "vue";
const emits = defineEmits("onClose");

const openModal = () => {
  emits("onClose");
  emits("onOpenModal");
};

const close = () => {
  emits("onClose");
};

const goPage = (v) => {
  emits("onClose", v);
};

const Disconnect = () => {};
</script>
<style lang="less" scoped>
.sild-bar {
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255);
  padding: 24px 20px;
  .nav-bar {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 150px;
      height: 31px;
    }
    .menu {
      width: 24px;
      height: 24px;
    }
  }
  .menu-list {
    margin-top: 58px;
    padding: 0px 2px;
    .menu-item {
      width: 327px;
      min-height: 53px;
      display: flex;
      align-items: center;
      padding: 24px 8px;
      //   margin-bottom: 16px;
      border-bottom: 1px solid #e5e8eb;
      img {
        width: 24px;
        height: 24px;
      }
      .name {
        font-size: 16px;
        font-weight: bold;
        color: #22262e;
        padding-left: 12px;
      }
    }
  }
  .button {
    width: 327px;
    height: 48px;
    background: #ffffff;
    border-radius: 90px 90px 90px 90px;
    opacity: 1;
    border: 2px solid #e5e8eb;
    position: absolute;
    bottom: 24px;
    font-size: 16px;
    font-weight: 400;
    color: #22262e;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
