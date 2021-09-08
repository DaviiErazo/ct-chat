import { Message } from "../../domain/Message";
import { MessageRepository } from "../../domain/interface/MessageRepository";

export class MessageDeleter {
  constructor(private repository: MessageRepository) {}

  async run(id: string): Promise<Message> {
    const message = await this.repository.delete(id);
    return message;
  }
}
