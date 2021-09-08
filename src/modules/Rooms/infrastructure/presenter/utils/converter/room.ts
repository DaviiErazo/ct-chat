import { Room } from "../../../../../Shared/domain/types";
import { RoomDto } from "../../../../domain/RoomDto";

export const toGqlRoom = (room: RoomDto | null | undefined): Room | null => {
  if (!room) return null;
  return {
    id: room.id,
    name: room.name,
    createdAt: room.createdAt,
    updatedAt: room.updatedAt,
  };
};
