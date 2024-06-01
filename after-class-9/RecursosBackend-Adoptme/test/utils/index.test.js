import { expect } from "chai";
import { createHash, passwordValidation } from "../../src/utils/index.js";
import { it } from "mocha";

describe("Testing utils function with bcrypt", () => {
  describe("Testing createHash METHOD", () => {
    it("should test with password data if the hash is created successfully", async () => {
      const password = "123456";
      const hashPSW = await createHash(password);
      console.log("🚀 ~ file: index.test.js:10 ~ it ~ hashPSW:", hashPSW);

      expect(hashPSW).to.be.not.eq(password);
      expect(typeof hashPSW).to.be.eq("string");
    });
  });

  describe("Testing passwordValidation METHOD", () => {
    it("should test with password if IT'S MATCHES WITH ENCRYPTED PASSWORD", async () => {
      const password = "123456";
      const hashedPsw = await createHash(password);
      expect(hashedPsw).to.be.not.eq(password);
      const userMock = {
        first_name: "rabin",
        password: hashedPsw,
      };

      const isValidPsw = await passwordValidation(userMock, password);
      expect(isValidPsw).to.be.true;
    });

    it("should test with wrong password if IT'S NOT MATCHES WITH ENCRYPTED PASSWORD", async () => {
      const passwordFromBody = "hola";

      const passwordOK = "123456";
      const hashPsw = await createHash(passwordOK);
      expect(hashPsw).to.be.not.eq(passwordOK);
      const userMock = {
        first_name: "rabin",
        password: hashPsw,
      };

      const isValidPsw = await passwordValidation(userMock, passwordFromBody);
      expect(isValidPsw).to.be.false;
    });
  });
});
