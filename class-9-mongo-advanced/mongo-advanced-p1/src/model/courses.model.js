const mongoose = require("mongoose");

const collectionName = "Courses";

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  topics: {
    type: Array,
    default: [],
  },
  students: {
    type: Array,
    default: [],
  },
});

const courseModel = mongoose.model(collectionName, courseSchema);

module.exports = courseModel;
