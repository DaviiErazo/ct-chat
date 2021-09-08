import { Room } from "../../../../modules/Rooms/domain/Room";
import { CreateRoomCommandMother } from "../application/Create/CreateRoomCommandMother";
import { RoomMother } from "./RoomMother";
import { RoomNameMother } from "./RoomNameMother";

describe("Room", () => {
  it("should return a new room instance", async () => {
    const command = CreateRoomCommandMother.random();
    const room = RoomMother.fromCommand(command);

    expect(room.name).toBe(command.name);
  });

  it("should record a RoomCreatedDomainEvent after its creation", () => {
    const name = RoomNameMother.random();
    const room = Room.create({ name });

    const events = room.pullDomainEvents();

    expect(events).toHaveLength(0);
    expect(room.equals(room)).toBe(true);
    expect(room.equals()).toBe(false);
  });
});
