<template>
  <div class="link-wallet">
    <div class="loading" v-if="!address">
      <LoadingOutlined style="font-size: 20px" />
      <div class="desc">等待链接钱包</div>
    </div>
    <div class="loading">
      <div class="desc">{{ address }}</div>
    </div>
  </div>
  <div class="next-button" @click="next">
    <div :class="['button', address ? 'actived' : '']">Next</div>
  </div>
</template>
<script setup>
import { onMounted, ref, defineEmits } from "vue";
import { LoadingOutlined } from "@ant-design/icons-vue";

const emits = defineEmits(["next"]);
const address = ref();

const connectWallet = async () => {
  if (typeof window.ethereum === "undefined") {
    window.open("https://metamask.io/download/");
    return;
  }
  if (address.value) return;
  const res = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  address.value = res[0].substr(0, 8) + "..." + res[0].substr(-4, 4);
  window.sessionStorage.setItem("account", res[0]);
};

onMounted(async () => {
  connectWallet();
});

const next = () => {
  if (address.value) {
    emits("next", "ProfileVue");
  }
};
</script>
<style lang="less" scoped>
.link-wallet {
  width: 100%;
  height: 300px;
  margin: 0 auto;
  margin-top: 60%;
  .loading {
    width: 148px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    .desc {
      font-size: 20px;
      color: #2d2f35;
      padding-left: 6px;
    }
  }
}
</style>
