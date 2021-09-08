import { CreateRoomCommand } from "../../../../../modules/Rooms/application/Create/CreateRoomCommand";
import { RoomNameMother } from "../../domain/RoomNameMother";

export class CreateRoomCommandMother {
  static create(name) {
    return new CreateRoomCommand({ name });
  }

  static random(): CreateRoomCommand {
    return this.create(RoomNameMother.random());
  }
}
