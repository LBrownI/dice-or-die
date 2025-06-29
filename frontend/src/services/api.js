import axios from "axios";

const apiClient = axios.create({
  // Use the environment variable as the base URL
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// You can also add interceptors here to handle auth tokens, etc.

export default apiClient;
