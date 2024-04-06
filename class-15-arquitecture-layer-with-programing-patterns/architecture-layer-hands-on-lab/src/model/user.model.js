import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { collection as collectionBusiness } from "./business.model.js";

export const collection = "Users";

const schema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: collectionBusiness,
    },
  ],
});

schema.plugin(mongoosePaginate);
const userModel = mongoose.model(collection, schema);
export default userModel;
