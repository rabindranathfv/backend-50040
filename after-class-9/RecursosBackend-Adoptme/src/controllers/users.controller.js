import { usersService } from "../services/index.js";

const getAllUsers = async (req, res) => {
  const users = await usersService.getAll();
  res.send({ status: "success", payload: users });
};

const getUser = async (req, res) => {
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  res.send({ status: "success", payload: user });
};

const createUser = async (req, res) => {
  const userData = req.body;
  console.log(
    "🚀 ~ file: users.controller.js:17 ~ createUser ~ userData:",
    userData
  );

  const user = await usersService.getUserByEmail(userData.email);
  console.log("🚀 ~ file: users.controller.js:20 ~ createUser ~ user:", user);

  if (user)
    return res
      .status(400)
      .send({ status: "error", error: "User already exists" });

  const newUser = await usersService.create(userData);
  res.send({ status: "success", payload: newUser });
};

const updateUser = async (req, res) => {
  const updateBody = req.body;
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  const result = await usersService.update(userId, updateBody);
  res.send({ status: "success", message: "User updated" });
};

const deleteUser = async (req, res) => {
  const userId = req.params.uid;
  const result = await usersService.getUserById(userId);
  res.send({ status: "success", message: "User deleted" });
};

export default {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  createUser,
};
