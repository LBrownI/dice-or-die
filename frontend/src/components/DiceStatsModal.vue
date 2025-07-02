<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>Dice Stats</h2>
      <div class="dice-stats-grid">
        <div v-for="[die, count] in sortedDiceStats" :key="die" class="dice-stat-item">
          <span class="die-name">{{ die }}</span>
          <span class="die-count">{{ count }} times</span>
        </div>
        <div v-if="sortedDiceStats.length === 0" class="no-stats">No dice rolled yet!</div>
      </div>
      <button @click="$emit('close')" class="close-button">Close</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  diceStats: {
    type: Object,
    default: () => ({}),
  },
});

const sortedDiceStats = computed(() => {
  if (!props.diceStats) return [];
  // Convert map-like object to array and sort it
  return Object.entries(props.diceStats).sort((a, b) => b[1] - a[1]);
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2001;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
}
.dice-stats-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px;
}
.dice-stat-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 4px;
}
.die-name {
  font-weight: bold;
}
.close-button {
  width: 100%;
  padding: 10px;
  cursor: pointer;
}
.no-stats {
  text-align: center;
  padding: 20px;
}
</style>
