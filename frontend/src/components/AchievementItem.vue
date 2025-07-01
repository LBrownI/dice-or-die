<template>
  <div class="achievement-item" :class="{ unlocked: achievement.unlocked }">
    <div class="icon">{{ achievement.unlocked ? "🏆" : "🔒" }}</div>
    <div class="details">
      <h4 class="name">{{ achievement.name }}</h4>
      <p class="description">{{ achievement.description }}</p>
      <p v-if="achievement.unlocked && achievement.date" class="date">
        Unlocked: {{ formattedDate }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  achievement: {
    type: Object,
    required: true,
  },
});

const formattedDate = computed(() => {
  if (!props.achievement.date) return "";
  return new Date(props.achievement.date).toLocaleDateString();
});
</script>

<style scoped>
.achievement-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-radius: 8px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  opacity: 0.6;
  transition: all 0.2s;
}
.achievement-item.unlocked {
  opacity: 1;
  background-color: #e8f8f5;
  border-color: #2ecc71;
}
.icon {
  font-size: 2rem;
}
.details {
  flex-grow: 1;
}
.name {
  margin: 0 0 5px;
  font-weight: bold;
}
.description {
  margin: 0;
  font-size: 0.9rem;
  color: #6c757d;
}
.date {
  margin: 5px 0 0;
  font-size: 0.8rem;
  color: #28a745;
}
</style>
