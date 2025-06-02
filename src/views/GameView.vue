<script setup>
import { onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "../stores/game"; // Adjust path if store is elsewhere
import GameBoard from "../components/GameBoard.vue";
import GameInfo from "../components/GameInfo.vue";
import ReservedDiceDisplay from "../components/ReservedDiceDisplay.vue";
import ChoiceModal from "../components/ChoiceModal.vue";
import SummaryModal from "@/components/SummaryModal.vue";

const imagePathsToPreload = [
  // Dados Normales
  `${import.meta.env.BASE_URL}assets/images/dice/die_d6.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_1.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_2.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_3.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_4.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_5.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_6.png`,

  // Dados Especiales
  `${import.meta.env.BASE_URL}assets/images/dice/die_d20.png`,

  // Dados Reversa
  `${import.meta.env.BASE_URL}assets/images/dice/die_d6_reverse.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_reverse_1.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_reverse_2.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_reverse_3.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_reverse_4.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_reverse_5.png`,
  `${import.meta.env.BASE_URL}assets/images/dice/die_fixed_reverse_6.png`,

  // Jefes
  `${import.meta.env.BASE_URL}assets/images/bosses/dark_godcat.webp`,
  `${import.meta.env.BASE_URL}assets/images/bosses/dragon_treasurer.png`,
  `${import.meta.env.BASE_URL}assets/images/bosses/goblin_general.png`,
  `${import.meta.env.BASE_URL}assets/images/bosses/greedy_goblin_king.webp`,
  `${import.meta.env.BASE_URL}assets/images/bosses/orc_general.png`,
  `${import.meta.env.BASE_URL}assets/images/bosses/tax_collector.png`,
];

function preloadImages(imagePaths) {
  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
  });
}

const gameStore = useGameStore();
const { isGameOver, gamePhase, choiceDetails } = storeToRefs(gameStore);

// URL for the static player image in the display panel
const staticPlayerDisplayImageUrl = new URL(
  "/assets/images/sprites/knight_static.png",
  import.meta.url
).href;

onMounted(() => {
  preloadImages(imagePathsToPreload);
  gameStore.initializeGame();
});

function handleRollNormalDice() {
  if (
    (gameStore.gamePhase === "rolling" || gameStore.gamePhase === "boss_encounter") &&
    !gameStore.isGameOver &&
    gameStore.assetsLoaded
  ) {
    gameStore.rollDice();
  }
}

function handleChoice(option) {
  gameStore.playerMakesChoice(option);
}

const currentSpeedText = computed(() => {
  switch (gameStore.animationSpeedMultiplier) {
    case 0:
      return "Instant";
    case 1:
      return "Normal";
    case 2:
      return "Faster";
    default:
      return "Unknown";
  }
});

function handleToggleSpeed() {
  gameStore.toggleAnimationSpeed();
}
</script>

<template>
  <div class="game-view-container">
    <div class="main-game-area">
      <div class="left-panel-area">
        <div class="player-display-area">
          <img
            :src="staticPlayerDisplayImageUrl"
            alt="Player Knight"
            class="large-static-player-image"
          />
          <h3 class="player-name">El Caballero</h3>
        </div>
        <GameInfo class="game-info-content" />
      </div>

      <div class="game-board-container">
        <GameBoard class="game-board-component" />
      </div>

      <div class="right-action-panel">
        <ReservedDiceDisplay class="dice-reserve-component" />
        <div class="action-buttons-group">
          <div class="normal-roll-button-container">
            <button
              @click="handleRollNormalDice"
              :disabled="
                isGameOver ||
                gameStore.isAnimating ||
                (gamePhase !== 'boss_encounter' && gamePhase !== 'rolling') ||
                (gamePhase === 'boss_encounter' && gameStore.remainingBossRolls <= 0)
              "
              class="roll-button"
            >
              Lanzar dado
            </button>
          </div>
          <div class="speed-control-container">
            <button @click="handleToggleSpeed" class="speed-button">
              Velocidad de juego: {{ currentSpeedText }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <ChoiceModal
      v-if="gamePhase === 'awaiting_choice' && choiceDetails"
      :details="choiceDetails"
      @player-choice="handleChoice"
    />
    <SummaryModal v-if="gameStore.showSummaryModal" />
  </div>
</template>

<style scoped>
.game-view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 60px;
}

.main-game-area {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1250px;
}

.left-panel-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 260px;
  min-width: 230px;
}

.player-display-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #b0c4de;
  background-color: #e6eef7;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
}

/* New styles for the large static player image */
.large-static-player-image {
  width: 160px; /* Example "big" size, adjust as needed */
  height: 152px; /* Example "big" size, adjust for aspect ratio if not square */
  object-fit: contain; /* Or 'cover', depending on image and desired look */
  image-rendering: pixelated; /* Good for pixel art if it is */
  margin-bottom: 10px;
  border: 2px solid #778899; /* Light slate gray border */
  border-radius: 4px;
  background-color: #ffffff; /* White background if image has transparency */
}

.player-name {
  font-size: 1.2em;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 5px;
  margin-bottom: 0; /* Removed bottom margin for tighter look */
}

.game-info-content {
  padding: 15px;
  border: 1px solid #b0c4de;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
}

.game-board-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.right-action-panel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 15px;
  min-width: 170px;
  max-width: 200px;
}

.dice-reserve-component {
  width: 100%;
}

.action-buttons-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.normal-roll-button-container,
.speed-control-container {
  width: 100%;
}

.roll-button,
.speed-button {
  width: 100%;
  padding: 10px 10px;
  font-size: 0.9em;
  font-weight: bold;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.roll-button {
  background-color: #28a745;
}
.roll-button:hover:not(:disabled) {
  background-color: #218838;
  transform: translateY(-1px);
}

.speed-button {
  background-color: #007bff;
}
.speed-button:hover {
  background-color: #0056b3;
  transform: translateY(-1px);
}

.roll-button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
