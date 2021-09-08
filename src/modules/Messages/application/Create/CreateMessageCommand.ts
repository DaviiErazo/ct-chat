import { Command } from "../../../Shared/domain/Command";
import { CreateMessageInputData } from "../../domain/interface/command";

export class CreateMessageCommand extends Command {
  readonly roomId: string;
  readonly content: string;

  constructor(request: CreateMessageInputData) {
    super();
    this.roomId = request.roomId;
    this.content = request.content;
  }
}
