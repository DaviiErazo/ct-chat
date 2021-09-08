import { Message } from "../../../../modules/Messages/domain/Message";
import { MessageRepository } from "../../../../modules/Messages/domain/interface/MessageRepository";
import { NotExists } from "../../../../modules/Shared/domain/error/NotExists";
import { NotFound } from "../../../../modules/Shared/domain/error/NotFound";
import { ModelSortDirection } from "../../../../modules/Shared/domain/types";

export class MessageRepositoryMock implements MessageRepository {
  private messagesMock: Message[] = [];

  async save(message: Message): Promise<Message> {
    this.messagesMock.push(message);
    return message;
  }

  assertLastSavedMessageIs(expected: Message): void {
    const lastSavedMessage = this.messagesMock[this.messagesMock.length - 1] as Message;
    expect(lastSavedMessage).toBeInstanceOf(Message);
    expect(lastSavedMessage.toDto().content).toEqual(expected.toDto().content);
  }

  async exists(id: string): Promise<boolean> {
    const message = this.messagesMock.find((message) => message.id.toString() === id);
    return !!message === true;
  }

  async list(limit: number, page: number, sortDirection: ModelSortDirection): Promise<Message[]> {
    return this.messagesMock;
  }

  async delete(id: string): Promise<Message> {
    const message = this.messagesMock.find((message) => message.id.toString() === id);
    if (!message) throw new NotExists("Message", id);

    this.messagesMock = this.messagesMock.filter((message) => message.id.toString() != id);

    return message;
  }

  async getMessageById(id: string): Promise<Message> {
    const document = this.messagesMock.find((message) => message.id.toString() === id);

    if (!document) throw new NotFound("Message", id);

    return document;
  }
}
