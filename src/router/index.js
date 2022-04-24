import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../views/routerView/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/personalCenter",
        name: "personalCenter",
        component: () => import("../views/personalCenter/index.vue"),
      },
      {
        path: "/docs",
        name: "docs",
        component: () => import("../views/docs/index.vue"),
      },
      {
        path: "/:catchAll(.*)",
        component: () => import("../views/NotFound/index.vue"),
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
