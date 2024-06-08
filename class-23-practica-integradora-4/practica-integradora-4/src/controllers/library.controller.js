import LibraryDao from "../dao/library.dao.js";

const libraryService = new LibraryDao();

export const getAllLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getAllLibraries();
    return res.json({
      message: `getAllLibraries OK`,
      libraries,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: library.controller.js:13 ~ getAllLibraries ~ error:",
      error
    );
  }
};

export const getLibraryById = async (req, res) => {
  try {
    const { lid } = req.params;
    const library = await libraryService.getLibraryById(lid);

    return res.json({
      message: `getLibraryById OK with id: ${lid}`,
      library,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: library.controller.js:30 ~ getLibraryById ~ error:",
      error
    );
  }
};

export const createLibrary = async (req, res) => {
  try {
    const library = req.body;
    console.log(
      "🚀 ~ file: library.controller.js:40 ~ createLibrary ~ library:",
      library
    );

    const newLibrary = await libraryService.createLibrary(library);
    console.log(
      "🚀 ~ file: library.controller.js:46 ~ createLibrary ~ newLibrary:",
      newLibrary
    );

    return res.json({
      message: `create library OK`,
      library: newLibrary,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: library.controller.js:46 ~ createLibrary ~ error:",
      error
    );
  }
};

export const updateLibraryById = async (req, res) => {
  try {
    const { lid } = req.params;
    const libBody = req.Body;

    const libraryUpd = await libraryService.updateLibraryById(lid, libBody);
    // TODO Agregar validacion de errores

    return res.json({
      message: `updateLibraryById OK with id: ${lid}`,
      library: libraryUpd,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: library.controller.js:62 ~ updateLibraryById ~ error:",
      error
    );
  }
};

export const deletelibraryById = async (req, res) => {
  try {
    const { lid } = req.params;
    const libraryDel = await libraryService.deleteLibraryById(lid);
    console.log(
      "🚀 ~ file: library.controller.js:72 ~ deletelibraryById ~ libraryDel:",
      libraryDel
    );

    // TODO: SI FALLA MANDAR UN ERROR

    return res.json({
      message: `deletelibraryById OK with id: ${lid}`,
      library: libraryDel,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: library.controller.js:79 ~ deletelibraryById ~ error:",
      error
    );
  }
};
