<template>
  <div class="home-wrapper">home</div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getWeb3 } from "@/utils/web3";

const web3js = ref();

onMounted(async () => {
  web3js.value = await getWeb3();
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
