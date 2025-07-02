//frontend\src\stores\game.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import apiClient from "../services/api";
import { useAuthStore } from "./auth";

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

export const useGameStore = defineStore("game", () => {
  // --- STATE ---
  // All state properties are now simple refs, populated by the server.
  const _id = ref(null);
  const sessionId = ref(null);
  const playerPosition = ref(0);
  const playerMoney = ref(0);
  const playerLap = ref(1);
  const playerStage = ref(1);
  const lastDiceRoll = ref(null);
  const reservedDice = ref([]);
  const maxDiceInBag = ref(15);
  const boardRows = ref(0);
  const boardCols = ref(0);
  const boardSquares = ref([]);
  const isGameOver = ref(false);
  const gamePhase = ref("rolling");
  const choiceDetails = ref(null);
  const animationSpeedMultiplier = ref(1);
  const isAnimating = ref(false);
  const diceRollAnimationBaseDuration = ref(1000);
  const playerStepBaseDuration = ref(300);
  const lastPlayerPositionBeforeThisMove = ref(0);
  const assetsLoaded = ref(false);
  const highlightedTargetSquare = ref(null);
  const lastGeneralRoll = ref(null);
  const showGeneralRollAnimation = ref(false);
  const boardIsReady = ref(false);
  const gameMessage = ref("");
  const playerCharacter = ref("knight"); // valor por defecto
  const playerSkin = ref("blue"); // valor por defecto

  // Boss-related state
  const currentBoss = ref(null);
  const currentDiceThrows = ref([]);
  const bossLastRoll = ref(null);
  const currentBossHP = ref(null);
  const currentBossMaxHP = ref(null);
  const showBossRollAnimation = ref(false);
  const inMinionFight = ref(false);
  const lastDamageTaken = ref(0); // For hit flash effect

  // Game summary state
  const totalRolls = ref(0);
  const diceObtained = ref(0);
  const bossesDefeated = ref(0);
  const perfectBossDefeats = ref(0);
  const bribesBosses = ref(0);
  const showSummaryModal = ref(false);
  const skillState = ref({ isActive: false, isUsedInEncounter: false });

  // --- GETTERS ---
  // Keep only simple, purely display-related getters
  const diceBagCapacityDisplay = computed(() => {
    return `${reservedDice.value.length}/${maxDiceInBag.value}`;
  });

  const currentSpeedText = computed(() => {
    switch (animationSpeedMultiplier.value) {
      case 0:
        return "Instant";
      case 1:
        return "Normal";
      case 2:
        return "Faster";
      default:
        return "Unknown";
    }
  });

  // --- ACTIONS ---
  // Actions only talk to the API and update the state.

  // This is the action that gets called from your "New Game" button
  async function createGame() {
    try {
      boardIsReady.value = false;
      console.log("Pinia: Requesting new game from server…");

      const authStore = useAuthStore();
      const body = {
        playerCharacter: playerCharacter.value,
        playerSkin: playerSkin.value,
        animationSpeedMultiplier: animationSpeedMultiplier.value,
        userId: authStore.currentUser?._id,
      };

      const response = await apiClient.post("/api/game/start", body);

      this.$patch(response.data);

      boardIsReady.value = true;
      console.log("Pinia: New game created, board is ready!");
      return response.data;
    } catch (error) {
      console.error("Pinia: Failed to create game", error);
    }
  }

  async function loadGame(sessionId) {
    try {
      boardIsReady.value = false;
      console.log(`Pinia: Loading game state for session: ${sessionId}`);
      const response = await apiClient.get(`/api/game/${sessionId}`);

      this.$patch(response.data);

      boardIsReady.value = true;
      console.log("Pinia: Game state loaded, board is ready!");
    } catch (error) {
      console.error("Pinia: Failed to load game state", error);
    }
  }

  async function saveGame() {
    if (!sessionId.value) return;
    try {
      const persistentState = {
        playerPosition: playerPosition.value,
        playerMoney: playerMoney.value,
        playerLap: playerLap.value,
        playerStage: playerStage.value,
        lastDiceRoll: lastDiceRoll.value,
        reservedDice: reservedDice.value,
        maxDiceInBag: maxDiceInBag.value,
        boardRows: boardRows.value,
        boardCols: boardCols.value,
        boardSquares: boardSquares.value,
        isGameOver: isGameOver.value,
        gamePhase: gamePhase.value,
        choiceDetails: choiceDetails.value,
        animationSpeedMultiplier: animationSpeedMultiplier.value,
        isAnimating: isAnimating.value,
        diceRollAnimationBaseDuration: diceRollAnimationBaseDuration.value,
        playerStepBaseDuration: playerStepBaseDuration.value,
        lastPlayerPositionBeforeThisMove: lastPlayerPositionBeforeThisMove.value,
        totalRolls: totalRolls.value,
        bossesDefeated: bossesDefeated.value,
        diceObtained: diceObtained.value,
        perfectBossDefeats: perfectBossDefeats.value,
        bribesBosses: bribesBosses.value,
        inMinionFight: inMinionFight.value,
        lastDamageTaken: lastDamageTaken.value,
      };
      await apiClient.put(`/api/game/${sessionId.value}`, persistentState);
    } catch (error) {
      console.error("Pinia: Failed to save game", error);
    }
  }

  // Cambia la velocidad y avisa al backend
  async function setAnimationSpeed(nextMultiplier) {
    if (!_id.value) return;
    try {
      const res = await apiClient.post(`/api/game/${_id.value}/speed`, {
        multiplier: nextMultiplier,
      });
      animationSpeedMultiplier.value = res.data.animationSpeedMultiplier;
      gameMessage.value =
        animationSpeedMultiplier.value === 0
          ? "Speed: instant"
          : animationSpeedMultiplier.value === 2
          ? "Speed: fast"
          : "Speed: normal";
    } catch (err) {
      console.error("Pinia: no se pudo cambiar la velocidad", err);
    }
  }

  // This is a helper for the animation UI
  function getAnimationDelay(baseDuration) {
    if (animationSpeedMultiplier.value === 0) return 0;
    return baseDuration / animationSpeedMultiplier.value;
  }

  function triggerBossRollAnimation(result) {
    bossLastRoll.value = result;
    showBossRollAnimation.value = true;
    setTimeout(() => (showBossRollAnimation.value = false), 1000);
  }

  async function rollDice(reservedDieIndex = -1) {
    if (!_id.value || isAnimating.value) return;
    isAnimating.value = true;
    try {
      const response = await apiClient.post(`/api/game/${_id.value}/roll`, {
        reservedDieIndex,
        skillState: skillState.value,
      });

      const { updatedState, updatedUser } = response.data;

      // --- LIVE USER UPDATE ---
      if (updatedUser) {
        useAuthStore()._setCurrentUser(updatedUser);
      }

      // --- ANIMATION & STATE PATCH ---
      lastGeneralRoll.value = updatedState.lastDiceRoll?.value;
      showGeneralRollAnimation.value = true;
      setTimeout(() => {
        showGeneralRollAnimation.value = false;
      }, 1000);

      if (updatedState.gamePhase === "boss_encounter") {
        triggerBossRollAnimation(updatedState.lastDiceRoll?.value);
      }
      if (response.data.movementPath?.length) {
        for (const pos of response.data.movementPath) {
          playerPosition.value = pos;
          await sleep(getAnimationDelay(playerStepBaseDuration.value));
        }
      }
      // Finalmente aplicamos el estado “oficial”
      this.$patch(updatedState);
      // Si hemos salido del encuentro con minion, limpia el daño
      inMinionFight.value = updatedState.gamePhase === "minion_encounter";
      if (!inMinionFight.value) lastDamageTaken.value = 0;
    } catch (error) {
      console.error("Pinia: Failed to roll dice", error);
    } finally {
      isAnimating.value = false;
    }
  }

  async function toggleSkill(isActive) {
    if (!_id.value) return;
    try {
      const response = await apiClient.post(`/api/game/${_id.value}/skill/toggle`, { isActive });
      this.$patch(response.data);
    } catch (error) {
      console.error("Pinia: Failed to toggle skill", error);
    }
  }

  async function useSkill(payload = {}) {
    // Universal skill usage action
    if (!_id.value || skillState.value.isUsedInEncounter) return;
    try {
      const response = await apiClient.post(`/api/game/${_id.value}/skill/use`, {
        ...payload,
        skillState: skillState.value,
      });
      const { updatedState, updatedUser } = response.data;

      if (updatedUser) {
        useAuthStore()._setCurrentUser(updatedUser);
      }

      this.$patch(updatedState);
    } catch (error) {
      console.error(`Pinia: Failed to use skill.`, error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      }
    }
  }

  async function playerMakesChoice(chosenOption) {
    if (!_id.value) return console.error("No active game session!");
    try {
      const response = await apiClient.post(`/api/game/${_id.value}/choice`, {
        chosenOption,
      });
      this.$patch(response.data);
    } catch (error) {
      console.error("Pinia: Failed to make choice", error);
    }
  }

  async function payBossBribe() {
    if (!_id.value || gamePhase.value !== "boss_encounter") return;
    try {
      const response = await apiClient.post(`/api/game/${_id.value}/bribe`);
      const { updatedState, updatedUser } = response.data;

      // --- LIVE USER UPDATE ---
      if (updatedUser) {
        useAuthStore()._setCurrentUser(updatedUser);
      }

      if (updatedState) {
        this.$patch(updatedState);
      }
    } catch (error) {
      // The backend will send a 400 if not enough money, handle it gracefully
      if (error.response && error.response.data.message) {
        // You might want to show this message to the player in a more elegant way
        alert(error.response.data.message);
      } else {
        console.error("Pinia: Failed to pay bribe", error);
      }
    }
  }

  function highlightSquareForDie(die) {
    // Simple UI logic - could be moved to a computed property later
    if (!die || !boardSquares.value.length) {
      highlightedTargetSquare.value = null;
      return;
    }

    const nonPredictableTypes = ["normal", "d20", "reverse_random"];
    const type = die.type?.toLowerCase?.();

    if (!die.value || nonPredictableTypes.includes(type)) {
      highlightedTargetSquare.value = null;
      return;
    }

    const steps = type.includes("reverse") ? -die.value : die.value;
    const total = boardSquares.value.length;
    const target = (playerPosition.value + steps + total) % total;

    highlightedTargetSquare.value = target;
  }

  function clearHighlightedSquare() {
    highlightedTargetSquare.value = null;
  }

  async function fleeMinion() {
    if (!_id.value || gamePhase.value !== "minion_encounter") return;
    try {
      const response = await apiClient.post(`/api/game/${_id.value}/flee`);
      this.$patch(response.data);
    } catch (error) {
      console.error("Pinia: Failed to flee minion", error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      }
    }
  }

  async function updatePlayerSkin(newSkin) {
    if (!_id.value) return;
    try {
      playerSkin.value = newSkin; // Optimistic update
      await apiClient.post(`/api/game/${_id.value}/skin`, { playerSkin: newSkin });
      gameMessage.value = "Player skin updated!";
    } catch (error) {
      console.error("Pinia: Failed to update player skin", error);
    }
  }

  return {
    // State
    _id,
    sessionId,
    playerPosition,
    playerMoney,
    playerLap,
    playerStage,
    lastDiceRoll,
    reservedDice,
    maxDiceInBag,
    boardRows,
    boardCols,
    boardSquares,
    isGameOver,
    gamePhase,
    choiceDetails,
    animationSpeedMultiplier,
    isAnimating,
    diceRollAnimationBaseDuration,
    playerStepBaseDuration,
    lastPlayerPositionBeforeThisMove,
    assetsLoaded,
    highlightedTargetSquare,
    lastGeneralRoll,
    boardIsReady,
    gameMessage,
    currentBoss,
    currentDiceThrows,
    showBossRollAnimation,
    showGeneralRollAnimation,
    bossLastRoll,
    currentBossHP,
    currentBossMaxHP,
    totalRolls,
    diceObtained,
    bossesDefeated,
    perfectBossDefeats,
    bribesBosses,
    showSummaryModal,
    playerCharacter,
    playerSkin,
    skillState,
    inMinionFight,
    lastDamageTaken,

    // Getters
    diceBagCapacityDisplay,
    currentSpeedText,

    // Actions
    createGame,
    loadGame,
    saveGame,
    rollDice,
    playerMakesChoice,
    payBossBribe,
    setAnimationSpeed,
    toggleSkill,
    useSkill,
    getAnimationDelay,
    highlightSquareForDie,
    clearHighlightedSquare,
    fleeMinion,
    updatePlayerSkin,
  };
});
