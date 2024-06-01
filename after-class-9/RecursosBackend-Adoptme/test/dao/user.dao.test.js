import mongoose from "mongoose";
import UserDao from "../../src/dao/Users.dao.js";
import { MONGO_URL } from "../../src/app.js";
import userModel from "../../src/dao/models/User.js";
import { expect } from "chai";

const userMockData = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    password: "password",
    role: "user",
  },
  {
    first_name: "carl",
    last_name: "herrera",
    email: "cherrera@example.com",
    password: "password",
    role: "admin",
  },
  {
    first_name: "rabin",
    last_name: "rferreira",
    email: "rferreira@example.com",
    password: "password",
    role: "admin",
  },
];

describe("User dao tests cases", () => {
  let userDao;

  before(async () => {
    console.log("BEFORE");
    await mongoose.connect(MONGO_URL);
  });

  after(async () => {
    console.log("AFTER");
    await mongoose.connection.close();
  });

  beforeEach(() => {
    console.log("BEFORE EACH");
    userDao = new UserDao();
  });

  afterEach(() => {
    console.log("AFTER EACH");
    // probar luego el drop de las laminas
    userModel
      .deleteMany({})
      .then((res) => {})
      .catch((e) => {});
  });

  it("should get all Users", (done) => {
    userDao
      .save(userMockData[0])
      .then((res) => {
        expect(res._id).to.be.ok;

        userDao
          .get()
          .then((res) => {
            expect(Array.isArray(res)).to.be.true;
            expect(res).to.have.lengthOf(1);
            done();
          })
          .catch((error) => {
            done(error);
          });
      })
      .catch((error) => {
        done(error);
      });
  });

  it("should create a new user", (done) => {
    const createdUser = userDao
      .save({
        first_name: "John",
        last_name: "Doe",
        email: "john@example.com",
        password: "password",
        role: "user",
      })
      .then((res) => {
        expect(res.first_name).to.equal(userMockData[0].first_name);
        expect(res.last_name).to.equal(userMockData[0].last_name);
        expect(res.email).to.equal(userMockData[0].email);
        expect(res.password).to.equal(userMockData[0].password);
        expect(res.pets).to.deep.equal([]);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  describe("test userDao getBy Method", () => {
    it("should get an existing user search by email ", (done) => {
      const createdUser = userDao.save(userMockData[2]).then((res) => {
        userDao
          .getBy({ email: res.email })
          .then((res) => {
            expect(res.first_name).to.equal(userMockData[2].first_name);
            expect(res.last_name).to.equal(userMockData[2].last_name);
            expect(res.email).to.equal(userMockData[2].email);
            done();
          })
          .catch((error) => {
            done(error);
          });
      });
    });

    it("should get an existing user search by id", async () => {
      const newUser = await userDao.save(userMockData[2]);

      const user = await userDao.getBy({ _id: newUser._id });
      expect(user.pets).to.deep.equal([]);
      expect(user.first_name).to.eq(userMockData[2].first_name);
      expect(user.role).to.eq(userMockData[2].role);
    });
  });

  describe("test userDay delete method", () => {
    it("should delete and existing user", async () => {
      await userDao.save(userMockData[0]);
      const newUser = await userDao.save(userMockData[2]);

      const deletedUser = await userDao.delete(newUser._id);
      expect(deletedUser).to.be.ok;
      expect(deletedUser.first_name).to.eq("rabin");

      const users = await userDao.get();
      expect(users).to.have.lengthOf(1);
      expect(users.length).to.equal(1);
      expect(users.length).to.be.not.equal(2);
      expect(users[0].first_name).to.eq(userMockData[0].first_name);
    });

    it("should pass and user id but this user does not exist", async () => {
      await userDao.save(userMockData[0]);
      const newUser = await userDao.save(userMockData[2]);
      const userIdNonExist = `647b5af65b148d155110d3ea`;

      const deletedUser = await userDao.delete(userIdNonExist);
      expect(deletedUser).to.eq(null);
    });
  });
});
