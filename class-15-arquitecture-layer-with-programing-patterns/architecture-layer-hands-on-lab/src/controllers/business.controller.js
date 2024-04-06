import BusinessDao from "../dao/business.dao.js";

const businessService = new BusinessDao();

export const getBusiness = async (req, res) => {
  const data = await businessService.getBusiness();

  if (!data) {
    return res.status(500).json({
      message: `something was wrong in getBusiness`,
    });
  }
  return res.json({
    message: `getBusiness`,
    business: data,
  });
};

export const getBusinessById = async (req, res) => {
  const { bid } = req.params;
  const data = await businessService.getBusinessById(bid);

  if (!data) {
    return res.status(500).json({
      message: `something was wrong in getBusinessById`,
    });
  }
  return res.json({
    message: `getBusinessById`,
    business: data,
  });
};

export const createBusiness = async (req, res) => {
  const business = req.body;
  const data = await businessService.createBusiness(business);

  if (!data) {
    return res.status(500).json({
      message: `something was wrong in createBusiness`,
    });
  }
  return res.json({
    message: `createBusiness`,
    business: data,
  });
};

export const updateBusinessById = async (req, res) => {
  const { bid } = req.params;
  // TODO: VERIFICAR SI NECESITAMOS BODY
  const data = await businessService.updateBusinessById(bid);

  if (!data) {
    return res.status(500).json({
      message: `something was wrong in updateBusinessById`,
    });
  }
  return res.json({
    message: `updateBusinessById`,
    business: data,
  });
};

export const deleteBusinessById = async (req, res) => {
  const { bid } = req.params;
  const data = await businessService.deleteBusinessById(bid);

  if (!data) {
    return res.status(500).json({
      message: `something was wrong in deleteBusinessById`,
    });
  }
  return res.json({
    message: `DeleteBusinessById`,
    business: data,
  });
};
