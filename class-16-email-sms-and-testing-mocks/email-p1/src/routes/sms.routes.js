import { Router } from "express";
import twilio from "twilio";
import { SMS_ACC_SID, SMS_AUTH_TOKEN, SMS_PHONE } from "../config/config.js";

const router = Router();

const client = twilio(SMS_ACC_SID, SMS_AUTH_TOKEN);

router.post("/send", async (req, res) => {
  try {
    let result = await client.messages.create({
      body: `eso es un envio de SMS para ${req.body.name}`,
      from: SMS_PHONE,
      to: req.body.phone,
    });
    console.log("🚀 ~ file: sms.routes.js:16 ~ router.post ~ result:", result);
  } catch (err) {
    console.log("🚀 ~ file: sms.routes.js:19 ~ router.post ~ err:", err);
  }
});

export default router;
