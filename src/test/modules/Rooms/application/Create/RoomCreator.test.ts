import { CreateRoomCommandHandler } from "../../../../../modules/Rooms/application/Create/CreateRoomCommandHandler";
import { RoomCreator } from "../../../../../modules/Rooms/application/Create/RoomCreator";
import { CreateRoomPresenter } from "../../../../../modules/Rooms/domain/interface/presenter";
import { GqlCreateRoomPresenter } from "../../../../../modules/Rooms/infrastructure/presenter/GqlCreateRoomPresenter";
import { RoomMother } from "../../domain/RoomMother";
import { RoomRepositoryMock } from "../../__mocks__/RoomRepositoryMock";
import { CreateRoomCommandMother } from "./CreateRoomCommandMother";

let repository: RoomRepositoryMock;
let handler: CreateRoomCommandHandler;
let presenter: CreateRoomPresenter;
let creator: RoomCreator;

beforeEach(() => {
  repository = new RoomRepositoryMock();
  presenter = new GqlCreateRoomPresenter();
  creator = new RoomCreator(repository);
  handler = new CreateRoomCommandHandler(creator, presenter);
});

describe("RoomCreator", () => {
  it("should create a valid room", async () => {
    const command = CreateRoomCommandMother.random();
    await handler.handle(command);

    const room = RoomMother.fromCommand(command);
    repository.assertLastSavedRoomIs(room);
  });
});
