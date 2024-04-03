const StudentService = require("../services/student.service");

const studentService = new StudentService();
const getAllStudentsCtrl = async (req, res) => {
  const studentList = await studentService.getAllStudents();

  return res.json({
    message: "studentlists",
    students: studentList,
  });
};
const createStudentCtrl = async (req, res) => {
  const newStudent = await studentService.createStudent(req.body);

  return res.json({
    message: `student created`,
    student: newStudent,
  });
};
const getStudentByIdCtrl = async (req, res) => {
  const { userId } = req.params;

  const student = await studentService.getStudentByIdSrv(userId);

  if (!student) {
    return res.status(404).json({
      message: "student not found",
    });
  }

  return res.json({
    message: `student info`,
    student,
  });
};

module.exports = {
  createStudentCtrl,
  getAllStudentsCtrl,
  getStudentByIdCtrl,
};
