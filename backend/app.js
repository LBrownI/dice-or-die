// backend/app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// --- IMPORT ROUTES ---
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const gameRouter = require("./routes/game");

// --- DATABASE CONNECTION ---

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://mongo:27017/dice_or_die_db";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const app = express();

// --- MIDDLEWARE ---
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/game", gameRouter);

module.exports = app;
