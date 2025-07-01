<script setup>
import { ref, onMounted, computed, watch, onUnmounted } from "vue";
import { useGameStore } from "../stores/game";
import { useRoute, useRouter } from "vue-router";
import GameBoard from "../components/GameBoard.vue";
import ReservedDiceDisplay from "../components/ReservedDiceDisplay.vue";
import ChoiceModal from "../components/ChoiceModal.vue";
import SummaryModal from "@/components/SummaryModal.vue";
import CharacterSelectorModal from "../components/CharacterSelectorModal.vue";
import OptionsModal from "../components/OptionsModal.vue";
import ChangeSkinModal from "../components/ChangeSkinModal.vue";
import SkillButton from "../components/SkillButton.vue";

const gameStore = useGameStore();
const route = useRoute();
const router = useRouter();
const showCharacterSelector = ref(false);
const showOptionsModal = ref(false);
const showSkinChangerModal = ref(false);
const audioPlayer = ref(null);

const characters = [
  { id: "knight", name: "Knight", skins: ["blue", "green", "red", "black"] },
  { id: "thief", name: "Thief", skins: ["blue", "green", "purple", "red"] },
  { id: "wizard", name: "Wizard", skins: ["blue", "green", "purple", "red"] },
];

console.log("GameStore instance:", gameStore);

const isGameOver = computed(() => gameStore.isGameOver);
const gamePhase = computed(() => gameStore.gamePhase);
const choiceDetails = computed(() => gameStore.choiceDetails);

const currentMusicTrack = computed(() => {
  const base = import.meta.env.BASE_URL;
  const soundPath = `${base}assets/soundtrack/`;

  if (gameStore.gamePhase === "game_won") {
    return { src: `${soundPath}Fanfare.wav`, loop: false };
  }
  if (gameStore.isGameOver) {
    return { src: `${soundPath}game_over.wav`, loop: false };
  }
  if (gameStore.playerStage === 5) {
    return { src: `${soundPath}Motivational.wav`, loop: true };
  }
  if (gameStore.playerStage > 0) {
    // any active stage
    return { src: `${soundPath}Eardeer.wav`, loop: true };
  }

  return null; // No music if no state matches
});

watch(
  currentMusicTrack,
  (newTrack) => {
    if (!audioPlayer.value) return;

    // To prevent reloading the same track, we can check the base filename
    const newSrcFilename = newTrack ? newTrack.src.split("/").pop() : null;
    const currentSrcFilename = audioPlayer.value.src
      ? audioPlayer.value.src.split("/").pop()
      : null;

    // Only change source if it's different, or if we need to replay a non-looping track
    if (newSrcFilename !== currentSrcFilename || (newTrack && !newTrack.loop)) {
      if (newTrack) {
        audioPlayer.value.src = newTrack.src;
        audioPlayer.value.loop = newTrack.loop;
        audioPlayer.value.play().catch((e) => console.warn("Audio playback failed.", e));
      } else {
        audioPlayer.value.pause();
      }
    }
  },
  { immediate: true }
);

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

const dynamicPlayerImage = computed(() => {
  const base = import.meta.env.BASE_URL; // normalmente "/"
  const character = gameStore.playerCharacter; // "knight", "thief", "wizard"
  const skin = gameStore.playerSkin; // "blue", "green", …
  // ► incluye la subcarpeta del personaje
  return `${base}assets/images/characters/${character}/${character}_${skin}.png`;
});

function getCharacterDisplayName(id) {
  switch (id) {
    case "knight":
      return "Knight";
    case "thief":
      return "Thief";
    case "wizard":
      return "Wizard";
    default:
      return "Character";
  }
}

const bossImageUrl = computed(() => {
  if (gameStore.currentBoss && gameStore.currentBoss.image) {
    return `${import.meta.env.BASE_URL}assets/images/bosses/${gameStore.currentBoss.image}`;
  }
  return ""; // Return empty string or a placeholder if no boss image
});

const showGlobalDim = computed(() =>
  ["boss_encounter", "minion_encounter"].includes(gameStore.gamePhase)
);

watch(
  () => route.params.sessionId,
  async (newSessionId) => {
    if (newSessionId) {
      await gameStore.loadGame(newSessionId);
      console.log(">>> Estado del juego cargado:", gameStore);
    } else {
      console.error("No game session ID found in the URL.");
    }
  },
  { immediate: true }
);

onMounted(async () => {
  preloadImages(imagePathsToPreload);
  // Set assetsLoaded to true after preloading images
  gameStore.assetsLoaded = true;
});

onUnmounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.pause();
    audioPlayer.value.src = "";
  }
});

function handleChoice(option) {
  gameStore.playerMakesChoice(option);
}

function handleToggleSpeed() {
  gameStore.toggleAnimationSpeed();
}

function payBribe() {
  gameStore.payBossBribe();
}

async function handleNewRun() {
  showOptionsModal.value = false;
  try {
    const newGame = await gameStore.createGame();
    if (newGame && newGame._id) {
      router.push({ name: "Game", params: { sessionId: newGame._id } });
      // We might need to force a reload or ensure the component re-initializes
      // window.location.reload();
    }
  } catch (error) {
    console.error("Failed to start a new run:", error);
  }
}

function handleMainMenu() {
  showOptionsModal.value = false;
  router.push({ name: "Home" });
}

function handleSkillToggle(isActive) {
  gameStore.toggleSkill(isActive);
}

function handleSkillUse() {
  // Only for Thief for now
  gameStore.useSkill();
}

function openSkinChanger() {
  showOptionsModal.value = false; // Close options modal
  showSkinChangerModal.value = true;
}
</script>

<template>
  <div class="game-view-container">
    <audio ref="audioPlayer" style="display: none"></audio>
    <template v-if="gameStore.boardIsReady">
      <div class="main-game-area">
        <div class="left-panel-area">
          <div class="player-display-area">
            <img
              :src="dynamicPlayerImage"
              :alt="`Character: ${gameStore.playerCharacter}`"
              class="large-static-player-image"
            />
            <h3 class="player-name">
              {{ getCharacterDisplayName(gameStore.playerCharacter) }}
            </h3>
            <SkillButton
              :character="gameStore.playerCharacter"
              :skillState="gameStore.skillState"
              :gamePhase="gamePhase"
              @toggle="handleSkillToggle"
              @use="handleSkillUse"
            />
          </div>
          <div class="game-info-content">
            <p class="stage-info">Stage: {{ gameStore.playerStage }} / 5</p>
            <div class="turn-pos-info">
              <span>↩️ Turn: {{ gameStore.totalRolls }}</span>
              <span>Pos: {{ gameStore.playerPosition }}</span>
            </div>
            <p class="money-info">🪙 Money: ${{ gameStore.playerMoney }}</p>
            <p v-if="gameStore.gameMessage" class="game-feedback">{{ gameStore.gameMessage }}</p>
            <p v-else class="game-feedback">Lap {{ gameStore.playerLap }}/3. Roll a die!</p>
          </div>

          <div class="side-action-buttons">
            <button class="side-btn" disabled>Run Info</button>
            <button class="side-btn" @click="showOptionsModal = true">Options</button>
          </div>
        </div>
        <div class="game-board-container">
          <GameBoard
            :player-image-url="dynamicPlayerImage"
            class="game-board-component"
            @attack-boss="gameStore.rollDice(-1)"
            @bribe-boss="payBribe"
            @flee-minion="gameStore.fleeMinion"
          />
        </div>

        <div class="right-action-panel">
          <ReservedDiceDisplay class="dice-reserve-component" />
        </div>
              <div v-if="showGlobalDim" class="global-dim-overlay"></div>
      </div>

      <CharacterSelectorModal
        v-if="showCharacterSelector"
        v-model:character="gameStore.playerCharacter"
        v-model:skin="gameStore.playerSkin"
        :characters="characters"
        @confirm="showCharacterSelector = false"
        @cancel="showCharacterSelector = false"
      />
      <OptionsModal
        v-if="showOptionsModal"
        @close="showOptionsModal = false"
        @new-run="handleNewRun"
        @main-menu="handleMainMenu"
        @change-skin="openSkinChanger"
      />
      <ChangeSkinModal
        v-if="showSkinChangerModal"
        @confirm="showSkinChangerModal = false"
        @cancel="showSkinChangerModal = false"
      />
      <transition name="choice-pop">
        <ChoiceModal
          v-if="choiceDetails"
          :details="choiceDetails"
          @player-choice="handleChoice"
        />
      </transition>
      <SummaryModal v-if="gameStore.showSummaryModal" />
    </template>
    <div v-else class="loading-message">Loading game...</div>
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
  max-width: 1400px;
}

.left-panel-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 260px;
  min-width: 230px;
  position: relative;
}

.player-display-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #b0c4de;
  background-color: #e6eef7;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
  z-index: 101;
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
  margin-bottom: 10px; /* Add space for skill button */
}

.game-info-content {
  padding: 15px;
  border: 1px solid #b0c4de;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 101;
}

.stage-info,
.money-info,
.game-feedback {
  margin: 0;
  text-align: center;
}
.stage-info {
  font-weight: bold;
  font-size: 1.1em;
}
.turn-pos-info {
  display: flex;
  justify-content: space-around;
  font-size: 0.9em;
}
.game-feedback {
  font-style: italic;
  font-size: 0.9em;
  min-height: 2.7em; /* Reserve space for 3 lines of text */
  color: #333;
}
.money-info {
  font-size: 1.2em;
  font-weight: bold;
}

.game-board-container {
  display: flex;
  justify-content: center;
}

.right-action-panel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 15px;
  min-width: 280px;
  max-width: 280px;
}

.dice-reserve-component {
  width: 100%;
  position: relative;
  z-index: 101;
}

.side-action-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
.side-btn {
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid #999;
}
.side-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.action-buttons-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 80px; /* Add min-height to prevent layout shift */
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

.loading-message {
  font-size: 1.5em;
  color: #555;
  text-align: center;
  margin-top: 100px;
}

.player-display-area {
  position: relative;
}

.boss-encounter-panel {
  padding: 15px;
  border: 2px solid #c0392b; /* Red border for danger */
  background-color: #2c3e50; /* Dark background */
  color: white;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.boss-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 10px auto;
  border-radius: 50%;
  border: 2px solid #ecf0f1;
}

.boss-name {
  font-weight: bold;
  font-size: 1.1em;
  margin-bottom: 5px;
}

.boss-hp,
.boss-rolls {
  font-size: 0.9em;
  margin-bottom: 10px;
}

.boss-attack-btn {
  background-color: #e74c3c;
}
.boss-attack-btn:hover {
  background-color: #c0392b;
}

.bribe-button {
  width: 100%;
  padding: 10px;
  font-size: 0.8em;
  font-weight: bold;
  cursor: pointer;
  color: #2c3e50;
  background-color: #f1c40f; /* Gold color */
  border: none;
  border-radius: 5px;
  margin-top: 5px;
}
.bribe-button:hover {
  background-color: #f39c12;
}

.global-dim-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 30;          /* ⬅️ por debajo de minion (40) y boss (50)   */
  pointer-events: none; /* no intercepta clics */
}

/* ---------- ChoiceModal fade-in / pop-in ---------- */
.choice-pop-enter-active,
.choice-pop-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.choice-pop-enter-from,
.choice-pop-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.choice-pop-enter-to,
.choice-pop-leave-from {
  opacity: 1;
  transform: scale(1);
}

</style>
