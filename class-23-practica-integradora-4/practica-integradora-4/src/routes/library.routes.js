import { Router } from "express";
import {
  createLibrary,
  deletelibraryById,
  getAllLibraries,
  getLibraryById,
  updateLibraryById,
} from "../controllers/library.controller.js";
import { createLibraryDTO } from "../dto/library.dto.js";

const router = Router();

router.get("/", getAllLibraries);

// TODO: AGREGAR MDW PARA VALIDAR EL MONGO ID
router.get("/:lid", getLibraryById);

// TODO: AGREGAR DTO EN LA CREACION DE LA BIBLIOTECA
router.post("/", createLibraryDTO, createLibrary);

router.put("/:lid", updateLibraryById);

router.delete("/:lid", deletelibraryById);

export default router;
