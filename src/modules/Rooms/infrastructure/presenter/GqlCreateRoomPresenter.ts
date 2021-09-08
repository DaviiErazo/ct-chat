import { CreateRoomResponse } from "../../../Shared/domain/types";
import { CreateRoomOutputData, CreateRoomPresenter } from "../../domain/interface/presenter";

import { toGqlRoom } from "./utils/converter/room";

export class GqlCreateRoomPresenter implements CreateRoomPresenter {
  private response: CreateRoomResponse | null = null;

  public getResponse() {
    return this.response;
  }

  public async output(response: CreateRoomOutputData) {
    this.response = {
      room: toGqlRoom(response.room),
    };
  }
}
