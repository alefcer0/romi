const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    edad: { type: Number, required: true, min: 0, max: 150 },
    sintomas: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length > 0,
        message: "Debe incluir al menos un síntoma",
      },
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Patient", patientSchema);
