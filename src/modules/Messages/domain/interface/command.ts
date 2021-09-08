import { ModelSortDirection } from "../../../Shared/domain/types";

export type CreateMessageInputData = {
  roomId: string;
  content: string;
};

export type DeleteMessageInputData = {
  id: string;
};

export type ListMessageInputData = {
  sortDirection: ModelSortDirection;
  limit: number;
  page: number;
};
