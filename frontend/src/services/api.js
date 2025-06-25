// frontend/src/services/api.js
import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:3000',
  withCredentials: false,          // usaremos JWT en localStorage, no cookies
});
