<template>
  <div class="QA-wrap">
    <div class="qa-box" v-for="(v, i) in lists" :key="i">
      <div class="q">
        <div class="q-label">
          <div class="label">question {{ i + 1 }}</div>
          <div v-if="i > 0" class="close" @click.stop="remove(v.key)">
            <img src="/img/delete-forever.png" alt="" />
          </div>
        </div>
        <a-input v-model:value="v.question" class="field" />
      </div>
      <div class="q">
        <div class="q-label">
          <div class="label">answer</div>
        </div>
        <a-textarea
          v-model:value="v.answer"
          :auto-size="{ minRows: 2, maxRows: 5 }"
          class="field"
        />
      </div>
    </div>
    <div class="add-button" @click="add">
      <a-space>
        <PlusOutlined />
        <span>Add</span>
      </a-space>
    </div>
  </div>
  <div class="next-button" @click="next">
    <div :class="['button', 'actived']">Done</div>
  </div>
</template>
<script setup>
import { defineEmits, ref, defineProps } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

import { nanoid } from "nanoid";
const router = useRouter();

const emits = defineEmits(["next", "update:qas"]);

const props = defineProps({
  type: {
    default: "create",
  },
  qas: {
    default: () => [],
  },
});

const lists = ref(props.qas);
const add = () => {
  lists.value.push({
    key: nanoid(),
    question: "",
    answer: "",
  });
};
const remove = (key) => {
  lists.value = lists.value.filter((v) => v.key !== key);
};

const next = () => {
  if (props.type === "create") {
    emits("next", "CompleteVue");
    emits("update:qas", lists.value);
    router.push({
      path: "/prepare",
      query: {
        c: "CompleteVue",
      },
    });
  } else {
    emits("next");
  }
};
</script>
<style lang="less">
.QA-wrap {
  width: 100%;
  padding-bottom: 50px;
  .qa-box {
    width: 327px;
    background: #ffffff;
    border-radius: 16px;
    padding: 16px;
    border: 1px solid #ebeef4;
    margin-bottom: 22px;
    .q {
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }
      .q-label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .label {
          color: #b0b4c3;
        }
        img {
          width: 24px;
          height: 24px;
        }
      }
      .field {
        height: 36px;
        margin-top: 12px;
        background: #f3f4f5;
        border-radius: 10px 10px 10px 10px;
        border: none;
      }
    }
  }
  .add-button {
    width: 129px;
    height: 48px;
    background: rgba(55, 114, 255, 0.10000000149011612);
    border-radius: 90px 90px 90px 90px;
    color: #3772ff;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 100px;
  }
}
</style>
