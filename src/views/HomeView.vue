// src/views/HomeView.vue
<template>
  <div class="home-container">
    <h1>🎲 Dice OR DIE 🎲</h1>
    <nav>
      <router-link to="/game" class="nav-link">Jugar</router-link>
      <router-link to="/assets" class="nav-link">Ver Assets</router-link>
    </nav>
  </div>
</template>

<style scoped>
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
nav {
  display: flex;
  gap: 20px;
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
