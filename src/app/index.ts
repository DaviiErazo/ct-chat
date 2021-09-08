import container from "./dependency-injection";
import { createApolloServer } from "../modules/Shared/infrastructure/apolloServer";
import { createExpressApp, createHttpServer, runHttpServer } from "../modules/Shared/infrastructure/express";
import { CommandBus } from "../modules/Shared/domain/CommandBus";
import { QueryBus } from "../modules/Shared/domain/QueryBus";
import { PubSub } from 'graphql-subscriptions';

const port = process.env.PORT || 5000;

const bootstrap = async () => {
  const expressApp = createExpressApp();
  const httpServer = createHttpServer(expressApp);

  const commandBus = container.get("Shared.CommandBus") as CommandBus;
  const queryBus = container.get("Shared.QueryBus") as QueryBus;
  const pubSub = new PubSub();
  
  const buses = { commandBus, queryBus, pubSub };

  createApolloServer({ expressApp, httpServer, buses });
  runHttpServer(httpServer, port);
};

bootstrap();
