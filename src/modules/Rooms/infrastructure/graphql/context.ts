import { CommandBus } from "../../../Shared/domain/CommandBus";
import { QueryBus } from "../../../Shared/domain/QueryBus";

export interface ApolloServerContext {
  commandBus?: CommandBus;
  queryBus?: QueryBus;
}
