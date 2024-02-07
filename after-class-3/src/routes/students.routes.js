const { Router } = require("express");
const studentsDataV2 = require("../data/students-v2");

const studentsModel = require("../model/students.model");

const router = Router();

// ruta de insertion
router.get(`/insertion`, async (req, res) => {
  try {
    let result = await studentsModel.insertMany(studentsDataV2);

    return res.json({
      mesasge: "massive insert successfully",
      students: result,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:18 ~ router.get ~ error:",
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

router.get(`/queries/v4`, async (req, res) => {
  try {
    // TODO: Listar todos los estudiantes ordenados por edad descendiente
    const studentOrder = await studentsModel.find({}).sort({ edad: -1 });

    // TODO: Listar el estudiante mas joven
    const youngerStudent = await studentsModel
      .find({})
      .sort({ edad: 1 })
      .limit(1);

    // TODO: listar el 2do estudiante mas joven
    // [youngerStudent, ]= ['rabin','rafael'] // solo me interesa el 1ro, asigna el valor 'Rabin'
    // [, secondYoungerStudent] = ["rabin", "rafael"]; // solo me interesa el 2do, asigna el valor 'Rafael'
    const [, secondYoungerStudent] = await studentsModel
      .find({})
      .sort({ edad: 1 })
      .limit(2);

    // TODO: listar los estudiantes llamados juan
    const juanList = await studentsModel.find({ nombre: /^juan.*/i });

    // TODO: listar los estudiantes llamados juan que tengan 29
    const juan29List = await studentsModel.find({
      nombre: /^juan.*/i,
      edad: { $eq: 29 },
    });

    // TODO: listar los estudiantes llamados juan o lucia
    const juanOrLuciaList = await studentsModel.find({
      $or: [
        {
          nombre: /^juan.*/i,
        },
        {
          nombre: /^lucia.*/i,
        },
      ],
    });

    // TODO: Listar todos los estudiantes que tengan mas de 25
    const studentsOver25 = await studentsModel.find({
      edad: { $gt: 25 },
    });

    // TODO: Listar todos los estudiantes que tengan 25 o menos
    const studentsLower25 = await studentsModel.find({
      edad: { $lte: 25 },
    });

    // TODO: listar los estudiantes que esten entre los 26 y los 35
    const studentBet26and35 = await studentsModel.find({
      $and: [{ edad: { $gte: 25 } }, { edad: { $lte: 35 } }],
    });

    // TODO: actualizar la edad de un estudiante a 36 y verificar que se actualizo
    const updateAgeStudent = await studentsModel.updateOne(
      {
        _id: "65c3fbbe85e17d97ba148fb0",
      },
      {
        $set: {
          edad: 36,
          curso: "Programacion Fullstack",
        },
      }
    );

    // actualizar 2 edades para que salgan de un listado
    const updateAgeStudentV2 = await studentsModel.updateMany(
      {
        edad: { $eq: 36 },
      },
      {
        $set: { edad: 40 },
      }
    );

    // TODO: Eliminar a los juanes
    const deleteJuanes = await studentsModel.deleteMany({ nombre: /^juan.*/i });

    // TODO: eliminar todos los estudiantes sabiendo que tienen ID
    // const deleteAllStudents = await studentsModel.deleteMany({
    //   _id: { $exists: true },
    // });

    return res.json({
      studentOrder,
      youngerStudent,
      secondYoungerStudent,
      juanList,
      juan29List,
      juanOrLuciaList,
      studentsOver25,
      studentsLower25,
      studentBet26and35,
      updateAgeStudent,
      updateAgeStudentV2,
      deleteJuanes,
      deleteAllStudents,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:231 ~ router.get ~ error:",
      error
    );
  }
});

module.exports = router;
