import { FilterType } from "./FilterType";

export const parseFilters = (params: Array<FilterType>) => {
  if (!params) {
    return new Array<Map<string, string>>();
  }

  return params.map((filter) => {
    const field = filter.field;
    const value = filter.operator;
    const operator = filter.operator;

    return new Map([
      ["field", field],
      ["operator", operator],
      ["value", value],
    ]);
  });
};
