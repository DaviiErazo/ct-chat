import { CreateMessageCommandHandler } from "../../../../../modules/Messages/application/Create/CreateMessageCommandHandler";
import { MessageCreator } from "../../../../../modules/Messages/application/Create/MessageCreator";
import { CreateMessagePresenter } from "../../../../../modules/Messages/domain/interface/presenter";
import { GqlCreateMessagePresenter } from "../../../../../modules/Messages/infrastructure/presenter/GqlCreateMessagePresenter";
import { CreateMessagesCommandMother } from "./CreateMessageCommandMother";
import { MessageRepositoryMock } from "../../__mocks___/MessageRepositoryMock";
import { RoomRepositoryMock } from "../../../Rooms/__mocks__/RoomRepositoryMock";
import { NotExists } from "../../../../../modules/Shared/domain/error/NotExists";
import { CreateRoomCommandMother } from "../../../Rooms/application/Create/CreateRoomCommandMother";
import { Room } from "../../../../../modules/Rooms/domain/Room";

let messageRepository: MessageRepositoryMock;
let roomRepository: RoomRepositoryMock;
let handler: CreateMessageCommandHandler;
let presenter: CreateMessagePresenter;
let creator: MessageCreator;

beforeEach(() => {
  messageRepository = new MessageRepositoryMock();
  roomRepository = new RoomRepositoryMock();
  presenter = new GqlCreateMessagePresenter();
  creator = new MessageCreator(messageRepository, roomRepository);
  handler = new CreateMessageCommandHandler(creator, presenter);
});

const addRoom = async () => {
  const command = CreateRoomCommandMother;
  const message = Room.create(command);
  const room = await roomRepository.save(message);
  return room;
};

describe("MessageCreator", () => {
  it("shouldn't to save a message if there aren't rooms ", async () => {
    let exception;
    const command = CreateMessagesCommandMother.random();

    try {
      await handler.handle(command);
    } catch (error) {
      exception = error;
    }

    expect(exception).toBeInstanceOf(NotExists);
    expect(exception.message).toBe(`Room <${command.roomId}> not exists`);
  });
});

describe("MessageCreator", () => {
  it("should to save a message", async () => {
    const room = await addRoom();
    const content = "Hello world";
    const roomId = room.id.toString();

    const command = CreateMessagesCommandMother.create(roomId, content);
    await handler.handle(command);
  });
});
