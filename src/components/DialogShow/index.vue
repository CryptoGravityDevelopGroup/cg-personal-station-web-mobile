<template>
  <teleport to="body" v-show="visible">
    <div class="Dialog" :style="{ top: visible ? 0 : '-100%' }">
      <slot></slot>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const emits = defineEmits(["update:visible"]);

const onOk = () => {
  emits("update:visible", false);
};
</script>

<style lang="less" scoped>
.Dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 100;
  transition: top 400ms ease-in-out;
}
</style>
