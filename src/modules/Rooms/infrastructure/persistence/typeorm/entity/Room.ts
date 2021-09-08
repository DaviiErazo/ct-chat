import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn
} from "typeorm";

import { Room as RoomEntity } from "../../../../domain/Room";
import { Message } from "../../../../../Messages/infrastructure/persistence/typeorm/entity/Message";
import { RoomDto } from "../../../../domain/RoomDto";
import { UniqueEntityID } from "../../../../../Shared/domain/UniqueEntityID";

@Entity("rooms")
export class Room {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Message, (message) => message.roomId)
  messages?: Message[];
  
  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  @DeleteDateColumn()
  readonly deletedAt?: Date;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}


export class OrmRoomFactory {
  public static fromDto(room: RoomDto): Room {
    return {
      id: room.id,
      name: room.name,
      createdAt: room.createdAt ?? undefined,
      updatedAt: room.updatedAt ?? undefined,
      deletedAt: room.deletedAt ?? undefined,
    };
  }

  public static fromEntity(roomEntity: RoomEntity) {
    const roomSchema = roomEntity.toDto();
    return OrmRoomFactory.fromDto(roomSchema);
  }

  public static toDto(room: Room): RoomDto {
    return {
      id: room.id,
      name: room.name,
      createdAt: room.createdAt,
      updatedAt: room.updatedAt,
      deletedAt: room.deletedAt,
    };
  }

  public static toEntity(room: Room): RoomEntity {
    const schema = OrmRoomFactory.toDto(room);
    const id = new UniqueEntityID(room.id);

    return RoomEntity.create(schema, id);
  }
}