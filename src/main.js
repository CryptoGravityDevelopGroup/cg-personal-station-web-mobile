import { createApp } from "vue";
import Antd from "ant-design-vue";

import "./utils/rem";
import "./assets/css/global.less";

import App from "./App.vue";
// import i18n from "./locales/i18n";
import router from "./router";

const app = createApp(App);

app.use(router).use(Antd).mount("#app");
