import { createMessage } from "./createMessage";
import { deleteMessage } from "./deleteMessage";

export const Mutation = { ...createMessage, ...deleteMessage };
