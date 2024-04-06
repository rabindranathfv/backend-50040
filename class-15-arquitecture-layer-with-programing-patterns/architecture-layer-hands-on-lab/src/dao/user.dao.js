import userModel from "../model/user.model.js";

export default class UserDao {
  getUsers = async () => {
    try {
      return await userModel.find();
    } catch (error) {
      return null;
    }
  };

  getUserById = async (id) => {
    try {
      return await userModel.findOne({ _id: id });
    } catch (error) {
      return null;
    }
  };

  createUser = async (createUserDTO) => {
    try {
      return await userModel.create(createUserDTO);
    } catch (error) {
      return null;
    }
  };

  updateUserById = async (id, updateUserDTO) => {
    try {
      return await userModel.updateOne({ _id: id }, updateUserDTO);
    } catch (error) {
      return null;
    }
  };

  deleteUserById = async (id) => {
    try {
      return await userModel.deleteOne({ _id: id });
    } catch (error) {
      return null;
    }
  };
}
