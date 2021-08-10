import { InvalidArgumentError } from "./InvalidArgumentError";

export abstract class StringValueObject {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  toString(): string {
    return this.value;
  }

  public static againstNullOrUndefined(name: string, value: string): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError(`The ${name} <${value}> is invalid`);
    }
  }
}
