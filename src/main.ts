import { createApp } from "vue";
import { createPinia } from "pinia";
import "./input.css";

import App from "./App.vue";
import MainGame from "./components/MainGame/MainGame.vue";


import router from "./router";



const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
