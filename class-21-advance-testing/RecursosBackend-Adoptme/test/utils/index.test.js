import { expect } from "chai";
import { createHash } from "../../src/utils/index.js";
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
    it("should ", () => {});
  });
});
