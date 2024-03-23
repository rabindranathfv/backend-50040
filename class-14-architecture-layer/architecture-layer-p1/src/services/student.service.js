const studentModel = require("../model/students.model");

const getAllStudents = async () => {
  let students = await studentModel.find();
  return students;
};

const createStudent = async (studentBody) => {
  return studentModel.create(studentBody);
};

const getStudentByIdSrv = async (userId) => {
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

module.exports = {
  getAllStudents,
  createStudent,
  getStudentByIdSrv,
};
