<!---
File Path: src/components/GameBoard.vue

Purpose:
This component renders the visual game board, including the perimeter of squares
and the player's marker. It also displays a boss image overlay when a boss
encounter is active.

Interactions:
- Parent Component: `GameView.vue`.
- Child Components: `BoardSquare.vue`.
- Store: Uses `useGameStore` for board layout (`boardSquares`, `boardRows`, `boardCols`),
  player position (`playerPosition`), game phase (`gamePhase`), and current boss data (`currentBoss`).
- Assets: Loads boss images dynamically and the static player marker image.
--->
<script setup>
import { ref, watch, computed, defineEmits } from "vue";
import { useGameStore } from "../stores/game"; // Adjust path if needed
import BoardSquare from "./BoardSquare.vue";

const props = defineProps({
  playerImageUrl: { type: String, required: true },
});

const emit = defineEmits(["attack-boss", "bribe-boss", "flee-minion"]);

const justTookDamage = ref(false);

const gameStore = useGameStore();
// Destructure reactive properties from the store
const boardSquares = computed(() => gameStore.boardSquares);
const boardRows = computed(() => gameStore.boardRows);
const boardCols = computed(() => gameStore.boardCols);
const playerPosition = computed(() => gameStore.playerPosition);
const currentBoss = computed(() => gameStore.currentBoss);
const currentBossHP = computed(() => gameStore.currentBossHP);
const currentBossMaxHP = computed(() => gameStore.currentBossMaxHP);

const currentMinionSquare = computed(() => {
  if (gameStore.gamePhase !== "minion_encounter") return null;
  return gameStore.boardSquares.find((sq) => sq.id === gameStore.playerPosition);
});

const minionImageUrl = computed(() => {
  if (currentMinionSquare.value && currentMinionSquare.value.effectDetails?.image) {
    return `${import.meta.env.BASE_URL}assets/images/minions/${
      currentMinionSquare.value.effectDetails.image
    }`;
  }
  return "";
});

watch(currentBossHP, (newVal, oldVal) => {
  if (oldVal != null && newVal < oldVal) {
    console.log(`Boss took damage. HP: ${oldVal} -> ${newVal}`);
    justTookDamage.value = true;
    setTimeout(() => {
      justTookDamage.value = false;
    }, 300);
  }
});

// --- Static Player Image Configuration (from Lucas branch) ---
// IMPORTANT: Update width and height to the actual dimensions of your knight_static.png
const STATIC_PLAYER_IMAGE_DIMENSIONS = {
  width: 40,
  height: 40,
};

// Helper function to get the 1-indexed grid row and column for a square ID
// Path: Down -> Right -> Up -> Left (starting top-left at 0)
// This function is crucial for both BoardSquare and staticPlayerMarker positioning
function getSquareGridPosition(squareId, R_val, C_val) {
  const R = R_val;
  const C = C_val;
  if (R <= 1 || C <= 1) {
    if (R === 1) return { r: 1, c: squareId + 1 };
    if (C === 1) return { r: squareId + 1, c: 1 };
    return { r: 1, c: 1 };
  }
  if (squareId >= 0 && squareId < R) {
    // Left Column
    return { r: squareId + 1, c: 1 };
  } else if (squareId >= R && squareId < R + C - 1) {
    // Bottom Row
    return { r: R, c: squareId - R + 2 };
  } else if (squareId >= R + C - 1 && squareId < R + C - 1 + R - 1) {
    // Right Column
    return { r: R - 1 - (squareId - (R + C - 1)), c: C };
  } else if (squareId >= R + C - 1 + R - 1 && squareId < boardSquares.value.length) {
    // Top Row
    return { r: 1, c: C - 1 - (squareId - (R + C - 1 + R - 1)) };
  }
  console.warn(
    "GameBoard: Could not determine grid position for squareId:",
    squareId,
    "R:",
    R,
    "C:",
    C
  );
  return { r: 1, c: 1 };
}

// Generates the inline style object for placing a BoardSquare component on the CSS Grid
// Renamed from getBoardSquareStyle to match "main" branch's likely getSquarePositionStyle
function getSquarePositionStyle(squareId, R_val, C_val) {
  const pos = getSquareGridPosition(squareId, R_val, C_val);
  return {
    gridRowStart: pos.r,
    gridColumnStart: pos.c,
  };
}

// Computed property for positioning the static player marker (from Lucas branch)
const staticPlayerMarkerStyle = computed(() => {
  if (
    !boardSquares.value ||
    boardSquares.value.length === 0 ||
    boardRows.value === 0 ||
    boardCols.value === 0
  ) {
    return { display: "none" };
  }

  const currentSquareId = playerPosition.value;
  const R_val = boardRows.value;
  const C_val = boardCols.value;

  const playerGridPos = getSquareGridPosition(currentSquareId, R_val, C_val);
  const squarePixelSize = 60; // Assumed size of each square, ensure this matches CSS

  const markerWidth = STATIC_PLAYER_IMAGE_DIMENSIONS.width;
  const markerHeight = STATIC_PLAYER_IMAGE_DIMENSIONS.height;

  const targetSquarePixelTop = (playerGridPos.r - 1) * squarePixelSize;
  const targetSquarePixelLeft = (playerGridPos.c - 1) * squarePixelSize;

  const markerOffsetY = (squarePixelSize - markerHeight) / 2;
  const markerOffsetX = (squarePixelSize - markerWidth) / 2;

  const topPosition = targetSquarePixelTop + markerOffsetY;
  const leftPosition = targetSquarePixelLeft + markerOffsetX;

  return {
    position: "absolute",
    top: `${topPosition}px`,
    left: `${leftPosition}px`,
    width: `${markerWidth}px`,
    height: `${markerHeight}px`,
    zIndex: 10,
    pointerEvents: "none",
  };
});

// Computed property for boss image URL (from main branch)
const bossImageUrl = computed(() => {
  if (currentBoss.value && currentBoss.value.image) {
    // Assuming boss images are in public/assets/images/bosses/
    // Vite serves from `public` directory at the root.
    // If images are in `src/assets`, you'd use `new URL(...)`
    return `${import.meta.env.BASE_URL}assets/images/bosses/${currentBoss.value.image}`;
  }
  return ""; // Or a placeholder boss image
});
</script>

<template>
  <div class="game-board-wrapper">
    <div
      class="game-board-perimeter"
      :style="{
        gridTemplateColumns: `repeat(${boardCols}, 60px)`,
        gridTemplateRows: `repeat(${boardRows}, 60px)`,
        width: `${boardCols * 60}px`,
        height: `${boardRows * 60}px`,
      }"
    >
      <BoardSquare
        v-for="square in boardSquares"
        :key="square.id"
        :square="square"
        :style="getSquarePositionStyle(square.id, boardRows, boardCols)"
      />
      <img
        v-if="boardSquares.length > 0"
        :src="playerImageUrl"
        alt="Player"
        class="static-player-marker"
        :style="staticPlayerMarkerStyle"
      />
    </div>

    <div v-if="gameStore.showGeneralRollAnimation" class="general-die-result">
      🎲 {{ gameStore.lastGeneralRoll }}
    </div>

    <div v-if="gameStore.gamePhase === 'boss_encounter'" class="boss-overlay-inside-board">
      <div class="boss-wrapper animated-boss">
        <h2 class="boss-name">{{ gameStore.currentBoss?.name }}</h2>
        <img v-if="bossImageUrl" :src="bossImageUrl" alt="Boss" class="boss-image" />

        <p class="boss-hp-text" :class="{ 'hp-damaged': justTookDamage }">
          ❤️ Boss HP: {{ currentBossHP }} / {{ currentBossMaxHP }}
        </p>

        <p class="boss-info-text">Use a die from your pouch to attack!</p>

        <button class="pay-boss-button" @click="emit('bribe-boss')">
          Bribe the boss ${{ gameStore.currentBoss?.bribeCost || "??" }}
        </button>

        <div v-if="gameStore.showBossRollAnimation" class="boss-die-result">
          🎲 {{ gameStore.bossLastRoll }}
        </div>
      </div>
    </div>

    <div
      v-if="gameStore.gamePhase === 'minion_encounter' && currentMinionSquare"
      class="minion-overlay"
    >
      <div class="minion-wrapper animated-boss">
        <h2 class="minion-name">Minion Encounter!</h2>
        <img v-if="minionImageUrl" :src="minionImageUrl" alt="Minion" class="minion-image" />
        <p class="minion-hp-text">❤️ HP: {{ currentMinionSquare.effectDetails.hp }}</p>
        <p class="minion-info">Use a die from your pouch to attack!</p>

        <div v-if="gameStore.showGeneralRollAnimation" class="minion-die-result">
          🎲 {{ gameStore.lastGeneralRoll }}
        </div>
        <button class="flee-button" @click="emit('flee-minion')">🏃‍♂️ Flee (Lose Money)</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-board-wrapper {
  position: relative; /* For positioning the boss overlay */
  display: inline-block; /* So it only takes the size of its content */
}

.game-board-perimeter {
  display: grid;
  grid-template-columns: repeat(var(--board-cols, 6), 60px);
  grid-template-rows: repeat(var(--board-rows, 6), 60px);
  width: calc(var(--board-cols, 6) * 60px);
  height: calc(var(--board-rows, 6) * 60px);
  border: 3px solid saddlebrown;
  position: relative; /* For static player marker positioning */
  background-color: #f0e0c0;
}

.static-player-marker {
  object-fit: contain;
  image-rendering: pixelated;
  /* zIndex and positioning are handled by inline style */
}

.boss-overlay-inside-board {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.boss-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  filter: drop-shadow(0 0 15px white);
}

.boss-image-inside {
  max-width: 60%;
  max-height: 70%;
  object-fit: contain;
  pointer-events: none;
}

.boss-counters {
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 7px; /* 👈 Añade esto */
}

@keyframes bossEntrance {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animated-boss {
  animation: bossEntrance 0.6s ease-out;
}
.boss-die-result {
  font-size: 4rem;
  font-weight: bold;
  color: rgb(190, 68, 68);
  margin-top: 10px;
  animation: pop-in 0.8s ease-out;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff;
}

.minion-die-result {
  font-size: 4rem;
  font-weight: bold;
  color: #f7e46a; /* amarillo dorado */
  margin-top: 10px;
  animation: pop-in 1s ease-out;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff;
}

@keyframes pop-in {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.boss-image {
  max-height: 60vh;
  width: auto;
  height: auto;
  max-width: 60%;
  display: block;
  margin: 0 auto;
}

.boss-hp-text {
  color: white;
  font-size: 1.1rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.pay-boss-button {
  background-color: #f3b73c;
  color: #000;
  padding: 8px 12px;
  font-size: 0.95rem;
  max-width: 240px;
  text-align: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s, box-shadow 0.2s;
  word-wrap: break-word;
  white-space: normal;
}

.pay-boss-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px #fff;
}
.boss-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 8px #000;
  margin: 0;
  max-width: 90%;
  text-align: center;
  word-wrap: break-word;
}
.general-die-result {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 4rem;
  font-weight: bold;
  color: white;
  animation: pop-in 1.2s ease-out;
  text-shadow: 0 0 5px #fff, 0 0 5px #fff;
  z-index: 30;
  pointer-events: none;
}
.hp-damaged {
  animation: flash-red 0.3s ease-in-out;
  transform: scale(1.05);
  text-shadow: 0 0 8px red;
}

.minion-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 40; /* Below boss overlay */
}
.minion-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  filter: drop-shadow(0 0 15px red);
  color: white;
  text-align: center;
}
.minion-image {
  max-width: 50%;
  max-height: 50%;
  object-fit: contain;
}
.minion-name {
  font-size: 1.2rem;
  font-weight: bold;
}
.minion-hp-text {
  font-size: 1.1rem;
}
.minion-info {
  font-size: 0.9rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
}
.flee-button {
  margin-top: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background-color: #f39c12;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}
.flee-button:hover {
  background-color: #e67e22;
}
.boss-info-text {
  color: #eee;
  font-style: italic;
  font-size: 1rem;
}
</style>
