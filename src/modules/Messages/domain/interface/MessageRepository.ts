import { Message } from "../Message";
import { ModelSortDirection } from "../../../Shared/domain/types";

export interface MessageRepository {
  save(message: Message): Promise<Message>;
  list(limit: number, page: number, sortDirection: ModelSortDirection): Promise<Message[]>;
  delete(id: string): Promise<Message>;
}
