import { Command } from "../../../Shared/domain/Command";
import { CreateRoomInputData } from "../../domain/interface/command";

export class CreateRoomCommand extends Command {
  readonly name: string;

  constructor(request: CreateRoomInputData) {
    super();
    this.name = request.name;
  }
}
