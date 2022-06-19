<template>
  <div class="home-wrapper">
    <header v-if="!targetIsVisible" class="nav-bar-fixed">
      <img class="logo" src="/img/img_navbar_logo.png" alt="" />
      <img
        class="menu"
        src="/img/ic_navbbar_menu.png"
        alt=""
        @click="openDialog"
      />
    </header>
    <header class="header">
      <div ref="target" class="nav-bar">
        <img class="logo" src="/img/img_navbar_logo.png" alt="" />
        <img
          class="menu"
          src="/img/ic_navbbar_menu.png"
          alt=""
          @click="openDialog"
        />
      </div>
      <div class="base-info">
        <a-avatar :size="98" />
        <div class="name">Leo</div>
        <div class="tags">
          <a-tag>你好世界</a-tag>
          <a-tag>你好</a-tag>
          <a-tag>你好</a-tag>
          <a-tag>你好</a-tag>
          <a-tag>你好</a-tag>
        </div>
        <div class="desc">
          A common misconception is that design is merely making things pretty.
        </div>
        <div class="icons">
          <a-space :size="24">
            <div class="icon">
              <img src="/img/ic_16_Twitter.png" alt="" srcset="" />
            </div>
            <div class="icon">
              <img src="/img/ic_16_Instagram.png" alt="" srcset="" />
            </div>
            <div class="icon">
              <img src="/img/ic_16_telegram.png" alt="" srcset="" />
            </div>
          </a-space>
        </div>
      </div>
    </header>
    <section class="tokens">
      <div class="head">
        <div class="title">Token</div>
        <img
          src="/img/ic_24_arrow_right.png"
          alt=""
          @click="goPage('/tokens')"
        />
      </div>
      <div class="boxs">
        <div class="token">
          <a-avatar :size="40"></a-avatar>
          <div class="info">
            <div class="token-name">Ethereum</div>
            <div class="num">x 100</div>
            <div class="price">$8888</div>
          </div>
        </div>
        <div class="token">
          <a-avatar :size="40"></a-avatar>
          <div class="info">
            <div class="token-name">Ethereum</div>
            <div class="num">x 100</div>
            <div class="price">$8888</div>
          </div>
        </div>
        <div class="token">
          <a-avatar :size="40"></a-avatar>
          <div class="info">
            <div class="token-name">Ethereum</div>
            <div class="num">x 100</div>
            <div class="price">$8888</div>
          </div>
        </div>
        <div class="token">
          <a-avatar :size="40"></a-avatar>
          <div class="info">
            <div class="token-name">Ethereum</div>
            <div class="num">x 100</div>
            <div class="price">$8888</div>
          </div>
        </div>
      </div>
    </section>
    <section class="nfts">
      <div class="head">
        <div class="title">NFT</div>
        <img src="/img/ic_24_arrow_right.png" alt="" @click="goPage('/nfts')" />
      </div>
      <div class="boxs">
        <div class="nft">
          <div class="img">
            <img src="" alt="" />
          </div>
          <div class="info">
            <div class="name">Bury</div>
            <div class="price">2.45 ETH</div>
          </div>
        </div>
        <div class="nft">
          <div class="img">
            <img src="" alt="" />
          </div>
          <div class="info">
            <div class="name">Bury</div>
            <div class="price">2.45 ETH</div>
          </div>
        </div>
        <div class="nft">
          <div class="img">
            <img src="" alt="" />
          </div>
          <div class="info">
            <div class="name">Bury</div>
            <div class="price">2.45 ETH</div>
          </div>
        </div>
        <div class="nft">
          <div class="img">
            <img src="" alt="" />
          </div>
          <div class="info">
            <div class="name">Bury</div>
            <div class="price">2.45 ETH</div>
          </div>
        </div>
      </div>
    </section>
    <section class="qas">
      <div class="head">
        <div class="title">Q&A</div>
      </div>
      <a-collapse ghost expandIconPosition="right">
        <template #expandIcon="{ isActive }">
          <img
            style="width: 24px"
            src="/img/ic_24_arrow_up.png"
            v-if="isActive"
            alt=""
            srcset=""
          />
          <img
            style="width: 24px"
            src="/img/ic_24_arrow_down.png"
            v-else
            alt=""
            srcset=""
          />
        </template>
        <a-collapse-panel key="1" header="What is graphic design?">
          <p class="content">
            Design is all around us. It's more than making things pretty. Learn
            more about what design is and the role it plays in our world today.
          </p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="What is graphic design?">
          <p class="content">
            Design is all around us. It's more than making things pretty. Learn
            more about what design is and the role it plays in our world today.
          </p>
        </a-collapse-panel>
      </a-collapse>
    </section>
  </div>
  <Dialog v-model:visible="visible">
    <SildBar v-if="visible" @onClose="closeDialog" />
  </Dialog>
  <Dialog v-model:visible="profileVisible">
    <CommonBlock v-if="ProfileVue" @back="profileBack" type="x" title="Profile">
      <ProfileVue type="edit" @next="submitProfile" />
    </CommonBlock>
  </Dialog>
  <Dialog v-model:visible="qaVisible">
    <CommonBlock v-if="QAVue" @back="qaBack" type="x" title="Q&A">
      <QAVue type="edit" @next="submitQA" />
    </CommonBlock>
  </Dialog>
</template>
<script setup>
import { ref, watch } from "vue";
import { useElementVisibility } from "@vueuse/core";
import { useRouter } from "vue-router";
import Dialog from "@/components/Dialog/index.vue";
import SildBar from "./components/SildBar.vue";
import CommonBlock from "@/components/CommonBlock/index.vue";
import ProfileVue from "../prepare/components/Profile.vue";
import QAVue from "../prepare/components/Q&A.vue";
import { stopMove, beginMove } from "@/utils/utils";

const router = useRouter();
const target = ref(null);
const targetIsVisible = useElementVisibility(target);
const visible = ref(false);
const profileVisible = ref(false);
const qaVisible = ref(false);

const goPage = (path) => {
  router.push(path);
};

const openDialog = () => {
  visible.value = true;
};
const closeDialog = (v) => {
  visible.value = false;
  if (v === "ProfileVue") {
    profileVisible.value = true;
  }
  if (v === "QAVue") {
    qaVisible.value = true;
  }
};

const qaBack = () => {
  qaVisible.value = false;
};

const profileBack = () => {
  profileVisible.value = false;
};

const submitProfile = () => {
  profileVisible.value = false;
};
const submitQA = () => {
  qaVisible.value = false;
};

watch(
  () => visible.value,
  (v) => {
    v ? stopMove() : beginMove();
  }
);
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
