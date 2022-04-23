<template>
  <div class="home-wrapper">
    <div class="home-wrapper">
      <header class="header">
        <img class="logo" src="/img/img_navbar_logo.png" alt="logo" />
        <img
          @click="visible = true"
          class="menu"
          src="/img/ic_navbbar_menu.png"
          alt="menu"
        />
      </header>
      <router-view />
    </div>

    <div
      class="modal-wrapper"
      :style="{ right: visible ? 0 : '-100%' }"
      @click.stop="visible = false"
    >
      <div class="modal-content" @click.stop>
        <div class="wrapper">
          <img
            @click="visible = false"
            src="/img/ic_navbbar_close.png"
            alt=""
          />
        </div>
        <div class="wrapper avatar">
          <img
            v-if="address"
            src="/img/img_default_user_a.png"
            alt=""
            @click="goPage('/personalCenter')"
          />
          <img v-else src="/img/img_default_user_d.png" alt="" />
        </div>
        <div class="wrapper menu">
          <div class="menu-item" @click="goPage('/')">Home</div>
          <div class="menu-item" @click="changenavigationBar('Introduction')">
            Introduction
          </div>
          <div class="menu-item" @click="changenavigationBar('Roadmap')">
            Roadmap
          </div>
          <div class="menu-item" @click="changenavigationBar('Tokens')">
            Tokens
          </div>
          <div class="menu-item" @click="changenavigationBar('Teams')">
            Teams
          </div>
          <div class="menu-item" @click="goPage()">Docs</div>
        </div>
        <div class="connent-wallet" @click.stop="connectWallet">
          {{ address ? address : "Connect wallet" }}
        </div>
      </div>
    </div>
    <Confirm
      v-model:visible="confirmVisible"
      content="In development, stay tuned"
    />
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import Confirm from "@/components/Confirm/index.vue";
import { getWeb3 } from "@/utils/web3";
import { stopMove, beginMove } from "@/utils/utils";

const router = useRouter();
const web3js = ref();
const address = ref();
const visible = ref(false);
const confirmVisible = ref(false);

const connectWallet = async () => {
  if (address.value) return;
  const res = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  address.value = res[0].substr(0, 8) + "..." + res[0].substr(-4, 4);
  window.sessionStorage.setItem("account", res[0]);
};

const goPage = (path) => {
  if (!path) {
    confirmVisible.value = true;
    return;
  }
  visible.value = false;
  router.push(path);
};

const changenavigationBar = async (key) => {
  try {
    navigation(key);
  } catch (error) {
    await router.push("/home");
    navigation(key);
  }
};

const navigation = (key) => {
  const PageId = document.querySelector("#" + key);
  visible.value = false;
  window.scrollTo({
    top: PageId.offsetTop - 100,
    behavior: "smooth",
  });
};

onMounted(async () => {
  window.sessionStorage.clear();
  web3js.value = await getWeb3();
});

watch(
  () => visible.value,
  (v) => {
    console.log(v);
    v ? stopMove() : beginMove();
  }
);
</script>
<style lang="less" scoped>
@import "../home/index.less";
</style>
