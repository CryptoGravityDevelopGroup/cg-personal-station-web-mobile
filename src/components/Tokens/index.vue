<template>
  <div class="tokens-wrapper-c">
    <div v-if="status === 0" class="sign-up">
      <div class="subscribe-box">
        <div class="desc-tip">
          We will confirm the subscription of early supporters through the
          registration lottery. Before participating in the registration,
          supplementary information is required, and some operations are
          required to prove that it is not a robot.
        </div>
        <div class="button" @click="confirmVisible = true">Sign up</div>
        <div class="tip">Additional materials</div>
      </div>
      <div class="desc-wrapper">
        After completing the subscription, you can view your subscribed Token
        assets in the personal center
      </div>
      <div class="desc-1">
        We will use 5% of Tokens for early feedback to project supporters, and
        the funds obtained will be used for product research and development,
        marketing and other expenses. If you have questions about our token
        economy, welcome to check out our docs to get to know us.
      </div>
      <div class="desc-2">
        This time, we plan to raise 1,000 ETH, and we will stop raising it after
        reaching 1,000 ETH. Each wallet address has a minimum subscription of
        0.2ETH and a maximum subscription of 2ETH. We will technically limit
        multi-wallet subscriptions by one person. We will guarantee the rights
        and interests of early investors in the future, and at the same time,
        please read our dos in detail to know the ownership of their rights and
        interests.
      </div>
      <div class="price-box">
        <span>0.2ETH=5000GRA</span>
        <span>1ETH=50000GRA</span>
      </div>
      <div class="desc-3">
        The GRA obtained from this subscription will be locked for one year, and
        will be unlocked linearly at 7% per month after one year, and the
        unlocking will be completed within 14 months. This round of supporters
        will redeem the unlocked Tokens through the CryptoGravity official
        website
      </div>
    </div>

    <div v-if="status === 4" class="subscribe">
      <div class="subscribe-box">
        <div class="input-wrapper">
          <input
            type="text"
            placeholder="Please enter your subscription quantity"
          />
          <span class="util">ETH</span>
        </div>
        <div class="button">Subscribe</div>
      </div>
    </div>

    <div v-if="status === 5" class="registered">
      <div class="box">
        <div class="title">Registered</div>
        <div class="text-1">
          You also need to do the following through the associated Twitter to
          have a chance to win the lottery subscription:
        </div>
        <ol class="text-2">
          <li>Follow our official Twitter: @Gravity_NFTs</li>
          <li>Retweet like and @threefriends Tweet: www.yanshidizhi.com</li>
        </ol>
        <div class="text-1">
          After the completion, we will sign the form in the XXXX announcement.
          You need to complete the subscription within 24 hours after the
          announcement, otherwise the subscription qualification will be
          revoked.
        </div>
      </div>
    </div>

    <div v-if="status === 3" class="additional-materials">
      <div class="content-wrapper">
        <div class="form-wrapper">
          <div class="title">Additional materials</div>
          <div class="form-item">
            <div class="label">Email</div>
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div class="form-item">
            <div class="label">Verification code</div>
            <a-space>
              <input class="code" type="text" placeholder="Enter your Code" />
              <div class="send-button">Send verification</div>
            </a-space>
          </div>
          <div class="form-item">
            <div class="label">Telegram</div>
            <input type="text" placeholder="Enter your telegram id" />
            <div class="tip">
              We will contact you to enter our telegram group
            </div>
          </div>
          <div class="form-item" style="margin-top: 50px">
            <div class="label">Twitter</div>
            <a-space>
              <input
                class="code"
                type="text"
                placeholder="Enter your Twitter id"
              />
              <div class="send-button">Get connected</div>
            </a-space>
          </div>
        </div>
        <div class="tip-wrapper">
          <div class="box">
            <div class="text-1">
              You also need to do the following through the associated Twitter
              to have a chance to win the lottery subscription:
            </div>
            <ol class="text-2">
              <li>Follow our official Twitter: @Gravity_NFTs</li>
              <li>Retweet like and @threefriends Tweet: www.yanshidizhi.com</li>
            </ol>
            <div class="text-1">
              After the completion, we will sign the form in the XXXX
              announcement. You need to complete the subscription within 24
              hours after the announcement, otherwise the subscription
              qualification will be revoked.
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <div class="submit">Submit</div>
        <div class="cancel">Cancel</div>
      </div>
    </div>

    <div v-if="status === 6" class="view-assert">
      <div class="box">
        <div class="text">
          Congratulations, you have successfully subscribed to xxxx GRA
        </div>
        <div class="button">View assets</div>
      </div>
    </div>

    <div class="desc-wrapper">
      After completing the subscription, you can view your subscribed Token
      assets in the personal center
    </div>
    <div class="desc-1">
      We will use 5% of Tokens for early feedback to project supporters, and the
      funds obtained will be used for product research and development,
      marketing and other expenses. If you have questions about our token
      economy, welcome to check out our docs to get to know us.
    </div>
    <div class="desc-2">
      This time, we plan to raise 1,000 ETH, and we will stop raising it after
      reaching 1,000 ETH. Each wallet address has a minimum subscription of
      0.2ETH and a maximum subscription of 2ETH. We will technically limit
      multi-wallet subscriptions by one person. We will guarantee the rights and
      interests of early investors in the future, and at the same time, please
      read our dos in detail to know the ownership of their rights and
      interests.
    </div>
    <div class="price-box">
      <span>0.2ETH=5000GRA</span>
      <span>1ETH=50000GRA</span>
    </div>
    <div class="desc-3">
      The GRA obtained from this subscription will be locked for one year, and
      will be unlocked linearly at 7% per month after one year, and the
      unlocking will be completed within 14 months. This round of supporters
      will redeem the unlocked Tokens through the CryptoGravity official website
    </div>
  </div>

  <Confirm
    v-model:visible="confirmVisible"
    content="If you have not supplemented the materials, you will not be able to subscribe for the registration quota"
  >
    <template #buttons>
      <div class="buttons">
        <div class="ok-button">supplement materials</div>
        <div class="cancel-button" @click="confirmVisible = false">Cancel</div>
      </div>
    </template>
  </Confirm>
</template>

<script setup>
import { ref, watch } from "vue";
import Confirm from "@/components/Confirm/index.vue";
import { stopMove, beginMove } from "@/utils/utils";

const confirmVisible = ref(false);
const status = ref(0);

watch(
  () => status,
  (val) => {
    if (val === 3) {
      stopMove();
    } else {
      beginMove();
    }
  },
  { immediate: true }
);
</script>

<style lang="less" scoped>
.tokens-wrapper-c {
  .subscribe {
    .subscribe-box {
      height: 142px;
      border-radius: 10px;
      opacity: 1;
      border: 1px solid rgba(84, 176, 252, 0.25);
      background: rgba(5, 2, 22, 1);
      box-shadow: 0 0 20px 0 rgba(84, 176, 252, 0.25);
      padding: 16px;
      .input-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          width: 250px;
          height: 48px;
          border-radius: 6px;
          opacity: 1;
          border: 1px solid rgba(1, 1, 1, 0.5);
          background: rgba(255, 255, 255, 0.1);
          text-decoration: none;
          outline-style: none;
          color: white;
          padding-left: 10px;
          &::-webkit-input-placeholder {
            width: 220px;
            height: 18px;
            opacity: 1;
            color: rgba(255, 255, 255, 0.8);
            font-size: 12px;
            font-weight: 400;
          }
        }
        .util {
          width: 31px;
          height: 24px;
          opacity: 1;
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-weight: 400;
          font-family: "Source Han Sans CN";
          text-align: left;
        }
      }
      .button {
        width: 123px;
        height: 46px;
        border-radius: 10px;
        opacity: 1;
        background: rgba(24, 111, 242, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 16px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 16px auto 0 auto;
      }
    }
    .price-box {
      height: 58px;
      border-radius: 10px;
      opacity: 1;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 20px auto;
      span {
        color: rgba(255, 255, 255, 1);
        font-size: 16px;
        font-weight: 700;
      }
    }
  }

  .sign-up {
    .subscribe-box {
      height: 280px;
      border-radius: 10px;
      opacity: 1;
      border: 1px solid rgba(84, 176, 252, 0.25);
      background: rgba(5, 2, 22, 1);
      box-shadow: 0 0 20px 0 rgba(84, 176, 252, 0.25);
      padding: 16px;
      .desc-tip {
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        font-weight: 400;
      }
      .button {
        // width: 123px;
        height: 46px;
        border-radius: 10px;
        opacity: 1;
        background: rgba(24, 111, 242, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 16px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 16px auto 0 auto;
      }
      .tip {
        height: 16px;
        opacity: 1;
        color: rgba(252, 252, 253, 1);
        font-size: 16px;
        font-weight: 700;
        font-family: "DM Sans";
        text-align: center;
        padding: 16px 0;
      }
    }
  }

  .view-assert {
    .box {
      height: 176px;
      border-radius: 10px;
      opacity: 1;
      border: 1px solid rgba(84, 176, 252, 0.25);
      background: rgba(5, 2, 22, 1);
      box-shadow: 0 0 20px 0 rgba(84, 176, 252, 0.25);
      padding: 16px;
      .text {
        height: 90px;
        opacity: 1;
        color: rgba(255, 255, 255, 1);
        font-size: 20px;
        font-weight: 500;

        text-align: center;
        line-height: 30px;
      }
      .button {
        width: 144px;
        height: 46px;
        border-radius: 10px;
        opacity: 1;
        background: rgba(24, 111, 242, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 18px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px auto 0 auto;
      }
    }
  }

  .registered {
    .box {
      min-height: 407px;
      border-radius: 10px;
      opacity: 1;
      border: 1px solid rgba(84, 176, 252, 0.25);
      background: rgba(5, 2, 22, 1);
      box-shadow: 0 0 20px 0 rgba(84, 176, 252, 0.25);
      padding: 16px;
      .title {
        // width: 94px;
        height: 27px;
        opacity: 1;
        color: rgba(255, 255, 255, 1);
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
        text-align: center;
        line-height: 27px;
      }
      .text-1 {
        height: 72px;
        opacity: 1;
        color: rgba(255, 255, 255, 0.8);
        font-size: 16px;
        font-weight: 300;
        text-align: left;
        line-height: 24px;
      }
      .text-2 {
        height: 112px;
        border-radius: 8px;
        opacity: 1;
        background: rgba(255, 255, 255, 0.1);
        overflow: hidden;
        margin: 8px 0;
        li {
          color: rgba(255, 255, 255, 1);
          font-size: 16px;
          text-align: left;
          line-height: 24px;
          font-weight: 300;
          &:nth-child(1) {
            margin-top: 8px;
          }
        }
      }
    }
  }

  .additional-materials {
    color: white;
    width: 100vw;
    height: calc(100vh - 55px);
    background-color: #050216;
    position: fixed;
    z-index: 10;
    top: 55px;
    left: 0;
    .content-wrapper {
      width: 335px;
      height: 100%;
      overflow: auto;
      margin: 0 auto;
      &::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }
      .form-wrapper {
        .title {
          height: 24px;
          opacity: 1;
          color: rgba(255, 255, 255, 1);
          font-size: 16px;
          font-weight: 700;
          margin-top: 20px;
        }
        .form-item {
          height: 81px;
          margin-top: 32px;
          .label {
            color: rgba(255, 255, 255, 1);
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 12px;
          }
          input {
            width: 100%;
            height: 48px;
            border-radius: 8px;
            opacity: 1;
            border: 1px solid rgba(70, 70, 70, 0.5);
            background: rgba(255, 255, 255, 0.1);
            outline: none;
            padding-left: 10px;
            &::placeholder {
              color: rgba(119, 126, 145, 1);
              font-size: 14px;
              font-weight: 400;
            }
          }
          .code {
            width: 193px;
          }
          .tip {
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
            margin-top: 4px;
          }
          .send-button {
            width: 134px;
            height: 40px;
            border-radius: 10px;
            opacity: 1;
            background: rgba(24, 111, 242, 1);
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .tip-wrapper {
        margin-top: 52px;
        .box {
          min-height: 407px;
          padding: 16px;
          .title {
            // width: 94px;
            height: 27px;
            opacity: 1;
            color: rgba(255, 255, 255, 1);
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 10px;
            text-align: center;
            line-height: 27px;
          }
          .text-1 {
            height: 72px;
            opacity: 1;
            color: rgba(255, 255, 255, 0.8);
            font-size: 16px;
            font-weight: 300;
            text-align: left;
            line-height: 24px;
          }
          .text-2 {
            height: 112px;
            border-radius: 8px;
            opacity: 1;
            background: rgba(255, 255, 255, 0.1);
            overflow: hidden;
            margin: 8px 0;
            li {
              color: rgba(255, 255, 255, 1);
              font-size: 16px;
              text-align: left;
              line-height: 24px;
              font-weight: 300;
              &:nth-child(1) {
                margin-top: 8px;
              }
            }
          }
        }
      }
    }
    .buttons {
      width: 343px;
      height: 40px;
      border-radius: 10px;
      opacity: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 16px;
      left: 16px;
      .submit {
        width: 48%;
        height: 100%;
        border-radius: 10px;
        background: rgba(24, 111, 242, 1);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .cancel {
        width: 48%;
        height: 100%;
        border-radius: 10px;
        background: rgb(0, 0, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #fbddde45;
      }
    }
  }

  .desc-wrapper {
    height: 36px;
    opacity: 1;
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    font-weight: 400;

    text-align: left;
    line-height: 18px;
    margin-top: 16px;
  }
  .desc-1 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-weight: 400;
    margin: 35px 0 10px 0;
  }
  .desc-2 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-weight: 400;
  }
  .desc-3 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-weight: 400;
  }
}

.buttons {
  .ok-button {
    width: 279px;
    height: 48px;
    border-radius: 10px;
    opacity: 1;
    margin: 10px auto 0px auto;
    color: white;
    font-weight: bold;
    background: rgba(24, 111, 242, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cancel-button {
    width: 279px;
    height: 48px;
    border-radius: 10px;
    opacity: 1;
    margin: 10px auto 0px auto;
    color: white;
    font-weight: bold;
    border: 2px solid #fbddde45;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
