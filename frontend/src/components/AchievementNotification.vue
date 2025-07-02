<template>
  <div class="notification-card">
    <div class="icon">🏆</div>
    <div class="text-content">
      <div class="title">Achievement Unlocked!</div>
      <div class="name">{{ achievement.name }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  achievement: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.notification-card {
  width: 300px;
  background-color: #2a3a4a;
  color: white;
  padding: 15px;
  border-radius: 8px;
  border-left: 5px solid #6cff6c;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 15px;
}
.icon {
  font-size: 2.5rem;
}
.text-content {
  display: flex;
  flex-direction: column;
}
.title {
  font-weight: bold;
  font-size: 0.9rem;
  color: #ccc;
}
.name {
  font-size: 1.1rem;
}
</style>
