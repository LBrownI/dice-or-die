import { defineStore } from "pinia";
import { ref, computed } from "vue";
import apiClient from "../services/api";

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
  const showGeneralRoll = ref(false);
  const boardIsReady = ref(false);
  const gameMessage = ref("");

  // Boss-related state
  const currentBoss = ref(null);
  const currentDiceThrows = ref([]);
  const remainingBossRolls = ref(0);
  const bossLastRoll = ref(null);
  const currentBossHP = ref(null);
  const currentBossMaxHP = ref(null);

  // Game summary state
  const totalRolls = ref(0);
  const diceObtained = ref(0);
  const bossesDefeated = ref(0);
  const perfectBossDefeats = ref(0);
  const bribesBosses = ref(0);
  const showSummaryModal = ref(false);

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
      console.log("Pinia: Requesting new game from server...");
      const response = await apiClient.post("/api/game/start");

      // Use $patch to update all state properties at once
      this.$patch(response.data);

      boardIsReady.value = true;
      console.log("Pinia: New game created, board is ready!");
      return response.data; // Return the new session data
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
      };
      await apiClient.put(`/api/game/${sessionId.value}`, persistentState);
    } catch (error) {
      console.error("Pinia: Failed to save game", error);
    }
  }

  // Example of a future action - this will be implemented when we add the roll endpoint
  async function rollDice(reservedDieIndex = -1) {
    console.log("rollDice called with reservedDieIndex:", reservedDieIndex);
    console.log("_id.value:", _id.value);

    if (!_id.value) return console.error("No active game session!");
    isAnimating.value = true; // For UI feedback
    try {
      console.log("Making API call to roll dice...");
      const response = await apiClient.post(`/api/game/${_id.value}/roll`, {
        reservedDieIndex,
      });
      console.log("API response received:", response.data);
      this.$patch(response.data);
      console.log("State updated with $patch");
    } catch (error) {
      console.error("Pinia: Failed to roll dice", error);
    } finally {
      isAnimating.value = false;
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

  // Simple UI actions that don't need backend logic
  function toggleAnimationSpeed() {
    if (animationSpeedMultiplier.value === 1) animationSpeedMultiplier.value = 2;
    else if (animationSpeedMultiplier.value === 2) animationSpeedMultiplier.value = 0;
    else animationSpeedMultiplier.value = 1;

    gameMessage.value = `Animation speed: ${
      animationSpeedMultiplier.value === 0
        ? "Instant"
        : animationSpeedMultiplier.value === 2
        ? "Faster"
        : "Normal"
    }`;
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
    showGeneralRoll,
    boardIsReady,
    gameMessage,
    currentBoss,
    currentDiceThrows,
    remainingBossRolls,
    bossLastRoll,
    currentBossHP,
    currentBossMaxHP,
    totalRolls,
    diceObtained,
    bossesDefeated,
    perfectBossDefeats,
    bribesBosses,
    showSummaryModal,

    // Getters
    diceBagCapacityDisplay,
    currentSpeedText,

    // Actions
    createGame,
    loadGame,
    saveGame,
    rollDice,
    playerMakesChoice,
    toggleAnimationSpeed,
    highlightSquareForDie,
    clearHighlightedSquare,
  };
});
