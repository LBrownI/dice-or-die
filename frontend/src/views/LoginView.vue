<script setup>
import { ref } from "vue";
import api from "@/services/api";

const form = ref({ username: "", password: "" });
const message = ref("");
const messageType = ref("");

function showMessage(txt, isError = false) {
  message.value = txt;
  messageType.value = isError ? "error" : "success";
}

async function register() {
  const { username, password } = form.value;
  if (!username || !password) return showMessage("All fields are required.", true);
  try {
    await api.post("/users/register", { username, password });
    showMessage("User registered successfully.");
  } catch (err) {
    showMessage(err.response?.data?.message || "Error during registration.", true);
  }
}

async function login() {
  const { username, password } = form.value;
  if (!username || !password) return showMessage("All fields are required.", true);
  try {
    const { data } = await api.post("/users/login", { username, password });
    localStorage.setItem("token", data.token);
    showMessage("Login successful!");
  } catch (err) {
    showMessage(err.response?.data?.message || "Error during login.", true);
  }
}
</script>

<template>
  <div class="login-card">
    <h2>Login / Register</h2>

    <div class="input-group">
      <label>Username</label>
      <input v-model="form.username" type="text" placeholder="Username" />
    </div>

    <div class="input-group">
      <label>Password</label>
      <input v-model="form.password" type="password" placeholder="••••••••" />
    </div>

    <div class="actions">
      <button class="login" @click="login">Login</button>
      <button class="register" @click="register">Create</button>
    </div>

    <div class="message" :class="messageType">{{ message }}</div>
  </div>
</template>

<style scoped>
.login-card {
  max-width: 320px;
  margin: 100px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}
.login-card h2 {
  text-align: center;
  margin-bottom: 16px;
}
.input-group {
  margin-bottom: 12px;
}
.input-group label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}
.input-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.actions button {
  flex: 1;
  margin: 0 4px;
  padding: 8px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
.actions .login {
  background: #4caf50;
}
.actions .register {
  background: #2196f3;
}
.message {
  margin-top: 16px;
  text-align: center;
}
.message.error {
  color: red;
}
.message.success {
  color: green;
}
</style>
