var express = require("express");
var router = express.Router();

// In your Express routes file
import GameSession from "../models/GameSession.js";
// Import your game logic functions (rollDice, movePlayer, etc.)
import { performRoll } from "../services/gameLogic.js";

app.post("/api/game/:sessionId/roll", async (req, res) => {
  try {
    // 1. LOAD the game session from MongoDB
    const game = await GameSession.findById(req.params.sessionId);

    if (!game || game.isGameOver) {
      return res.status(400).json({ message: "Game not found or is over." });
    }

    // 2. MODIFY the state by calling your game logic service
    // The `performRoll` function would contain the logic from your old Pinia action.
    const updatedGame = performRoll(game); // This function modifies the 'game' object

    // 3. SAVE the modified object back to the database
    await updatedGame.save();

    // 4. RESPOND to the client with the new state
    res.json(updatedGame);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
