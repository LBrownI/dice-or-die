<template>
  <div class="options-modal-overlay" @click.self="emit('close')">
    <div class="options-modal-content">
      <h2 class="modal-title">Options</h2>

      <div class="options-group">
        <label>Game Speed</label>
        <button @click="toggleSpeed">
          Velocidad:
          {{
            gameStore.animationSpeedMultiplier === 0
              ? "Instantánea"
              : gameStore.animationSpeedMultiplier === 2
              ? "Rápida"
              : "Normal"
          }}
        </button>

      </div>

      <div v-if="context === 'in-game'" class="options-group">
        <label>Statistics</label>
        <button class="option-button" @click="emit('show-stats')" disabled>View Statistics</button>
      </div>

      <div v-if="context === 'in-game'" class="options-group">
        <label>Appearance</label>
        <button class="option-button" @click="emit('change-skin')">Change Skin</button>
      </div>

      <div class="actions-group">
        <template v-if="context === 'in-game'">
          <button class="action-button primary" @click="emit('new-run')">New Run</button>
          <button class="action-button" @click="emit('main-menu')">Main Menu</button>
        </template>
        <button class="action-button secondary" @click="emit('close')">Back</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from "@/stores/game";

/* Props & emits */
defineProps({ context: { type: String, default: "in-game" } });
const emit = defineEmits(["close","new-run","main-menu","show-stats","change-skin"]);

/* Store */
const gameStore = useGameStore();

/* ÚNICA función para alternar velocidad */
function toggleSpeed() {
  const next =
    gameStore.animationSpeedMultiplier === 1 ? 2 :
    gameStore.animationSpeedMultiplier === 2 ? 0 : 1;

  // Llama a la acción Pinia que ya dispara el endpoint correcto
  gameStore.setAnimationSpeed(next);
}
</script>



<style scoped>
.options-modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.options-modal-content {
  background: #fdfdfd;
  padding: 24px 30px;
  border-radius: 12px;
  min-width: 320px;
  max-width: 400px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid #ccc;
}
.modal-title {
  text-align: center;
  margin-top: 0;
  margin-bottom: 24px;
  color: #333;
}
.options-group {
  margin-bottom: 18px;
}
.options-group label {
  display: block;
  font-weight: 600;
  color: #555;
  margin-bottom: 8px;
  font-size: 0.9rem;
}
.option-button {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.option-button:hover {
  background-color: #dee2e6;
}
.option-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.actions-group {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.action-button {
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.action-button.primary {
  background-color: #dc3545; /* Red for a "new run" which is destructive */
  color: white;
}
.action-button.primary:hover {
  background-color: #c82333;
}
.action-button.secondary {
  background-color: #6c757d;
  color: white;
}
.action-button.secondary:hover {
  background-color: #5a6268;
}
</style>
