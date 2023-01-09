import { createRouter, createWebHistory } from "vue-router";

import MainGameView from "../views/MainGameView.vue";

import CreateGameView from "../views/CreateGameView.vue";

 
function getCurrentURL () {
  if(window.location.pathname=="/"){
    return "/QVNERUYsICAgICA="
  } else{
    return window.location.pathname
  }
}


var browserURL = getCurrentURL()
browserURL = browserURL.substring(1);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:url',
      name: "main",
      component: MainGameView,
      props: (route) => ({url: browserURL
        }),
    },
    {
      path: "/create",
      name: "create",
      component: CreateGameView,
    },
    {
      path: "/",
      name: "mainn",
      component: MainGameView,
      props: (route) => ({url: browserURL
      }),
    },
    
  ],
});



export default router;
