<template>
  <div id="app-layout">
    <main class="main-content">
      <router-view />
    </main>
    <AchievementNotifier />
  </div>
</template>

<script setup>
import AchievementNotifier from "@/components/AchievementNotifier.vue";
// No menu logic needed
</script>

<style scoped>
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
}
.main-content {
  flex-grow: 1;
  padding: 20px;
  margin-top: 0; /* Remove margin for menu */
}
</style>
