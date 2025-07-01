<template>
  <div class="skill-button-container">
    <button @click="handleClick" :class="buttonClasses" :disabled="isDisabled" class="skill-button">
      <div class="icon">{{ icon }}</div>
      <div class="label">{{ label }}</div>
      <div v-if="description" class="tooltip">{{ description }}</div>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  character: { type: String, required: true },
  skillState: { type: Object, required: true }, // { isActive, isUsedInEncounter }
  gamePhase: { type: String, required: true },
});

const emit = defineEmits(["toggle", "use"]);

const isEncounter = computed(
  () => props.gamePhase === "boss_encounter" || props.gamePhase === "minion_encounter"
);

const isDisabled = computed(() => {
  if (props.skillState.isUsedInEncounter) return true;
  if (props.character === "knight" || props.character === "thief") {
    return !isEncounter.value;
  }
  return false;
});

const icon = computed(() => {
  switch (props.character) {
    case "knight":
      return "⚔️";
    case "thief":
      return "💰";
    case "mage":
      return "✨";
    default:
      return "?";
  }
});

const label = computed(() => {
  if (isDisabled.value) {
    if (props.skillState.isUsedInEncounter) return "Used";
    return "Skill";
  }
  if (props.skillState.isActive) return "Active";
  return "Skill";
});

const description = computed(() => {
  if (isDisabled.value && !props.skillState.isUsedInEncounter) {
    if (props.character === "knight" || props.character === "thief")
      return "Can only be used in a boss or minion encounter.";
  }
  switch (props.character) {
    case "knight":
      return "Activate to double the damage of your next attack this encounter.";
    case "thief":
      return "Use during a boss or minion encounter to steal from them.";
    case "mage":
      return "Activate to duplicate the next die you click in your pouch.";
    default:
      return "No skill";
  }
});

const buttonClasses = computed(() => ({
  "is-active": props.skillState.isActive,
  "is-disabled": isDisabled.value,
  "is-used": props.skillState.isUsedInEncounter,
  knight: props.character === "knight",
  thief: props.character === "thief",
  mage: props.character === "mage",
}));

function handleClick() {
  if (isDisabled.value) return;

  if (props.character === "thief") {
    emit("use"); // Thief skill is a direct use, no toggle
  } else {
    // Knight and Mage have toggleable skills
    emit("toggle", !props.skillState.isActive);
  }
}
</script>

<style scoped>
.skill-button-container {
  display: flex;
  justify-content: center;
  position: relative;
}
.skill-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #ccc;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: sans-serif;
}
.icon {
  font-size: 20px;
}
.label {
  font-size: 10px;
  font-weight: bold;
}
.skill-button:not(.is-disabled):hover {
  border-color: #888;
  transform: translateY(-2px);
}
.skill-button.is-active {
  box-shadow: 0 0 15px, 0 0 5px inset;
}
.skill-button.is-disabled {
  cursor: not-allowed;
}
.skill-button.is-used {
  background-color: #555;
  border-color: #333;
  color: #999;
}
.skill-button.knight.is-active {
  border-color: #e74c3c;
  color: #e74c3c;
}
.skill-button.thief.is-active {
  border-color: #f1c40f;
  color: #f1c40f;
}
.skill-button.mage.is-active {
  border-color: #3498db;
  color: #3498db;
}

.tooltip {
  visibility: hidden;
  width: 160px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px;
}
.skill-button:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
</style>
