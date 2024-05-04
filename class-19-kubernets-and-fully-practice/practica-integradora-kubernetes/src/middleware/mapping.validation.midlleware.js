import { validationResult } from "express-validator";

export const mappingValidateMdw = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(
      "🚀 ~ file: mapping.validation.midlleware.js:7 ~ mappingValidateMdw ~ errors:",
      errors
    );

    const validationErrors = errors.array().map((error) => {
      return {
        field: error.param,
        message: `${error.msg}, in ${error.location}`,
      };
    });
    return res.status(400).json({ errors: validationErrors });

    // TODO: revisar la funcion de mapeo de express validator
    // return res.status(400).json({
    //   errors: errors.mapped(),
    // });
  }

  next();
};
