import { Router } from "express";
import { generateUser } from "../utils/generate-user.js";

const router = Router();

router.get("/", async (req, res) => {
  let users = [];
  const MAX_USERS = 200;
  for (let index = 0; index < MAX_USERS; index++) {
    users.push(generateUser());
  }

  return res.json({
    message: `generated users`,
    users,
  });
});

export default router;
