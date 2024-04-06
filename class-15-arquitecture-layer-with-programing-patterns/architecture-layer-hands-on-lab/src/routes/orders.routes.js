import { Router } from "express";
import {
  createOrder,
  deleteOrderById,
  getOrderById,
  getOrders,
  updateOrderById,
} from "../controllers/orders.controller.js";

const router = Router();

router.get("/", getOrders);

router.get("/:oid", getOrderById);

router.post("/", createOrder);

router.put("/:oid", updateOrderById);

router.delete("/:oid", deleteOrderById);

export default router;
