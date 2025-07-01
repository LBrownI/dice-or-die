<template>
  <div class="profile-modal-overlay" @click.self="$emit('close')">
    <div class="profile-modal-content">
      <h2 class="modal-title">Select or Create a Profile</h2>

      <div class="profile-list-container">
        <button class="profile-item create-new" @click="view = 'register'">
          <div class="profile-icon">➕</div>
          <div class="profile-name">Create New</div>
        </button>
        <button
          v-for="profile in authStore.allUsernames"
          :key="profile._id"
          class="profile-item"
          :class="{ selected: selectedUsername === profile.username }"
          @click="selectProfile(profile.username)"
        >
          <div class="profile-icon">👤</div>
          <div class="profile-name">{{ profile.username }}</div>
          <div class="profile-stats">
            <div>🏆 {{ profile.totalWins || 0 }}</div>
            <div>⭐ {{ profile.unlockedAchievements || 0 }}/{{ totalAchievements }}</div>
          </div>
        </button>
      </div>

      <div class="form-container" v-if="view === 'login' || view === 'register'">
        <h3 v-if="view === 'login'">Login as {{ selectedUsername }}</h3>
        <h3 v-if="view === 'register'">Create New Profile</h3>

        <input
          v-if="view === 'register'"
          v-model="form.username"
          type="text"
          placeholder="Username"
          class="input-field"
        />
        <input v-model="form.password" type="password" placeholder="Password" class="input-field" />

        <div v-if="message" class="message" :class="messageType">{{ message }}</div>

        <button v-if="view === 'login'" @click="handleLogin" class="action-button">Login</button>
        <button v-if="view === 'register'" @click="handleRegister" class="action-button">
          Create Account
        </button>
      </div>

      <div class="actions-group">
        <button class="action-button secondary" @click="$emit('close')">Back</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const emit = defineEmits(["close", "login-success"]);
const authStore = useAuthStore();

const view = ref("list"); // 'list', 'login', 'register'
const selectedUsername = ref("");
const form = ref({ username: "", password: "" });
const message = ref("");
const messageType = ref(""); // 'success' or 'error'

const totalAchievements = 8; // Define the total number of achievements

onMounted(() => {
  authStore.fetchAllUsernames();
});

function selectProfile(username) {
  selectedUsername.value = username;
  view.value = "login";
  form.value.username = username;
  form.value.password = "";
  message.value = "";
}

async function handleLogin() {
  const result = await authStore.login(selectedUsername.value, form.value.password);
  if (result.success) {
    messageType.value = "success";
    message.value = "Login successful!";
    setTimeout(() => {
      emit("login-success");
      emit("close");
    }, 1000);
  } else {
    messageType.value = "error";
    message.value = result.message;
  }
}

async function handleRegister() {
  const result = await authStore.register(form.value.username, form.value.password);
  if (result.success) {
    messageType.value = "success";
    message.value = "Account created! You can now log in.";
    // Reset form and view
    view.value = "list";
    form.value = { username: "", password: "" };
  } else {
    messageType.value = "error";
    message.value = result.message;
  }
}
</script>

<style scoped>
.profile-modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.profile-modal-content {
  background: #fdfdfd;
  padding: 24px 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}
.modal-title {
  text-align: center;
  margin-top: 0;
  margin-bottom: 24px;
}
.profile-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-bottom: 24px;
  max-height: 200px;
  overflow-y: auto;
  padding: 5px;
}
.profile-item {
  width: 100px;
  height: 100px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f0f0f0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.profile-item:hover {
  border-color: #3498db;
  background-color: #eaf5fb;
}
.profile-item.selected {
  border-color: #2ecc71;
  background-color: #e8f8f5;
}
.profile-item.create-new {
  border-style: dashed;
}
.profile-icon {
  font-size: 2rem;
}
.profile-name {
  font-size: 0.9rem;
  margin-top: 8px;
  font-weight: bold;
}
.profile-stats {
  font-size: 0.75rem;
  margin-top: 6px;
  color: #555;
  display: flex;
  gap: 8px;
}
.form-container {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input-field {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
}
.action-button {
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  background-color: #27ae60;
  color: white;
}
.actions-group {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.action-button.secondary {
  background-color: #6c757d;
}
.message {
  padding: 10px;
  border-radius: 6px;
  text-align: center;
}
.message.success {
  background-color: #d4edda;
  color: #155724;
}
.message.error {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
