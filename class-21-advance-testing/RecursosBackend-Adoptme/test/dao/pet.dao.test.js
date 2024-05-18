import mongoose from "mongoose";
import { expect } from "chai";
import { MONGO_URL } from "../../src/app.js";
import PetDao from "../../src/dao/Pets.dao.js";

const petMockData = [
  {
    name: "titito",
    specie: "loro",
    birthDate: new Date(),
    image: "",
  },
  {
    name: "karl",
    specie: "perro",
    birthDate: new Date(),
    image: "",
  },
  {
    name: "felix",
    specie: "gatito",
    birthDate: new Date(),
    image: "",
  },
];

describe("Unit test for Pet DAO", function () {
  let petDao;

  before(async function () {
    this.timeout(20000);
    await mongoose.connect(MONGO_URL);
  });

  beforeEach(function () {
    console.log("BEFORE EACH");
    petDao = new PetDao();
  });

  after(async () => {
    await mongoose.connection.close();
  });

  it("should get all pets", async function () {
    await petDao.save(petMockData[0]);
    await petDao.save(petMockData[1]);

    const pets = await petDao.get();

    expect(Array.isArray(pets)).to.be.true;
  });

  it("should get specific info from a pet with his id", async function () {
    const gatoFelix = await petDao.save(petMockData[2]);

    const pet = await petDao.getBy(gatoFelix._id);

    expect(pet.specie).to.equal("gatito");
    expect(pet.name).to.equal("felix");
  });
});
