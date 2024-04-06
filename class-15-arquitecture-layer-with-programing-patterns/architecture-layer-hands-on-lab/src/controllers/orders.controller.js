import OrderDao from "../dao/order.dao.js";
import UserDao from "../dao/user.dao.js";
import BusinessDao from "../dao/business.dao.js";

const orderService = new OrderDao();
const userService = new UserDao();
const businessService = new BusinessDao();

export const getOrders = async (req, res) => {
  const data = await orderService.getOrders();

  return res.json({
    message: `getOrders`,
    orders: data,
  });
};

export const getOrderById = async (req, res) => {
  const { oid } = req.params;
  const data = await orderService.getOrdersById(oid);
  return res.json({
    message: `getOrderById`,
    order: data,
  });
};

export const createOrder = async (req, res) => {
  // TODO: user el createOrderDTO
  const orderBodyDto = req.body;
  const { user, business, products } = req.body;

  const userData = await userService.getUserById(user);
  // TODO: validar data y respuesta
  const businessData = await businessService.deleteBusinessById(business);
  // TODO: validar data y respuesta

  // [1, 2, 20, 40]
  const actualOrders = businessData.filter((product) => {
    return product.business(product.id);
  });

  const sum = actualOrders.reduce((acc, prev) => {
    acc += prev.price;
    return acc;
  }, 0);

  const orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1);

  let order = {
    number: orderNumber,
    business,
    user,
    status: "pending",
    products: actualOrders.map((p) => p.id),
    totalPrice: sum,
  };

  const newOrder = await orderService.createOrder(order);

  userData.orders.push(newOrder._id);
  await userService.updateUsersById(user, userData);

  return res.json({
    message: `createOrder`,
    order: newOrder,
  });
};

export const updateOrderById = async (req, res) => {
  const { oid } = req.params;
  const { resolve } = req.query;

  const data = await orderService.getOrdersById(oid);

  data.status = resolve;

  return res.json({
    message: `updateOrderById`,
    order: data,
  });
};

export const deleteOrderById = async (req, res) => {
  const { oid } = req.params;
  const data = await orderService.deleteOrdersById(oid);

  return res.json({
    message: `DeleteOrderById`,
    order: data,
  });
};
