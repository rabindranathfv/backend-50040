const mongoose = require("mongoose");

const collectionName = "Students";

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["F", "M"],
  },
});

const studentModel = mongoose.model(collectionName, studentSchema);
module.exports = studentModel;
