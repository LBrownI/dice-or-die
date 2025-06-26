<script setup>
import { ref, onMounted, computed } from "vue";
import { useGameStore } from "../stores/game";
import GameBoard from "../components/GameBoard.vue";
import GameInfo from "../components/GameInfo.vue";
import ReservedDiceDisplay from "../components/ReservedDiceDisplay.vue";
import CharacterSelectorModal from "../components/CharacterSelectorModal.vue";
import ChoiceModal from "../components/ChoiceModal.vue";
import SummaryModal from "@/components/SummaryModal.vue";

const gameStore = useGameStore();

// Reactive state
const showCharacterMenu = ref(false);
const selectedCharacter = ref(gameStore.playerCharacter);
const selectedSkin      = ref(gameStore.playerSkin);

// Define tus personajes y skins
const characters = [
  { id: "knight", name: "Caballero", skins: ["blue","red","green","black"] },
  { id: "wizard", name: "Hechicero", skins: ["blue","red","green","purple"] },
  { id: "rogue",  name: "Pícaro",    skins: ["blue","red","green","purple"] },
];

// Computed para armar la URL de la imagen
const characterImageUrl = computed(() => {
  const id   = selectedCharacter.value;
  const skin = selectedSkin.value;
  return new URL(
    `/assets/images/characters/${id}/${id}_${skin}.png`,
    import.meta.url
  ).href;
});

// Computed para mostrar nombre actual
const currentCharacterName = computed(() => {
  const c = characters.find(c => c.id === gameStore.playerCharacter);
  return c ? c.name : "";
});

// Computed para deshabilitar “Lanzar dado”
const isRollDisabled = computed(() => {
  return (
    gameStore.isGameOver ||
    gameStore.isAnimating ||
    (gameStore.gamePhase !== "boss_encounter" && gameStore.gamePhase !== "rolling") ||
    (gameStore.gamePhase === "boss_encounter" && gameStore.remainingBossRolls <= 0) ||
    !gameStore.assetsLoaded
  );
});

// Velocidad de juego
const currentSpeedText = computed(() => {
  switch (gameStore.animationSpeedMultiplier) {
    case 0: return "Instant";
    case 1: return "Normal";
    case 2: return "Faster";
    default: return "Unknown";
  }
});

// Preload de imágenes (dados, jefes, etc.)
const imagePathsToPreload = [
  // ... tus rutas aquí ...
];

function preloadImages(paths) {
  paths.forEach((p) => {
    const img = new Image();
    img.src = p;
  });
}

onMounted(() => {
  preloadImages(imagePathsToPreload);
});

// Manejo de acciones
function toggleCharacterMenu() {
  if (!gameStore.characterLocked) {
    showCharacterMenu.value = !showCharacterMenu.value;
  }
}

function confirmCharacterSelection() {
  gameStore.setPlayerCharacter({
    character: selectedCharacter.value,
    skin:      selectedSkin.value,
  });
  showCharacterMenu.value = false;
  gameStore.initializeGame();
}

function handleRollNormalDice() {
  gameStore.rollDice();
}

function handleChoice(option) {
  gameStore.playerMakesChoice(option);
}

function handleToggleSpeed() {
  gameStore.toggleAnimationSpeed();
}

// Estado y fases de juego
const isGameOver    = computed(() => gameStore.isGameOver);
const gamePhase     = computed(() => gameStore.gamePhase);
const choiceDetails = computed(() => gameStore.choiceDetails);
</script>

<template>
  <div class="game-view-container">
    <div class="main-game-area">
      
      <!-- PANEL IZQUIERDO -->
      <div class="left-panel-area">
        <div class="player-display-area">
          
          <!-- Botón para cambiar personaje (solo si no está bloqueado) -->
          <button
            v-if="!gameStore.characterLocked"
            class="change-character-button"
            @click="toggleCharacterMenu"
          >
            Cambiar personaje
          </button>

          <!-- Avatar y nombre siempre visibles -->
          <img
            :src="characterImageUrl"
            alt="Player Avatar"
            class="large-static-player-image"
          />
          <h3 class="player-name">
            {{ currentCharacterName }}
          </h3>
        </div>

        <!-- Panel de información -->
        <GameInfo class="game-info-content" />
      </div> <!-- ← cierre left-panel-area -->


      <!-- TABLERO -->
      <div class="game-board-container">
        <GameBoard class="game-board-component" />
      </div>


      <!-- PANEL DERECHO: dados y botones -->
      <div class="right-action-panel">
        <ReservedDiceDisplay class="dice-reserve-component" />

        <div class="action-buttons-group">
          <!-- Botón “Lanzar dado” -->
          <div class="normal-roll-button-container">
            <button
              @click="handleRollNormalDice"
              :disabled="isRollDisabled"
              class="roll-button"
            >
              Lanzar dado
            </button>
          </div>
          <!-- Botón de velocidad -->
          <div class="speed-control-container">
            <button @click="handleToggleSpeed" class="speed-button">
              Velocidad de juego: {{ currentSpeedText }}
            </button>
          </div>
        </div>
      </div> <!-- ← cierre right-action-panel -->

    </div> <!-- ← cierre main-game-area -->


    <!-- Modales de flujo de juego -->
    <ChoiceModal
      v-if="gamePhase === 'awaiting_choice' && choiceDetails"
      :details="choiceDetails"
      @player-choice="handleChoice"
    />
    <SummaryModal v-if="gameStore.showSummaryModal" />

    <!-- Nuestro modal de selección de personaje -->
    <CharacterSelectorModal
      v-if="showCharacterMenu"
      :characters="characters"
      :modelValueCharacter="selectedCharacter"
      :modelValueSkin="selectedSkin"
      @update:character="selectedCharacter = $event"
      @update:skin="selectedSkin = $event"
      @confirm="confirmCharacterSelection"
      @cancel="showCharacterMenu = false"
    />
  </div> <!-- ← cierre game-view-container -->
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

.change-character-button {
  margin-bottom: 8px;
  padding: 6px 12px;
  font-size: 0.9em;
}
.character-selector-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.character-selector-modal {
  background: white;
  padding: 20px;
  border-radius: 6px;
  width: 300px;
}
.character-selector-modal ul {
  list-style: none;
  padding: 0;
}
.character-selector-modal li {
  margin: 6px 0;
}
.character-selector-modal .buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
}
</style>
