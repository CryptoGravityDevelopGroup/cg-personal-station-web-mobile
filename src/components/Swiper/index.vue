<template>
  <div class="Swiper-wrapper">
    <swiper
      ref="swiperRef"
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :navigation="true"
      slides-per-view="auto"
      :centered-slides="true"
      :loop="true"
      @realIndexChange="realIndexChange"
    >
      <swiper-slide v-for="(v, i) in swipers" :key="i">
        <div class="avatar">
          <img :src="v.url" alt="" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="action-wrapper">
      <div class="left-icon"></div>
      <div class="center-content">
        <div class="title">{{ peopleInfo.name }}</div>
        <div class="line"></div>
        <div class="content">
          <div style="text-align: center" v-html="peopleInfo.content"></div>
        </div>
      </div>
      <div class="right-icon"></div>
    </div>
  </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";
import { reactive, ref } from "vue";
const swipers = [
  {
    url: "/avatars/Leo.png",
    name: "Leo ",
    content: `<div>Product expert of top 2 e-commerce company</div>
              <div>ByteDance Product Supervisor</div>
              <div>Former Head of Near Public Chain Asia Pacific NFT Art Community</div>
              <div>7 years working experience in Internet products</div>`,
  },
  {
    url: "/avatars/Scarecrow.png",
    name: "Marshall.MA",
    content: `<div>Senior engineer of a company in the top ten public chains by market value</div>
              <div>10 years experience in telecom BOSS system</div>`,
  },
  {
    url: "/avatars/UI.png",
    name: "Wison",
    content: `<div>UI Designer Expert</div>
              <div>8 years experience in mobile and pc UI design</div>
              <div>Participated in many products with millions of users</div>`,
  },
  {
    url: "/avatars/architect.png",
    name: "Brough",
    content: `<div>Front-end architect</div>
              <div>Advanced Development of TRC Chain Games</div>
              <div>TRON Community Leader</div>`,
  },
  {
    url: "/avatars/expert.png",
    name: "TimeLord",
    content: `<div>Full-stack engineer expert</div>
              <div>TRON Front-End Architect</div>
              <div>Six-year experience in blockchain development</div>`,
  },
  {
    url: "/avatars/NUS.png",
    name: "Phoebe",
    content: `<div>Master of Engineering in NUS</div>
              <div>Independent consultant for more than 3 years</div>
              <div>Serial entrepreneur</div>`,
  },
  {
    url: "/avatars/Robert.png",
    name: "Robert",
    content: `<div>Senior researcher of top2 search engine company</div>
              <div>Technical director of top3 e-commerce company, responsible for advertising and transaction risk control</div>
              <div>Eight-year Internet development experience</div>
              <div>Three-year contract development experience</div>`,
  },
];
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperRef = ref();
    const peopleInfo = reactive({
      name: swipers[0].name,
      content: swipers[0].content,
    });

    const realIndexChange = (v) => {
      const { name, content } = swipers.find(
        (_, index) => index === v.realIndex
      );
      peopleInfo.name = name;
      peopleInfo.content = content;
    };

    return {
      swiperRef,
      swipers,
      peopleInfo,
      realIndexChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>
<style lang="less">
.Swiper-wrapper {
  .swiper-container {
    width: 100%;
    height: 100%;
    margin: 4px auto;
  }

  .swiper-slide {
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.7);
  }

  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }

  .swiper-slide {
    width: 170px;
    height: 170px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: 38%;
    opacity: 0;
  }

  .avatar {
    width: 100%;
    height: 100%;
    background-image: url("/img/bg_team_avatar.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .action-wrapper {
    width: 100%;
    height: 136px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;

    .left-icon,
    .right-icon {
      width: 40px;
      height: 100%;
      background-repeat: no-repeat;
      background-size: 24px;
      background-position: center;
    }

    .center-content {
      width: 100%;
      padding: 0 10px;

      .title {
        width: 100%;
        height: 30px;
        opacity: 1;
        color: rgba(255, 255, 255, 1);
        font-size: 20px;
        font-weight: 700;
        font-family: "Helvetica Neue";
        text-align: center;
        line-height: 30px;
      }

      .line {
        width: 38px;
        height: 1px;
        opacity: 1;
        border: 0.5px solid rgba(177, 177, 177, 0.8);
        margin: 10px auto;
      }

      .content {
        width: 295px;
        height: 90px;
        opacity: 1;
        color: rgba(255, 255, 255, 0.8);
        font-size: 12px;
        font-weight: 400;
        font-family: "Helvetica Neue";
        text-align: center;
        line-height: 18px;
      }
    }
  }
}
</style>
