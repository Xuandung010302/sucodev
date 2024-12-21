import { createApp } from "vue";
import App from "./App.vue";
import router from "./assets/router";
import "./assets/main.css"
import 'material-icons/iconfont/material-icons.css';


createApp(App).use(router).mount("#app");