<script setup>
import { useGameStore } from "../stores/game";
import { storeToRefs } from "pinia";
import SingleDieDisplay from "./SingleDieDisplay.vue";

const gameStore = useGameStore();
// Destructure maxDiceInBag (or the getter diceBagCapacityDisplay)
const { reservedDice, diceBagCapacityDisplay } = storeToRefs(gameStore);

function useReservedDie(index) {
  const die = gameStore.reservedDice[index];

  if (gameStore.isGameOver || !die) return;

  if (gameStore.gamePhase === "boss_encounter") {
    gameStore.rollDiceForBoss(die);
  } else if (gameStore.gamePhase === "rolling") {
    gameStore.rollDice(index);
  }
}
</script>

<template>
  <div class="reserved-dice-container">
    <h3>Dados en la bolsa ({{ diceBagCapacityDisplay }})</h3>
    <p v-if="reservedDice.length === 0" class="no-dice-text">None</p>
    <div class="dice-grid">
      <SingleDieDisplay
        v-for="(die, index) in reservedDice"
        :key="`${die.type}-${die.value ?? 0}-${index}`"
        :die="die"
        @mouseenter="gameStore.highlightSquareForDie(die)"
        @mouseleave="gameStore.clearHighlightedSquare"
        @use-die="useReservedDie(index)"
      />
    </div>
  </div>
</template>

<style scoped>
.reserved-dice-container {
  text-align: center;
  background-color: #f8f8f0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.dice-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 10px; /* Add some space below the capacity text */
}
.no-dice-text {
  font-style: italic;
  color: #777;
  margin-top: 10px;
}
h3 {
  margin-top: 0;
  margin-bottom: 5px; /* Reduced margin */
  font-size: 1.1em;
  color: #444;
}
</style>
