import { MessageDto } from "../MessageDto";

export type CreateMessageOutputData = {
  message: MessageDto | null;
};

export interface CreateMessagePresenter {
  output(response: CreateMessageOutputData): void;
}

export type DeleteMessageOutputData = {
  message: MessageDto | null;
};

export interface DeleteMessagePresenter {
  output(response: DeleteMessageOutputData): void;
}

export type ListMessageOutputData = {
  messages: MessageDto[] | null;
};

export interface ListMessagePresenter {
  output(response: ListMessageOutputData): void;
}
