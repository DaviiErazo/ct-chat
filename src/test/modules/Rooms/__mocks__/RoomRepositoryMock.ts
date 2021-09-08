import { Room } from "../../../../modules/Rooms/domain/Room";
import { Room as OrmRoom } from "../../../../modules/Rooms/infrastructure/persistence/typeorm/entity/Room";
import { RoomRepository } from "../../../../modules/Rooms/domain/interface/RoomRepository";
import { NotExists } from "../../../../modules/Shared/domain/error/NotExists";
import { NotFound } from "../../../../modules/Shared/domain/error/NotFound";

export class RoomRepositoryMock implements RoomRepository {
  private roomsMock: Room[] = [];

  async save(room: Room): Promise<Room> {
    this.roomsMock.push(room);
    return room;
  }

  assertLastSavedRoomIs(expected: Room): void {
    const lastSavedRoom = this.roomsMock[this.roomsMock.length - 1] as Room;
    expect(lastSavedRoom).toBeInstanceOf(Room);
    expect(lastSavedRoom.toDto().name).toEqual(expected.toDto().name);
  }

  async exists(id: string): Promise<boolean> {
    const room = this.roomsMock.find((room) => room.id.toString() === id);
    return !!room === true;
  }

  async search(criteria: any): Promise<OrmRoom[]> {
    console.log(criteria);
    return [];
  }

  async delete(id: string): Promise<Room> {
    const room = this.roomsMock.find((room) => room.id.toString() === id);
    if (!room) throw new NotExists("Room", id);

    this.roomsMock = this.roomsMock.filter((room) => room.id.toString() != id);

    return room;
  }

  async getRoomById(id: string): Promise<Room> {
    const document = this.roomsMock.find((room) => room.id.toString() === id);

    if (!document) throw new NotFound("Room", id);

    return document;
  }
}
