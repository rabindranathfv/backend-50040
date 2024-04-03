const mongoose = require("mongoose");

const collectionName = "Estudiantes";

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  course: {
    type: String,
  },
  grade: {
    type: Number,
    required: true,
  },
});

const studentsModel = mongoose.model(collectionName, studentSchema);

module.exports = studentsModel;
