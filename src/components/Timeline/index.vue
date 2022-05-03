<template>
  <div class="m-timeline-area">
    <div class="m-timeline">
      <div
        :class="['m-timeline-item', { last: i === timelineDesc.length - 1 }]"
        v-for="(n, i) in timelineDesc"
        :key="i"
      >
        <div class="u-tail"></div>
        <div class="u-dot"></div>
        <div class="u-content">
          <div class="title">{{ n.title }}</div>
          <ul class="content">
            <li v-for="v in n.descs" :key="v">{{ v }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const timelineDesc = [
  {
    title: "Q3 , 2022",
    descs: [
      `Launch the main network of CryptoGracity, supporting website construction, contract deployment, and NFT asset sales. `,
      "Incubate more than 10 high-quality NFT projects.",
      `Continuous research and development to increase platform security
            and stability.`,
    ],
  },
  {
    title: "Q4 , 2022",
    descs: [
      `Upgrade cloud service capabilities in website construction, smart contracts, and risk control security.`,
      "Establish an intelligent database, and provide the project party with intelligent data analysis capabilities through a visual data model.",
      `Expand to explore digital asset types such as music and video.`,
    ],
  },
  {
    title: "Q1 , 2023",
    descs: [
      `Hatch more than 1,000 high-quality projects, and establish extensive and close cooperation with artists, studios, IPs, and project parties around the world.`,
      "Become a first-class web3 intelligent application cloud service platform.",
      `Lead the innovation of digital assets in the industry and explore more possibilities.`,
      `Hold offline exhibitions`,
    ],
  },
  {
    title: "Q2 , 2023",
    descs: [
      `Open platform project establishment and launch. `,
      "Build an intelligent database and provide the project party with intelligent data analysis capabilities through a visual data models.",
      `Expand to explore digital asset types such as music and video.`,
    ],
  },
];
</script>
<style lang="less" scoped>
@blue: #1890ff;
@green: #52c41a;
@red: #f5222d;
@gray: rgba(0, 0, 0, 0.25);
.m-timeline-area {
  width: 335px;
  margin: 39px auto 30px auto;
  &:last-child {
    margin-bottom: 0;
  }
  .m-timeline {
    .m-timeline-item {
      position: relative;
      padding-bottom: 30px;
      &:last-child {
        padding-bottom: 0;
      }
      .u-tail {
        position: absolute;
        top: 30px;
        left: 14px;
        opacity: 0.3;
        height: calc(100% - 30px);
        border-left: 1px dashed rgb(243, 236, 236);
      }
      .u-dot {
        position: absolute;
        width: 30px;
        height: 30px;
        opacity: 1;
        background-image: url("/img/ic_roadmap_dot.png");
        background-size: 60px;
        background-position: center;
        background-repeat: no-repeat;
      }
      .u-content {
        position: relative;
        width: 296px;
        top: -6px;
        margin-left: 38px;
        word-break: break-word;
        line-height: 24px;
        color: white;
        overflow: hidden;
        .title {
          width: 100%;
          height: 30px;
          opacity: 1;
          color: rgba(255, 255, 255, 1);
          font-size: 18px;
          font-weight: 700;
          font-family: "Helvetica Neue";
          text-align: left;
          line-height: 40px;
          margin-bottom: 4px;
        }
        .content {
          width: 100%;
          opacity: 1;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-weight: 400;
          font-family: "Helvetica Neue";
          text-align: left;
          padding-left: 12px;
        }
      }
    }
    .last {
      .u-tail {
        display: none;
      }
    }
  }
}
</style>
