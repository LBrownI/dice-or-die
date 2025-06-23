<script>
import axios from 'axios'
export default {
  name: 'AuthCard',
  data() {
    return {
      form: {
        user: '',
        password: ''
      },
      message: '',
      messageType: ''
    }
  },
  methods: {
    showMessage(text, isError = false) {
      this.message = text
      this.messageType = isError ? 'error' : 'success'
    },
    async login() {
      const { user, password } = this.form
      if (!user || !password) return this.showMessage('Todos los campos son obligatorios.', true)
      try {
        const res = await axios.post('http://localhost:3000/users/login', { user, password })
        this.showMessage('Login exitoso!')
        // manejar token: res.data.token
      } catch (err) {
        this.showMessage(err.response?.data?.error || 'Error al ingresar.', true)
      }
    },
    async register() {
      const { user, password } = this.form
      if (!user || !password) return this.showMessage('Todos los campos son obligatorios.', true)
      try {
        await axios.post('http://localhost:3000/users/register', { user, password })
        this.showMessage('Usuario registrado correctamente.')
      } catch (err) {
        this.showMessage(err.response?.data?.error || 'Error al registrar.', true)
      }
    }
  }
}
</script>

<template>
  <div class="login-card">
    <h2>Ingreso / Registro</h2>
    <div class="input-group">
      <label for="user">Usuario</label>
      <input v-model="form.user" type="text" id="user" placeholder="Ingresa tu usuario" />
    </div>
    <div class="input-group">
      <label for="password">Contraseña</label>
      <input v-model="form.password" type="password" id="password" placeholder="Ingresa tu contraseña" />
    </div>
    <div class="actions">
      <button class="login" @click="login">Login</button>
      <button class="register" @click="register">Crear</button>
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
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
  background: #4CAF50;
}
.actions .register {
  background: #2196F3;
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
