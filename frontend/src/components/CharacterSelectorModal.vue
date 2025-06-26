<template>
  <div class="character-selector-overlay">
    <div class="character-selector-modal">
      <h2>Selecciona Personaje</h2>
      <ul>
        <li v-for="c in characters" :key="c.id">
          <label>
            <input
              type="radio"
              name="character"
              :value="c.id"
              v-model="localCharacter"
            />
            {{ c.name }}
          </label>
        </li>
      </ul>

      <h2>Selecciona Color</h2>
      <ul>
        <li
          v-for="skin in characters.find(c => c.id === localCharacter).skins"
          :key="skin"
        >
          <label>
            <input
              type="radio"
              name="skin"
              :value="skin"
              v-model="localSkin"
            />
            {{ skin }}
          </label>
        </li>
      </ul>

      <div class="buttons">
        <button @click="onConfirm">Confirmar</button>
        <button @click="$emit('cancel')">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValueCharacter: String,
  modelValueSkin: String,
  characters: Array
});
const emit = defineEmits(['update:character', 'update:skin', 'confirm', 'cancel']);

const localCharacter = ref(props.modelValueCharacter);
const localSkin      = ref(props.modelValueSkin);

// Sincronizamos en caso de props cambien externamente
watch(() => props.modelValueCharacter, v => localCharacter.value = v);
watch(() => props.modelValueSkin, v => localSkin.value = v);

function onConfirm() {
  emit('update:character', localCharacter.value);
  emit('update:skin',      localSkin.value);
  emit('confirm');
}
</script>

<style scoped>
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
  width: 320px;
}
.character-selector-modal ul {
  list-style: none;
  padding: 0;
}
.character-selector-modal li {
  margin: 8px 0;
}
.character-selector-modal .buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
