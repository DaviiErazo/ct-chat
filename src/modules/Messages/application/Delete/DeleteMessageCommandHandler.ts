import { CommandHandler } from "../../../Shared/domain/CommandHandler";
import { Message } from "../../infrastructure/persistence/typeorm/entity/Message";
import { DeleteMessageCommand } from "./DeleteMessageCommand";
import { MessageDeleter } from "./MessageDeleter";
import { DeleteMessagePresenter, DeleteMessageOutputData } from "../../domain/interface/presenter";

export class DeleteMessageCommandHandler implements CommandHandler<DeleteMessageCommand> {
  private deleter: MessageDeleter;
  private presenter: DeleteMessagePresenter;

  constructor(deleter: MessageDeleter, presenter: DeleteMessagePresenter) {
    this.deleter = deleter;
    this.presenter = presenter;
  }

  subscribedTo(): string {
    return DeleteMessageCommand.name;
  }

  async handle(command: DeleteMessageCommand): Promise<DeleteMessagePresenter> {
    const response = await this.deleter.run(command.id);

    const outPutData: DeleteMessageOutputData = { message: response.toDto() };
    this.presenter.output(outPutData);

    return this.presenter;
  }
}
