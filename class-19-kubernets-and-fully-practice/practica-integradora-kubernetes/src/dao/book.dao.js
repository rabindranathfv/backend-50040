import bookModel from "../model/book.model.js";
import { LibraryDao } from "./library.dao.js";

export class BookDao {
  // TODO: el nombre del atributo no DEBE EMPEZAR EN MAYUSCULA, solo para correguir rapido
  LibraryService = new LibraryDao();

  getAllBooks = async () => {
    try {
      const data = await bookModel.find();
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:9 ~ BookDao ~ getAllBooks= ~ error:",
        error
      );
      return null;
    }
  };

  getBookById = async (id) => {
    try {
      const data = await bookModel.findOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:22 ~ BookDao ~ getBookById= ~ error:",
        error
      );
      return null;
    }
  };

  createBook = async (lId, book) => {
    try {
      console.log(
        "🚀 ~ file: book.dao.js:34 ~ BookDao ~ createBook= ~ lId:",
        lId
      );
      const data = await bookModel.create(book);
      const library = await this.LibraryService.getLibraryById(lId);
      console.log(
        "🚀 ~ file: book.dao.js:41 ~ BookDao ~ createBook= ~ library:",
        library
      );

      library.books.push({ book: data._id });
      const bookUpd = await this.LibraryService.updateLibraryById(lId, library);
      console.log(
        "🚀 ~ file: book.dao.js:45 ~ BookDao ~ createBook= ~ bookUpd:",
        bookUpd
      );

      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:35 ~ BookDao ~ createBook= ~ error:",
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
        "🚀 ~ file: book.dao.js:48 ~ BookDao ~ updateBookById= ~ error:",
        error
      );
      return null;
    }
  };

  deleteBookById = async (id) => {
    try {
      const data = await bookModel.deleteOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:61 ~ BookDao ~ deleteBookById ~ error:",
        error
      );
      return null;
    }
  };
}
