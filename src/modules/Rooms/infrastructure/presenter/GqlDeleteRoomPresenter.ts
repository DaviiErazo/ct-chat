import { DeleteRoomResponse } from "../../../Shared/domain/types";
import { DeleteRoomOutputData, DeleteRoomPresenter } from "../../domain/interface/presenter";

import { toGqlRoom } from "./utils/converter/room";

export class GqlDeleteRoomPresenter implements DeleteRoomPresenter {
  private response: DeleteRoomResponse | null = null;

  public getResponse() {
    return this.response;
  }

  public async output(response: DeleteRoomOutputData) {
    this.response = {
      room: toGqlRoom(response.room),
    };
  }
}
