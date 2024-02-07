const mongoose = require("mongoose");

const collectionName = "Estudiantes";

const studentSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  curso: {
    type: String,
  },
  nota: {
    type: Number,
    required: true,
  },
  genero: {
    type: String,
  },
});

const studentsModel = mongoose.model(collectionName, studentSchema);

module.exports = studentsModel;
