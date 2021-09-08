import { RoomDto } from "../RoomDto";

export type CreateRoomOutputData = {
  room: RoomDto | null;
};

export interface CreateRoomPresenter {
  output(response: CreateRoomOutputData): void;
}

export type DeleteRoomOutputData = {
  room: RoomDto | null;
};

export interface DeleteRoomPresenter {
  output(response: DeleteRoomOutputData): void;
}