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
  email: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
  },
  // dni: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  curso: {
    type: String,
  },
  nota: {
    type: Number,
    required: true,
  },
  grupo: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
});

const studentsModel = mongoose.model(collectionName, studentSchema);

module.exports = studentsModel;
