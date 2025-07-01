import { defineStore } from "pinia";
import { ref } from "vue";

export const useUiStore = defineStore("ui", () => {
  const achievementQueue = ref([]);

  function showAchievement(achievement) {
    // Add a unique ID for the v-for key and to prevent duplicates
    const notificationId = Date.now() + Math.random();
    const notification = { ...achievement, notificationId };
    achievementQueue.value.push(notification);

    // Automatically remove after some time
    setTimeout(() => {
      const index = achievementQueue.value.findIndex((n) => n.notificationId === notificationId);
      if (index !== -1) {
        achievementQueue.value.splice(index, 1);
      }
    }, 5000); // Display for 5 seconds
  }

  return { achievementQueue, showAchievement };
});
