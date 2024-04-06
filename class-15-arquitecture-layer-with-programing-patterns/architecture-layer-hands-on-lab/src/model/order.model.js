import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { collection as collectionBusiness } from "./business.model.js";
import { collection as collectionUser } from "./user.model.js";

export const collection = "Orders";

const schema = new mongoose.Schema({
  number: Number,
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: collectionBusiness,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: collectionUser,
  },
  products: [],
  totalPrice: Number,
});

schema.plugin(mongoosePaginate);
const orderModel = mongoose.model(collection, schema);
export default orderModel;
