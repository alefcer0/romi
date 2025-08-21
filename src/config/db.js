// src/config/db.js
const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI no está definido en .env");
  }

  // Opcional: reglas más estrictas para queries
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(uri);
    console.log(`✅ MongoDB conectado: ${mongoose.connection.name}`);
  } catch (err) {
    console.error("❌ Error al conectar a MongoDB:", err.message);
    process.exit(1);
  }

  mongoose.connection.on("error", (err) => {
    console.error("🔴 Error en MongoDB:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️  Conexión a MongoDB perdida");
  });

  // Cierre limpio en Ctrl+C
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("🔌 Conexión a Mongo cerrada por SIGINT");
    process.exit(0);
  });
}

module.exports = connectDB;
