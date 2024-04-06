import businessModel from "../model/business.model.js";

export default class BusinessDao {
  getBusiness = async () => {
    try {
      const data = await businessModel.find();
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: bussiness.dao.js:9 ~ BusinessDao ~ getBussiness= ~ error:",
        error
      );
      return null;
    }
  };

  getBusinessById = async (id) => {
    try {
      const data = await businessModel.findOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: bussiness.dao.js:22 ~ BussinessDao ~ getBussinessById= ~ error:",
        error
      );
      return null;
    }
  };

  createBusiness = async (business) => {
    try {
      const data = await businessModel.create(business);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: business.dao.js:35 ~ BussinessDao ~ createBussiness= ~ error:",
        error
      );
      return null;
    }
  };

  updateBusinessById = async (id, business) => {
    try {
      // TODO: {$set: business}
      const data = await businessModel.updateOne({ _id: id }, business);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: bussiness.dao.js:49 ~ BussinessDao ~ updateBussinessById= ~ error:",
        error
      );
      return null;
    }
  };

  deleteBusinessById = async (id) => {
    try {
      const data = await businessModel.deleteOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: bussiness.dao.js:62 ~ BussinessDao ~ deleteBussinessById ~ error:",
        error
      );
      return null;
    }
  };
}
