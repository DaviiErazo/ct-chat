import { Message } from "../../../../../Shared/domain/types";
import { MessageDto } from "../../../../domain/MessageDto";

export const toGqlMessage = (message: MessageDto | null | undefined): Message | null => {
  if (!message) return null;
  return {
    id: message.id,
    roomId: message.roomId,
    content: message.content,
    createdAt: message.createdAt,
    updatedAt: message.updatedAt,
  };
};
