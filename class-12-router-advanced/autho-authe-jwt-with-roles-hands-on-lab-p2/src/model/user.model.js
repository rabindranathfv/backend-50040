const mongoose = require("mongoose");

const collection = "Users";

const roleType = {
  USER: "USER",
  USER_PREMIUM: "USER_PREMIUM",
  ADMIN: "ADMIN",
  PUBLIC: "PUBLIC",
};

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: Number,
  password: String,
  role: {
    type: String,
    enum: Object.values(roleType),
  },
});

const userModel = mongoose.model(collection, schema);
module.exports = userModel;
