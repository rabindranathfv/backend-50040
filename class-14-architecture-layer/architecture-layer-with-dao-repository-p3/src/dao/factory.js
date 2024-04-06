import mongoose from "mongoose";
import { PERSISTENCE, DB_HOST, DB_PORT, DB_NAME } from "../config/config.js";

export let Products;
const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
switch (PERSISTENCE) {
  case "MONGO":
    mongoose
      .connect(MONGO_URL)
      .then((conn) => {
        console.log("🚀 ~ file: factory.js:11 ~ CONECTADO!:");
      })
      .catch((err) => {
        console.log("🚀 ~ file: factory.js:14 ~ err:", err);
      });
    const { default: ProductServiceDao } = await import(
      "../dao/product.service.js"
    );
    console.log(
      "🚀 ~ file: factory.js:25 ~ ProductServiceDao:",
      ProductServiceDao
    );
    Products = ProductServiceDao;
    break;
  case "MEMORY":
    // TODO: Cargar el dao en memoria con await dynamic import
    console.log("LOAD MEMORY SERVICE***");
    const { default: ProductMemServiceDao } = await import(
      "../dao/product-mem.service.js"
    );
    Products = ProductMemServiceDao;
    break;
}
