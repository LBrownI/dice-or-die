import { defineStore } from "pinia";
import { ref, computed } from "vue";
import apiClient from "../services/api";
import { useUiStore } from "./ui";

// We need the master list of achievements to get their details
const ALL_ACHIEVEMENTS = [
  { id: "first_boss", name: "I shall pass!", description: "Defeat your first boss." },
  { id: "first_bribe", name: "The Temptation", description: "Bribe your first boss." },
  { id: "pouch_full", name: "No Room for More", description: "Have your Dice Pouch full." },
  { id: "roll_100", name: "Roller!", description: "Roll a die 100 times." },
  {
    id: "money_500",
    name: "Kilos on Your Pockets",
    description: "Have more than $500 in one run.",
  },
  { id: "clear_run", name: "Area Cleared!", description: "End a run defeating all bosses." },
  {
    id: "perfect_run",
    name: "Glorious Victory!",
    description: "End a run defeating all bosses perfectly.",
  },
  {
    id: "bribe_all",
    name: "Master of Persuasion",
    description: "Bribe all bosses in a single run.",
  },
];

export const useAuthStore = defineStore("auth", () => {
  // State
  const user = ref(null);
  const token = ref(localStorage.getItem("token") || null);
  const allUsernames = ref([]);

  // Set token in axios headers
  if (token.value) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;
  }

  // Getters
  const isAuthenticated = computed(() => !!token.value);
  const currentUser = computed(() => user.value);

  function _setCurrentUser(newUserData) {
    if (!newUserData) {
      user.value = null;
      return;
    }

    const oldAchievements = user.value?.achievements || {};
    const newAchievements = newUserData.achievements || {};
    const uiStore = useUiStore();

    // Find newly unlocked achievements
    for (const achId in newAchievements) {
      if (newAchievements[achId]?.unlocked && !oldAchievements[achId]?.unlocked) {
        // This one is new! Find its data and show the notification.
        const achievementData = ALL_ACHIEVEMENTS.find((a) => a.id === achId);
        if (achievementData) {
          uiStore.showAchievement(achievementData);
        }
      }
    }

    // Finally, update the user state
    user.value = newUserData;
  }

  // Actions
  async function fetchAllUsernames() {
    try {
      const response = await apiClient.get("/users/profiles");
      allUsernames.value = response.data;
    } catch (error) {
      console.error("Failed to fetch usernames:", error);
    }
  }

  async function login(username, password) {
    try {
      const response = await apiClient.post("/users/login", { username, password });
      const { token: newToken, user: userData } = response.data;

      localStorage.setItem("token", newToken);
      token.value = newToken;
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

      _setCurrentUser(userData);
      return { success: true };
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, message: error.response?.data?.message || "Login failed" };
    }
  }

  async function register(username, password) {
    try {
      await apiClient.post("/users/register", { username, password });
      // After registering, fetch all usernames again to include the new one
      await fetchAllUsernames();
      return { success: true };
    } catch (error) {
      console.error("Registration failed:", error);
      return { success: false, message: error.response?.data?.message || "Registration failed" };
    }
  }

  function logout() {
    localStorage.removeItem("token");
    token.value = null;
    user.value = null;
    delete apiClient.defaults.headers.common["Authorization"];
  }

  async function fetchCurrentUser() {
    if (!token.value) return;
    try {
      const response = await apiClient.get("/users/me");
      _setCurrentUser(response.data);
    } catch (error) {
      console.error("Failed to fetch current user:", error);
      // If token is invalid/expired, log out
      if (error.response && error.response.status === 401) {
        logout();
      }
    }
  }

  return {
    user,
    token,
    allUsernames,
    isAuthenticated,
    currentUser,
    fetchAllUsernames,
    login,
    register,
    logout,
    fetchCurrentUser,
    _setCurrentUser,
  };
});
