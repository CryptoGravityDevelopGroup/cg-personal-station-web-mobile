<template>
  <CommonBlock title="请选择头像" @back="back">
    <div class="avatar-list">
      <div class="avatar-box" v-for="v in 10" :key="v" @click="onSelect(v)">
        <img src="/img/Secondary_small.png" v-if="selected === v" />
      </div>
    </div>
    <div class="button" @click="Ok">Ok</div>
  </CommonBlock>
</template>
<script setup>
import { defineEmits, ref } from "vue";
import CommonBlock from "@/components/CommonBlock/index.vue";
const emits = defineEmits(["back"]);

const selected = ref();
const onSelect = (v) => {
  selected.value = v;
};

const Ok = () => {
  emits("back", selected.value);
};

const back = () => {
  emits("back");
};
</script>
<style lang="less" scoped>
.avatar-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .avatar-box {
    width: 100px;
    height: 100px;
    background: #cdb4db;
    border-radius: 16px 16px 16px 16px;
    margin-bottom: 20px;
    position: relative;
    img {
      position: absolute;
      right: 4px;
      top: 4px;
    }
  }
}
.button {
  width: 327px;
  height: 48px;
  background: #3772ff;
  border-radius: 90px 90px 90px 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 400;
  color: #fbfcfc;
  position: absolute;
  bottom: 20px;
}
</style>
