import { CreateMessageCommand } from "../../../../modules/Messages/application/Create/CreateMessageCommand";
import { Message } from "../../../../modules/Messages/domain/Message";
import { MessageContentMother } from "./MessageContentMother";
import { MessageIdMother } from "./MessageIdMother";

export class MessageMother {
  static create(roomId: string, content: string): Message {
    return Message.create({ roomId, content });
  }

  static fromCommand(command: CreateMessageCommand): Message {
    return this.create(MessageIdMother.create(command.roomId), MessageContentMother.create(command.content));
  }

  static random(): Message {
    return this.create(MessageIdMother.random(), MessageContentMother.random());
  }
}
