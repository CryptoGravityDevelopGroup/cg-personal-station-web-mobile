<template>
  <div class="profile">
    <div class="avatar">
      <a-avatar :size="52"></a-avatar>
      <div class="updated-button" @click="updateAvatar">修改头像</div>
    </div>
    <div class="form-item">
      <div class="label">Name</div>
      <a-input class="field" />
    </div>
    <div class="form-item">
      <div class="label">About Me</div>
      <a-textarea :auto-size="{ minRows: 2, maxRows: 5 }" class="field" />
    </div>
    <div class="form-item">
      <div class="label">Tags</div>
      <div class="field-tag">
        <div class="boxs">
          <a-tag>你好</a-tag>
          <a-tag>你好</a-tag>
          <a-tag>你好</a-tag>
          <a-tag>你好</a-tag>
          <a-tag>你好你好你好</a-tag>
        </div>
        <div class="add" @click="selectTag">
          <img src="/img/e-add.png" alt="" />
        </div>
      </div>
    </div>
    <div class="form-item">
      <div class="label">Instagram</div>
      <a-input class="field">
        <template #suffix>
          <InstagramOutlined />
        </template>
      </a-input>
    </div>
    <div class="form-item">
      <div class="label">Twitter</div>
      <a-input class="field">
        <template #suffix>
          <TwitterOutlined />
        </template>
      </a-input>
    </div>
    <div class="form-item">
      <div class="label">Telegram</div>
      <a-input class="field">
        <template #suffix>
          <img src="/img/telegram-icon.png" alt="" />
        </template>
      </a-input>
    </div>
  </div>
  <div v-if="props.type === 'create'" class="next-button" @click="next">
    <div :class="['button', 'actived']">Next</div>
  </div>

  <div v-else class="next-button" @click="done">
    <div :class="['button', 'actived']">Done</div>
  </div>

  <Dialog v-model:visible="selectAvatarVisible">
    <SelectAvatar @back="selectAvatarBack" />
  </Dialog>
  <Dialog v-model:visible="selectTagVisible">
    <TagComment @back="selectTagBack" />
  </Dialog>
</template>
<script setup>
import { defineEmits, ref, defineProps } from "vue";
import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons-vue";
import Dialog from "@/components/Dialog/index.vue";
import SelectAvatar from "./SelectAvatar.vue";
import TagComment from "./TagComment.vue";

const props = defineProps({
  type: {
    default: "create",
  },
});

const emits = defineEmits(["next"]);

const selectAvatarVisible = ref(false);
const selectTagVisible = ref(false);

const updateAvatar = () => {
  selectAvatarVisible.value = true;
};
const selectAvatarBack = (v) => {
  selectAvatarVisible.value = false;
};

const selectTag = () => {
  selectTagVisible.value = true;
};
const selectTagBack = (v) => {
  selectTagVisible.value = false;
};

const next = () => {
  emits("next", "QAVue");
};

const done = () => {
  emits("next");
};
</script>
<style lang="less" scoped>
.profile {
  width: 375px;
  min-height: 918px;

  .avatar {
    display: flex;
    align-items: center;

    .updated-button {
      width: 88px;
      height: 32px;
      border-radius: 90px 90px 90px 90px;
      opacity: 1;
      border: 1px solid #3772ff;
      font-size: 14px;
      font-weight: 400;
      color: #3772ff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 16px;
    }
  }

  .form-item {
    width: 327px;
    min-height: 72px;
    margin-top: 32px;

    .label {
      font-size: 14px;
      font-weight: normal;
      color: #8990a3;
    }

    .field-tag {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;
      padding: 8px 12px 0 12px;
      min-height: 48px;
      margin-top: 12px;
      border-radius: 10px;
      background-color: white;
      .boxs {
        overflow: hidden;
        .ant-tag {
          min-width: 44px;
          height: 32px;
          background: #d2e9ff;
          border-radius: 6px 6px 6px 6px;
          color: #2d2f35;
          line-height: 30px;
          margin-bottom: 8px;
        }
      }

      .add {
        width: 32px;
        height: 32px;
        background: #ffffff;
        border-radius: 6px 6px 6px 6px;
        opacity: 1;
        border: 1px solid rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 16px;
          height: 16px;
        }
      }
    }

    .field {
      margin-top: 12px;
      border-radius: 10px;
      height: 36px;
      border: none;
      background-color: white;

      & /deep/ .ant-select-selector {
        border-radius: 10px;
        height: 36px;

        .ant-select-selection-item {
          background: #d2e9ff;
          border-radius: 6px 6px 6px 6px;
          background: red;
        }
      }
    }
  }
}
</style>
