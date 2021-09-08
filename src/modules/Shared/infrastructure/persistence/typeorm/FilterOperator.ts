import { Equal, Not, MoreThan, LessThan, FindOperator } from "typeorm/";
import { InvalidArgumentError } from "../../../domain/value-object/InvalidArgumentError";

export enum Operator {
  EQUAL = "=",
  NOT_EQUAL = "!=",
  GT = ">",
  LT = "<",
  CONTAINS = "CONTAINS",
  NOT_CONTAINS = "NOT_CONTAINS",
}

export const filterOperator = (operator: String, value: String): FindOperator<String> => {
  switch (operator) {
    case Operator.EQUAL:
      return Equal(value);
    case Operator.NOT_EQUAL:
      return Not(Equal(value));
    case Operator.GT:
      return MoreThan(value);
    case Operator.LT:
      return LessThan(value);
    default:
      throw new InvalidArgumentError(`The filter operator ${value} is invalid`);
  }
};
