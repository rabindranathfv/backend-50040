const studentsModel = require("../model/students.model");

class StudentManager {
  getAllStudents = async () => {
    try {
      const students = await studentsModel.find({});
      return students;
    } catch (error) {
      console.log(
        "🚀 ~ file: students.manager.js:9 ~ StudentManager ~ getAllStudents= ~ error:",
        error
      );
    }
  };

  getStudentById = async (id) => {
    try {
      const student = await studentsModel.find({ _id: id });

      return student;
    } catch (error) {
      console.log(
        "🚀 ~ file: students.manager.js:22 ~ StudentManager ~ getStudentById= ~ error:",
        error
      );
    }
  };

  createStudent = async (bodyStudent) => {
    try {
      // TODO REVISANDO SI EL ESTUDIANTE YA FUE CREADO ANTERIOMENTE
      const studentDetail = await studentsModel.findOne({
        dni: bodyStudent.dni,
      });
      console.log(
        "🚀 ~ file: students.manager.js:35 ~ StudentManager ~ createStudent= ~ studentDetail:",
        studentDetail
      );

      if (studentDetail && Object.keys(studentDetail).length !== 0) {
        return null;
      }

      const newStudent = await studentsModel.create(bodyStudent);
      // TODO: Manejar el error o si pasa algo mientras creo el documento de estudiante

      return newStudent;
    } catch (error) {
      console.log(
        "🚀 ~ file: student.manager.js:42 ~ StudentManager ~ createStudent= ~ error:",
        error
      );
    }
  };
}

module.exports = StudentManager;
