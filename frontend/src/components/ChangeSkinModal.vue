<template>
  <div class="cs-overlay" @click.self="$emit('cancel')">
    <div class="cs-modal">
      <h2 class="cs-title">Change {{ characterName }}'s Skin</h2>

      <div class="skins-section">
        <h3 class="cs-subtitle">Choose a new color:</h3>
        <div class="skins-row">
          <button
            v-for="skin in availableSkins"
            :key="skin"
            :class="['skin-dot', { picked: skin === localSkin }]"
            :style="{ backgroundImage: `url(${heroThumbnail(gameStore.playerCharacter, skin)})` }"
            @click="localSkin = skin"
          />
        </div>
      </div>

      <div class="cs-buttons">
        <button class="cs-btn primary" @click="onConfirm">Confirm</button>
        <button class="cs-btn" @click="$emit('cancel')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useGameStore } from "@/stores/game";

const emit = defineEmits(["confirm", "cancel"]);
const gameStore = useGameStore();

const localSkin = ref(gameStore.playerSkin);

const charactersData = {
  knight: { name: "Knight", skins: ["blue", "green", "red", "black"] },
  thief: { name: "Thief", skins: ["blue", "green", "purple", "red"] },
  wizard: { name: "Wizard", skins: ["blue", "green", "purple", "red"] },
};

const characterName = computed(() => {
  return charactersData[gameStore.playerCharacter]?.name || "Character";
});

const availableSkins = computed(() => {
  return charactersData[gameStore.playerCharacter]?.skins || [];
});

function heroThumbnail(id, skin) {
  const base = import.meta.env.BASE_URL;
  return `${base}assets/images/characters/${id}/${id}_${skin}.png`;
}

function onConfirm() {
  gameStore.playerSkin = localSkin.value; // Update the store
  emit("confirm");
}
</script>

<style scoped>
/* Re-using styles from CharacterSelectorModal for consistency */
.cs-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2001; /* Higher than options modal */
}
.cs-modal {
  background: #f0f8ff;
  border: 2px solid #b0c4de;
  border-radius: 10px;
  padding: 24px 28px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.cs-title {
  margin: 0 0 12px;
  text-align: center;
  font-size: 1.2rem;
  color: #2c3e50;
}
.cs-subtitle {
  margin: 8px 0 10px;
  font-size: 1rem;
  color: #2c3e50;
  text-align: center;
}
.skins-section {
  margin-top: 12px;
}
.skins-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.skin-dot {
  width: 42px;
  height: 42px;
  border: 3px solid #b0c4de;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.1s;
}
.skin-dot:hover {
  transform: scale(1.05);
}
.skin-dot.picked {
  border-color: #28a745;
}
.cs-buttons {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 24px;
}
.cs-btn {
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #b0c4de;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
}
.cs-btn.primary {
  background: #28a745;
}
.cs-btn.primary:hover {
  background: #218838;
}
.cs-btn:hover {
  background: #97aec9;
}
</style>
