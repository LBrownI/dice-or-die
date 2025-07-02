// src/components/ChoiceModal.vue
<script setup>
import SingleDieDisplay from "./SingleDieDisplay.vue"; // Make sure path is correct

defineProps({
  details: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["player-choice"]);

function makeChoice(option) {
  emit("player-choice", option);
}
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h4>{{ details.message }}</h4>
      <div class="options-container">
        <button
          v-for="(option, index) in details.options"
          :key="index"
          @click="makeChoice(option)"
          class="choice-button"
        >
          <div class="option-visuals">
            <span v-if="option.visual?.type === 'money'" class="emoji-icon">💰</span>
            <SingleDieDisplay
              v-if="option.visual?.type === 'die' && option.visual.dieData"
              :die="option.visual.dieData"
              :is-last-roll="false"
              class="compact-die-in-choice"
            />
          </div>
          <span class="option-text">{{ option.text }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75); /* Darker overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 15px; /* Ensure modal content isn't flush with screen edges */
  box-sizing: border-box;
}
.modal-content {
  background-color: #fffaf0; /* Floral white - softer background */
  padding: 20px 25px;
  border-radius: 12px; /* Softer corners */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  text-align: center;
  min-width: 300px;
  max-width: 500px; /* Max width for modal */
  width: auto; /* Allow it to shrink if content is smaller */
}
h4 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #4a4a4a; /* Darker grey for text */
  font-size: 1.1em;
}
.options-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.choice-button {
  display: flex;
  flex-direction: column; /* Icon above text for clarity */
  align-items: center;
  justify-content: center;
  padding: 12px 10px; /* Adjusted padding */
  background-color: #6dbf6d; /* Softer green */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  min-height: 75px; /* Ensure consistent button height */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.choice-button:hover {
  background-color: #5aa85a;
  transform: translateY(-1px);
}
.choice-button:active {
  transform: translateY(0px);
}
.option-visuals {
  margin-bottom: 6px;
  min-height: 32px; /* Space for die image or emoji */
  display: flex;
  align-items: center;
  justify-content: center;
}
.emoji-icon {
  font-size: 28px; /* Larger emoji */
}
.option-text {
  font-size: 0.9em;
  font-weight: 500;
  color: white;
}

/* Styling for the compact die display within the modal button */
.choice-button :deep(.compact-die-in-choice .single-die-display) {
  /* Override SingleDieDisplay's button nature if it has one */
  padding: 0;
  border: none;
  background: none;
  cursor: default; /* It's part of a larger button */
  width: auto; /* Let image size dictate */
}
.choice-button :deep(.compact-die-in-choice img),
.choice-button :deep(.compact-die-in-choice .fallback-text) {
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 0; /* No extra margin */
}
/* Hide the label from SingleDieDisplay as the button's option.text already covers it */
.choice-button :deep(.compact-die-in-choice .die-label) {
  display: none;
}
</style>
