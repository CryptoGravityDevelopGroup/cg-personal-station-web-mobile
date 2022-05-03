<template>
  <teleport to="body" v-if="visible">
    <div class="Confirm">
      <div class="wrapper">
        <div class="content" v-html="content"></div>
        <div class="button" @click="onOk">OK</div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits, watch } from "vue";
import { stopMove, beginMove } from "@/utils/utils";

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
  content: {
    type: String,
  },
});

const emits = defineEmits(["update:visible"]);

const onOk = () => {
  emits("update:visible", false);
};

watch(
  () => props.visible,
  (v) => {
    v ? stopMove() : beginMove();
  }
);
</script>

<style lang="less" scoped>
.Confirm {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  .wrapper {
    width: 311px;
    padding: 24px 16px 16px 16px;
    border-radius: 8px;
    opacity: 1;
    background: rgba(20, 20, 22, 1);
    margin: 0 auto;
    margin-top: 30vh;
    .content {
      width: 263px;
      padding-bottom: 2px;
      opacity: 1;
      color: rgba(255, 255, 255, 1);
      font-size: 16px;
      font-weight: 500;
      font-family: "PingFang SC";
      text-align: center;
      line-height: 24px;
    }
    .button {
      width: 279px;
      height: 48px;
      border-radius: 10px;
      opacity: 1;
      margin: 20px auto 0px auto;
      color: white;
      font-weight: bold;
      background: rgba(24, 111, 242, 1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
