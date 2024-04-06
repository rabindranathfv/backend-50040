import { Router } from "express";
import {
  getBusiness,
  getBusinessById,
  createBusiness,
  updateBusinessById,
  deleteBusinessById,
} from "../controllers/business.controller.js";

const router = Router();

router.get("/", getBusiness);

router.get("/:bid", getBusinessById);

router.post("/", createBusiness);

router.put("/:bid", updateBusinessById);

router.delete("/:bid", deleteBusinessById);

export default router;
