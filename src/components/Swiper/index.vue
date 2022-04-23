<template>
  <div class="Swiper-wrapper">
    <swiper
      ref="swiperRef"
      :modules="modules"
      allowSlidePrev
      allowSlideNext
      slides-per-view="auto"
      :centered-slides="true"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="avatar"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="avatar"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="avatar"></div>
      </swiper-slide>
    </swiper>
    <div class="action-wrapper">
      <div class="left-icon" @click="slidePrev"></div>
      <div class="center-content">
        <div class="title">Leo</div>
        <div class="line"></div>
        <div class="content">
          Alibaba Product Expert ByteDance Product Supervisor Former Head of
          Near Public Chain Asia Pacific NFT Art Community 7 years working
          experience in Internet products
        </div>
      </div>
      <div class="right-icon" @click="slideNext"></div>
    </div>
  </div>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperRef = ref();
    const swiper = computed(() => swiperRef.value);
    const onSwiper = () => {
      console.log(swiper.value);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const slideNext = () => {
      swiper.value.slideNext();
    };
    const slidePrev = () => {
      swiper.value.slidePrev();
    };
    return {
      onSwiper,
      onSlideChange,
      swiperRef,
      slideNext,
      slidePrev,
      modules: [Navigation, Pagination, Scrollbar, A11y],
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
  .avatar {
    width: 100%;
    height: 100%;
    background-image: url("/img/bg_team_avatar.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
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
      background-image: url("/img/ic_team_left.png");
      background-repeat: no-repeat;
      background-size: 24px;
      background-position: center;
    }
    .right-icon {
      background-image: url("/img/ic_team_right.png");
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
