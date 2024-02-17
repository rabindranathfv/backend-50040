const { Router } = require("express");
const studentInsertData = require("../data/students");

const studentsModel = require("../model/students.model");

const router = Router();

router.get(`/insert`, async (req, res) => {
  try {
    let students = await studentsModel.insertMany(studentInsertData);
    return res.json({
      message: `insert successfully`,
      students,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:16 ~ router.get ~ error:",
      error
    );
  }
});

router.get(`/`, async (req, res) => {
  try {
    let students = await studentsModel.find();
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

router.get("/groups", async (req, res) => {
  try {
    // Estudiantes agrupados por calificacion del mejor al peor
    const studentsByGrade = await studentsModel.aggregate([
      {
        $group: { _id: "$grade", students: { $push: "$$ROOT" } },
      },
      {
        $sort: { _id: -1 },
      },
      {
        $project: {
          _id: 1,
          students: {
            first_name: 1,
            group: 1,
          },
        },
      },
    ]);

    // Estudiantes agrupados por grupo
    const studentsByGroup = await studentsModel.aggregate([
      {
        $group: { _id: "$group", studentsGroups: { $push: "$$ROOT" } },
      },
    ]);

    return res.json({
      ok: true,
      studentsByGrade,
      studentsByGroup,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:68 ~ router.get ~ error:",
      error
    );
  }
});

router.get("/average", async (req, res) => {
  try {
    //PROMEDIO ESTUDIANTES 1B
    const studentAverage1B = await studentsModel.aggregate([
      {
        $match: { group: "1B" },
      },
      {
        $group: {
          _id: "1B",
          promedio: { $avg: "$grade" },
          min: { $min: "$grade" },
          max: { $max: "$grade" },
        },
      },
    ]);

    // PROMEDIO DE ESTUDIANTES 1A
    const studentsAverage1A = await studentsModel.aggregate([
      {
        $match: { group: "1A" },
      },
      {
        $group: { _id: "1B", promedio: { $avg: "$grade" } },
      },
    ]);

    return res.json({
      ok: true,
      studentAverage1B,
      studentsAverage1A,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:128 ~ router.get ~ error:",
      error
    );
  }
});

router.get("/average/v2", async (req, res) => {
  try {
    //PROMEDIO GENERAL DE ESTUDIANTES.
    const generalAverage = await studentsModel.aggregate([
      {
        $group: {
          _id: "students",
          promedio: { $avg: "$grade" },
        },
      },
    ]);

    // PROMEDIO SOLO HOMBRES
    const maleStudentAverage = await studentsModel.aggregate([
      {
        $match: { gender: "Male" },
      },
      {
        $group: { _id: "studentsMale", promedio: { $avg: "$grade" } },
      },
    ]);

    //PROMEDIO MUJERES
    const femaleStudentAverage = await studentsModel.aggregate([
      {
        $match: { gender: "Female" },
      },
      {
        $group: { _id: "studentsFemale", promedio: { $avg: "$grade" } },
      },
    ]);

    return res.json({
      ok: true,
      generalAverage,
      maleStudentAverage,
      femaleStudentAverage,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:179 ~ router.get ~ error:",
      error
    );
  }
});

module.exports = router;
