<template>
  <div class="cs-overlay" @click.self="$emit('cancel')">
    <div class="cs-modal">
      <!-- Step 1: Choose hero -->
      <h2 class="cs-title">Choose Your Hero</h2>

      <div class="hero-grid">
        <div
          v-for="c in characters"
          :key="c.id"
          :class="['hero-card', { selected: c.id === localCharacter }]"
          @click="selectHero(c.id)"
        >
          <img :src="heroThumbnail(c.id)" :alt="c.name" class="hero-thumb" />
          <span class="hero-name">{{ c.name }}</span>
        </div>
      </div>

      <!-- Step 2: Choose color -->
      <transition name="fade">
        <div v-if="localCharacter" class="skins-section">
          <h3 class="cs-subtitle">Choose Color</h3>
          <div class="skins-row">
            <button
              v-for="skin in currentSkins"
              :key="skin"
              :class="['skin-dot', { picked: skin === localSkin }]"
              :style="{ backgroundImage: `url(${heroThumbnail(localCharacter, skin)})` }"
              @click="localSkin = skin"
            />
          </div>
        </div>
      </transition>

      <!-- Actions -->
      <div class="cs-buttons">
        <button class="cs-btn primary" @click="onConfirm">Confirm</button>
        <button class="cs-btn" @click="$emit('cancel')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  modelValueCharacter: String,
  modelValueSkin: String,
  characters: Array,
});
const emit = defineEmits(["update:character", "update:skin", "confirm", "cancel"]);

const localCharacter = ref(props.modelValueCharacter);
const localSkin = ref(props.modelValueSkin);

watch(
  () => props.modelValueCharacter,
  (v) => (localCharacter.value = v)
);
watch(
  () => props.modelValueSkin,
  (v) => (localSkin.value = v)
);

const currentSkins = computed(() => {
  const hero = props.characters.find((c) => c.id === localCharacter.value);
  return hero ? hero.skins : [];
});

function selectHero(id) {
  localCharacter.value = id;
  // Si el skin seleccionado no existe en el nuevo héroe, resetea al primero
  if (!currentSkins.value.includes(localSkin.value)) {
    localSkin.value = currentSkins.value[0];
  }
}

function heroThumbnail(id, skin = "blue") {
  const base = import.meta.env.BASE_URL;
  return `${base}assets/images/characters/${id}/${id}_${skin}.png`;
}

function onConfirm() {
  emit("update:character", localCharacter.value);
  emit("update:skin", localSkin.value);
  emit("confirm");
}
</script>

<style scoped>
/* Estructura general */
.cs-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.cs-modal {
  background: #f0f8ff;
  border: 2px solid #b0c4de;
  border-radius: 10px;
  padding: 24px 28px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Títulos */
.cs-title {
  margin: 0 0 12px;
  text-align: center;
  font-size: 1.25rem;
  color: #2c3e50;
}
.cs-subtitle {
  margin: 8px 0 6px;
  font-size: 1rem;
  color: #2c3e50;
}

/* Grid de héroes */
.hero-grid {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.hero-card {
  background: #e6eef7;
  border: 2px solid #b0c4de;
  border-radius: 8px;
  padding: 8px 10px;
  width: 94px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.1s, border-color 0.15s;
}
.hero-card.selected {
  border-color: #28a745;
  transform: translateY(-2px);
}
.hero-thumb {
  width: 60px;
  height: 56px;
  object-fit: contain;
  image-rendering: pixelated;
}
.hero-name {
  margin-top: 4px;
  font-size: 0.8rem;
  color: #2c3e50;
}

/* Skins */
.skins-section {
  margin-top: 12px;
  text-align: center;
}
.skins-row {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}
.skin-dot {
  width: 38px;
  height: 38px;
  border: 2px solid #b0c4de;
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

/* Botones inferiores */
.cs-buttons {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 18px;
}
.cs-btn {
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #b0c4de;
  color: #fff;
  font-weight: bold;
  font-size: 0.85rem;
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

/* Fade para skins */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
