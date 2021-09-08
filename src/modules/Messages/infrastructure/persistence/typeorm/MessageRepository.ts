import { Connection, Repository } from "typeorm";
import { Message } from "../../../domain/Message";
import { MessageRepository as IMessageRepository } from "../../../domain/interface/MessageRepository";
import { ModelSortDirection } from "../../../../Shared/domain/types";
import { Message as OrmMessage, OrmMessageFactory } from "./entity/Message";
import { NotExists } from "../../../../Shared/domain/error/NotExists";

export class MessageRepository implements IMessageRepository {
  constructor(private dbConnection: Promise<Connection>) {}

  protected async repository(): Promise<Repository<OrmMessage>> {
    const conn = await this.dbConnection;
    const repository = await conn.getRepository(OrmMessage);

    return repository;
  }

  public async save(message: Message): Promise<Message> {
    const { id, roomId, content } = message.toDto();
    const orm = new OrmMessage(id, roomId, content);

    const repository = await this.repository();
    const saved = await repository.save(orm);

    return OrmMessageFactory.toEntity(saved);
  }

  public async list(limit: number, page: number, sortDirection: ModelSortDirection): Promise<Message[]> {
    const repository = await this.repository();

    const results = await repository.find({
      order: {
        createdAt: sortDirection,
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const messages = results.map((message) => OrmMessageFactory.toEntity(message));
    return messages;
  }

  public async delete(id: string): Promise<Message> {
    const repository = await this.repository();

    const message = await repository.findOne(id);
    if (!message) throw new NotExists("Message", id);

    await repository.softDelete(id);

    return OrmMessageFactory.toEntity(message);
  }
}
