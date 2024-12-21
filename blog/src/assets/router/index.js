import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import ReadingList from "@/pages/ReadingList.vue";
import TopicPage from "@/pages/TopicPage.vue";
import NewPage from "@/pages/NewPage.vue";
import CreatePage from "@/pages/CreatePage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/new", name: "new", component: NewPage },
  { path: "/reading-list", name: "reading-list", component: ReadingList },
  { path: "/topics", name: "topics", component: TopicPage },
  { path: "/create", name: "create", component: CreatePage },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
