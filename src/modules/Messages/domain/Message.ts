import { AggregateRoot } from "../../Shared/domain/AggregateRoot";
import { UniqueEntityID } from "../../Shared/domain/UniqueEntityID";
import { MessageDto } from "./MessageDto";
import { MessageId } from "./MessageId";

type MessageProps = {
  roomId: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export class Message extends AggregateRoot<MessageProps> {
  get MessageId(): MessageId {
    return MessageId.create(this._id);
  }

  get roomId(): string {
    return this.props.roomId;
  }

  get content(): string {
    return this.props.content;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  get deletedAt(): Date {
    return this.props.deletedAt;
  }

  private constructor(messageProps: MessageProps, id?: UniqueEntityID) {
    super(messageProps, id);
  }

  static create(messageProps: MessageProps, id?: UniqueEntityID) {
    const message = new Message(messageProps, id);
    return message;
  }

  toDto(): MessageDto {
    return {
      id: this.MessageId.id.toString(),
      content: this.content,
      roomId: this.roomId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}
