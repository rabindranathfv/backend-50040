const { Router } = require("express");

const studentsModel = require("../model/students.model");

const router = Router();

router.get(`/`, async (req, res) => {
  try {
    let students = await studentsModel.find();
    // .populate("courses.course", { title: 1 });
    return res.json({
      message: `student list`,
      students,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:38 ~ router.get ~ error:",
      error
    );
  }
});
router.post(`/`, async (req, res) => {
  try {
    const studentBody = req.body;
    let newStudent = await studentsModel.create(studentBody);

    return res.json({
      message: `new Student added`,
      student: newStudent,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:31 ~ router.post ~ error:",
      error
    );
  }
});

router.post("/inscription", async (req, res) => {
  try {
    const { courseId, studentId } = req.body;
    let student = await studentsModel.findOne({ _id: studentId });
    console.log(
      "🚀 ~ file: students.routes.js:42 ~ router.post ~ newStudent:",
      student
    );

    student.courses.push({ course: courseId });

    let resultUpd = await studentsModel.updateOne({ _id: studentId }, student);
    // Manejo errrores
    return res.json({
      message: `this student ${student.firstName} have a new Course`,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:54 ~ router.post ~ error:",
      error
    );
  }
});

module.exports = router;
