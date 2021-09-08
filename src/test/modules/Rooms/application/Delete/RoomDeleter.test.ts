import { RoomRepositoryMock } from "../../__mocks__/RoomRepositoryMock";
import { RoomMother } from "../../domain/RoomMother";
import { DeleteRoomCommandMother } from "./DeleteRoomCommandMother";
import { DeleteRoomPresenter } from "../../../../../modules/Rooms/domain/interface/presenter";
import { GqlDeleteRoomPresenter } from "../../../../../modules/Rooms/infrastructure/presenter/GqlDeleteRoomPresenter";

import { DeleteRoomCommandHandler } from "../../../../../modules/Rooms/application/Delete/DeleteRoomCommandHandler";
import { RoomDeleter } from "../../../../../modules/Rooms/application/Delete/RoomDeleter";
import { Room } from "../../../../../modules/Rooms/domain/Room";
import { NotFound } from "../../../../../modules/Shared/domain/error/NotFound";

let repository: RoomRepositoryMock;
let handler: DeleteRoomCommandHandler;
let deleter: RoomDeleter;
let presenter: DeleteRoomPresenter;

beforeEach(() => {
  repository = new RoomRepositoryMock();
  deleter = new RoomDeleter(repository);
  presenter = new GqlDeleteRoomPresenter();
  handler = new DeleteRoomCommandHandler(deleter, presenter);
});

const addRoom = async (): Promise<Room> => {
  const room = RoomMother.random();
  await repository.save(room);

  return room;
};

describe("RoomDelete", () => {
  it("should delete a exsting room", async () => {
    let exception;

    const room = await addRoom();
    const saved = await repository.getRoomById(room.id.toString());

    expect(room).toBeInstanceOf(Room);
    expect(room.id.toString()).toBe(saved.id.toString());

    const command = DeleteRoomCommandMother.create(saved.id.toString());
    await handler.handle(command);

    try {
      await repository.getRoomById(command.id);
    } catch (error) {
      exception = error;
    }

    expect(exception).toBeInstanceOf(NotFound);
    expect(exception.message).toBe(`Room <${command.id}> not found`);
  });
});
