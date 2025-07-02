<script setup>
import { computed, ref } from "vue";
import { useGameStore } from "../stores/game";
import SingleDieDisplay from "./SingleDieDisplay.vue";

const gameStore = useGameStore();
const reservedDice = computed(() => gameStore.reservedDice);
const diceBagCapacityDisplay = computed(() => gameStore.diceBagCapacityDisplay);

const sortMode = ref("default"); // 'default', 'power_asc', 'power_desc'

const DIE_POWER_LEVEL = {
  20: 50,
  "Reverse Fixed": -10,
  "Reverse Random": -5,
  Random: 10,
  Fixed: 20,
};

const sortedDice = computed(() => {
  const dice = [...reservedDice.value];

  if (sortMode.value === "default") {
    // Custom sort: 'Random' dice first, then all others, maintaining acquisition order.
    const randomDice = [];
    const otherDice = [];
    dice.forEach((d) => {
      if (d.type === "Random") {
        randomDice.push(d);
      } else {
        otherDice.push(d);
      }
    });
    return [...randomDice, ...otherDice];
  }

  dice.sort((a, b) => {
    const powerA =
      (DIE_POWER_LEVEL[a.type] || 0) + (a.value || 0) * (a.type.includes("Reverse") ? -1 : 1);
    const powerB =
      (DIE_POWER_LEVEL[b.type] || 0) + (b.value || 0) * (b.type.includes("Reverse") ? -1 : 1);

    if (sortMode.value === "power_desc") {
      return powerB - powerA;
    } else {
      // power_asc
      return powerA - powerB;
    }
  });

  return dice;
});

function useReservedDie(die) {
  if (gameStore.isGameOver || !die) return;

  // Find original index of the die to send to the store
  const originalIndex = gameStore.reservedDice.findIndex(
    (d, i) => d.type === die.type && d.value === die.value && !d.isBeingUsed // Temporary flag to find the right one
  );
  if (originalIndex === -1) {
    console.error("Could not find die in pouch", die);
    // As a fallback, try to find *any* matching die.
    const fallbackIndex = gameStore.reservedDice.indexOf(die);
    if (fallbackIndex !== -1) {
      gameStore.rollDice(fallbackIndex);
    }
    return;
  }

  // --- WIZARD SKILL LOGIC ---
  if (gameStore.playerCharacter === "wizard" && gameStore.skillState.isActive) {
    if (gameStore.reservedDice.length >= gameStore.maxDiceInBag) {
      alert("Cannot duplicate, pouch is full!");
      return;
    }
    gameStore.useSkill({ dieIndex: originalIndex });
  } else {
    gameStore.rollDice(originalIndex);
  }
}
</script>

<template>
  <div class="reserved-dice-container">
    <div class="pouch-header">
      <h3>Dice Pouch ({{ diceBagCapacityDisplay }})</h3>
      <div class="sort-buttons">
        <button @click="sortMode = 'default'" :class="{ active: sortMode === 'default' }">
          Def
        </button>
        <button @click="sortMode = 'power_desc'" :class="{ active: sortMode === 'power_desc' }">
          PP ▼
        </button>
        <button @click="sortMode = 'power_asc'" :class="{ active: sortMode === 'power_asc' }">
          PP ▲
        </button>
      </div>
    </div>
    <p v-if="sortedDice.length === 0" class="no-dice-text">None</p>
    <div class="dice-grid">
      <SingleDieDisplay
        v-for="(die, index) in sortedDice"
        :key="`${die.type}-${die.value ?? 0}-${index}`"
        :die="die"
        @mouseenter="gameStore.highlightSquareForDie(die)"
        @mouseleave="gameStore.clearHighlightedSquare"
        @use-die="useReservedDie(die)"
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

.pouch-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.sort-buttons {
  display: flex;
  gap: 4px;
}

.sort-buttons button {
  padding: 2px 6px;
  font-size: 0.7rem;
  background-color: #e1e1e1;
  border: 1px solid #999;
  border-radius: 4px;
  cursor: pointer;
}
.sort-buttons button:hover {
  background-color: #bfbfbf;
}
.sort-buttons button.active {
  background-color: #2c3e50;
  color: white;
  border-color: black;
}

.dice-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  gap: 8px;
  justify-content: center;
}

.no-dice-text {
  font-style: italic;
  color: #777;
  margin-top: 10px;
}
h3 {
  margin: 0;
  font-size: 1.1em;
  color: #444;
}
</style>
