<!--- src/App.vue --->
<!---
Serves as the foundational layout or "shell" that wraps around all other content and views within the game.
It defines the consistent structure that will be present on every page of the app (common header, navigation links, common footer).
Contains <router-view /> a placeholder where the content of different "/views" will be dynamically rendered based on the current URL in the browser.

Could be a place to include global styles or JavaScript logic that needs to run for the entire application lifecycle (e.g., checking user auth status)

--->
<script setup>
import { ref } from "vue";

const showMenu = ref(false);
function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <div id="app-layout">
    <div class="menu-bar">
      <button class="menu-btn" @click="toggleMenu">&#9776;</button>
      <div v-if="showMenu" class="dropdown-menu">
        <router-link to="/" @click="showMenu = false">Home</router-link>
        <router-link to="/game" @click="showMenu = false">Game</router-link>
        <router-link to="/assets" @click="showMenu = false">Assets</router-link>
      </div>
    </div>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5; /* A light, neutral background for the entire app */
}
.menu-bar {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100;
}
.menu-btn {
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.3em;      /* Smaller icon */
  padding: 4px 10px;     /* Less padding */
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
}
.dropdown-menu {
  margin-top: 10px;
  background: #fff;
  border: 1px solid #3498db;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.08);
  display: flex;
  flex-direction: column;
  min-width: 120px;
}
.dropdown-menu a {
  color: #2c3e50;
  padding: 12px 18px;
  text-decoration: none;
  border-bottom: 1px solid #eee;
  transition: background 0.2s;
}
.dropdown-menu a:last-child {
  border-bottom: none;
}
.dropdown-menu a:hover {
  background: #f0f2f5;
}
.main-content {
  flex-grow: 1; /* Allows content to fill available vertical space */
  padding: 20px; /* Add some padding around the views */
  /* The views themselves will handle their internal layout (like centering) */
}
</style>
