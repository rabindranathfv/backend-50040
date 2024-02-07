const { Router } = require("express");
const studentsData = require("../data/students");

const studentsModel = require("../model/students.model");

const router = Router();

// ruta de insertion
router.get(`/insertion`, async (req, res) => {
  try {
    let result = await studentsModel.insertMany(studentsData);
    return res.json({
      mesasge: "massive insert successfully",
      students: result,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:23 ~ router.get ~ error:",
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
router.get(`/queries`, async (req, res) => {
  try {
    let studentsOlderAge = await studentsModel.find({
      edad: { $gte: 30 },
    });

    let studentsApprovedOrYounger = await studentsModel.find({
      $or: [{ nota: { $gte: 7 } }, { age: { $lt: 25 } }],
    });

    let studentsBackend = await studentsModel.find({
      curso: /^Programación Backend$/i,
    });

    let studentsBackendReg = await studentsModel.find({
      curso: { $regex: /back/i },
    });
    return res.json({
      message: `student list`,
      studentsOlderAge,
      studentsOlderAgeCount: studentsOlderAge.length,
      studentsApprovedOrYounger,
      studentsBackend,
      studentsBackendReg,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:63 ~ router.get ~ error:",
      error
    );
  }
});

router.get(`/queries/v2`, async (req, res) => {
  try {
    let studentsNoteWithProjection = await studentsModel.find(
      {
        nota: { $gte: 8 },
      },
      {
        nombre: 1,
        apellido: 1,
        curso: 1,
        nota: 1,
      }
    );

    let studentsNoteWithProjectionSorted = await studentsModel
      .find(
        {
          nota: { $gte: 6 },
        },
        {
          nombre: 1,
          apellido: 1,
          curso: 1,
          nota: 1,
        }
      )
      .sort({ nota: -1, edad: -1 });

    return res.json({
      message: `student list`,
      studentsNoteWithProjection,
      studentsNoteWithProjectionSorted,
    });
  } catch (error) {}
});

router.get(`/queries/v3`, async (req, res) => {
  try {
    let studentsSortedByAge = await studentsModel.find({}).sort({ edad: -1 });

    let youngerStudent = await studentsModel
      .find({})
      .sort({ edad: 1 })
      .limit(1);

    return res.json({
      message: `student list`,
      studentsSortedByAge,
      youngerStudent,
      youngerStudent2,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:122 ~ router.get ~ error:",
      error
    );
  }
});

module.exports = router;
