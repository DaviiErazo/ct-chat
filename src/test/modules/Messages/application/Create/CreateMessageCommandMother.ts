import { CreateMessageCommand } from "../../../../../modules/Messages/application/Create/CreateMessageCommand";
import { MessageIdMother } from "../../domain/MessageIdMother";
import { MessageContentMother } from "../../domain/MessageContentMother";

export class CreateMessagesCommandMother {
  static create(roomId, content) {
    return new CreateMessageCommand({ roomId, content });
  }

  static random(): CreateMessageCommand {
    return this.create(MessageIdMother.random(), MessageContentMother.random());
  }
}
