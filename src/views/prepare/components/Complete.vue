<template>
  <a-result
    status="success"
    title="搭建完成"
    sub-title="这是提示这是提示这是提示这是提示这是提示这是提示."
  >
    <template #extra>
      <div class="go-home" @click="goPage">进入主页</div>
    </template>
  </a-result>
</template>
<script setup>
import {} from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const goPage = () => {
  router.push("/home");
};
</script>
<style lang="less">
.go-home {
  width: 100%;
  height: 48px;
  background: #3772ff;
  color: #fbfcfc;
  border-radius: 90px 90px 90px 90px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
