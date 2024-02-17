const { Router } = require("express");

const courseModel = require("../model/courses.model");

const router = Router();

router.get(`/`, async (req, res) => {
  try {
    let students = await courseModel.find();
    return res.json({
      message: `courses list`,
      students,
    });
  } catch (error) {
    console.log("🚀 ~ file: courses.routes.js:15 ~ router.get ~ error:", error);
  }
});
router.post(`/`, async (req, res) => {
  try {
    const courseBody = req.body;
    let newCourse = await courseModel.create(courseBody);

    return res.json({
      message: `new Student added`,
      course: newCourse,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: courses.routes.js:28 ~ router.post ~ error:",
      error
    );
  }
});

module.exports = router;
