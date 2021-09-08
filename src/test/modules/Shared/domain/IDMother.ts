import { MotherCreator } from "./MotherCreator";

export class IDMother {
  static random(): string {
    return MotherCreator.random().datatype.uuid();
  }
}
