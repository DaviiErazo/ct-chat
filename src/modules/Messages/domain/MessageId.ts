import { Entity } from "../../Shared/domain/Entity";
import { UniqueEntityID } from "../../Shared/domain/UniqueEntityID";

export class MessageId extends Entity<any> {
  get id(): UniqueEntityID {
    return this._id;
  }

  private constructor(id?: UniqueEntityID) {
    super(null, id);
  }

  public static create(id?: UniqueEntityID): MessageId {
    return new MessageId(id);
  }
}
