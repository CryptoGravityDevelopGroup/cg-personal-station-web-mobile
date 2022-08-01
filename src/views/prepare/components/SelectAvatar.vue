<template>
  <CommonBlock title="请选择头像" @back="back">
    <div class="avatar-list">
      <div
        class="avatar-box"
        :style="{
          backgroundImage: `url(${avatar})`,
        }"
        v-for="avatar in avatars"
        :key="avatar"
        @click="onSelect(avatar)"
      >
        <img src="/img/Secondary_small.png" v-if="selected === avatar" />
      </div>
    </div>
    <div class="button" @click="Ok">Ok</div>
  </CommonBlock>
</template>
<script setup>
import { defineEmits, defineProps, ref } from "vue";
import CommonBlock from "@/components/CommonBlock/index.vue";

const props = defineProps({
  avatar: {
    default: "/avatars/avatar01.png",
  },
});

const emits = defineEmits(["back"]);

const avatars = ref([
  "/avatars/avatar01.png",
  "/avatars/avatar02.png",
  "/avatars/avatar03.png",
  "/avatars/avatar04.png",
  "/avatars/avatar05.png",
  "/avatars/avatar06.png",
  "/avatars/avatar07.png",
  "/avatars/avatar08.png",
  "/avatars/avatar09.png",
]);

const selected = ref(props.avatar);

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
