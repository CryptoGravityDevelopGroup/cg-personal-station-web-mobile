<template>
  <div class="common-block">
    <div class="action">
      <div class="back" @click="back"></div>
      <div class="title">{{ title }}</div>
    </div>
    <div v-if="type === 'o'" class="content-wrap">
      <slot />
    </div>
    <div v-else class="content-wrap-x">
      <slot />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      default: "title",
    },
    type: {
      default: "o",
    },
  },
  emits: ["back"],
  setup(props, { emit }) {
    const back = () => {
      emit("back");
    };
    return {
      back,
    };
  },
});
</script>
<style lang="less">
.common-block {
  width: 375px;
  min-height: 100vh;
  background: #3772ff;
  overflow: hidden;
  .action {
    padding: 38px 22px 22px 22px;
    display: flex;
    align-items: center;
    .back {
      width: 32px;
      height: 32px;
      background: rgba(0, 0, 0, 0.30000001192092896);
      border-radius: 32px 32px 32px 32px;
      background-image: url("/img/left-arrow.png");
      background-size: 16px;
      background-repeat: no-repeat;
      background-position: center;
    }
    .title {
      font-size: 18px;
      font-weight: bold;
      color: white;
      padding-left: 11px;
    }
  }
  .content-wrap {
    min-height: 720px;
    background: #ffffff;
    border-radius: 32px 32px 0px 0px;
    padding: 32px 20px;
    overflow: auto;
  }
  .content-wrap-x {
    height: 720px;
    background: #ffffff;
    border-radius: 32px 32px 0px 0px;
    overflow: auto;
    background: #d8e3ff;
    padding: 32px 20px;
  }
}
</style>
