const { Router } = require("express");

const studentsModel = require("../models/students.model");
const router = Router();

// /api/views/students
router.get(`/students`, async (req, res) => {
  const { page = 1 } = req.query;
  const { docs, hasPrevPage, hasNextPage, nextPage, prevPage } =
    await studentsModel.paginate({}, { limit: 5, page, lean: true });
  res.render(`students`, {
    students: docs,
    page,
    hasPrevPage,
    hasNextPage,
    nextPage,
    prevPage,
  });
});

module.exports = router;
