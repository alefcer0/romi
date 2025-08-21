const express = require("express");
const cors = require("cors");
const patientRoutes = require("./routes/patient.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/patients", patientRoutes);

module.exports = app;
