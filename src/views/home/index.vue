<template>
  <div class="home-wrapper">
    <main class="main" id="home">
      <div id="main_gt" class="main_gt"></div>
      <span class="CryptoGravity">CryptoGravity</span>
    </main>
    <section class="main-wrapper">
      <div class="sub-title">
        Building the next-generation intelligent application cloud service
        platform
      </div>
      <div class="start-button" @click="confirmVisible = true">
        <span class="Start">Start</span>
        <img
          class="circle-ctrl-right"
          src="/img/circle-ctrl-right.png"
          alt="circle-ctrl-right"
        />
      </div>
    </section>
    <section class="section-wrapper" id="Introduction">
      <div class="title">Introduction</div>
      <div class="title-line"></div>
      <div class="info-box" v-for="(v, i) in InfoBoxs" :key="i">
        <div class="icon">
          <img :src="v.icon" alt="" />
        </div>
        <div class="box-content">
          <div class="title">{{ v.title }}</div>
          <div class="content">{{ v.content }}</div>
        </div>
      </div>
    </section>
    <section class="section-wrapper what-wrapper">
      <div class="title">What can CryptoGravity do?</div>
      <div class="title-line"></div>
      <div class="cwd-mid" id="cwd-mid"></div>
      <div class="what-box" v-for="(v, i) in whatBoxs" :key="i">
        <div class="title">{{ v.title }}</div>
        <div class="content">{{ v.content }}</div>
      </div>
    </section>
    <section class="section-wrapper load-map-wrapper" id="Roadmap">
      <div class="title">Roadmap</div>
      <div class="title-line"></div>
      <Timeline />
    </section>
    <section class="section-wrapper tokens-wrapper" id="Tokens">
      <div class="title">Tokens</div>
      <div class="title-line"></div>
      <div class="cwd-mid"></div>
      <div class="desc">
        <div class="text">We will officially release tokens soon</div>
        <div class="text">Follow us on Twitter for the latest news</div>
      </div>
    </section>
    <section class="section-wrapper teams-wrapper" id="Teams">
      <div class="title">Teams</div>
      <div class="title-line"></div>
      <Swiper />
    </section>
    <footer class="footer">
      <div class="icon-wrapper">
        <div class="icon">
          <img src="/img/ic_side_tel.png" alt="" />
          <span class="text">Twitter</span>
        </div>
        <div class="icon">
          <img src="/img/ic_side_discord.png" alt="" />
          <span class="text">discord</span>
        </div>
        <div class="icon">
          <img src="/img/ic_side_twitter.png" alt="" />
          <span class="text">Telogram</span>
        </div>
      </div>
      <div class="desc">© 2022 CryptoGravity. Al Rights Reserved.</div>
    </footer>
  </div>
  <Confirm
    v-model:visible="confirmVisible"
    content="In development, stay tuned"
  />
</template>
<script setup>
import { onMounted, ref } from "vue";
import lottie from "lottie-web";
import Timeline from "@/components/Timeline/index.vue";
import Swiper from "@/components/Swiper/index.vue";
import Confirm from "@/components/Confirm/index.vue";
import { getWeb3 } from "@/utils/web3";
import mainGtJson from "@/assets/lottie/cg_main.json";
import cwdMidJson from "@/assets/lottie/wccgd.json";
const InfoBoxs = [
  {
    icon: "/img/ic_intro_6.png",
    title: "Website Building",
    content:
      "Through simple page interaction, you can build your own project website and deploy domain name",
  },
  {
    icon: "/img/ic_intro_5.png",
    title: "Smart Contract",
    content:
      "One-stop smart contract deployment and setup, easy to realize without code",
  },
  {
    icon: "/img/ic_intro_4.png",
    title: "Digital Asset Sale",
    content:
      "Integrate digital asset types such as NFT pictures, music, and videos, and store and host many different asset types",
  },
  {
    icon: "/img/ic_intro_3.png",
    title: "Numerous Gameplay",
    content:
      "Provide many mainstream sale modes, such as pre-sale, whitelist system, blind box sale",
  },
  {
    icon: "/img/ic_intro_2.png",
    title: "Database",
    content:
      "Provide project parties with complete project data models and data storage function, and help them to better understand their project by visualizing the data",
  },
  {
    icon: "/img/ic_intro_1.png",
    title: "Risk Control",
    content:
      "A systematic risk control security solution to ensure the stable operation of the project and avoid being attacked and intruded by scientists",
  },
];
const whatBoxs = [
  {
    title: "NFT sale",
    content:
      "Create an NFT project, and publish your own project official website by configuring the website, NFT upload, and sale rule settings",
  },
  {
    title: "Donations and Fundraising",
    content:
      "In the absence of a technical team, you can build a donation and fundraising website through CryptoGravity to make investors more recognized",
  },
  {
    title: "DAO official website",
    content:
      "Easily and quickly build your own official website of DAO to gain greater influence for your community",
  },
  {
    title: "Open platform",
    content:
      "Provide developers with a complete technology platform, through middleware technology, enable developers to quickly build their own applications with minimal R&D costs",
  },
];

const web3js = ref();
const confirmVisible = ref(false);

const mainLottie = () => {
  lottie.loadAnimation({
    container: document.getElementById("main_gt"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: mainGtJson,
    assetsPath: "/lottie/main_bg/",
  });
  lottie.loadAnimation({
    container: document.getElementById("cwd-mid"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: cwdMidJson,
    assetsPath: "/lottie/wccgd/",
  });
};

onMounted(async () => {
  mainLottie();
  web3js.value = await getWeb3();
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
