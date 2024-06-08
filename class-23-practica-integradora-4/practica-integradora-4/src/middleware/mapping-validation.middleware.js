import { validationResult } from "express-validator";

export const mappingValidateMdw = (req, res, next) => {
  const errors = validationResult(req);
  console.log(
    "🚀 ~ file: mapping-validation.middleware.js:5 ~ mappingValidateMdw ~ errors:",
    errors
  );

  // TODO Mejorar el mapeo
  if (!errors.isEmpty()) {
    const validationErrors = errors.array().map((error) => {
      return {
        field: error.param,
        message: error.msg,
        reciveiveValue: error.value,
      };
    });

    return res.status(400).json({ errors: validationErrors });

    // return res.status(400).json({
    //   errors: errors.mapped(),
    // });
  }

  next();
};
