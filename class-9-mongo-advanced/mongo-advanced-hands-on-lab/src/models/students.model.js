const mongoose = require("mongoose");
const mongoosePaginateV2 = require("mongoose-paginate-v2");

const collection = "Students";

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  grade: Number,
  group: String,
});

studentSchema.plugin(mongoosePaginateV2);

const studentsModel = mongoose.model(collection, studentSchema);
module.exports = studentsModel;
