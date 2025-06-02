/**
 * @fileoverview Game store module for Dice or Die - A turn-based board game with dice mechanics.
 * This module manages the game state, board configuration, player actions, and boss battles.
 * @module stores/game
 */
import { defineStore } from "pinia";

// --- Type Definitions ---

/**
 * @typedef {Object} BossDefeatCondition
 * @property {number} diceThrows - Number of dice throws allowed against the boss
 * @property {number} hp - Boss's total hit points
 * @property {number} bribeCost - Cost in coins to bribe/skip the boss
 */

/**
 * @typedef {Object} StageConfig
 * @property {number} rows - Number of rows in the game board
 * @property {number} cols - Number of columns in the game board
 * @property {number} moneyMultiplier - Multiplier for money rewards in this stage
 * @property {number} lapsToComplete - Number of laps required to complete the stage
 * @property {number} minBadSquares - Minimum number of negative effect squares
 * @property {number} maxBadSquares - Maximum number of negative effect squares
 * @property {number} minChoiceDiceMoneySquares - Minimum number of choice squares (dice vs money)
 * @property {number} maxChoiceDiceMoneySquares - Maximum number of choice squares (dice vs money)
 * @property {number} minChoicePickDieSquares - Minimum number of pick-a-die squares
 * @property {number} maxChoicePickDieSquares - Maximum number of pick-a-die squares
 * @property {string} bossName - Name of the stage boss
 * @property {string} bossImage - Filename of the boss image asset
 * @property {BossDefeatCondition} bossDefeatCondition - Conditions to defeat the boss
 */

// --- Configuration ---

/** @type {Object.<number, StageConfig>} */
const STAGE_CONFIGS = {
  1: {
    // 6x6
    rows: 6,
    cols: 6,
    moneyMultiplier: 1,
    lapsToComplete: 3,
    minBadSquares: 1,
    maxBadSquares: 2,
    minChoiceDiceMoneySquares: 2,
    maxChoiceDiceMoneySquares: 4,
    minChoicePickDieSquares: 2,
    maxChoicePickDieSquares: 4,
    bossName: "Recaudador de Impuestos",
    bossImage: "tax_collector.png",
    bossDefeatCondition: {
      diceThrows: 3,
      hp: 15,
      bribeCost: 40,
    },
  },
  2: {
    // 9x9
    rows: 9,
    cols: 9,
    moneyMultiplier: 1.5,
    lapsToComplete: 3,
    minBadSquares: 2,
    maxBadSquares: 4,
    minChoiceDiceMoneySquares: 4,
    maxChoiceDiceMoneySquares: 8,
    minChoicePickDieSquares: 4,
    maxChoicePickDieSquares: 8,
    bossName: "Goblin Codicioso",
    bossImage: "greedy_goblin_king.webp",
    bossDefeatCondition: {
      diceThrows: 3,
      hp: 30,
      bribeCost: 80,
    },
  },
  3: {
    // 9x9
    rows: 9,
    cols: 9,
    moneyMultiplier: 1.75,
    lapsToComplete: 3,
    minBadSquares: 2,
    maxBadSquares: 4,
    minChoiceDiceMoneySquares: 4,
    maxChoiceDiceMoneySquares: 8,
    minChoicePickDieSquares: 4,
    maxChoicePickDieSquares: 8,
    bossName: "Comandante Orco",
    bossImage: "orc_general.png",
    bossDefeatCondition: {
      diceThrows: 3,
      hp: 40,
      bribeCost: 70,
    },
  },
  4: {
    // 12x12
    rows: 10,
    cols: 14,
    moneyMultiplier: 2,
    lapsToComplete: 3,
    minBadSquares: 4,
    maxBadSquares: 8,
    minChoiceDiceMoneySquares: 8,
    maxChoiceDiceMoneySquares: 16,
    minChoicePickDieSquares: 8,
    maxChoicePickDieSquares: 16,
    bossName: "Dragón Tesorero",
    bossImage: "dragon_treasurer.png",
    bossDefeatCondition: {
      diceThrows: 3,
      hp: 50,
      bribeCost: 100,
    },
  },
  5: {
    // 12x12
    rows: 10,
    cols: 14,
    moneyMultiplier: 2.5,
    lapsToComplete: 3,
    minBadSquares: 4,
    maxBadSquares: 8,
    minChoiceDiceMoneySquares: 8,
    maxChoiceDiceMoneySquares: 16,
    minChoicePickDieSquares: 8,
    maxChoicePickDieSquares: 16,
    bossName: "Gato Dios Oscuro",
    bossImage: "dark_godcat.webp",
    bossDefeatCondition: {
      diceThrows: 3,
      hp: 70,
      bribeCost: 200,
    },
  },
};

export { STAGE_CONFIGS };

/** @const {number} Maximum number of dice that can be stored in the player's bag */
const MAX_RESERVED_DICE = 15;

/** @const {number} Total number of available game stages */
const MAX_STAGES = Object.keys(STAGE_CONFIGS).length;

/** @const {number} Base value for huge money rewards */
const HUGE_MONEY_AMOUNT_BASE = 10;

/** @const {Object} Types */
export const DICE_TYPES = {
  NORMAL: "Random",
  FIXED: "Fixed",
  D20: "20",
  REVERSE_FIXED: "Reverse Fixed",
  REVERSE_RANDOM: "Reverse Random",
};

// --- Helper Functions ---

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - Minimum value (inclusive)
 * @param {number} max - Maximum value (inclusive)
 * @returns {number} Random integer between min and max
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Shuffles an array in place using the Fisher-Yates algorithm
 * @template T
 * @param {Array<T>} array - Array to shuffle
 * @returns {Array<T>} The shuffled array
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Game store definition using Pinia
 * Manages the entire game state and provides actions for game mechanics
 */
export const useGameStore = defineStore("game", {
  state: () => ({
    /** @type {number} Number of rows in the current board */
    boardRows: 0,
    /** @type {number} Number of columns in the current board */
    boardCols: 0,
    /** @type {number} Current player position on the board */
    playerPosition: 0,
    /** @type {number} Player's current money */
    playerMoney: 0,
    /** @type {number} Current lap number */
    playerLap: 1,
    /** @type {number} Current stage number */
    playerStage: 1,
    /** @type {number|null} Last dice roll result */
    lastDiceRoll: null,
    /** @type {Array} Array of reserved dice */
    reservedDice: [],
    /** @type {number} Maximum number of dice that can be held */
    maxDiceInBag: MAX_RESERVED_DICE,
    /** @type {Array} Array of board square objects */
    boardSquares: [],
    /** @type {string} Current game message to display */
    gameMessage: "Roll the die to start!",
    /** @type {boolean} Whether the game is over */
    isGameOver: false,
    /** @type {string} Current phase of the game turn */
    gamePhase: "rolling",
    /** @type {Object|null} Details for choice-based events */
    choiceDetails: null,
    /** @type {number} Animation speed multiplier */
    animationSpeedMultiplier: 1,
    /** @type {boolean} Whether an animation is currently playing */
    isAnimating: false,
    /** @type {number} Base duration for dice roll animation */
    diceRollAnimationBaseDuration: 1000,
    /** @type {number} Base duration for player movement animation */
    playerStepBaseDuration: 300,
    /** @type {number} Player's position before current move */
    lastPlayerPositionBeforeThisMove: 0,
    /** @type {boolean} Whether game assets are loaded */
    assetsLoaded: false,
    /** @type {number|null} Currently highlighted square */
    highlightedTargetSquare: null,
    /** @type {number|null} Last general dice roll */
    lastGeneralRoll: null,
    /** @type {boolean} Whether to show general roll visual */
    showGeneralRoll: false,

    // Boss-related state
    /** @type {Object|null} Current boss data */
    currentBoss: null,
    /** @type {Array} Array of dice throws during boss battle */
    currentDiceThrows: [],
    /** @type {number} Remaining dice rolls in boss battle */
    remainingBossRolls: 0,
    /** @type {number|null} Boss's last roll */
    bossLastRoll: null,
    /** @type {number|null} Current boss HP */
    currentBossHP: null,
    /** @type {number|null} Boss's maximum HP */
    currentBossMaxHP: null,

    // Game summary state
    /** @type {number} Total dice rolls in the game */
    totalRolls: 0,
    /** @type {number} Total dice obtained */
    diceObtained: 0,
    /** @type {number} Total bosses defeated */
    bossesDefeated: 0,
    /** @type {number} Perfect boss defeats (exact damage) */
    perfectBossDefeats: 0,
    /** @type {number} Number of bosses bribed */
    bribesBosses: 0,
    /** @type {boolean} Whether to show summary modal */
    showSummaryModal: false,
    /** @type {StageConfig} Current stage configuration */
    currentStageConfig: STAGE_CONFIGS[1],
  }),

  getters: {
    /**
     * Calculates the total number of squares on the board perimeter
     * @returns {number} Total number of squares on the board
     */
    totalBoardSquares() {
      const config = this.currentStageConfig;
      if (!config || !config.rows || !config.cols) return 0;
      const R = config.rows;
      const C = config.cols;
      if (R <= 1 || C <= 1) return R * C;
      return 2 * R + 2 * C - 4;
    },

    /**
     * Gets the IDs of the corner squares on the board
     * @returns {number[]} Array of corner square IDs
     */
    cornerSquareIds() {
      const config = this.currentStageConfig;
      if (!config || !config.rows || !config.cols || config.rows <= 1 || config.cols <= 1)
        return [];
      const R = config.rows;
      const C = config.cols;
      return [0, R - 1, R - 1 + (C - 1), R - 1 + (C - 1) + (R - 1)];
    },

    /**
     * Gets the ID of the bottom right corner square
     * @returns {number} ID of the bottom right corner square, or -1 if invalid
     */
    bottomRightCornerId() {
      const config = this.currentStageConfig;
      if (!config || !config.rows || !config.cols || config.rows <= 1 || config.cols <= 1)
        return -1;
      return config.rows - 1 + (config.cols - 1);
    },

    /**
     * Gets the IDs of squares that can have special effects
     * @returns {number[]} Array of candidate square IDs
     */
    candidateSquareIds(state) {
      if (!state.boardSquares.length) return [];
      const corners = this.cornerSquareIds;
      return state.boardSquares
        .filter((sq) => sq.baseType === "normal" && !corners.includes(sq.id))
        .map((sq) => sq.id);
    },

    /**
     * Calculates the current huge money value based on stage
     * @returns {number} Current huge money value
     */
    currentHugeMoneyValue(state) {
      return HUGE_MONEY_AMOUNT_BASE * state.playerStage;
    },

    /**
     * Gets the display string for dice bag capacity
     * @returns {string} String showing current/max dice capacity
     */
    diceBagCapacityDisplay(state) {
      return `${state.reservedDice.length}/${state.maxDiceInBag}`;
    },

    /**
     * Determines the current player action state for animations
     * @returns {string} Current player action state ('walking', 'idle', etc.)
     */
    playerActionState(state) {
      if (state.gamePhase === "player_moving_animation") {
        return "walking";
      }
      // Could add more states here, e.g., 'attacking' if gamePhase is 'boss_dice_fight'
      return "idle"; // Default state
    },
  },

  actions: {
    /**
     * Toggles the animation speed between normal, fast, and instant
     * Updates the game message to reflect the current speed
     */
    toggleAnimationSpeed() {
      if (this.animationSpeedMultiplier === 1) this.animationSpeedMultiplier = 2;
      else if (this.animationSpeedMultiplier === 2) this.animationSpeedMultiplier = 0;
      else this.animationSpeedMultiplier = 1;
      this.gameMessage = `Animation speed: ${
        this.animationSpeedMultiplier === 0
          ? "Instant"
          : this.animationSpeedMultiplier === 2
          ? "Faster"
          : "Normal"
      }`;
    },

    /**
     * Calculates the animation delay based on the current speed multiplier
     * @param {number} baseDuration - Base duration of the animation in milliseconds
     * @returns {number} Actual duration after applying the speed multiplier
     */
    getAnimationDelay(baseDuration) {
      if (this.animationSpeedMultiplier === 0) return 0;
      return baseDuration / this.animationSpeedMultiplier;
    },

    /**
     * Initializes a new game session
     * Sets up initial game state and loads the first stage
     */
    initializeGame() {
      console.log("Store: initializeGame - STARTED");
      this.assetsLoaded = true; // Assuming assets are ready (preloading on hold)
      this.playerStage = 1;
      this.isGameOver = false;
      this.isAnimating = false;
      this.reservedDice = [];
      this.playerMoney = 0; // Reset money for a new game
      this.setupStage();
      if (this.gamePhase !== "awaiting_choice") {
        this.gamePhase = "rolling";
      }
      console.log("Store: initializeGame - FINISHED. Phase:", this.gamePhase);
    },

    /**
     * Sets up a new stage with the specified configuration
     * Initializes board layout, player position, and stage-specific settings
     */
    setupStage() {
      const config = this.currentStageConfig;
      if (!config) {
        console.error("Invalid stage config");
        this.isGameOver = true;
        return;
      }
      this.boardRows = config.rows;
      this.boardCols = config.cols;
      this.playerLap = 1;
      this.playerPosition = 0;
      this.lastPlayerPositionBeforeThisMove = 0;
      // Money is not reset here per stage, only on initializeGame
      this.lastDiceRoll = null;
      this.choiceDetails = null; // Clear any pending choices
      this.currentStageBoss = null; // Explicitly nullify if boss logic is on hold

      this.generateBoardLayout();
      this.setupLapEffects();
      this.gameMessage = `Stage ${this.playerStage} - Lap ${this.playerLap}/${config.lapsToComplete}. Roll the die!`;
      this.gamePhase = "rolling";
      this.isAnimating = false; // Ensure ready for input
      console.log("Store: setupStage - FINISHED. Phase:", this.gamePhase);
    },

    /**
     * Generates the board layout for the current stage
     * Creates and positions squares on the board perimeter
     */
    generateBoardLayout() {
      const totalSquares = this.totalBoardSquares;
      const corners = this.cornerSquareIds;
      const brCornerId = this.bottomRightCornerId;
      const newLayout = [];
      for (let i = 0; i < totalSquares; i++) {
        let baseType = "normal";
        if (i === corners[0]) baseType = "start";
        else if (i === corners[1]) baseType = "corner_bl";
        else if (i === brCornerId) baseType = "corner_br";
        else if (i === corners[3]) baseType = "corner_tr";
        newLayout.push({
          id: i,
          baseType,
          currentEffectType: "none",
          isTempBad: false,
          effectDetails: null,
        });
      }
      this.boardSquares = newLayout;
      console.log("Store: Board layout generated with squares:", this.boardSquares.length);
    },

    setupLapEffects() {
      const config = this.currentStageConfig;
      console.log(
        "Store: setupLapEffects - Starting for Lap",
        this.playerLap,
        "Stage",
        this.playerStage
      );
      this.boardSquares.forEach((sq) => {
        sq.isTempBad = false;
        if (sq.baseType === "normal") {
          // Only reset normal squares' dynamic effects
          sq.currentEffectType = "none";
          sq.effectDetails = null;
        }
      });
      const squareIdToIndexMap = new Map(this.boardSquares.map((sq, index) => [sq.id, index]));
      let availableCandidateIds = [...this.candidateSquareIds];
      shuffleArray(availableCandidateIds);

      const numBadSquares = getRandomInt(config.minBadSquares, config.maxBadSquares);
      for (let i = 0; i < numBadSquares; i++) {
        if (availableCandidateIds.length === 0) break;
        const badId = availableCandidateIds.pop();
        const square = this.boardSquares[squareIdToIndexMap.get(badId)];
        if (square) {
          square.isTempBad = true;
          square.currentEffectType = "temp_bad_lap";
          square.effectDetails = { penalty: getRandomInt(5, 15) * this.playerStage };
        }
      }
      const numChoiceDiceMoney = getRandomInt(
        config.minChoiceDiceMoneySquares,
        config.maxChoiceDiceMoneySquares
      );
      for (let i = 0; i < numChoiceDiceMoney; i++) {
        if (availableCandidateIds.length === 0) break;
        const choiceId = availableCandidateIds.pop();
        const square = this.boardSquares[squareIdToIndexMap.get(choiceId)];
        if (square) square.currentEffectType = "choice_dice_money";
      }
      const numChoicePickDie = getRandomInt(
        config.minChoicePickDieSquares,
        config.maxChoicePickDieSquares
      );
      for (let i = 0; i < numChoicePickDie; i++) {
        if (availableCandidateIds.length === 0) break;
        const pickId = availableCandidateIds.pop();
        const square = this.boardSquares[squareIdToIndexMap.get(pickId)];
        if (square) square.currentEffectType = "choice_pick_die";
      }
      availableCandidateIds.forEach((id) => {
        const square = this.boardSquares[squareIdToIndexMap.get(id)];
        if (square) {
          const rand = Math.random();
          if (rand < 0.15) {
            square.currentEffectType = "huge_money";
            square.effectDetails = { amount: this.currentHugeMoneyValue };
          } else {
            square.currentEffectType = "normal_money";
            square.effectDetails = {
              amount: Math.floor(getRandomInt(1, 3) * config.moneyMultiplier),
            };
          }
        }
      });
      this.gameMessage = `Lap ${this.playerLap} board effects are set!`;
      console.log("Store: setupLapEffects - FINISHED.");
    },

    /**
     * Adds a die to the player's reserved dice bag
     * @param {Object} dieData - Data for the die to add
     * @returns {boolean} Whether the die was successfully added
     */
    addReservedDie(dieData) {
      console.log("🧩 addReservedDie called with:", dieData);
      if (!dieData) return;

      const signature = JSON.stringify(dieData);

      if (this.reservedDice.length < this.maxDiceInBag) {
        this.reservedDice.push(dieData);
        this.diceObtained++;
        this.gameMessage = `🎁 Obtuviste un dado: ${dieData.type}${
          dieData.value ? " (" + dieData.value + ")" : ""
        }`;
        console.log(
          `addReservedDie: Añadido ${signature}. Bolsa actual: ${this.reservedDice.length}`
        );
      } else {
        this.gameMessage = `🎒 Bolsa de dados llena (${this.maxDiceInBag})! No se añadió ${dieData.type}.`;
        console.warn("addReservedDie: Bolsa llena. Dado ignorado.");
      }
    },

    /**
     * Handles rolling a die (either from the bag or a normal die)
     * @param {number} reservedDieIndex - Index of the reserved die to use, or -1 for normal die
     * @returns {Promise<void>}
     */
    async rollDice(reservedDieIndex = -1) {
      if (this.gamePhase === "boss_encounter") {
        if (this.remainingBossRolls <= 0) return;

        const roll = Math.ceil(Math.random() * 6);
        this.bossLastRoll = roll;
        setTimeout(() => {
          this.bossLastRoll = null;
        }, 1000);

        this.currentDiceThrows.push(roll);
        this.remainingBossRolls--;
        this.totalRolls++;
        this.gameMessage = `Lanzaste un ${roll}. Quedan ${this.remainingBossRolls} intento(s).`;

        this.applyBossDamage(roll);

        const total = this.currentDiceThrows.reduce((a, b) => a + b, 0);

        // ✅ Derrotar inmediatamente si se alcanza la suma
        if (total >= this.currentBoss.hp) {
          await this.defeatBoss();
          return;
        }

        // Solo fallar si no alcanzaste y ya no puedes lanzar más dados
        if (this.remainingBossRolls === 0 && this.reservedDice.length === 0) {
          await this.failBossFight();
        }

        return;
      }
      if (this.isGameOver || this.gamePhase !== "rolling" || this.isAnimating) {
        console.warn("RollDice: Aborted - Conditions not met or already animating.", {
          phase: this.gamePhase,
          gameOver: this.isGameOver,
          animating: this.isAnimating,
        });
        return;
      }

      this.isAnimating = true;
      this.gamePhase = "dice_rolling_animation";
      let dieToRoll;
      let originalTypeForLastRoll;
      if (reservedDieIndex >= 0 && reservedDieIndex < this.reservedDice.length) {
        dieToRoll = this.reservedDice.splice(reservedDieIndex, 1)[0];
        originalTypeForLastRoll = dieToRoll.type;
      } else {
        dieToRoll = { type: DICE_TYPES.NORMAL };
        originalTypeForLastRoll = DICE_TYPES.NORMAL;
      }
      this.gameMessage = `Rolling a ${originalTypeForLastRoll} die...`;
      await new Promise((resolve) =>
        setTimeout(resolve, this.getAnimationDelay(this.diceRollAnimationBaseDuration))
      );
      let steps;
      switch (dieToRoll.type) {
        case DICE_TYPES.NORMAL:
          steps = getRandomInt(1, 6);
          break;
        case DICE_TYPES.FIXED:
          steps = dieToRoll.value || 1;
          break;
        case DICE_TYPES.D20:
          steps = getRandomInt(1, 20);
          break;
        case DICE_TYPES.REVERSE_FIXED:
          steps = -(dieToRoll.value || 1);
          break;
        case DICE_TYPES.REVERSE_RANDOM:
          steps = -getRandomInt(1, 6);
          break;
        default:
          steps = getRandomInt(1, 6);
      }
      this.showDieRoll(Math.abs(steps));

      let effectiveTypeForImage = originalTypeForLastRoll;
      if (steps < 0) {
        if (originalTypeForLastRoll === DICE_TYPES.NORMAL)
          effectiveTypeForImage = DICE_TYPES.REVERSE_RANDOM;
        else if (originalTypeForLastRoll === DICE_TYPES.FIXED)
          effectiveTypeForImage = DICE_TYPES.REVERSE_FIXED;
      }
      this.lastDiceRoll = {
        value: Math.abs(steps),
        type: effectiveTypeForImage,
        originalType: originalTypeForLastRoll,
        direction: steps >= 0 ? "forward" : "backward",
      };
      console.log(`Rolled ${steps} with original type ${originalTypeForLastRoll}`);
      await this.movePlayer(steps);
    },

    /**
     * Displays the result of a die roll with visual feedback
     * @param {number} number - The number rolled
     */
    showDieRoll(number) {
      this.lastGeneralRoll = number;
      this.showGeneralRollAnimation = true;
      setTimeout(() => {
        this.showGeneralRollAnimation = false;
      }, 1000); // dura lo mismo que `pop-in`
    },

    /**
     * Moves the player a specified number of steps on the board
     * @param {number} steps - Number of steps to move
     * @returns {Promise<void>}
     */
    async movePlayer(steps) {
      this.gamePhase = "player_moving_animation"; // Player is now "walking"
      let moneyEarnedThisTurn = 0;
      const totalStepsToTake = Math.abs(steps);
      const direction = steps > 0 ? 1 : -1;
      let passedStartThisTurn = false;
      this.gameMessage = `Player moving ${totalStepsToTake} steps...`;
      this.lastPlayerPositionBeforeThisMove = this.playerPosition;

      for (let i = 0; i < totalStepsToTake; i++) {
        if (this.isGameOver) break;

        if (direction > 0) {
          this.playerPosition = (this.playerPosition + 1) % this.totalBoardSquares;

          if (this.playerPosition === 0) {
            passedStartThisTurn = true;
            this.playerLap++;
            console.log("Store: movePlayer - Passed Start. New Lap:", this.playerLap);

            this.gameMessage = `Completed a lap! Now on Lap ${this.playerLap}/${this.currentStageConfig.lapsToComplete}.`;

            await new Promise((resolve) => setTimeout(resolve, this.getAnimationDelay(1000)));

            if (this.playerLap === this.currentStageConfig.lapsToComplete) {
              this.gamePhase = "boss_encounter";
              this.isAnimating = false;
              await this.handleBossEncounter();
              return;
            } else {
              this.setupLapEffects();
              await new Promise((resolve) => setTimeout(resolve, this.getAnimationDelay(500)));
            }

            break; // Detener movimiento justo al pisar la casilla 0
          }

          // Si no es la casilla 0, evalúa efectos normales
          const currentSq = this.boardSquares[this.playerPosition];
          if (
            currentSq &&
            currentSq.currentEffectType === "normal_money" &&
            currentSq.effectDetails?.amount
          ) {
            const amount = currentSq.effectDetails.amount;
            this.playerMoney += amount;
            moneyEarnedThisTurn += amount;
          }
        } else {
          this.playerPosition =
            (this.playerPosition - 1 + this.totalBoardSquares) % this.totalBoardSquares;
        }

        await new Promise((resolve) =>
          setTimeout(resolve, this.getAnimationDelay(this.playerStepBaseDuration))
        );
      }

      // --- After movement animation is complete ---
      let landedMessage = "";

      if (passedStartThisTurn) {
        this.gameMessage = `Completed a lap! Now on Lap ${this.playerLap}/${this.currentStageConfig.lapsToComplete}.`;
        console.log("Store: movePlayer - Lap completed processing. Current Lap:", this.playerLap);

        await new Promise((resolve) => setTimeout(resolve, this.getAnimationDelay(1000)));

        if (this.playerLap === this.currentStageConfig.lapsToComplete) {
          this.gamePhase = "boss_encounter";
          this.isAnimating = false;
          await this.handleBossEncounter();
          return; // Detener aquí mismo tras comenzar encuentro con el jefe
        } else {
          this.setupLapEffects();
          await new Promise((resolve) => setTimeout(resolve, this.getAnimationDelay(500)));
        }
      }

      this.gamePhase = "landed"; // Player has landed, sprite should go to idle

      landedMessage = `Landed on square ${this.playerPosition}.`;
      if (moneyEarnedThisTurn > 0 && direction > 0) {
        landedMessage += ` Earned $${moneyEarnedThisTurn} this turn.`;
      }

      this.gameMessage = (this.gameMessage + " " + landedMessage).trim();

      console.log(
        "Store: movePlayer - Before handleSquareLanding. Phase:",
        this.gamePhase,
        "isAnimating:",
        this.isAnimating
      );
      this.handleSquareLanding();

      console.log(
        "Store: movePlayer - After handleSquareLanding. Phase:",
        this.gamePhase,
        "isAnimating:",
        this.isAnimating
      );

      if (this.gamePhase === "awaiting_choice") {
        this.isAnimating = false;
        console.log("Store: movePlayer - Ended in awaiting_choice. isAnimating set to false.");
      } else if (this.gamePhase !== "boss_encounter_intro" && !this.isGameOver) {
        this.gamePhase = "rolling";
        this.isAnimating = false;
        console.log("Store: movePlayer - Ended, phase set to rolling. isAnimating set to false.");
      } else if (this.isGameOver) {
        this.isAnimating = false;
        console.log("Store: movePlayer - Ended, game is over. isAnimating set to false.");
      }
    },

    /**
     * Highlights a square that would be landed on by a specific die
     * @param {Object} die - The die object to simulate rolling
     */
    highlightSquareForDie(die) {
      if (!die || !this.boardSquares.length) {
        this.highlightedTargetSquare = null;
        return;
      }

      const nonPredictableTypes = ["normal", "d20", "reverse_random"];
      const type = die.type?.toLowerCase?.();

      if (!die.value || nonPredictableTypes.includes(type)) {
        this.highlightedTargetSquare = null;
        return;
      }

      const steps = type.includes("reverse") ? -die.value : die.value;
      const total = this.boardSquares.length;
      const target = (this.playerPosition + steps + total) % total;

      this.highlightedTargetSquare = target;
    },

    /**
     * Clears any highlighted squares on the board
     */
    clearHighlightedSquare() {
      this.highlightedTargetSquare = null;
    },

    /**
     * Resets the game state to initial values
     * Used when starting a new game or after game over
     */
    resetGame() {
      this.playerMoney = 0;
      this.playerLap = 0;
      this.playerStage = 1;
      this.totalRolls = 0;
      this.diceObtained = 0;
      this.bossesDefeated = 0;
      this.perfectBossDefeats = 0;
      this.bribesBosses = 0;
      this.reservedDice = [];
      this.lastDiceRoll = null;
      this.currentDiceThrows = [];
      this.remainingBossRolls = 0;
      this.currentBoss = null;
      this.gamePhase = "rolling";
      this.isGameOver = false;
      this.showSummaryModal = false;
      this.currentStageConfig = STAGE_CONFIGS[1];
      this.setupStage(); // Reinitialize the stage
    },

    /**
     * Handles the effects when a player lands on a square
     * Processes square effects and updates game state accordingly
     * @returns {Promise<void>}
     */
    handleSquareLanding() {
      if (this.isGameOver || (this.isAnimating && this.gamePhase !== "landed")) {
        console.warn("Store: handleSquareLanding - Aborted.", {
          phase: this.gamePhase,
          animating: this.isAnimating,
          gameOver: this.isGameOver,
        });
        return;
      }
      if (
        !this.boardSquares ||
        this.playerPosition < 0 ||
        this.playerPosition >= this.boardSquares.length
      ) {
        this.gamePhase = "rolling";
        this.isAnimating = false;
        return;
      }
      const square = this.boardSquares[this.playerPosition];
      let effectAppliedMessage = "";
      console.log(
        "Store: handleSquareLanding - Processing square:",
        JSON.parse(JSON.stringify(square))
      );
      if (square.baseType === "corner_br") {
        this.playerMoney -= 20;
        effectAppliedMessage += ` Bad corner! Lost $20.`;
      }
      switch (square.currentEffectType) {
        case "temp_bad_lap": {
          const penalty = square.effectDetails?.penalty || getRandomInt(5, 15) * this.playerStage;
          this.playerMoney -= penalty;
          effectAppliedMessage += ` Trap! -$${penalty}.`;
          break;
        }
        case "huge_money": {
          const hugeGain = square.effectDetails?.amount || this.currentHugeMoneyValue;
          this.playerMoney += hugeGain;
          effectAppliedMessage += ` Huge! +$${hugeGain}.`;
          square.currentEffectType = "none";
          square.effectDetails = null;
          break;
        }
        case "choice_dice_money": {
          this.gamePhase = "awaiting_choice";
          let offeredDieInChoice;
          const rdc = Math.random();
          if (rdc < 0.6) offeredDieInChoice = { type: DICE_TYPES.FIXED, value: getRandomInt(2, 6) };
          else if (rdc < 0.85) offeredDieInChoice = { type: DICE_TYPES.REVERSE_RANDOM };
          else offeredDieInChoice = { type: DICE_TYPES.D20 };
          this.choiceDetails = {
            type: "dice_vs_money",
            message: "Choose reward:",
            options: [
              {
                text: `Get $${10 * this.playerStage}`,
                action: "get_money_bonus",
                value: 10 * this.playerStage,
                visual: { type: "money" },
              },
              {
                text: `Get ${offeredDieInChoice.type}${
                  offeredDieInChoice.value ? " (" + offeredDieInChoice.value + ")" : ""
                } Die`,
                action: "get_chosen_die",
                value: offeredDieInChoice,
                visual: { type: "die", dieData: offeredDieInChoice },
              },
            ],
          };
          effectAppliedMessage += " " + this.choiceDetails.message;
          break;
        }
        case "choice_pick_die": {
          this.gamePhase = "awaiting_choice";
          const dPool = [
            { type: DICE_TYPES.FIXED, value: 1 },
            { type: DICE_TYPES.FIXED, value: 2 },
            { type: DICE_TYPES.FIXED, value: 3 },
            { type: DICE_TYPES.FIXED, value: 4 },
            { type: DICE_TYPES.FIXED, value: 5 },
            { type: DICE_TYPES.FIXED, value: 6 },
            { type: DICE_TYPES.D20 },
            { type: DICE_TYPES.REVERSE_RANDOM },
            { type: DICE_TYPES.REVERSE_FIXED, value: getRandomInt(1, 6) },
            { type: DICE_TYPES.NORMAL },
          ];
          shuffleArray(dPool);
          const numOffer = getRandomInt(3, 4);
          const finalOpts = [];
          const sigs = new Set();
          for (const d of dPool) {
            if (finalOpts.length >= numOffer) break;
            let sig = d.type;
            if (d.type === DICE_TYPES.FIXED || d.type === DICE_TYPES.REVERSE_FIXED)
              sig += `_${d.value}`;
            if (!sigs.has(sig)) {
              finalOpts.push({
                text: `Die: ${d.type}${d.value !== undefined ? " (" + d.value + ")" : ""}`,
                action: "get_chosen_die",
                value: { ...d },
                visual: { type: "die", dieData: { ...d } },
              });
              sigs.add(sig);
            }
          }
          this.choiceDetails = {
            type: "pick_a_die",
            message: `Choose a die (${finalOpts.length} options):`,
            options: finalOpts,
          };
          effectAppliedMessage += " " + this.choiceDetails.message;
          break;
        }
      }
      this.gameMessage = (this.gameMessage + " " + effectAppliedMessage).trim();
      console.log(
        "Store: handleSquareLanding - Finished. Final message:",
        this.gameMessage,
        "Phase:",
        this.gamePhase
      );
    },

    /**
     * Applies the effect of a specific square when landed on
     * @param {Object} square - The square object to apply effects from
     */
    applySquareEffect(square) {
      switch (square.currentEffectType) {
        case "temp_bad_lap":
          return this.handleTempBadLap(square);
        case "huge_money":
          return this.handleHugeMoney(square);
        case "choice_dice_money":
          return this.handleChoiceDiceMoney();
        case "choice_pick_die":
          return this.handleChoicePickDie();
        default:
          return "";
      }
    },

    /**
     * Handles temporary bad effects for the current lap
     * @param {Object} square - The square that triggered the bad effect
     */
    handleTempBadLap(square) {
      const penalty = square.effectDetails?.penalty || getRandomInt(5, 15) * this.playerStage;
      this.playerMoney -= penalty;
      return ` Stepped on a trap! Lost $${penalty}.`;
    },

    /**
     * Handles landing on a huge money square
     * @param {Object} square - The square with the huge money effect
     */
    handleHugeMoney(square) {
      const hugeGain = square.effectDetails?.amount || this.currentHugeMoneyValue;
      this.playerMoney += hugeGain;
      square.currentEffectType = "none";
      square.effectDetails = null;
      return ` Huge Money! +$${hugeGain}.`;
    },

    /**
     * Handles the choice between getting a die or money
     * Sets up the choice interface for the player
     */
    handleChoiceDiceMoney() {
      this.gamePhase = "awaiting_choice";
      let offeredDieInChoice;
      const randDieChoice = Math.random();
      if (randDieChoice < 0.6)
        offeredDieInChoice = { type: DICE_TYPES.FIXED, value: getRandomInt(2, 6) };
      else if (randDieChoice < 0.85) offeredDieInChoice = { type: DICE_TYPES.REVERSE_RANDOM };
      else offeredDieInChoice = { type: DICE_TYPES.D20 };
      this.choiceDetails = {
        type: "dice_vs_money",
        message: "Choose your reward:",
        options: [
          {
            text: `Get $${10 * this.playerStage}`,
            action: "get_money_bonus",
            value: 10 * this.playerStage,
            visual: { type: "money" },
          },
          {
            text: `Get a ${offeredDieInChoice.type}${
              offeredDieInChoice.value ? " (" + offeredDieInChoice.value + ")" : ""
            } Die`,
            action: "get_chosen_die",
            value: offeredDieInChoice,
            visual: { type: "die", dieData: offeredDieInChoice },
          },
        ],
      };
      console.log(
        "Store: handleSquareLanding - Set gamePhase to awaiting_choice for dice_vs_money."
      );
      return " " + this.choiceDetails.message;
    },

    /**
     * Handles the choice of picking a specific die
     * Sets up the die selection interface for the player
     */
    handleChoicePickDie() {
      this.gamePhase = "awaiting_choice";
      const dicePool = [
        { type: DICE_TYPES.FIXED, value: 1 },
        { type: DICE_TYPES.FIXED, value: 2 },
        { type: DICE_TYPES.FIXED, value: 3 },
        { type: DICE_TYPES.FIXED, value: 4 },
        { type: DICE_TYPES.FIXED, value: 5 },
        { type: DICE_TYPES.FIXED, value: 6 },
        { type: DICE_TYPES.D20 },
        { type: DICE_TYPES.REVERSE_RANDOM },
        { type: DICE_TYPES.REVERSE_FIXED, value: getRandomInt(1, 6) },
        { type: DICE_TYPES.NORMAL },
      ];
      shuffleArray(dicePool);
      const numDiceToOffer = getRandomInt(3, 4);
      const finalDiceOptions = [];
      const offeredSignatures = new Set();
      for (const die of dicePool) {
        if (finalDiceOptions.length >= numDiceToOffer) break;
        let signature = die.type;
        if (die.type === DICE_TYPES.FIXED || die.type === DICE_TYPES.REVERSE_FIXED)
          signature += `_${die.value}`;
        if (!offeredSignatures.has(signature)) {
          finalDiceOptions.push({
            text: `Die: ${die.type}${die.value !== undefined ? " (" + die.value + ")" : ""}`,
            action: "get_chosen_die",
            value: { ...die },
            visual: { type: "die", dieData: { ...die } },
          });
          offeredSignatures.add(signature);
        }
      }
      this.choiceDetails = {
        type: "pick_a_die",
        message: `Choose a die (${finalDiceOptions.length} options):`,
        options: finalDiceOptions,
      };
      console.log("Store: handleSquareLanding - Set gamePhase to awaiting_choice for pick_a_die.");
      return " " + this.choiceDetails.message;
    },

    /**
     * Processes the player's choice from a choice event
     * @param {*} chosenOption - The option chosen by the player
     * @returns {Promise<void>}
     */
    async playerMakesChoice(chosenOption) {
      console.log("🎯 playerMakesChoice: opción de dado elegida", chosenOption.value);
      if (this.gamePhase !== "awaiting_choice" || !this.choiceDetails) return;
      this.isAnimating = true;
      const oSI = this.playerPosition;
      switch (chosenOption.action) {
        case "get_money_bonus":
          this.playerMoney += chosenOption.value;
          this.gameMessage = `Chose money! +$${chosenOption.value}.`;
          break;
        case "get_chosen_die":
          this.addReservedDie(chosenOption.value);
          break;
      }
      if (oSI >= 0 && oSI < this.boardSquares.length) {
        this.boardSquares[oSI].currentEffectType = "none";
        this.boardSquares[oSI].effectDetails = null;
      }
      await new Promise((resolve) => setTimeout(resolve, this.getAnimationDelay(500)));
      this.choiceDetails = null;
      this.gamePhase = "rolling";
      this.isAnimating = false;
    },

    // --- Boss Actions ---

    /**
     * Initiates a boss encounter
     * Sets up the boss battle state and interface
     * @returns {Promise<void>}
     */
    async handleBossEncounter() {
      const stageConfig = STAGE_CONFIGS[this.playerStage];
      this.currentBoss = {
        ...stageConfig.bossDefeatCondition,
        image: stageConfig.bossImage,
        name: stageConfig.bossName,
      };

      this.remainingBossRolls = this.currentBoss.diceThrows;
      this.currentBossHP = this.currentBoss.hp;
      this.currentBossMaxHP = this.currentBoss.hp;
      this.currentDiceThrows = [];
      this.gamePhase = "boss_encounter";
      this.isAnimating = false;
    },

    /**
     * Applies damage to the current boss
     * @param {number} totalDiceValue - Total damage to apply to the boss
     */
    applyBossDamage(totalDiceValue) {
      if (this.currentBossHP == null) return;
      this.currentBossHP -= totalDiceValue;
    },

    /**
     * Handles paying to defeat/skip the current boss
     * @returns {Promise<void>}
     */
    payToDefeatBoss() {
      if (!this.currentBoss || this.currentBoss.bribeCost == null) return;

      const bribe = Number(this.currentBoss.bribeCost);
      const currentMoney = this.playerMoney;

      if (currentMoney >= bribe) {
        this.playerMoney -= bribe;
        this.bribesBosses++;
        this.gameMessage = `Has sobornado a ${this.currentBoss.name} por $${bribe}`;
        this.defeatBoss(true);
      } else {
        alert("No tienes suficiente dinero para pagarle al jefe.");
      }
    },

    /**
     * Handles rolling dice during a boss battle
     * @param {Object} die - The die to roll against the boss
     * @returns {Promise<void>}
     */
    async rollDiceForBoss(die) {
      if (this.gamePhase !== "boss_encounter") return;

      const dieIndex = this.reservedDice.indexOf(die);
      if (dieIndex !== -1) {
        this.reservedDice.splice(dieIndex, 1);
      }

      let roll;
      // Manejar cada tipo de dado específicamente
      switch (die.type) {
        case DICE_TYPES.D20:
          roll = getRandomInt(1, 20);
          this.gameMessage = `Usaste un dado D20 y obtuviste un ${roll}!`;
          break;
        case DICE_TYPES.FIXED:
          roll = die.value;
          this.gameMessage = `Usaste un dado fijo de ${roll}`;
          break;
        case DICE_TYPES.REVERSE_FIXED:
          roll = die.value;
          this.gameMessage = `Usaste un dado fijo inverso de ${roll}`;
          break;
        case DICE_TYPES.REVERSE_RANDOM:
          roll = getRandomInt(1, 6);
          this.gameMessage = `Usaste un dado aleatorio inverso y obtuviste un ${roll}`;
          break;
        default: // DICE_TYPES.NORMAL
          roll = getRandomInt(1, 6);
          this.gameMessage = `Usaste un dado normal y obtuviste un ${roll}`;
      }

      this.bossLastRoll = roll;
      setTimeout(() => {
        this.bossLastRoll = null;
      }, 1000);

      this.currentDiceThrows.push(roll);
      this.totalRolls++;

      this.applyBossDamage(roll);

      const total = this.currentDiceThrows.reduce((a, b) => a + b, 0);
      this.gameMessage += `. Daño total: ${total}/${this.currentBoss.hp}`;

      if (total >= this.currentBoss.hp) {
        await this.defeatBoss();
        return;
      }

      if (
        this.gamePhase === "boss_encounter" &&
        this.remainingBossRolls === 0 &&
        this.reservedDice.length === 0
      ) {
        await this.failBossFight();
      }
    },

    /**
     * Checks if the boss battle should end
     * Evaluates victory/defeat conditions
     */
    checkEndOfBossBattle() {
      const total = this.currentDiceThrows.reduce((a, b) => a + b, 0);

      if (total >= this.currentBoss.hp) {
        this.defeatBoss();
      } else if (this.remainingBossRolls === 0 && this.reservedDice.length === 0) {
        this.failBossFight();
      }
    },

    /**
     * Rolls a custom die and returns its result
     * @param {Object} die - The die object to roll
     * @returns {number} The result of the roll
     */
    async rollCustomDie(die) {
      let result;
      switch (die.type) {
        case DICE_TYPES.FIXED:
          result = die.value || 1; // Ensure value if fixed
          break;
        case DICE_TYPES.REVERSE_RANDOM:
          result = getRandomInt(1, 6); // For boss, usually positive outcome desired
          break;
        case DICE_TYPES.D20:
          result = getRandomInt(1, 20);
          break;
        default: // Includes DICE_TYPES.NORMAL
          result = getRandomInt(1, 6);
      }
      return result;
    },

    /**
     * Handles defeating the current boss
     * @param {boolean} wasBribed - Whether the boss was defeated through bribery
     * @returns {Promise<void>}
     */
    async defeatBoss(wasBribed = false) {
      if (!wasBribed) {
        this.bossesDefeated++;
        // Check if this was a perfect defeat
        const totalDamage = this.currentDiceThrows.reduce((a, b) => a + b, 0);
        if (totalDamage === this.currentBoss.hp) {
          this.perfectBossDefeats++;
          this.gameMessage = "¡Has derrotado al jefe con daño exacto! ¡Perfecto!";
        } else {
          this.gameMessage = "¡Has derrotado al jefe!";
        }
      }

      await new Promise((res) => setTimeout(res, 500));

      this.playerStage++;

      if (this.playerStage > Object.keys(STAGE_CONFIGS).length) {
        this.isGameOver = true;
        this.showSummaryModal = true;
        return;
      }

      this.playerLap = 0;
      this.currentDiceThrows = [];
      this.remainingBossRolls = 0;
      this.gamePhase = "rolling";
      const nextStageConfig = STAGE_CONFIGS[this.playerStage];
      if (!nextStageConfig) {
        console.error("No config found for stage", this.playerStage);
        return;
      }
      this.currentStageConfig = JSON.parse(JSON.stringify(nextStageConfig));
      this.setupStage(); // ← ESTA LÍNEA ESCLAVEMENTE NECESARIA
    },

    /**
     * Handles failing the boss fight
     * Resets player position and updates game state
     * @returns {Promise<void>}
     */
    async failBossFight() {
      this.gameMessage = `Has fallado en derrotar a ${this.currentStageConfig.bossName}...`;
      await new Promise((res) => setTimeout(res, 1500));
      this.isGameOver = true;
      this.gamePhase = "game_lost";
      this.showSummaryModal = true;
    },

    /**
     * Advances to the next stage
     * Updates game state and sets up the new stage
     * @returns {Promise<void>}
     */
    async advanceStage() {
      this.playerStage++;
      if (this.playerStage > MAX_STAGES) {
        this.gameMessage = "CONGRATULATIONS! You've beaten all stages!";
        this.isGameOver = true;
        this.gamePhase = "game_won";
        this.isAnimating = false;
      } else {
        this.setupStage(); // This sets gamePhase to rolling and isAnimating to false
        // gameMessage is set by setupStage
        this.gameMessage = `Stage ${this.playerStage} begins! ` + this.gameMessage;
      }
      console.log(
        "Store: advanceStage - Finished. Phase:",
        this.gamePhase,
        "isAnimating:",
        this.isAnimating
      );
    },
  },
});
