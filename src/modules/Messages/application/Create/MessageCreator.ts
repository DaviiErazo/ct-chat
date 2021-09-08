import { Message } from "../../domain/Message";
import { MessageRepository } from "../../domain/interface/MessageRepository";
import { RoomRepository } from "../../../Rooms/domain/interface/RoomRepository";
import { NotExists } from "../../../Shared/domain/error/NotExists";

export class MessageCreator {
  private messageRepository: MessageRepository;
  private roomRepository: RoomRepository;

  constructor(messageRepository: MessageRepository, roomRepository: RoomRepository) {
    this.messageRepository = messageRepository;
    this.roomRepository = roomRepository;
  }

  async run(message: Message): Promise<Message> {
    const roomId = message.roomId;
    const exists = await this.roomRepository.exists(roomId);

    if (!exists) throw new NotExists("Room", roomId);

    const response = await this.messageRepository.save(message);
    return response;
  }
}
