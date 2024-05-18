import GenericRepository from "./GenericRepository.js";

export default class PetRepository extends GenericRepository {
  constructor(dao) {
    super(dao);
    console.log(" REPOSITORY PETS**");
  }
}
