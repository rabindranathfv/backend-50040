const { Router } = require("express");
const {
  createStudentCtrl,
  getAllStudentsCtrl,
  getStudentByIdCtrl,
} = require("../controller/student.controller");

const router = Router();

router.get(`/`, getAllStudentsCtrl);

router.post("/", createStudentCtrl);

router.get("/:userId", getStudentByIdCtrl);

module.exports = router;
