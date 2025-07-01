<script setup>
import { computed } from "vue";
import { useGameStore } from "../stores/game";

const gameStore = useGameStore();
const emit = defineEmits(["open-options"]);

const playerPosition = computed(() => gameStore.playerPosition);
const playerMoney = computed(() => gameStore.playerMoney);
const playerLap = computed(() => gameStore.playerLap);
const playerStage = computed(() => gameStore.playerStage);
const totalRolls = computed(() => gameStore.totalRolls);
const lastDiceRoll = computed(() => gameStore.lastDiceRoll);
const gameMessage = computed(() => gameStore.gameMessage);
</script>

<template>
  <div class="game-stats-panel">
    <div class="panel-header">
      <div class="header-buttons">
        <button class="header-btn" disabled>Run Info</button>
        <button class="header-btn" @click="emit('open-options')">Options</button>
      </div>
      <h3>Stage: {{ playerStage }} | Lap: {{ playerLap }} / 3</h3>
    </div>
    <p>↩️ Turn: {{ totalRolls }}</p>
    <p>⬇️ Position: {{ playerPosition }}</p>
    <p>🪙 Money: ${{ playerMoney }}</p>
    <hr />
    <div class="info-messages">
      <p v-if="lastDiceRoll">Last Roll: {{ lastDiceRoll.value }} ({{ lastDiceRoll.type }} die)</p>
      <p class="game-feedback" v-if="gameMessage">{{ gameMessage }}</p>
      <p v-if="!lastDiceRoll && !gameMessage">Roll a die to start!</p>
    </div>
  </div>
</template>

<style scoped>
.game-stats-panel {
  padding: 10px; /* Reduced padding to fit more info if centered */
  border: 2px solid #777;
  border-radius: 8px;
  background-color: rgba(253, 253, 240, 0.95); /* Highly opaque for readability */
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  /* Width and height will be controlled by App.vue for overlay */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  box-sizing: border-box;
}
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
}

.header-buttons {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.header-btn {
  padding: 2px 6px;
  font-size: 0.7rem;
  background-color: #d1d1d1;
  border: 1px solid #999;
  border-radius: 4px;
  cursor: pointer;
}
.header-btn:hover {
  background-color: #bfbfbf;
}
.header-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
h3 {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1em; /* Adjusted */
  color: #333;
  text-align: right;
  flex-grow: 1;
}
p {
  margin: 3px 0; /* Compact spacing */
  font-size: 0.9em; /* Adjusted */
  color: #444;
}
hr {
  margin: 6px 0; /* Compact spacing */
  border: 0;
  border-top: 1px solid #ddd;
}
.debug-info {
  font-size: 0.8em;
  color: #555;
  margin-top: 5px;
  overflow-y: auto; /* Scroll if too much text */
  max-height: 50px; /* Limit height of debug */
}
.debug-info p {
  margin: 2px 0;
}
.game-feedback {
  font-weight: bold;
  /* color: #155724; (Decide on color based on message type later) */
}
</style>
