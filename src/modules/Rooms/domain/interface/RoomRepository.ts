import { Room } from "../Room";
import { Room as OrmRoom } from "../../infrastructure/persistence/typeorm/entity/Room";

export interface RoomRepository {
  save(room: Room): Promise<Room>;
  exists(id: string): Promise<boolean>;
  search(criteria): Promise<OrmRoom[]>;
  delete(id: string): Promise<Room>;
}
