const express = require("express");
const router = express.Router();
const GameSession = require("../models/GameSession");
const User = require("../models/User");
const {
  initializeNewGame,
  handlePlayerTurn,
  handlePlayerChoice,
  handlePlayerBribe,
  handleThiefSkill,
  handleWizardSkill,
  handleFleeMinion,
} = require("../services/gameLogic");

// POST /api/game/start - Creates a new game session
router.post("/start", async (req, res) => {
  try {
    console.log("Backend: Request received to start a new game.");

    // The initializeNewGame function now handles the options from the request body
    const initialGameState = initializeNewGame(req.body);

    const session = new GameSession(initialGameState);

    await session.save();

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
    const { reservedDieIndex, skillState } = req.body;
    if (reservedDieIndex === undefined || reservedDieIndex === null) {
      return res
        .status(400)
        .json({ message: "A die must be selected from the pouch." });
    }

    /** 1. Cargamos la sesión y el usuario si existe */
    const doc = await GameSession.findById(req.params.id);
    if (!doc || doc.isGameOver) {
      return res.status(404).json({ message: "Game not found or is over" });
    }

    let user = null;
    if (doc.userId) {
      user = await User.findById(doc.userId);
    }

    /** 2. Lo convertimos en un objeto JS *sin* getters ni metadatos.
        Trabajaremos sobre él para no depender de Mongoose durante la lógica. */
    const state = doc.toObject({ depopulate: true, versionKey: false });

    // Overwrite the DB skill state with the one from the client
    // to prevent race conditions where the toggle hasn't saved yet.
    if (skillState) {
      state.skillState = skillState;
    }

    /** 3. Aplicamos la lógica del turno (esto muta `state` y `user`) */
    const result = handlePlayerTurn(
      state,
      reservedDieIndex,
      user ? user.toObject() : null
    );
    const { updatedState, updatedUser } = result;

    /** 4. Persistimos el nuevo estado en Mongo copiándolo a `doc` y `user` */
    Object.assign(doc, updatedState);
    doc.markModified("boardSquares");
    doc.markModified("choiceDetails");
    doc.markModified("currentBoss");
    doc.markModified("stats");
    await doc.save();

    if (user && updatedUser) {
      // Only save the user if the logic function actually returned an updated version
      if (result.updatedUser) {
        user.stats = updatedUser.stats;
        user.achievements = updatedUser.achievements;
        await user.save();
      }
    }

    /** 5. Enviamos al cliente *exactamente* lo que acaba de generar la lógica */
    res.json({ updatedState, updatedUser });
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

// POST /api/game/:id/bribe - New endpoint for bribing the boss
router.post("/:id/bribe", async (req, res) => {
  try {
    let session = await GameSession.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Game not found" });

    let user = null;
    if (session.userId) {
      user = await User.findById(session.userId);
    }

    const { updatedState, updatedUser, error } = handlePlayerBribe(
      session.toObject(),
      user ? user.toObject() : null
    );

    if (error) {
      return res.status(400).json({ message: error });
    }

    Object.assign(session, updatedState);
    session.markModified("boardSquares");
    await session.save();

    if (user && updatedUser) {
      user.stats = updatedUser.stats;
      user.achievements = updatedUser.achievements;
      await user.save();
    }

    res.json({ updatedState, updatedUser });
  } catch (err) {
    console.error("Error during /bribe:", err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/game/:id/boss-pay
router.post("/:id/boss-pay", (req, res) =>
  res.json({ message: "Endpoint not implemented" })
);

// POST /api/game/:id/flee
router.post("/:id/flee", async (req, res) => {
  try {
    let session = await GameSession.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Game not found" });

    const { updatedState, error } = handleFleeMinion(session.toObject());

    if (error) {
      return res.status(400).json({ message: error });
    }

    Object.assign(session, updatedState);
    session.markModified("boardSquares");
    await session.save();

    res.json(updatedState);
  } catch (err) {
    console.error("Error during /flee:", err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/game/:id/reset
router.post("/:id/reset", (req, res) =>
  res.json({ message: "Endpoint not implemented" })
);

router.post("/:id/skill/toggle", async (req, res) => {
  try {
    const doc = await GameSession.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Game not found" });

    const { isActive } = req.body;
    doc.skillState.isActive = !!isActive;

    await doc.save();
    res.json(doc.toObject());
  } catch (err) {
    console.error("Error during skill toggle:", err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/:id/skin", async (req, res) => {
  try {
    const doc = await GameSession.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Game not found" });

    const { playerSkin } = req.body;
    if (!playerSkin) {
      return res.status(400).json({ message: "No skin provided." });
    }
    doc.playerSkin = playerSkin;

    await doc.save();
    res.json(doc.toObject());
  } catch (err) {
    console.error("Error during skin update:", err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/:id/skill/use", async (req, res) => {
  try {
    let session = await GameSession.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Game not found" });

    const { dieIndex, skillState } = req.body;
    let result;

    // Convert to plain object to pass to logic functions
    const state = session.toObject();

    // Overwrite with client state to prevent race condition
    if (skillState) {
      state.skillState = skillState;
    }

    if (state.playerCharacter === "thief") {
      result = handleThiefSkill(state);
    } else if (state.playerCharacter === "wizard") {
      result = handleWizardSkill(state, dieIndex);
    } else {
      return res
        .status(400)
        .json({ message: "Skill not usable for this character." });
    }

    if (result.error) {
      return res.status(400).json({ message: result.error });
    }

    const { updatedState, updatedUser } = result;

    // Apply changes back to the document and save
    Object.assign(session, updatedState);
    session.markModified("reservedDice");
    session.markModified("skillState");
    await session.save();

    let user = null;
    if (session.userId) {
      user = await User.findById(session.userId);
    }

    if (user && updatedUser) {
      user.stats = updatedUser.stats;
      user.achievements = updatedUser.achievements;
      await user.save();
    }

    res.json({ updatedState, updatedUser });
  } catch (err) {
    console.error("Error during skill use:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
