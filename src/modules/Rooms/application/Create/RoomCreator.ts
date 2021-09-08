import { Room } from "../../domain/Room";
import { RoomRepository } from "../../domain/interface/RoomRepository";

export class RoomCreator {
  constructor(private repository: RoomRepository) {}

  async run(room: Room): Promise<Room> {
    const response = await this.repository.save(room);
    return response;
  }
}
