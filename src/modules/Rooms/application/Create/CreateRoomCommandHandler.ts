import { CommandHandler } from "../../../Shared/domain/CommandHandler";
import { CreateRoomOutputData, CreateRoomPresenter } from "../../domain/interface/presenter";
import { Room } from "../../domain/Room";
import { CreateRoomCommand } from "./CreateRoomCommand";
import { RoomCreator } from "./RoomCreator";

export class CreateRoomCommandHandler implements CommandHandler<CreateRoomCommand> {
  private creator: RoomCreator;
  private presenter: CreateRoomPresenter;

  constructor(creator: RoomCreator, presenter: CreateRoomPresenter) {
    this.creator = creator;
    this.presenter = presenter;
  }

  subscribedTo(): String {
    return CreateRoomCommand.name;
  }

  async handle(command: CreateRoomCommand): Promise<CreateRoomPresenter> {
    const room = Room.create(command);

    const response = await this.creator.run(room);

    const outPutData: CreateRoomOutputData = { room: response.toDto() };
    this.presenter.output(outPutData);

    return this.presenter;
  }
}
