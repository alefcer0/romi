const express = require("express");
const cors = require("cors");
const patientRoutes = require("./routes/patient.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/patients", patientRoutes);

module.exports = app;
