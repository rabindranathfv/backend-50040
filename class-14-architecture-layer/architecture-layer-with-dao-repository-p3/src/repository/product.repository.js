import productModel from "../model/product.model.js";

export default class ProductRepositoryDao {
  constructor(dao) {
    this.dao = dao;
  }

  getAllProducts = async () => {
    try {
      const products = await productModel.find({});
      return products;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  getProductById = async (pId) => {
    try {
      const productData = await productModel.findById({ _id: pId });
      return productData;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  createProduct = async (productBodyDto) => {
    try {
      const newProduct = await productModel.create(productBodyDto);
      return newProduct;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  deleteProductById = async (pId) => {
    try {
      const deleteP = await productModel.deleteOne({ _id: pId });
      return deleteP;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
