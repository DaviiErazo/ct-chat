import { Connection, Repository } from "typeorm";
import { NotExists } from "../../../../Shared/domain/error/NotExists";
import { Room } from "../../../domain/Room";
import { RoomRepository as TypeRoomRepository } from "../../../domain/interface/RoomRepository";
import { OrmRoomFactory, Room as OrmRoom } from "./entity/Room";

export class RoomRepository implements TypeRoomRepository {
  constructor(private dbConnection: Promise<Connection>) {}

  protected async repository(): Promise<Repository<OrmRoom>> {
    const conn = await this.dbConnection;
    const repository = await conn.getRepository(OrmRoom);

    return repository;
  }

  public async save(room: Room): Promise<Room> {
    const orm = new OrmRoom(room.id.toString(), room.name);
    const repository = await this.repository();

    const saved = await repository.save(orm);

    return OrmRoomFactory.toEntity(saved);
  }

  public async exists(id: string): Promise<boolean> {
    const repository = await this.repository();
    const room = await repository.findOne(id);

    return !!room === true;
  }

  public async delete(id: string): Promise<Room> {
    const repository = await this.repository();

    const room = await repository.findOne(id);
    if (!room) throw new NotExists("Room", id);

    await repository.softDelete(id);
    
    return OrmRoomFactory.toEntity(room);
  }

  public async search(criteria: any): Promise<OrmRoom[]> {
    const repository = await this.repository();
    const rooms = await repository.find();

    return rooms;
  }
}
