// In your backend, e.g., models/GameSession.js
const mongoose = require("mongoose");

const gameSessionSchema = new mongoose.Schema(
  {
    // Link to a user if you have authentication
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    // Player State (from Pinia's state)
    playerPosition: { type: Number, default: 0 },
    playerMoney: { type: Number, default: 0 },
    playerLap: { type: Number, default: 1 },
    playerStage: { type: Number, default: 1 },
    lastDiceRoll: { type: Number, default: null },
    isGameOver: { type: Boolean, default: false },
    gamePhase: { type: String, default: "rolling" }, // e.g., 'rolling', 'choosing', 'moving'
    choiceDetails: {
      type: Object,
      default: null,
    },

    // Player Inventory
    reservedDice: [
      {
        type: { type: String, required: true }, // e.g., 'Fixed', 'D20'
        value: { type: Number }, // Only for fixed-value dice
      },
    ],
    maxDiceInBag: { type: Number, default: 15 }, // Default max reserved dice

    // Board State (need to decide if this changes per player or is generated)
    // The dynamically generated squares can be stored here.
    boardRows: { type: Number, default: 6 }, // Default to 3 rows
    boardCols: { type: Number, default: 6 }, // Default to 3 columns
    boardSquares: [
      {
        id: Number,
        baseType: String,
        currentEffectType: String,
        isTempBad: Boolean,
        effectDetails: Object,
      },
    ],

    animationSpeedMultiplier: { type: Number, default: 1 },
    isAnimating: { type: Boolean, default: false },
    diceRollAnimationBaseDuration: { type: Number, default: 1000 },
    playerStepBaseDuration: { type: Number, default: 300 },
    lastPlayerPositionBeforeThisMove: { type: Number, default: 0 },
    assetsLoaded: { type: Boolean, default: false },

    // Summary Stats
    totalRolls: { type: Number, default: 0 },
    bossesDefeated: { type: Number, default: 0 },
    diceObtained: { type: Number, default: 0 },
    perfectBossDefeats: { type: Number, default: 0 },
    bribesBosses: { type: Number, default: 0 },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt

const GameSession = mongoose.model("GameSession", gameSessionSchema);
export default GameSession;
