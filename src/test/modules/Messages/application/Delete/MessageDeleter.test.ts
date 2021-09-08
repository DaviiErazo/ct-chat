import { MessageRepositoryMock } from "../../__mocks___/MessageRepositoryMock";
import { MessageMother } from "../../domain/MessageMother";
import { DeleteMessageCommandMother } from "./DeleteMessageCommandMother";
import { DeleteMessagePresenter } from "../../../../../modules/Messages/domain/interface/presenter";
import { GqlDeleteMessagePresenter } from "../../../../../modules/Messages/infrastructure/presenter/GqlDeleteMessagePresenter";

import { DeleteMessageCommandHandler } from "../../../../../modules/Messages/application/Delete/DeleteMessageCommandHandler";
import { MessageDeleter } from "../../../../../modules/Messages/application/Delete/MessageDeleter";
import { Message } from "../../../../../modules/Messages/domain/Message";
import { NotFound } from "../../../../../modules/Shared/domain/error/NotFound";

let repository: MessageRepositoryMock;
let handler: DeleteMessageCommandHandler;
let deleter: MessageDeleter;
let presenter: DeleteMessagePresenter;

beforeEach(() => {
  repository = new MessageRepositoryMock();
  deleter = new MessageDeleter(repository);
  presenter = new GqlDeleteMessagePresenter();
  handler = new DeleteMessageCommandHandler(deleter, presenter);
});

const addMessage = async (): Promise<Message> => {
  const message = MessageMother.random();
  await repository.save(message);

  return message;
};

describe("MessageDelete", () => {
  it("should delete a exsting message", async () => {
    let exception;

    const message = await addMessage();
    const saved = await repository.getMessageById(message.id.toString());

    expect(message).toBeInstanceOf(Message);
    expect(message.id.toString()).toBe(saved.id.toString());

    const command = DeleteMessageCommandMother.create(saved.id.toString());
    await handler.handle(command);

    try {
      await repository.getMessageById(command.id);
    } catch (error) {
      exception = error;
    }

    expect(exception).toBeInstanceOf(NotFound);
    expect(exception.message).toBe(`Message <${command.id}> not found`);
  });
});
