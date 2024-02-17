const mongoose = require("mongoose");

const collectionName = "Students";

const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  courses: {
    type: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Courses",
        },
      },
    ],
    default: [],
  },
});

studentSchema.pre("find", function () {
  console.log("EJECUTO EL PRE MDW DE MONGOOSE");
  this.populate("courses.course");
});

const studentsModel = mongoose.model(collectionName, studentSchema);

module.exports = studentsModel;
