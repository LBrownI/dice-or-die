// backend/routes/game.js
const express = require("express");
const router = express.Router();
const GameSession = require("../models/GameSession");

// Import your original game logic/config here
// For example, you might have a services/gameLogic.js file
// that contains the logic from your old Pinia store.

// POST /api/game/start - Creates a new game session
router.post("/start", async (req, res) => {
  try {
    console.log("Backend: Received request to start a new game.");

    // SERVER-SIDE LOGIC TO CREATE THE GAME STATE
    // This is where your old 'initializeGame' and 'setupStage' logic from Pinia belongs.
    const initialGameState = {
      // You can add a userId here if the user is logged in: req.user.id
      playerStage: 1,
      playerLap: 1,
      playerMoney: 0,
      playerPosition: 0,
      isGameOver: false,
      reservedDice: [],
      // You would call a function here to generate the initial board layout
      // boardSquares: generateInitialBoard(),
    };

    const session = new GameSession(initialGameState);
    await session.save();

    // Respond with the newly created and saved game session
    res.status(201).json(session);
  } catch (err) {
    console.error("Error creating new game:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/game/:id - Gets an existing game session
router.get("/:id", async (req, res) => {
  try {
    const session = await GameSession.findById(req.params.id);
    if (!session)
      return res.status(404).json({ error: "Game session not found" });
    res.json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/game/:id - Updates a game session (e.g., after a turn)
router.put("/:id", async (req, res) => {
  try {
    // Note: It's better to have specific routes like /:id/roll
    // than a generic PUT, but this works for now.
    const session = await GameSession.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // This option returns the updated document
    );
    if (!session)
      return res.status(404).json({ error: "Game session not found" });
    res.json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
