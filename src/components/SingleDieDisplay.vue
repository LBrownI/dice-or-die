<script setup>
import { ref, watch } from "vue";
import { generateDieImageFilename, getDieImageUrl } from "../utils/imageUtils";

const props = defineProps({
  die: {
    type: Object,
    required: true,
  },
  isLastRoll: {
    // To handle the structure of lastDiceRoll object
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["use-die"]);

const imageUrl = ref(null);
const imageError = ref(false);

function updateImage() {
  imageError.value = false; // Reset error on die change
  const filename = generateDieImageFilename(props.die, props.isLastRoll);
  if (filename) {
    imageUrl.value = getDieImageUrl(filename);
  } else {
    imageUrl.value = null;
    imageError.value = true; // Consider unknown type as an error for fallback
  }
}

watch(() => props.die, updateImage, { immediate: true, deep: true });

function handleImageError(event) {
  imageError.value = true;
  if (event.target) {
    event.target.style.display = "none"; // Hide broken image icon
  }
}

function getDieLabel(die) {
  let label = die.type || "";
  if (die.value !== undefined) {
    label += ` (${die.value})`;
  }
  if (props.isLastRoll && die.direction) {
    label += ` ${die.direction}`;
  }
  return label;
}
</script>

<template>
  <div class="single-die-display">
    <button v-if="!isLastRoll" @click="emit('use-die')" :disabled="die.used" class="die-button">
      <img
        v-if="imageUrl && !imageError"
        :src="imageUrl"
        :alt="getDieLabel(die)"
        @error="handleImageError"
      />
      <span v-if="imageError || !imageUrl" class="fallback-text">[img]</span>
      <span class="die-label">{{ getDieLabel(die) }}</span>
    </button>
    <div v-else class="last-roll-display">
      <img
        v-if="imageUrl && !imageError"
        :src="imageUrl"
        :alt="getDieLabel(die)"
        @error="handleImageError"
      />
      <span v-if="imageError || !imageUrl" class="fallback-text">[img]</span>
      <span class="die-label">{{ getDieLabel(die) }}</span>
    </div>
  </div>
</template>

<style scoped>
.single-die-display,
.last-roll-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.die-button {
  background: none;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px; /* Adjust as needed */
}
.die-button:hover {
  border-color: #888;
}
.die-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
img {
  width: 50px; /* Adjust die image size */
  height: 50px;
  object-fit: contain;
  margin-bottom: 5px;
}
.fallback-text {
  display: inline-block; /* Or block */
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px dashed #ccc;
  font-size: 12px;
  color: #777;
  margin-bottom: 5px;
}
.die-label {
  font-size: 10px;
  color: #333;
  margin-top: 2px;
  word-break: break-word;
}
.last-roll-display img,
.last-roll-display .fallback-text {
  border: 1px solid transparent; /* Match button spacing if needed */
}
</style>
