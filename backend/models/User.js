const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    // email eliminado
    password: { type: String, required: true },

    achievements: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

    stats: {
      totalDiceRolled: { type: Number, default: 0 },
      totalBossesDefeated: { type: Number, default: 0 },
      totalBribedBosses: { type: Number, default: 0 },
      totalPerfectDefeats: { type: Number, default: 0 },
      totalWins: { type: Number, default: 0 },
      maxMoneyInRun: { type: Number, default: 0 },
      diceStats: {
        type: mongoose.Schema.Types.Mixed,
        default: {},
      },
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.password);
};

module.exports = mongoose.model("User", userSchema);
