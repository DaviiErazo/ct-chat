import { ListMessagesQuery } from "../../../../../modules/Messages/application/List/ListMessagesQuery";
import { NumberMother } from "../../../Shared/domain/NumberMother";

export class ListMessageQueryMother {
  static create(limit, page, sortDirection) {
    return new ListMessagesQuery({ limit, page, sortDirection });
  }

  static random(): ListMessagesQuery {
    return this.create(NumberMother.random(), NumberMother.random(), 'DESC');
  }
}