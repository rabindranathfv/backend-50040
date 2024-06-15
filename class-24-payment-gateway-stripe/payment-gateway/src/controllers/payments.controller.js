import PaymentsDao from '../services/payments.service.js';

const paymentsDao = new PaymentsDao();

export const paymentsIntents = async (req, res) => {
  try {
    const { id } = req.query; // esto es el productId
    const newPayment = await paymentsDao.paymentsIntents(parseInt(id));

    if (!newPayment) {
      return res.status(404).json({ message: `product not found` });
    }

    return res.json({
      message: `payment OK`,
      payload: newPayment,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: book.controller.js:15 ~ createBook ~ error:",
      error
    );
  }
};
