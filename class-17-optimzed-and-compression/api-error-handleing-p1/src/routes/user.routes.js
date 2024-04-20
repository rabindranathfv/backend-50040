import { Router } from "express";
import { generateUser } from "../utils/generate-users.js";
import { DictionaryErrors, HttpResponse } from "../middlewares/error-handle.js";

const router = Router();

const httpResponse = new HttpResponse();

router.get("/", async (req, res) => {
  let users = [];
  for (let index = 0; index < 100; index++) {
    users.push(generateUser());
  }

  return httpResponse.OK(res, `generated users OK`, users);
});

router.get("/:uid", async (req, res) => {
  const { uid } = req.params;

  if (!uid || isNaN(uid) || uid < 0) {
    return httpResponse.BadRequest(
      res,
      `${DictionaryErrors.INVALID_PARAMS_ERROR} - Invalid Params for userId `
    );
  }

  return httpResponse.OK(res, `generated user MOCK `, {
    user: { name: `user mock` },
  });
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return httpResponse.BadRequest(res, `missing name in body`);
    }
    // throw new Error(DictionaryErrors.DATABASE_ERROR);
    return httpResponse.OK(res, `CREATED user`, { name: `fake user ${name}` });
  } catch (error) {
    console.log("🚀 ~ file: user.routes.js:42 ~ router.post ~ error:", error);
    return httpResponse.Error(
      res,
      `something wrong happens`,
      error.message,
      `${DictionaryErrors.SERVICE_ERROR}-${DictionaryErrors.DATABASE_ERROR}`
    );
  }
});

export default router;
