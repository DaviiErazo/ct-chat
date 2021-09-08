import { CreateMessageResponse } from "../../../Shared/domain/types";
import { CreateMessageOutputData, CreateMessagePresenter } from "../../domain/interface/presenter";

import { toGqlMessage } from "./utils/converter/message";

export class GqlCreateMessagePresenter implements CreateMessagePresenter {
  private response: CreateMessageResponse | null = null;

  public getResponse() {
    return this.response;
  }

  public async output(response: CreateMessageOutputData) {
    this.response = {
      message: toGqlMessage(response.message),
    };
  }
}
