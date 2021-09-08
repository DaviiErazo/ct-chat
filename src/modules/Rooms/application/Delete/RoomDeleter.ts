import { RoomRepository } from "../../domain/interface/RoomRepository";
import { Room } from "../../domain/Room";

export class RoomDeleter {
  constructor(private repository: RoomRepository) {}

  async run(id: string): Promise<Room> {
    const room = await this.repository.delete(id);
    return room;
  }
}
