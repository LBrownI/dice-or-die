// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AssetsView from "../views/AssetsView.vue";
// GameView is lazy-loaded, which is good practice
// const GameView = () => import("../views/GameView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../views/GameView.vue"), // Lazy load GameView
  },
  {
    path: "/assets",
    name: "Assets",
    component: AssetsView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
