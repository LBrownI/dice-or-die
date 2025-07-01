<script setup>
import { useGameStore } from "@/stores/game";

const gameStore = useGameStore();

const money = gameStore.playerMoney;
const rolls = gameStore.totalRolls;
const dice = gameStore.diceObtained;
const bosses = gameStore.bossesDefeated;
const perfectBosses = gameStore.perfectBossDefeats;
const bribedBosses = gameStore.bribesBosses;
const totalBosses = 5; // Hardcoded for now, could be moved to a constant

function getEnding() {
  if (bribedBosses === totalBosses) {
    return "💰 You let money corrupt you... The power of bribery consumed you!";
  } else if (bribedBosses > bosses) {
    return "🤝 You preferred to negotiate rather than fight... Was that the right choice?";
  } else if (bosses > bribedBosses) {
    if (perfectBosses > 0) {
      return "⚔️ A skilled warrior who does not fear facing their enemies.";
    } else {
      return "🗡️ You defeated your enemies with bravery, though not always with precision.";
    }
  } else if (bosses === totalBosses) {
    if (perfectBosses === totalBosses) {
      return "👑 LEGEND! You defeated all bosses with perfect precision. Incredible!";
    } else {
      return "🏆 A true champion! You defeated all bosses without resorting to bribes.";
    }
  }
  return "🎮 The journey has ended... But was this the best path?";
}

function restartGame() {
  // This will be implemented when we add the reset endpoint
  console.log("Restart game requested");
  window.location.href = "/";
}
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal-content">
      <h2>🏁 Game Summary</h2>
      <ul class="summary-list">
        <li>💰 Money collected: ${{ money }}</li>
        <li>🎲 Dice rolled: {{ rolls }}</li>
        <li>🎁 Dice obtained: {{ dice }}</li>
        <li>⚔️ Bosses defeated: {{ bosses }}</li>
        <li>✨ Perfect defeats: {{ perfectBosses }}</li>
        <li>💸 Bosses bribed: {{ bribedBosses }}</li>
      </ul>
      <p class="ending-message">{{ getEnding() }}</p>
      <button @click="restartGame">Restart Game</button>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  width: 300px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.summary-list {
  list-style-type: none; /* Removes the bullet points */
  padding-left: 0; /* Removes default left padding for lists */
  margin-top: 15px; /* Optional: add some space above the list */
  margin-bottom: 15px; /* Optional: add some space below the list */
}

.summary-list li {
  margin-bottom: 8px; /* Optional: adds space between list items */
  text-align: center; /* Optional: if you want items aligned to the left within the centered modal content */
  /* Remove or adjust if you prefer them centered like the rest of .modal-content */
}

.ending-message {
  margin: 20px 0;
  font-style: italic;
  color: #2c3e50;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05);
}

button {
  background-color: #28a745;
  color: white;
  padding: 10px 18px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
</style>
