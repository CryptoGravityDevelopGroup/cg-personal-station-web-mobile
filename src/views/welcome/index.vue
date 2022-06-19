<template>
  <div class="welcome-wrapper">
    <img class="logo" src="/img/img_wc_logo.png" alt="logo" />
    <div class="ctx-wrapper">
      <div class="title">CryptoGravity</div>
      <div class="desc">
        Building the next-generation intelligent application cloud service
        platform
      </div>
    </div>
    <div class="button-wrapper">
      <div class="get-start" @click="getStart">Get Start</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const getStart = () => {
  router.push("/prepare");
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
