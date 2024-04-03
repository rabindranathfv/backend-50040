const studentModel = require("../model/students.model");

class StudentService {
  constructor() {}

  getAllStudents = async () => {
    let students = await studentModel.find();
    return students;
  };

  createStudent = async (studentBody) => {
    return studentModel.create(studentBody);
  };

  getStudentByIdSrv = async (userId) => {
    try {
      const student = await studentModel.find({ _id: userId });

      return student;
    } catch (error) {
      console.log(
        "🚀 ~ file: student.service.js:18 ~ getStudentById ~ error:",
        error
      );
    }
  };
}

module.exports = StudentService;
