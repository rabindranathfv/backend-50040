const { Router } = require("express");
const studentsData = require("../init-data/students-data");
const studentsModel = require("../model/students.model");
const StudentManager = require("../managers/students.manager");

class StudentsRoutes {
  path = "/students";
  router = Router();
  studentManager = new StudentManager();

  constructor() {
    this.initStudentsRoutes();
  }

  initStudentsRoutes() {
    this.router.get(`${this.path}/insertion`, async (req, res) => {
      try {
        const students = await studentsModel.insertMany(studentsData);
        // TODO: agregar validaciones

        return res.json({
          message: "students insert successfully",
          studentsInserted: students,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: students.routes.js:23 ~ StudentsRoutes ~ this.router.get ~ error:",
          error
        );
      }
    });

    // RETORNAR TODOS LOS ESTUDIANTES
    this.router.get(`${this.path}`, async (req, res) => {
      try {
        const students = await this.studentManager.getAllStudents();

        return res
          .status(200)
          .json({ ok: true, message: `getAllStudents`, students });
      } catch (error) {
        console.log(
          "🚀 ~ file: students.routes.js:42 ~ StudentsRoutes ~ this.router.get ~ error:",
          error
        );
      }
    });

    // RETORNAR TODOS LOS ESTUDIANTES
    this.router.get(`${this.path}/:sid`, async (req, res) => {
      try {
        const studentId = req.params.sid;
        const student = await this.studentManager.getStudentById(studentId);

        if (!student) {
          return res.status(404).json({
            ok: true,
            message: `the student does not exist`,
          });
        }

        return res
          .status(200)
          .json({ ok: true, message: `getStudentById`, student });
      } catch (error) {
        console.log(
          "🚀 ~ file: students.routes.js:59 ~ StudentsRoutes ~ this.router.get ~ error:",
          error
        );
        return res.status(500).json({
          ok: false,
          message: `something WRONG!!!`,
          error: error.message,
        });
      }
    });

    this.router.post(`${this.path}`, async (req, res) => {
      try {
        // TODO: HACER VALIDACIONES DEL BODY
        const studentBody = req.body;

        // TODO REVISANDO SI EL ESTUDIANTE YA FUE CREADO ANTERIOMENTE
        const newStudent = await this.studentManager.createStudent(studentBody);
        if (!newStudent) {
          return res.json({
            message: `the student with dni ${studentBody.dni} is already register`,
          });
        }

        return res.json({
          message: `student created successfully`,
          student: newStudent,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: students.routes.js:79 ~ StudentsRoutes ~ this.router.post ~ error:",
          error
        );
        return res.status(500).json({ ok: false, message: error.message });
      }
    });
  }
}

module.exports = StudentsRoutes;
