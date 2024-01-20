const { Router } = require("express");
const { uploader } = require("../utils");

const router = Router();

const petsList = [];

router.get("/", (req, res) => {
  return res.json({
    ok: true,
    pets: petsList,
  });
});

// GET /api/pets/:petId
router.get(`/:petId`, (req, res) => {
  return res.json({
    ok: true,
  });
});

// POST /api/pets/
router.post(`/`, uploader.single("thumbail"), (req, res) => {
  const file = req.file;
  console.log("🚀 ~ router.post ~ file: ******", file);

  if (!file) {
    return res.status(400).send({ message: "Couldn't upload file" });
  }

  const newPet = req.body;
  console.log("🚀 ~ router.post ~ newPet:", newPet);
  const lastId = petsList.length > 0 ? petsList[petsList.length - 1].id + 1 : 1;
  newPet.thumbnail = `http://localhost:5000/public/uploads/${file.filename}`;

  petsList.push({ id: lastId, ...newPet });

  res.json({
    ok: true,
    message: `mascota a gregada exitosamente`,
    pet: newPet,
  });
});

// PUT/api/pets/:petId
router.put(`/:petId`, (req, res) => {});

// DELETE /api/pets/:petId
router.delete(`/:petId`, (req, res) => {});

module.exports = router;
