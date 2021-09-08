
import { RoomRepository } from "../../domain/interface/RoomRepository";
import { Room } from "../../infrastructure/persistence/typeorm/entity/Room";

export class RoomsByCriteriaSearcher {
  constructor(private repository: RoomRepository) {}

  async run(criteria: any): Promise<Room[]> {
    const rooms = await this.repository.search(criteria);

    return rooms;
  }
}
