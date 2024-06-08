import { Router } from "express";
import { createBookDTO } from "../dto/book.dto.js";
import {
  createBook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
} from "../controllers/book.controller.js";

const router = Router();

router.get("/", getAllBooks);

router.get("/:bid", getBookById);

// TODO: AGregar DTO para los libros
router.post("/library/:lid", createBookDTO, createBook);

// TODO agregar DTO para el update
router.put("/:bid", updateBookById);

router.delete("/:bid", deleteBookById);

export default router;
