import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
} from "typeorm";

import { Room } from "../../../../../Rooms/infrastructure/persistence/typeorm/entity/Room";
import { MessageDto } from "../../../../domain/MessageDto";
import { Message as MessageEntity } from "../../../../domain/Message";
import { UniqueEntityID } from "../../../../../Shared/domain/UniqueEntityID";

@Entity("messages")
export class Message {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  roomId: string;

  @ManyToOne(() => Room, (room) => room.messages)
  @JoinColumn({ name: "roomId" })
  room?: Room;

  @Column()
  content: string;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  @DeleteDateColumn()
  readonly deletedAt?: Date;

  constructor(id: string, roomId: string, content: string) {
    this.id = id;
    this.content = content;
    this.roomId = roomId;
  }
}

export class OrmMessageFactory {
  public static fromDto(message: MessageDto): Message {
    return {
      id: message.id.toString(),
      roomId: message.roomId,
      content: message.content,
      createdAt: message.createdAt ?? undefined,
      updatedAt: message.updatedAt ?? undefined,
      deletedAt: message.deletedAt ?? undefined,
    };
  }

  public static fromEntity(messageEntity: MessageEntity) {
    const messageSchema = messageEntity.toDto();
    return OrmMessageFactory.fromDto(messageSchema);
  }

  public static toDto(message: Message): MessageDto {
    return {
      id: message.id,
      roomId: message.roomId,
      content: message.content,
      createdAt: message.createdAt,
      updatedAt: message.updatedAt,
      deletedAt: message.deletedAt,
    };
  }

  public static toEntity(message: Message): MessageEntity {
    const schema = OrmMessageFactory.toDto(message);
    const id = new UniqueEntityID(message.id);
    return MessageEntity.create(schema, id);
  }
}
