<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <div v-if="view === 'main'">
        <h2 class="modal-title">Collection</h2>
        <div class="collection-menu">
          <button @click="view = 'achievements'">Achievements</button>
          <button @click="view = 'stats'">Statistics</button>
          <button disabled>Encyclopedia</button>
        </div>
      </div>

      <div v-if="view === 'achievements'">
        <button class="back-button" @click="view = 'main'">&larr; Back</button>
        <AchievementsList :achievements="userAchievements" :total="totalAchievements" />
      </div>

      <div v-if="view === 'stats'">
        <button class="back-button" @click="view = 'main'">&larr; Back</button>
        <PlayerStats :stats="authStore.currentUser.stats" />
      </div>

      <button class="close-button" @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import AchievementsList from "./AchievementsList.vue";
import PlayerStats from "./PlayerStats.vue";

defineEmits(["close"]);

const authStore = useAuthStore();
const view = ref("main"); // 'main', 'achievements', 'stats'

const allAchievements = [
  { id: "first_boss", name: "I shall pass!", description: "Defeat your first boss." },
  { id: "first_bribe", name: "The Temptation", description: "Bribe your first boss." },
  { id: "pouch_full", name: "No Room for More", description: "Have your Dice Pouch full." },
  { id: "roll_100", name: "Roller!", description: "Roll a die 100 times." },
  {
    id: "money_500",
    name: "Kilos on Your Pockets",
    description: "Have more than $500 in one run.",
  },
  { id: "clear_run", name: "Area Cleared!", description: "End a run defeating all bosses." },
  {
    id: "perfect_run",
    name: "Glorious Victory!",
    description: "End a run defeating all bosses perfectly.",
  },
  {
    id: "bribe_all",
    name: "Master of Persuasion",
    description: "Bribe all bosses in a single run.",
  },
];
const totalAchievements = allAchievements.length;

const userAchievements = computed(() => {
  const userAchs = authStore.currentUser?.achievements || {};
  return allAchievements.map((ach) => ({
    ...ach,
    unlocked: userAchs[ach.id]?.unlocked || false,
    date: userAchs[ach.id]?.date,
  }));
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.modal-content {
  background: #fdfdfd;
  padding: 24px 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 700px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}
.modal-title {
  text-align: center;
  margin-top: 0;
  margin-bottom: 24px;
}
.collection-menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}
.collection-menu button {
  padding: 15px;
  font-size: 1.2rem;
  cursor: pointer;
}
.back-button {
  margin-bottom: 15px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #007bff;
}
.close-button {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
}
</style>
