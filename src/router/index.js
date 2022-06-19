import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/welcome",
    component: () => import("../views/routerView/index.vue"),
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import("../views/welcome/index.vue"),
      },
      {
        path: "/prepare",
        name: "prepare",
        component: () => import("../views/prepare/index.vue"),
      },
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/nfts",
        name: "nfts",
        component: () => import("../views/nfts/index.vue"),
      },
      {
        path: "/tokens",
        name: "tokens",
        component: () => import("../views/tokens/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router;
