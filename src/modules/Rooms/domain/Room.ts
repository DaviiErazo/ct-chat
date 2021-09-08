import { AggregateRoot } from "../../Shared/domain/AggregateRoot";
import { UniqueEntityID } from "../../Shared/domain/UniqueEntityID";
import { RoomId } from "./RoomId";

type RoomProps = {
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export class Room extends AggregateRoot<RoomProps> {
  get RoomId(): RoomId {
    return RoomId.create(this._id);
  }

  get name(): string {
    return this.props.name;
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

  private constructor(roomProps: RoomProps, id?: UniqueEntityID) {
    super(roomProps, id);
  }

  static create(roomProps: RoomProps, id?: UniqueEntityID) {
    const room = new Room(roomProps, id);
    return room;
  }

  toDto() {
    return {
      id: this.RoomId.id.toString(),
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}
