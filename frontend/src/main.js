// src/main.js
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import { useAuthStore } from "./stores/auth";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Fetch current user if a token exists
const authStore = useAuthStore();
if (authStore.isAuthenticated) {
  authStore.fetchCurrentUser();
}

app.mount("#app");
