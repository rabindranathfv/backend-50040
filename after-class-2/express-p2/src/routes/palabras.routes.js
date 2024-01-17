const { Router } = require("express");

const initialPhrase = "Frase Inicial";
let phrase = initialPhrase.toLocaleLowerCase();

const router = Router();
// RUTA BASE--> api/palabras;

const WORDS_PATH = "/palabras";
const PHRASE_PATH = "/frase";

// api/palabras/frase
router.get(`${PHRASE_PATH}`, (req, res) => {
  return res.json({
    ok: true,
    message: `Frase Actual`,
    phrase: phrase,
  });
});

// api/palabras/:pos
router.get(`${WORDS_PATH}/:pos`, (req, res) => {
  const wordPosition = req.params.pos;

  if (isNaN(wordPosition)) {
    return res.status(400).json({
      ok: false,
      message: `client side error`,
    });
  }

  const position = Number(wordPosition);

  const words = phrase.split(" ");

  if (position <= 0 || position > words.length) {
    return res
      .status(400)
      .json({ ok: false, message: `this position does not exist` });
  }
  return res.json({
    ok: true,
    message: `palabra encontrada en la posicion ${position}`,
    search: words[position - 1],
  });
});

router.post(`${WORDS_PATH}/`, (req, res) => {
  const { palabra } = req.body;

  phrase = phrase + ` ${palabra}`;

  return res.json({
    ok: true,
    message: `la palabra agregada es ${palabra}`,
    word: palabra,
    pos: phrase.split(" ").length,
  });
});

router.put(`${WORDS_PATH}/:pos`, (req, res) => {
  const wordPosition = req.params.pos;
  const { palabra } = req.body;

  if (isNaN(wordPosition)) {
    return res.status(400).json({
      ok: false,
      message: `la posicion ingresada es invalida ${wordPosition}`,
      pos: wordPosition,
    });
  }

  const position = Number(wordPosition);
  const listWords = phrase.split(" ");

  if (position <= 0 || position > listWords.length) {
    return res
      .status(400)
      .json({ ok: false, message: `posicion fuera del rango de la frase` });
  }

  const afterWord = listWords[position - 1]; // la palabra antes de actualizarla
  listWords[position - 1] = palabra; // busco la posicion de la palabra y actualizo la palabra con el nuevo contenido
  phrase = listWords.join(" "); // reconstruyo la frase

  res.json({ ok: true, message: ``, wordUpdated: palabra, afterWord });
});

router.delete(`${WORDS_PATH}/:pos`, (req, res) => {
  const { pos } = req.params;

  if (isNaN(pos)) {
    return res.status(400).json({
      ok: false,
      message: `client side error trying to delete`,
    });
  }

  const position = Number(pos);
  const listWord = phrase.split(" ");

  if (position <= 0 || position > listWord.length) {
    return res.status(400).json({
      ok: false,
      message: `this position does not exist, so you can not delete this word`,
    });
  }

  const deleteWord = listWord[position - 1];
  listWord.splice(position - 1, 1);

  phrase = listWord.join(" ");

  return res.json({
    ok: true,
    message: `palabra elminiada en la posicion ${pos}`,
    delete: deleteWord,
    phrase: listWord.join(" "),
  });
});

module.exports = router;
