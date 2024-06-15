import Stripe from "stripe";
import { PRIVATE_STRIPE_KEY } from "../config/config.js";

const products = [
  { id: 1, name: "papas", price: 1000 },
  { id: 2, name: "queso", price: 500 },
  { id: 3, name: "hamburguesa", price: 1500 },
  { id: 4, name: "soda", price: 1000 },
  { id: 5, name: "golosinas", price: 800 },
];

const USD = "usd";

export default class PaymentsDao {
  constructor() {
    this.stripe = new Stripe(PRIVATE_STRIPE_KEY);
  }

  // id is productId
  paymentsIntents = async (id) => {
    try {
      const productRequested = products.find((product) => product.id === id);

      console.log('INFO PRODUCT IN BACKEND', productRequested)

      if (!productRequested) {
        return null;
      }

      const paymentInfo = {
        amount: productRequested.price,
        currency: USD,
        metadata: {
          userId: 'user-id-valid',
          ordersDetails: JSON.stringify({
            [productRequested.name]: 10
          }, null, `\t`),
          address: JSON.stringify({
            street: 'calle america',
            postalCode: 28001,
            phoneNumber: "617882233"
          }, null, '\t'),
          discountApply: 200
        }
      };

      const paymentIntent = await this.stripe.paymentIntents.create(
        paymentInfo
      );

      console.log('PAYMENT INTENT INFO****', paymentIntent);

      return paymentIntent;
    } catch (error) {
      console.log(
        "🚀 ~ file: payment.dao.js:44 ~ PaymentsDao ~ paymentsIntents= ~ error:",
        error
      );
      return null;
    }
  };
}
