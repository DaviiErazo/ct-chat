import { Message } from "../../../../modules/Messages/domain/Message";
import { CreateMessagesCommandMother } from "../application/Create/CreateMessageCommandMother";
import { MessageMother } from "./MessageMother";
import { MessageIdMother } from "./MessageIdMother";
import { MessageContentMother } from "./MessageContentMother";

describe("Message", () => {
  it("should return a new message instance", async () => {
    const command = CreateMessagesCommandMother.random();
    const message = MessageMother.fromCommand(command);

    expect(message.content).toBe(command.content);
  });

  it("shouldn't record a MessageCreatedDomainEvent after its creation", () => {
    const roomId = MessageIdMother.random();
    const content = MessageContentMother.random();
    const message = Message.create({ roomId, content });

    const events = message.pullDomainEvents();

    expect(events).toHaveLength(0);
    expect(message.equals(message)).toBe(true);
    expect(message.equals()).toBe(false);
  });
});
