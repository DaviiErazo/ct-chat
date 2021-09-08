import { Message } from "../../domain/Message";
import { MessageCreator } from "./MessageCreator";
import { CreateMessageCommand } from "./CreateMessageCommand";
import { CommandHandler } from "../../../Shared/domain/CommandHandler";
import { CreateMessageOutputData, CreateMessagePresenter } from "../../domain/interface/presenter";

export class CreateMessageCommandHandler implements CommandHandler<CreateMessageCommand> {
  private creator: MessageCreator;
  private presenter: CreateMessagePresenter;

  constructor(creator: MessageCreator, presenter: CreateMessagePresenter) {
    this.creator = creator;
    this.presenter = presenter;
  }

  subscribedTo(): String {
    return CreateMessageCommand.name;
  }

  async handle(command: CreateMessageCommand): Promise<CreateMessagePresenter> {
    const message = Message.create(command);

    const response = await this.creator.run(message);

    const outPutData: CreateMessageOutputData = { message: response.toDto() };
    this.presenter.output(outPutData);

    return this.presenter;
  }
}
