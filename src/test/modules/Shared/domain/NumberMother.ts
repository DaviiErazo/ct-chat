import { MotherCreator } from './MotherCreator';

export class NumberMother {
  static random(): number {
    return MotherCreator.random().datatype.number();
  }
}
