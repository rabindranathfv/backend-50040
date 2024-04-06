import { Products } from "../dao/factory.js";
import ProductRepositoryDao from "./product.repository.js";

export const ProductService = new ProductRepositoryDao(new Products());
