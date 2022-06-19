<template>
  <CommonBlock title="NFT" @back="back">
    <div class="boxs">
      <div class="nft">
        <div class="img">
          <img src="" alt="" />
        </div>
        <div class="info">
          <div class="name">Bury</div>
          <div class="price">2.45 ETH</div>
        </div>
      </div>
      <div class="nft">
        <div class="img">
          <img src="" alt="" />
        </div>
        <div class="info">
          <div class="name">Bury</div>
          <div class="price">2.45 ETH</div>
        </div>
      </div>
      <div class="nft">
        <div class="img">
          <img src="" alt="" />
        </div>
        <div class="info">
          <div class="name">Bury</div>
          <div class="price">2.45 ETH</div>
        </div>
      </div>
      <div class="nft">
        <div class="img">
          <img src="" alt="" />
        </div>
        <div class="info">
          <div class="name">Bury</div>
          <div class="price">2.45 ETH</div>
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
  .nft {
    width: 100px;
    // height: 147px;
    margin: 16px 0;
    .img {
      width: 100%;
      height: 100px;
      background: #cdb4db;
      border-radius: 16px 16px 16px 16px;
    }
    .info {
      margin-top: 8px;
      .name {
        font-size: 12px;
        font-weight: bold;
        color: #22262e;
      }
      .price {
        font-size: 12px;
        font-weight: normal;
        color: #45b26a;
      }
    }
  }
}
</style>
