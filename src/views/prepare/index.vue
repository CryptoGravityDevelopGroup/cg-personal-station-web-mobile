<template>
  <div class="prepare-wrapper">
    <a-steps
      class="setps-wrap"
      v-model:current="current"
      status="finish"
      size="small"
      direction="horizontal"
      :responsive="false"
      labelPlacement="vertical"
    >
      <a-step
        status="finish"
        v-for="(item, index) in steps"
        :key="item.title"
        :title="item.title"
      >
        <template #icon>
          <CheckCircleOutlined style="color: white" v-if="index === current" />
          <ClockCircleOutlined style="color: white" v-else />
        </template>
      </a-step>
    </a-steps>
    <div class="content-wrapper">
      <component
        :is="currentComponent"
        v-model:profiles="userData.profile"
        v-model:qas="userData.qas"
        @next="next"
      />
    </div>
  </div>
</template>
<script>
import { ref, defineComponent, watch, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons-vue";
import LinkWalletVue from "./components/LinkWallet.vue";
import ProfileVue from "./components/Profile.vue";
import QAVue from "./components/Q&A.vue";
import CompleteVue from "./components/Complete.vue";
import SelectAvatarVue from "./components/SelectAvatar.vue";
import TagCommentVue from "./components/TagComment.vue";

export default defineComponent({
  components: {
    ClockCircleOutlined,
    CheckCircleOutlined,
    LinkWalletVue,
    ProfileVue,
    QAVue,
    CompleteVue,
    SelectAvatarVue,
    TagCommentVue,
  },
  setup() {
    const route = useRoute();
    const currentComponent = ref("LinkWalletVue");
    const current = ref(0);
    const steps = ref([
      {
        title: "Cannect wallet",
        content: "First-content",
      },
      {
        title: "Profile",
        content: "Second-content",
      },
      {
        title: "Q&A",
        content: "Last-content",
      },
    ]);

    const userData = reactive({
      profile: {
        name: "",
        avatar: "",
        aboutMe: "",
        tags: [],
        instagram: "",
        twitter: "",
        telegram: "",
      },
      qas: [
        {
          key: 1,
          question: "",
          answer: "",
        },
      ],
    });

    const next = (value, index = 0) => {
      if (value) {
        currentComponent.value = value;
        current.value = index;
        sessionStorage.setItem("userData", JSON.stringify(userData));
      }
    };

    watch(
      () => route.query,
      (query) => {
        currentComponent.value = query.c || "LinkWalletVue";
      }
    );

    onMounted(() => {
      currentComponent.value = route.query.c || "LinkWalletVue";
    });

    return {
      current,
      currentComponent,
      steps,
      next,
      userData,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
