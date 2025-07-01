<template>
  <div class="notifier-container">
    <transition-group name="slide-fade" tag="div">
      <AchievementNotification
        v-for="achievement in uiStore.achievementQueue"
        :key="achievement.notificationId"
        :achievement="achievement"
      />
    </transition-group>
  </div>
</template>

<script setup>
import { useUiStore } from "@/stores/ui";
import AchievementNotification from "./AchievementNotification.vue";
const uiStore = useUiStore();
</script>

<style scoped>
.notifier-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column-reverse; /* New notifications appear on top */
  gap: 10px;
}

/* Animation for entering and leaving */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
