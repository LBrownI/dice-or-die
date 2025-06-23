<template>
  <div id="app-layout">
    <div class="menu-bar">
      <button class="menu-btn" @click="toggleMenu">&#9776;</button>
      <router-link to="/login" class="login-btn">Iniciar Sesión</router-link>
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

<script setup>
import { ref } from "vue";
const showMenu = ref(false);
function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<style scoped>
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
}
.menu-bar {
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 100;
}
.menu-btn {
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.3em;
  padding: 4px 10px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
}
.login-btn {
  background: #2ecc71;
  color: white;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.95em;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
}
.login-btn:hover {
  background: #27ae60;
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
  position: absolute;
  top: 40px;
  left: 0;
}
.dropdown-menu a {
  color: #2c3e50;
  padding: 12px 18px;
  text-decoration: none;
  border-bottom: 1px solid #eee;
}
.dropdown-menu a:last-child {
  border-bottom: none;
}
.dropdown-menu a:hover {
  background: #f0f2f5;
}
.main-content {
  flex-grow: 1;
  padding: 20px;
  margin-top: 60px; /* Ensure content not under fixed menu */
}
</style>
