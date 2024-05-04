import { Router } from "express";
import {
  createLibrary,
  deletelibraryById,
  getAllLibraries,
  getLibraryById,
  updateLibraryById,
} from "../controllers/library.controller.js";
import { validateLibraryIdMdw } from "../middleware/id.validation.middleware.js";


const router = Router();

router.get("/", getAllLibraries);

router.get("/:lid", validateLibraryIdMdw, getLibraryById);

router.post("/", createLibrary); // create una validacion para el body

router.put("/:lid", validateLibraryIdMdw, updateLibraryById);

router.delete("/:lid", validateLibraryIdMdw, deletelibraryById);

export default router;
