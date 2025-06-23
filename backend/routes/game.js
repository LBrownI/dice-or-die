import express from "express";
import GameSession from "../models/GameSession.js";
const router = express.Router();

// Create new game session
router.post("/", async (req, res) => {
  try {
    const session = new GameSession(req.body);
    await session.save();
    res.status(201).json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get game session
router.get("/:id", async (req, res) => {
  try {
    const session = await GameSession.findById(req.params.id);
    if (!session) return res.status(404).json({ error: "Not found" });
    res.json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update game session
router.put("/:id", async (req, res) => {
  try {
    const session = await GameSession.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!session) return res.status(404).json({ error: "Not found" });
    res.json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
