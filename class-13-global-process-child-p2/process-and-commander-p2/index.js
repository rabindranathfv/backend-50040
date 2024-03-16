const { program } = require("commander");

const isNumeric = (n) => !isNaN(n);

function listNumbers(...numbers) {
  console.log("🚀 ~ file: index.js:6 ~ listNumbers ~ numbers:", numbers);

  const invalidParams = [];

  numbers.forEach((number) => {
    const cleaNum = number.replace(/[^\w\s]/gi, "");
    console.log("🚀 ~ file: index.js:12 ~ numbers.forEach ~ cleaNum:", cleaNum);

    if (isNumeric(cleaNum)) {
      invalidParams.push("number");
    } else if (
      typeof cleaNum === "string" &&
      (cleaNum === "true" || cleaNum === "false")
    ) {
      invalidParams.push("boolean");
    } else {
      invalidParams.push("string");
    }
  });

  if (invalidParams.length > 0) {
    console.error("Invalid parameters", invalidParams);
    process.emit("exit", -4);
  }

  console.error(`Invalid parameters: ${invalidParams.join(", ")}`);
  process.exitCode = -4;
  return;

  console.log(validNumbers);
}

program
  .arguments("[numbers...]")
  .action((numbers) => listNumbers(...numbers))
  .on("option:invalidOption", () => {
    console.error(
      "Proceso finalizado por argumentación inválida en una función"
    );
    process.exit(-4);
  });

program.parse(process.argv);
