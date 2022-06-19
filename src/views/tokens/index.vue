<template>
  <CommonBlock title="Token" @back="back">
    <div class="boxs">
      <div class="token">
        <a-avatar :size="40"></a-avatar>
        <div class="info">
          <div class="token-name">Ethereum</div>
          <div class="num">x 100</div>
          <div class="price">$8888</div>
        </div>
      </div>
      <div class="token">
        <a-avatar :size="40"></a-avatar>
        <div class="info">
          <div class="token-name">Ethereum</div>
          <div class="num">x 100</div>
          <div class="price">$8888</div>
        </div>
      </div>
      <div class="token">
        <a-avatar :size="40"></a-avatar>
        <div class="info">
          <div class="token-name">Ethereum</div>
          <div class="num">x 100</div>
          <div class="price">$8888</div>
        </div>
      </div>
      <div class="token">
        <a-avatar :size="40"></a-avatar>
        <div class="info">
          <div class="token-name">Ethereum</div>
          <div class="num">x 100</div>
          <div class="price">$8888</div>
        </div>
      </div>
    </div>
  </CommonBlock>
</template>
<script setup>
import { useRouter } from "vue-router";
import CommonBlock from "@/components/CommonBlock/index.vue";

const router = useRouter();
const back = (v) => {
  router.push("/home");
};
</script>
<style lang="less" scoped>
.boxs {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .token {
    width: 162px;
    height: 84px;
    background: #f4f5f6;
    border-radius: 20px 20px 20px 20px;
    margin-top: 16px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    .info {
      padding-left: 12px;
      .token-name {
        color: #0e1228;
        font-weight: bold;
      }
      .num {
        color: #0e1228;
        font-weight: bold;
      }
      .price {
        font-size: 12px;
        font-weight: 400;
        color: #454c66;
      }
    }
  }
}
</style>
