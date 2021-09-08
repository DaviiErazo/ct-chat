import { Query } from "../../../Shared/domain/Query";
import { ModelSortDirection } from "../../../Shared/domain/types";
import { ListMessageInputData } from "../../domain/interface/command";

export class ListMessagesQuery implements Query {
  readonly limit: number;
  readonly page: number;
  readonly sortDirection: ModelSortDirection;

  constructor(request: ListMessageInputData) {
    this.limit = request.limit;
    this.page = request.page;
    this.sortDirection = request.sortDirection;
  }
}
