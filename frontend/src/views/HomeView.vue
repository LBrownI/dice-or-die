// src/views/HomeView.vue
<script setup>
import { useRouter } from "vue-router";
import { useGameStore } from "../stores/game";

const router = useRouter();
const gameStore = useGameStore();

async function startNewGame() {
  try {
    const newGame = await gameStore.createGame();
    if (newGame && newGame._id) {
      router.push({ name: "Game", params: { sessionId: newGame._id } });
    }
  } catch (error) {
    console.error("Could not start a new game:", error);
  }
}
</script>

<template>
  <div class="home-container">
    <h1>🎲 Dice or DIE ☠️</h1>
    <nav class="home-nav">
      <button class="nav-link" @click="startNewGame">Play</button>
    </nav>
  </div>
</template>

<style scoped>
.patch-notes {
  position: absolute;
  top: 30px;
  right: 40px;
  background: #fff;
  border: 1px solid #3498db;
  border-radius: 8px;
  padding: 18px 22px;
  width: 320px;
  max-height: 340px;
  overflow: auto;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.08);
  z-index: 10;
  font-size: 0.98em;
  word-break: break-word;
}
.patch-notes h2 {
  margin: 0 0 8px 0;
  font-size: 1.15em;
  color: #2980b9;
}
.patch-version {
  margin-bottom: 10px;
}
.patch-version h3 {
  margin: 0 0 4px 0;
  font-size: 1em;
  color: #2c3e50;
}
.patch-version ul {
  margin: 0 0 0 16px;
  padding: 0;
  list-style: disc;
}
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  color: #2c3e50;
  margin-bottom: 30px;
}
.home-nav {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}
.nav-link {
  display: inline-block;
  padding: 12px 25px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}
.nav-link:hover {
  background-color: #2980b9;
}
</style>
