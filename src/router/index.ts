import { createRouter, createWebHistory } from "vue-router";

import MainGameView from "../views/MainGameView.vue";
import CreateGameView from "../views/CreateGameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainGameView,
    },
    {
      path: "/create",
      name: "create",
      component: CreateGameView,
    },
  ],
});

export default router;
