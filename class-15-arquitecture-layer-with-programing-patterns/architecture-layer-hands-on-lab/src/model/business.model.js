import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

export const collection = "Business";

const schema = new mongoose.Schema({
  name: String,
  products: [],
});

schema.plugin(mongoosePaginate);``
const businessModel = mongoose.model(collection, schema);
export default businessModel;
