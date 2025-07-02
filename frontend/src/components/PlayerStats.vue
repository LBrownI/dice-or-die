<template>
  <div class="statistics-section">
    <h2>Statistics</h2>
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-value">{{ stats.totalWins || 0 }}</div>
        <div class="stat-label">Total Wins</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ stats.totalDiceRolled || 0 }}</div>
        <div class="stat-label">Dice Rolled</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ stats.totalBossesDefeated || 0 }}</div>
        <div class="stat-label">Bosses Defeated</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ stats.totalBribedBosses || 0 }}</div>
        <div class="stat-label">Bosses Bribed</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ stats.totalPerfectDefeats || 0 }}</div>
        <div class="stat-label">Perfect Defeats</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${{ stats.maxMoneyInRun || 0 }}</div>
        <div class="stat-label">Max Money in a Run</div>
      </div>
    </div>
    <button @click="showDiceStats = true" class="dice-stats-button">View Dice Stats</button>
  </div>

  <DiceStatsModal
    v-if="showDiceStats"
    :dice-stats="stats.diceStats"
    @close="showDiceStats = false"
  />
</template>

<script setup>
import { ref } from "vue";
import DiceStatsModal from "./DiceStatsModal.vue";

defineProps({
  stats: {
    type: Object,
    required: true,
  },
});

const showDiceStats = ref(false);
</script>

<style scoped>
.statistics-section {
  margin-bottom: 30px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}
.stat-item {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
.stat-value {
  font-size: 2rem;
  font-weight: bold;
}
.stat-label {
  font-size: 0.9rem;
  color: #6c757d;
}
.dice-stats-button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}
</style>
