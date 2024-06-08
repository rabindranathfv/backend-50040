import bookModel from "../model/book.model.js";
import LibraryDao from "./library.dao.js";

export default class BookDao {
  LibraryService = new LibraryDao();

  getALLBooks = async () => {
    try {
      const data = await bookModel.find();

      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:14 ~ BookDao ~ getALLBooks= ~ error:",
        error
      );

      return null;
    }
  };

  getBookById = async (id) => {
    try {
      return await bookModel.findById(id);
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:27 ~ BookDao ~ getBookById= ~ error:",
        error
      );

      return null;
    }
  };

  createBook = async (lid, book) => {
    try {
      // TODO valorar utilizar el .save para crear la entidad
      const data = await bookModel.create(book);
      const library = await this.LibraryService.getLibraryById(lid);

      library.books.push({ book: data._id });
      const bookUpd = await this.LibraryService.updateLibraryById(lib, library);
      console.log(
        "🚀 ~ file: book.dao.js:34 ~ BookDao ~ createBook= ~ bookUpd:",
        bookUpd
      );

      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:51 ~ BookDao ~ createBook= ~ error:",
        error
      );

      return null;
    }
  };

  updateBookById = async (id, book) => {
    try {
      const data = await bookModel.updateOne({ _id: id }, book);

      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:66 ~ BookDao ~ updateBookById= ~ error:",
        error
      );

      return null;
    }
  };

  deleteBookById = async (id) => {
    try {
      const data = await bookModel.findByIdAndDelete(id);

      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:81 ~ BookDao ~ deleteBookById ~ error:",
        error
      );

      return null;
    }
  };
}
