const { Router } = require("express");

const handlePolicies = require("../middleware/handle-policies.middleware");
const noteModel = require("../model/notes.model");
const userModel = require("../model/user.model");

const router = Router();

router.get("/", handlePolicies(["PUBLIC"]), async (req, res) => {
  try {
    // TODO: AGREGAR ENDPOINT GETALL NOTES
  } catch (error) {}
});

// TODO: Crear un mdw donde el admin pueda consultar cualquiera de sus notas, pero el usuario X no pueda ver las notas del usuario Y
router.get("/:noteId", handlePolicies(["USER", "ADMIN"]), async (req, res) => {
  try {
    const noteData = await noteModel.findById({ _id: req.params.noteId });
    // TODO: si no viene info de la nota mandar un respuesta adecuada

    return res.json({ message: `getNoteById`, note: noteData });
  } catch (error) {
    console.log("🚀 ~ file: notes.routes.js:17 ~ router.get ~ error:", error);
  }
});

router.post("/", handlePolicies(["USER", "ADMIN"]), async (req, res) => {
  try {
    const bodyNotes = req.body;
    // TODO: Agregar validaciones para la creacion de la nota
    const newNote = await noteModel.create(bodyNotes);
    const {
      user: { id },
    } = req.user;
    console.log(
      "🚀 ~ file: notes.routes.js:24 ~ router.post ~ req.user:",
      req.user
    );

    const userData = await userModel.findById({ _id: id });

    userData.notes.push({ note: newNote._id });
    const updatedNotes = await userModel.updateOne({ _id: id }, userData);

    if (!updatedNotes.acknowledged) {
      return res.status(500).json({
        message: `note has been created but can not be related`,
      });
    }

    return res.json({
      message: `note has been created and related successfuly`,
      note: newNote,
      relatated: updatedNotes,
    });
  } catch (error) {
    console.log("🚀 ~ file: notes.routes.js:46 ~ router.post ~ error:", error);
  }
});

router.delete("/:noteId", handlePolicies(["ADMIN"]), async (req, res) => {
  try {
    // TODO: Recordar validar el noteId

    const deleteNote = await noteModel.deleteOne({ _id: req.params.noteId });

    // TODO: Revisar falsos positivos o algun problema durante la eliminacion

    return res.json({
      message: `deleteNoteById`,
      note: deleteNote,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: notes.routes.js:28 ~ router.delete ~ error:",
      error
    );
  }
});

module.exports = router;
