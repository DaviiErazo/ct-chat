import { DeleteRoomCommand } from "../../../../../modules/Rooms/application/Delete/DeleteRoomCommand";
import { RoomIdMother } from "../../domain/RoomIdMother";

export class DeleteRoomCommandMother {
  static create(id: string) {
    return new DeleteRoomCommand({id});
  }

  static random(): DeleteRoomCommand {
    return this.create(RoomIdMother.random());
  }
}
