// In your backend, e.g., models/GameSession.js
import mongoose from "mongoose";

const gameSessionSchema = new mongoose.Schema(
  {
    // Link to a user if you have authentication
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    // Player State (from Pinia's state)
    playerPosition: { type: Number, default: 0 },
    playerMoney: { type: Number, default: 0 },
    playerLap: { type: Number, default: 1 },
    playerStage: { type: Number, default: 1 },
    isGameOver: { type: Boolean, default: false },

    // Player Inventory
    reservedDice: [
      {
        type: { type: String, required: true }, // e.g., 'Fixed', 'D20'
        value: { type: Number }, // Only for fixed-value dice
      },
    ],

    // Board State (need to decide if this changes per player or is generated)
    // The dynamically generated squares can be stored here.
    boardSquares: [
      {
        id: Number,
        baseType: String,
        currentEffectType: String,
        isTempBad: Boolean,
        effectDetails: Object,
      },
    ],

    // Summary Stats
    totalRolls: { type: Number, default: 0 },
    bossesDefeated: { type: Number, default: 0 },
    // ... and other summary stats
  },
  { timestamps: true }
); // Adds createdAt and updatedAt

const GameSession = mongoose.model("GameSession", gameSessionSchema);
export default GameSession;
