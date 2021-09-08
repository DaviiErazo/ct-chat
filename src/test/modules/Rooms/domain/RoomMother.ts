import { CreateRoomCommand } from "../../../../modules/Rooms/application/Create/CreateRoomCommand";
import { Room } from "../../../../modules/Rooms/domain/Room";
import { RoomNameMother } from "./RoomNameMother";

export class RoomMother {
  static create(name: string): Room {
    return Room.create({ name });
  }

  static fromCommand(command: CreateRoomCommand): Room {
    return this.create(
      RoomNameMother.create(command.name),
    );
  }

  static random(): Room {
    return this.create(RoomNameMother.random());
  }
}
