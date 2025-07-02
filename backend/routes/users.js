const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

// Auth middleware
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Authentication token required" });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload; // Adds { id, username } to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// GET /users/profiles - Get a list of all usernames
router.get("/profiles", async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $project: {
          username: 1,
          totalWins: { $ifNull: ["$stats.totalWins", 0] },
          unlockedAchievements: {
            $size: {
              $filter: {
                input: { $ifNull: [{ $objectToArray: "$achievements" }, []] },
                as: "ach",
                cond: { $eq: ["$$ach.v.unlocked", true] },
              },
            },
          },
        },
      },
      { $sort: { username: 1 } },
    ]);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// GET /users/me - Get the full profile for the logged-in user
router.get("/me", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST /users/register
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Missing username or password" });
    }

    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "Username already in use" });
    }
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST /users/login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    const userProfile = user.toObject();
    delete userProfile.password;

    res.json({ token, user: userProfile });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
