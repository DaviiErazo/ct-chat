import { Express } from "express";
import { Server } from "http";
import { ApolloServer } from "apollo-server-express";
import { addResolversToSchema, mergeSchemas } from "@graphql-tools/schema";
import { execute, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { PubSub } from "graphql-subscriptions";

import { resolvers as roomResolvers } from "../../../Rooms/infrastructure/graphql/resolvers";
import { resolvers as messageResolvers } from "../../../Messages/infrastructure/graphql/resolvers";
import { CommandBus } from "../../domain/CommandBus";
import { QueryBus } from "../../domain/QueryBus";
import { loadSchema } from "./loadSchema";

type ApolloServerProps = {
  expressApp: Express;
  httpServer: Server;
  buses: Buses;
};

type Buses = {
  commandBus?: CommandBus;
  queryBus?: QueryBus;
  pubSub: PubSub;
};

export const createApolloServer = async (props: ApolloServerProps): Promise<ApolloServer> => {
  const { expressApp, httpServer, buses } = props;

  const roomPath = "../../../Rooms/infrastructure/graphql/schema/Room.graphql";
  const messagePath = "../../../Messages/infrastructure/graphql/schema/Message.graphql";

  const roomSchema = loadSchema(roomPath);
  const messageSchema = loadSchema(messagePath);

  const roomSchemaWithResolvers = addResolversToSchema({
    schema: roomSchema,
    resolvers: roomResolvers,
  });

  const messageSchemaWithResolvers = addResolversToSchema({
    schema: messageSchema,
    resolvers: messageResolvers,
  });

  const schemas = mergeSchemas({ schemas: [roomSchemaWithResolvers, messageSchemaWithResolvers] });

  const subscriptionServer = SubscriptionServer.create(
    {
      schema: schemas,
      rootValue: buses,
      execute,
      subscribe,
    },
    { server: httpServer, path: "/subscriptions" }
  );

  const server = new ApolloServer({
    schema: schemas,
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
    context: buses,
  });

  await server.start();
  server.applyMiddleware({ app: expressApp });
  return server;
};
