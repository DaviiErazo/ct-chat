import { CommandHandler } from "../../../Shared/domain/CommandHandler";
import { DeleteRoomOutputData, DeleteRoomPresenter } from "../../domain/interface/presenter";
import { DeleteRoomCommand } from "./DeleteRoomCommand";
import { RoomDeleter } from "./RoomDeleter";

export class DeleteRoomCommandHandler implements CommandHandler<DeleteRoomCommand> {
  private deleter: RoomDeleter;
  private presenter: DeleteRoomPresenter;

  constructor(deleter: RoomDeleter, presenter: DeleteRoomPresenter) {
    this.deleter = deleter;
    this.presenter = presenter;
  }

  subscribedTo(): string {
    return DeleteRoomCommand.name;
  }

  async handle(command: DeleteRoomCommand): Promise<DeleteRoomPresenter> {
    const response = await this.deleter.run(command.id);

    const outPutData: DeleteRoomOutputData = { room: response.toDto() };
    this.presenter.output(outPutData);

    return this.presenter;  }
}