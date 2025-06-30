const express = require("express");
const router = express.Router();
const GameSession = require("../models/GameSession");
const {
  initializeNewGame,
  handlePlayerTurn,
  handlePlayerChoice,
} = require("../services/gameLogic");

// POST /api/game/start - Creates a new game session
router.post("/start", async (req, res) => {
  try {
    console.log("Backend: Request received to start a new game.");

    // 1. GENERATE the full initial game state
    const initialGameState = initializeNewGame();

    // 2. OPTIONAL: Set character and skin if provided by frontend
    if (req.body.playerCharacter) {
      initialGameState.playerCharacter = req.body.playerCharacter;
    }
    if (req.body.playerSkin) {
      initialGameState.playerSkin = req.body.playerSkin;
    }

    // 3. CREATE a new Mongoose document with this complete state
    const session = new GameSession(initialGameState);

    // 4. SAVE it to the database
    await session.save();

    // 5. RESPOND with the created session
    res.status(201).json(session);
  } catch (err) {
    console.error("Error creating new game:", err);
    res.status(500).json({ error: err.message });
  }
});


// GET /api/game/:id - Gets an existing game session (This route is already good!)
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

// POST /api/game/:id/roll
router.post("/:id/roll", async (req, res) => {
  try {
    let session = await GameSession.findById(req.params.id);
    if (!session || session.isGameOver)
      return res.status(404).json({ message: "Game not found or is over" });

    const { reservedDieIndex } = req.body;
    session = handlePlayerTurn(session, reservedDieIndex);

    // Tell Mongoose these nested objects have changed before saving
    session.markModified("boardSquares");
    session.markModified("choiceDetails");

    const updatedSession = await session.save();
    res.json(updatedSession);
  } catch (err) {
    console.error("Error during /roll:", err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/game/:id/choice
router.post("/:id/choice", async (req, res) => {
  try {
    let session = await GameSession.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Game not found" });

    const { chosenOption } = req.body;
    if (!chosenOption)
      return res.status(400).json({ message: "No choice provided" });

    session = handlePlayerChoice(session, chosenOption);

    session.markModified("boardSquares");
    session.markModified("choiceDetails");

    const updatedSession = await session.save();
    res.json(updatedSession);
  } catch (err) {
    console.error("Error during /choice:", err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/game/:id/boss-pay
router.post("/:id/boss-pay", (req, res) =>
  res.json({ message: "Endpoint not implemented" })
);

// POST /api/game/:id/reset
router.post("/:id/reset", (req, res) =>
  res.json({ message: "Endpoint not implemented" })
);

module.exports = router;
