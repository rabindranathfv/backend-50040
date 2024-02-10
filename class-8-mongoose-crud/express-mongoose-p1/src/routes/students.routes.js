const { Router } = require("express");
const studentsData = require("../data/students");
const { update } = require("../model/student.model");
const router = Router();

const studentsModel = require("../model/student.model");

router.get("/insertion", async (req, res) => {
  let result = await studentsModel.insertMany(studentsData);
  return res.json({
    message: "all the students are inserted succesfully",
    result,
  });
});

router.get("/", async (req, res) => {
  // http://localhost:5000/api/students?genero=F o http://localhost:5000/api/students?genero=M
  const { genero } = req.query;

  const result = await studentsModel
    .find(!genero ? {} : { genero: `${genero}` })
    .sort({ edad: 1 });

  // version 2 de la query
  // const result = await studentsModel.aggregate([
  //   { $match: !genero ? {} : { genero: `${genero}` } },
  // ]);

  return res.json({
    message: "getAllStudents succesfully",
    students: result,
    studentsSize: result.length,
  });
});

router.post("/", async (req, res) => {
  try {
    const { nombre, apellido, edad, dni, curso, nota, genero } = req.body;
    if (!nombre || !apellido || !edad || !dni || !curso || !nota || !genero)
      return res.status(400).json({ message: "Incomplet values" });
    let user = {
      nombre,
      apellido,
      edad,
      dni,
      curso,
      nota,
      genero,
    };
    let result = await studentsModel.create(user);
    return res.json({
      message: "create new student successfully",
      student: result,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:56 ~ router.post ~ error:",
      error
    );
    return res.status(500).json({ ok: false, message: error.message });
  }
});

router.put("/:sid", async (req, res) => {
  const id = req.params.sid;
  const UpdateStudent = req.body;
  console.log(
    "🚀 ~ file: students.routes.js:67 ~ router.put ~ UpdateStudent:",
    UpdateStudent
  );

  let result = await studentsModel.updateOne(
    { _id: id },
    { $set: UpdateStudent }
  );
  return res.json({
    message: `getStudentById ${id} succesfully`,
    student: result,
  });
});

router.delete("/:sid", async (req, res) => {
  const id = req.params.sid;
  let result = await studentsModel.deleteOne({ _id: id });

  if (result.deletedCount === 0) {
    return res.json({
      message: `deleteStudentById with student ${id}, it's already deleted`,
    });
  }
  return res.json({
    message: `deleteStudentById ${id} succesfully`,
    student: result,
  });
});

router.get("/:sid", async (req, res) => {
  const { sid } = req.params;

  // {
  //   _id: sid;
  // }
  let student = await studentsModel.findById(sid);

  if (!student) {
    return res.json({
      message: " this student does not exist",
    });
  }

  return res.json({
    message: `student with id ${sid}`,
    student,
  });
});

module.exports = router;
