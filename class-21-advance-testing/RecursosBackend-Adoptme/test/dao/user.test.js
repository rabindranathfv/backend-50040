import mongoose from "mongoose";
import Assert from "assert";
import Users from "../../src/dao/Users.dao.js";

const PORT_APP = Number(PORT) || 5000;
// const DB_HOST_ENV = "mongodb";
const DB_HOST_ENV = "localhost";
const DB_PORT = 27017;
const DB_NAME = "MongoDBAdoptMe";

export const MONGO_URL = `mongodb://${DB_HOST_ENV}:${DB_PORT}/${DB_NAME}`;

mongoose
  .connect(`${MONGO_URL}`)
  .then((conn) => {
    console.log(`🚀 ~ CONECT WITH MONGO URL TEST:`);
  })
  .catch((err) => {
    console.log("🚀 ~ TESTs err: ", err);
  });

const assert = Assert.strict;

describe("User dao tests cases", () => {
  before(function () {
    console.log("Before");
    this.usersDao = new Users();
  });

  beforeEach(function () {
    console.log("before each TEST!!!");
    this.timeout(5000);
  });

  after(function () {
    console.log("AFTER");
  });

  afterEach(function () {
    console.log("after each TEST - F");
  });

  it("should get all Users", async function () {
    console.log(this.usersDao);

    const result = await this.usersDao.get();
    console.log("🚀 ~ file: user.test.js:47 ~ result:", result);

    assert.strictEqual(Array.isArray(result), true);
  });

  it("should get all Users is empty", async function () {
    console.log(this.usersDao);

    const result = await this.usersDao.get();
    console.log("🚀 ~ file: user.test.js:47 ~ result:", result);

    assert.strictEqual(Array.isArray(result), true);
    // TODO verificar que no haya usuarios
  });

  describe("getBy id cases", () => {
    it("should get all Users", async function () {
      console.log(this.usersDao);
    });
  });
});
