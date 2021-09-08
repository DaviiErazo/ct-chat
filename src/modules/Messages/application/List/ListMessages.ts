import { MessageRepository } from "../../domain/interface/MessageRepository";
import { ModelSortDirection } from "../../../Shared/domain/types";
import { Message } from "../../domain/Message";

export class ListMessages {
  constructor(private repository: MessageRepository) {}

  async run(limit: number, page: number, sortDirection: ModelSortDirection): Promise<Message[]> {
    const messages = await this.repository.list(limit, page, sortDirection);
    return messages;
  }
}
