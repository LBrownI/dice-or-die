// config/db.js
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI || "mongodb://localhost:27017/dice_or_die";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🔌 Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

module.exports = mongoose;
