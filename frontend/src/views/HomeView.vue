// src/views/HomeView.vue
<script setup>
import { useRouter } from "vue-router";
import { useGameStore } from "../stores/game";
import { useAuthStore } from "../stores/auth";
import { ref, onMounted, onUnmounted, computed } from "vue";
import D20Die3D from "../components/D20Die3D.vue";
import CharacterSelectorModal from "../components/CharacterSelectorModal.vue";
import OptionsModal from "../components/OptionsModal.vue";
import ProfileModal from "../components/ProfileModal.vue";
import CollectionModal from "../components/CollectionModal.vue";

const router = useRouter();
const gameStore = useGameStore();
const authStore = useAuthStore();
const mainMenuAudio = ref(null);
const showCharacterSelector = ref(false);
const showOptionsMenu = ref(false);
const showProfileModal = ref(false);
const showCollectionModal = ref(false);

const characters = [
  { id: "knight", name: "Knight", skins: ["blue", "green", "red", "black"] },
  { id: "thief", name: "Thief", skins: ["blue", "green", "purple", "red"] },
  { id: "wizard", name: "Wizard", skins: ["blue", "green", "purple", "red"] },
];

const profileButtonText = computed(() => {
  return authStore.isAuthenticated && authStore.currentUser
    ? authStore.currentUser.username
    : "[None]";
});

async function handleCharacterSelection() {
  // Hide the modal first
  showCharacterSelector.value = false;
  try {
    // The v-model on the selector has already updated the store's character/skin
    const newGame = await gameStore.createGame(); // The store now knows the selected character
    if (newGame && newGame._id) {
      if (mainMenuAudio.value) mainMenuAudio.value.pause();
      router.push({ name: "Game", params: { sessionId: newGame._id } });
    }
  } catch (error) {
    console.error("Could not start a new game after character selection:", error);
  }
}

onMounted(() => {
  if (mainMenuAudio.value) {
    mainMenuAudio.value.volume = 0.7;
    mainMenuAudio.value.play().catch(() => {});
  }
});

onUnmounted(() => {
  if (mainMenuAudio.value) mainMenuAudio.value.pause();
});
</script>

<template>
  <div class="main-menu-bg">
    <div class="main-menu-container">
      <div class="main-menu-header">
        <D20Die3D class="d20-side" />
        <h1 class="main-menu-title"><span>DICE OR </span><span class="red-die">DIE</span></h1>
      </div>
      <div class="main-menu-buttons-grid">
        <div class="main-buttons">
          <button class="menu-btn play-btn" @click="showCharacterSelector = true">PLAY</button>
        </div>
        <div class="side-buttons">
          <button class="menu-btn profile-btn" @click="showProfileModal = true">Profile</button>
          <button class="menu-btn options-btn" @click="showOptionsMenu = true">Options</button>
          <button
            class="menu-btn collection-btn"
            :disabled="!authStore.isAuthenticated"
            @click="showCollectionModal = true"
          >
            Collection
          </button>
        </div>
        <div class="profile-status-display" @click="showProfileModal = true">
          {{ profileButtonText }}
        </div>
      </div>
      <!-- Hidden audio for soundtrack, only wav -->
      <audio ref="mainMenuAudio" autoplay loop hidden>
        <source src="/assets/soundtrack/main_menu.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>

    <!-- Character Selector Modal -->
    <CharacterSelectorModal
      v-if="showCharacterSelector"
      v-model:character="gameStore.playerCharacter"
      v-model:skin="gameStore.playerSkin"
      :characters="characters"
      @confirm="handleCharacterSelection"
      @cancel="showCharacterSelector = false"
    />

    <!-- Profile Modal -->
    <ProfileModal v-if="showProfileModal" @close="showProfileModal = false" />

    <!-- Options Modal for Main Menu -->
    <OptionsModal v-if="showOptionsMenu" context="main-menu" @close="showOptionsMenu = false" />

    <!-- Collection Modal -->
    <CollectionModal v-if="showCollectionModal" @close="showCollectionModal = false" />
  </div>
</template>

<style scoped>
.main-menu-bg {
  min-height: 100vh;
  width: 100vw;
  background: radial-gradient(circle at 60% 40%, #2e2e4d 0%, #b02a2a 100%);
  /* Swirl effect: animated SVG or canvas could be added for more Balatro feel */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.main-menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(30, 30, 40, 0.92);
  border-radius: 18px;
  box-shadow: 0 0 40px #000a, 0 0 0 4px #fff2 inset;
  padding: 48px 36px 36px 36px;
  min-width: 500px;
  max-width: 95vw;
}
.main-menu-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
}
.d20-side {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}
.main-menu-title {
  font-family: "Press Start 2P", "VT323", "Segoe UI", monospace;
  font-size: 2.6rem;
  color: #fff;
  letter-spacing: 0.12em;
  text-shadow: 0 0 8px #000, 0 2px 0 #b02a2a, 0 0 24px #fff8;
  filter: contrast(1.2) brightness(1.1);
  display: block;
  text-align: center;
  margin: 0;
}
.main-menu-title .red-die {
  color: #e74c3c;
  text-shadow: 0 0 8px #000, 0 2px 0 #b02a2a, 0 0 24px #e74c3c;
}
.main-menu-buttons-grid {
  display: grid;
  grid-template-areas:
    "main side"
    "status status";
  grid-template-columns: 2fr 1fr;
  gap: 12px;
  width: 100%;
  align-items: center;
}
.main-buttons {
  grid-area: main;
  display: flex;
  justify-content: center;
}
.side-buttons {
  grid-area: side;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.profile-status-display {
  grid-area: status;
  text-align: center;
  color: #fff;
  background: #0003;
  padding: 8px;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;
}
.menu-btn {
  font-family: "Press Start 2P", "VT323", "Segoe UI", monospace;
  font-size: 0.9rem;
  padding: 10px 0;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: #222a;
  color: #fff;
  box-shadow: 0 2px 8px #0008;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
  outline: 2px solid #fff2;
  text-shadow: 0 1px 0 #000, 0 0 8px #fff8;
}
.menu-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.play-btn {
  font-size: 2rem;
  padding: 20px 0;
  font-weight: bold;
  background: linear-gradient(90deg, #f7b42c 0%, #fc575e 100%);
  color: #fff;
  box-shadow: 0 4px 24px #fc575e88, 0 0 0 4px #fff4 inset;
  text-shadow: 0 2px 0 #b02a2a, 0 0 16px #fff8;
  letter-spacing: 0.08em;
  transform: scale(1.02);
}
.play-btn:hover {
  background: linear-gradient(90deg, #fc575e 0%, #f7b42c 100%);
  transform: scale(1.05);
}
.menu-btn:not(.play-btn):not(:disabled):hover {
  background: #fff2;
  color: #fc575e;
  transform: scale(1.03);
}
</style>
