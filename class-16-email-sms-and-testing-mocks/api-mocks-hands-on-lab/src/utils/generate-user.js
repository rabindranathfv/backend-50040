import { faker } from "@faker-js/faker";
import { generateProduct } from "./generate-products.js";

faker.locale = "en";

export const generateUser = () => {
  let numProd = parseInt(faker.random.numeric(1, { bannedDigits: ["0"] }));
  let products = [];
  for (let index = 0; index < numProd; index++) {
    products.push(generateProduct());
  }

  return {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: faker.helpers.arrayElement(["CLIENT", "VENDOR"]),
    premiun: faker.datatype.boolean(),
    gender: faker.name.sex(),
    birthdate: faker.date.birthdate(),
    phone: faker.phone.number(),
    products,
    image: faker.image.image(),
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email(),
  };
};
