import { body } from "express-validator";
import { mappingValidateMdw } from "../middleware/mapping-validation.middleware.js";

export const createLibraryDTO = [
  body("name").notEmpty().withMessage("library name is Required"),
  body("location").notEmpty().withMessage("library location is Required"),
  mappingValidateMdw,
];
