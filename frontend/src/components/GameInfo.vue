<script setup>
import { computed } from "vue";
import { useGameStore } from "../stores/game";

const gameStore = useGameStore();
const playerPosition     = computed(() => gameStore.playerPosition);
const playerMoney        = computed(() => gameStore.playerMoney);
const playerLap          = computed(() => gameStore.playerLap);
const playerStage        = computed(() => gameStore.playerStage);
const currentStageConfig = computed(() => gameStore.currentStageConfig);
const lastDiceRoll       = computed(() => gameStore.lastDiceRoll);
const gameMessage        = computed(() => gameStore.gameMessage);
</script>

<template>
  <div class="game-stats-panel">
    <h3>
      Etapa: {{ playerStage }} | Vuelta: {{ playerLap }} /
      {{ currentStageConfig?.lapsToComplete || 3 }}
    </h3>
    <p>⬇️Posición: {{ playerPosition }}</p>
    <p>🪙Dinero: ${{ playerMoney }}</p>
    <hr />
    <div class="debug-info">
      <p v-if="lastDiceRoll">
        Última tirada: {{ lastDiceRoll.value }} ({{ lastDiceRoll.type }} die,
        {{ lastDiceRoll.direction }})
      </p>
      <p class="game-feedback" v-if="gameMessage">{{ gameMessage }}</p>
      <p v-if="!lastDiceRoll && !gameMessage">Tira el dado!</p>
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
h3 {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1em; /* Adjusted */
  color: #333;
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
