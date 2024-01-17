const { Router } = require("express");

const router = Router();

const listAnimals = [
  {
    name: "perrito",
    specie: "mamifero",
  },
  {
    name: "pelusa",
    specie: "mamifero",
  },
  {
    name: "willy",
    specie: "Cetaceos",
  },
  {
    name: "Sebastian",
    specie: "crustacean",
  },
];

// api/animals/'
router.get(`/`, (req, res) => {
  return res.status(200).json({
    animales: listAnimals,
  });
});

// api/animals/:animalName
router.get(`/:animalName`, (req, res) => {
  const { animalName } = req.params;
  console.log("🚀 ~ router.get ~ animalName:", animalName);

  const findAnimal = listAnimals.find(
    (animal) => animal.name === animalName.trim().toLocaleLowerCase()
  );

  if (!findAnimal) {
    return res.status(404).json({
      message: `animal does not exist`,
    });
  }

  return res.json({
    animal: findAnimal,
  });
});

// api/animals/
router.post(`/`, (req, res) => {
  console.log("***BODY***", req.body);

  const newAnimal = {
    name: req.body.name,
    specie: req.body.specie,
  };
  listAnimals.push(newAnimal);
  return res.json({
    animal: newAnimal,
  });
});

module.exports = router;
