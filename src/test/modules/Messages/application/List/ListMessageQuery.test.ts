import { ListMessagesQueryHandler } from "../../../../../modules/Messages/application/List/ListMessagesQueryHandler";
import { ListMessages } from "../../../../../modules/Messages/application/List/ListMessages";
import { ListMessagePresenter } from "../../../../../modules/Messages/domain/interface/presenter";
import { GqlListMessagePresenter } from "../../../../../modules/Messages/infrastructure/presenter/GqlListMessagePresenter";
import { ListMessageQueryMother } from "./ListMessageQueryMother";
import { MessageRepositoryMock } from "../../__mocks___/MessageRepositoryMock";
import { CreateMessagesCommandMother } from "../Create/CreateMessageCommandMother";
import { Message } from "../../../../../modules/Messages/domain/Message";

let repository: MessageRepositoryMock;
let handler: ListMessagesQueryHandler;
let presenter: ListMessagePresenter;
let list: ListMessages;

beforeEach(() => {
  repository = new MessageRepositoryMock();
  presenter = new GqlListMessagePresenter();
  list = new ListMessages(repository);
  handler = new ListMessagesQueryHandler(list, presenter);
});

afterAll(() => {
  repository = new MessageRepositoryMock();
});

const seedRepositoryMock = async (limit): Promise<void> => {
  for (var i = 0; i < limit; i++) {
    const command = CreateMessagesCommandMother.random();
    const message = Message.create(command);
    await repository.save(message);
  }
};

describe("MessageList", () => {
  it("should list a valid messages", async () => {
    const page = 1;
    const limit = 5;
    await seedRepositoryMock(limit)

    const command = ListMessageQueryMother.create(limit, page, "DESC");
    const response = await handler.handle(command);

  });
});
