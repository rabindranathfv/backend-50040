export default class ProductDTO {
  constructor(product) {
    this.name = product.name.toLowerCase();
    this.description = product.description;
    this.quantity = product.quantity;
    this.price = product.price;
  }
}
