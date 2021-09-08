import { DeleteMessageResponse } from "../../../Shared/domain/types";
import { DeleteMessageOutputData, DeleteMessagePresenter } from "../../domain/interface/presenter";

import { toGqlMessage } from "./utils/converter/message";

export class GqlDeleteMessagePresenter implements DeleteMessagePresenter {
  private response: DeleteMessageResponse | null = null;

  public getResponse() {
    return this.response;
  }

  public async output(response: DeleteMessageOutputData) {
    this.response = {
      message: toGqlMessage(response.message),
    };
  }
}