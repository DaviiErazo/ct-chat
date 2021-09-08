import { createRoom } from "./createRoom";
import { deleteRoom } from "./deleteRoom";

export const Mutation = { ...createRoom, ...deleteRoom };
