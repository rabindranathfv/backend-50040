import { Router } from "express";
import nodemailer from "nodemailer";
import { EMAIL, PSW_EMAIL } from "../config/config.js";

const router = Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  user: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PSW_EMAIL,
  },
});

router.post("/send", async (req, res) => {
  try {
    const emailReceiver = req.body.email;
    console.log(
      "🚀 ~ file: email.routes.js:21 ~ router.post ~ emailReceiver:",
      emailReceiver
    );

    let resultEmail = await transporter.sendMail({
      from: EMAIL,
      to: emailReceiver,
      subject: `sending email to ${emailReceiver}!!`,
      html: `
      <div>
        <h1>Titulo pricipal de email<h1/>
        Esto es un email de prueba para ${emailReceiver}!

        <h5>adjuntos del email </h5>
        <img src="cid:loro" />
      </div>
      `,
      attachments: [
        {
          filename: "pet-loro.png",
          path: `${process.cwd()}` + `/public/img/pet-loro.png`,
          cid: "loro",
        },
        {
          filename: 'ejercicios.pdf',
          path: `${process.cwd()}` + `/public/file/ejercicios.pdf`,
        }
      ],
    });
    console.log(
      "🚀 ~ file: email.routes.js:30 ~ router.post ~ resultEmail:",
      resultEmail
    );

    return res.send({ ok: true, message: `email send to ${emailReceiver}` });
  } catch (error) {
    console.log("🚀 ~ file: email.routes.js:38 ~ router.post ~ error:", error);
  }
});

export default router;
