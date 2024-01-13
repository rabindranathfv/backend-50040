const express = require("express");

const PORT = 5000;
const API_BASE_PATH = "/api";
const initialPhrase = "Frase Inicial";

const app = express();

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
    name: "sebastian",
    specie: "crustacean",
  },
];

let phrase = initialPhrase.toLocaleLowerCase();

app.use(express.urlencoded({ extends: true }));
app.use(express.json()); // middleware global

app.get(`${API_BASE_PATH}/animals`, (req, res) => {
  return res.status(200).json({
    animales: listAnimals,
  });
});

app.post(`${API_BASE_PATH}/animals`, (req, res) => {
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

app.get(`${API_BASE_PATH}/frase`, (req, res) => {
  return res.json({
    ok: true,
    message: `Frase Actual`,
    phrase: phrase,
  });
});

app.get(`${API_BASE_PATH}/palabra/:pos`, (req, res) => {
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

app.post(`${API_BASE_PATH}/palabra/`, (req, res) => {
  const { palabra } = req.body;

  phrase = phrase + ` ${palabra}`;

  return res.json({
    ok: true,
    message: `la palabra agregada es ${palabra}`,
    word: palabra,
    pos: phrase.split(" ").length,
  });
});

app.put(`${API_BASE_PATH}/palabras/:pos`, (req, res) => {
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

app.delete(`${API_BASE_PATH}/palabra/:pos`, (req, res) => {
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

app.listen(PORT, () => {
  console.log(`API RUNNING, PORT: ${PORT}`);
});
