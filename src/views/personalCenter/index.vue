<template>
  <div class="home-wrapper">
    <div v-if="list.length > 0">
      <div class="reddme-wrapper">
        <section class="reddme-box"></section>
      </div>
    </div>
    <div class="empty-wrapper" v-else>
      <img src="/img/empty-img-gray.png" alt="" />
      <div class="no-data">No Data</div>
    </div>
    <div class="button-wrapper" v-if="list.length > 0">
      <div class="button">Redeem all</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const list = ref([]);
</script>
<style lang="less">
.reddme-wrapper {
  padding-bottom: 100px;

  .reddme-box {
    width: 335px;
    height: 238px;
    border-radius: 10px;
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(120px);
    margin: 20px auto;
    padding: 45px;
  }
}

.button-wrapper {
  position: fixed;
  bottom: 0;
  z-index: 5;
  width: 375px;
  height: 78px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 22, 0.95);

  .button {
    width: 343px;
    height: 46px;
    border-radius: 10px;
    opacity: 1;
    background: rgba(24, 111, 242, 1);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.empty-wrapper {
  width: 122px;
  height: 135px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  img {
    width: 122px;
    height: 100px;
  }

  .no-data {
    // width: 60px;
    height: 26px;
    opacity: 1;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    font-weight: 400;
    font-family: "Source Han Sans CN";
  }
}
</style>
