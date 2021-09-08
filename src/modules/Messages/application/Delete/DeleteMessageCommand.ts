import { Command } from "../../../Shared/domain/Command";
import { DeleteMessageInputData } from "../../domain/interface/command";

export class DeleteMessageCommand extends Command {
  readonly id: string;

  constructor(request: DeleteMessageInputData) {
    super();
    this.id = request.id;
  }
}
