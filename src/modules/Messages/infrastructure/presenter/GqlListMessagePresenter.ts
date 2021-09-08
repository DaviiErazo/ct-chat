import { ListMessageResponse } from "../../../Shared/domain/types";
import { ListMessageOutputData, ListMessagePresenter } from "../../domain/interface/presenter";

import { toGqlMessage } from "./utils/converter/message";

export class GqlListMessagePresenter implements ListMessagePresenter {
  private response: ListMessageResponse | null = null;

  public getResponse() {
    return this.response;
  }

  public async output(response: ListMessageOutputData) {
    this.response = {
      messages: response.messages.map((message) => toGqlMessage(message)),
    };
  }
}
