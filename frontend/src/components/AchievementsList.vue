<template>
  <div class="achievements-section">
    <h2>Achievements ({{ unlockedCount }} / {{ total }})</h2>
    <div class="achievements-grid">
      <AchievementItem v-for="ach in achievements" :key="ach.id" :achievement="ach" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import AchievementItem from "./AchievementItem.vue";

const props = defineProps({
  achievements: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const unlockedCount = computed(() => {
  return props.achievements.filter((a) => a.unlocked).length;
});
</script>

<style scoped>
.achievements-section {
  margin-bottom: 30px;
}
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}
</style>
