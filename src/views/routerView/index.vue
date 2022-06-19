<template>
  <div class="router-view">
    <router-view />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getWeb3 } from "@/utils/web3";

const router = useRouter();
const web3js = ref();
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
  window.sessionStorage.clear();
  web3js.value = await getWeb3();
});
</script>
<style lang="less" scoped></style>
