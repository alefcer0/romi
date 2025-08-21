const Patient = require("../models/patient.model");

exports.createPatient = async (req, res) => {
  try {
    const { nombre, edad, sintomas } = req.body;

    if (
      typeof nombre !== "string" ||
      typeof edad !== "number" ||
      !Array.isArray(sintomas)
    ) {
      return res.status(400).json({
        message: "Tipos inválidos: { nombre:string, edad:number, sintomas:string[] }",
      });
    }

    const newPatient = new Patient({ nombre, edad, sintomas });
    await newPatient.save();
    return res.status(201).json(newPatient);
  } catch (err) {
    return res.status(500).json({ message: "Error al registrar paciente", error: err.message });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener pacientes", error: err.message });
  }
};
