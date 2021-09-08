import { Command } from "../../../Shared/domain/Command";
import { DeleteRoomInputData } from "../../domain/interface/command";

export class DeleteRoomCommand extends Command {
  readonly id: string;

  constructor(request: DeleteRoomInputData) {
    super();
    this.id = request.id;
  }
}
