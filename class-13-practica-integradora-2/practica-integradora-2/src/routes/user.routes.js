const { Router } = require("express");

const handlePolicies = require("../middleware/handle-policies.middleware");
const userModel = require("../model/user.model");

const router = Router();

router.get("/", handlePolicies(["PUBLIC"]), async (req, res) => {
  try {
    // TODO: AGREGAR ENDPOINT DE GELL ALL USER
  } catch (error) {}
});

router.get("/:userId", handlePolicies(["USER", "ADMIN"]), async (req, res) => {
  try {
    // TODO: VALIDAR EL ID DE LOS PARAMETROS, Q TENGA LA FORMA DE UN ID EN MONGOOSE

    const userData = await userModel.findById({ _id: req.params.userId });

    if (!userData) {
      return res.status(404).json({ message: `getUserById empty` });
    }
    return res.json({ message: `getUserById`, user: userData });
  } catch (error) {
    console.log("🚀 ~ file: user.routes.js:16 ~ router.get ~ error:", error);
  }
});

// ADD Note to an user, se podria quitar el parametro userId (pensarlo y probarlo)
router.post(
  "/:userId/notes/:noteId",
  handlePolicies(["USER", "ADMIN"]),
  async (req, res) => {
    try {
      const { noteId, userId } = req.params;
      // si el userId tiene algun problema se le atribuira la nota al usuario con la session actual
      const userData = await userModel.findById({ _id: userId || req.user.id });

      userData.notes.push({ note: noteId });

      const updateUser = await userModel.updateOne(
        { _id: userId || req.user.id },
        userData
      );
      return res.json({
        message: `getUserById for USER ROLE`,
        user: updateUser,
      });
    } catch (error) {
      console.log("🚀 ~ file: user.routes.js:46 ~ error:", error);
    }
  }
);

// TODO: Hacer update del usuario (sin actualizar el password)

router.delete("/:userId", handlePolicies(["ADMIN"]), async (req, res) => {
  console.log(
    "🚀 ~ file: user.routes.js:36 ~ aqui solo entra el ADMIN",
    req.user
  );
  try {
    const deleteUser = await userModel.deleteOne({ _id: req.params.userId });
    return res.json({
      message: `deleteUserById with ROLE ADMIN`,
      user: deleteUser,
    });
  } catch (error) {
    console.log("🚀 ~ file: user.routes.js:47 ~ router.delete ~ error:", error);
  }
});

module.exports = router;
