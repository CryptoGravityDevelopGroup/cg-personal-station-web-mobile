<template>
  <div class="home-wrapper">
    <div class="reddme-wrapper">
      <section class="reddme-box"></section>
    </div>
    <div class="button-wrapper">
      <div class="button">Redeem all</div>
    </div>
  </div>
</template>
<style lang="less">
.reddme-wrapper {
  padding-bottom: 100px;
  .reddme-box {
    width: 335px;
    height: 238px;
    border-radius: 10px;
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(120px);
    margin: 20px auto;
    padding: 45px;
  }
}
.button-wrapper {
  position: fixed;
  bottom: 0;
  z-index: 5;
  width: 375px;
  height: 78px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 22, 0.95);
  .button {
    width: 343px;
    height: 46px;
    border-radius: 10px;
    opacity: 1;
    background: rgba(24, 111, 242, 1);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
