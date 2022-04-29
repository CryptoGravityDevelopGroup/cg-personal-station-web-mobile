<template>
  <div class="home-wrapper">
    <div class="home-wrapper">
      <header class="header">
        <img class="logo" src="/img/img_navbar_logo.png" alt="logo" />
        <div
          class="menu"
          id="menu-btn"
          @click="
            () => {
              visible = !visible;
              if (visible) {
                lottieReactive.btn1.playSegments([0, 45], true);
              } else {
                lottieReactive.btn1.playSegments([45, 90], true);
              }
            }
          "
        ></div>
      </header>
      <router-view />
    </div>

    <div
      class="modal-wrapper"
      :style="{ top: visible ? '56px' : '-100%' }"
      @click.stop="
        () => {
          visible = false;
          lottieReactive.btn1.playSegments([45, 90], true);
        }
      "
    >
      <div class="modal-content" @click.stop>
        <!-- <div class="wrapper">
          <img class="logo" src="/img/img_navbar_logo.png" alt="logo" />
          <div
            class="menu"
            id="menu-btn2"
            @click="
              () => {
                visible = false;
                lottieReactive.btn1.stop();
                lottieReactive.btn2.goToAndPlay(300);
              }
            "
          ></div>
        </div> -->
        <div class="wrapper avatar">
          <img
            v-if="address"
            src="/img/img_default_user_a.png"
            @click="goPage('/personalCenter')"
          />
          <img
            v-else
            src="/img/img_default_user_d.png"
            @click.stop="connectWallet"
          />
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
          <div class="menu-item" @click="goPage('/docs')">Docs</div>
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
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import lottie from "lottie-web";
import Confirm from "@/components/Confirm/index.vue";
import { getWeb3 } from "@/utils/web3";
import { stopMove, beginMove } from "@/utils/utils";
import menuIcon from "@/assets/lottie/menu-icon.json";

const router = useRouter();
const web3js = ref();
const address = ref();
const visible = ref(false);
const confirmVisible = ref(false);
const lottieReactive = reactive({
  btn1: null,
  btn2: null,
});

const connectWallet = async () => {
  if (address.value) return;
  const res = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  address.value = res[0].substr(0, 8) + "..." + res[0].substr(-4, 4);
  window.sessionStorage.setItem("account", res[0]);
};

const mainLottie = () => {
  lottieReactive.btn1 = lottie.loadAnimation({
    container: document.getElementById("menu-btn"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    animationData: menuIcon,
  });
};

const goPage = (path) => {
  if (!path) {
    confirmVisible.value = true;
    return;
  }
  lottieReactive.btn1.playSegments([45, 90], true);
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
  lottieReactive.btn1.playSegments([45, 90], true);
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
  mainLottie();
});

onUnmounted(() => {
  lottieReactive.btn1.destroy();
  lottieReactive.btn1 = null;
});

watch(
  () => visible.value,
  (v) => {
    v ? stopMove() : beginMove();
  }
);
</script>
<style lang="less" scoped>
@import "../home/index.less";
</style>
