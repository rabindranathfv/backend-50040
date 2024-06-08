import { body } from "express-validator";
import { mappingValidateMdw } from "../middleware/mapping-validation.middleware.js";

export const createBookDTO = [
  body("title").notEmpty().withMessage("title is Required"),
  body("author").notEmpty().withMessage("author is Required"),
  body("genre").notEmpty().withMessage("genre is Required"),
  body("publicationYear")
    .notEmpty()
    .withMessage("genre is Required")
    .isInt()
    .withMessage("publicationYear must be a number")
    .custom((value) => value > 1400)
    .withMessage(" pubaction year must be after 1400 D.C"),
  mappingValidateMdw,
];
