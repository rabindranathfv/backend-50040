import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

export const collection = "Library";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  books: {
    type: [
      {
        book: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Book",
        },
      },
    ],
    default: [],
  },
});

schema.pre("find", function () {
  this.populate("books.book");
});

schema.plugin(mongoosePaginate);

const libraryModel = mongoose.model(collection, schema);
export default libraryModel;
