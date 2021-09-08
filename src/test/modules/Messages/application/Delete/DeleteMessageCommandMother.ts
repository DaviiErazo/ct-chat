import { DeleteMessageCommand } from "../../../../../modules/Messages/application/Delete/DeleteMessageCommand";
import { MessageIdMother } from "../../domain/MessageIdMother";

export class DeleteMessageCommandMother {
  static create(id: string) {
    return new DeleteMessageCommand({id});
  }

  static random(): DeleteMessageCommand {
    return this.create(MessageIdMother.random());
  }
}
