import UserDao from "../dao/user.dao.js";

const userService = new UserDao();

export const getUsers = async (req, res) => {
  const data = await userService.getUsers();

  return res.json({
    message: `getUsers`,
    users: data,
  });
};

export const getUserById = async (req, res) => {
  const { uid } = req.params;
  const data = await userService.getUserById(uid);

  // TODO: verificar si la data viene vacia o no y retornar error correspondiente

  return res.json({
    message: `getUserById`,
    users: data,
  });
};

export const createUser = async (req, res) => {
  const user = req.body;
  // TODO: implementar y usar el DTO correspondiente
  const data = await userService.createUsers(user);

  return res.json({
    message: `createUser`,
    user: data,
  });
};

export const updateUserById = async (req, res) => {
  const { uid } = req.params;
  const user = req.body;
  // TODO: implementar y usar el DTO correspondiente

  const data = await userService.updateUserById(uid, user);

  return res.json({
    message: `updateUserById`,
    user: data,
  });
};

export const deleteUserById = async (req, res) => {
  const { uid } = req.params;
  const data = await userService.deleteUserById(uid);

  // TODO: verificar si la data viene vacia o no y retornar error correspondiente

  return res.json({
    message: `deleteUserById`,
    users: data,
  });
};
