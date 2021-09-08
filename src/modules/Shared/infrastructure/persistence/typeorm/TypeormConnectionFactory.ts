import { Connection, createConnection, ConnectionOptions } from "typeorm";

export class TypeormConnectionFactory {
  private static connections: { [key: string]: Connection } = {};

  static create = async (contextName: string, config: ConnectionOptions) => {
    let connection = TypeormConnectionFactory.getConnection(contextName);

    if (!connection) {
      connection = await TypeormConnectionFactory.createConnection(config);
    }

    return connection;
  };

  private static getConnection(contextName: string): Connection {
    return TypeormConnectionFactory.connections[contextName];
  }

  private static async createConnection(config: ConnectionOptions): Promise<Connection> {
    const connection = await createConnection(config);

    return connection;
  }
}
