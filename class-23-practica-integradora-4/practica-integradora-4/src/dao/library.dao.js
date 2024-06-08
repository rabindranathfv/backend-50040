import libraryModel from "../model/library.model.js";

export default class LibraryDao {
  getAllLibraries = async () => {
    try {
      return await libraryModel.find();
    } catch (error) {
      console.log(
        "🚀 ~ file: library.dao.js:8 ~ LibraryDao ~ getAllLibraries= ~ error:",
        error
      );

      return null;
    }
  };

  getLibraryById = async (id) => {
    try {
      return await libraryModel.findById(id);
    } catch (error) {
      console.log(
        "🚀 ~ file: library.dao.js:21 ~ LibraryDao ~ getLibraryById= ~ error:",
        error
      );

      return null;
    }
  };

  createLibrary = async (library) => {
    console.log(
      "🚀 ~ file: library.dao.js:31 ~ LibraryDao ~ createLibrary= ~ library:",
      library
    );

    try {
      const data = await libraryModel.create(library);

      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: library.dao.js:36 ~ LibraryDao ~ createLiBrary= ~ error:",
        error
      );

      return null;
    }
  };

  updateLibraryById = async (id, library) => {
    try {
      const data = await libraryModel.updateOne({ _id: id }, library);

      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: library.dao.js:51 ~ LibraryDao ~ updateLibraryById= ~ error:",
        error
      );

      return null;
    }
  };

  deleteLibraryById = async (id) => {
    try {
      return await libraryModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(
        "🚀 ~ file: library.dao.js:64 ~ LibraryDao ~ deleteLibraryById ~ error:",
        error
      );

      return null;
    }
  };
}
