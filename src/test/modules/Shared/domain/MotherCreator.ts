import * as faker from 'faker';

export class MotherCreator {
  static random(): faker.FakerStatic {
    return faker;
  }
}
