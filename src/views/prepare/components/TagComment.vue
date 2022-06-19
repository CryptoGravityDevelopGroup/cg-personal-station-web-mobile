<template>
  <CommonBlock title="Tag" @back="back">
    <div class="comment">
      <a-select
        class="fieled"
        v-model:value="value"
        mode="tags"
        style="width: 100%"
        :token-separators="[',']"
        placeholder="多个标签请用回车或者逗号分隔"
      ></a-select>
      <a-divider />
      <div class="recommended">
        <div class="title">推荐</div>
        <div class="tags">
          <a-tag
            v-for="(v, i) in recommendedTags"
            :key="i"
            @click="onSelect(v)"
            >{{ v }}</a-tag
          >
        </div>
      </div>
    </div>
    <div class="button" @click="Ok">Ok</div>
  </CommonBlock>
</template>
<script setup>
import { defineEmits, ref } from "vue";
import CommonBlock from "@/components/CommonBlock/index.vue";
const emits = defineEmits(["back"]);

const recommendedTags = ref([
  "canarylarruped",
  "sketchburkitt",
  "drearilyscone",
  "sticksmeat",
  "snoopplow",
  "platinumoffice",
  "pinslunch",
  "pointersnutmeg",
  "blockedlunation",
]);

const value = ref([]);

const onSelect = (v) => {
  if (value.value.includes(v)) return;
  value.value.push(v);
};

const Ok = () => {
  console.log(value.value);
  emits("back", value.value);
};

const back = () => {
  emits("back");
};
</script>
<style lang="less" scoped>
.comment {
  &/deep/ .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
  }
  &/deep/.ant-select-selection-item {
    height: 32px;
    background: rgba(55, 114, 255, 0.10000000149011612);
    border-radius: 6px 6px 6px 6px;
    font-size: 14px;
    font-weight: normal;
    color: #3772ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .recommended {
    .title {
      color: #8990a3;
      margin-bottom: 16px;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      .ant-tag {
        height: 32px;
        background: #fcfcfd;
        border-radius: 6px 6px 6px 6px;
        opacity: 1;
        border: 1px solid #d7deea;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
      }
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
  position: fixed;
  bottom: 20px;
}
</style>
