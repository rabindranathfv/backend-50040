const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const collection = "notes";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const noteModel = mongoose.model(collection, noteSchema);
module.exports = noteModel;
