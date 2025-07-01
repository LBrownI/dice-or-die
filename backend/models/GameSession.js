// backend/models/GameSession.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSessionSchema = new Schema(
  {
    playerPosition: { type: Number, default: 0 },
    playerMoney: { type: Number, default: 0 },
    playerLap: { type: Number, default: 1 },
    playerStage: { type: Number, default: 1 },
    playerCharacter: { type: String, default: "knight" },
    playerSkin: { type: String, default: "blue" },
    lastDiceRoll: { type: Object, default: null },
    isGameOver: { type: Boolean, default: false },
    gamePhase: { type: String, default: "rolling" },
    choiceDetails: { type: Object, default: null },

    reservedDice: [Object],
    maxDiceInBag: { type: Number, default: 15 },

    boardRows: { type: Number, default: 6 },
    boardCols: { type: Number, default: 6 },
    boardSquares: [Object],

    animationSpeedMultiplier: { type: Number, default: 1 },
    isAnimating: { type: Boolean, default: false },
    diceRollAnimationBaseDuration: { type: Number, default: 1000 },
    playerStepBaseDuration: { type: Number, default: 300 },
    lastPlayerPositionBeforeThisMove: { type: Number, default: 0 },

    totalRolls: { type: Number, default: 0 },
    bossesDefeated: { type: Number, default: 0 },
    diceObtained: { type: Number, default: 0 },
    perfectBossDefeats: { type: Number, default: 0 },
    bribesBosses: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    strict: false,     // permite guardar/leer claves no declaradas
  }
);

module.exports = mongoose.model("GameSession", gameSessionSchema);
