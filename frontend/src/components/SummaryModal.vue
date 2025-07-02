<script setup>
import { computed } from "vue";
import { useGameStore } from "@/stores/game";
import { useRouter } from "vue-router";

const gameStore = useGameStore();
const router = useRouter();

const isVictory = computed(() => gameStore.gamePhase === "game_won");

const stats = {
  money: gameStore.playerMoney,
  rolls: gameStore.totalRolls,
  dice: gameStore.diceObtained,
  bosses: gameStore.bossesDefeated,
  perfectBosses: gameStore.perfectBossDefeats,
  bribedBosses: gameStore.bribesBosses,
};

const endingMessage = computed(() => {
  if (!isVictory.value) {
    return "The dungeon consumes you... Better luck next time.";
  }
  // This logic is from the old implementation for victory scenarios
  const totalBosses = 5;
  if (stats.bribedBosses === totalBosses) {
    return "💰 You let money corrupt you... The power of bribery consumed you!";
  } else if (stats.bribesBosses > stats.bosses) {
    return "🤝 You preferred to negotiate rather than fight... Was that the right choice?";
  } else if (stats.bosses > stats.bribedBosses) {
    if (stats.perfectBosses > 0) {
      return "⚔️ A skilled warrior who does not fear facing their enemies.";
    } else {
      return "🗡️ You defeated your enemies with bravery, though not always with precision.";
    }
  } else if (stats.bosses === totalBosses) {
    if (stats.perfectBosses === totalBosses) {
      return "👑 LEGEND! You defeated all bosses with perfect precision. Incredible!";
    } else {
      return "🏆 A true champion! You defeated all bosses without resorting to bribes.";
    }
  }
  return "The journey has ended... But was this the best path?";
});

async function handleRestart() {
  try {
    // Uses the existing character/skin in the store to start a new game
    const newGame = await gameStore.createGame();
    if (newGame && newGame._id) {
      // Use router to navigate to the new game session URL
      await router.push({ name: "Game", params: { sessionId: newGame._id } });
      // Force a reload to ensure a clean state for the new game
      // window.location.reload();
    }
  } catch (error) {
    console.error("Failed to restart the game:", error);
  }
}

function handleMainMenu() {
  router.push({ name: "Home" });
}
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal-content" :class="{ victory: isVictory, defeat: !isVictory }">
      <h2 v-if="isVictory" class="title-victory">YOU WIN!</h2>
      <h2 v-else class="title-defeat">GAME OVER</h2>

      <ul class="summary-list">
        <li>💰 Money collected: ${{ stats.money }}</li>
        <li>🎲 Dice rolled: {{ stats.rolls }}</li>
        <li>🎁 Dice obtained: {{ stats.dice }}</li>
        <li>⚔️ Bosses defeated: {{ stats.bosses }}</li>
        <li>✨ Perfect defeats: {{ stats.perfectBosses }}</li>
        <li>💸 Bosses bribed: {{ stats.bribedBosses }}</li>
      </ul>

      <p class="ending-message">{{ endingMessage }}</p>

      <div class="button-group">
        <button v-if="isVictory" class="btn primary" @click="handleRestart">New Run</button>
        <button v-else class="btn primary" @click="handleRestart">Try Again</button>
        <button class="btn secondary" @click="handleMainMenu">Main Menu</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #2c3e50;
  color: #ecf0f1;
  border-radius: 12px;
  padding: 25px 30px;
  text-align: center;
  width: 90%;
  max-width: 380px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  border: 3px solid;
}

.modal-content.victory {
  border-color: #f1c40f;
  box-shadow: 0 0 30px #f1c40f;
}
.modal-content.defeat {
  border-color: #c0392b;
  box-shadow: 0 0 30px #c0392b;
}

.title-victory,
.title-defeat {
  margin: 0 0 15px;
  font-family: "Press Start 2P", monospace;
  font-size: 2rem;
  text-shadow: 3px 3px 0px #000;
}
.title-victory {
  color: #f1c40f;
}
.title-defeat {
  color: #e74c3c;
}

.summary-list {
  list-style-type: none;
  padding-left: 0;
  margin: 20px 0;
}

.summary-list li {
  margin-bottom: 10px;
  text-align: left;
  font-size: 1rem;
}

.ending-message {
  margin: 20px 0;
  font-style: italic;
  color: #bdc3c7;
  padding: 10px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 25px;
}

.btn {
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.2s;
}

.btn.primary {
  background-color: #27ae60;
  color: white;
  border-bottom: 4px solid #229954;
}
.btn.primary:hover {
  background-color: #2ecc71;
  transform: translateY(-2px);
  border-bottom-width: 6px;
}

.btn.secondary {
  background-color: #7f8c8d;
  color: white;
  border-bottom: 4px solid #616a6b;
}
.btn.secondary:hover {
  background-color: #95a5a6;
  transform: translateY(-2px);
  border-bottom-width: 6px;
}
</style>
