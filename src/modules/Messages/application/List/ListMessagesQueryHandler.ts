import { QueryHandler } from "../../../Shared/domain/QueryHandler";
import { Query } from "../../../Shared/domain/Query";
import { ListMessages } from "./ListMessages";
import { ListMessagesQuery } from "./ListMessagesQuery";
import { ListMessageOutputData, ListMessagePresenter } from "../../domain/interface/presenter";

export class ListMessagesQueryHandler implements QueryHandler<ListMessagesQuery, ListMessagePresenter> {
  private list: ListMessages;
  private presenter: ListMessagePresenter;

  constructor(list: ListMessages, presenter: ListMessagePresenter) {
    this.list = list;
    this.presenter = presenter;
  }

  subscribedTo(): Query {
    return ListMessagesQuery.name;
  }

  async handle(command: ListMessagesQuery): Promise<ListMessagePresenter> {
    const limit = command.limit;
    const page = command.page;
    const sortDirection = command.sortDirection;

    const messages = await this.list.run(limit, page, sortDirection);

    const outPutData: ListMessageOutputData = { messages: messages.map((message) => message.toDto()) };
    this.presenter.output(outPutData);

    return this.presenter;
  }
}
