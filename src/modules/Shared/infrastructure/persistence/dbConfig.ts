import { ConnectionOptions } from "typeorm";
import { Message } from "../../../Messages/infrastructure/persistence/typeorm/entity/Message";
import { Room } from "../../../Rooms/infrastructure/persistence/typeorm/entity/Room";

export class DbConfig {
  static createConfig(): ConnectionOptions {
    return {
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "docker",
      password: "docker",
      database: "graphql-rooms",
      entities: [Message, Room],
      synchronize: false,
      logging: false,
    };
  }
}
