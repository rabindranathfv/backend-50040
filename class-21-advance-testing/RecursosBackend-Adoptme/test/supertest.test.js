import { expect } from "chai";
import supertest from "supertest";

const BASE_API_URL = "http://localhost:5000";
const PETS_ROUTE = "/api/pets";

describe("Functional test for Pets ENDPOINTS", () => {
  let requester;

  beforeEach(() => {
    requester = supertest(`${BASE_API_URL}`);
  });

  it("should POST /api/pests create a pet successfully with code 200 ", async () => {
    const bodyPet = {
      name: "Marcelo2",
      specie: "Perro2",
      birthDate: new Date(),
      image: "",
    };

    const { statusCode, ok, _body } = await requester
      .post(`${PETS_ROUTE}`)
      .send(bodyPet);

    expect(ok).to.be.true;
    expect(statusCode).to.eq(200);
    expect(_body.payload).to.have.property("_id");
    expect(_body.payload.adopted).to.be.false;
  });

  it("should POST /api/pests create a pet without the name and it will return 400 ", async () => {
    const bodyPet = {
      specie: "Perro2",
      birthDate: new Date(),
      image: "",
    };

    const { statusCode, ok, _body } = await requester
      .post(`${PETS_ROUTE}`)
      .send(bodyPet);

    expect(ok).to.be.false;
    expect(statusCode).to.eq(400);
    expect(_body).to.deep.equals({
      status: "error",
      error: "Incomplete values",
    });
  });

  it("should GET /api/pests create a pet successfully with code 200", async () => {
    const { statusCode, ok, _body } = await requester.get(`${PETS_ROUTE}`);

    expect(ok).to.be.true;
    expect(statusCode).to.eq(200);
    expect(_body.status).to.equal("success");
    expect(Array.isArray(_body.payload)).to.be.true;
  });

  it("should DELETE /api/pests/:pid with pet successfully with code 200", async () => {
    const bodyPet = {
      name: "felipe",
      specie: "loro",
      birthDate: new Date(),
      image: "",
    };

    const { _body: newPet } = await requester
      .post(`${PETS_ROUTE}`)
      .send(bodyPet);
    expect(newPet.payload).to.have.property("_id");

    const petIdMock = newPet.payload._id;
    const { statusCode, ok, _body } = await requester.delete(
      `${PETS_ROUTE}/${petIdMock}`
    );
    expect(ok).to.be.true;
    expect(statusCode).to.eq(200);
    expect(_body).to.deep.equals({
      status: "success",
      message: "pet deleted",
    });
  });
});
